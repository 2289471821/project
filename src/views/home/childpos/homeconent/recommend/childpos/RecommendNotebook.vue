<template>
  <div>
    <div class="notebook-img">
      <a href=""><img src="~@/assets/img/recommend/banners/notebook.webp" alt=""></a>
    </div>
    <div class="notebook-content">
      <ul>
        <li v-for="(items, index) in notebookdata" :key="index" class="notebook-item" @click="itemClick">
          <div>
            <img :src="items.simple_img" alt="">
          </div>
          <div class="notebook-name">{{items.name}}</div>
          <div class="notebook-info">{{items.simple_info}}</div>
          <div class="notebook-price">
            {{items.new_price | getSymbol}}<span class="notebook-qi">起</span>
            <span class="old-price">{{items.old_price | getSymbol}}</span>
          </div>
          <el-button type="danger">立即购买</el-button>
        </li>
      </ul>
    </div>
    <div class="notebook-footer">更多小米笔记本产品 ></div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendNotebook',
    props: {
      notebookdata: Array
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
  .notebook-img img {
    width: 100%;
  }
  .notebook-content {
    width: 100%;
  }
  .notebook-item {
    width: 50%;
    display: inline-block;
    text-align: center;
    overflow: hidden;
  }
  .notebook-item img {
    width: 90%;
  }
  .notebook-name {
    color: rgba(0,0,0,.87);
    font-size: 16px;
    margin: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .notebook-info {
    font-size: 14px;
    color: rgba(0,0,0,.54);
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .notebook-price {
    font-size: 16px;
    color: #ea625b;
  }
  .notebook-qi {
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
  .notebook-footer {
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }
</style>
