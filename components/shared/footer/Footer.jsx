import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import Link from 'next/link';
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
    return (
        <section className='px-5 lg:px-20 lg:py-10 w-full lg:flex items-start bg-white'>
            <div className='w-full px-2 lg:px-0 lg:w-1/3'>
                <h2 className='text-5xl py-2 text-black'>Subscribe to our Newsletter</h2>
                <div className='mt-5 flex items-center gap-2'>
                    <label className="form-control ">
                        <input type="text" placeholder="Give Your Email Address" className="input input-bordered w-fit" />
                    </label>
                    <button className='btn bg-blue-500 rounded-full text-white hover:bg-blue-600 w-fit'>
                        <MdArrowForwardIos />
                    </button>
                </div>
            </div>
            <div className='w-full lg:w-2/3'>
                <div className='grid grid-cols-3 my-8 lg:my-2'>
                    <div className='mx-auto'>
                        <h4 className='text-xl lg:text-2xl mb-2 text-black h-14 lg:h-10'>Social Links</h4>
                        <ul>
                            {[
                                { social: 'Facebook', icon: <FiFacebook />, link: '#' },
                                { social: 'Twitter', icon: <FiTwitter />, link: '#' },
                                { social: 'Instagram', icon: <FiInstagram />, link: '#' },
                                { social: 'LinkedIn', icon: <FiLinkedin />, link: '#' },
                                { social: 'Github', icon: <FiGithub />, link: '#' }
                            ].map((item, index) => (
                                <li key={index} className='flex items-center gap-2 text-slate-400 hover:text-slate-700 hover-scale'>
                                    <span>{item.icon}</span>
                                    <Link href={item.link} className="menu-item text-md mx-1">{item.social}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='mx-auto'>
                        <h4 className='text-xl lg:text-2xl mb-2 text-black h-14 lg:h-10'>Company</h4>
                        <ul>
                            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                                <li key={index} className='hover-scale'>
                                    <Link href="#" className="menu-item text-md mx-1 text-slate-400 hover:text-slate-700">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='mx-auto'>
                        <h4 className='text-xl lg:text-2xl mb-2 text-black h-14 lg:h-10'>Terms & Condition</h4>
                        <ul>
                            {['Privacy Policy', 'Terms of Service', 'Legal', 'Security', 'Sitemap'].map((item, index) => (
                                <li key={index} className='hover-scale'>
                                    <Link href="#" className="menu-item text-md mx-1 text-slate-400 hover:text-slate-700">{item}</Link>
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