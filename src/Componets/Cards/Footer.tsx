import React from 'react';
import logo from './logo-text.png'

const Footer = () => {
    return (
        <div>
              <footer className="mt-16">
            <div className="flex justify-between container mx-auto px-8">
                <div>
                    <img src={logo} alt="" />
                    <p className='pt-3.5'>Curated tools, technologies, and resources for developers building <br />
                    modern software.</p>
                    <ul className='flex gap-3.5 pt-6'>
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className='gap-3'>
                 <h3 className='font-bold'>PRODUCT</h3>
                 <ul>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                 </ul>
                </div>

                <div className='gap-3'>
                    <h3 className='font-bold'>COMPANY</h3>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='gap-3'>
                    <h3 className='font-bold'>LEGAL</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;