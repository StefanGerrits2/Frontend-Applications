<script>
    import { Link } from "svelte-routing"
    export let isDefault
</script>

<style>
    .default-nav-bar {
        margin-bottom: 1em;
        background-color: white
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
        padding: 1em 1em;
        background-color: white;
        color: #1A2C4C;
        margin: 0em;
        text-transform: uppercase;
        font-weight: bold;
    }
   .default-nav-bar ul li p:hover {
        background-color: #1A2C4C;
        color: white;
        transition: .2s all ease-out;
   }
    @media(max-width: 37rem) {
        .default-nav-bar ul {
            display: block;
            border-bottom: none;
        }
        .default-nav-bar ul p {
            padding: .5em 1em;
        }
        .default-nav-bar ul li {
            border-bottom: 1px solid #1A2C4C;
        }
    }
    .tile-nav__container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        list-style-type: none;
        margin: 0em auto;
    }
    .tile-nav__container li {
        width: 20em;
        height: 20em;
        background-color: white;
        color: #002447;
        margin-right: 2em;
        text-align: center;
        border-radius: 15px;
        margin-bottom: 2em;
    }
    .tile-nav__container li h1 {
        padding-top: 1em;
    }
    .tile-nav-bar li:hover {
        background-color: #002447;
        color: white;
    }
    .doll-img {
        width: 40%;
        margin-top: 1em;
    }
    .animal-img {
        width: 65%;
        margin-top: 1.5em;
    }
    .board-game-img {
        width: 50%;
        margin-top: 1em;
    }
    .cars-img {
        width: 60%;
        margin-top: 2em;
    }
</style>

<nav class={isDefault ? "default-nav-bar" : "tile-nav-bar"}>
    <ul class={isDefault ? "default-nav__container" : "tile-nav__container"}>
        {#if isDefault}
            <Link to="/"><li><p>Home</p></li></Link>
            <Link to="/dolls"><li><p>Poppen</p></li></Link>
            <Link to="/animals"><li><p>Speelgoeddieren</p></li></Link>
            <Link to="/board-games"><li><p>Bordspellen</p></li></Link>
            <Link to="/cars"><li><p>Speelgoedauto's</p></li></Link>
        {:else}
            <Link to="/dolls"><li><h1>Poppen</h1><img class="doll-img" src="/images/doll.png" alt=""></li></Link>
            <Link to="/animals"><li><h1>Speelgoeddieren</h1><img class="animal-img" src="/images/animal.png" alt=""></li></Link>
            <Link to="/board-games"><li><h1>Bordspellen</h1><img class="board-game-img" src="/images/board-game.png" alt=""></li></Link>
            <Link to="/cars"><li><h1>Speelgoedauto's</h1><img class="cars-img" src="/images/car.png" alt=""></li></Link>
        {/if}
    </ul>
</nav>