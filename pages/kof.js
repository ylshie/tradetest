import Head from "next/head";
import Image from "next/image";
//
import Header from "../block/header"
import Footer from "../block/footer";
import Partner from "../block/partner";
//
import styles from "./kof.module.css"

var IntroBox = ({ children }) => {
    return <div className={styles.IntroBox}>{children}</div>;
}
var RoundBox = ({ children }) => {
    return <div className={styles.RoundBox}>{children}</div>;
}
var Intro = ({ children }) => {
    return <div className={styles.Intro}>{children}</div>;
}
var Person = ({ children }) => {
    return <div className={styles.Person}>{children}</div>;
}
var Arrow = ({ children }) => {
    return <div className={styles.Arrow} id={styles.LeftArrow}>{children}</div>;
}

export default function pageKOF() {
    return (
        <>
            <Head>
                <title>King of Fighter</title>
            </Head>

            <Header/>
            <IntroBox>
                <RoundBox>
                    <div className={styles.Arrow} id={styles.LeftArrow}>
                        <Image
                            src= {"/images/left.svg"} // Route of the image file
                            height={36} // Desired size with correct aspect ratio
                            width={36} // Desired size with correct aspect ratio
                            alt="left"
                        />
                    </div>
                    <Person>
                        <Image
                            src= {"/images/不知火舞.png"} // Route of the image file
                            height={451} // Desired size with correct aspect ratio
                            width={451} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </Person>
                    <div className={styles.Arrow} id={styles.RightArrow}>
                        <Image
                            src= {"/images/right.svg"} // Route of the image file
                            height={36} // Desired size with correct aspect ratio
                            width={36} // Desired size with correct aspect ratio
                            alt="left"
                        />
                    </div>
                </RoundBox>
                <Intro>
                    <div className={styles.SubTitle}>
                    character introduction
                    </div>
                    <div className={styles.Name}>
                    Mai Shiranui
                    </div>
                    <div className={styles.Detail}>
                    Shiranui’s parents died when she was a child, and subsequently was raised by her grandfather. She fell in love with Andy, who also trained under her grandfather. She seduces her opponent with her sexy appearance before destroying them. She dresses conservatively in private and is good at illustration, cooking, playing the piano and tea ceremony.
                    </div>
                    <br/>
                    <div className={styles.SubTitle}>
                    Special move: 
                    </div>
                    <div className={styles.Detail}>
                    - Ninja Bee
                    </div>
                    <div className={styles.SubTitle}>
                    Super Special move: 
                    </div>
                    <div className={styles.Detail}>
                    - Super Ninja Bee<br/>
                    - Dance of the Phoenix<br/>
                    - Dance of the Water Bird<br/>
                    </div>
                </Intro>
            </IntroBox>
            <div className={styles.Title}>
                Invitaion to the TRADE3.0 contest
            </div>
            <div className={styles.Title2}>
            Let’s fight!!
            </div>
            <div className={styles.Title3}>
            MINDMAP
            </div>
            <div className={styles.item_group}>
                <div className={styles.item_box}>
                    <div className={styles.item_title}>
                    METAVERSE
                    </div>
                    <div className={styles.item_detail}>
                    SecondLive space’s NFT exhibition hall cooperation method AR/VR
                    </div>
                </div>
                <div className={styles.item_box}>
                    <div className={styles.item_title}>
                    COMMUNITY
                    </div>
                    <div className={styles.item_detail}>
                    Life Fighter Story Sharing derivative work/Textures/Memes Memory Sharing (80s and 90s)
                    </div>
                </div>
                <div className={styles.item_box}>
                    <div className={styles.item_title}>
                    AIRDROP NFT
                    </div>
                    <div className={styles.item_detail}>
                    New free NFT’s will be given away in a raffle
                    </div>
                </div>
                <div className={styles.item_box}>
                    <div className={styles.item_title}>
                    AIRDROP<br/>KOF 98 UMFE
                    </div>
                    <div className={styles.item_detail}>
                    The limited edition Holder will receive a free airdrop of the game "KOF '98 UM FE" on the PlayStation 4 platform.    
                    </div>
                </div>
            </div>
            <div id={styles.AvailableBox}>
                <div id={styles.Char1}>
                    <Image
                        src= {"/images/img_cha_01.png"} // Route of the image file
                        height={711} // Desired size with correct aspect ratio
                        width={485} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                </div>
                <div id={styles.Char2}>
                    <Image
                        src= {"/images/img_cha_02.png"} // Route of the image file
                        height={847} // Desired size with correct aspect ratio
                        width={341} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                </div>
            </div>
            <div className={styles.project_group}>
                <div>
                    <div className={styles.project_title}>Space</div>
                    <div className={styles.project_detail}> (SecondLive Collaborative Project)</div>
                    <div className={styles.project_box}>Comming Soon</div>
                    <div className={styles.project_subtitle}>copywrite</div>
                    <div className={styles.project_detail}>
                    Create an exclusive metaverse venue for TRADE3.0<br/>
                    You can display your own NFTs at the Metaverse Arena<br/>
                    Community members can participate in the layout together<br/>
                    </div>
                </div>
                <div>
                    <div className={styles.project_title}>AR/VR</div>
                    <div className={styles.project_box}>Comming Soon</div>
                    <div className={styles.project_subtitle}>copywrite</div>
                    <div className={styles.project_detail}>
                    Show off your NFTs in exclusive venues<br/>
                    Community Contributors Will Provide Steam Grants<br/>
                    </div>
                </div>
            </div>
            <div className={styles.Title2}>
            prepare for <br/>
            a wave of airdrops!<br/>
            </div>
            <div className={styles.project_group}>
                <div>
                    <div className={styles.note_title}>copywrite</div>
                    <div className={styles.project_detail}>
                    TRADE3.0 holder 
                    Participate in subsequent rounds of lucky draws
                    </div>
                </div>
                <div>
                    <div className={styles.note_title}>NEW NFTs</div>
                    <div className={styles.project_detail}>Own your own exclusive NFT props</div>
                </div>
            </div>
            <Partner/>
            <Footer/>
        </>
    )
}
