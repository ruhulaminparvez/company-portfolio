import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {
    return (
        <section className='px-10 py-10 w-full flex items-start bg-white'>
            <div className='w-1/3'>
                <h2 className='text-5xl my-2 text-black'>Subscribe to our Newsletter</h2>

                <div className='mt-5 flex items-center gap-2'>
                    <label className="form-control ">
                        <input type="text" placeholder="Email" className="input input-bordered w-fit" />
                    </label>
                    <button className='btn bg-blue-500 rounded-full text-white hover:bg-blue-600 w-fit'>
                        <MdArrowForwardIos />
                    </button>
                </div>
            </div>
            <div className='w-2/3'>
                <div className='grid grid-cols-3 my-2'>
                    <div className='mx-auto'>
                        <h4 className='text-2xl mb-2 text-black'>Company</h4>
                        <ul>
                            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="menu-item text-md mx-1 text-slate-400">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='mx-auto'>
                        <h4 className='text-2xl mb-2 text-black'>Company</h4>
                        <ul>
                            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="menu-item text-md mx-1 text-slate-400">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='mx-auto'>
                        <h4 className='text-2xl mb-2 text-black'>Company</h4>
                        <ul>
                            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="menu-item text-md mx-1 text-slate-400">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;