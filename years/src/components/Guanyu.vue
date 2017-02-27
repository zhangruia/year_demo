<template>
  	<div class="guanyu">
		<div>
			<header class="m_header">
				<router-link to="/mine"><img src="../images/zhanghu_03.jpg" /></router-link>
				<h3>关于美西</h3>
			</header>
			<div class="m_banner">
				<img src="../images/guan_yu_mei_xi_02.jpg" />
				<img src="../images/guan_yu_mei_xi_03.jpg" />
				<img src="../images/guan_yu_mei_xi_04.jpg" />
				<img src="../images/guan_yu_mei_xi_05.jpg" />
				<h3>概述</h3>
				<p>
					美西时尚，创立于2008年，是国内顶尖的高端时尚电子商务网站。秉承着“轻松享受奢华”的理念，将时尚资讯通过数字化平台传递给中国消费者。美西时尚率先推出了成为行业标准的多项优质服务，为中国奢侈品电子商务市场的发展奠定了基础。随着市场的进一步成熟，美西时尚也不断专注于开拓高端时尚生活零售新模式，实现MEICI.COM、MEICI APP、MEICI CAFE多渠道线上线下互通，打造高端时尚生活闭环。
				</p>
			</div>
			<div class="m_con">
				<dl>
					<dt><img src="../images/guan_yu_mei_xi_00_08.jpg" /></dt>
					<dd>
						<h4>2008年</h4>
						<span>美西时尚www.meici.com创立</span>
						<h4>2011年</h4>
						<span>美西时尚获得了国际知名私募基金软银赛富的投资</span>
						<h4>2012年</h4>
						<span>美西被中国电子商务协会评为“中国电子商务最具有投资价值企业”</span>
						<h4>2014年底</h4>
						<span>美西又获英国老牌高端百货HOUSE OF FRASER弗雷泽的战略入股，进一步实现线下零售的扩张</span>
					</dd>
				</dl>
				<h5>美西时尚APP</h5>
			</div>
			<div class="m_pic">
				<img src="../images/guan_yu_mei_xi_07.jpg" />
				<img src="../images/guan_yu_mei_xi_08.jpg" />
				<img src="../images/guan_yu_mei_xi_09.jpg" />
				<img src="../images/guan_yu_mei_xi_10.jpg" />
				<img src="../images/guan_yu_mei_xi_11.jpg" />
				<img src="../images/guan_yu_mei_xi_12.jpg" />
				<img src="../images/guan_yu_mei_xi_13.jpg" />
				<img src="../images/guan_yu_mei_xi_14.jpg" />
				<img src="../images/guan_yu_mei_xi_15.jpg" />
				<img src="../images/guan_yu_mei_xi_16.jpg" />
				<img src="../images/guan_yu_mei_xi_17.jpg" />
				<img src="../images/guan_yu_mei_xi_18.jpg" />
				<img src="../images/guan_yu_mei_xi_19.jpg" />
				<img src="../images/guan_yu_mei_xi_20.jpg" />
			</div>
			<div class="m_footer">
				<p>
					<a href=""><img src="../images/guan_yu_mei_xi_23.jpg" /><i>售后服务</i></a>
					<a href=""><img src="../images/guan_yu_mei_xi_25.jpg" /><i>联系客服</i></a>
				</p>
			</div>
		</div>
  	</div>
</template>

<script>
export default {
  name: 'guanyu',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.guanyu
{
	background: #fff;
	overflow-y: auto;
}
.m_header
{
	height: 0.45rem;
	background: #f7f7f7;
	border-bottom: 0.01rem solid #ddd;
	line-height: 0.45rem;
}
.m_header a
{
	padding-left: 0.1rem;
	float: left;
	font-size: 0.16rem;
}
.m_header a img
{
	width: 0.14rem;
	height: 0.21rem;
}
.m_header h3
{
	padding: 0 0.3rem;
	text-align: center;
	line-height: 0.45rem;
	font-size: 0.16rem;
}

.m_banner img
{
	width: 100%;
	height: auto;
	vertical-align: top;
}
.m_banner h3
{
	font-size: 0.16rem;
	width: 100%;
	text-align: center;
	line-height: 0.5rem;
	font-weight: bold;
}
.m_banner p
{
	padding: 0 0.1rem;
	line-height: 0.26rem;
}

.m_con
{
	padding: 0 0.1rem;
	margin-top: 0.2rem;
	height: 2.3rem;
}
.m_con dl
{
	width: 100%;
	display: -webkit-flex;
	-webkit-flex-direction: row;
}
.m_con dt
{
	float: left;
	width: 20%;
}
.m_con dt img
{
	width: 0.11rem;
	height: auto;
}
.m_con dd
{
	float: left;
	-webkit-flex-grow: 1;
}
.m_con dd h4
{
	line-height: 0.18rem;
	font-weight: bold;
	height: 0.18rem;
	font-size: 0.17rem;
}
.m_con dd span
{
	display: block;
	line-height: 0.2rem;
	color: #464646;
	font-size: 0.16rem;
}
.m_con h5
{
	border-bottom: 0.01rem solid #000;
	height: 0.3rem;
	line-height: 0.3rem;
	width: 33%;
	margin: 0.3rem auto;
	font-weight: bold;
	font-size: 0.16rem;
}
.m_pic
{
	width: 100%;
	margin-top: 1rem;
}
.m_pic img
{
	width: 100%;
	height: auto;
	vertical-align: top;
}
.m_footer
{
	padding: 0.1rem;
	background: #f3f4f6;
	height: 0.68rem;
}
.m_footer p
{
	background: #fff;
	height: 0.48rem;
	display: -webkit-flex;
	-webkit-flex-direction: row;
	padding: 0.1rem 0;
}
.m_footer p a
{
	display: inline-block;
	-webkit-flex-grow: 1;
	border-right: 0.01rem solid #ddd;
	text-align: center;
	line-height: 0.28rem;
	text-decoration: none;
	font-size: 0.16rem;
}
.m_footer p a i
{
	font-style: normal;
	padding-left: 0.2rem;
	color: black;
	line-height: 0.4rem;
}
.m_footer p a img
{
	width: 0.23rem;
	height: 0.23rem;
	vertical-align: middle;
	margin-right: 0.05rem;
}
.m_footer p a:nth-child(2)
{
	border: none;
}
</style>