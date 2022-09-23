import React from 'react';
import Image from 'next/image';
//
import styles from './header.module.css';

const twitterURL = "https://twitter.com/TRADE3_0";
const FBURL = "https://www.facebook.com/profile.php?id=100086136156050"
//"https://www.facebook.com/profile.php?id=100083408177430"
const DCURL = "https://discord.gg/gR67UnMVeK"

class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>                
                <span id={styles.logo}>
                    <a href="/">
                        <Image
                            src= {"/images/LOGO.png"} 
                            layout="fill"
                            alt="LOGO"
                        />
                    </a>
                </span>
                <span id={styles.appendtext}>
                    <span id={styles.textCol} className={styles.headText}>
                        <a href="/collection">
                        Collection
                        </a>
                    </span>
                    <span id={styles.textFAQ} className={styles.headText}>
                        <a href="/faq">
                        FAQ
                        </a>  
                    </span>
                </span>
                <span className={styles.iconbox}>
                    <span id={styles.iconTwitter} className={styles.icon}>
                        <a href={twitterURL}>
                            <Image  src= {"/images/Twitter.png"} // Route of the image file
                                    height={30} // Desired size with correct aspect ratio
                                    width={30} // Desired size with correct aspect ratio
                                    alt="Twitter"
                            />
                        </a>
                    </span>
                    <span id={styles.iconFB} className={styles.icon}>
                        <a href={FBURL}>
                            <Image  src= {"/images/FB.png"} // Route of the image file
                                    height={30} // Desired size with correct aspect ratio
                                    width={30} // Desired size with correct aspect ratio
                                    alt="Facebook"
                            />
                        </a>
                    </span>
                    <span id={styles.iconDC} className={styles.icon}>
                        <a href={DCURL}>
                            <Image  src= {"/images/DC.png"} // Route of the image file
                                    height={30} // Desired size with correct aspect ratio
                                    width={30} // Desired size with correct aspect ratio
                                    alt="DC"
                            />
                        </a>
                    </span>
                </span>
                
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