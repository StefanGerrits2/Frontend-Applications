# The past of toys

![image](https://user-images.githubusercontent.com/45566396/67085227-bbd5f980-f19e-11e9-90d9-f1f35716f07d.png)

## Description

This is an app to visualize data for NMVW wereldculturen. The data I chose to visualize is all the data about toys. They will be able to see which toys they had in the past and how they looked. They will be asked which toys they have right now so they can compare them with the past. On the specific toy page, they can see relates toys which are made of the same material. 

## Features

* Selecting a toy category
* Being able to view all of the toys from that type
* Routing in navigation to the different category
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

The data I use is provided by an API. The API contains 700.000 objects. I wrote queries to get the objects that I want. 

I collect all toys which contains from a specific type the following data that I want:

* Title
* Culture
* Time
* Type
* Location
* Size
* Material



## Sources

* [Svelte](https://svelte.dev/) - Documentation about Svelte.
* [baseScript](https://github.com/cmda-tt/course-19-20/blob/master/examples/sparql/baseScript.js) - To fetch data from API.
* [Freefrontend](https://freefrontend.com/) - To get ideas for my styling.

## Credits

* [Roy](https://github.com/RooyyDoe) - He helped me a couple times with my code, for example typos in my query or fixing the relative path to a local image. We also deployed our application together.

* [Sarkis](https://github.com/sarkis1997) - He showed me how he imported query files.

## Check it out!

My application is live, [click here](https://frontend-applications-toys.netlify.com/) to check it out!

## License

[MIT](https://github.com/StefanGerrits2/Frontend-Applications/blob/master/LICENSE.txt) © Stefan Gerrits