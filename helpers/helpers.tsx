import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { FirstLevelMenuItem, TopLevelCategory } from '../types';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {route:'courses', name:'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
  // {route:'services', name:'Services', icon: <ServicesIcon />, id: TopLevelCategory.Services},
  // {route:'books', name:'Books', icon: <BooksIcon />, id: TopLevelCategory.Books},
  // {route:'products', name:'Products', icon: <ProductsIcon />, id: TopLevelCategory.Products}
];

export const price = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' rub');  
};

export const devlOfNum = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2: cases[(number % 10 < 5) ? number % 10 : 5]];
};
