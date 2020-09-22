<template>
<div>
  <header class="hd">
    <div class="user">

    </div>
  </header>
  <div class="b1">
    <div>我的订单</div>
    <div>全部订单<img src="~@/assets/img/profile/right_arrows.png" alt=""></div>
  </div>
  <div class="b2">
    <div><div><img src="~@/assets/img/profile/payment.png" alt=""></div>待付款</div>
    <div><div><img src="~@/assets/img/profile/receiving.png" alt=""></div>待收货</div>
    <div><div><img src="~@/assets/img/profile/repair.png" alt=""></div>退换修</div>
  </div>
  <div class="line"></div>
  <ul class="items">
    <li>
      <div class="item-icon">
        <img src="~@/assets/img/profile/member.png" alt="">
      </div>
      <div class="item-text">
        <div>会员中心</div>
        <div>
          <img src="~@/assets/img/profile/right_arrows.png" alt="">
        </div>
      </div>
    </li>
    <li>
      <div class="item-icon">
        <img src="~@/assets/img/profile/wallet.png" alt="">
      </div>
      <div class="item-text">
        <div>我的优惠</div>
        <div>
          <img src="~@/assets/img/profile/right_arrows.png" alt="">
        </div>
      </div>
    </li>
  </ul>
  <div class="line"></div>
  <ul class="items">
    <li>
      <div class="item-icon">
        <img src="~@/assets/img/profile/service.png" alt="">
      </div>
      <div class="item-text">
        <div>服务中心</div>
        <div>
          <img src="~@/assets/img/profile/right_arrows.png" alt="">
        </div>
      </div>
    </li>
    <li>
      <div class="item-icon">
        <img src="~@/assets/img/profile/mihome.png" alt="">
      </div>
      <div class="item-text">
        <div>小米之家</div>
        <div>
          <img src="~@/assets/img/profile/right_arrows.png" alt="">
        </div>
      </div>
    </li>
  </ul>
  <div class="line"></div>
  <ul class="items">
    <li>
      <div class="item-icon">
        <img src="~@/assets/img/profile/fcode.png" alt="">
      </div>
      <div class="item-text">
        <div>我的F码</div>
        <div>
          <img src="~@/assets/img/profile/right_arrows.png" alt="">
        </div>
      </div>
    </li>
    <li>
      <div class="item-icon">
        <img src="~@/assets/img/profile/gift.png" alt="">
      </div>
      <div class="item-text">
        <div>礼物码兑换</div>
        <div>
          <img src="~@/assets/img/profile/right_arrows.png" alt="">
        </div>
      </div>
    </li>
  </ul>
  <div class="line"></div>
  <ul class="items">
    <li>
      <div class="item-icon">
        <img src="~@/assets/img/profile/setting.png" alt="">
      </div>
      <div class="item-text">
        <div>设置</div>
        <div>
          <img src="~@/assets/img/profile/right_arrows.png" alt="">
        </div>
      </div>
    </li>
  </ul>
  <div class="last-line"></div>
</div>
  
</template>

<script>
  export default {
    name: 'Profile'
  }
</script>

<style scoped>
  .hd {
    background-image: url('~@/assets/img/profile/bd.png');
    background-position: center;
    background-color: #f37d0f;
    background-size: auto 100%;
    padding: 15px 0;
  }
  .user {
    height: 50px;
  }
  .b1 {
    display: flex;
    height: 42px;
    line-height: 42px;
    padding-left: 20px;
    padding-right: 30px;
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,.15);
    color: rgba(0,0,0,.8);
    font-size: 14px;
    position: relative;
    justify-content: space-between;
  }
  .b1 img {
    width: 18px;
    position: absolute;
    top: 11px;
    right: 10px;
  }
  .b2 {
    display: flex;
    text-align: center;
    background-color: #fff;
    justify-content: space-between;
    padding: 20px 30px;
  }
  .b2 img {
    width: 26px;
    margin-bottom: 5px;
  }
  .line {
    height: 10px;
    background: #f5f5f5;
  }
  .items {
    background-color: #fff;
  }
  .items li {
    display: flex;
    line-height: 60px;
  }
  .items li .item-icon {
    flex: 1;
    display: flex;;
    justify-self: center;
    align-items: center;
  }
  .items li .item-text {
    flex: 6;
    display: flex;
    justify-content: space-between;
    justify-self: center;
  }
  .item-text img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
  .item-icon img {
    width: 28px;
    margin: 0 auto;
  }
  .last-line {
    height: 50px;
    background: #f5f5f5;
  }
</style>
