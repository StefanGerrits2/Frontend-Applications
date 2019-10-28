<script>
    import NavItem from './NavItem.svelte'
    import { Link } from "svelte-routing";
    export let isDefault;
</script>

<style>
    .default-nav-bar {
        margin-bottom: 1em;
        background-color: #f1f1f1;
    }
	.default-nav-bar ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        margin-left: -1em;
    }
    .default-nav-bar ul p {
        color: white;
        text-decoration: none;
        padding: .5em 1em;
        background-color: #f1f1f1;
        color: #000;
        margin: 0em;
    }
    .default-nav-bar ul p:hover {
        color: #f1f1f1;
        background-color: #555;
    }
    .tile-nav__container {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        list-style-type: none;
        margin-left: -2.5em;
    }
    .tile-nav__container li {
        width: 20em;
        height: 20em;
        background-color: rgb(59, 41, 106);
        color: white;
        margin-right: 2em;
        border-radius: 5px;
        text-align: center;
    }
    .tile-nav__container li p {
        padding-top: 2em;
    }

    .tile-nav-bar li:hover {
        background-color: rgb(128, 106, 255);
    }
</style>

<nav class={isDefault ? "default-nav-bar" : "tile-nav-bar"}>
    <ul class={isDefault ? "default-nav__container" : "tile-nav__container"}>
        {#if isDefault}
            <Link class="test" to="/"><li><p>Home</p></li></Link>
        {/if}
            <Link to="/poppen"><li><p>Poppen</p></li></Link>
            <Link to="/wapens"><li><p>Speelgoedwapens</p></li></Link>
            <Link to="/bordspellen"><li><p>Bordspellen</p></li></Link>
            <Link to="/autos"><li><p>Speelgoedauto's</p></li></Link>
    </ul>
</nav>
