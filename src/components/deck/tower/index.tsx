import styles from './style.module.css';
import Card from '../../card';
import { PropsTower } from '../../../types/tower.types';

const Tower = ({numb, suit, isEmpty}:PropsTower) => {
    return (
        <div className={styles.tower}>
            {isEmpty? <Card numb={numb} suit={suit}/> : <span></span>}
        </div>
    )
}

export default Tower;