<style>
</style>
<template>
  <div id="administrator">
    <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="search"
              class="search_name"
              size="large"
              placeholder="输入姓名查询">
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
          <el-form-item>
            <el-button
              class="el-icon-circle-plus-outline"
              type="primary"
              >导出
            </el-button>
          </el-form-item>
      </el-form>

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
                        layout="total, prev, pager, next"
                        :total=pagination.total>
                    </el-pagination>
    </el-row>

    <el-dialog title="添加管理员" :visible.sync="dialogFormAdd">
      <el-form :model="admin" label-width="300px">
        <el-form-item label="管理员名称" >
          <el-input v-model="admin.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="管理员密码" >
          <el-input v-model="admin.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormAdd = false">取 消</el-button>
        <el-button type="primary" @click="add(admin)">确 定</el-button>
      </div>
    </el-dialog>
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
        search: '',
        admin: {
          id: '',
          username: '',
          password: '',
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
  },
  methods:{
    init () {
        var self = this
         this.$axios({
            method:'post',
            url:'/api/admin/getPage',
            data:{"page":this.pagination.pageIndex,"limit":this.pagination.pageSize},
            headers:{
                'Content-Type':'application/json;charset=utf-8'      //改这里就好了
          }
        }).then(res => {
           console.log(res);
           self.pagination.total = res.data.datas.data.total;
           self.tableData = res.data.datas.data.records;
        })
          .catch(function (error) {
            console.log(error)
          })
        },
        handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pagination.pageSize = val;
                this.pagination.pageIndex = 1;
                this.init();
        },
        handleCurrentChange(val) {
                 console.log(`当前页: ${val}`);
                this.pagination.pageIndex = val;
                this.init();
        },
        onSearch() {
                var self = this
         this.$axios({
            method:'post',
            url:'/api/admin/getPage',
            data:{"page":this.pagination.pageIndex,"limit":this.pagination.pageSize,"username":this.search},
            headers:{
                'Content-Type':'application/json;charset=utf-8'      //改这里就好了
          }
        }).then(res => {
           console.log(res);
           console.log(res.data.datas.data.total);
           console.log(res.data.datas.data.records);
           self.pagination.total = res.data.datas.data.total;
           self.tableData = res.data.datas.data.records;
        })
          .catch(function (error) {
            console.log(error)
          })
            }
  },
   mounted: function () {
      this.init()
    }
}
</script>