import React from 'react';
import Image from 'next/image';
//
import styles from './comming.module.css'

const MyCome = (filename) => (
    <div id={styles["styleOver"]}>
        <Image
            src= {"/images/"+filename} // Route of the image file
            height={350} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Your Name"
        />
    </div>
);

function Grid({ children }) {
    return <div className={styles.grid_container}>{children}</div>;
}

class CommingSoon extends React.Component {
    render() {
        return (
            <Grid>
                <div id={styles.styleComing}>
                    <div id={styles.styleOverParent}>
                    { MyCome("cyber_dino.png")}
                    { MyCome("coming1.svg")}
                    </div>
                </div>
                <div id={styles.styleComing}>
                    <div id={styles.styleOverParent}>
                        { MyCome("jamojaya.png")}
                        { MyCome("coming1.svg")}
                    </div>
                </div>
            </Grid>
        );
    }
}

export default CommingSoon;
