<script>
	import { onMount } from 'svelte';
	import QueryTemplate from '../shared/QueryTemplate.svelte';

	let data = []

	onMount(() => {
		const url ='https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-03/sparql';
		let el = document.querySelector('p');
		let sparqLimit = 25;
	//Note that the query is wrapped in es6 template strings to allow for easy copy pasting
	const query = `
		PREFIX dc: <http://purl.org/dc/elements/1.1/>
		PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
		PREFIX dct: <http://purl.org/dc/terms/>
		PREFIX edm: <http://www.europeana.eu/schemas/edm/>
		PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
		PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
		SELECT 
			?obj
			?title
			?type 
			(SAMPLE(?img) as ?img) 
			?originLabel
			?cultureLabel
			?time
			?size

		WHERE {
		?obj edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster1832> .
		?obj edm:object <https://hdl.handle.net/20.500.11840/termmaster12646> .
		?obj dc:title ?title .
		?obj dc:type ?type .
		?obj edm:isShownBy ?img .
		?obj dct:spatial ?origin .
		?obj dct:extent ?size .
		?origin skos:prefLabel ?originLabel .
		
		OPTIONAL { ?obj dct:created ?time } .
		OPTIONAL { ?obj dc:subject ?culture } .
		OPTIONAL { ?culture skos:prefLabel ?cultureLabel } .
		
		FILTER langMatches(lang(?title), "ned")
			
		} LIMIT ${sparqLimit}
		`;
	runQuery(url, query);

	function runQuery(url, query){
	//Test if the endpoint is up and print result to page 
	// (you can improve this script by making the next part of this function wait for a succesful result)
	fetch(url)
		.then(res => el.innerText = 'Status of API: ' + res.status);
	// Call the url with the query attached, output data
	fetch(url+'?query='+ encodeURIComponent(query) +'&format=json')
		.then(res => res.json()) //array van objecten, hier moet overheen gelooped worden voor html, in een loop img create element die je append met een src van een van de objecten met de link. 
		.then(json => {
		console.log(json);
		console.table(json.results);
		data = json.results.bindings
		});
	} //de JSON sla je op een een var bijvoorbeeld, dan loop je hierovereen (for each budda in buddas)
	}) //component maken voor img die een link bevat, dan voor elk object in array 
</script>

{#each data as result}
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