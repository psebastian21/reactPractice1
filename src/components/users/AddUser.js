import Card from "../ui/Card"
import styles from './AddUser.module.css'
import Button from "../ui/Button"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import ErrorModal from "../ui/ErrorModal"

const AddUser = props => {
    const [enteredUserName, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    const addUser = event => {
        event.preventDefault()
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            showModal('You must enter a name and age')
            return
        }
        if (+enteredAge < 1) {
            showModal('You must enter a an age that is greater than 0')
            return
        }
        const newUser = { name: enteredUserName, age: enteredAge, key: uuidv4() }
        props.addUser(newUser)
        setEnteredAge('')
        setEnteredUsername('')
    }

    const usernameChangehandler = event => {
        setEnteredUsername(event.target.value)
    }
    const ageChangehandler = event => {
        setEnteredAge(event.target.value)
    }
    const showModal = (errorMessage) => {
        setModalVisible(true)
        setModalMessage(errorMessage)
    }
    const hideModal = () => {
        setModalVisible(false)
    }

    return (
        <div>
            <ErrorModal hidden={!modalVisible} title="Error" message={modalMessage} hideModal={hideModal} />
            <Card className={styles.input}>
                <form onSubmit={addUser}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameChangehandler} value={enteredUserName} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangehandler} value={enteredAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser