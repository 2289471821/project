<template>
  <div class="detail-content">
    <div class="detail-price">{{new_price | getSymbol}} <span class="old-price">{{old_price | getSymbol}}</span></div>
    <div class="detail-name">{{name}}</div>
    <div class="detail-title">{{detailed_info_title}}</div>
    <ul>
      <li v-for="(item, index) in detailed_info_items" :key="index" class="detail-info">
        <span class="num">{{index+1 }}</span><span>{{item.item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'DetailContent',
    props: {
      new_price: String,
      old_price: String,
      name: String,
      detailed_info_title: String,
      detailed_info_items: Array
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
  .detail-content {
    padding: 5px 5px 5px 20px;
  }
  .detail-price {
    color: #ff6700;
    font-size: 28px;
    font-weight: 600;
  }
  .old-price {
    font-size: 12px;
    color: rgba(0,0,0,.54);
    text-decoration: line-through;
  }
  .detail-name {
    color: #000;
    font-family: Avenir;
    font-size: 18px;
    font-weight: 700;
    margin: 8px 0;
  }
  .detail-title {
    color: #000;
    font-size: 14px;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .detail-info {
    color: #000;
    font-size: 14px;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
  }
  .num {
    border: 1px solid gray;
    padding: 0 4px;
    border-radius: 30px;
  }
</style>
