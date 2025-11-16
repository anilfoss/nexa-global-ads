"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    DropdownTrigger,
} from "@heroui/react";

import "./../../scss/header.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import useScreenSize from "../utils/useScreenSize";
import IconChevron from "../utils/icons/IconChevron";

gsap.registerPlugin(useGSAP);

const menuItems1 = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About Us", href: "/about-us" },
    {
        id: 3,
        name: "Products",
        hasChildren: true,
        children: [
            {
                id: 31,
                title: "Product 1",
                href: "/product-1",
                // links: [
                //     {
                //         id: 311,
                //         name: "Product Submenu 1.1",
                //         href: "/product/product-1/product-submenu-1.1",
                //     },
                //     {
                //         id: 312,
                //         name: "Product Submenu 1.2",
                //         href: "/product/product-1/product-submenu-1.2",
                //     },
                // ],
            },
            { id: 32, title: "Product 2", href: "/product-2" },
            { id: 33, title: "Product 3", href: "/product-3" },
            { id: 34, title: "Product 4", href: "/product-4" },
            {
                id: 35,
                title: "Product 5",
                href: "/product-5",
                // links: [
                //     {
                //         id: 331,
                //         name: "Product Submenu 5.1",
                //         href: "/product/product-5/product-submenu-5.1",
                //     },
                //     {
                //         id: 332,
                //         name: "Product Submenu 5.2",
                //         href: "/product/product-5/product-submenu-5.2",
                //     },
                // ],
            },
        ],
    },
    { id: 4, name: "Capabilities", href: "/capabilities" },
    { id: 5, name: "Investor Relations", href: "/investor-relations" },
    { id: 6, name: "Careers", href: "/careers" },
];

