<style>
</style>
<template>
  <div id="administrator">
     <el-row>
   <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    v-for="(data,index) in tableHeader"
                    :key="index"
                    :prop="data.prop"
                    :label="data.label"
                    :min-width="data['min-width']"
                    :align="data.align">
                </el-table-column>
                <el-table-column
                    label="操作"
                    min-width="240">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="toEdit(scope)">修改</el-button>
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
                layout="total, sizes, prev, pager, next, jumper"
                :total=pagination.total>
            </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default{
    name: 'administrator',
     data () {
     return {
        tableData: [],
        dialogFormEdit: false,
        dialogFormAdd:false,
        admin: {
          id: '',
          username: '',
          avatar: '',
          role: ''
        },
        pagination: {
            pageIndex: 1,
            pageSize: 10,
            total: 0,
        },
        tableHeader: [
                    {
                        prop: 'id',
                        label: '管理员SID',
                        align: 'left'
                    },
                    {
                        prop: 'username',
                        label: '管理员名称',
                        align: 'left'
                    },
                    {
                        prop: 'avatar',
                        label: '管理员头像',
                        align: 'left'
                    },
                    {
                        prop: 'role',
                        label: '管理员角色',
                        align: 'left'
                    }
                ]
      }
  }
}
</script>