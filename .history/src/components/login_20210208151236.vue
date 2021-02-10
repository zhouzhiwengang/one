 
<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px"
      :model="loginForm"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click="login()">登录</el-button>
    </el-form>
  </div>
  
  

</template>
 
<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userToken: ''
    };
  },
 
  methods: {
    // 调用store 存储
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        // 发起登入请求
        this.$axios({
          method: 'post',
          url: '/auth/login',
          headers: {
		     'Content-Type':'application/json;charset=utf-8' 
	      },
          data:{"username":_this.loginForm.username,"password":_this.loginForm.password},
        }).then(res => {
          console.log('123456');
          console.log(res);
          console.log(res.data.datas.token);
          _this.userToken = res.data.datas.token;
          // 将用户token保存到vuex中
          _this.changeLogin({ token: _this.userToken });
          // 用户登入成功,自动跳转至系统首页
          _this.$router.push('/home');
          alert('登陆成功');
        }).catch(error => {
          alert('账号或密码错误');
          console.log(error);
        });
      }
    }
  }
};
</script>
<style scoped>
.login-wrap {
  height: 100%;
  background: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 400px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-btn {
  width: 100%;
}
</style>
 