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
	import Test from '../src/shared/Test.svelte'
	export let message;
	export let answers;
	export let results;
</script>

<div id="app">
	{ message }
	<ul>
		{#each results as result}
		<li>
			<a href="/{result.title}">Titel: {result.title}</a>
		</li>
		{/each}
	</ul>
</div>