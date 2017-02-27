<template>
  	<div class="mine">

		<div class="h_top" id="h_top">		
			<header class="h_header">
				<dl>
					<dt></dt>
					<dd>
						<input type="text" :value="test" v-model="test" /><b @click="goLogin">登录</b>
					</dd>
				</dl>
			</header>
			<div class="h_menu">
				<nav>
					<router-link to="addgress">
						<dl>
							<dt><img src="../images/wo_de_mei_xi_05.jpg" alt=""></dt>
							<dd>我的账户<br>ACCOUNT</dd>
						</dl>
					</router-link>
					<dl>
						<dt><img src="../images/wo_de_mei_xi_07.jpg" alt=""></dt>
						<dd>我的订单<br>CRDER</dd>
					</dl>
					<dl>
						<dt><img src="../images/wo_de_mei_xi_09.jpg" alt=""></dt>
						<dd>我的收藏<br>FAVORITE</dd>
					</dl>
				</nav>
				<nav>
					<dl>
						<dt><img src="../images/wo_de_mei_xi_14.jpg" alt=""></dt>
						<dd>我的优惠券<br>COUPON</dd>
					</dl>
					<dl>
						<dt><img src="../images/wo_de_mei_xi_15.jpg" alt=""></dt>
						<dd>我的地址<br>ADDRESS</dd>
					</dl>
					<dl>
						<dt><img src="../images/wo_de_mei_xi_16.jpg" alt=""></dt>
						<dd>摇一摇,更多惊喜<br>SHAKE</dd>
					</dl>
				</nav>
				<nav>
					<dl>
						<dt><img src="../images/wo_de_mei_xi_20.jpg" alt=""></dt>
						<dd>给我打分<br>CRADE</dd>
					</dl>
					<dl>
						<dt><img src="../images/wo_de_mei_xi_21.jpg" alt=""></dt>
						<dd>分享即有好礼<br>SHARE</dd>
					</dl>
					<router-link to="/guanyu" class="detail">
						<dl>
							<dt><img src="../images/wo_de_mei_xi_22.jpg" alt=""></dt>
							<dd>关于美西<br>ABOUT</dd>
						</dl>
					</router-link>
				</nav>
				<p>客服电话：4000-250-630</p>
			</div>
		</div>

  	</div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
    	test : "您还未登录，点击即刻"
    }
  },
  methods : {
  	goLogin : function()
		{
			var ls = window.localStorage;
			if (!ls.phone == "")  this.$router.push("/login");
			this.test = ls.phone;

			if (ls.phone == "")  this.$router.push("/register");
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mine
{
	width: 100%;
	height: 100%;
	display: -webkit-flex;
	-webkit-flex-direction: column;
}
.h_top
{
	width: 100%;
	height: 100%;
}
.h_header
{
	width: 100%;
	height: 1.8rem;
	background: url(../images/wo_de_mei_xi_02.jpg) no-repeat;
	background-size: cover;
}
.h_header dt
{
	width: 0.8rem;
	height: 0.8rem;
}
.h_header dd
{
	color: #eee;
	line-height: 0.7rem;
	text-align: center;
	padding-top: 0.36rem;
}
.h_header dd input
{
	background: none;
	outline: none;
	border: none;
	color: #ccc;
	font-weight: bold;
	text-align: center;
}
.h_menu
{
	width: 100%;
	height: 100%;
	border-bottom: 1px solid blue;
}

.h_menu nav
{
	width: 100%;
	height: 21%;
	background: #fff;
	display: -webkit-flex;
	border-top: 1px solid #ccc;
}
.detail
{
	width: 100%;
	height: 100%;
	flex-direction: row;
	-webkit-flex: 1;
	border-right: 1px solid #ccc;
	text-align: center;
	text-decoration: none;
}
.h_menu nav a
{
	display: inline-block;
	width: 100%;
	height: 100%;
	flex-direction: row;
	-webkit-flex: 1;
	border-right: 1px solid #ccc;
	text-align: center;
	text-decoration: none;
}
.h_menu nav dl
{
	width: 100%;
	height: 100%;
	flex-direction: row;
	-webkit-flex: 1;
	border-right: 1px solid #ccc;
	text-align: center;
}
.h_menu nav dt img
{
	width: 0.45rem;
	height: 0.4rem;
	padding-top: 0.15rem;
	margin-bottom: .1rem;

}
.h_menu nav dd
{
	font-size: 0.14rem;
	color: #b2b2b2;
}
.h_menu p
{
	height: 0.45rem;
	background: #e8203c;
	color: #f5f5f5;
	line-height: 0.45rem;
	text-align: center;
}
</style>