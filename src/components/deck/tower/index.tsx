import styles from './style.module.css';
import Card from '../../card';
import { PropsTower } from '../../../types/tower.types';

const Tower = ({id, numb, suit, isEmpty, fn}:PropsTower) => {
 

    return (
        <div className={styles.tower} onClick={() => fn({id, numb, suit})}>
            {isEmpty? <Card numb={numb} suit={suit}/> : <span></span>}
        </div>
    )
}

export default Tower;