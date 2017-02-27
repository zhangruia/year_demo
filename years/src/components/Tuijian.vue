<template>
  	<div class="tuijian">
  		<scroller lock-x scrollbar-y height="100%">
			<div class="contain">
				<div class="left">
					<p class="pp">专属你的时尚单品</p>
					<dl v-for="iteml in lefts">
						<dt><img :src="iteml.imgs"></dt>
						<dd>
							<p>{{iteml.title1}}</p>
							<p>{{iteml.title2}}</p>
						</dd>
					</dl>
				</div>
				<div class="right">
					<dl v-for="itemr in rights">
						<dt><img :src="itemr.imgs"></dt>
						<dd>
							<p>{{itemr.title1}}</p>
							<p>{{itemr.title2}}</p>
						</dd>
					</dl>
				</div>
			</div>
		</scroller>	
  	</div>
</template>
<script>
	import { Scroller } from 'vux'
	export default {
		name: 'tuijian',
		components : {
			Scroller
		},
		data () {
	    	return {
				lefts : "",
				rights : ""
			}
		},
		created : function()
		{
			this.loading()
		},
		methods : {
			loading : function()
			{
				this.$http({url : "/static/tuijian.json",method : "GET"})
					.then(function(data)
					{
						this.lefts = data.body.tuijian1;
						this.rights = data.body.tuijian2;
					})
			},
			test : function()
			{
				console.log(this.$refs.scroller);
			}
		},
		watch : {
			lefts : function(neww,olds)
			{
				console.log(neww)
				console.log(olds)
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tuijian
{
	display: -webkit-flex;
	flex-direction: column;
	-webkit-flex-grow: 1;
	position: relative;
	overflow: hidden;
}
.tuijian dl
{
	display: block;
	width: 100%;
	height: auto;
	text-align: center;
	border-bottom: 1px solid #ccc;
}
.tuijian dl dt
{
	padding: 0.1rem;
}
.tuijian dl dt img
{
    width: auto;
    height: 0.72rem;
}
.tuijian dl dd p
{
	line-height: 20px;
	font-size: 0.15rem;
}
.left
{
	width: 50%;
	height: 100%;
	border: 1px solid #ccc;
}
.left .pp
{
	width: 100%;
	height: 0.5rem;
	line-height: 0.5rem;
	text-align: center;
	border-bottom: 1px solid #ccc;
}

.right
{
	width: 50%;
	height: 100%;
	border: 1px solid #ccc;
	border-left: none;
}

.contain
{
	width: 100%;
	display: -webkit-flex;
	-webkit-flex-direction: row;
}
</style>