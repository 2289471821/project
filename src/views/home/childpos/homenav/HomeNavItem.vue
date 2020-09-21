<template>
  <div class="home-nav-item" @click="itemClick" :class="{active: ActiveClass}">
    <slot name="navitem"></slot>
  </div>
</template>

<script>
  export default {
    name: 'HomeNavItem',
    props: {
      spath: String
    },
    computed: {
      ActiveClass() {
        return this.$route.path.indexOf(this.spath) !== -1
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.spath)
      }
    }
  }
</script>

<style scoped>
  .home-nav-item {
    color: rgb(116, 116, 116);
    font-size: 14px;
    padding: 0 12px;
    display: inline-block;
  }
  .home-nav-item span {
    display: inline-block;
    line-height: 24px;
    border-bottom: 2px solid rgba(237,91,0,0);
  }
  .active span {
    color: rgb(237, 91, 0);
    border-color: rgb(237, 91, 0);
  }
</style>
