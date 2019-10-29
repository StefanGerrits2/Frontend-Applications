<script>
    export let title, image, culture, time, type, origin, size, uri;
    import Image from './Image.svelte';
</script>

<style>
	div {
		border-bottom: 1px solid black;
        padding: 1em;
    }
    a {
        color: black;
    }
</style>

<div>
    <a href="/${uri}"><h3>{title}</h3></a>
    <Image image={image}/>
    <p>Cultuur: {culture}</p>
    <p>Tijd: {time}</p>
    <p>Type: {type}</p>
    <p>Herkomst: {origin}</p>
    <p>Grootte: {size}</p>
</div>