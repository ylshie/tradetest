import Head from "next/head";
//
import Header from "../block/header"
import Footer from "../block/footer";
import Partner from "../block/partner";

export default function pageCollection() {
    return (
        <>
            <Head>
                <title>Collectionn</title>
            </Head>

            <Header/>
            <div>
                To-Do
            </div>
            <Partner/>
            <Footer/>
        </>
    )
}
