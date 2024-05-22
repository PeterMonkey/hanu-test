import styles from './style.module.css'

const ResetButton = ({fn}:{fn:()=>void}) => {
    return(
        <button 
        className={styles.reset}
        onClick={fn}
        >
            <svg 
            fill="none" 
            stroke-width="2" 
            xmlns="http://www.w3.org/2000/svg" 
            className={styles.svg} 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            //style="overflow: visible; color: currentcolor;"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none">
                </path><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"></path><path d="M20 4v5h-5"></path></svg>
            Reiniciar
        </button>
    )
}

export default ResetButton;