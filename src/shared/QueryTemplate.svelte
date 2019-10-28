<script>
    export let title, image, culture, time, type, origin, size;
    import Image from './Image.svelte';
</script>

<style>
	div {
		border-bottom: 1px solid black;
        padding: 1em;
    }
</style>

<div>
    <h3>{title}</h3>
    <Image image={image}/>
    <p>Cultuur: {culture}</p>
    <p>Tijd: {time}</p>
    <p>Type: {type}</p>
    <p>Herkomst: {origin}</p>
    <p>Grootte: {size}</p>
</div>