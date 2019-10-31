<script>
    export let title;
    export let isDetailPage;
</script>

<style>
    .home-page-title {
        color: #002447;
        margin-left: 1.5em;
    }
    .toy-page-title {
        color: #002447;
        margin-left: .55em;
    }
</style>

<h2 class={isDetailPage ? "toy-page-title" : "home-page-title"}>{title}</h2>