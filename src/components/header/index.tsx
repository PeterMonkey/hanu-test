import styles from './style.module.css';
import ResetButton from './resetButton';
import TargetValue from './targetValue';
import { useContext } from 'react';
import { MyContext } from '../../context/context';

const Header = () => {

    const {resetDeck, target} = useContext(MyContext)

    console.log(target)
    return(
        <div className={styles.header}>
            <TargetValue value={target.toString()}/>
            <ResetButton fn={resetDeck}/>
        </div>
    )
}

export default Header;