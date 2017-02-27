<template>
  	<div class="find">
		<div class="header">
			<h4>
				<span><router-link to="/faxian"><tab>发现</router-link></span>
				<span><router-link to="/tuijian">推荐</tab></router-link></span>
			</h4>
			<i id="fenxiang"></i>
		</div>
		<router-view></router-view>
  	</div>
</template>

<script>
	import { Tab, TabItem } from 'vux'
	export default {
		name: 'find',
		components : {
			Tab,
			TabItem
		},
		data () {
	    	return {
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.find
{
	display: -webkit-flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;
}
.vux-tab
{
	background: none;
}
.header
{
	width: 100%;
	height: 0.45rem;
	background: #f6f6f7;
	position: relative;
	line-height: 0.45rem;
}
.header i
{
	display: inline-block;
	width: 0.21rem;
	height: 0.18rem;
	background-image: url("../images/2faxianfirstdianji_03.png");
	background-repeat: no-repeat;
	background-size: contain;
	font-size: 0;
	position: absolute;
	top: 0.15rem;
	left: 90%;
}
.header h4
{
	width: 60%;
	line-height: 0.45rem;
	font-size: 0.15rem;
	margin: 0 auto;
	text-align: center;
	display: -webkit-flex;
	-webkit-flex-direction: row;
}
.header h4 span
{
	width: 50%;
	text-align: center;
	line-height: 0.45rem;
}
.header h4 span a 
{
	color: #000;
	text-decoration: none;
}
.header h4 span .bgred
{
	color: #e82843;
}
.header h4 span .bgnoe
{
	color: #000;
}
</style>