const validateUserName = value => {
  let error;
  if (!value) {
    error = "This fiel cannot be empty";
  } else if (/_/i.test(value)) {
    error = "Name of user сannot contain \"_\"";
  }
  return error;
};

export default validateUserName;
