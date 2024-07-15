// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

function Header() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Features', path: '/features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <div className='bg-[#1C1E53] text-white'>
            <div className='max-w-[1280px] m-auto flex items-center justify-between'>
                <a href="/"><img src={Logo} alt="logo" /></a>
                <nav>
                    <ul className='flex py-8 items-center gap-8'>
                        {links.map((link, index) => (
                            <li 
                                key={index} 
                                className={link.name === 'Contact' ? 'duration-[.3] cursor-pointer border border-[#F4F6FC] rounded-full px-[48px] py-[16px] hover:bg-white hover:text-[#1C1E53]' : ''}
                            >
                                <Link to={link.path} className='focus:border-b-2 border-[white]'>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
