"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { SiReactivex } from "react-icons/si";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`navbar px-5 lg:px-20 ${scrollY > 100 ? 'shadow-md' : ''} sticky top-0 bg-white z-10`}>
            <div className="navbar-start">
                <div className='rounded-full w-fit'>
                    <SiReactivex className='text-5xl text-blue-500' />
                </div>
            </div>
            <div className="navbar-end lg:hidden">
                {!showMenu ?
                    <HiOutlineMenu className="text-4xl text-black cursor-pointer transition-all duration-300" onClick={() => setShowMenu(true)} /> :
                    <MdOutlineClose className="text-4xl text-black cursor-pointer transition-all duration-300" onClick={() => setShowMenu(false)} />}
            </div>
            <div className={`navbar-menu border rounded-md bg-white lg:hidden ${showMenu ? 'block' : 'hidden'}`}
                style={{
                    position: showMenu ? 'absolute' : 'static',
                    top: showMenu ? '100%' : 'auto',
                    left: showMenu ? '0' : 'auto',
                    right: showMenu ? '0' : 'auto',
                    width: showMenu ? '100%' : 'auto',
                    boxShadow: showMenu ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none',
                }}>
                <ul className="menu menu-vertical">
                    {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                        <li key={index}>
                            <Link href="#" className="menu-item text-xl text-black">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                        <li key={index}>
                            <Link href="#" className="menu-item text-xl text-black mx-1">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;