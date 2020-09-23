<template>
  <transition name="el-fade-in">
    <div class="page-up" @click="scrollToTop" v-show="toTopShow">
      
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'BackTop',
    data() {
      return {
        toTopShow: false
      }
    },
    methods: {
      handleScroll() {
        let dom =document.getElementsByClassName('content-container')[0];
        this.scrollTop = dom.scrollTop;
        if (this.scrollTop > 650) {
          this.toTopShow = true;
        }else {
          this.toTopShow = false;
        }
      },
      scrollToTop() {
        let timer = null;
        let _this = this;
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
          if (_this.scrollTop > 5000) {
            _this.scrollTop -= 1000;
            document.getElementsByClassName("content-container")[0].scrollTop =
              _this.scrollTop;
            timer = requestAnimationFrame(fn);
          } else if (_this.scrollTop > 1000 && _this.scrollTop <= 5000) {
            _this.scrollTop -= 500;
            document.getElementsByClassName("content-container")[0].scrollTop =
              _this.scrollTop;
            timer = requestAnimationFrame(fn);
          } else if (_this.scrollTop > 200 && _this.scrollTop <= 1000) {
            _this.scrollTop -= 100;
            document.getElementsByClassName("content-container")[0].scrollTop =
              _this.scrollTop;
            timer = requestAnimationFrame(fn);
          } else if (_this.scrollTop > 50 && _this.scrollTop <= 200) {
            _this.scrollTop -= 10;
            document.getElementsByClassName("content-container")[0].scrollTop =
              _this.scrollTop;
            timer = requestAnimationFrame(fn);
          } else if (_this.scrollTop > 0 && _this.scrollTop <= 50) {
            _this.scrollTop -= 5;
            document.getElementsByClassName("content-container")[0].scrollTop =
              _this.scrollTop;
            timer = requestAnimationFrame(fn);
          } else {
            cancelAnimationFrame(timer);
            _this.toTopShow = false;
          }
        });
      }
    },
    mounted() {
      this.$nextTick(function () {
          window.addEventListener('scroll', this.handleScroll,true);
      });
    },
    destroyed() {
      window.addEventListener('scroll', this.handleScroll,true);
    }
  }
</script>

<style scoped>
  .page-up{
    position: fixed;
    right: 20px;
    bottom: 60px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    transition: .3s;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .5);
    z-index: 100;
    background-image: url('~@/assets/img/common/backtop.png');
    background-position: center;
    background-size: contain;
  }
</style>
