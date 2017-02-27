<template>
  	<div class="faxian">
		<div class="vfind">
			<div class="vfind-item">
				<div class="pos" id="pos">
					<dl>
						<dt><img src="../images/2faxian_03.png"></dt>
						<dd>
							<p>Saint Laurent 圣罗兰</p>
							<p>Saint Laurent 圣罗兰</p>
							<p><span><img src="../images/2faxian_07.png"></span> 23</p>
						</dd>
					</dl>
				</div>
			</div>
			<div class="xinqing">
				<dl><dt></dt><dd>不喜欢</dd></dl>
				<dl><dt></dt><dd>查看详情</dd></dl>
				<dl><dt></dt><dd>喜欢</dd></dl>
			</div>
			<div class="cover" id="cover" v-if="cover" @click="dianji">
				<img src="../images/2faxianshoucidianji1_06.png">
			</div>
		</div>
  	</div>
</template>
<script>
	export default {
		name: 'faxian',
		data () {
	    	return {
				cover : true
			}
		},
		methods : {
			dianji : function()
			{
				this.cover = !this.cover
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.faxian
{
	display: -webkit-flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
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
.vfind
{
	width: 100%;
	height: 100%;
	display: -webkit-flex;
	flex-direction: column;
	position: relative;
}
.vfind-item
{
	-webkit-flex-grow: 1;
	-moz-flex-grow: 1;
	-o-flex-grow: 1;
	height: 100%;
	flex-direction: column;
}
.vfind-item .pos
{
	position: relative;
	width: 100%;
	margin: 0 auto;
	margin-top: 0.33rem;
	z-index: 999;
}
.pos dl
{
	position: absolute;
	width: 100%;
	height: 3.0rem;
	left: 0.2rem;
	padding-left: 0.2rem;
}
.pos dl dt
{
	padding-top: 0.1rem;
}
.pos dl dt img
{
	width: 80%;
	height: 80%;
}
.pos dl dd
{
	font-size: 0.16rem;
	padding-top: 0.1rem;
	line-height: 0.25rem;
}
.pos dl dd p
{
	background: #fff;
}
.pos dl dd img
{
	width: 0.15rem;
	height: 0.13rem;
}
.xinqing
{
	height: 0.9rem;
	display: -webkit-flex;
	border-top: 1px solid #808080;
	text-align: center;
	width: 100%;
	border-right: 1px solid #808080;
}
.xinqing dl
{
	flex-direction: row;
	-webkit-flex: 1;
	text-align: center;
	margin: 0.1rem 0;
	z-index: 1000;
	border-right: 1px solid #ccc;
}
.xinqing dl dt
{
	margin: 0 auto;
	width: 0.29rem;
	height: 0.09rem;
	padding-top: 0.1rem;
	padding-bottom: 0.1rem;
}
.xinqing dl dd
{
	font-size: 0.15rem;
	padding-top: 0.15rem;
}
.xinqing dl:nth-child(1) dt
{
	background: url(../images/bbg_03.png) no-repeat;
	background-size: 100% auto;
	-webkit-transition: all 0.3s;
}
.xinqing dl:nth-child(1) dt:hover 
{
	background-position: 0 -0.29rem;
}
.xinqing dl:nth-child(2) dt
{
	background: url(../images/2faxian_13.png) no-repeat;
	background-size: 100% auto;
}
.xinqing dl:nth-child(3) dt
{
	background: url(../images/bbg_05.png) no-repeat 0 0.05rem;
	background-size: 100% auto;
	-webkit-transition: all 0.3s;
}
.xinqing dl:nth-child(3) dt:hover 
{
	background-position: 0 -0.22rem;
}
.cover
{
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1300;
}
.cover img
{
	width: 100%;
	height: 100%;
}
</style>