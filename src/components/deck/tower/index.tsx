import styles from './style.module.css';
import Card from '../../card';
import { PropsTower } from '../../../types/tower.types';
import { useContext } from 'react';
import { MyContext } from '../../../context/context';

const Tower = ({numb, suit, isEmpty}:PropsTower) => {
 
    const {removeFirstDeck} = useContext(MyContext)

    return (
        <div className={styles.tower} onClick={() => removeFirstDeck({id:1,numb, suit})}>
            {isEmpty? <Card numb={numb} suit={suit}/> : <span></span>}
        </div>
    )
}

export default Tower;