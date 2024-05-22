import styles from './style.module.css';
import ResetButton from './resetButton';
import TargetValue from './targetValue';

const Header = () => {
    return(
        <div className={styles.header}>
            <TargetValue value='4'/>
            <ResetButton/>
        </div>
    )
}

export default Header;