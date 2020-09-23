<template>
  <div>
    <div class="smart-img">
      <a href=""><img src="~@/assets/img/recommend/banners/smart.webp" alt=""></a>
    </div>
    <div class="smart-content">
      <ul>
        <li v-for="(items, index) in smartdata" :key="index" class="smart-item">
          <div class="smart-left">
            <img :src="items.simple_img" alt="">
          </div>
          <div class="smart-right">
            <div class="smart-name">{{items.name}}</div>
            <div class="smart-info">{{items.simple_info}}</div>
            <div class="smart-price">
              {{items.new_price | getSymbol}}
              <span class="old-price">{{items.old_price | getSymbol}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="smart-footer">更多米家智能产品 ></div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendSmart',
    props: {
      smartdata: Array
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
  .smart-img img,.smart-content,.smart-item {
    width: 100%;
  }
  .smart-left {
    width: 50%;
    display: inline-block;
  }
  .smart-left img {
    width: 100%;
    display: flex;
  }
  .smart-right {
    width: 50%;
    display: inline-block;
    position: absolute;
    padding: 40px 0 0 20px;
  }
  .smart-name {
    color: rgba(0,0,0,.87);
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .smart-info {
    font-size: 14px;
    color: rgba(0,0,0,.54);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 10px 0 20px;
  }
  .smart-price {
    font-size: 16px;
    color: #ea625b;
  }
  .old-price {
    font-size: 12px;
    color: rgba(0,0,0,.54);
    text-decoration: line-through;
  }
  .smart-footer {
    width: 100%;
    text-align: center;
    padding: 20px 0;
  }
</style>
