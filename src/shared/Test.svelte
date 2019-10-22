<script>
    export let title
    export let image
    export let culture
    import Image from './Image.svelte'
    export let image_url
</script>

<style>
	div {
		border: 1px solid black;
		padding: 1em;
	}
    
    .test {
        display: flex;
        align-items: center;
    }
</style>

<div>
    <h3>Titel: {title}</h3>
    <p class="test">Foto:
        <Image image={image}/>
    </p>
    <p>Cultuur: {culture}</p>
</div>