// RateList.jsx
import React, { useState } from 'react';
import Card from './RateCard';
import styles from './RateCard.module.css';

function CardList() {
    const [selectedTariff, setSelectedTariff] = useState(null);

    const rates = [
        { title: "Безлимитный 300", price: 300, speed: "до 10 Мбит/сек", info: "Объем включенного трафика не ограничен", backgroundColor: "#87CEFA" },
        { title: "Безлимитный 450", price: 450, speed: "до 50 Мбит/сек", info: "Объем включенного трафика не ограничен", backgroundColor: "#20B2AA" },
        { title: "Безлимитный 550", price: 550, speed: "до 100 Мбит/сек", info: "Объем включенного трафика не ограничен", backgroundColor: "#F08080" },
        { title: "Безлимитный 1000", price: 1000, speed: "до 200 Мбит/сек", info: "Объем включенного трафика не ограничен", backgroundColor: "black" }
    ];

    const handleTariffClick = (index) => {
        setSelectedTariff(index);
    };

    return (
        <div className={styles.cardContainer}>
            {rates.map((rate, index) => (
                <Card
                    key={index}
                    title={rate.title}
                    price={rate.price}
                    speed={rate.speed}
                    info={rate.info}
                    backgroundColor={rate.backgroundColor}
                    isSelected={index === selectedTariff}
                    onClick={() => handleTariffClick(index)}
                />
            ))}
        </div>
    );
}

export default CardList;
