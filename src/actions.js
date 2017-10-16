import axios from 'axios'
const BASE_URL = 'http://localhost:9004'

export function closePreview(){
    return {
        type: "CLOSE_PREVIEW"
    }
}

export function runReport(reportId) {
    return dispatch => {
        axios.post(`${BASE_URL}/api/reports`, {reportId})
                .then((response)=>{
                    return dispatch([{
                        type: 'REPORT_GENERATED',
                        payload: response.data
                    }])
                }, (err)=>{
                    console.log(err)
                })
    }
}