<template>
    <div class="addgress">
        <div class="z_header">
            <router-link to="/mine"><img src="../images/zhanghu_03.jpg" /></router-link>
            <h3>我的账户</h3>
        </div>
        <div class="z_touxiang">
            <dl>
                <dt><img src="../images/zhanghu_07.jpg" /></dt>
                <dd>myaub@qq.com<br>美西会员</dd>
            </dl>
        </div>
        <div class="z_menu">
            <ul>
                <li>手机验证<router-link to="/phonetest"><img src="../images/zhanghu_11.jpg" /></router-link></li>
                <li>MEICI CLUB介绍<router-link to="/jieshao"><img src="../images/zhanghu_11.jpg" /></router-link></li>
                <li>关于退货/换货<router-link to="/tuihuo"><img src="../images/zhanghu_11.jpg" /></router-link></li>
                <li>商品尺码<router-link to="/chima"><img src="../images/zhanghu_11.jpg" /></router-link></li>
            </ul>
            <p>退出当前账号</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.addgress
{
    width: 100%;
    height: 100%;
    background: #f3f4f6;
}

.z_header
{
    height: 0.45rem;
    background: #f7f7f8;
    border-bottom: 0.01rem solid #ddd;
    line-height: 0.45rem;
}
.z_header a
{
    padding-left: 0.1rem;
    float: left;
    font-size: 0.16rem;
}
.z_header a img
{
    width: 0.14rem;
    height: 0.21rem;
}
.z_header h3
{
    padding: 0 0.3rem;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.16rem;
}

.z_touxiang
{
    height: 1rem;
    padding: 0.1rem;
}
.z_touxiang dl
{
    background: #fff;
    height: 1rem;
}
.z_touxiang dt
{
    float: left;
    width: 40%;
    text-align: center;
    margin-top: 0.1rem;
}
.z_touxiang dt img
{
    width: 0.8rem;
    height: 0.8rem;
}
.z_touxiang dd
{
    float: right;
    width: 60%;
    text-align: left;
    margin-top: 0.25rem;
}
.z_menu
{
    padding: 0.1rem;
    margin-top: 0.1rem;
}
.z_menu ul
{
    background: #fff;
    padding: 0 0.1rem;
}
.z_menu ul li
{
    list-style: none;
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 0.01rem solid #ddd;
}
.z_menu ul li a
{
    float: right;
}
.z_menu ul li a img
{
    width: 0.06rem;
    height: 0.1rem;
}
.z_menu p
{
    margin-top: 0.2rem;
    height: 0.45rem;
    background: #e8203c;
    color: #fff;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.16rem;
}
</style>