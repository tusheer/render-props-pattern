import React, { ReactElement } from 'react';
import { IDropdownContext, useDropdownContext } from './index';

interface IItem {
    children: ({ toggle, open }: IDropdownContext) => ReactElement;
}

const Item: React.FC<IItem> = ({ children }) => {
    const { open, toggle }: IDropdownContext = useDropdownContext();

    if (!open) return null;

    return children({ toggle, open });
};

Item.displayName = 'Item';

export default Item;
