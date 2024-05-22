import styles from './style.module.css';
import Tower from './tower';
import { Suit } from '../../enums/suit.enum';
import { useContext } from 'react';
import { MyContext } from '../../context/context';

const Deck = () => {
    const {state, removeItem} = useContext(MyContext)
    const {tower1, tower2, tower3} = state

    console.log(tower1)
    console.log(tower2)
    console.log(tower3)
    return (
        <div className={styles.towers}>
            {
            tower1.length > 0 ? <Tower numb={tower1[0].numb} suit={tower1[0].suit} isEmpty={true}/> :
            <Tower numb={0} suit={Suit.club} isEmpty={false}/>
            }
            {
            tower2.length > 0 ? <Tower numb={tower2[0].numb} suit={tower2[0].suit} isEmpty={true}/> :
            <Tower numb={0} suit={Suit.club} isEmpty={false}/>
            }
            {
            tower3.length > 0 ? <Tower numb={tower3[0].numb} suit={tower3[0].suit} isEmpty={true}/> :
            <Tower numb={0} suit={Suit.club} isEmpty={false}/>
            }
        </div>
    )
}

export default Deck;