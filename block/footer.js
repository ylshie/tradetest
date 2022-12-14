import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css'

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.styleFooter}>
                <div id={styles.styleFootIcon}>
                    <Image
                        src= {"/images/DEMO_00104.png"} // Route of the image file
                        height={130} // Desired size with correct aspect ratio
                        width={158} // Desired size with correct aspect ratio
                        alt="Demo"
                    />
                </div>
                <div id={styles.copywrite}> 
                Trade3.0 all right reserved
                </div>
                <div id={styles.styleFootList}>
                    <div className={styles.foottext}><a href="https://twitter.com/TRADE3_0">TWITTER</a></div>
                    <div className={styles.foottext}><a href="https://discord.gg/gR67UnMVeK">DISCORD</a></div>
                    <div className={styles.foottext}><a href="faq">FAQ</a></div>
                    <div className={styles.foottext}><a href="tou">TERMS OF USE</a></div>
                    <div className={styles.foottext}><a href="privacy">PRIVACY POLICY</a></div>
                </div>
            </div>
            );
    }
}

export default Footer;
