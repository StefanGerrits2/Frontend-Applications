  <script context="module">
    export let url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-03/sparql";
    export const query = `
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
            ?materialLabel
            ?categoryLabel

        WHERE {
        ?obj edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster1832> .
        ?obj edm:object <https://hdl.handle.net/20.500.11840/termmaster12665> .
        ?obj dc:title ?title .
        ?obj dc:type ?type .
        ?obj edm:isShownBy ?img .
        ?obj dct:spatial ?origin .
        ?obj dct:extent ?size .
        ?origin skos:prefLabel ?originLabel .
        ?obj dct:medium ?material .
        ?material skos:prefLabel ?materialLabel .
        
        OPTIONAL { ?obj dct:created ?time } .
        OPTIONAL { ?obj dc:subject ?culture } .
        OPTIONAL { ?culture skos:prefLabel ?cultureLabel } .
        
        FILTER langMatches(lang(?title), "ned")
            
        } LIMIT 20
    `
</script>