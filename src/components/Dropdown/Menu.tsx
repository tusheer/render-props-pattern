import React, { ReactElement } from "react";
import { IDropdownContext, useDropdownContext } from "./index";

interface IMenu {
	children: ({ toggle, open }: IDropdownContext) => ReactElement;
}

const Menu: React.FC<IMenu> = ({children}) => {
	const { open, toggle }: IDropdownContext = useDropdownContext();

	return children({ toggle, open });
};

Menu.displayName = "Menu"

export default Menu;
