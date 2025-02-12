import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/home",
    },
    {
        id: 2,
        name: "About",
        link: "/about",
    },
    {
        id: 3,
        name: "Contact",
        link: "/contact",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Vegetables",
        link: "/vegetables",
    },
    {
        id: 2,
        name: "Fruits",
        link: "/fruits",
    },
    {
        id: 3,
        name: "Grains",
        link: "/grains",
    },
];

const Navbar = () => {
    return (
        <>
            <div className="bg-white shadow-md">
                <div className="container flex justify-between py-4 sm:py-3">

                    {/* Logo */}
                    <div className="font-bold text-3xl">Logo</div>

                    {/* Menu */}
                    <div>
                        <ul className="flex items-center gap-10">
                            {NavLinks.map(({ id, name, link }) => (
                                <li key={id}>
                                    <a
                                        href={link}
                                        className="inline-blocke hover:text-primary text-xl font-semibold"
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}

                            {/* dropdown menu */}
                            <li className="cursor-pointer group">
                                <a
                                    href="/#"
                                    className="inline-block hover:text-primary text-xl font-semibold"
                                >
                                    <div className="flex items-center gap-[2px] py-2">
                                        Categories
                                        <span>
                                            <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                        </span>
                                    </div>
                                </a>

                                {/* dropdown content */}
                                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white shadow-md p-2">
                                    <ul>
                                        {DropdownLinks.map(({ id, name, link }) => (
                                            <li key={id}>
                                                <a
                                                    href={link}
                                                    className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                                >
                                                    {name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            {/* login */}
                            <li>
                                <button className="flex justify-center items-center gap-2 bg-primary text-white px-5 py-2 rounded-md hover:scale-105 duration-300">
                                    <FaUser />
                                    My Account
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
