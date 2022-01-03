import axios from "axios";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Input, Textarea } from "../components";
import { withLayoutHOC } from "../layouts";
import { MenuItem } from "../types/menu.interface";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}

const Home = ({menu, firstCategory}: HomeProps) => {
  return (
    <>
      <Input placeholder="test" />
      <Textarea placeholder="test" />
    </>
  );
};

export default withLayoutHOC(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
