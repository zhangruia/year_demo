<template>
  	<div class="chima">
		<div class="c_header">
			<router-link to="/addgress"><img src="../images/zhanghu_03.jpg" /></router-link>
			<h3>MEICI商品尺码</h3>
		</div>
		<nav class="c_menu">
			<span class="c_on">男装</span>
			<span>女装</span>
			<span>童装</span>
			<span>鞋履</span>
		</nav>
		<div class="c_main" id="c_main">
			<div class="c_main_box">
				<div class="c_con">
					<img src="../images/chi_ma_02.jpg" alt="">
					<img src="../images/chi_ma_03.jpg" alt="">
					<img src="../images/chi_ma_04.jpg" alt="">
					<img src="../images/chi_ma_05.jpg" alt="">
					<img src="../images/chi_ma_06.jpg" alt="">
					<img src="../images/chi_ma_07.jpg" alt="">
					<img src="../images/chi_ma_08.jpg" alt="">
					<img src="../images/chi_ma_09.jpg" alt="">
					<img src="../images/chi_ma_10.jpg" alt="">
					<img src="../images/chi_ma_11.jpg" alt="">
					<img src="../images/chi_ma_12.jpg" alt="">
					<img src="../images/chi_ma_13.jpg" alt="">
					<img src="../images/chi_ma_14.jpg" alt="">
					<img src="../images/chi_ma_15.jpg" alt="">
					<img src="../images/chi_ma_16.jpg" alt="">
					<img src="../images/chi_ma_17.jpg" alt="">
					<img src="../images/chi_ma_nan_02.jpg" alt="">
					<img src="../images/chi_ma_nan_03.jpg" alt="">
					<img src="../images/chi_ma_nan_04.jpg" alt="">
					<img src="../images/chi_ma_nan_05.jpg" alt="">
				</div>		
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'chima',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chima
{
	background: #fff;
	display: -webkit-flex;
	-webkit-flex-direction: column;
}

.c_header
{
	width: 100%;
	height: 0.45rem;
	background: #f7f7f7;
	border-bottom: 0.01rem solid #ddd;
	position: fixed;
	left: 0;
	top: 0;
	line-height: 0.45rem;
}
.c_header a
{
	padding-left: 0.1rem;
	float: left;
	font-size: 0.16rem;
}
.c_header a img
{
	width: 0.14rem;
	height: 0.21rem;
}
.c_header h3
{
	padding: 0 0.3rem;
	text-align: center;
	line-height: 0.45rem;
	font-size: 0.16rem;
}

.c_menu
{
	position: fixed;
	left: 0;
	top: 0.45rem;
	width: 100%;
	height: 0.4rem;
	background: #fff;
	line-height: 0.4rem;
	display: -webkit-box;
}
.c_menu span
{
	-webkit-box-flex: 1;
	display: block;
	text-align: center;
	font-size: 0.16rem;
}
.c_menu .c_on
{
	color: #e01738;
}

.c_main
{
	height: 100%;
	margin-top: 0.85rem;
	position: relative;
	-webkit-flex-grow: 1;
	overflow-y: auto;
}
.c_main .c_main_box
{
	height: 1357px;
}
.c_con
{
	position: absolute;
	-webkit-transform: translate3d(100%, 0, 0);
}
.c_con img
{
	width: 100%;
	height: auto;
	vertical-align: top;
	display: block;
}
.c_con:nth-of-type(1)
{
	-webkit-transform: translate3d(0, 0, 0);
}
</style>