import styles from './style.module.css'
import { Suit } from '../../enums/suit.enum'

type PropsCard = {
    numb: number;
    suit: Suit;
}

const Card = ({numb, suit}: PropsCard) => {
    return (
        <div className={styles.card}>
            <div className={styles[`card-${numb}`]} 
            style={(suit === Suit['heart'] || suit === Suit['diamond']) ? {color: 'red'} : {}}
            >
                <span>{suit}</span>
            </div>
        </div>
    )
}

export default Card;