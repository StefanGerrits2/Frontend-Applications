<!-- App.svelte -->
<script>
	import NavMenu from './shared/NavMenu.svelte'
	import Dolls from './queries/Dolls.svelte'
	import Cars from './queries/Cars.svelte'
	import Weapons from './queries/Weapons.svelte'
	import BoardGames from './queries/BoardGames.svelte'
	import Home from './shared/Home.svelte'
	import { Router, Route } from "svelte-routing";
	export let url = "";
</script>

<Router url="{url}">
	<NavMenu/>

  	<div>
		<Route path="/" component="{Home}" />
		<Route path="/poppen" component="{Dolls}" />
		<Route path="/wapens" component="{Weapons}" />
		<Route path="/bordspellen" component="{BoardGames}"/>
		<Route path="/autos" component="{Cars}"/>
  	</div>
</Router>