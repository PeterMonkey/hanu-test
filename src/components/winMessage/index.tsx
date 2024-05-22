import styles from './style.module.css';
import { useContext } from 'react';
import { MyContext } from '../../context/context';

const WinMessage = () => {

    const {win} = useContext(MyContext)

    return(
        <>
        {
        win ? 
        <div className={styles.message}>
            EXCELENTE!! LO HAS LOGRADO!!
        </div>
        :
        <span></span>
        }
        </>
    )
}

export default WinMessage;