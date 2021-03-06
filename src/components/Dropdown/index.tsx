import React, { createContext, useRef, ReactNode, useContext, useState, ReactElement } from 'react';
import Menu from './Menu';
import Item from './Item';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export interface IDropdownContext {
    open: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useDropdownContext = () => useContext(DropdownContext);

export const DropdownContext = createContext<IDropdownContext>({
    open: false,
    toggle: () => {},
});

interface IDropdown {
    children: ReactNode[];
    className?: string;
}

interface IDropdownComposition {
    Item: React.FC<{ children: ({ toggle, open }: IDropdownContext) => ReactElement }>;
    Menu: React.FC<{ children: ({ toggle, open }: IDropdownContext) => ReactElement }>;
}

const Dropdown: React.FC<IDropdown> & IDropdownComposition = ({ children, className }) => {
    const [open, toggle] = useState(false);
    const providerValue = { open, toggle };
    const ref = useRef(null);
    useOnClickOutside(ref, () => toggle(false));

    return (
        <DropdownContext.Provider value={providerValue}>
            <div className={className} ref={ref}>
                {children}
            </div>
        </DropdownContext.Provider>
    );
};

Dropdown.defaultProps = {
    className: '',
};

Dropdown.displayName = "Dropdown"

Dropdown.Item = Item;
Dropdown.Menu = Menu;

export default Dropdown;
