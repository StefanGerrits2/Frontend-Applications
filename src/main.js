import App from './App.svelte';

const app = new App({
  target: document.body,
  el: '#app',
  props: {
    currentRoute: window.location.pathname,
    message: 'Hello',
    results: null,
    detailPage: false,
  },
  created(){
    let endpoint = 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-03/sparql';
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
        
      } LIMIT 25
      `;
    
    fetch(endpoint +'?query='+ encodeURIComponent(query) +'&format=json')
  		//Extract the json from the html response
  		.then(data => data.json())

  		//Extract the nested data from that json. This nesting will be different for every API btw
  		.then(json => json.results.bindings)
  		//Rewrite each result to be flat and only contain interesting values
  		.then(results => {
  			console.log(results);
  			return results.map( (result, index) => {
  				return {
  					//I've added an id value because that helps Vue distinguish different items later on
  					id: index,
  					title: result.obj.title,
  					//If you're confused about this next line, try experimentig with split+pop on a string
  					// in your browser
  					theme: result.obj.value.split(prefixGVN).pop()
  				};
  			});
  		});
  }
});
  

export default app;