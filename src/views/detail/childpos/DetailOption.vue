<template>
  <div>
    <ul class="items">
      <li @click="optionClick">
        <div class="item-title">
          <span>已选</span>
        </div>
        <div class="item-text">
          <div>小米10 Pro 8GB+256GB 星空蓝</div>
          <div>
            <img src="~@/assets/img/profile/right_arrows.png" alt="">
          </div>
        </div>
      </li>
      <li>
        <div class="item-title">
          <span>选至</span>
        </div>
        <div class="item-text">
          <div>北京市 东城区</div>
          <div>
            <img src="~@/assets/img/profile/right_arrows.png" alt="">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'DetailOption',
    methods: {
      optionClick() {
        this.$store.commit('changeProductshow');
      }
    }
  }
</script>

<style scoped>
  .items {
    background-color: #fff;
  }
  .items li {
    display: flex;
    line-height: 50px;
  }
  .items li .item-title {
    flex: 1;
    display: flex;
    color: #000;
    font-size: 14px;
  }
  .item-title span {
    margin: 0 auto;
  }
  .items li .item-text {
    flex: 6;
    display: flex;
    justify-content: space-between;
    color: #000;
    font-size: 14px;
  }
  .items li:not(:last-child) .item-text {
    border-bottom: 1px solid rgba(0,0,0,.05);
  }
  .item-text img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
</style>
