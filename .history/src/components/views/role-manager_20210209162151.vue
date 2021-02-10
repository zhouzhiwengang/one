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

        <el-row>
            <el-table :data="tableData" style="width: 100%;">
                        <el-table-column prop="id" label="管理员Id">
                        </el-table-column>
                        <el-table-column prop="username" label="管理员名称" >
                        </el-table-column>
                        <el-table-column prop="avatar" label="管理员头像" >
                        <!-- 图片的显示 -->
                            <template  slot-scope="scope">            
                                <img :src="scope.row.avatar"  min-width="40" height="40" />
                            </template>         
                        </el-table-column> 
                        <el-table-column prop="roleIds" label="管理员角色" >
                        </el-table-column>

                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="toEdit(scope)">编辑</el-button>
                                <el-button type="danger" size="mini" @click="deleteAdmin(scope)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <br>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pagination.pageIndex"
                        :page-sizes="[5, 10, 20, 30, 40]"
                        :page-size=pagination.pageSize
                        layout="total, prev, pager, next"
                        :total=pagination.total>
                    </el-pagination>
        </el-row>


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