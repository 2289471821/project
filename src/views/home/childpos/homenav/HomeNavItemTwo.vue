<template>
  <div class="home-nav-item" @click="itemClick" :class="{active: ActiveClass}">
    <slot name="navitem"></slot>
  </div>
</template>

<script>
  export default {
    name: 'HomeNavItem',
    props: {
      spath: String,
      reveal: Boolean,
      isrotate: Boolean
    },
    data() {
      return {
        isReveal: this.reveal,
        isRotate: this.isrotate
      }
    },
    computed: {
      ActiveClass() {
        return this.$route.path.indexOf(this.spath) !== -1
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.spath)
        this.isReveal = !this.isReveal
        this.$emit('changeReveal', this.isReveal)
        this.isRotate = !this.isRotate
        this.$emit('changeRotate', this.isRotate)
      }
    }
  }
</script>

<style scoped>
  .home-nav-item {
    display: inline-block;
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #e5e5e5;
    color: rgb(116, 116, 116);
    font-size: 13px;
    border-radius: 5px;
    background-color: #fff;
    margin: 0 10px 10px;
  }
  .home-nav-item span {
    display: inline-block;
    line-height: 24px;
  }
  .active {
    background-color: #fde0d5;
    border-color: #ff6700;
    color: #ff6700;
  }
</style>
