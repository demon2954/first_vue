<template>
	<div id="content">
		<div id="search">
			<img id="more" src="../../assets/more.png" />
			<input id="search_input" ref="search_input" type='text'>
			<img id="search-btn" src="../../assets/more.png" v-on:click="search1" />
		</div>
		<Swiper ref="swiper" v-if="list.length > 0" :autoPlay='true' :showIndicator='true' interval="2000" duration="1000">
			<!-- <Slide @click="clickMe" v-for="(tag,key) in list" :key="key"> -->
			<Slide v-for="(tag,key) in list" :key="key">
				<div id="swiper_div">
					<img id="more" src="../../assets/swiper.png" />
				<!-- <a href="https://www.baidu.com"><img :src="tag.img" /></a> -->
				</div>
			</Slide>
		</Swiper>
	</div>
</template>


<script>
	import { Swiper, Slide } from 'vue-swiper-component';
	export default {
		data: function() {
			return {
				txt: 'dfdf',
				list: [
					{ img: '' },
					{ img: '' },
					{ img: '' },
					{ img: '' }
				]
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
				this.$router.push({name: 'SearchList', params: {keyword: keyword}})
				// this.$router.push({path: '/SearchList', query: {keyword: keyword}})
			}
		}
	}
</script>

<style>
	#search {
		text-align: center;
		padding: 4px 0px 4px 0px;
		background: #EEC211;
	}

	#more {
		float: left;
		padding: 0px 0px 0px 5px;
	}

	#search_input {
		position: inherit;
		width: 80%;
	}

	#search-btn {
		float: right;
		padding: 0px 5px 0px 0px;
	}
	#swiper_div{
		height: 150px;
	}
</style>
