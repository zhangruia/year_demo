<template>
  	<div class="login">
		<div class="w_header">
			<h3><router-link to="/mine">取消</router-link></h3>
			<h3>登录</h3>
			<h3></h3>
		</div>
		<ul>
			<li>
				<img src="../images/w_denglu_03.jpg" />
				<input type="text" placeholder="手机号" v-model="phone" />
			</li>
			<li>
				<img src="../images/w_denglu_06.jpg" />
				<input type="password" placeholder="请输入密码" v-model="psd" />
			</li>
		</ul>
		<alert v-model="show"></alert>
		<confirm v-model="show"></confirm>
		<div class="w_btn">
			<h4 class="w_surebtn" @click="addsure">确定</h4>
			<p><b @click="goRegister">点击注册,<small>手机注册验证即送100元</small></b><span @click="showPlugin">忘记密码</span></p>
		</div>
  	</div>
</template>

<script>
	import { Alert } from 'vux'
	import { Confirm } from 'vux'

	export default {
		name: 'login',
		components : {
			Confirm,
			Alert
		},
		data () {
			return {
				phone : "",
				psd : "",
				show : false
			}
		},
		methods : {
			goRegister () {
				this.$router.push("/register")
			},
			addsure () {
				var ls = window.localStorage;
				if(this.phone == "" && this.psd == "")
				{
					this.$vux.alert.show({
						title : "必填项不能为空"
					})
				}
				if(this.phone != ls.phone)
				{
					this.$vux.alert.show({
						title: '查无此账户，请注册'
					})
					this.$router.push("/register");
				}else if(this.psd != ls.psd)
				{
					this.$vux.alert.show({
						title: '密码错误'
					})
				}
				if(this.phone == "" && this.psd == "")
				{
					this.$router.push("/mine");
				}
			},
			showPlugin () {
				var that = this;
				this.$vux.confirm.show(
				{
			        title: 'sure',
			        onConfirm () {
			        	that.$router.push("/test")
			        }
		      	})
		      	
		    }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login
{
	background: #f3f4f6;
	display: -webkit-flex;
	flex-direction: column;
	-webkit-flex: 1;
}
.login ul
{
	padding: 0 0.1rem;
}
.login ul li
{
	height: 0.58rem;
	line-height: 0.58rem;
	padding-left: 0.1rem;
	margin-top: 0.1rem;
	background: #fff;
}
.login ul li img
{
	width: 0.18rem;
	height: 0.19rem;
	margin-right: 0.1rem;
	vertical-align: middle;
}
.login ul li input
{
	height: 0.3rem;
	width: 75%;
	border: none;
}

.w_header
{
	height: 0.45rem;
	background: #f7f7f8;
	border-bottom: 0.01rem solid #ddd;
	line-height: 0.45rem;
	display: -webkit-flex;
}
.w_header a
{
	padding-left: 0.1rem;
	float: left;
	font-size: 0.16rem;
}
.w_header h3
{
	flex-direction: row;
	-webkit-flex: 1;
	padding: 0 0.3rem;
	line-height: 0.45rem;
	font-size: 0.16rem;
	font-weight: 500;
}
.w_header h3 a
{
	color: #000;
	text-decoration: none;
}
.w_header h3:not(:nth-child(1))
{
	text-align: center;
}

.w_btn
{
	padding: 0.1rem;
}
.w_btn h4
{
	width: 100%;
	height: 0.58rem;
	line-height: 0.58rem;
	background: #e8203c;
	text-align: center;
	font-size: 0.16rem;
	color: #fff;
}
.w_btn p
{
	height: 0.4rem;
	line-height: 0.4rem;
}
.w_btn p small
{
	color: #b7b8b9;
}
.w_btn p span
{
	float: right;
	line-height: 0.4rem;
}
</style>