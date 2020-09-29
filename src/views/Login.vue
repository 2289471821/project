<template>
  <div id="login">
    <div class="login-header">
      <div class="login-help"></div>
      <div class="login-logo">
        <i class="login-milogo"></i>
        <h4 class="login-title">小米账号登录</h4>
      </div>
      <div class="login-box">
        <div class="login-panel">
          <div v-if="type === 1">
            <label for="" class="login-user">
              <div class="country_list">
                <div>
                  <span class="country_code">
                    <tt class="countrycode-value">+86</tt>
                    <i class="icon_arrow_down"></i>
                  </span>
                </div>
              </div>
              <input type="text" class="item-account" placeholder="手机号码" key="phone" v-model="account" @keydown="isErr = false">
            </label>
            <label for="" class="login-user">
              <input type="text" class="item-account" placeholder="短信验证码" key="code" v-model="password">
              <div class="code_panel">
                <a href="javascript:;" class="send_ticket">获取验证码</a>
              </div>
            </label>
          </div>
          
          <div v-else>
            <label for="" class="login-user">
              <input type="text" class="item-account" placeholder="邮箱/手机号码/小米ID" key="username" v-model="account">
            </label>
            <label for="" class="login-user">
              <input type="password" class="item-account" placeholder="密码" key="password" v-model="password">
              <div class="login-eye">
                <img src="~@/assets/img/login/eye.png" alt="" @click="eyeActive" :class="{myclass: isActive}">
                <img src="~@/assets/img/login/eye_active.png" alt="" @click="eyeActive" :class="{myclass: !isActive}">
              </div>
            </label>
          </div>
        </div>
        <!-- 错误信息 -->
        <div class="err_tip" :class="{myclass: !isErr}">
          <div>
            <em></em>
            <span>手机号格式不正确</span>
          </div>
        </div>
        <div class="btns_bg">
          <input type="button" :value="type === 1 ? '立即登录/注册' : '登录'" class="btnadpt" @click="btnClick">
        </div>
        <div>
          <span><a href="javascript:;" class="btnadpt btn_gray" @click="changeType">{{type === 1 ? '用户名密码登录' : '手机短信登录/注册'}}</a></span>
          <div>
            <div class="remind" v-if="type === 2">
              <a href="javascript:;">立即注册</a>
              <span>|</span>
              <a href="javascript:;">忘记密码？</a>
            </div>
            <div class="nocode" v-else>
              <a href="javascript:;">收不到验证码？</a>
            </div>
          </div>
          <div class="other-login">
            <fieldset class="oth_type_tit">
              <legend align="center" class="oth_type_txt">其他方式登录</legend>
            </fieldset>
            <div class="oth_type_links">
              <a href="" title="微博登录" class="btn_weibo">
                <i class="btn_sns_icontype icon_default_weibo"></i>
              </a>
              <a href="" title="支付宝登录" class="btn_alipay">
                <i class="btn_sns_icontype icon_default_alipay"></i>
              </a>
              <a href="" title="微信登录" class="btn_weixin">
                <i class="btn_sns_icontype icon_default_weixin"></i>
              </a>
              <a href="" title="Apple登录" class="btn_apple">
                <i class="btn_sns_icontype icon_default_apple"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-other">

    </div>
    <div class="login-footer">
      <ul>
        <li class="footer-item" v-for="(item, index) in footerdata" :key="index" :class="{myfontcolor: counter === index}" @click="liClick(index)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { login } from '@/network/login'
  import { mapMutations } from 'vuex'

  export default {
    name: 'Login',
    data() {
      return {
        footerdata: ['简体', '繁体', 'English', '常见问题', '隐私政策'],
        counter: 0,
        isActive: false,
        isErr: false,
        type: 1,
        account: '',
        password: '',
        token: null,
        user: null,
        profilePhoto: null
      }
    },
    methods: {
      liClick(index) {
        this.counter = index
      },
      eyeActive() {
        this.isActive = !this.isActive
      },
      changeType() {
        this.type = this.type === 1 ? 2 : 1;
        this.account = '';
        this.password = ''
      },
      btnClick() {
        if(this.account === '' || this.password === ''){
          alert('账号或密码不能为空');
        }else {
          login(this.account, this.password).then(res => {
            console.log(res.data);
            if(res.data.info) {
              alert('账号或密码错误');
            }else {
              this.token = 'Bearer' + res.data.token;
              this.user = res.data.user;
              this.profilePhoto = res.data.photo;
              
              // 将用户token及信息保存到vuex中
              this.$store.commit('setToken', this.token);
              this.$store.commit('setUsername', this.user);
              this.$store.commit('setProfilephoto', this.profilePhoto);
              alert('登录成功')
              this.$router.push('/');
            }
          }).catch(err => {
            console.log(err);
          })
        }
      }
    }
  }
