<template>
  <div>
    <div class="tv-img">
      <a href=""><img src="~@/assets/img/recommend/banners/tv.webp" alt=""></a>
    </div>
    <div class="tv-content">
      <ul>
        <li v-for="(items, index) in tvdata" :key="index" class="tv-item" @click="itemClick">
          <div style="position: relative;">
            <div class="tv-hot">
              <img :src="items.hot" alt="">
            </div>
            <img :src="items.simple_img" alt="">
          </div>
          <div class="tv-name">{{items.name}}</div>
          <div class="tv-info">{{items.simple_info}}</div>
          <div class="tv-price">
            {{items.new_price | getSymbol}}<span class="tv-qi">起</span>
            <span class="old-price">{{items.old_price | getSymbol}}</span>
          </div>
          <el-button type="danger">立即购买</el-button>
        </li>
      </ul>
    </div>
    <div class="tv-footer">更多小米电视产品 ></div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendTv',
    props: {
      tvdata: Array
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
        this.$router.push({
          path: '/detail',
          query: {
            type: 'tv',
            id: 1
          }
        })
      }
    }
  }
</script>

<style scoped>
  .tv-img img {
    width: 100%;
  }
  .tv-content {
    width: 100%;
  }
  .tv-item {
    width: 50%;
    display: inline-block;
    text-align: center;
    overflow: hidden;
  }
  .tv-item img {
    width: 90%;
  }
  .tv-name {
    color: rgba(0,0,0,.87);
    font-size: 16px;
    margin: 5px 0;
  }
  .tv-info {
    font-size: 14px;
    color: rgba(0,0,0,.54);
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tv-price {
    font-size: 16px;
    color: #ea625b;
  }
  .tv-qi {
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
  .tv-footer {
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }
  .tv-hot {
    width: 30%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
