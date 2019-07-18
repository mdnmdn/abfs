const { errors } = require('./constants');

exports.errors = errors;

exports.error = (errCode, msg) => {

    let errInfo = errors[errCode];

    if (!errInfo) errInfo = { msg };

    let message = errInfo.msg ?
        `${errInfo.msg}` : msg;

    const error = new Error(message);
    error.errCode = errCode;
    return error;
}