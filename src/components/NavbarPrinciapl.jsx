import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";
import Cart from "./Cart";

export default function NavbarPrincipal() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        <Button isIconOnly className="bg-transparent text-[25px] hover:text-white transition-all duration-300">
            <ion-icon name="person-outline"></ion-icon>
        </Button>,
        <div>
            <Cart />
        </div>
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#ffd92f]">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit text-[25px]">SHOPPING CART</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button isIconOnly className="bg-transparent text-[25px] hover:text-white transition-all duration-300">
                        <ion-icon name="person-outline"></ion-icon>
                    </Button>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Cart />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        {item}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};