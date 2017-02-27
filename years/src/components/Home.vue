<template>
    <div class="home">
        <div class="header">
            <a href="#" class="scan"></a>
            <p><input type="text" placeholder="搜索商品、品牌、货号"></p>
            <a class="sear_brand"></a>
        </div>
        <div class="main" id="main">
            <div class="main_detail" id="main_detail">
                <div class="banner">
                    <dl>
                        <dt><img src="../images/banner.jpg"></dt>
                        <dd>音乐节 | “粽” 享一夏穿对味才是正确的音乐态度</dd>
                        <dd>Music Festival Everyone Carvinal</dd>
                    </dl>
                </div>
                <div class="nav">
                    <ol>
                        <li>
                            <dl>
                                <dt><img src="../images/shouye1_14.png"></dt>
                                <dd>女士</dd>
                            </dl>
                            <dl>
                                <dt><img src="../images/shouye1_16.png"></dt>
                                <dd>男士</dd>
                            </dl>
                            <dl>
                                <dt><img src="../images/shouye1_18.png"></dt>
                                <dd>品牌</dd>
                            </dl>
                            <dl>
                                <dt><img src="../images/shouye1_20.png"></dt>
                                <dd>新品</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><img src="../images/shouye1_26.png"></dt>
                                <dd>特惠</dd>
                            </dl>
                            <dl>
                                <dt><img src="../images/shouye1_27.png"></dt>
                                <dd>全球购</dd>
                            </dl>
                            <dl>
                                <dt><img src="../images/shouye1_28.png"></dt>
                                <dd>设计师</dd>
                            </dl>
                            <dl>
                                <dt><img src="../images/shouye1_29.png"></dt>
                                <dd>摇一摇</dd>
                            </dl>                    
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home
{
    width: 100%;
    height: 100%;
}
.home .header 
{
    width: 100%;
    height: 0.45rem;
    background: #D7D5D6;
    opacity: 0.9;
    position: relative;
}
.home .header .scan 
{
    width: 0.2rem;
    height: 0.2rem;
    position: absolute;
    top: 50%;
    left: 5%;
    margin-top: -0.1rem;
    background: url(../images/shouye1_03.png) no-repeat;
    background-size: contain;
}
.home .header .sear_brand 
{
    width: 0.21rem;
    height: 0.17rem;
    position: absolute;
    top: 50%;
    right: 5%;
    margin-top: -0.095rem;
    background: url(../images/shouye1_05.png) no-repeat;
    background-size: contain;
}
.home .header p 
{
    width: 70%;
    height: 0.29rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0 auto;
    background-color: #fff;
    background-image: url(../images/shouye1_08.png);
    background-repeat: no-repeat;
    background-position: 0.05rem  center;
    background-size: 7% 47%;
    padding-left: 0.3rem;
    margin-top: 0.0725rem;
}
.home .header p input 
{
    width: 80%;
    height: 0.25rem;
    outline: none;
    border: none;
}
.main 
{
    width: 100%;
    height: 100%;
}
.main .main_detail 
{
    background: #F3F4F6;
    width: 100%;
}
.main .main_detail .banner 
{
    background: #fff;
    width: 100%;
}
.main .main_detail .banner dl dt img 
{
    width: 100%;
    height: auto;
}
.main .main_detail .banner dl dd 
{
    height: 0.35rem;
    line-height: 0.35rem;
    text-align: center;
    font-size: 0.13rem;
}
.main .main_detail .nav 
{
    background: #fff;
    width: 100%;
    margin: 0.1rem 0;
}
.main .main_detail .nav li 
{
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -webkit-flex: 1;
    text-align: center;
}
.main .main_detail .nav li dl 
{
    width: 100%;
    margin-top: 0.1rem;
}
.main .main_detail .nav li dl dt 
{
    margin: 0 auto;
}
.main .main_detail .nav li dl dt img 
{
    width: 60%;
    height: auto;
}
.main .main_detail .nav li dl dd 
{
    font-size: 13px;
}
.main .main_detail .nav li:nth-of-type(2) a 
{
    margin-top: 0rem;
}
.main .main_detail .main_info 
{
    background: #fff;
    width: 100%;
    margin-bottom: 0.1rem;
}
.main .main_detail .main_info dl dt img 
{
    width: 100%;
    height: auto;
}
.main .main_detail .main_info dl dd 
{
    height: 0.35rem;
    line-height: 0.35rem;
    text-align: center;
    font-size: 14px;
    text-align: center;
}
</style>
