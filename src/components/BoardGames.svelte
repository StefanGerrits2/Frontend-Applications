<script>
	import { onMount } from 'svelte';
	import QueryTemplate from '../components/QueryTemplate.svelte';
    import { url, query } from '../queries/GetBoardgames.svelte';
    import PageTitle from './PageTitle.svelte';
    let results = [];

	onMount(() => {
        runQuery(url, query);
        function runQuery(url, query){
        fetch(url+'?query='+ encodeURIComponent(query) +'&format=json') // Get data from API with my query
            .then(res => res.json()) // Data is being send back as JSON 
            .then(json => {
                results = json.results.bindings; // Save all objects in a let
            });
        } 
	}) 
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

<PageTitle title="Zo zagen bordspellen er vroeger uit"/>
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