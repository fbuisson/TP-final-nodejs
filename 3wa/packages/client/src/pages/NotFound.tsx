import React from "react";
import styles from "./NotFound.module.css";


const NotFound: React.FC = () => {


  return (
    <div style={{backgroundColor: "#28254c", minHeight: "100vh"}}>
        <div className={styles.box}>
            <div className={styles.box__ghost}>
                <div className={styles.symbol}></div>
                <div className={styles.symbol}></div>
                <div className={styles.symbol}></div>
                <div className={styles.symbol}></div>
                <div className={styles.symbol}></div>
                <div className={styles.symbol}></div>
                
                <div className={styles.box__ghostContainer}>
                <div className={styles.box__ghostEyes}>
                    <div className={styles.box__eyeLeft}></div>
                    <div className={styles.box__eyeRight}></div>
                </div>
                <div className={styles.box__ghostBottom}>

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                </div>
                <div className={styles.box__ghostShadow}></div>
            </div>
            
            <div className={styles.box__description}>
                <div className={styles.box__descriptionContainer}>
                <div className={styles.box__descriptionTitle}>Whoops!</div>
                <div className={styles.box__descriptionText}>It seems like we couldn't find the page you were looking for</div>
                </div>
                
                <a href="/" className={styles.box__button}>Go back To Home</a>
                
            </div>
        </div>
    </div>
  );
};

export default NotFound;
