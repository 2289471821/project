<template>
  <div>
    <div class="phone-img">
      <a href=""><img src="~@/assets/img/recommend/banners/phone.webp" alt=""></a>
    </div>
    <div class="phone-content">
      <ul>
        <li v-for="(items, index) in phonedata" :key="index" class="phone-item">
          <div>
            <img :src="items.simple_img" alt="">
          </div>
          <div class="phone-name">{{items.name}}</div>
          <div class="phone-info">{{items.simple_info}}</div>
          <div class="phone-price">
            {{items.new_price | getSymbol}}<span class="phone-qi">起</span>
            <span class="old-price">{{items.old_price | getSymbol}}</span>
          </div>
          <el-button type="danger">立即购买</el-button>
        </li>
      </ul>
    </div>
    <div class="phone-footer">更多小米手机产品 ></div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendPhone',
    props: {
      phonedata: Array
    },
    filters: {
      getSymbol(value) {
        if(value){
          return '￥' + parseInt(value)
        }else{
          return
        }        
      }
    }
  }
</script>

<style scoped>
  .phone-img img {
    width: 100%;
  }
  .phone-content {
    width: 100%;
  }
  .phone-item {
    width: 50%;
    display: inline-block;
    text-align: center;
    overflow: hidden;
  }
  .phone-item img {
    width: 90%;
  }
  .phone-name {
    color: rgba(0,0,0,.87);
    font-size: 16px;
    margin: 5px 0;
  }
  .phone-info {
    font-size: 14px;
    color: rgba(0,0,0,.54);
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .phone-price {
    font-size: 16px;
    color: #ea625b;
  }
  .phone-qi {
    font-size: 12px;
  }
  .old-price {
    font-size: 12px;
    color: rgba(0,0,0,.54);
    text-decoration: line-through;
  }
  button {
    padding: 10px 25px;
    margin-bottom: 10px;
  }
  .phone-footer {
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }
</style>
