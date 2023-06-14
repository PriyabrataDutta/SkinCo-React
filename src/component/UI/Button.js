import styles from './Button.module.css'

const Button =(props) =>{
    
return(
    <button className={styles.buttonx}>
        {props.children}
    </button>
)
}
export default Button;