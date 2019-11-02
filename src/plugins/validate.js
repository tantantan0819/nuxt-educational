

//验证手机
export const isPhone = /^1[345789]\d{9}$/;
//验证邮箱
export const isEmail = /^\w+@\w+(?:\.\w+)+$/;
//验证6-16位数字和字母
export const isPassword = /[a-z0-9]{6,16}/;


export const valiPassward = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入密码'))
  } else if (!isPassword.test(value)) {
    callback(new Error('请输入6-16位字母和数字组合的密码'))
  } else {
    callback()
  }
};
export const validEmail = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入邮箱号码'))
  } else if (!isEmail.test(value)) {
    callback(new Error('请输入正确的电子邮箱格式'))
  } else {
    callback()
  }
};
export const validPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入手机号码'))
  } else if (!isPhone.test(value)) {
    callback(new Error('请输入正确的手机号码'))
  } else {
    callback()
  }
};
