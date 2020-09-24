<template>
  <div>
    <div class="device-img">
      <a href=""><img src="~@/assets/img/recommend/banners/device.webp" alt=""></a>
    </div>
    <div class="device-content">
      <ul>
        <li v-for="(items, index) in devicedata" :key="index" class="device-item" @click="itemClick">
          <div style="position: relative;">
            <div class="device-hot">
              <img :src="items.hot" alt="">
            </div>
            <img :src="items.simple_img" alt="">
          </div>
          <div class="device-name">{{items.name}}</div>
          <div class="device-info">{{items.simple_info}}</div>
          <div class="device-price">
            {{items.new_price | getSymbol}}<span class="device-qi">起</span>
            <span class="old-price">{{items.old_price | getSymbol}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="device-footer">更多米家家电产品 ></div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendDevice',
    props: {
      devicedata: Array
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
      itemClick() {
        this.$router.push('/detail')
      }
    }
  }
</script>

<style scoped>
  .device-img img {
    width: 100%;
  }
  .device-content {
    width: 100%;
  }
  .device-item {
    width: 50%;
    display: inline-block;
    overflow: hidden;
  }
  .device-item img {
    width: 100%;
  }
  .device-name {
    color: rgba(0,0,0,.87);
    font-size: 16px;
    margin: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
  }
  .device-info {
    font-size: 14px;
    color: rgba(0,0,0,.54);
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
  }
  .device-price {
    font-size: 16px;
    color: #ea625b;
    padding-left: 10px;
  }
  .device-qi {
    font-size: 12px;
  }
  .old-price {
    font-size: 12px;
    color: rgba(0,0,0,.54);
    text-decoration: line-through;
  }
  .device-footer {
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }
  .device-hot {
    width: 30%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
