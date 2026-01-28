
import { Category, Product, SiteInfo } from './types';

export const SITE_INFO: SiteInfo = {
  name: "زاد الخير",
  slogan: "أصالة الماضي وجودة الحاضر في منتجاتنا",
  phone: "+20 1280079199",
  whatsapp: "+20 10 21825314",
  address: "الأسكندرية العجمي"
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'زيتون مشوي',
    category: Category.Pickles,
    price: 200,
    unit: '1 كيلو ',
    description: 'زيتون مشوي محضر بعناية فائقة بنكهة مميزة.',
    image: 'images/زيتون مشوي.jpeg'
  },
  {
    id: '2',
    name: 'خيار أشه',
    category: Category.Pickles,
    price: 170,
    unit: '1 كيلو ',
    description: 'كمون مغسول ومنقى بعناية فائقة.',
    image: 'images/خيار أشه.jpeg'
  },
  {
    id: '3',
    name: 'زيتون دولسي',
    category: Category.Pickles,
    price: 130,
    unit: '1 كيلو ',
    description: 'زيتون دولسي طازج ذو جودة عالية وطعم لذيذ.',
    image: 'images/زيتون دولسي.jpeg'
  },
  {
    id: '4',
    name: 'زيتون اسباني',
    category: Category.Pickles,
    price: 160,
    unit: '1 كيلو ',
    description: 'زيتون اسباني مميز بنكهة غنية وجودة ممتازة.',
    image: 'images/زيتون اسباني.jpeg'
  },
  {
    id: '5',
    name: 'بصل مخلل',
    category: Category.Pickles,
    price: 75,
    unit: '1 كيلو ',
    description: 'بصل مخلل طازج ومقرمش، مثالي للإضافات على الوجبات.',
    image: 'images/بصل مخلل.jpeg'
  },
  {
    id: '6',
    name: 'زيتون محبش',
    category: Category.Pickles,
    price: 140,
    unit: '1 كيلو ',
    description: 'زيتون محبش طازج ذو نكهة مميزة وجودة عالية.',
    image: 'images/زيتون محبش.jpeg'
  },
  {
    id: '7',
    name: 'زيتون شرائح',
    category: Category.Pickles,
    price: 140,
    unit: '1 كيلو ',
    description: 'زيتون شرائح طازج ذو نكهة مميزة وجودة عالية.',
    image: 'images/زيتون شرائح.jpeg'
  },
  {
    id: '8',
    name: 'مصر كافيه',
    category: Category.Beverage,
    price: 105,
    unit: '50 جرام',
    description: 'قهوة مصرية بالنكهة الأصيلة.',
    image: 'images/مصر كافيه.jpeg'
  },
  {
    id: '9',
    name: 'فول مدمس سادة',
    category: Category.Canned_food,
    price: 20,
    unit: '23 جرام بروتين',
    description: 'فول مدمس سادة عالي الجودة ومصدر ممتاز للبروتين.',
    image: 'images/فول مدمس سادة.jpeg'
  },
  {
    id: '10',
    name: 'مربي فيتراك',
    category: Category.jam,
    price: 26,
    unit: 'برطمان',
    description: 'مربي طبيعي بنكهة الفواكه الطازجة.',
    image: 'images/مربي.jpeg'
  },
  {
    id: '11',
    name: 'مربى كريمي',
    category: Category.jam,
    price: 45,
    unit: 'برطمان',
    description: 'مربى كريمي بنكهة غنية وقوام ناعم.',
    image: 'images/مربي كريمي.jpeg'
  },
  {
    id: '12',
    name: 'عسل مجدي',
    category: Category.honey,
    price: 50,
    unit: 'برطمان',
    description: 'عسل طبيعي 100% ذو جودة عالية وطعم لذيذ.',
    image: 'images/عسل مجدي.jpeg'
  },
  {
    id: '13',
    name: 'طحينة البوادي',
    category: Category.Tahini,
    price: 58,
    unit: 'برطمان',
    description: 'طحينة ناعمة مصنوعة من أجود أنواع السمسم.',
    image: 'images/طحينة.jpeg'
  },
  {
    id: '14',
    name: 'تونة صن شاين',
    category: Category.Tuna,
    price: 65,
    unit: 'علبة',
    description: 'تونة عالية الجودة بنكهة لذيذة ومغذية.',
    image: 'images/تونة.jpeg'
  },
  {
    id: '15',
    name: 'عسل بالمكسرات',
    category: Category.Nuts,
    price: 150,
    unit: 'برطمان',
    description: 'عسل طبيعي مع مزيج من المكسرات الفاخرة.',
    image: 'images/عسل بالمكسرات.jpeg'
  },
  {
    id: '16',
    name: 'مربى كريمي',
    category: Category.jam,
    price: 45,
    unit: 'برطمان',
    description: 'مربى كريمي بنكهة غنية وقوام ناعم.',
    image: 'images/مربي كريمي.jpeg'
  },
  {
    id: '17',
    name: 'ارز البرنجي',
    category: Category.rice,
    price: 25,
    unit: '1 كيلو ',
    description: 'أرز برنجي عالي الجودة، مثالي لجميع الأطباق.',
    image: 'images/ارز البرنجي.jpeg'
  },
  {
    id: '18',
    name: 'زيت قليه',
    category: Category.Oils,
    price: 75,
    unit: 'ليتر',
    description: 'زيت قليه صحي وخفيف، مناسب لجميع أنواع القلي.',
    image: 'images/زيت قليه.jpeg'
  },
  {
    id: '19',
    name: 'تركي بطارخ',
    category: Category.Cheese,
    price: 65,
    unit: 'ربع كيلو',
    description: 'تركي بطارخ طازج ذو نكهة مميزة وجودة عالية.',
    image: 'images/تركي بطارخ.jpeg'
  },
  {
    id: '20',
    name: 'سكر الكرم',
    category: Category.Sugar,
    price: 25,
    unit: 'كيلو 1',
    description: 'سكر نقي عالي الجودة للاستخدام اليومي.',
    image: 'images/سكر الكرم.jpeg'
  },
  {
    id: '21',
    name: 'مربى البوادي مشمش',
    category: Category.jam,
    price: 32,
    unit: 'برطمان',
    description: 'مربى مشمش طبيعي بنكهة الفواكه الطازجة.',
    image: 'images/مربي البوادي مشمش.jpeg'
  },
  {
    id: '22',
    name: 'بيض بلدي',
    category: Category.Eggs,
    price: 125,
    unit: 'كرتونة',
    description: 'بيض بلدي طازج عالي الجودة من مزارع محلية.',
    image: 'images/بيض.jpeg',
    isOffer: true,
    oldPrice: 140
  },
  {
    id: '23',
    name: 'لانشون حلواني',
    category: Category.Luncheon,
    price: 75,
    unit: 'ربع كيلو',
    description: 'لانشون حلواني طازج ولذيذ، مثالي للسندويشات والوجبات الخفيفة.',
    image: 'images/لانشون حلواني.jpeg'
  },
  {
    id: '24',
    name: 'جبنه حمراء',
    category: Category.Cheese,
    price: 130,
    unit: 'ربع كيلو',
    description: 'جبنة حمراء طازجة ذات نكهة غنية وقوام مثالي.',
    image: 'images/جبنه حمراء.jpeg'
  }
];
