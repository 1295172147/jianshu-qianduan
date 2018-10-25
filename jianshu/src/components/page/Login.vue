<template>
  <div class="page">
    <div class="top">
      <div class="top_logo">
        <img src="../../assets/logo.png" alt="">
      </div>
    </div>
    <div class="p_center">
      <div class="c_div">
        <div class="c_div_top">
          <h4>
            <span class="active"><router-link to="/sign_in">登录</router-link></span>
            <b>·</b>
            <span>
              <router-link to="/sign_up">注册</router-link>
            </span>

          </h4>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import vSign_in from '../page/Sign-in'
    export default {
        name: "Login",
      components:{
          vSign_in
      }
    }
   $(function () {
     $(".c_div_top span").click(function (){
       $(".c_div_top span").removeClass();
       $(".c_div_top a").css("color","#eeeeee");
       $(this).addClass("active");
       $(this).find("a").css("color","#ea6f5a");
     })
   })
</script>

<style scoped>
  .page{
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #eeeeee;
    overflow: hidden;
  }
  .top{
    width: 100px;
    height: 130px;
    position: absolute;
    top: 56px;
    margin-left: 50px;
  }
  .p_center{
    width: 400px;
    height: 500px;
    margin: 90px auto;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    overflow: hidden;
  }
  .c_div{
    width:300px;
    height: auto;
  }
  .c_div_top{
    margin: 0 auto 50px;
    font-weight: 400;
    color: #969696;
    padding:10px auto;
  }
  .c_div_top h4{
    text-align: center;
  }
  .c_div_top>h4>span{
    padding: 10px;
  }
  .c_div_top>h4>span>a{
    font-weight: 700;
    color: #cccccc;
    font-size: 18px;
    text-decoration: none;
  }
  .c_div_top>h4>span:hover{
    border-bottom: 2px solid #ea6f5a;
  }
  .active{
    border-bottom: 2px solid #ea6f5a;
  }
  .active>a{
    color:#ea6f5a!important;
  }
</style>
