import React from 'react';
import Image from 'next/image';
//
import styles from './header.module.css';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <div id={styles.logo}>
                    <a href="/">
                        <Image
                            src= {"/images/LOGO.png"} 
                            layout="fill"
                            alt="LOGO"
                        />
                    </a>
                </div>
                <div id={styles.textCol} className={styles.headText}>
                    <a href="/collection">
                    Collection
                    </a>
                </div>
                <div id={styles.textFAQ} className={styles.headText}>
                    <a href="/faq">
                    FAQ
                    </a>  
                </div>
                <div id={styles.iconTwitter}>
                    <a href="https://twitter.com/TRADE3_0">
                        <Image  src= {"/images/Twitter.png"} // Route of the image file
                                height={40} // Desired size with correct aspect ratio
                                width={40} // Desired size with correct aspect ratio
                                alt="Twitter"
                        />
                    </a>
                </div>
                <div id={styles.iconFB}>
                    <a href="https://www.facebook.com/profile.php?id=100083408177430">
                        <Image  src= {"/images/FB.png"} // Route of the image file
                                height={30} // Desired size with correct aspect ratio
                                width={30} // Desired size with correct aspect ratio
                                alt="Facebook"
                        />
                    </a>
                </div>
                <div id={styles.iconDC}>
                    <a href="https://discord.gg/gR67UnMVeK">
                        <Image  src= {"/images/DC.png"} // Route of the image file
                                height={20} // Desired size with correct aspect ratio
                                width={20} // Desired size with correct aspect ratio
                                alt="DC"
                        />
                    </a>
                </div>
                {/*
                <div id={styles.iconProfile}>
                    <a>
                        <Image  src= {"/images/Profile.png"} // Route of the image file
                                height={20} // Desired size with correct aspect ratio
                                width={20} // Desired size with correct aspect ratio
                                alt="Profile"
                        />
                    </a>
                </div>
                */}
            </div>
        );
    }
}

export default Header;