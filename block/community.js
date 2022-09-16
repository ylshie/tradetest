import React from 'react';
import styles from './community.module.css'
import Grid2 from './../components/grid2';

class Community extends React.Component {
    render() {
        return (
            <Grid2>
                <div id={styles.styleCommunity}>
                    <div id={styles.styleCommImage}>
                    Comming Soon
                    </div>
                    <div id={styles.styleTitle}>
                    METAVERSE SPACE
                    </div>
                    <div id={styles.styleDetail}>
                    Free metaverse space for campaign, exhibition or concert.
                    </div>
                </div>
                <div id={styles.styleCommunity}>
                    <div id={styles.styleCommImage}>
                    Comming Soon
                    </div>
                    <div id={styles.styleTitle}>
                    AIRDROP ALERT!!!!
                    </div>
                    <div id={styles.styleDetail}>
                    Members will be inform latest news even airdrop from luxery brands, famous artists, superstars and athletes NFT project.
                    </div>
                </div>
            </Grid2>
            );
    }
}

export default Community;

