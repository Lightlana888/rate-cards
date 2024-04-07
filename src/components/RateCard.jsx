// RateCard.jsx
import React from 'react';
import styles from './RateCard.module.css';

function Card({ title, price, speed, info, backgroundColor, onClick, isSelected }) {
    const cardStyle = {
        backgroundColor: backgroundColor
    };



    const handleClick = () => {
        onClick && onClick();
    };


    const selectedClass = isSelected ? styles.selected : '';

    return (
        <div
            className={`${styles.rateCard}  ${selectedClass}`}

            onClick={handleClick}
        >
            <h2 className={styles.cardTitle} style={cardStyle}>{title}</h2>
            <div className={styles.cardBody} style={cardStyle}>
                <p className={styles.cardCurrency}>руб</p>
                <p className={styles.cardPrice}>{`${price}`}<span className={styles.pricePeriod}>/в мес</span></p>
            </div>
            <p className={styles.cardSpeed}>{speed}</p>
            <div className={styles.cardFooter}>
                <div className={styles.cardInfo}>{info}</div>
            </div>
        </div>
    );
}

export default Card;
