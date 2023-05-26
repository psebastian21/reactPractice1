import Card from "../ui/Card"
import styles from './AddUser.module.css'
import Button from "../ui/Button"
import { useRef, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import ErrorModal from "../ui/ErrorModal"
import Wrapper from "../helpers/Wrapper"

const AddUser = props => {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    const nameRef = useRef()
    const ageRef = useRef()

    const addUser = event => {
        event.preventDefault()
        const enteredUserName = nameRef.current.value
        const enteredAge = ageRef.current.value
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
        nameRef.current.value = ''
        ageRef.current.value = ''
    }
    const showModal = (errorMessage) => {
        setModalVisible(true)
        setModalMessage(errorMessage)
    }
    const hideModal = () => {
        setModalVisible(false)
    }

    return (
        <Wrapper>
            <ErrorModal hidden={!modalVisible} title="Error" message={modalMessage} hideModal={hideModal} />
            <Card className={styles.input}>
                <form onSubmit={addUser}>
                    <label htmlFor="username">Username</label>
                    <input ref={nameRef} id="username" type="text" />
                    <label htmlFor="age">Age (Years)</label>
                    <input ref={ageRef} id="age" type="number" />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser