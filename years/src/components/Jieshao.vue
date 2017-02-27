<template>
  	<div class="jieshao">
		<div>
			<div class="j_header">
				<router-link to="/addgress"><img src="../images/zhanghu_03.jpg" /></router-link>
				<h3>MEICI CLUB介绍</h3>
			</div>
			<img src="../images/jieshao_02.jpg" class="img1" />
			<div class="j_con">
				<h5>美西时尚网会员等级:</h5>
				<p>
					为了能给您提供全面、周到的购物体验，我们希望您能注册成为我们的会员。<br>
					1.注册会员：通过网站注册即可成为我们的注册会员。<br>
					2.白银会员：注册会员自然年内消费满2万元即晋级成为白银会员。<br>
					3.黄金会员：注册会员自然年内消费满5万元即晋级成为黄金会员。<br>
					4.黄金会员：注册会员自然年内消费满5万元即晋级成为黄金会员。<br>
					5.白金会员：注册会员自然年内消费满5万元即晋级成为白金会员。<br>
					用户自然年内的消费金额累计达到晋级条件时，客服人员会对会员账户进行审核，审核通过后系统将自动提生该账户等级。<br>
					其中白银、黄金、白金会员是我们的MEICI CIUB会员，我们将为这些等级的会员提供更全面、周到的购物体验！
				</p>
			</div>
			<div class="j_tab">
				<table>
					<tr style="background:#e8203c;">
						<td colspan="5" style="color:#eee;">会员服务说明</td>
					</tr>
					<tr>
						<td rowspan="2"></td>
						<td rowspan="2">注册<br>会员</td>
						<td colspan="3">MEICI CLUB会员</td>
					</tr>
					<tr>
						<td>白银会员</td>
						<td>黄金会员</td>
						<td>白金会员</td>

					</tr>
					<tr>
						<td>新品预售</td>
						<td></td>
						<td></td>
						<td><span></span></td>
						<td><span></span></td>
					</tr>	
					<tr>
						<td>特别活动</td>
						<td></td>
						<td><span></span></td>
						<td><span></span></td>
						<td><span></span></td>
					</tr>		
					<tr>
						<td>免费配送</td>
						<td><span></span></td>
						<td><span></span></td>
						<td><span></span></td>
						<td><span></span></td>
					</tr>				
					<tr>
						<td rowspan="2" >免费包装</td>
						<td rowspan="2">免普通包装</td>
						<td rowspan="2" colspan="3">免礼品包装</td>
					</tr>
					<tr></tr>
					<tr>
						<td>专属购物顾问</td>
						<td></td>
						<td></td>
						<td><span></span></td>
						<td><span></span></td>
					</tr>	
					<tr>
						<td>特别活动</td>
						<td></td>
						<td><span></span></td>
						<td><span></span></td>
						<td><span></span></td>
					</tr>		
					<tr>
						<td>免费配送</td>
						<td><span></span></td>
						<td><span></span></td>
						<td><span></span></td>
						<td><span></span></td>
					</tr>
					<tr>
						<td rowspan="2">免费包装</td>
						<td rowspan="2">免普通包装</td>
						<td rowspan="2" colspan="3">免礼品包装</td>
					</tr>
					<tr></tr>
					<tr>
						<td>专属购物顾问</td>
						<td></td>
						<td><span></span></td>
						<td><span></span></td>
						<td><span></span></td>
					</tr>				
					<tr>
						<td>专享折扣</td>
						<td></td>
						<td><span></span></td>
						<td><span></span></td>
						<td><span></span></td>
					</tr>
					<tr>
						<td>品牌活动</td>
						<td></td>
						<td></td>
						<td></td>
						<td><span></span></td>
					</tr>
					<tr>
						<td rowspan="2">免费奢护</td>
						<td rowspan="2" colspan="2">购买后的一年内<br>免费清洗护理一次</td>
						<td rowspan="2" colspan="2">购买后的三年内<br>免费清洗护理两次</td>
					</tr>
					<tr></tr>
					<tr>
						<td>订单保留时间</td>
						<td colspan="2">订单保留48小时</td>
						<td colspan="2">订单保留96小时</td>
					</tr>			
				</table>
			</div>
		</div>
  	</div>
</template>

<script>
export default {
  name: 'jieshao',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jieshao
{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	background: #fff;
	font-size: 0.15rem;
}
.j_header
{
	width: 100%;
	height: 0.45rem;
	background: #f7f7f7;
	border-bottom: 0.01rem solid #ddd;
	line-height: 0.45rem;
	display: -webkit-flex;
}
.j_header img
{
	width: 0.14rem;
	height: 0.21rem;
}
.j_header h3
{
	padding: 0 0.3rem;
	line-height: 0.45rem;
	font-size: 0.16rem;
	text-align: center;
	font-weight: normal;
}
.img1
{
	width: 100%;
	height: 1.6rem;
}
.j_con
{
	padding: 0 0.1rem;
}
.j_con h5
{
	height: 0.45rem;
	line-height: 0.45rem;
	font-size: 0.12rem;
}
.j_con p
{
	line-height: 0.3rem;
}

.j_tab
{
	padding: 0 0.1rem;
	margin-top: 0.2rem;
}
.j_tab table
{
	width: 100%;
	border: 0.01rem solid #ddd;
}
.j_tab table td
{
	border: 0.01rem solid #ddd;
	text-align: center;
	line-height: 0.35rem;
	color: #6b6b6b;
}
.j_tab table td a
{
	border-bottom: 0.01rem solid #000;
	color: #6b6b6b;
}
.j_tab table td span
{
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 50%;
    background: #e42338;
    display: inline-block;
}
</style>