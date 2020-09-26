<template>
  <div>
    <div v-if="$store.state.cartList.length">
      <ul>
        <li v-for="(item, index) in $store.state.cartList" :key="index" class="item">
          <div class="product">
            <div class="product-choose unchecked" :class="{checked: item.checked}" @click="checked(index)"></div>
            <div class="imgProduct">
              <img :src="item.image" alt="">
            </div>
            <div class="info">
              <div class="item-text">
                <div class="name">{{item.name}}</div>
              </div>
              <div class="price-without">
                <span>售价：</span>
                <span class="price">{{item.price | getSymbol}}</span>
              </div>
              <div>
                <div class="input-number">
                  <div class="input-sub" @click="decrease(index)"><i class="image-icons icon-line" :class="{active: item.count !== 1}"></i></div>
                  <div class="input-num"><span>{{item.count}}</span></div>
                  <div class="input-add" @click="increase(index)"><i class="image-icons icon-cross"></i></div>
                </div>
                <div class="delete" @click="remove(index)"><i class="image-icons icon-delete"></i></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="noitems" v-else>
      <span>购物车还是空的</span>
      <em>去逛逛</em>
    </div>

    <div class="bottom-submit" v-show="$store.state.cartList.length">
      <div class="flex price-box">
        <span>共{{totalNumber}}件 金额：</span><br>
        <strong>{{totalPrice}}</strong>
        <span>元</span>
      </div>
      <div class="flex shopping">继续购物</div>
      <div class="flex balance">去结算</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CartContent',
    filters: {
      getSymbol(value) {
        return parseInt(value) + '元'
      }
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0)
      },
      totalNumber() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count
        }, 0)
      }
    },
    methods: {
      checked(index) {
        this.$store.commit('checked', index)
      },
      increase(index) {
        this.$store.commit('add', index)
      },
      decrease(index) {
        this.$store.commit('sub', index)
      },
      remove(index) {
        this.$store.commit('remove', index)
      }
    }
  }
</script>

<style scoped>
  .noitems {
    padding: 20px 10px;
    background-color: #ebebeb;
    font-size: 14px;
    text-align: center;
  }
  .noitems span {
    display: inline-block;
    line-height: 45px;
    background-image: url('~@/assets/img/cart/nocart.png');
    background-repeat: no-repeat;
    background-size: auto 100%;
    padding: 0 9px 0 55px;
    color: rgba(0,0,0,.27);
  }
  .noitems em {
    display: inline-block;
    border: 1px solid rgba(0,0,0,.15);
    height: 26px;
    line-height: 24px;
    padding: 0 13px;
    color: rgba(0,0,0,.87);
    font-style: normal;
  }

  .item {
    border-bottom: 1px solid #f6f6f6;
    line-height: 0;
  }
  .product {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 0;
  }
  .product-choose {
    width: 12px;
    height: 104px;
    padding: 0 12px;
  }
  .unchecked {
    background-image: url('~@/assets/img/cart/unchecked.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 20px 20px;
  }
  .checked {
    background-image: url('~@/assets/img/cart/check.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 20px 20px;
  }
  .imgProduct {
    position: relative;
    width: 102px;
    height: 102px;
    margin-right: 12px;
    border: 1px solid #eee;
    border-radius: 2px;
    overflow: hidden;
  }
  .imgProduct img {
    width: 100%;
    height: 100%;
  }
  .info {
    width: 63%;
    text-align: left;
  }
  .item-text {
    color: #666;
    margin-bottom: 7px;
    margin-right: 17px;
    line-height: 22px;
    font-size: 18px;
  }
  .price-without {
    color: #999;
    margin-bottom: 7px;
    font-size: 14px;
    padding: 7px 0;
  }
  .price {
    margin-right: 6px;
  }
  .input-number {
    display: inline-block;
    border: 1px solid #eee;
  }
  .input-sub {
    display: inline-block;
    width: 34px;
    height: 34px;
    position: relative;
    vertical-align: middle;
    background-color: #fafafa;
    text-align: center;
  }
  .image-icons {
    display: inline-block;
    width: 34px;
    height: 34px;
    opacity: .3;
    background-size: 17px 17px;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .icon-line {
    background-image: url('~@/assets/img/cart/sub.png');
  }
  .icon-cross {
    background-image: url('~@/assets/img/cart/add.png');
    opacity: 1;
  }
  .input-add {
    display: inline-block;
    width: 34px;
    height: 34px;
    position: relative;
    vertical-align: middle;
    background-color: #f4f4f4;
    text-align: center;
  }
  .input-num {
    display: inline-block;
    vertical-align: middle;
    padding: 0 12px;
    text-align: center;
    font-size: 20px;
  }
  .delete {
    display: block;
    float: right;
    margin-right: 12px;
  }
  .icon-delete {
    background-image: url('~@/assets/img/cart/delete.png');
    background-size: cover;
    opacity: 1;
  }
  .active {
    opacity: 1;
  }

  .bottom-submit {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 58px;
    z-index: 99;
    background: #fff;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    display: flex;
  }
  .flex {
    flex: 1;
  }
  .shopping {
    background: #f4f4f4;
    border: 1px solid #f4f4f4;
    text-align: center;
    line-height: 58px;
    font-size: 18px;
  }
  .balance {
    background: #ff6700;
    color: #fff;
    text-align: center;
    line-height: 58px;
    font-size: 18px;
  }
  .price-box {
    color: #999;
    padding-top: 9px;
    text-align: center;
  }
  .price-box strong {
    color: #ff6700;
    font-size: 24px;
    margin-right: 5px;
  }
</style>
