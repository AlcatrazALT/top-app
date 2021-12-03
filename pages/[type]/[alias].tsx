import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { firstLevelMenu } from '../../helpers';
import { withLayoutHOC } from '../../layouts';
import { MenuItem, TopLevelCategory, TopPageModel, ProductModel } from '../../types';

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: TopLevelCategory,
  page: TopPageModel,
  products: ProductModel[]
}

const TopPage = ({products}: TopPageProps) => {
  return (
    <>
      {products && products.length}
    </>
  );
};

export default withLayoutHOC(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const {data:menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: m.id
    });
    paths = paths.concat(menu.flatMap(menuItem => menuItem.pages.map(pageItem => `/${m.route}/${pageItem.alias}`)));
  }
  
  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params){
    return {
      notFound: true
    };
  }

  const firstCategoryItem = firstLevelMenu.find(menu => menu.route === params.type);
  if(!firstCategoryItem){
    return {
      notFound: true
    };
  }

  try {
    const {data:menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: firstCategoryItem.id
    });

    if (menu.length === 0) {
      return {
        notFound: true
      };
    }
  
    const {data:page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const {data:products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find/', {
      category: page.category,
      limit: 10
    });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};
