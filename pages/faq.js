import Header from "../block/header"
import Footer from "../block/footer";
import Partner from "../block/partner";
import Head from "next/head";
//import Layout from "../components/layout";
import commstyles from "./tou.module.css"
import styles from "./faq.module.css"

export default function pageFAQ() {
    return (
        <>
            <Head>
                <title>FAQ</title>
            </Head>
                <Header/>
                <div className={commstyles.TOUTitle}>
                FAQ
                </div>
                <div className={commstyles.TOUSubTitle}>
                WHAT IS Trade3.0?
                </div>
                <div className={commstyles.TOUDetail}>
                Trade3.0 is the first NFT Launchpad platform to focus on combining insurance, trade and empowerment. Apart from integrating the technique called ERC20 and supporting stable currency trade, our technology team is developing the transaction module of legal tender in the meantime to make everyone participate in “Trade” and enjoy the fun of “Web3”.
                </div>
                <div className={commstyles.TOUSubTitle}>
                HOW DO I JOIN Trade3.0?
                </div>
                <div className={styles.step_group}>
                    <div className={styles.step_box}>
                        <div className={styles.step_title}>
                        Step One
                        </div>
                        <div className={styles.step_detail}>
                        Click on the button named “Register/Login” in the upper right corner of any Trade3.0 page.
                        </div>
                    </div>
                    <div className={styles.step_box}>
                        <div className={styles.step_title}>
                        Step Two
                        </div>
                        <div className={styles.step_detail}>
                        Follow the instructions to fill out detailed information and submit.
                        </div>
                    </div>
                    <div className={styles.step_box}>
                        <div className={styles.step_title}>
                        Step Three
                        </div>
                        <div className={styles.step_detail}>
                        You will receive a letter to verify your membership in your submitted email.
                        </div>
                    </div>
                    <div className={styles.step_box}>
                        <div className={styles.step_title}>
                        Step Four
                        </div>
                        <div className={styles.step_detail}>
                        Connect the wallet after verification, and start enjoying the fun of Trade3.0.
                        </div>
                    </div>
                </div>
                <div className={commstyles.TOUSubTitle}>
                NON-FUNGIBLE TOKEN? WHAT DOES THAT MEAN?
                </div>
                <div className={commstyles.TOUDetail}>
                NFT(NON-FUNGIBLE TOKEN）is a Web3.0 application. Compared to Fungible Token, every NFT performs differently, and they cannot be replaced or separated from each other. Like any form of pictures, music, videos, even the 3D model works and any type of file structure, because of the technical support of blockchain, it will be difficult to distort and copy easily after the link has been established.
                </div>
                <div className={commstyles.TOUSubTitle}>
                WHAT KIND OF PAYMENT METHOD IS ALLOWED IN Trade3.0?
                </div>
                <div className={commstyles.TOUDetail}>
                We accept Crypto such as BTC, ETH, USDT, USDC. You will be able to use Coinbase, Metamask, Phantom and Sollet wallet to checkout. Fiat currency module is also developing now, we will provide credit card service in future.
                </div>
                <div className={commstyles.TOUSubTitle}>
                HOW DO I MINT?
                </div>
                <div className={styles.mint_group}>
                    <div className={styles.mint_box}>
                        <div>1</div>
                        <div>Sign in or Login Trade3.0</div>
                    </div>
                    <div className={styles.mint_box}>
                        <div>2</div>
                        <div>Connect your wallet</div>
                    </div>
                    <div className={styles.mint_box}>
                        <div>3</div>
                        <div>Pick your favorite collection</div>
                    </div>
                    <div className={styles.mint_box}>
                        <div>4</div>
                        <div>Click “MINT”</div>
                    </div>
                    <div className={styles.mint_box}>
                        <div>5</div>
                        <div>Comfirm with Wallet</div>
                    </div>
                    <div className={styles.mint_box}>
                        <div>6</div>
                        <div>Congrats!! You have your first nft now</div>
                    </div>
                </div>
                <div className={commstyles.TOUSubTitle}>
                ARE THERE PLATFORM FEES?
                </div>
                <div className={commstyles.TOUDetail}>
                Trade3.0 charges a fee for projects listed on the platform of 10%. At the time a token is purchased, 10% of the purchase price is transferred to Trade3.0 address with the balance immediately transferred to the project creator.
                </div>
                <div className={commstyles.TOUSubTitle}>
                CAN I GET A REFUND ON NFT?
                </div>
                <div className={commstyles.TOUDetail}>
                Per our Terms of Use, we do not issue any refunds for NFTs. There is no exception to this rule at the moment, including common requests such as accidental purchases, secondary market fluctuation, or discontent about edition numbers.
                </div>
                <div className={commstyles.TOUSubTitle}>
                HOW CAN I STAY SAFE FROM SCAMS?
                </div>
                <div className={styles.cc_container}>
                <h4>TL;DR:</h4>
                Make sure you’re buying a piece that originates from an authentic Trade3.0 address.
                <br/>
                Do not answer unsolicited direct messages
                <br/>
                Do not engage in trust-based trades
                <br/>
                Use common sense. If it’s too good to be true, it probably is.
                <br/>
                <br/>
                <h4>How to determine the authenticity of a collection</h4>
                If you’re unsure about the authenticity of a collection, we suggest checking the contract address in the OpenSea URL. All Trade3.0 projects are connected to one of the following smart contract addresses:
                <br/>
                ETHEREUM Block Chain Address
                <br/>
                SOLANA Block Chain Address
                <br/>
                POLYGON Block Chain Address
                <br/>
                OpenSea URLs use the following format: https://opensea.io/assets/[contract-address]/[token_id]
                <br/>
                Do not engage with unsolicite1d DMs
                <br/>
                If you’ve spent any amount of time in Discord (or social media), you’ve probably had a stranger reach out through a direct message. It’s harmless most of the time, but any unsolicited message should be met with a healthy dose of skepticism.
                <br/>
                To avoid these types of attacks, we recommend two options:
                <br/>
                Turn off direct messages from strangers.
                <br/>
                <br/>
                Do not click links from untrusted sources. If someone is sharing something with you, we highly recommend using a little Google-fu to find it yourself. Bad actors can create persuasive phishing websites.
                <br/>
                <br/>
                <h4>Trust-Based Trades</h4>
                The crypto ecosystem is designed to remove trust from the transaction process. The blockchain’s rules are structured so intermediaries are largely taken out of the equation, and people have ultimate control over their assets. However, private trade agreements inject trust back into the process in a way that also increases the likelihood of being scammed.
                <br/>
                <br/>
                <h4>How to trade</h4>
                To avoid being the victim during a trade, we recommend NEVER sending a piece and expecting to get something in return. Instead, use a swapping website. Use Common Sense
                <br/>
                The best line of defense against online scams is to use common sense and assume anyone reaching out privately has ulterior motives. Of course, con artists will evolve their tactics, but approaching every online interaction with skepticism will reduce your exposure to being compromised. And remember: if it sounds too good to be true, it probably is.
                <br/>
                </div>
                <div className={commstyles.TOUSubTitle}>
                HOW TO BE A Trade3.0 CREATOR?
                </div>
                <div className={commstyles.TOUDetail}>
                Are you digging entrepreneurship through sharing your creativity? Do you ever feel that you need a hand in establishing your IP? Please open a ticket on Trade3.0 discord server or send your work to service@trade3.com.
                <br/><br/>
                Trade3.0 will introduce more cooperation, encourage more exposure to artistic creation, integrate commerce through Trade3.0, and return traffic bonuses to artists. If you are interested in joining Trade3.0 creators,
                </div>
                <div className={commstyles.TOUSubTitle}>
                WHAT IF MY QUESTION ISN’T ANSWERED HERE?
                </div>
                <div className={commstyles.TOUDetail}>
                Our Discord server is where you'll find our thriving community of artists and collectors. In Discord not only can you join daily conversations about upcoming drops, but you'll also be in the best place to ask us for help. You'll find information about our artist application process, upcoming projects, user feedback & announcements for all things Trade3.0.
                <br/><br/>
                We hope to see you there!
                </div>
                <Partner/>
                <Footer/>
        </>
    )
}
