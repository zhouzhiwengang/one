<!--  -->
<template>
  <div>
    <div class="home_title">后台系统</div>
    <div class="home_userinfoContainer">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link home_userinfo">
          {{currentUserName}}
          <i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="goIndex">返回主页</el-dropdown-item>
          <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      currentUserName: ''
    }
  },
  mounted: function getUser () {
    // this.currentUserName = this.$store.state.username
    this.currentUserName = '超级管理员'
  },
  methods: {
    handleCommand (command) {
      var _this = this
      if (command === 'logout') {
        this.$confirm('注销登录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
         // 调用store 移除token值存储
          _this.$store.commit('logout')
         // 页面跳转至登入界面
          _this.$router.replace({name: 'login'})
          // 弹出信息框，弹出用户退出成功
          _this.$message.success('退出成功')
        }, function () {
          // 取消
        })
      } else if (command === 'goIndex') {
        this.$router.push({name: 'index'})
      }
    }
  }
}
</script>
<style>
  .el-header {
    background-color: #20a0ff;
    color: #333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
 
  .home_title {
    color: #fff;
    font-size: 22px;
    display: inline;
  }
 
  .home_userinfo {
    color: #fff;
    cursor: pointer;
  }
 
  .home_userinfoContainer {
    position: absolute;
    right: 0px;
    display: inline;
    margin-right: 20px;
  }
</style>