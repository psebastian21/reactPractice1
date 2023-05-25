import Card from "../ui/Card"
import styles from './AddUser.module.css'
import Button from "../ui/Button"

const AddUser = props => {
    const addUser = event => {
        event.preventDefault()
    }
    return (
        <Card className={styles.input}>
            <form onSubmit={addUser}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser