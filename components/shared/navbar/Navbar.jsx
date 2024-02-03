import React from 'react';
import Image from 'next/image';
import { localImages } from '@/utils/localImages';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-200 px-10">
            <div className="navbar-start">
                <div className='rounded-full bg-white w-fit p-2'>
                <Image src={localImages?.logo} alt="Logo" width={40} height={40}/>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                        <li key={index}>
                            <Link href="#" className="menu-item bg-blue-500 text-white mx-1 hover:bg-blue-600">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;