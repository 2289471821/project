<template>
  <div>
    <div class="nav-display" @click="iClick">
      <i class="image-icon" :class="{arrow: isRotate}"></i>
    </div>
    <div v-if="isShow" class="home-nav-wrap">
      <home-nav-item spath="recommend"><span slot="navitem">推荐</span></home-nav-item>
      <home-nav-item spath="phone"><span slot="navitem">手机</span></home-nav-item>
      <home-nav-item spath="smart"><span slot="navitem">智能</span></home-nav-item>
      <home-nav-item spath="television"><span slot="navitem">电视</span></home-nav-item>
      <home-nav-item spath="notebook"><span slot="navitem">笔记本</span></home-nav-item>
      <home-nav-item spath="homeapps"><span slot="navitem">家电</span></home-nav-item>
      <home-nav-item spath="life"><span slot="navitem">生活周边</span></home-nav-item>
    </div>
    <div v-else>
      <div class="title">全部</div>
      <div class="home-nav-wrap-two">
        <home-nav-item-two spath="recommend" :reveal="isShow" @changeReveal="changeReveal" :isrotate="isRotate" @changeRotate="changeRotate"><span slot="navitem">推荐</span></home-nav-item-two>
        <home-nav-item-two spath="phone" :reveal="isShow" @changeReveal="changeReveal" :isrotate="isRotate" @changeRotate="changeRotate"><span slot="navitem">手机</span></home-nav-item-two>
        <home-nav-item-two spath="smart" :reveal="isShow" @changeReveal="changeReveal" :isrotate="isRotate" @changeRotate="changeRotate"><span slot="navitem">智能</span></home-nav-item-two>
        <home-nav-item-two spath="television" :reveal="isShow" @changeReveal="changeReveal" :isrotate="isRotate" @changeRotate="changeRotate"><span slot="navitem">电视</span></home-nav-item-two>
        <home-nav-item-two spath="notebook" :reveal="isShow" @changeReveal="changeReveal" :isrotate="isRotate" @changeRotate="changeRotate"><span slot="navitem">笔记本</span></home-nav-item-two>
        <home-nav-item-two spath="homeapps" :reveal="isShow" @changeReveal="changeReveal" :isrotate="isRotate" @changeRotate="changeRotate"><span slot="navitem">家电</span></home-nav-item-two>
        <home-nav-item-two spath="life" :reveal="isShow" @changeReveal="changeReveal" :isrotate="isRotate" @changeRotate="changeRotate"><span slot="navitem">生活周边</span></home-nav-item-two>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeNavItem from './HomeNavItem'
  import HomeNavItemTwo from './HomeNavItemTwo'

  export default {
    name: 'HomeNavWrap',
    components: {
      HomeNavItem,
      HomeNavItemTwo
    },
    data() {
      return {
        isShow: true,
        isRotate: false
      }
    },
    methods: {
      iClick() {
        this.isShow = !this.isShow
        this.isRotate = !this.isRotate
      },
      changeReveal(value) {
        this.isShow = value;
      },
      changeRotate(value) {
        this.isRotate = value;
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
    width: 8%;
    height: 26px;
    position: absolute;
    top: 44px;
    right: 0;
    background-color: #f2f2f2;
    box-shadow: -15px 0 15px 0 #f2f2f2;
    display: flex;
    align-items: center;
  }
  .image-icon {
    width: 20px;
    height: 20px;
    display: block;
    background-image: url('~@/assets/img/navbar/arrows.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }

  .home-nav-wrap-two {
    display: flex;
    background-color: #f2f2f2;
    padding-top: 20px;
    flex-wrap: wrap;
  }
  .title {
    height: 26px;
    line-height: 26px;
    padding-left: 10px;
    background-color: #f2f2f2;
  }
  .arrow {
    transition: transform 0.4s;
    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
    transform: rotate(180deg);
  }
</style>
