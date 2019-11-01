export const state= ()=>({
  isLogin: 0,//是否登录 0:未登录，1：已登录
  cvStep: '',//cv-step
  ps: '',//ps长度
  letter: '',//推荐信长度
  resetToken: '',//重置密码的token
});

export const mutations = {
  SET_LOGIN: (state,msg) =>{
    state.isLogin = msg;
  },
  SET_CV: (state,msg) =>{
    state.cvStep = msg;
  },
  SET_PS:(state,msg)=>{
    state.ps = msg;
  },
  SET_RESET:(state,msg)=>{
    state.resetToken = msg;
  },
  SET_LEETER:(state,msg)=>{
    state.letter = msg;
  },
};

