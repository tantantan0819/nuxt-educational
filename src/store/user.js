//sso的用户信息
export const state = () => ({
  username: '',//用户名
  truename: '',//真实姓名
  avatar: '',//头像
  email: '',//邮箱
  sex: '',//性别
  phone: '',//手机
  birth: '',//生日
  address: '',//地址
});

export const mutations = {
  SET_USER: (state, user) => {
    state.username = user.username;
    state.truename = user.truename;
    state.avatar = user.avatar;
    state.email = user.email;
    state.sex = user.sex;
    state.phone = user.phone;
    state.birth = user.birth;
    state.address = user.address;
  }
};
