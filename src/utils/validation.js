export const checkValidations = ({ email, password }) => {
  console.log(password);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
  //   password,
  // );
  const isValidPassword = true;
  if (!isValidEmail) return "Email is not valid";
  if (!isValidPassword) return "Password is incorrect";

  return null;
};
