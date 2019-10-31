<script>
    export let title, image, culture, time, type, origin, size, material;
</script>

<style>
    /* I used some CSS code for my cards found here https://codepen.io/mcraiganthony/pen/NxGxqm */
    *,
    *::before,
    *::after { 
        box-sizing: border-box;
    }
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
    }
    .btn {
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 1rem;
        color: darkgrey;
        padding: 0.5rem;
    }
    .btn:hover {
        cursor: pointer;
        color: white;
        background-color: darkgrey;
    }
    .cards__item {
        display: flex;
        padding: 1rem;
        width: 100%;
    }
    @media(min-width: 40rem) {
        .cards__item {
            width: 50%;   
        }
    }
    @media(min-width: 56rem) {
        .cards__item {
            width: 25%;
        }
    }
    .card {
        background-color: white;
        border-radius: 0.4em;
        box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-width: 28em;
    }
    .card__content {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        padding: 1rem;
    }
    .card__image {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        filter: contrast(70%);
        filter: saturate(180%);
        overflow: hidden;
        position: relative;
        transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);
        height: 15em;
        width: auto;
        object-fit: scale-down;
    }
    .card__image::before {
        content: "";
        display: block;
        padding-top: 56.25%; 
    }
    .card__title {
        color: darkgrey;
        font-size: 1em;
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-top: -1em;
    }
    .card__text {
        flex: 1 1 auto;
        font-size: 0.875rem;
        line-height: 1.5;
        margin-bottom: 1.25rem;
    }
    .uppercase:first-letter {
        text-transform: uppercase;
        margin-left: .25em;
    }
    .material__container {
        display: flex;
    }
</style>

<li class="cards__item">
    <div class="card">
        <img class="card__image" src={image} alt="">
        <div class="card__content">
            <div class="card__title"><h3>{title}</h3></div>
            <div class="card__text">
                <p>Cultuur: {culture}</p>
                <p>Jaar: {time}</p>
                <p>Type: {type}</p>
                <p>Herkomst: {origin}</p>
                <p>Grootte: {size}</p>
                <div class="material__container"><p class="material__title">Materiaal: </p><p class="uppercase">{material}</p></div>
            </div>
            <button class="btn">Lees meer!</button>
        </div>
    </div>
</li> 