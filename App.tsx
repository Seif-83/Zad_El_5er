
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Category, Product } from './types';
import { SITE_INFO, PRODUCTS } from './constants';
import { getHerbalBenefits } from './services/gemini';

// Custom hook for intersection observer animations
const useIntersectionObserver = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

// --- Sub-components ---

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-sky-900 font-serif-ar">{SITE_INFO.name}</h1>
      </div>
      <div className="hidden md:flex gap-6 text-sky-800 font-medium">
        <a href="#menu" className="hover:text-sky-600 transition-colors">القائمة</a>
        <a href="#offers" className="hover:text-sky-600 transition-colors">العروض</a>
        <a href="#contact" className="hover:text-sky-600 transition-colors">اتصل بنا</a>
        <a href="#" className="hover:text-sky-600 transition-colors">( التوصيل مجانا )</a>
      </div>
      <a
        href={`https://wa.me/${SITE_INFO.whatsapp.replace(/\s+/g, '')}?text=مرحباً، أود الاستفسار عن منتجات زاد الخير.`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-105"
      >
        <span>اطلب الآن</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.459 3.419 1.261 4.864L2 22l5.306-1.394c1.402.766 2.997 1.201 4.706 1.201 5.508 0 9.987-4.479 9.987-9.987 0-5.508-4.479-9.987-9.987-9.987zm0 18.281c-1.574 0-3.051-.418-4.329-1.149l-.31-.178-3.21.843.858-3.132-.196-.312c-.799-1.278-1.221-2.759-1.221-4.347 0-4.571 3.72-8.291 8.291-8.291s8.291 3.72 8.291 8.291-3.72 8.291-8.291 8.291zm4.545-6.205c-.249-.125-1.472-.725-1.7-.808-.228-.083-.393-.125-.558.125-.165.249-.64.808-.784.974-.145.165-.29.186-.538.061s-1.049-.387-1.998-1.234c-.738-.658-1.236-1.471-1.381-1.72-.145-.249-.015-.384.109-.508.113-.111.249-.29.373-.435.125-.145.165-.249.249-.415.083-.165.041-.31-.021-.435s-.558-1.346-.764-1.843c-.2-.486-.403-.419-.558-.427-.144-.007-.31-.009-.476-.009s-.435.062-.662.31-.868.849-.868 2.071c0 1.221.889 2.402.993 2.547.104.145 1.75 2.673 4.239 3.745.592.255 1.054.408 1.414.523.595.189 1.137.162 1.565.098.477-.072 1.472-.601 1.679-1.181.206-.579.206-1.076.145-1.181-.062-.104-.228-.166-.476-.291z" /></svg>
      </a>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative h-[45vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="زاد الخير.jpg"
        alt="Spice market background"
        className="w-full h-full object-cover object-center blur-sm scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-4xl px-4 text-center md:text-right hero-fade-in">
      <span className="inline-block bg-sky-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
        أهلاً بكم في عالم الألبان
      </span>
      <h2 className="text-4xl md:text-6xl font-bold text-white font-serif-ar mb-6 leading-tight">
        أجود أنواع المستلزمات المنزلية <br className="hidden md:block" />
        بين يديك في <span className="text-sky-400" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 1)' }}>زاد الخير</span>
      </h2>
      <p className="text-xl text-sky-50 font-light mb-8 max-w-2xl">
        {SITE_INFO.slogan}
      </p>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <a href="#menu" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:-translate-y-1">
          تصفح القائمة
        </a>
        <a href="#offers" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg font-bold transition-all">
          العروض الحالية
        </a>
      </div>
    </div>
  </section>
);

const ProductModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
  const [benefits, setBenefits] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchBenefits = async () => {
      setLoading(true);
      const data = await getHerbalBenefits(product.name);
      if (isMounted) {
        setBenefits(data);
        setLoading(false);
      }
    };
    fetchBenefits();
    return () => { isMounted = false; };
  }, [product.name]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-64">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full text-sky-900 shadow-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-sky-600 text-sm font-bold uppercase tracking-wider">{product.category}</span>
              <h3 className="text-3xl font-bold text-sky-900 font-serif-ar mt-1">{product.name}</h3>
            </div>
            <div className="text-left">
              <span className="block text-2xl font-bold text-sky-700">{product.price} ج.م</span>
              <span className="text-sm text-gray-500">لكل {product.unit}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6 text-lg">{product.description}</p>

          <div className="bg-sky-50 rounded-xl p-5 border border-sky-100">
            <h4 className="font-bold text-sky-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"></path></svg>
              معلومات وفوائد (بواسطة AI)
            </h4>
            {loading ? (
              <div className="flex gap-2 items-center text-sky-600 animate-pulse">
                <div className="w-2 h-2 bg-sky-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-sky-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-sky-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                <span>جاري استخراج الفوائد...</span>
              </div>
            ) : (
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {benefits}
              </div>
            )}
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp.replace(/\s+/g, '')}?text=أريد طلب ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-4 rounded-xl font-bold text-lg transition-all"
            >
              اطلب عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => (
  <div
    className="group bg-white rounded-2xl overflow-hidden border border-sky-50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 card-fade-in"
    onClick={onClick}
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {product.isOffer && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          عرض خاص
        </div>
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-white text-sky-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">التفاصيل والفوائد</span>
      </div>
    </div>
    <div className="p-4">
      <span className="text-sky-600 text-[10px] font-bold uppercase">{product.category}</span>
      <h3 className="text-lg font-bold text-sky-900 mb-1 group-hover:text-sky-700 transition-colors duration-300">{product.name}</h3>
      <div className="flex items-end justify-between mt-4">
        <div>
          {product.oldPrice && (
            <span className="block text-xs text-gray-400 line-through mb-1">{product.oldPrice} ج.م</span>
          )}
          <span className="text-xl font-bold text-sky-800">{product.price} ج.م</span>
          <span className="text-[10px] text-gray-400 mr-1">/ {product.unit}</span>
        </div>
        <button className="bg-sky-100 text-sky-900 p-2 rounded-lg group-hover:bg-sky-800 group-hover:text-white transition-colors duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
        </button>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'الكل'>('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const offersRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [offersVisible, setOffersVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  // Setup intersection observers for sections
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observerCallback = (setter: (value: boolean) => void) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setter(true);
        }
      });
    };

    const offersObserver = new IntersectionObserver(observerCallback(setOffersVisible), observerOptions);
    const menuObserver = new IntersectionObserver(observerCallback(setMenuVisible), observerOptions);
    const footerObserver = new IntersectionObserver(observerCallback(setFooterVisible), observerOptions);

    if (offersRef.current) offersObserver.observe(offersRef.current);
    if (menuRef.current) menuObserver.observe(menuRef.current);
    if (footerRef.current) footerObserver.observe(footerRef.current);

    return () => {
      if (offersRef.current) offersObserver.unobserve(offersRef.current);
      if (menuRef.current) menuObserver.unobserve(menuRef.current);
      if (footerRef.current) footerObserver.unobserve(footerRef.current);
    };
  }, []);

  const categories = ['الكل', ...Object.values(Category)];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'الكل' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [activeCategory, searchQuery]);

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const offers = useMemo(() => PRODUCTS.filter(p => p.isOffer), []);

  return (
    <div className="min-h-screen bg-sky-50 selection:bg-sky-200 selection:text-sky-900">
      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #f0f9ff;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #0ea5e9;
          border-radius: 6px;
          border: 3px solid #f0f9ff;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #0284c7;
        }
      `}</style>
      <Header />

      <Hero />

      {/* Featured Offers */}
      {offers.length > 0 && (
        <section
          ref={offersRef}
          id="offers"
          className={`py-16 bg-sky-900 overflow-hidden relative transition-all duration-1000 ${offersVisible ? 'section-fade-in' : 'opacity-0'}`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-800/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-800/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-white font-serif-ar">عروض التوفير الكبرى</h2>
                <p className="text-sky-200 mt-2">عروض حصرية لفترة محدودة</p>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-1 bg-sky-500"></div>
                <div className="w-6 h-1 bg-sky-700"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.slice(0, 3).map((offer, index) => (
                <div
                  key={offer.id}
                  style={{
                    animation: offersVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                    animationDelay: offersVisible ? `${index * 0.15}s` : '0s',
                  }}
                  className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex gap-6 items-center group cursor-pointer transition-all duration-300 hover:bg-white/20 ${offersVisible ? '' : 'opacity-0'}`}
                  onClick={() => setSelectedProduct(offer)}
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                    <img src={offer.image} alt={offer.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{offer.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-sky-400">{offer.price} ج.م</span>
                      <span className="text-sm text-white/50 line-through">{offer.oldPrice} ج.م</span>
                    </div>
                    <button className="mt-4 text-sky-200 text-sm font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                      احصل على العرض
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Menu Section */}
      <section
        ref={menuRef}
        id="menu"
        className={`py-20 max-w-7xl mx-auto px-4 transition-all duration-1000 ${menuVisible ? 'section-fade-in' : 'opacity-0'}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sky-900 font-serif-ar mb-4">قائمة منتجاتنا</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 bg-white p-4 rounded-2xl shadow-sm border border-sky-50">
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="ابحث عن البيض، الجبن، المربى..."
              className="w-full bg-sky-50 border-none rounded-xl py-3 px-12 focus:ring-2 focus:ring-sky-500 transition-all text-sky-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="w-6 h-6 text-sky-400 absolute right-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`whitespace-nowrap px-6 py-2 rounded-xl font-bold transition-all ${activeCategory === cat
                  ? 'bg-sky-800 text-white shadow-md'
                  : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              style={{
                animation: menuVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                animationDelay: menuVisible ? `${index * 0.05}s` : '0s',
              }}
              className={menuVisible ? '' : 'opacity-0'}
            >
              <ProductCard
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="bg-white border border-sky-200 text-sky-800 px-8 py-3 rounded-xl font-bold hover:bg-sky-50 transition-all hover:shadow-md active:scale-95 flex items-center gap-2 mx-auto"
            >
              <span>عرض المزيد</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sky-600">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-sky-900">عذراً، لم نجد ما تبحث عنه</h3>
            <p className="text-gray-500 mt-2">جرب البحث بكلمة أخرى أو تغيير الفئة</p>
          </div>
        )}
      </section>

      {/* Footer / Contact */}
      <footer
        ref={footerRef}
        id="contact"
        className={`bg-sky-950 text-white py-16 transition-all duration-1000 ${footerVisible ? 'section-fade-in' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold font-serif-ar mb-6">{SITE_INFO.name}</h3>
              <p className="text-sky-200/70 mb-6 leading-relaxed">
                وجهتكم الأولى. نحن نفخر بتقديم منتجات نقية 100% مختارة بعناية لتناسب ذوقكم الرفيع.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/188CJPMyED/?mibextid=wwXIfr" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-sky-600 rounded-full"></span>
                تواصل معنا
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <span className="block text-sm text-sky-200/50">العنوان</span>
                    <span className="text-sky-50">{SITE_INFO.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <span className="block text-sm text-sky-200/50">الهاتف</span>
                    <span className="text-sky-50" dir="ltr">{SITE_INFO.phone}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.459 3.419 1.261 4.864L2 22l5.306-1.394c1.402.766 2.997 1.201 4.706 1.201 5.508 0 9.987-4.479 9.987-9.987 0-5.508-4.479-9.987-9.987-9.987zm0 18.281c-1.574 0-3.051-.418-4.329-1.149l-.31-.178-3.21.843.858-3.132-.196-.312c-.799-1.278-1.221-2.759-1.221-4.347 0-4.571 3.72-8.291 8.291-8.291s8.291 3.72 8.291 8.291-3.72 8.291-8.291 8.291zm4.545-6.205c-.249-.125-1.472-.725-1.7-.808-.228-.083-.393-.125-.558.125-.165.249-.64.808-.784.974-.145.165-.29.186-.538.061s-1.049-.387-1.998-1.234c-.738-.658-1.236-1.471-1.381-1.72-.145-.249-.015-.384.109-.508.113-.111.249-.29.373-.435.125-.145.165-.249.249-.415.083-.165.041-.31-.021-.435s-.558-1.346-.764-1.843c-.2-.486-.403-.419-.558-.427-.144-.007-.31-.009-.476-.009s-.435.062-.662.31-.868.849-.868 2.071c0 1.221.889 2.402.993 2.547.104.145 1.75 2.673 4.239 3.745.592.255 1.054.408 1.414.523.595.189 1.137.162 1.565.098.477-.072 1.472-.601 1.679-1.181.206-.579.206-1.076.145-1.181-.062-.104-.228-.166-.476-.291z" /></svg>
                  </div>
                  <div>
                    <span className="block text-sm text-sky-200/50">واتساب</span>
                    <span className="text-sky-50" dir="ltr">{SITE_INFO.whatsapp}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-sky-600 rounded-full"></span>
                روابط سريعة
              </h4>
              <ul className="space-y-4 text-sky-200/70">
                <li><a href="#menu" className="hover:text-sky-400 transition-colors">قائمة المنتجات</a></li>
                <li><a href="#offers" className="hover:text-sky-400 transition-colors">العروض</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-sky-200/30">
            &copy; {new Date().getFullYear()} زاد الخير. جميع الحقوق محفوظة. تم التطوير بشغف.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button (Mobile) */}
      <a
        href={`https://wa.me/${SITE_INFO.whatsapp.replace(/\s+/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 left-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl animate-pulse"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.459 3.419 1.261 4.864L2 22l5.306-1.394c1.402.766 2.997 1.201 4.706 1.201 5.508 0 9.987-4.479 9.987-9.987 0-5.508-4.479-9.987-9.987-9.987zm0 18.281c-1.574 0-3.051-.418-4.329-1.149l-.31-.178-3.21.843.858-3.132-.196-.312c-.799-1.278-1.221-2.759-1.221-4.347 0-4.571 3.72-8.291 8.291-8.291s8.291 3.72 8.291 8.291-3.72 8.291-8.291 8.291zm4.545-6.205c-.249-.125-1.472-.725-1.7-.808-.228-.083-.393-.125-.558.125-.165.249-.64.808-.784.974-.145.165-.29.186-.538.061s-1.049-.387-1.998-1.234c-.738-.658-1.236-1.471-1.381-1.72-.145-.249-.015-.384.109-.508.113-.111.249-.29.373-.435.125-.145.165-.249.249-.415.083-.165.041-.31-.021-.435s-.558-1.346-.764-1.843c-.2-.486-.403-.419-.558-.427-.144-.007-.31-.009-.476-.009s-.435.062-.662.31-.868.849-.868 2.071c0 1.221.889 2.402.993 2.547.104.145 1.75 2.673 4.239 3.745.592.255 1.054.408 1.414.523.595.189 1.137.162 1.565.098.477-.072 1.472-.601 1.679-1.181.206-.579.206-1.076.145-1.181-.062-.104-.228-.166-.476-.291z" /></svg>
      </a>

      {/* Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
