<style>
</style>
<template>
  <div id="role-manager">
    
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
        }
      }
  },
}
</script>