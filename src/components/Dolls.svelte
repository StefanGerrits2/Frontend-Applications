<script>
	import { onMount } from 'svelte';
	import QueryTemplate from '../components/QueryTemplate.svelte';
	let results = [];
	import { url, query } from '../queries/GetDolls.svelte';
	import PageTitle from './PageTitle.svelte';

	onMount(() => {
	runQuery(url, query);
		function runQuery(url, query){
		// Call the url with the query attached, output data
		fetch(url+'?query='+ encodeURIComponent(query) +'&format=json')
			.then(res => res.json()) //array van objecten, hier moet overheen gelooped worden voor html, in een loop img create element die je append met een src van een van de objecten met de link. 
			.then(json => {
			console.log(json);
			console.table(json.results);
			results = json.results.bindings
			});
		} //de JSON sla je op een een var bijvoorbeeld, dan loop je hierovereen (for each budda in buddas)
	}) //component maken voor img die een link bevat, dan voor elk object in array 
</script>

<style>
    .cards {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>

<PageTitle title="Zo zagen poppen er vroeger uit"/>
<ul class="cards">
	{#each results as result}
		<QueryTemplate 
			title={result.title.value}
			culture={result.cultureLabel.value}
			image={result.img.value}
			time={result.time.value}
			origin={result.originLabel.value}
			size={result.size.value}
			type={result.type.value}>
		</QueryTemplate>
	{/each}
</ul>