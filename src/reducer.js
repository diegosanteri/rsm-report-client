const INITIAL_STATE = {
    preview: {
        html: "",
        show: false
    }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLOSE_PREVIEW':
            return {...state, preview: {show: false}}
         case 'REPORT_GENERATED':
            const html = action.payload || ""
            return {...state, preview: {html, show: true}}
        default:
            return state
    }
}