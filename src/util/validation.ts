import REGEX from "./regex";

// Helper Message
const HELPER_MESSAGE = {
  REQUIRED: "is required",
};

// Validation Messages
const VALIDATION_MESSAGES = {
  REQUIRED_NAME: `Name ${HELPER_MESSAGE.REQUIRED}`,
  REQUIRED_EMAIL: `Email ${HELPER_MESSAGE.REQUIRED}`,
  REQUIRED_PASSWORD: `Password ${HELPER_MESSAGE.REQUIRED}`,
  REQUIRED_CONFIRM_PASSWORD: `Confirm password ${HELPER_MESSAGE.REQUIRED}`,

  INVALID_EMAIL: "Please enter valid email",
  INVALID_PASSWORD_LENGTH:
    "Length must be greater than 4 and lesser than 16 characters",
  INVALID_PASSWORD_FORMAT: "Password should contain atleast 1 number",
  INVALID_CONFIRM_PASSWORD: "Confirm password & Password must be same",
  INVALID_CREDENTIALS: "Please check your credentials",

  EMAIL_EXISTS: "Email already exists",
};

// Validation Methods
const name = (name: string): string | undefined => {
  if (!name) return VALIDATION_MESSAGES.REQUIRED_NAME;
  return undefined;
};

const email = (email: string): string | undefined => {
  if (!email) return VALIDATION_MESSAGES.REQUIRED_EMAIL;
  if (!REGEX.EMAIL.test(email)) {
    return VALIDATION_MESSAGES.INVALID_EMAIL;
  }
  return undefined;
};

const loginPassword = (password: string): string | undefined => {
  if (!password) return VALIDATION_MESSAGES.REQUIRED_PASSWORD;
  if (password.length < 5 || password.length > 15) {
    return VALIDATION_MESSAGES.INVALID_PASSWORD_LENGTH;
  }
  return undefined;
};

const registrationPassword = (password: string): string | undefined => {
  if (!password) return VALIDATION_MESSAGES.REQUIRED_PASSWORD;
  if (password.length < 5 || password.length > 15) {
    return VALIDATION_MESSAGES.INVALID_PASSWORD_LENGTH;
  }
  if (!/\d/.test(password)) return VALIDATION_MESSAGES.INVALID_PASSWORD_FORMAT;
  return undefined;
};

const confirmPassword = (
  password: string,
  confirmPassword: string
): string | undefined => {
  if (!password) return VALIDATION_MESSAGES.REQUIRED_CONFIRM_PASSWORD;
  if (password !== confirmPassword) {
    return VALIDATION_MESSAGES.INVALID_CONFIRM_PASSWORD;
  }
  return undefined;
};

export {
  name,
  email,
  loginPassword,
  registrationPassword,
  confirmPassword,
  VALIDATION_MESSAGES,
};
