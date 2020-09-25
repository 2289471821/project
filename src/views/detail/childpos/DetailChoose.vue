<template>
  <div>
    <div :class="{uimask: $store.state.isProductshow}"></div>
    <div class="detail-choose" :class="{myclose: !$store.state.isProductshow}">
      <div>
        <i class="choose-close" @click="closeClick"></i>
      </div>
      <div class="choose-header">
        <img :src="spec.星空蓝[0].图片" alt="">
        <div class="selected">
          <div class="selected-price">{{spec.星空蓝[1].现价 | getSymbol}}</div>
          <div class="selected-release">{{name}} {{spec.星空蓝[1].版本}} 星空蓝</div>
        </div>
      </div>
      <div>
        <div class="option">
          <div class="option-title">版本</div>
          <div>
            <div >{{spec.星空蓝[1].版本}}</div>
            <div>{{spec.星空蓝[2].版本}}</div>
            <div>{{spec.星空蓝[3].版本}}</div>
          </div>
        </div>
        <div class="option">
          <div class="option-title">颜色</div>
          <div>
            <div>星空蓝</div>
            <div>珍珠白</div>
          </div>
        </div>
      </div>
      <div class="option-number">
        <div class="option-title">购买数量</div>
        <div>
          <button>-</button>
          <span>{{counter}}</span>
          <button>+</button>
        </div>
      </div>
      <div class="choose-footer">
        <div><span>加入购物车</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailChoose',
    props: {
      spec: Object,
      name: String,
    },
    data() {
      return {
        counter: 1
      }
    },
    filters: {
      getSymbol(value) {
        if(value){
          return '￥' + parseInt(value)
        }else{
          return
        }        
      }
    },
    methods: {
      closeClick() {
        this.$store.commit('changeProductshow');
      }
    }
  }
</script>

<style scoped>
  .myclose {
    display: none;
  }
  .detail-choose {
    width: 100%;
    height: 75%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: -1px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -5px 5px rgba(100, 100, 100, .1);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 0 20px;
    z-index: 110;
  }
  .choose-footer {
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
  }
  .choose-footer div {
    width: 90%;
    height: 40px;
    background-color: #ff6700;
    margin: auto;
    border-radius: 30px;
    line-height: 40px;
    color: #fff;
  }
  .choose-close {
    width: 35px;
    height: 35px;
    display: block;
    background-image: url('~@/assets/img/detail/close.png');
    background-size: contain;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .choose-header {
    padding: 50px 0 15px;
    display: flex;
  }
  .choose-header img {
    width: 35%;
  }
  .selected-price {
    color: #ff6700;
    font-size: 25px;
  }
  .selected-release {
    color: rgba(0,0,0,.87);
    margin-top: 5px;
  }
  .selected {
    padding: 40px 0;
  }
  .option-title {
    color: rgba(0,0,0,.87);
    font-size: 14px;
    line-height: 16px;
    padding: 12px 0;
  }
  .option>div>div {
    display: inline-block;
    border: 1px solid #000;
    color: rgba(0,0,0,.87);
    font-size: 14px;
    width: 27%;
    height: 35px;
    text-align: center;
    line-height: 35px;
    margin: 5px 0 10px 10px;
  }
  .option-number {
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
  }
  .option-number button {
    width: 35px;
    height: 35px;
  }
  .option-number span {
    margin: 0 10px;
  }
  .uimask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.8);
    z-index: 100;
  }
  .mychecked {
    border: 1px solid #ff6700;
    color: #ff6700;
  }
</style>
