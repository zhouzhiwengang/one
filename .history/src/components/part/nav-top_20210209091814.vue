<style scoped>
.el-aside {
    display: flex;
    justify-content: center;
    align-items: center;
}

section{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  width: 200px;
}

.headerLogo,.logo{
  cursor: pointer;
}


</style>

<template>
  <el-container>
    <el-aside width="auto" class="header-logo tap" >
      <img class="logo" src="@/assets/imgs/logo.png" alt="Logo" />
    </el-aside>
    <el-aside width="auto" class="header-logo tap" >
      <el-avatar icon="el-icon-user-solid" class="headerLogo"></el-avatar>
      <span class="el-dropdown-link userinfo-inner">欢迎您，管理员</span>
      <span class="userinfo-inner" @click="signout">退出</span>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
