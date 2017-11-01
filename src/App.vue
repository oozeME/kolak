<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	html,body,#app{
		width:100%;
		height:100%;
		background: #111;
	}
	*{
		margin: 0;
		padding: 0;
		text-decoration: none;
		list-style:none;
		box-sizing: border-box;
		outline: none;
		
		color: #fff;
	}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
