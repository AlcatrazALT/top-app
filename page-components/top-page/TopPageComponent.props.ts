import { TopLevelCategory, TopPageModel, ProductModel } from "../../types";

export interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory,
  page: TopPageModel,
  products: ProductModel[]
}