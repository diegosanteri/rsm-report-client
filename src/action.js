import axios from 'axios'

export function closePreview(){
    return {
        type: "CLOSE_PREVIEW"
    }
}

export function runReport(url, reportId, data, envData) {

    return dispatch => {
        axios.post(`${url}`, {reportId, data, envData})
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