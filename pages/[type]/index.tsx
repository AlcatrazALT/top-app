import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { firstLevelMenu } from '../../helpers';
import { withLayoutHOC } from '../../layouts';
import { MenuItem } from '../../types';

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}

const Type = ({firstCategory}:TypeProps) => {
  return (
    <>
    TYPE {firstCategory}
    </>
  );
};

export default withLayoutHOC(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(menu => `/${menu.route}`),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async () => {
  const firstCategory = 0;
  const {data:menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu, firstCategory
    }
  };
};
