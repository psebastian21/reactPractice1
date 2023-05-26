import styles from './Card.module.css'

const Card = props => {
    return <div hidden={props.hidden} className={`${styles.card} ${props.className}`}>{props.children}</div>
}

export default Card