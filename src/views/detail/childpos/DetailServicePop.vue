<template>
  <div>
    <div :class="{uimask: $store.state.isServiceShow}"></div>
    <div class="detail-service" :class="{myclose: !$store.state.isServiceShow}">
      <div class="service-header">
        <span>服务说明</span>
        <i class="service-close" @click="closeClick"></i>
      </div>
      <div class="service-body">
        <div class="service-item">
          <img src="@/assets/img/detail/service-pop.png" alt="">
          <div class="service-text">
            <div class="service-title">小米自营</div>
          </div>
        </div>
        <div class="service-item">
          <img src="@/assets/img/detail/service-pop.png" alt="">
          <div class="service-text">
            <div class="service-title">小米发货</div>
            <div class="service-desc">由小米发货</div>
          </div>
        </div>
        <div class="service-item">
          <img src="@/assets/img/detail/service-pop.png" alt="">
          <div class="service-text">
            <div class="service-title">7天无理由退货</div>
          </div>
        </div>
        <div class="service-item">
          <img src="@/assets/img/detail/service-pop.png" alt="">
          <div class="service-text">
            <div class="service-title">运费说明</div>
            <div class="service-desc">
              <span>由小米发货商品(不含有品),单笔满99元免运费;</span><br>
              <span>由小米有品发货的商品,免运费;</span><br>
              <span>由第三方商家发货的商品，运费以实际结算金额为准;</span><br>
              <span>特殊商品需要单独收取运费,具体以实际结算金额为准;优惠券等不能抵扣运费金额;如需无理由退货,用户将承担该商品的退货物流费用;</span>
            </div>
          </div>
        </div>
        <div class="service-item">
          <img src="@/assets/img/detail/service-pop.png" alt="">
          <div class="service-text">
            <div class="service-title">企业信息</div>
            <div class="service-desc">
              <span>企业名称：小米通讯技术有限公司</span><br>
              <span>企业执照注册号：91110108558521630L</span><br>
              <span>企业地址：北京市海淀区西二旗中路33号院6 号楼9层019号</span><br>
              <span>企业电话：400-100-5678</span><br>
              <span>营业期限：2010年08月25日 至 2040年08月24日</span><br>
              <span>经营范围：开发手机技术、计算机软件及信息技术；技术检测、技术咨询、技术服务、技术转让；计算机技术培训；系统集成；货物进出口、技术进出口、代理进出口；家用电器、通信设备、广播电视设备（不含卫星电视广播、地面接收装置）、机械设备、电子产品、文化用品的批发零售；维修仪器仪表；销售医疗器械I类、II、III类、针纺织品（含家纺家饰）、服装鞋帽、日用杂货、工艺品、文化用品、体育用品、照相器材、卫生用品（含个人护理用品）、钟表眼镜、箱包、家具（不从事实体店铺经营）、小饰品、日用品、乐器、自行车、智能卡；计算机、通讯设备、家用电器、电子产品、机械设备的技术开发、技术服务；销售金银饰品（不含金银质地纪念币）；家用空调的委托生产；委托生产翻译机；销售翻译机、五金交电（不含电动自行车）、厨房用品、陶瓷制品、玻璃制品、玩具、汽车零配件、食用农产品、花卉、苗木、宠物用品、建筑材料、装饰材料、化妆品、珠宝首饰、通讯设备、卫生间用品、农药；生产手机（仅限在海淀区永捷北路2号三层生产及外埠生产）；出版物批发；出版物零售；销售食品。（销售第三类医疗器械以及销售食品以及依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动。）</span>
            </div>
          </div>
        </div>
        <div class="service-item">
          <img src="@/assets/img/detail/service-pop.png" alt="">
          <div class="service-text">
            <div class="service-title">售后服务政策</div>
            <div class="service-img"><img src="~@/assets/img/profile/right_arrows.png" alt=""></div>
          </div>
        </div>
        <div class="service-item">
          <img src="@/assets/img/detail/service-pop.png" alt="">
          <div class="service-text">
            <div class="service-title">7天价格保护</div>
            <div class="service-img"><img src="~@/assets/img/profile/right_arrows.png" alt=""></div>
          </div>
        </div>
      </div>
      <div class="service-footer">
        <div @click="closeClick"><span>确定</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailChoose',
    methods: {
      closeClick() {
        this.$store.commit('changeServiceshow');
      }
    }
  }
</script>

<style scoped>
  .myclose {
    display: none;
  }
  .detail-service {
    width: 100%;
    height: 75%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: -1px;
    background-color: #fff;
    box-shadow: 0 -5px 5px rgba(100, 100, 100, .1);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 0 20px 75px;
    z-index: 110;
  }
  .service-footer {
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    background-color: #fff;
  }
  .service-footer div {
    width: 90%;
    height: 40px;
    background-color: #ff6700;
    margin: auto;
    border-radius: 30px;
    line-height: 40px;
    color: #fff;
  }
  .service-close {
    width: 35px;
    height: 35px;
    display: block;
    background-image: url('~@/assets/img/detail/close.png');
    background-size: contain;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .service-header {
    padding: 18px 0 25px;
    text-align: center;
    font-size: 20px;
    color: rgba(0,0,0,.87);
  }
  .service-body {
    overflow-y: scroll;
    max-height: 100%;
    padding-bottom: 75px;
  }
  .service-item {
    margin-bottom: 25px;
    display: flex;
    flex-wrap: nowrap;
    flex: 1 1 auto;
    position: relative;
  }
  .service-item img {
    width: 14px;
    height: 14px;
    margin-right: 9px;
  }
  .service-text {
    flex: 1 1 auto;
  }
  .service-title {
    font-size: 14px;
  }
  .service-desc {
    font-size: 12px;
    color: rgba(0,0,0,.5);
    line-height: 18px;
    margin-top: 9px;
  }
  .service-img img {
    width: 15px;
    height: 15px;
  }
  .service-img {
    position: absolute;
    top: 0;
    right: 0;
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
</style>
