import React from 'react';
import styles from './RateCard.module.css';

function Card(props) {
    const cardStyle = {
        backgroundColor: props.backgroundColor
    };

    const highlightClass = props.price === 550 ? styles.highlight : '';

    return (
        <div className={`${styles.rateCard} ${highlightClass}`}>
            <h2 className={styles.cardTitle} style={cardStyle}>{props.title}</h2>
            <div className={styles.cardBody} style={cardStyle}>

                <p className={styles.cardCurrency}>руб</p>
                <p className={styles.cardPrice}>{`${props.price}`}<span className={styles.pricePeriod}>/в мес</span></p>


            </div>
            <p className={styles.cardSpeed}>{props.speed}</p>
            <div className={styles.cardFooter}>
                <div className={styles.cardInfo}>{props.info}</div>

            </div>
        </div>
    );
}

export default Card;