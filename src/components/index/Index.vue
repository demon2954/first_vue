<template>
	<div id="content">
		<div class="search">
			<img class="more" src="../../assets/more.png" />
			<input class="search_input" ref="search_input" type='text'>
			<img class="search-btn" src="../../assets/search.png" v-on:click="search1" />
		</div>
		
		<Swiper ref="swiper" v-if="list.length > 0" :autoPlay='true' :showIndicator='true' interval="2000" duration="1000">
			<!-- <Slide @click="clickMe" v-for="(tag,key) in list" :key="key"> -->
			<Slide v-for="(tag,key) in list" :key="key">
				<div id="swiper_div">
					<img src="../../assets/swiper.png" />
					<!-- <a href="https://www.baidu.com"><img :src="tag.img" /></a> -->
				</div>
			</Slide>
		</Swiper>
		
		<div class="middle show">
			<div class="middle_left move_1"><span class="middle_word">照片</span></div>
			<div class="middle_right move_2"><span class="middle_word">故事</span></div>
			<div class="middle_left move_3"><span class="middle_word">衣服</span></div>
			<div class="middle_right move_4"><span class="middle_word">玩具</span></div>
		</div>
	</div>
</template>


<script>
	import {
		Swiper,
		Slide
	} from 'vue-swiper-component';
	export default {
		data: function() {
			return {
				txt: 'dfdf',
				list:[{img:''},{img:''},{img:''}],
			}
		},
		components: {
			Swiper,
			Slide
		},
		methods: {
			search1: function() {
				this.$data.txt = this.$refs.search_input.value;
				var keyword = this.$data.txt;
				this.$router.push({
					name: 'SearchList',
					params: {
						keyword: keyword
					}
				})
				// this.$router.push({path: '/SearchList', query: {keyword: keyword}})
			}
		}
	}
</script>

<style>
.search{text-align:center;padding:4px 0px 4px 0px;height:20px;background:#CC33CC;display:flex}
.more{border-radius:50%;width:20px;height:20px;float:left;padding:0px 1% 0px 5px}
.search_input{float:left;width:80%;padding:0px 1% 0px 5px}
.search-btn{width:20px;height:20px;float:right;padding:0px 5px 0px 1%}
#swiper_div{height:150px}
.middle{text-align:center}
.middle_left{text-align:center;float:left;background:#CC33CC;padding:12% 24.85% 12% 25%;margin-bottom:1px;position:relative}
.middle_right{text-align:center;float:right;background:#CC33CC;padding:12% 25% 12% 24.85%;margin-bottom:1px;position:relative}
.middle_word{position:absolute;padding:0px 25% 0px 25%;margin-top:-15%}
.show{animation-name:show;animation-duration:3s;position:absoulte;z-index: auto;}
.move_1{animation-name:move_1;animation-duration:2s;}
.move_2{animation-name:move_2;animation-duration:2s}
.move_3{animation-name:move_3;animation-duration:2s}
.move_4{animation-name:move_4;animation-duration:2s}
@-webkit-keyframes show{0%{opacity:0}100%{opacity:1}}
@keyframes show{0%{opacity:0}100%{opacity:1}}
@-webkit-keyframes move_1{0%{left:-50px;top:-50px}100%{left:0px;top:0px}}
@keyframes move_1{0%{left:-50px;top:-50px}100%{left:0px;top:0px}}
@-webkit-keyframes move_2{0%{right:-50px;top:-50px}100%{right:0px;top:0px}}
@keyframes move_2{0%{right:-50px;top:-50px}100%{right:0px;top:0px}}
@-webkit-keyframes move_3{0%{left:-50px;bottom:-50px}100%{left:0px;bottom:0px}}
@keyframes move_3{0%{left:-50px;bottom:-50px}100%{left:0px;bottom:0px}}
@-webkit-keyframes move_4{0%{right:-50px;bottom:-50px}100%{right:0px;bottom:0px}}
@keyframes move_4{0%{right:-50px;bottom:-50px}100%{right:0px;bottom:0px}}
</style>
