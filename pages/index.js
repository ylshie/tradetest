//import Link from 'next/link';
//import Image from 'next/image';
import Head from 'next/head';
//import Script from 'next/script';
//
import Header from '../block/header';
import Footer from '../block/footer';
import Partner from '../block/partner';
import Banner from '../block/banner'
import CommingSoon from '../block/comming';
import Blogger from '../block/blogger';
import Community from '../block/community';
//
import styles from './index.module.css'

var SubTitle = ({ children }) => {
  return <div id={styles["CommunityTitle"]}>{children}</div>;
}

var SpaceBlock = ({ children }) => {
  return <div className={styles.spcae_block}>{children}</div>;
}

export default function Trade3() {
  return (
    <>
        <Head>
            <title>Trade3</title>
        </Head>
        <div className="backcolor">
          <div className="backimage"></div>
            <Header/>
            <Banner/>
            <SpaceBlock></SpaceBlock>
            <CommingSoon/>
            <SpaceBlock></SpaceBlock>
            <Blogger/>
            <SpaceBlock></SpaceBlock>
            <SubTitle>COMMUNITY</SubTitle>
            <Community/>
            <Partner/>
            <Footer/>
        </div>
    </>
  );
}

