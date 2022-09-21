import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './banner.module.css'
import Grid2 from '../components/grid2';

const MyBan = (filename) => (
    <Image
        src= {"/images/"+filename} // Route of the image file
        height={623} // Desired size with correct aspect ratio
        width={701} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);

let Comment = ({ children }) => {
    return <div className={styles.c_container}>{children}</div>;
}

let Block = ({ children }) => {
    return <div className={styles.block_container}>{children}</div>;
}

let Button = ({ children }) => {
    return <div id={styles.styleButton}>
                <div id={styles.styleBImage}>
                </div>
                <div id={styles.styleBText}>
                { children }
                </div>
            </div>
}
class Banner extends React.Component {
    render() {
        return (
            <Grid2>
                <div id={styles.styleSlogan}>
                    <div id={styles.styleShaodeTitle}>
                    Make Trading Easy In Web 3.0
                    </div>
                    <div id={styles.styleDetail}>
                    Trade 3.0 offers you a chance to participate in the world best projects in NFT space. We teamed up with well-known IPs all over the world, and our goal is creating the best trading experience in the Web 3.0 world.
                    <br/>
                    <br/>
                    Don't be afraid to take the first step, the world is changing no matter you like it or not. It is never too late to start your journey right now!
                    </div>
                    <div id={styles.styleCenter}>
                        <a href="/collection">
                            <Button>Explore</Button>
                        </a>
                    </div>
                </div>
                <Block>
                    <a href="/kof">
                        { MyBan("shutterstock_1549052903.png")}
                        <div className={styles.over_image}>
                            <Image
                                src= {"/images/snk-removebg-preview.png"} // Route of the image file
                                height={558} // Desired size with correct aspect ratio
                                width={524} // Desired size with correct aspect ratio
                                alt="Your Name"
                            />
                        </div>
                        <Comment>
                        Discover our Latest Project ! Powered by SNK
                        </Comment>
                    </a>
                </Block>
            </Grid2>
        )
    }
}
    
    export default Banner;