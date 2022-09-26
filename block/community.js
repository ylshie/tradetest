import React from 'react';
//import Video from 'react';
import styles from './community.module.css'
import Grid2 from './../components/grid2';

class Community extends React.Component {
    render() {
        return (
            <Grid2>
                <div id={styles.styleCommunity}>
                    <div>
                        <div className={styles.video_box}>
                            <video  loop controls muted 
                                    src="./videos/400X200.mp4" 
                                    width="100%">
                            </video>
                            <video  loop controls muted 
                                    src="./videos/sequence01.mp4" 
                                    width="100%">
                            </video>
                        </div>
                        {/*<div id={styles.styleCommImage}>
                        Comming Soon
                        </div>
                        */}
                    </div>
                    <div id={styles.styleTitle}>
                    METAVERSE SPACE
                    </div>
                    <div id={styles.styleDetail}>
                    Create an exclusive metaverse venue for TRADE3.0<br/>
                    You can display your own NFTs at the Metaverse Arena Community
                    members can participate in the layout together. More metaverse
                    space for different campaign, exhibition or concert.<br/>
                    {/*Free metaverse space for campaign, exhibition or concert.*/}
                    </div>
                </div>
                <div id={styles.styleCommunity}>
                    <div className={styles.video_box}>
                        <video  loop controls muted 
                                src="./videos/sequence02.mp4" 
                                width="100%">
                        </video>
                    </div>
                    {/*<div id={styles.styleCommImage}>
                    Comming Soon
                    </div>*/}
                    <div id={styles.styleTitle}>
                    AIRDROP ALERT!!!!
                    </div>
                    <div id={styles.styleDetail}>
                    Trade3.0 create a realistic piece, complete with additional
                    visuals, sounds, and many other virtual effects.
                    {/*Members will be inform latest news even airdrop from luxery brands, famous artists, superstars and athletes NFT project.*/}
                    </div>
                </div>
            </Grid2>
            );
    }
}

export default Community;

