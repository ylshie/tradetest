import React from 'react';
import Image from 'next/image';
import styles from './blogger.module.css'
import Link from 'next/link';

const MyImage = (filename) => (
    <Image
        src= {"/images/"+filename} // Route of the image file
        height={296} // Desired size with correct aspect ratio
        width={540} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);

function Blog({ children }) {
    return <div className={styles.b_container}>{children}</div>;
}

function Comment({ children }) {
    return <div className={styles.c_container}>{children}</div>;
}

function Grid({ children }) {
    return <div className={styles.grid_container}>{children}</div>;
}

class Blogger extends React.Component {
    render() {
        return (
            <Grid>
                <Blog>
                    <Link href="/">
                        <a>{ MyImage("p1.png")}
                            <Comment>
                            Trade3.0 links to everything through NFT(NON-FUNGIBLE TOKEN), and it is the first NFT Launchpad platform that focuses on combining insurance, trading and empowerment. In order to make everyone participate in “Trade” and enjoy the fun of “Web3”, Our team integrates the technique called ERC20 which supports stable currency trading.
                            </Comment>
                        </a>
                    </Link>
                </Blog>
                <Blog>
                    <Link href="/">
                        <a>{ MyImage("p2.png")}
                            <Comment>
                            Our team is committed to develop the well-known IP resource including the artists, and to attract the network flow which breaks the circle of professions. Besides, Our technology team is developing the transaction module of legal tender, so those future transactions will support legal tender, and provide users with a  more convenient web3 experience scenario. 
                            </Comment>
                        </a>
                    </Link>
                </Blog>
                <Blog>
                    <Link href="/">
                        <a>{ MyImage("p3.png")}
                            <Comment>
                            Is Web 3.0 really that aggressive and out of reach? Don't worry, the arrival of Trade3.0 has greatly lowered the threshold for entering the crypto market! We provide extensive and everything you need for NFT issuance, so you no longer have to worry about coding, development, smart contracts, connecting encrypted wallets, marketing, and even the community. We provide innovative and unique solutions to the creators and investors to create and launch their NFTs on the Trade3.0 NFT Launchpad.
                            </Comment>
                        </a>
                    </Link>
                </Blog>
                <Blog>
                    <Link href="/">
                        <a>{ MyImage("p4.png")}
                            <Comment>
                            During the first stage, we cooperated with the internationally renowned video game brand "SNK" to launch the collection-level NFT of the world-renowned IP "KING OF FIGHTER '98 UM"; then Trade3.0 signed a strategic cooperation agreement with a top brokerage company. There will be Hollywood superstars, well-known sports stars and artists releasing nft on Trade3.0 soon.
                            </Comment>
                        </a>
                    </Link>
                </Blog>
                <Blog>
                    <Link href="/">
                        <a>{ MyImage("p5.png")}
                            <Comment>
                            The application after the release is also ready, with no serial code or special hardware require, and the empowerment based on blockchain technology development, Trade3.0 provides NFT project parties easily access to the integrated application of NFT real-world scenarios, regardless if it is exchange, record or even query wallets Internal NFT holding time, etc., a variety of data will support the design of marketing activities, provide project cost estimates for activities, and greatly improve community atmosphere and activity.
                            </Comment>
                        </a>
                    </Link>
                </Blog>
            </Grid>
            );
    }
}

export default Blogger;
