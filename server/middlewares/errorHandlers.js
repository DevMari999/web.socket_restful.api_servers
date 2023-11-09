const apiErrorHandler = (err, req, res, next) => {
    console.error(`API error: ${err.message}`);
    res.status(500).send({error: 'Internal Server Error'});
};

module.exports = {
    apiErrorHandler,
};
