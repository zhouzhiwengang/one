<style>
</style>
<template>
  <div id="role-manager">
    <!--顶部菜单栏-->
    <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="search"
              class="search_name"
              size="large"
              placeholder="输入角色名称查询">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSearch()"
              class="el-icon-search">查询
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              class="el-icon-refresh"
              type="primary"
              @click="dialogFormAdd = true">添加
            </el-button>
          </el-form-item>
      </el-form>



  </div>
</template>

<script>
export default{
    name: 'role-manager',
    data () {
     return {
        tableData: [],
        dialogFormEdit: false,
        dialogFormAdd:false,
        role: {
          id: '',
          name: '',
          desc: ''
        },
        pagination: {
            pageIndex: 1,
            pageSize: 10,
            total: 0,
        },
        search:''
      }
  },
  
}
</script>