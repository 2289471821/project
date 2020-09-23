<template>
  <div class="wrapper" ref="wrapperScroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapperScroll, {
        
        })
      })
    }
  }
</script>

<style scoped>

</style>
