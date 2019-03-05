<template>
	<div id="searchList">{{txt}}</div>
</template>

<script>
	export default {
		data: function() {
			return {
				txt: ''
			}
		},
		methods: {
			showList: function() {
				var keyword = this.$route.params.keyword
				// var keyword = this.$route.query.keyword;
				this.$data.txt = keyword;
			}
		},
		created(){
			this.showList();
		}
	}
</script>

<style>
	#searchList {
		text-align: center;
	}
</style>
