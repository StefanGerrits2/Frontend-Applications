<script>
    export let title, image, culture, time, type, origin, size;
    import Image from './Image.svelte';
</script>

<style>
	div {
		border-bottom: 1px solid black;
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
    <p>Tijd: {time}</p>
    <p>Type: {type}</p>
    <p>Herkomst: {origin}</p>
    <p>Grootte: {size}</p>
</div>