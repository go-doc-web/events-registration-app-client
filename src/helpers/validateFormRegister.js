export const validateFullName = (fullName) => {
  const trimmedValue = fullName.trim();
  return trimmedValue.length > 0 && trimmedValue !== formData.fullName.trim();
};

export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
};
