import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import { localImages } from '@/utils/localImages';

const ContactUs = () => {
    return (
        <section className='px-5 lg:px-20 py-20 w-full lg:flex items-start bg-white'>
            <div className='w-full lg:w-1/3'>
                <h6 className='flex items-center gap-2 text-black'>About Us <HiArrowLongRight /></h6>
                <h2 className='text-3xl my-2 text-black font-semibold'>Get in Touch</h2>
                <p className='text-slate-400 text-xl'>
                    Please feel free to contact us.
                </p>

                <div className='mt-5'>
                    <div className='flex gap-5'>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-slate-400">First Name</span>
                            </div>
                            <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-slate-400">Last Name</span>
                            </div>
                            <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-slate-400">Email</span>
                        </div>
                        <input type="text" placeholder="Email" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-slate-400">Phone Number</span>
                        </div>
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-slate-400">Message</span>
                        </div>
                        <textarea placeholder="Message" className="input textarea textarea-bordered w-full"></textarea>
                    </label>
                    <button className='btn bg-blue-500 text-white hover:bg-blue-600 w-full mt-3'>Send Message</button>
                </div>
            </div>
            <div className='w-full mt-8 lg:mt-0 lg:w-2/3'>
                <div className='flex justify-end'>
                    <Image src={localImages.contactUs} alt='Contact Us' width={600} height={300} />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;