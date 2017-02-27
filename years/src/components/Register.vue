<template>
	<div class="register">
		<div class="w_header">
			<h3><router-link to="/login">取消</router-link></h3>
			<h3>注册</h3>
			<h3></h3>
		</div>
		<ul>
			<li>
				<img src="../images/w_denglu_03.jpg" />
				<input type="text" v-model="phone" placeholder="手机号" />
			</li>
			<li>
				<img src="../images/w_denglu_06.jpg" />
				<input type="password" v-model="psd" placeholder="请输入密码" />
			</li>
		</ul>
		<alert v-model="show"></alert>
		<div class="w_btn">
			<h4 class="w_surebtn" @click="test">确定</h4>
		</div>
  	</div>
</template>
<script>
	import { Alert } from 'vux'
	export default {
		name : "register",
		components : {
			Alert
		},
		data () {
			return {
				msg : "",
				phone : "",
				psd : "",
				show : false
			}
		},
		methods : {
			test : function()
			{
				if(this.phone == "")
				{
					this.$vux.alert.show({
						title: '必填项不能为空'
					})
					return false;
				}
				if(this.psd == "")
				{
					this.$vux.alert.show({
						title: '必填项不能为空'
					})
					return false;
				}
				//判断手机号是否合法
				var test = /^1[34578]\d{9}$/;
				if(!test.test(this.phone))
				{
					this.$vux.alert.show({
						title: '您输入的手机号码不合法'
					})
					this.phone = "";
					this.psd = "";
				}else
				{
					var ls = window.localStorage;
					ls.setItem("phone",this.phone);
					ls.setItem("psd",this.psd);
					this.$vux.alert.show({
						title: '注册成功，请登录'
					})
					location.href="http://localhost:8080/#/login";
				}
			}
		}
	}
</script>
<style scoped>
.register
{
	background: #f3f4f6;
	display: -webkit-flex;
	flex-direction: column;
	-webkit-flex: 1;
}
.register ul
{
	padding: 0 0.1rem;
}
.register ul li
{
	height: 0.58rem;
	line-height: 0.58rem;
	padding-left: 0.1rem;
	margin-top: 0.1rem;
	background: #fff;
}
.register ul li img
{
	width: 0.18rem;
	height: 0.19rem;
	margin-right: 0.1rem;
	vertical-align: middle;
}
.register ul li input
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