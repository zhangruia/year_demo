<template>
	<div class = "test">
		<div class="w_header">
			<h3><router-link to="/login">&lt;</router-link></h3>
			<h3>忘记密码</h3>
			<h3></h3>
		</div>
		<ul>
			<li>
				<input type="text" v-model = "phone" @blur = "done()" placeholder="请输入手机号" />
			</li>
			<li>
				<input type="password" v-model = "test"  placeholder="请输入验证码" /><button @click = "getTest">{{yanzhengma}}</button>
			</li>
		</ul>
		<loading v-model = "show1" :text = "text1" :show = "false"></loading>
		<alert v-model="show">{{cont}}</alert>
		<div class="w_btn" style="padding: 15px;">
			<x-button @click.native="showLoading" type="primary">下一步</x-button>
		</div>
	</div>
</template>
<script>
	import { Loading , XButton , Alert } from 'vux'

	export default {
		name : "test",
		components : {
			Loading,
			XButton,
			Alert
		},
		data () {
			return {
				phone : "",
				test : "",
				timer : null,
				show1 : false,
				text1 : "primary",
				isShow : false,
				show : false,
				cont : "请输入正确的手机号",
				yanzhengma : "获取验证码"
			}
		},
		methods : {
			showLoading () {
				//点击下一步的操作
				if(!this.phone || !this.test)
				{
					this.show1 = !this.show1
					this.isShow = false;
					this.text1 = "必填项不能为空"
					setTimeout(() => {
						this.show1 = !this.show1
					},600)
				}
		    },
			done (e) {
				var phone = this.phone,
					test = /^1[34578]\d{9}$/;
				if(!test.test(phone)) this.show = true
			},
			getTest () {
				/*if(!this.phone){
					this.show = true;
					return false;
				}*/
				//var timers = setInterval( () => {
				this.$nextTick(() => {
					this.$http.get("../static/data/test.json").then( (data) => {
						console.log(data)
					})
				})
					
				//},1000)
			}
		}
	}
</script>
<style scoped>
.test
{
	background: #f3f4f6;
	display: -webkit-flex;
	flex-direction: column;
	-webkit-flex: 1;
}
.test ul
{
	padding: 0 0.1rem;
}
.test ul li
{
	height: 0.58rem;
	line-height: 0.58rem;
	padding-left: 0.1rem;
	margin-top: 0.1rem;
	background: #fff;
}
.test ul li img
{
	width: 0.18rem;
	height: 0.19rem;
	margin-right: 0.1rem;
	vertical-align: middle;
}
.test ul li input
{
	height: 0.3rem;
	width: 75%;
	border: none;
}
.test ul li button
{
	width: 0.85rem;
	height: 100%;
	background: #666;
	border: none;
	color: #fff;
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
	padding: 0.2rem 0.1rem;
}
.w_btn h4
{
	width: 100%;
	height: 0.47rem;
	line-height: 0.47rem;
	background: black;
	text-align: center;
	font-size: 0.16rem;
	color: #fff;
	font-weight: normal;
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