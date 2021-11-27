import React, { createContext, PropsWithChildren, useState } from "react";
import { IAppContext, MenuItem, TopLevelCategory } from "../types";

export const AppContext = createContext<IAppContext>({ menu:[], firstCategory:TopLevelCategory.Courses});

export const AppContextProvider = ({menu,firstCategory,children}: PropsWithChildren<IAppContext>) => {
  const [menuState, setMenuState] = useState(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
      {children}
    </AppContext.Provider>;
};
