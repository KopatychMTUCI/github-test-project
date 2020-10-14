const CHANGE_TEXT = "CHANGE-TEXT"

const initialState = {
    text: "активистам"
}

const footerReducer = (state = initialState, action) => {

    switch (action.type) {

        case CHANGE_TEXT:
            return {
                ...state,
                text: (state.text === "активистам")
                    ? "постиронистам"
                    : "активистам"
            }

        default:
            return state
    }

}

const actionCreator = () => (
    {
        type: CHANGE_TEXT
    }
)

export default footerReducer
export {actionCreator}