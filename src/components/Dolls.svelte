<script>
	import { onMount } from 'svelte';
	import QueryTemplate from '../components/QueryTemplate.svelte';
	import { url, query } from '../queries/GetDolls.svelte';
	import PageTitle from './PageTitle.svelte';
	let results = []; // Create array to put in data later

	// Source I used for the next code: https://github.com/cmda-tt/course-19-20/blob/master/examples/sparql/baseScript.js
	onMount(() => { // Retrieve data while page is being build
		runQuery(url, query);
		function runQuery(url, query){
			fetch(url+'?query='+ encodeURIComponent(query) +'&format=json') // Get data from API with my query
			.then(res => res.json()) // Data is being send back as JSON 
			.then(json => {
				results = json.results.bindings; // Save all objects in results
			});
		}
	})
	// Source ends here
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

<PageTitle isDetailPage={true} title="Zo zagen poppen er vroeger uit"/>
<ul class="cards">
	{#each results as result}
		<QueryTemplate 
			title={result.title.value}
			culture={result.cultureLabel.value}
			image={result.img.value}
			time={result.time.value}
			origin={result.originLabel.value}
			size={result.size.value}
			type={result.type.value}
			material={result.materialLabel.value}>
		</QueryTemplate>
	{/each}
</ul>