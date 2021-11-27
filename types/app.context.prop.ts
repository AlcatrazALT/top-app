import { MenuItem } from './menu.interface';
import { TopLevelCategory } from './page.interface';

export interface IAppContext {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
  setMenu?: (newMenu: MenuItem[]) => void
}
