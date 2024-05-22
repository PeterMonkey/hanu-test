import styles from './style.module.css';

const TargetValue = ({value}:{value: string}) => {
    return(
        <div className={styles.target}>
            <p>Valor a ordenar:</p>
            <div className={styles.value}>{value}</div>
        </div>
    )
}

export default TargetValue;