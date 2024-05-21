import styles from './style.module.css';
import Card from '../../card';
import { PropsCard } from '../../../types/card.types';

const Tower = ({numb, suit}:PropsCard) => {
    return (
        <div className={styles.tower}>
            <Card numb={numb} suit={suit}/>
        </div>
    )
}

export default Tower;