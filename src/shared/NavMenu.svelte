<script>
    import NavItem from './NavItem.svelte'
    import { Link } from "svelte-routing";
    export let isDefault;
</script>

<style>
    .default-nav-bar {
        margin-bottom: 1em;
    }
	.default-nav-bar ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
    }
    .default-nav-bar ul span {
        color: white;
        text-decoration: none;
        padding: .5em 1em;
        background-color: #f1f1f1;
        color: #000;
        margin: 0em;
    }
    .default-nav-bar ul span:hover {
        color: #f1f1f1;
        background-color: #555;
    }

    .home-nav-bar ul {
        display: flex;
        list-style-type: none;
        flex-wrap: wrap;
        flex-direction: row;
    }
    .home-nav-bar ul span {
        color: white;
        text-decoration: none;
        padding: .5em 1em;
        background-color: rgb(59, 41, 106);
        color: white;
        margin: 0em;
    }

    .home-nav-bar ul span:hover {
        background-color: rgb(128, 106, 255);
    }

</style>

<nav class={isDefault ? "default-nav-bar" : "home-nav-bar"}>
    <ul>
        {#if isDefault}
            <li><Link class="test" to="/"><span>Home</span></Link></li>
        {/if}
            <li><Link to="/poppen"><span>Poppen</span></Link></li>
            <li><Link to="/wapens"><span>Speelgoedwapens</span></Link></li>
            <li><Link to="/bordspellen"><span>Bordspellen</span></Link></li>
            <li><Link to="/autos"><span>Speelgoedauto</span></Link></li>
    </ul>
</nav>
