import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../index.css';

function Footer() {
    return (
        <div className="footer bg-[#9467a196] w-full absolute bottom-0">
            <div className="container mx-auto p-2 flex justify-between items-center text-white max-sm:flex max-sm:flex-row max-sm:h-auto max-sm:place-content-center max-sm:gap-20">
                <div className="social-media-icons flex flex-row ml-2">
                    <div className='text-black'>
                        <a href="https://github.com/edanurabakoc" target="_blank" className="mr-4">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <div className='text-green-500'>
                        <a href="https://wa.me/905340667871" target="_blank" className="mr-4">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                    <div className='text-l text-[#0a66c2]'>
                        <a href="https://www.linkedin.com/in/edanurabakoc/" target="_blank" className="mr-4">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
                <div className="contact-info text-sm max-sm:text-sm/[17px]">
                    <a href="https://wa.me/905340667871" target="_blank" rel="noopener noreferrer">Telefon: (+90) 534 066 78 71</a>
                </div>
                <div className="text-sm max-sm:hidden">
                    <a href="mailto:eda.abakoc@gmail.com">E-mail: eda.abakoc@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;