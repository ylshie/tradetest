import Head from "next/head";
import Image from "next/image";
import React from "react";
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
    return <div id={styles.Person}>{children}</div>;
}
var Arrow = ({ children }) => {
    return <div className={styles.Arrow} id={styles.LeftArrow}>{children}</div>;
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        // Created ref
        this.myInputRef = React.createRef();
        this.getInputValue = this.getInputValue.bind(this);
    }
    getInputValue() {
        const inputValue = this.myInputRef.current.value;
        alert(inputValue)
    }
    render() {
        return (
            <>
              <div>
                <input type="text" ref={this.myInputRef} />
                <button onClick={this.getInputValue}>Submit</button>
              </div>
            </>
          );
    }
}

const mai = {
    image: "不知火舞.png",
    name: "Mai Shiranui",
    detail: "Shiranui’s parents died when she was a child, and subsequently was raised by her grandfather. She fell in love with Andy, who also trained under her grandfather. She seduces her opponent with her sexy appearance before destroying them. She dresses conservatively in private and is good at illustration, cooking, playing the piano and tea ceremony.",
    special: "- Ninja Bee",
    super: "- Super Ninja Bee<br\/>- Dance of the Phoenix<br\/>- Dance of the Water Bird<br\/>",
    fighting: "SHIRANUI-RYUU NINJUTSU.",
    birthday: "JANUARY 1",
    height: "165cm",
    weight: "48kg",
    blood: "B",
    dressing_official: "RED KUNOICHI DRESS WITH WHITE OUTLINES AND A WHITE SASH TIED AROUND THE WAIST.",
    dressing_daily_1: "FASHION CASUAL OUTFIT",
    dressing_daily_2: "VARIOUS (WHICH ANDY MIGHT INTERESTED)."
}

const iori = {
    image: "不知火舞2.png",
    name: "IORI YAGAMI",
    detail: "FIGHTING STYLE: YAGAMI STYLE OF ANCIENT MARTIAL ARTS + PURE INSTINCT.<br\>BIRTHDAY: MARCH 25<br/>HEIGHT: 182cm<br/>WEIGHT: 76kg<br/>",
    special: "- Ninja Bee",
    super: "- Super Ninja Bee<br\/>- Dance of the Phoenix<br\/>- Dance of the Water Bird<br\/>",
    fighting: "YAGAMI STYLE OF ANCIENT MARTIAL ARTS + PURE INSTINCT.",
    birthday: "MARCH 25",
    height: "182cm",
    weight: "76kg",
    blood: "O",
    dressing_official: "LEATHER COAT OR JACKET AND SHIRT WITH DRESS PANTS",
    dressing_daily_1: "TRADITIONAL ORIENTAL DRESS",
    dressing_daily_2: "CASUAL SPORTSWARE."
}

