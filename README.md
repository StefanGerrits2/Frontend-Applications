# The Past of Toys

![home](https://user-images.githubusercontent.com/45566396/67979685-1484a800-fc1d-11e9-932d-c96fbc4388b6.png)
![arrow3](https://user-images.githubusercontent.com/45566396/67989134-2f154c00-fc32-11e9-83f2-199084241e5e.png)
![Middel 2](https://user-images.githubusercontent.com/45566396/67988560-ab0e9480-fc30-11e9-9d2c-68728e61d803.png)

## Description

This is a web application I made for a school project to visualize data for NMVW wereldculturen. The data I chose to visualize is all the data about toys. There are different toy categories you can see. Each toy will has it's own information which will be shown in a list. I made this application with a javascript framework called Svelte.

##### Target audience:

I made this application for children. This way they can compare the toys from the past with the toys they have right now. This will teach them a lot about history in a fun way. They can learn about which materials they used to make toys, which culture it's part of and how toys developed over time in general.

## Features

* Selecting a toy category
* Being able to view all of the toys from that type
* Routing to different toys categories
* Dynamically rendering all data from an API
* Responsive website

## Installation

### 1. Clone this repository to your computer
Run this command in your terminal:

`git clone https://github.com/StefanGerrits2/Frontend-Applications`
### 2. Navigate into the root of the folder
Run this command in your terminal:

`cd "Frontend Applications"`
### 3. Install all depedencies
Run this command in your terminal:

`npm install`
### 4. Run the server
Run this command in your terminal:

`npm run dev`
NOTE: Make sure you are still located in the root of the `Frontend Applications` folder when running this command.

### 5. Viewing the website
Open your browser and go to:

`localhost:5000`

## API

The data I use is provided by an API. The API contains 700.000 objects. I have written SPARQL queries to get the objects that I want. 

I collect all toys from specific categories:

* Dolls
* Toy animals
* Board games
* Toy cars

These categories contain the following data that I get from the API:

* Title
* Culture
* Time
* Type
* Location
* Size
* Material

<details>
<summary>Click here to see a query I have written in SPARQL to get all dolls from the API</summary>
<br>

    PREFIX dc: <http://purl.org/dc/elements/1.1/> 
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX edm: <http://www.europeana.eu/schemas/edm/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    SELECT 
        ?obj
        ?title
        ?type 
        (SAMPLE(?img) as ?img) 
        ?originLabel
        ?cultureLabel
        ?time
        ?size
        ?materialLabel

    WHERE {
    ?obj edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster1832> .
    ?obj edm:object <https://hdl.handle.net/20.500.11840/termmaster12646> .
    ?obj dc:title ?title .
    ?obj dc:type ?type .
    ?obj edm:isShownBy ?img .
    ?obj dct:spatial ?origin .
    ?obj dct:extent ?size .
    ?origin skos:prefLabel ?originLabel .
    ?obj dct:medium ?material .
    ?material skos:prefLabel ?materialLabel .
    
    OPTIONAL { ?obj dct:created ?time } .
    OPTIONAL { ?obj dc:subject ?culture } .
    OPTIONAL { ?culture skos:prefLabel ?cultureLabel } .
    
    FILTER langMatches(lang(?title), "ned")
        
    } LIMIT 20

</details>

## Sources

* [Svelte](https://svelte.dev/) - Documentation about Svelte.
* [baseScript](https://github.com/cmda-tt/course-19-20/blob/master/examples/sparql/baseScript.js) - To fetch data from API.
* [Freefrontend](https://freefrontend.com/) - To get ideas for my styling.

## Credits

* [Roy](https://github.com/RooyyDoe) - He helped me a couple times with my code, for example typos in my query or fixing the relative path to a local image. We also deployed our application together.

* [Sarkis](https://github.com/sarkis1997) - He showed me how he imported a file with a query.

## Check it out!

My application is live, [click here](https://frontend-applications-toys.netlify.com/) to check it out!

## License

[MIT](https://github.com/StefanGerrits2/Frontend-Applications/blob/master/LICENSE.txt) © Stefan Gerrits