<style>
</style>
<template>
  <div id="privilege-manager">
   <!--顶部菜单栏-->
    <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-button
              class="el-icon-refresh"
              type="primary"
              @click="toAdd()">添加
            </el-button>
          </el-form-item>
      </el-form>

  </div>
</template>

<script>
export default{
    name: 'privilege-manager'
}
</script>