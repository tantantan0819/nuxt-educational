//crm的用户信息
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
  SET_CRM: (state,crm) => {
    state.username = crm.username;
    state.truename = crm.truename;
    state.avatar = crm.avatar;
    state.email = crm.email;
    state.sex = crm.sex;
    state.phone = crm.phone;
    state.birth = crm.birth;
    state.address = crm.address;
  }
};
