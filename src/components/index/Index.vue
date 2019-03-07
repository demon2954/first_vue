<template>
	<div id="content">
		<div id="search">
			<img id="more" src="../../assets/more.png" />
			<input id="search_input" ref="search_input" type='text'>
			<img id="search-btn" src="../../assets/search.png" v-on:click="search1" />
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
		<div class="middle">
			<div class="middle_left"><span class="middle_word">数码</span></div>
			<div class="middle_right"><span class="middle_word">家居</span></div>
			<div class="middle_left"><span class="middle_word">衣服</span></div>
			<div class="middle_right"><span class="middle_word">出行</span></div>
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
				list: [{
					img: ''
				},{
					img: ''
				},{
					img: ''
				}]
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
	#search {
		text-align: center;
		padding: 4px 0px 4px 0px;
		height: 20px;
		background: #EEC211;
		display: flex;
	}

	#more {
		border-radius: 50%;
		width: 20px;
		height: 20px;
		float: left;
		padding: 0px 1% 0px 5px;
	}

	#search_input {
		float: left;
		width: 80%;
		padding: 0px 1% 0px 5px;
	}

	#search-btn {
		width: 20px;
		height: 20px;
		float: right;
		padding: 0px 5px 0px 1%;
	}

	#swiper_div {
		height: 150px;
	}

	.middle {
		text-align: center;
	}

	.middle_left {
		text-align: center;
		float: left;
		background: #EEC211;
		padding: 12% 24.85% 12% 25%;
		margin-bottom: 1px;
		position: relative;
	}

	.middle_right {
		text-align: center;
		float: right;
		background: #EEC211;
		padding: 12% 25% 12% 24.85%;
		margin-bottom: 1px;
		position: relative;
	}

	.middle_word {
		position: absolute;
		padding: 0px 25% 0px 25%;
		margin-top: -15%;
	}
</style>
