const responseHandler = function (res, statusCode, data, message, status) {
  return res.status(statusCode).send({
    data: data,
    message: message,
    status: status,
  });
};


//for handle all response globaly 
global.responseHandler = responseHandler;
