// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Features', path: '/features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Blogs', path: '/blogs' }
    ];
    return (
        <div>
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
