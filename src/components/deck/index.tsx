import styles from './style.module.css';
import Tower from './tower';

const Deck = () => {
    return (
        <div className={styles.towers}>
            <Tower/>
            <Tower/>
            <Tower/>
        </div>
    )
}

export default Deck;