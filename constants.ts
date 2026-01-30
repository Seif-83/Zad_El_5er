
import { Category, Product, SiteInfo } from './types';

export const SITE_INFO: SiteInfo = {
  name: " ( التوصيل مجانا ) زاد الخير",
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
    name: 'بيض احمر و ابيض',
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
  },
  {
    id: '25',
    name: 'سمنة جنة الصفراء',
    category: Category.Oils,
    price: 100,
    unit: 'عبوة',
    description: 'سمنة جنة الصفراء عالية الجودة.',
    image: 'images/سمنة جنة الصفراء.jpeg'
  },
  {
    id: '26',
    name: 'سمنة روابي طعم القشطة',
    category: Category.Oils,
    price: 100,
    unit: 'عبوة',
    description: 'سمنة روابي بطعم القشطة الفلاحي.',
    image: 'images/سمنة روابي طعم القشطة.jpeg'
  },
  {
    id: '27',
    name: 'سمنة روابي',
    category: Category.Oils,
    price: 100,
    unit: 'عبوة',
    description: 'سمنة روابي الأصلية.',
    image: 'images/سمنة روابي.jpeg'
  },
  {
    id: '28',
    name: 'سمنة كريستال',
    category: Category.Oils,
    price: 100,
    unit: 'عبوة',
    description: 'سمنة كريستال بيضاء ونقية.',
    image: 'images/سمنة كريستال.jpeg'
  },
  {
    id: '29',
    name: 'سمنة نيوزيلندي',
    category: Category.Oils,
    price: 150,
    unit: 'عبوة',
    description: 'سمنة نيوزيلندي فاخرة.',
    image: 'images/سمنة نيوزيلندي.jpeg'
  },
  {
    id: '30',
    name: 'معطر فريدا',
    category: Category.Detergents,
    price: 50,
    unit: 'عبوة',
    description: 'معطر جو فريدا برائحة منعشة.',
    image: 'images/معطر فريدا.jpeg'
  },
  {
    id: '31',
    name: 'مناديل زينا',
    category: Category.Detergents,
    price: 25,
    unit: 'عبوة',
    description: 'مناديل ورقية زينا ناعمة وقوية.',
    image: 'images/مناديل زينا.jpeg'
  },
  {
    id: '32',
    name: 'مناديل فاميليا',
    category: Category.Detergents,
    price: 30,
    unit: 'عبوة',
    description: 'مناديل فاميليا الاقتصادية.',
    image: 'images/مناديل فاميليا.jpeg'
  },
  {
    id: '33',
    name: 'مناديل ويت',
    category: Category.Detergents,
    price: 20,
    unit: 'عبوة',
    description: 'مناديل مبللة ويت.',
    image: 'images/مناديل ويت.jpeg'
  },
  {
    id: '34',
    name: 'منظف اوكسي',
    category: Category.Detergents,
    price: 60,
    unit: 'عبوة',
    description: 'مسحوق غسيل اوكسي بقوة الأكسجين.',
    image: 'images/منظف اوكسي.jpeg'
  },
  {
    id: '35',
    name: 'منظف بريل',
    category: Category.Detergents,
    price: 35,
    unit: 'عبوة',
    description: 'سائل تنظيف الأطباق بريل.',
    image: 'images/منظف بريل.jpeg'
  },
  {
    id: '36',
    name: 'منظف سيترس',
    category: Category.Detergents,
    price: 55,
    unit: 'عبوة',
    description: 'منظف سيترس القوي لجميع الأغراض.',
    image: 'images/منظف سيترس.jpeg'
  },
  {
    id: '37',
    name: 'بهارات فراخ بدون اي اضافات',
    category: Category.Spices,
    price: 0,
    unit: 'عبوة',
    description: 'بهارات فراخ بدون اي اضافات',
    image: 'images/بهارات فراخ بدون اي اضافات.jpeg'
  },
  {
    id: '38',
    name: 'بيكنج بودر تاج الملوك',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'بيكنج بودر تاج الملوك',
    image: 'images/بيكنج بودر تاج الملوك.jpeg'
  },
  {
    id: '39',
    name: 'تتبيلة البطاطس',
    category: Category.Spices,
    price: 0,
    unit: 'عبوة',
    description: 'تتبيلة البطاطس',
    image: 'images/تتبيلة البطاطس.jpeg'
  },
  {
    id: '40',
    name: 'ثوم مفروم',
    category: Category.Spices,
    price: 0,
    unit: 'عبوة',
    description: 'ثوم مفروم',
    image: 'images/ثوم مفروم.jpeg'
  },
  {
    id: '41',
    name: 'جبنة ابو الولد',
    category: Category.Cheese,
    price: 0,
    unit: 'عبوة',
    description: 'جبنة ابو الولد',
    image: 'images/جبنة ابو الولد.jpeg'
  },
  {
    id: '42',
    name: 'جبنة المراعي',
    category: Category.Cheese,
    price: 0,
    unit: 'عبوة',
    description: 'جبنة المراعي',
    image: 'images/جبنة المراعي.jpeg'
  },
  {
    id: '43',
    name: 'جبنة دومتي بلس',
    category: Category.Cheese,
    price: 0,
    unit: 'عبوة',
    description: 'جبنة دومتي بلس',
    image: 'images/جبنة دومتي بلس.jpeg'
  },
  {
    id: '44',
    name: 'جبنة دومتي',
    category: Category.Cheese,
    price: 0,
    unit: 'عبوة',
    description: 'جبنة دومتي',
    image: 'images/جبنة دومتي.jpeg'
  },
  {
    id: '45',
    name: 'جبنة رودس',
    category: Category.Cheese,
    price: 0,
    unit: 'عبوة',
    description: 'جبنة رودس',
    image: 'images/جبنة رودس.jpeg'
  },
  {
    id: '46',
    name: 'جبنة عبورلاند',
    category: Category.Cheese,
    price: 0,
    unit: 'عبوة',
    description: 'جبنة عبورلاند',
    image: 'images/جبنة عبورلاند.jpeg'
  },
  {
    id: '47',
    name: 'جبنة لافاشكري',
    category: Category.Cheese,
    price: 0,
    unit: 'عبوة',
    description: 'جبنة لافاشكري',
    image: 'images/جبنة لافاشكري.jpeg'
  },
  {
    id: '48',
    name: 'جبنة مزارع دينا',
    category: Category.Cheese,
    price: 0,
    unit: 'عبوة',
    description: 'جبنة مزارع دينا',
    image: 'images/جبنة مزارع دينا.jpeg'
  },
  {
    id: '49',
    name: 'جبنة ميلكانا',
    category: Category.Cheese,
    price: 0,
    unit: 'عبوة',
    description: 'جبنة ميلكانا',
    image: 'images/جبنة ميلكانا.jpeg'
  },
  {
    id: '50',
    name: 'جيلي دريم',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'جيلي دريم',
    image: 'images/جيلي دريم.jpeg'
  },
  {
    id: '51',
    name: 'حليب المراعي',
    category: Category.Dairy,
    price: 0,
    unit: 'عبوة',
    description: 'حليب المراعي',
    image: 'images/حليب المراعي.jpeg'
  },
  {
    id: '52',
    name: 'حليب جهينة خالي الدسم',
    category: Category.Dairy,
    price: 0,
    unit: 'عبوة',
    description: 'حليب جهينة خالي الدسم',
    image: 'images/حليب جهينة خالي الدسم.jpeg .jpeg'
  },
  {
    id: '53',
    name: 'حليب جهينة',
    category: Category.Dairy,
    price: 0,
    unit: 'عبوة',
    description: 'حليب جهينة',
    image: 'images/حليب جهينة.jpeg'
  },
  {
    id: '54',
    name: 'حليب عبور لاند',
    category: Category.Dairy,
    price: 0,
    unit: 'عبوة',
    description: 'حليب عبور لاند',
    image: 'images/حليب عبور لاند.jpeg'
  },
  {
    id: '55',
    name: 'حليب لامار',
    category: Category.Dairy,
    price: 0,
    unit: 'عبوة',
    description: 'حليب لامار',
    image: 'images/حليب لامار.jpeg'
  },
  {
    id: '56',
    name: 'خلطة ال 11 بهار',
    category: Category.Spices,
    price: 0,
    unit: 'عبوة',
    description: 'خلطة ال 11 بهار',
    image: 'images/خلطة ال 11 بهار.jpeg'
  },
  {
    id: '57',
    name: 'خلطة البشاميل',
    category: Category.Spices,
    price: 0,
    unit: 'عبوة',
    description: 'خلطة البشاميل',
    image: 'images/خلطة البشاميل.jpeg'
  },
  {
    id: '58',
    name: 'خميرة جافة فورية',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'خميرة جافة فورية',
    image: 'images/خميرة جافة فورية.jpeg'
  },
  {
    id: '59',
    name: 'خميرة فورية الرحاب',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'خميرة فورية الرحاب',
    image: 'images/خميرة فورية الرحاب.jpeg'
  },
  {
    id: '60',
    name: 'سحلب حلو الشام',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'سحلب حلو الشام',
    image: 'images/سحلب حلو الشام.jpeg'
  },
  {
    id: '61',
    name: 'صبونة كاماي',
    category: Category.Detergents,
    price: 0,
    unit: 'عبوة',
    description: 'صبونة كاماي',
    image: 'images/صبونة كاماي.jpeg'
  },
  {
    id: '62',
    name: 'صلصة روسو',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صلصة روسو',
    image: 'images/صلصة روسو.jpeg'
  },
  {
    id: '63',
    name: 'صلصة كنزي',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صلصة كنزي',
    image: 'images/صلصة كنزي.jpeg'
  },
  {
    id: '64',
    name: 'صلصة هارفست',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صلصة هارفست',
    image: 'images/صلصة هارفست.jpeg'
  },
  {
    id: '65',
    name: 'صلصة هينز',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صلصة هينز',
    image: 'images/صلصة هينز.jpeg'
  },
  {
    id: '66',
    name: 'فانيلين بالسكر تاج الملوك',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'فانيلين بالسكر تاج الملوك',
    image: 'images/فانيلين بالسكر تاج الملوك.jpeg'
  },
  {
    id: '67',
    name: 'فيجيتار حار',
    category: Category.Spices,
    price: 0,
    unit: 'عبوة',
    description: 'فيجيتار حار',
    image: 'images/فيجيتار حار.jpeg'
  },
  {
    id: '68',
    name: 'كريمة كاسترد بالفانيلين',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'كريمة كاسترد بالفانيلين',
    image: 'images/كريمة كاسترد بالفانيلين.jpeg'
  },
  {
    id: '69',
    name: 'كيك شيف دريم',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'كيك شيف دريم',
    image: 'images/كيك شيف دريم.jpeg'
  },
  {
    id: '70',
    name: 'كيك شيكولانة',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'كيك شيكولانة',
    image: 'images/كيك شيكولانة.jpeg'
  },
  {
    id: '71',
    name: 'مرقة الدجاج فاين فودز',
    category: Category.Spices,
    price: 0,
    unit: 'عبوة',
    description: 'مرقة الدجاج فاين فودز',
    image: 'images/مرقة الدجاج فاين فودز.jpeg'
  },
  {
    id: '72',
    name: 'مرقة خضروات فاين فودز',
    category: Category.Spices,
    price: 0,
    unit: 'عبوة',
    description: 'مرقة خضروات فاين فودز',
    image: 'images/مرقة خضروات فاين فودز.jpeg'
  },
  {
    id: '73',
    name: 'مرقة دجاج فورية',
    category: Category.Spices,
    price: 0,
    unit: 'عبوة',
    description: 'مرقة دجاج فورية',
    image: 'images/مرقة دجاج فورية.jpeg'
  },
  {
    id: '74',
    name: 'منظف برسيل',
    category: Category.Detergents,
    price: 0,
    unit: 'عبوة',
    description: 'منظف برسيل',
    image: 'images/منظف برسيل.jpeg'
  },
  {
    id: '75',
    name: 'منظف فيبا',
    category: Category.Detergents,
    price: 0,
    unit: 'عبوة',
    description: 'منظف فيبا',
    image: 'images/منظف فيبا.jpeg'
  },
  {
    id: '76',
    name: 'منظف كلوروكس',
    category: Category.Detergents,
    price: 0,
    unit: 'عبوة',
    description: 'منظف كلوروكس',
    image: 'images/منظف كلوروكس.jpeg'
  },
  {
    id: '77',
    name: 'منظف كلوريل',
    category: Category.Detergents,
    price: 0,
    unit: 'عبوة',
    description: 'منظف كلوريل',
    image: 'images/منظف كلوريل.jpeg'
  },
  {
    id: '78',
    name: 'نشا ذرة غذائي تاج الملوك',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'نشا ذرة غذائي تاج الملوك',
    image: 'images/نشا ذرة غذائي تاج الملوك.jpeg'
  },
  {
    id: '79',
    name: 'balance',
    category: Category.Beverage,
    price: 0,
    unit: 'عبوة',
    description: 'balance',
    image: 'images/balance.jpeg'
  },
  {
    id: '80',
    name: 'ايس كريم كونو',
    category: Category.Ice_Cream,
    price: 0,
    unit: 'عبوة',
    description: 'ايس كريم كونو',
    image: 'images/ايس كريم كونو.jpeg'
  },
  {
    id: '81',
    name: 'ايس كريم ميجا',
    category: Category.Ice_Cream,
    price: 0,
    unit: 'عبوة',
    description: 'ايس كريم ميجا',
    image: 'images/ايس كريم ميجا.jpeg'
  },
  {
    id: '82',
    name: 'باتيه BRUNCH',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'باتيه BRUNCH',
    image: 'images/باتيه BRUNCH.jpeg'
  },
  {
    id: '83',
    name: 'بريك',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'بريك',
    image: 'images/بريك.jpeg'
  },
  {
    id: '84',
    name: 'بسبوسة جوز الهند',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'بسبوسة جوز الهند',
    image: 'images/بسبوسة جوز الهند.jpeg'
  },
  {
    id: '85',
    name: 'بسكوت HD',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'بسكوت HD',
    image: 'images/بسكوت HD.jpeg'
  },
  {
    id: '86',
    name: 'بن سادة فاتح النجار',
    category: Category.Coffee,
    price: 0,
    unit: 'عبوة',
    description: 'بن سادة فاتح النجار',
    image: 'images/بن سادة فاتح النجار.jpeg'
  },
  {
    id: '87',
    name: 'بن سادة فاتح عبد المعبود',
    category: Category.Coffee,
    price: 0,
    unit: 'عبوة',
    description: 'بن سادة فاتح عبد المعبود',
    image: 'images/بن سادة فاتح عبد المعبود.jpeg'
  },
  {
    id: '88',
    name: 'بن محوج مخصوص عبد المعبود',
    category: Category.Coffee,
    price: 0,
    unit: 'عبوة',
    description: 'بن محوج مخصوص عبد المعبود',
    image: 'images/بن محوج مخصوص عبد المعبود.jpeg'
  },
  {
    id: '89',
    name: 'بيج شيبس',
    category: Category.Snacks,
    price: 0,
    unit: 'عبوة',
    description: 'بيج شيبس',
    image: 'images/بيج شيبس.jpeg'
  },
  {
    id: '90',
    name: 'بيك رولز',
    category: Category.Snacks,
    price: 0,
    unit: 'عبوة',
    description: 'بيك رولز',
    image: 'images/بيك رولز.jpeg'
  },
  {
    id: '91',
    name: 'جاجوار',
    category: Category.Snacks,
    price: 0,
    unit: 'عبوة',
    description: 'جاجوار',
    image: 'images/جاجوار.jpeg'
  },
  {
    id: '92',
    name: 'حلاوة البوادي',
    category: Category.Candies,
    price: 0,
    unit: 'عبوة',
    description: 'حلاوة البوادي',
    image: 'images/حلاوة البوادي.jpeg'
  },
  {
    id: '93',
    name: 'دقيق فاخر الضحى',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'دقيق فاخر الضحى',
    image: 'images/دقيق فاخر الضحى.jpeg'
  },
  {
    id: '94',
    name: 'دقيق فاخر سي منعم',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'دقيق فاخر سي منعم',
    image: 'images/دقيق فاخر سي منعم.jpeg'
  },
  {
    id: '95',
    name: 'دقيق فاخر عشرة عمر',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'دقيق فاخر عشرة عمر',
    image: 'images/دقيق فاخر عشرة عمر.jpeg'
  },
  {
    id: '96',
    name: 'دنش فرجللو',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'دنش فرجللو',
    image: 'images/دنش فرجللو.jpeg'
  },
  {
    id: '97',
    name: 'زيت الممتاز',
    category: Category.Oils,
    price: 0,
    unit: 'عبوة',
    description: 'زيت الممتاز',
    image: 'images/زيت الممتاز.jpeg'
  },
  {
    id: '98',
    name: 'زيت حلوة',
    category: Category.Oils,
    price: 0,
    unit: 'عبوة',
    description: 'زيت حلوة',
    image: 'images/زيت حلوة.jpeg'
  },
  {
    id: '99',
    name: 'زيت كريستال',
    category: Category.Oils,
    price: 0,
    unit: 'عبوة',
    description: 'زيت كريستال',
    image: 'images/زيت كريستال.jpeg'
  },
  {
    id: '100',
    name: 'شوكولاتة Rollana',
    category: Category.Candies,
    price: 0,
    unit: 'عبوة',
    description: 'شوكولاتة Rollana',
    image: 'images/شوكولاتة Rollana.jpeg'
  },
  {
    id: '101',
    name: 'شيبسي تايجر',
    category: Category.Snacks,
    price: 0,
    unit: 'عبوة',
    description: 'شيبسي تايجر',
    image: 'images/شيبسي تايجر.jpeg'
  },
  {
    id: '102',
    name: 'شيبسي كرانشي',
    category: Category.Snacks,
    price: 0,
    unit: 'عبوة',
    description: 'شيبسي كرانشي',
    image: 'images/شيبسي كرانشي.jpeg'
  },
  {
    id: '103',
    name: 'شيبسي',
    category: Category.Snacks,
    price: 0,
    unit: 'عبوة',
    description: 'شيبسي',
    image: 'images/شيبسي.jpeg'
  },
  {
    id: '104',
    name: 'صلصة طماطم اد-مي',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صلصة طماطم اد-مي',
    image: 'images/صلصة طماطم اد-مي.jpeg'
  },
  {
    id: '105',
    name: 'صلصة طماطم هارفست',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صلصة طماطم هارفست',
    image: 'images/صلصة طماطم هارفست.jpeg'
  },
  {
    id: '106',
    name: 'صوص باربكيو',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صوص باربكيو',
    image: 'images/صوص باربكيو.jpeg'
  },
  {
    id: '107',
    name: 'صوص كاتشب',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صوص كاتشب',
    image: 'images/صوص كاتشب.jpeg'
  },
  {
    id: '108',
    name: 'صوص مايونيز حار اد-مي',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صوص مايونيز حار اد-مي',
    image: 'images/صوص مايونيز حار اد-مي.jpeg'
  },
  {
    id: '109',
    name: 'صوص مايونيز',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صوص مايونيز',
    image: 'images/صوص مايونيز.jpeg'
  },
  {
    id: '110',
    name: 'صوص مستردة جياردينو',
    category: Category.Sauces,
    price: 0,
    unit: 'عبوة',
    description: 'صوص مستردة جياردينو',
    image: 'images/صوص مستردة جياردينو.jpeg'
  },
  {
    id: '111',
    name: 'عصير بيتي',
    category: Category.Beverage,
    price: 0,
    unit: 'عبوة',
    description: 'عصير بيتي',
    image: 'images/عصير بيتي.jpeg'
  },
  {
    id: '112',
    name: 'عصير جهينه بيور',
    category: Category.Beverage,
    price: 0,
    unit: 'عبوة',
    description: 'عصير جهينه بيور',
    image: 'images/عصير جهينه بيور.jpeg'
  },
  {
    id: '113',
    name: 'عصير جهينه مكس',
    category: Category.Beverage,
    price: 0,
    unit: 'عبوة',
    description: 'عصير جهينه مكس',
    image: 'images/عصير جهينه مكس.jpeg'
  },
  {
    id: '114',
    name: 'عصير جهينه',
    category: Category.Beverage,
    price: 0,
    unit: 'عبوة',
    description: 'عصير جهينه',
    image: 'images/عصير جهينه.jpeg'
  },
  {
    id: '115',
    name: 'كيكة توينكس دو',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'كيكة توينكس دو',
    image: 'images/كيكة توينكس دو.jpeg'
  },
  {
    id: '116',
    name: 'كيكة توينكس',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'كيكة توينكس',
    image: 'images/كيكة توينكس.jpeg'
  },
  {
    id: '117',
    name: 'كيكة هوهوس',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'كيكة هوهوس',
    image: 'images/كيكة هوهوس.jpeg'
  },
  {
    id: '118',
    name: 'لازانيا الملكة',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'لازانيا الملكة',
    image: 'images/لازانيا الملكة.jpeg'
  },
  {
    id: '119',
    name: 'لسان عصفور الملكة ازرق',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'لسان عصفور الملكة ازرق',
    image: 'images/لسان عصفور الملكة ازرق.jpeg'
  },
  {
    id: '120',
    name: 'ماء ورد لاروز',
    category: Category.Baking_Supplies,
    price: 0,
    unit: 'عبوة',
    description: 'ماء ورد لاروز',
    image: 'images/ماء ورد لاروز.jpeg'
  },
  {
    id: '121',
    name: 'مشروب Vamos',
    category: Category.Beverage,
    price: 0,
    unit: 'عبوة',
    description: 'مشروب Vamos',
    image: 'images/مشروب Vamos.jpeg'
  },
  {
    id: '122',
    name: 'مكرونة اسباجتي الملكة',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة اسباجتي الملكة',
    image: 'images/مكرونة اسباجتي الملكة.jpeg'
  },
  {
    id: '123',
    name: 'مكرونة اقلام الملكة',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة اقلام الملكة',
    image: 'images/مكرونة اقلام الملكة.jpeg'
  },
  {
    id: '124',
    name: 'مكرونة اقلام ايطاليانو بلس',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة اقلام ايطاليانو بلس',
    image: 'images/مكرونة اقلام ايطاليانو بلس.jpeg'
  },
  {
    id: '125',
    name: 'مكرونة اقلام حواء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة اقلام حواء',
    image: 'images/مكرونة اقلام حواء.jpeg'
  },
  {
    id: '126',
    name: 'مكرونة حلزوني',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة حلزوني',
    image: 'images/مكرونة حلزوني.jpeg'
  },
  {
    id: '127',
    name: 'مكرونة شرايح ايطاليانو',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة شرايح ايطاليانو',
    image: 'images/مكرونة شرايح ايطاليانو.jpeg'
  },
  {
    id: '128',
    name: 'مكرونة شعرية الملكة حمراء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة شعرية الملكة حمراء',
    image: 'images/مكرونة شعرية الملكة حمراء.jpeg'
  },
  {
    id: '129',
    name: 'مكرونة شعرية الملكة زرقاء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة شعرية الملكة زرقاء',
    image: 'images/مكرونة شعرية الملكة زرقاء.jpeg'
  },
  {
    id: '130',
    name: 'مكرونة شعرية حواء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة شعرية حواء',
    image: 'images/مكرونة شعرية حواء.jpeg'
  },
  {
    id: '131',
    name: 'مكرونة عقل صغيرة الملكة زرقاء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة عقل صغيرة الملكة زرقاء',
    image: 'images/مكرونة عقل صغيرة الملكة زرقاء.jpeg'
  },
  {
    id: '132',
    name: 'مكرونة عقل صغيرة ايطاليانو بلس',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة عقل صغيرة ايطاليانو بلس',
    image: 'images/مكرونة عقل صغيرة ايطاليانو بلس.jpeg'
  },
  {
    id: '133',
    name: 'مكرونة عقل صغيرة حواء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة عقل صغيرة حواء',
    image: 'images/مكرونة عقل صغيرة حواء.jpeg'
  },
  {
    id: '134',
    name: 'مكرونة عقل صغيرة رجينا',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة عقل صغيرة رجينا',
    image: 'images/مكرونة عقل صغيرة رجينا.jpeg'
  },
  {
    id: '135',
    name: 'مكرونة عقل كبيرة الملكة حمراء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة عقل كبيرة الملكة حمراء',
    image: 'images/مكرونة عقل كبيرة الملكة حمراء.jpeg'
  },
  {
    id: '136',
    name: 'مكرونة عقل كبيرة الملكة زرقاء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة عقل كبيرة الملكة زرقاء',
    image: 'images/مكرونة عقل كبيرة الملكة زرقاء.jpeg'
  },
  {
    id: '137',
    name: 'مكرونة عقل كبيرة حواء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة عقل كبيرة حواء',
    image: 'images/مكرونة عقل كبيرة حواء.jpeg'
  },
  {
    id: '138',
    name: 'مكرونة كوع الملكة حمراء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة كوع الملكة حمراء',
    image: 'images/مكرونة كوع الملكة حمراء.jpeg'
  },
  {
    id: '139',
    name: 'مكرونة كوع الملكة زرقاء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة كوع الملكة زرقاء',
    image: 'images/مكرونة كوع الملكة زرقاء.jpeg'
  },
  {
    id: '140',
    name: 'مكرونة كوع حواء',
    category: Category.Macaroni,
    price: 0,
    unit: 'عبوة',
    description: 'مكرونة كوع حواء',
    image: 'images/مكرونة كوع حواء.jpeg'
  },
  {
    id: '141',
    name: 'ملح الخير',
    category: Category.Spices,
    price: 0,
    unit: 'عبوة',
    description: 'ملح الخير',
    image: 'images/ملح الخير.jpeg'
  },
  {
    id: '142',
    name: 'مولتو EXTRA',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'مولتو EXTRA',
    image: 'images/مولتو EXTRA.jpeg'
  },
  {
    id: '143',
    name: 'مولتو مكس',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'مولتو مكس',
    image: 'images/مولتو مكس.jpeg'
  },
  {
    id: '144',
    name: 'مولتو',
    category: Category.baked_goods,
    price: 0,
    unit: 'عبوة',
    description: 'مولتو',
    image: 'images/مولتو.jpeg'
  }
];
