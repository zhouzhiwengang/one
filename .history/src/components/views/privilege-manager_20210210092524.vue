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
      <!--表格-->  
       <el-row>
            <el-table :data="tableData" style="width: 100%;">
                        <el-table-column prop="privilegeName" label="权限名称" >
                        </el-table-column>
                        <el-table-column prop="privilegeCode" label="权限编码" >
                        </el-table-column>
                        <el-table-column prop="privilegeType" label="权限类别" >
                        </el-table-column>

                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="toAdd(scope)">新增</el-button>
                                <el-button type="primary" size="mini" @click="toEdit(scope)">编辑</el-button>
                                <el-button type="danger" size="mini" @click="deleteRole(scope)">删除</el-button>
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
    name: 'privilege-manager',
    data () {
     return {
        tableData: [],
        dialogFormEdit: false,
        dialogFormAdd:false,
        privilege: {
          id: '',
          privilegeName: '',
          privilegeCode: '',
          privilegeType: ''
        },
        pagination: {
            pageIndex: 1,
            pageSize: 10,
            total: 0,
        },
        search:''
      }
    },
    methods:{

    }


}
</script>