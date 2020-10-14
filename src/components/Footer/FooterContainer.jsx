import React from "react"
import {connect} from "react-redux"
import Footer from "./Footer"
import {actionCreator} from "../../redux/footer-reducer";

const mapStateToProps = state => (
    {
        text: state.footer.text
    }
)

const mapDispatchToProps = dispatch => (
    {
        changeText: () => {
            dispatch(actionCreator())
        }
    }
)

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer