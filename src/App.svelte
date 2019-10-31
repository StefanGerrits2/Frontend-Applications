<!-- App.svelte -->
<script>
	import NavMenu from './components/NavMenu.svelte'
	import Dolls from './components/Dolls.svelte'
	import Cars from './components/Cars.svelte'
	import Animals from './components/Animals.svelte'
	import BoardGames from './components/BoardGames.svelte'
	import Home from './components/Home.svelte'
	import { Router, Route } from "svelte-routing";
	export let url = "";
</script>

<Router url="{url}">
	<NavMenu isDefault={true}/>
  	<div>
		<Route path="/" component="{Home}" />
		<Route path="/dolls" component="{Dolls}" />
		<Route path="/animals" component="{Animals}" />
		<Route path="/board-games" component="{BoardGames}"/>
		<Route path="/cars" component="{Cars}"/>
  	</div>
</Router>