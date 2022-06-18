export const joiError = (error) => {
  console.log(error);
  const { type, context } = error.details[0];
  let message = '';

  switch (type) {
    case 'string.min':
      message = `${context.label} cần ít nhất ${context.limit} ký tự`;
      break;

    case 'string.max':
      message = `${context.label} không được quá ${context.limit} ký tự`;
      break;

    case 'string.email':
      message = `Vui lòng nhập đúng email`;
      break;

    case 'any.required':
      message = `${context.label} không được bỏ trống`;
      break;

    default:
      message = 'Thêm case joi nào anh ơi';
      break;
  }

  return message;
};
