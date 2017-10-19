'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closePreview = closePreview;
exports.runReport = runReport;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = 'http://localhost:9004';

function closePreview() {
    return {
        type: "CLOSE_PREVIEW"
    };
}

function runReport(url, reportId, data, envData) {

    return function (dispatch) {
        _axios2.default.post('' + url, { reportId: reportId, data: data, envData: envData }).then(function (response) {
            return dispatch([{
                type: 'REPORT_GENERATED',
                payload: response.data
            }]);
        }, function (err) {
            console.log(err);
        });
    };
}