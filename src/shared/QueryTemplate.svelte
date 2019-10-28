<script>
    export let title, image, culture, time, type, origin, size;
    import Image from './Image.svelte';
</script>

<style>
	div {
		border-bottom: 1px solid black;
        padding: 1em;
	}
    
    .template-image {
        display: flex;
        align-items: center;
    }
</style>

<div>
    <h3>{title}</h3>
    <p class="template-image">
        <Image image={image}/>
    </p>
    <p>Cultuur: {culture}</p>
    <p>Tijd: {time}</p>
    <p>Type: {type}</p>
    <p>Herkomst: {origin}</p>
    <p>Grootte: {size}</p>
</div>