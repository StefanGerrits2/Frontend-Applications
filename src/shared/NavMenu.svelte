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

    .home-nav-bar {
        display: grid;
    }
    .home-nav-bar ul {
        display: flex;
        width: 1em;
        list-style-type: none;
    }

</style>

<nav class={isDefault ? "default-nav-bar" : "home-nav-bar"}>
    <ul>
        {#if isDefault}
            <li><Link class="test" to="/">Home</Link></li>
        {/if}
            <li><Link to="/poppen">Poppen</Link></li>
            <li><Link to="/wapens">Speelgoedwapens</Link></li>
            <li><Link to="/bordspellen">Bordspellen</Link></li>
            <li><Link to="/autos">Speelgoedauto's</Link></li>
    </ul>
</nav>
