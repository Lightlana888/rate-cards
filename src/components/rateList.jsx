import React from 'react';
import Card from './RateCard';
import styles from './RateCard.module.css';

class CardList extends React.Component {
    render() {
        return (
            <div className={styles.cardContainer}>
                <Card
                    title="Безлимитный 300"
                    price={300}
                    speed={`до ${10} Мбит/сек`}
                    info="Объем включенного трафика не ограничен"
                    backgroundColor="#87CEFA"

                />
                <Card
                    title="Безлимитный 450"
                    price={450}
                    speed={`до ${50} Мбит/сек`}
                    info="Объем включенного трафика не ограничен"
                    backgroundColor="#20B2AA"
                />
                <Card
                    title="Безлимитный 550"
                    price={550}
                    speed={`до ${100} Мбит/сек`}
                    info="Объем включенного трафика не ограничен"
                    backgroundColor="#F08080"
                />
                <Card
                    title="Безлимитный 1000"
                    price={1000}
                    speed={`до ${200} Мбит/сек`}
                    info="Объем включенного трафика не ограничен"
                    backgroundColor="black"
                />
            </div>
        );
    }
}

export default CardList;
