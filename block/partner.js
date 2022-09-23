import React from 'react';
import Image from 'next/image';
//
import styles from './partner.module.css';

class Partner extends React.Component {
    render() {
        return (
            <div className={styles.stylePartner}>
                <div className={styles.partnerText}>
                PARTNER
                </div>
                
                <div className={styles.iconNewave}>
                    <Image  src= {"/images/Newave_Capital_logo.png"} // Route of the image file
                                height={53} // Desired size with correct aspect ratio
                                width={200} // Desired size with correct aspect ratio
                                alt="Newave"
                        />
                </div>
                <div className={styles.iconSecondLive}>
                    <Image  src= {"/images/SecondLive-logo.png"} // Route of the image file
                                height={60} // Desired size with correct aspect ratio
                                width={200} // Desired size with correct aspect ratio
                                alt="SecondLive"
                        />
                </div>
                <div className={styles.iconSNK}>
                    <Image  src= {"/images/SNK-logo.png"} // Route of the image file
                                height={134} // Desired size with correct aspect ratio
                                width={200} // Desired size with correct aspect ratio
                                alt="SecondLive"
                        />
                </div>
            </div>
        )
    }
}

export default Partner;
