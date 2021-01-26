export function validateEmail(email) {
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const isValid = (values) => {
  let response;

  // eslint-disable-next-line
  for (const item of values) {
    const { key, value, isRequired } = item;

    if (isRequired && !value) {
      response = {
        isValid: false,
        message: `Please enter ${key}`,
      };
      break;
    } if (key.includes('email') && !!value && !validateEmail(value)) {
      response = {
        isValid: false,
        message: 'Please enter a valid email address',
      };
      break;
    }
  }

  if (!response) {
    response = {
      isValid: true,
      message: null,
    };
  }

  return response;
};
