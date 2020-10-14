import React from "react"

const Footer = props => {

    const onChangeText = () => {
        props.changeText()
    }

    return <footer>
        Все права принадлежат <span onClick={onChangeText}>{props.text}</span> МТУСИ
    </footer>
}


export default Footer