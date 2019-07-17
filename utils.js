const { errors } = require('./constants');

exports.error = (errCode, msg) => {

    let errInfo = errors[errCode];

    if (!errInfo) 

    let message = errInfo.msg ?
        `${errInfo.msg}`

    const error = new Error()
}