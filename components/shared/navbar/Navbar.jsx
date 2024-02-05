"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { SiReactivex } from "react-icons/si";

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);

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
        <nav className={`navbar px-10 ${scrollY > 100 ? 'shadow-md' : ''} sticky top-0 bg-white z-10`}>
            <div className="navbar-start">
                <div className='rounded-full w-fit'>
                    <SiReactivex className='text-5xl text-blue-500' />
                </div>
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