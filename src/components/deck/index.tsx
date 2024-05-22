import styles from './style.module.css';
import Tower from './tower';
import { Suit } from '../../enums/suit.enum';
import { useContext } from 'react';
import { MyContext } from '../../context/context';

const Deck = () => {
    const {
        tower1State, 
        tower2State, 
        tower3State, 
        removeFirstDeck,
        removeSecondDeck,
        removeThirdDeck,
        isEqual
    } = useContext(MyContext)

    isEqual(tower1State[0]?.numb, tower2State[0]?.numb, tower3State[0]?.numb)
    console.log(tower1State)
    console.log(tower2State)
    console.log(tower3State)
    return (
        <div className={styles.towers}>
            {
            tower1State.length > 0 ? <Tower fn={removeFirstDeck} id={tower1State[0].id} numb={tower1State[0].numb} suit={tower1State[0].suit} isEmpty={true}/> :
            <Tower fn={()=>{}} id={0} numb={0} suit={Suit.club} isEmpty={false}/>
            }
            {
            tower2State.length > 0 ? <Tower fn={removeSecondDeck} id={tower2State[0].id} numb={tower2State[0].numb} suit={tower2State[0].suit} isEmpty={true}/> :
            <Tower fn={()=>{}} id={0} numb={0} suit={Suit.club} isEmpty={false}/>
            }
            {
            tower3State.length > 0 ? <Tower fn={removeThirdDeck} id={tower3State[0].id} numb={tower3State[0].numb} suit={tower3State[0].suit} isEmpty={true}/> :
            <Tower fn={()=>{}} id={0} numb={0} suit={Suit.club} isEmpty={false}/>
            }
        </div>
    )
}

export default Deck;