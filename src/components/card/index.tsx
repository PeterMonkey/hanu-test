import styles from './style.module.css'
import { Suit } from '../../enums/suit.enum'
import { PropsCard } from '../../types/card.types';

const Card = ({numb, suit}: PropsCard) => {

const numberOfCard = [];
if(numb <= 10) {
    for (let i = 0; i < numb; i++) {
      numberOfCard.push(<span key={i}>{suit}</span>);
    }
} else if (numb > 10 || numb <= 13) {
    switch (numb) {
        case 11:
            numberOfCard.push(<span key={1}>{suit}</span>)
            break;
        case 12:
            numberOfCard.push(<span key={1} >{suit}</span>)
            break;
        case 13:
            numberOfCard.push(<span key={1} >{suit}</span>)
            break;
        default:
            break;
    }
}

    return (
        <div className={styles.card} data-suit={suit} data-value={
            numb === 1 ? 'A': 
            numb <= 10 && numb > 1 ? numb :
            numb === 11 ? 'J' :
            numb === 12 ? 'Q' :
            numb === 13 ? 'K' : null
        }
            style={(suit === Suit['heart'] || suit === Suit['diamond']) ? {color: 'red'} : {}}>
            <div className={styles[`card-${numb}`]} 
            >
               {numberOfCard}
            </div>
        </div>
    )
}

export default Card;