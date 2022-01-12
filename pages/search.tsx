import axios from 'axios';
import { GetStaticProps, GetStaticPropsContext,  } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { API, firstLevelMenu } from '../helpers';
import { withLayoutHOC } from '../layouts';
import { MenuItem } from '../types';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}

const Search = (): JSX.Element => {
  return (
    <>
      <h5>search</h5>
    </>
  );
};

export default withLayoutHOC(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
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

  const {data:menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id
  });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id
    }
  };
};
