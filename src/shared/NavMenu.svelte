<script>
    import NavItem from './NavItem.svelte'
    import { Link } from "svelte-routing";
</script>

<style>
	ul {
  		list-style-type: none;
	}
</style>

<nav>
    <ul>
        <Link to="/">Home</Link>
        <Link to="/poppen">Poppen</Link>
        <Link to="/wapens">Wapens</Link>
        <Link to="/bordspellen">Bordspellen</Link>
        <Link to="/autos">Auto's</Link>
    </ul>
</nav>