const menuItems2 = [
    {
        id: 1,
        name: "Contact Us",
        href: "/contact-us",
    },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMenuId, setOpenMenuId] = useState(null);
    const pathname = usePathname();

    const { isMobile, isTablet, isDesktop } = useScreenSize();

    const navRef = useRef(null);

    const handleMenu = () => {
        setIsMenuOpen(false);
    };

    // for mobile

    const toggleSubmenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    // gsap
    useGSAP(
        () => {
            gsap.to(".header-nav", {
                marginTop: "0",
                opacity: 1,
                duration: 1.5,
                delay: 0,
                ease: "power3.inOut",
            });
        },
        { scope: navRef.current }
    );

    // for scroll to top on page refresh/reload

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => 1 - Math.pow(1 - t, 3),
        });

        setTimeout(() => {
            lenis.scrollTo(0);
        }, 100);

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <Navbar
            ref={navRef}
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            className="header-nav -mt-8 opacity-0"
            style={{ "--navbar-height": "auto", backdropFilter: "none" }}
        >
            {/* desktop */}
            <NavbarContent className="logo-wrapper !grow-0">
                <NavbarBrand>
                    <Link href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="Nexa Global (ADS)"
                            width={311}
                            height={53}
                            priority
                            unoptimized
                            className="w-[200px] min-w-[200px] xl:w-[280px] xl:min-w-[280px] 2xl:w-[311px] 2xl:min-w-[311px] max-w-full h-auto rounded-none"
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            {/* menu 1 */}
            <NavbarContent
                className="desktop-navbar-menu hidden lg:flex grow"
                justify="center"
            >
                {menuItems1.map((item) => (
                    <React.Fragment key={item.id}>
                        {/* Normal links */}
                        {!item.hasChildren ? (
                            <NavbarItem>
                                <Link
                                    href={item.href}
                                    className={`${
                                        pathname === item.href ? "active" : ""
                                    } transition-colors hover:text-primary`}
                                >
                                    {item.name}
                                </Link>
                            </NavbarItem>
                        ) : (
                            <Dropdown
                                classNames={{
                                    base: "header-dropdown-wrapper",
                                }}
                            >
                                <NavbarItem>
                                    <DropdownTrigger>
                                        <Button
                                            disableRipple
                                            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                            radius="none"
                                            variant="light"
                                            endContent={<IconChevron />}
                                        >
                                            {item.name}
                                        </Button>
                                    </DropdownTrigger>
                                </NavbarItem>

                                {/* Dropdown Menu */}
                                <DropdownMenu aria-label={`${item.name} menu`}>
                                    {item.children.map((child) => (
                                        <DropdownItem
                                            key={child.id}
                                            className="!p-0 !bg-transparent hover:!bg-transparent"
                                        >
                                            {/* Case 1: Section has links[] */}
                                            {child.links &&
                                                child.links.length > 0 && (
                                                    <div className="p-0">
                                                        <h4 className="menu-link">
                                                            {child.title}
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {child.links.map(
                                                                (link) => (
                                                                    <li
                                                                        key={
                                                                            link.id
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                link.href
                                                                            }
                                                                            className="text-sm text-gray-600 hover:text-primary transition-colors"
                                                                        >
                                                                            {
                                                                                link.name
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                )}

                                            {/* Case 2: Direct link (no links array, but has href) */}
                                            {!child.links && child.href && (
                                                <div className="p-0">
                                                    <Link
                                                        href={child.href}
                                                        className="menu-link block font-semibold text-gray-800 hover:text-primary transition-colors"
                                                    >
                                                        {child.title}
                                                    </Link>
                                                </div>
                                            )}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        )}
                    </React.Fragment>
                ))}
            </NavbarContent>

            {/* menu 2 */}
            {(isTablet || isDesktop) && (
                <NavbarContent
                    className="desktop-navbar-button flex !gap-3 !grow-0 max-lg:ml-auto max-lg:border-l-2 max-lg:border-white max-lg:border-opacity-10 lg:!border-r-0"
                    justify="end"
                >
                    {menuItems2.map((item) => (
                        <NavbarItem key={item?.id}>
                            <Link
                                href={item?.href}
                                className={`${
                                    pathname === item.href ? "active" : ""
                                } transition-colors hover:text-primary`}
                            >
                                {item?.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            )}

            <NavbarContent className="!grow-0 lg:hidden max-lg:border-l-2 border-white border-opacity-10">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="menu-toggle lg:hidden w-7 h-7"
                />
            </NavbarContent>

            {/* mobile */}
            <NavbarMenu
                className="mobile-navbar-menu"
                style={{ "--navbar-height": "0.01rem" }}
            >
                {menuItems1.map((item) => (
                    <NavbarMenuItem key={item.id} className="aaaaaa">
                        {/* Parent item */}
                        {item.hasChildren ? (
                            <button
                                onClick={() => toggleSubmenu(item.id)}
                                className="w-full flex justify-between items-center font-semibold text-gray-800 py-2"
                            >
                                <span>{item.name}</span>
                                <IconChevron
                                    className={`transition-transform duration-300 ${
                                        openMenuId === item.id
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </button>
                        ) : (
                            <Link
                                href={item.href}
                                onClick={handleMenu}
                                className={`${
                                    pathname === item.href ? "active" : ""
                                } block py-2`}
                            >
                                {item.name}
                            </Link>
                        )}

                        {/* Submenu items */}
                        {item.hasChildren && openMenuId === item.id && (
                            <ul className="pl-4 mt-1 space-y-1 border-l border-gray-300">
                                {item.children.map((child) => (
                                    <li key={child.id}>
                                        <Link
                                            href={child.href}
                                            onClick={handleMenu}
                                            className="block py-1 text-gray-600 hover:text-primary transition-colors"
                                        >
                                            {child.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </NavbarMenuItem>
                ))}

                {isMobile &&
                    menuItems2.map((item) => (
                        <NavbarItem
                            key={item?.id}
                            className="text-large aaaaaa"
                        >
                            <Link
                                href={item.href}
                                onClick={handleMenu}
                                className={`${
                                    pathname === item.href ? "active" : ""
                                } block py-2`}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default Header;
