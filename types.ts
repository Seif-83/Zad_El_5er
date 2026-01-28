
export enum Category {
  Eggs = 'البيض',
  Cheese = 'الجبن',
  Pickles = 'قسم المخللات',
  Beverage = 'قسم المشروبات',
  jam = 'مربى',
  honey = 'عسل',
  Tahini = 'طحينة',
  Tuna = 'تونة',
  Nuts = 'المكسرات',
  rice = 'الأرز',
  Oils = 'الزيوت',
  Sugar = 'السكر',
  Luncheon = 'لانشون',
  Canned_food = 'معلبات'

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
