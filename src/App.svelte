<!-- App.svelte -->
<script>
	import NavMenu from './components/NavMenu.svelte'
	import Dolls from './components/Dolls.svelte'
	import Cars from './components/Cars.svelte'
	import Weapons from './components/Weapons.svelte'
	import BoardGames from './components/BoardGames.svelte'
	import Home from './components/Home.svelte'
	import { Router, Route } from "svelte-routing";
	export let url = "";
</script>

<Router url="{url}">
	<NavMenu isDefault/>
  	<div>
		<Route path="/" component="{Home}" />
		<Route path="/poppen" component="{Dolls}" />
		<Route path="/wapens" component="{Weapons}" />
		<Route path="/bordspellen" component="{BoardGames}"/>
		<Route path="/autos" component="{Cars}"/>
  	</div>
</Router>