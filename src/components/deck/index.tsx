import styles from './style.module.css';
import Tower from './tower';
import { Suit } from '../../enums/suit.enum';
import { shuffleDeck } from '../../utils/deckCards';

const Deck = () => {
    console.log(shuffleDeck)
    return (
        <div className={styles.towers}>
            <Tower numb={3} suit={Suit.club}/>
            <Tower numb={6} suit={Suit.heart}/>
            <Tower numb={1} suit={Suit.spade}/>
        </div>
    )
}

export default Deck;