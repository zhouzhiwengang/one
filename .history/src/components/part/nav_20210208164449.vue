<style scoped>
.el-row{
  height: 100%;
}

.el-menu{
  border-right:none;
}
.el-aside{
  border-right: 1px solid #f5f1f1;
}
</style>

<template>
  <el-aside width="200px">
    <el-row class="tac">
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" @click="goPage('home')">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="2" @click="goPage('order')">
            <i class="el-icon-s-order"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="goPage('member')">会员管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-2" @click="goPage('address')">收货地址</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-3" @click="goPage('favorite')">会员收藏</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-4" @click="goPage('footprint')">会员足迹</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-5" @click="goPage('search')">搜索历史</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-6" @click="goPage('opinion')">意见反馈</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>商场管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1" @click="goPage('area')">行政区域</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-2" @click="goPage('provider')">品牌生产商</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-3" @click="goPage('product-category')">产品种类</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-4" @click="goPage('order-manager')">订单管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-5" @click="goPage('sale-manager')">售后管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-6" @click="goPage('common-question')">通用问题</el-menu-item>
            </el-menu-item-group>
             <el-menu-item-group>
              <el-menu-item index="4-7" @click="goPage('keywords')">关键字</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1" @click="goPage('product-list')">商品列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="5-2" @click="goPage('product-put-on')">商品上架</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-3" @click="goPage('product-comment')">商品评论</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>推广管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1" @click="goPage('ad-manager')">广告管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-2" @click="goPage('coupon-manager')">优惠卷管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-3" @click="goPage('topic-manager')">专题管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-4" @click="goPage('group-buy-rule')">团购规则</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-5" @click="goPage('group-buy-avtiviti')">团购活动</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1" @click="goPage('administrator')">管理员</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="7-2" @click="goPage('notice-manager')">通知管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="7-3" @click="goPage('operation-log')">操作日志</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="7-4" @click="goPage('role-manager')">角色管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="7-5" @click="goPage('storage-manager')">存储管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


           <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>配置管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1" @click="goPage('administrator')">管理员</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-2" @click="goPage('notice-manager')">通知管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-3" @click="goPage('operation-log')">操作日志</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-4" @click="goPage('role-manager')">角色管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="6-5" @click="goPage('storage-manager')">存储管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
var $this = {};
export default {
  data() {
    return {};
  },
  beforeCreate() {
    $this = this;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    goPage(link) {
      if (link === "home") {
        $this.$router.push("/").catch(error => error);
      } else if ((link = "order")) {
        $this.$router.push("/order").catch(error => error);
      } else {}
    }
  }
};
</script>