</script>

<style scoped>
  .myclass {
    display: none;
  }
  #login {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 0 20px;
  }
  .login-footer {
    width: 100%;
    height: 90px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 1;
    text-align: center;
  }
  .footer-item {
    display: inline-block;
    padding: 0 15px;
    font-size: 14px;
    color: #9b9b9b;
  }
  .login-footer li:not(:last-child) {
    border-right: 1px solid #9b9b9b;
  }
  .myfontcolor {
    color: #4a4a4a;
  }
  .login-help {
    width: 24px;
    height: 24px;
    background-image: url('~@/assets/img/login/help.png');
    background-size: cover;
    position: absolute;
    top: 10px;
    right: 15px;
  }
  .login-logo {
    padding: 30px 0 10px;
    text-align: center;
  }
  .login-milogo {
    width: 48px;
    height: 48px;
    display: block;
    background-image: url('~@/assets/img/login/logo.png');
    background-size: cover;
    margin: 0 auto 15px;
  }
  .login-title {
    font-size: 18px;
    color: #000;
    font-weight: normal;
  }
  .login-user {
    margin-bottom: 1px;
    border-bottom: 1px solid #d3d3d3;
    display: -webkit-box;
    -webkit-box-align: center;
  }
  .country_list {
    padding: 10px 10px 10px 8px;
    margin-right: 8px;
    display: block;
    overflow: hidden;
  }
  .country_code {
    -webkit-box-align: center;
    display: flex;
    align-items: center;
  }
  .countrycode-value {
    margin-right: 2px;
    color: #9b9b9b;
    font-size: 18px;
    line-height: 20px;
  }
  .icon_arrow_down {
    width: 7px;
    height: 7px;
    display: block;
    border-width: 1px;
    border-style: solid;
    border-color: #fff #fff #9b9b9b #9b9b9b;;
    transform: rotate(-135deg);
    margin-left: 3px;
  }
  .item-account {
    -webkit-box-flex: 1;
    flex-grow: 1;
    width: 70%;
    padding: 16px 0;
    line-height: normal;
    display: block;
    font-size: 18px;
    border: 0 none;
    outline: none;
  }
  input::-webkit-input-placeholder {
    color: #9b9b9b;
  }
  .code_panel,.login-eye {
    width: 30%;
    padding: 10px;
    color: #333;
    overflow: hidden;
  }
  .login-eye {
    text-align: right;
  }
  .login-eye img {
    width: 25%;
  }
  .send_ticket {
    color: #0d84ff;
    font-size: 15px;
  }
  .btns_bg {
    padding-top: 24px;
  }
  .btnadpt {
    width: 100%;
    height: 47px;
    line-height: 47px;
    display: block;
    margin-bottom: 14px;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    background-color: #ff6700;
    border-radius: 30px;
    overflow: hidden;
    border: 1px solid #ff6700;
    text-align: center;
  }
  .btn_gray {
    background: rgba(0,0,0,.06);
    margin-top: 24px;
    color: rgba(0,0,0,.8);
    border: 1px solid #fff;
  }
  .nocode,.remind {
    text-align: center;
  }
  .nocode a,.remind a {
    padding: 0 9px;
    font-size: 16px;
    color: #9b9b9b;
  }
  .other-login {
    padding-top: 40px;
    text-align: center;
  }
  fieldset {
    border: 0;
  }
  .oth_type_tit {
    border-top: 1px solid #f2f2f2;
    padding-top: 10px;
  }
  .oth_type_txt {
    font-size: 12px;
    color: #b0b0b0;
    width: 80px;
  }
  .oth_type_links {
    padding-top: 10px;
    text-align: center;
    display: -webkit-box;
    -webkit-box-pack: center;
  }
  .oth_type_links a {
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 10px;
    border-radius: 50%;
  }
  .btn_weibo {
    background-color: #ed9090;
  }
  .btn_alipay {
    background-color: #6bb6ea;
  }
  .btn_weixin {
    background-color: #00be00;
  }
  .btn_apple {
    background-color: #000;
  }
  .btn_sns_icontype {
    background-image: url('~@/assets/img/login/icons_type.png');
    background-repeat: no-repeat;
    display: block;
    width: 20px;
    height: 20px;
    margin: 5px auto 0;
  }
  .icon_default_weibo {
    background-position: -37px 0;
  }
  .icon_default_alipay {
    background-position: -57px 0;
  }
  .icon_default_weixin {
    width: 22px;
    height: 22px;
    background-position: -84px 0;
  }
  .icon_default_apple {
    background-image: url('~@/assets/img/login/apple.png');
    background-repeat: no-repeat;
  }
  .err_tip {
    margin-bottom: 5px;
    line-height: 20px;
    color: #f66;
    padding-top: 14px;
  }
</style>