class BannerBox extends React.Component {
    constructor(props) {
        super(props);
        // Created ref
        this.c_image = React.createRef();
        this.c_name = React.createRef();
        //this.c_detail = React.createRef();
        //this.c_special = React.createRef();
        //this.c_super = React.createRef();
        this.c_fighting = React.createRef();
        this.c_birthday = React.createRef();
        this.c_height = React.createRef();
        this.c_weight = React.createRef();
        this.c_blood = React.createRef();
        this.c_dressing_official = React.createRef();
        this.c_dressing_daily_1 = React.createRef();
        this.c_dressing_daily_2 = React.createRef();
        this.a_left = React.createRef();
        this.a_right = React.createRef();
        
        this.onLeft = this.onLeft.bind(this);
        this.onRight = this.onRight.bind(this);
    }
    onLeft() {
        this.c_image.current.src = "/images/" + mai.image
        this.c_name.current.innerHTML = mai.name;
        //this.c_detail.current.innerHTML = mai.detail;
        //this.c_special.current.innerHTML = mai.special;
        //this.c_super.current.innerHTML = mai.super;
        this.c_fighting.current.innerHTML  = mai.fighting;
        this.c_birthday.current.innerHTML  = mai.birthday;
        this.c_height.current.innerHTML  = mai.height;
        this.c_weight.current.innerHTML  = mai.weight;
        this.c_blood.current.innerHTML  = mai.blood;
        this.c_dressing_official.current.innerHTML  = mai.dressing_official;
        this.c_dressing_daily_1.current.innerHTML  = mai.dressing_daily_1;
        this.c_dressing_daily_2.current.innerHTML  = mai.dressing_daily_2;
        this.a_right.current.style.visibility = "visible";
        this.a_left.current.style.visibility = "hidden";
    }
    onRight() {
        //const inputValue = this.myInputRef.current.value;
        //alert(this.image_2)
        this.c_image.current.src = "/images/" + iori.image;
        this.c_name.current.innerHTML = iori.name;
        //this.c_detail.current.innerHTML = iori.detail;
        //this.c_special.current.innerHTML = iori.special;
        //this.c_super.current.innerHTML = iori.super;
        this.c_fighting.current.innerHTML  = iori.fighting;
        this.c_birthday.current.innerHTML  = iori.birthday;
        this.c_height.current.innerHTML  = iori.height;
        this.c_weight.current.innerHTML  = iori.weight;
        this.c_blood.current.innerHTML  = iori.blood;
        this.c_dressing_official.current.innerHTML  = iori.dressing_official;
        this.c_dressing_daily_1.current.innerHTML  = iori.dressing_daily_1;
        this.c_dressing_daily_2.current.innerHTML  = iori.dressing_daily_2;
        this.a_left.current.style.visibility = "visible";
        this.a_right.current.style.visibility = "hidden";
    }
    render() {
        return (
            <IntroBox>
                <RoundBox>
                    <div className={styles.Arrow} id={styles.LeftArrow} onClick={this.onLeft}>
                        <img
                            ref={this.a_left}
                            src= {"/images/left.svg"} // Route of the image file
                            height={36} // Desired size with correct aspect ratio
                            width={36} // Desired size with correct aspect ratio
                            alt="left"
                        />
                    </div>
                    <div className={styles.Person}>
                        <img
                            id={styles.idol}
                            ref={this.c_image}
                            src= {"/images/" + mai.image} // Route of the image file
                            height={451} // Desired size with correct aspect ratio
                            width={451} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </div>
                    <div className={styles.Arrow} id={styles.RightArrow} onClick={this.onRight}>
                        <img
                            ref={this.a_right}
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
                    <div className={styles.Name} ref={this.c_name}>
                    {mai.name}
                    </div>
                    
                    <div>
                        <span className={styles.SubTitle2}>
                        Fightig Style: 
                        </span>
                        <span className={styles.Detail2} ref={this.c_fighting}>
                        {mai.fighting}
                        </span>
                    </div>
                    
                    <div>
                        <span className={styles.SubTitle2}>
                        Birthday: 
                        </span>
                        <span className={styles.Detail2} ref={this.c_birthday}>
                        {mai.birthday}
                        </span>
                    </div>

                    <div>
                        <span className={styles.SubTitle2}>
                        Height: 
                        </span>
                        <span className={styles.Detail2} ref={this.c_height}>
                        {mai.height}
                        </span>
                    </div>

                    <div>
                        <span className={styles.SubTitle2}>
                        Weight: 
                        </span>
                        <span className={styles.Detail2} ref={this.c_weight}>
                        {mai.weight}
                        </span>
                    </div>

                    <div>
                        <span className={styles.SubTitle2}>
                        Blood Type: 
                        </span>
                        <span className={styles.Detail2} ref={this.c_blood}>
                        {mai.blood}
                        </span>
                    </div>

                    <div>
                        <span className={styles.SubTitle2}>
                        Dressig Style
                        </span>
                    </div>
                    
                    <div>
                        <span className={styles.SubTitle2}>
                        Offical: 
                        </span>
                        <span className={styles.Detail2} ref={this.c_dressing_official}>
                        {mai.dressing_official}
                        </span>
                    </div>

                    <div>
                        <span className={styles.SubTitle2}>
                        Daily 1: 
                        </span>
                        <span className={styles.Detail2} ref={this.c_dressing_daily_1}>
                        {mai.dressing_daily_1}
                        </span>
                    </div>

                    <div>
                        <span className={styles.SubTitle2}>
                        Daily 2: 
                        </span>
                        <span className={styles.Detail2} ref={this.c_dressing_daily_2}>
                        {mai.dressing_daily_2}
                        </span>
                    </div>
                </Intro>
            </IntroBox>
          );
    }
}

export default function pageKOF() {    
    return (
        <>
            <Head>
                <title>King of Fighter | Trade3</title>
            </Head>
            <div className="backcolor">
            <div className="backimage"></div>
            <Header/>
            <BannerBox></BannerBox>
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
                <div id={styles.char_title}>
                KOF'98 UM FE
                </div>
                <div id={styles.char_subtitle}>
                Realize the ultimate evolution
                </div>
                <div id={styles.char_detail}>
                "THE KING OF FIGHTERS "98 ULTIMATE MATCH FINAL EDITION" is a fully reworked version of the popular game "KOF '98" in the King of Fighters series, and it is finally available on PlayStation 4! 
                <br/>
                <br/>
                Based on "KOF '98", it is equipped with a new "ULTIMATE MODE" system and game balance adjustments unique to "ULTIMATE MATCH". In addition, various game modes such as "CHALLENGE MODE" and "PRACTICE MODE" have been added!
                <br/>
                <br/>
                </div>
            </div>
            <div className={styles.project_group}>
                <div>
                    <div className={styles.project_title}>Space</div>
                    <div className={styles.project_detail}> (SecondLive Collaborative Project)</div>
                    <div className={styles.styleOverParent}>
                        <div className={styles.textOverImage}>Comming Soon</div>
                        <div className={styles.project_box}></div>    
                    </div>
                    <div className={styles.project_subtitle}>copywrite</div>
                    <div className={styles.project_detail}>
                    Create an exclusive metaverse venue for TRADE3.0<br/>
                    You can display your own NFTs at the Metaverse Arena<br/>
                    Community members can participate in the layout together<br/>
                    </div>
                </div>
                <div>
                    <div className={styles.project_title}>AR/VR</div>
                    <div className={styles.project_detail}>  .</div>
                    <div className={styles.styleOverParent}>
                        <div className={styles.project_box}></div>
                        <div className={styles.textOverImage}>Comming Soon</div>
                    </div>
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
                    <div className={styles.note_detail}>
                    TRADE3.0 holder 
                    Participate in subsequent rounds of lucky draws
                    </div>
                </div>
                <div>
                    <div className={styles.note_title}>NEW NFTs</div>
                    <div className={styles.note_detail}>
                    Own your own exclusive NFT props
                    </div>
                </div>
            </div>
            <Partner/>
            <Footer/>
            </div>
        </>
    )
}
