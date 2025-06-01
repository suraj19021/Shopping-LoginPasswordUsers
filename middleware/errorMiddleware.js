module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err);  // Log full error for debugging
  res.status(statusCode).json({
    success: false,
    error: err.message || 'Something went wrong',
  });
};

