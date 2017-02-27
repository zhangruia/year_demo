<template>
    <div class="first">

        <router-view></router-view>
        
        <!-- 页脚 -->
        <div class="footer">
            <ul>
                <li>
                    <router-link to="/home">
                        <span><img src="../images/white/home.png" /></span>
                        <i>首页</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/find">
                        <span><img src="../images/white/find.png" /></span>
                        <i>发现</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/mzine">
                        <span><img src="../images/white/mzine.png" /></span>
                        <i>Mzine</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/shopping">
                        <span><img src="../images/white/shopping.png" /></span>
                        <i>购物袋</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/mine">
                        <span><img src="../images/white/mine.png" /></span>
                        <i>我的</i>
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
.first
{
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 0.14rem;
    display: -webkit-flex;
    flex-direction: column;
}
.footer
{
    width: 100%;
    height: 0.5rem;
    background: #F5F3F4;
}
.footer a
{
    width: 100%;
    height: 100%;
    display: block;
    display: -webkit-flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
}
.footer ul
{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: row;
    -webkit-flex: 1;
    margin-top: 0.05rem;
}
.footer ul li
{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    text-align: center;
}
.footer i
{
    color: #666;
}
.footer li img
{
    width: 0.25rem;
    height: 0.22rem;
}
.home,.find,.mzine,.shopping,.mine,.guanyu,.login,.register
{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
}
</style>
