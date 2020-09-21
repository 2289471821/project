<template>
  <div class="home-nav-wrap">
    <div v-if="isShow">
      <home-nav-item spath="recommend"><span slot="navitem">推荐</span></home-nav-item>
      <home-nav-item spath="phone"><span slot="navitem">手机</span></home-nav-item>
      <home-nav-item spath="smart"><span slot="navitem">智能</span></home-nav-item>
      <home-nav-item spath="television"><span slot="navitem">电视</span></home-nav-item>
      <home-nav-item spath="notebook"><span slot="navitem">笔记本</span></home-nav-item>
      <home-nav-item spath="homeapps"><span slot="navitem">家电</span></home-nav-item>
      <home-nav-item spath="life"><span slot="navitem">生活周边</span></home-nav-item>
    </div>
    <div class="nav-display" @click="iClick">
      <i class="image-icon"></i>
    </div>
  </div>
</template>

<script>
  import HomeNavItem from './HomeNavItem'

  export default {
    name: 'HomeNavWrap',
    components: {
      HomeNavItem
    },
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      iClick() {
        // this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  .home-nav-wrap {
    display: flex;
    background-color: #f2f2f2;
    white-space: nowrap;
    overflow-x: auto;
    width: 92%;
  }
  .home-nav-wrap::-webkit-scrollbar{
    display: none
  }
  .nav-display {
    width: 35px;
    height: 26px;
    position: absolute;
    top: 44px;
    right: 0;
    background-color: #f2f2f2;
    box-shadow: -15px 0 15px 0 #f2f2f2;
  }
  .image-icon {
    width: 20px;
    height: 20px;
    display: block;
    background-image: url('~@/assets/img/navbar/arrows.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0px 5px;
  }
</style>
