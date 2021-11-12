exports.errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.status) {
    res.status(err.status).send({ error: err.message });
  } else {
    res.status(500).send({ error: 'Internal server error' });
  }
};
