<script>
    export let title
    export let image
    export let culture
</script>

<style>
	div {
		border: 1px solid black;
		padding: 1em;
	}
	img {
		width: 10em;
	}
</style>

<div>
    <h3>Titel: {title}</h3>
    <p>Foto: <img src="{image}" alt=""></p>
    <p>Cultuur: {culture}</p>
</div>