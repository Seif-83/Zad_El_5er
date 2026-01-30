
export enum Category {
  Cheese = 'الجبن',
  Pickles = 'المخللات',
  Beverage = 'المشروبات',
  jam = 'المربى',
  honey = 'العسل',
  Tahini = 'الطحينة',
  Tuna = 'التونة',
  rice = 'الأرز',
  Oils = 'الزيوت',
  Sugar = 'السكر',
  Luncheon = 'اللانشون',
  Canned_food = 'المعلبات',
  Sauces = 'الصوصات',
  Dairy = 'الألبان',
  Candies = 'الحلويات',
  Detergents = 'المنظفات',
  Macaroni = 'المكرونه',
  Spices = 'العطارة',
  Baking_Supplies = 'مستلزمات الحلويات',
  Coffee = 'البن',
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  unit: string;
  image: string;
  description: string;
  isOffer?: boolean;
  oldPrice?: number;
}

export interface SiteInfo {
  name: string;
  slogan: string;
  phone: string;
  whatsapp: string;
  address: string;
  headerImage?: string;
}
