import Head from "next/head";
//
import Header from "../block/header"
import Footer from "../block/footer";
import Partner from "../block/partner";
import Image from "next/image";
import styles from "./collection.module.css"

const MyBan = (filename) => (
    <Image
        src= {"/images/"+filename} // Route of the image file
        height={345} // Desired size with correct aspect ratio
        width={589} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);

export default function pageCollection() {
    return (
        <>
            <Head>
                <title>Collection | Trade3</title>
            </Head>
            <div className="backcolor">
                <div className="backimage"></div>
                <Header/>
                <div className={styles.outbox}>
                    <a href="/kof">
                        <div className={styles.box}>
                            <div className={styles.image}>{MyBan("c_2022-08-03_20.19.png")}</div>
                            <div className={styles.textbox}>
                                <div className={styles.title}>YAGAMI  SHIRANUI</div>
                            </div>   
                        </div>
                    </a>
                    <div className={styles.box}>
                        <div className={styles.image}>{MyBan("c_1662975886567.png")}</div>
                        <div className={styles.textbox}>
                            <div className={styles.title}>CYBER DINOSAUR</div>
                            <div className={styles.subtitle}>Coming Soon</div>
                        </div>       
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}>{MyBan("c_jamojaya.png")}</div>
                        <div className={styles.textbox}>
                            <div className={styles.title}>JAMOJAYA</div>
                            <div className={styles.subtitle}>Coming Soon</div>
                        </div>                    
                    </div>
                </div>
                <Partner/>
                <Footer/>
            </div>
        </>
    )
}
