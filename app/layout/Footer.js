import React from 'react'
import { BsTelephone, BsHouse } from "react-icons/bs"
import { AiOutlineMail, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from 'react-icons/fa'
import Footercard from '../components/shared/footercard'
import Link from 'next/link'
function Footer() {
    return (
        <footer className='my-5 bg-white border-t'>
            <div className='container'>
                <div className='py-12 container flex flex-wrap md:space-x-2 justify-between border-b items-center'>
                    <Footercard image='/icons/f (1).svg' title="Free Shipping" desc="For all orders over $200" />
                    <Footercard image='/icons/f (2).svg' title="1 & 1 Returns" desc="Cancellation after 1 day" />
                    <Footercard image='/icons/f (3).svg' title="100% Secure Payment" desc="Gurantee secure payments" />
                    <Footercard image='/icons/f (4).svg' title="24/7 Dedicated Support" desc="Anywhere & anytime" />
                    <Footercard image='/icons/f (5).svg' title="Daily Offers" desc="Discount up to 70% OFF" />
                </div>
                {/* footer widget */}
                <div className='flex justify-between text-footercolor mt-10 flex-wrap gap-4 mb-16'>
                    <div className='max-w-sm'>
                        <h2 className='font-bold mb-5 text-xl'>Farmart – Your Online Foods & Grocery</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi porro voluptatum recusandae adipisci unde possimus aspernatur accusamus enim non molestiae magni animi, quam debitis iure, quas commodi incidunt accusantium nostrum.</p>
                        <div className='flex gap-4 mt-8'>
                            <BsTelephone className='mt-1' />
                            <div className='flex flex-col gap-2'>
                                <p>Hotline 24/7:</p>
                                <p className='text-2xl font-bold'>(+965) 7492-4277</p>
                            </div>
                        </div>
                        <div className='flex gap-3 mt-5 mb-3 items-center'>
                            <BsHouse />
                            <address className='not-italic'>959 Homestead Street Eastlake, NYC</address>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <AiOutlineMail />
                            <p>support@farmart.com</p>
                        </div>
                    </div>
                    <div className=' '>
                        <h1 className='mb-5 text-xl font-bold'>Useful Links</h1>
                        <ul>
                            <Footerlink title="About Us" href='/' />
                            <Footerlink title="Contact" href='/' />
                            <Footerlink title="Help Center" href='/' />
                            <Footerlink title="Career" href='/' />
                            <Footerlink title="Policy" href='/' />
                            <Footerlink title="Flash Sale" href='/' />
                            <Footerlink title="Official" href='/' />
                            <Footerlink title="Sitemap" href='/' />
                        </ul>
                    </div>
                    <div className=' '>
                        <h1 className='mb-5 text-xl font-bold'>Help Center</h1>
                        <ul>
                            <Footerlink title="Payments" href='/' />
                            <Footerlink title="Shipping" href='/' />
                            <Footerlink title="Product Returns" href='/' />
                            <Footerlink title="FAQ" href='/' />
                            <Footerlink title="Checkout" href='/' />
                            <Footerlink title="Other Issues" href='/' />
                        </ul>
                    </div>
                    <div className=''>
                        <h1 className='mb-5 text-xl font-bold'>Farmart Busines</h1>
                        <ul>
                            <Footerlink title="Sell On Farmart" href='/' />
                            <Footerlink title="Affiliate Program" href='/' />
                            <Footerlink title="Our Suppliers" href='/' />
                            <Footerlink title="Accessibility" href='/' />
                            <Footerlink title="Advertise With Us" href='/' />
                        </ul>
                    </div>
                    <div className='max-w-sm overflow-hidden'>
                        <h2 className='text-xl font-bold mb-5'>Farmart Newsletter</h2>
                        <p>Register now to get updates on promotions and coupns. Don’t worry! We not spam</p>
                        <div className='flex mt-5'>
                            <div className='flex items-center border p-4 '>
                                <AiOutlineMail className='text-lg' />
                                <input type="email" placeholder='Your email...' className='border-none outline-none ml-3' />
                            </div>
                            <button className='bg-primary px-6 py-4 text-black font-bold text-lg rounded-sm'>subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer down */}
            <div className='border-t'>
                <div className='flex justify-between gap-6 md:gap-8 items-center container mt-6 text-footercolor flex-wrap'>
                    <p>&copy; 2022 <span className='font-bold'>Farmart</span> All rights reserved </p>
                    <img src="/images/footer-new-payment.png" alt="footer" />
                    <div className='flex items-center max-w-md '>
                        Stay connected :
                        <div className='flex justify-between gap-4 items-center ml-3 '>
                            <FaFacebookF className='duration-500 hover:text-primary' />
                            <AiOutlineTwitter className='duration-500 hover:text-primary' />
                            <AiOutlineInstagram className='duration-500 hover:text-primary' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

const Footerlink = ({ href = "#", title }) => (
    <li className='mb-3 hover:text-primary duration-200 ease-in-out cursor-pointer'>
        <Link href={href}>
            <a href={href}>{title}</a>
        </Link>
    </li>
)