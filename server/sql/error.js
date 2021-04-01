const handleSQLError = (res, err) => {
  return res.status(500).send(`An unexpected error occurred:: ${err}`);
};

module.exports = { handleSQLError };
