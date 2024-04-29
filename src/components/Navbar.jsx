import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleNavLinkClick = () => {
            closeMenu();
            window.scrollTo(0, 0);
        };

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleNavLinkClick);
            });
        };
    }, []);

    // Nav items with extra options
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/Gallery", link: "Gallery" },
        { path: "/Committees", link: "Committees" },
        { path: "/Call-for-Papers", link: "Call for Papers" },
        { path: "/Paper-Status", link: "Paper Status" },
        { path: "/Program", link: "Program" },
        { path: "/Special-Sessions", link: "Sessions" },
        { path: "/Registration", link: "Registration" },
        { path: "/Plan-Travel", link: "Tourism" },
        { path: "/Downloads", link: "Links" },
        { path: "/Contact", link: "Updates" },
    ];

    return (
        <>
            <header className="bg-black bg-gradient-to-r from-black to-orange-950 text-white fixed top-0 left-0 right-0 text-center">
                <div className="flex items-center font-medium justify-around md:py-3">
                    <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                        <NavLink className="nav-link bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text" to="/">ICECCT</NavLink>
                        <div className="text-3xl md:hidden" onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                    <ul className="md:flex gap-2 md:text-xs text-sm hidden">
                        {navItems.map(({ path, link }) => (
                            <li className="text-white relative" key={path}>
                                <NavLink className="nav-link" activeClassName="active" to={path}>{link}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Mobile nav */}
                <ul className={`md:hidden gap-4 text-md block space-y-4 px-4 py-6 mt-16 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-30 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                    {navItems.map(({ path, link }) => (
                        <li className="text-black relative" key={path}>
                            <NavLink onClick={closeMenu} className="nav-link" to={path}>{link}</NavLink>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    );
};

export default Navbar;
