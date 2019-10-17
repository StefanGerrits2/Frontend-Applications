<script>
	export let name;
	const el = document.querySelector('p');
	const url ='https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-03/sparql';
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
		?img 
		?herkomstLabel
		?cultureLabel
		?time
		?size

	WHERE {
	?obj edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster1832> .
	?obj edm:object <https://hdl.handle.net/20.500.11840/termmaster12646> .
	?obj dc:title ?title .
	?obj dc:type ?type .
	?obj edm:isShownBy ?img .
	?obj dct:spatial ?herkomst .
	?obj dct:extent ?size .
	?herkomst skos:prefLabel ?herkomstLabel .
	
	OPTIONAL { ?obj dct:created ?time } .
	OPTIONAL { ?obj dc:subject ?culture } .
	OPTIONAL { ?culture skos:prefLabel ?cultureLabel } .
	
	FILTER langMatches(lang(?title), "ned")
		
	} LIMIT 1000
	`;
	runQuery(url, query);

	function runQuery(url, query){
	//Test if the endpoint is up and print result to page 
	// (you can improve this script by making the next part of this function wait for a succesful result)
	fetch(url)
		.then(res => el.innerText = 'Status of API: ' + res.status);
	// Call the url with the query attached, output data
	fetch(url+'?query='+ encodeURIComponent(query) +'&format=json')
		.then(res => res.json())
		.then(json => {
		console.log(json);
		console.table(json.results);
		el.textContent = JSON.stringify(json.results);
		});
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
<p>{ runQuery() }</p>