import React from "react"
import { createPortal } from "react-dom"

import Card from "./Card"
import Button from "./Button"
import styles from './ErrorModal.module.css'

const Backdrop = props => <div hidden={props.hidden} className={styles.backdrop} />

const ModalOverlay = props => (
    <Card hidden={props.hidden} className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.hideModal}>Ok</Button>
        </footer>
    </Card>
)

const ErrorModal = props => {
    return (
        <>
            {createPortal(<Backdrop hidden={props.hidden}/>, document.getElementById('backdrop-root'))}
            {createPortal(<ModalOverlay hidden={props.hidden} title={props.title} message={props.message} hideModal={props.hideModal} />, document.getElementById('overlay-root'))}
        </>
    )
}

export default ErrorModal