# The past of toys

## Description

![image](https://user-images.githubusercontent.com/45566396/67085227-bbd5f980-f19e-11e9-90d9-f1f35716f07d.png)

This is an app to visualize data for NMVW wereldculturen. The data I chose to visualize is all the data about toys. They will be able to see which toys they had in the past and how they looked. They will be asked which toys they have right now so they can compare them with the past. On the specific toy page, they can see relates toys which are made of the same material. They will be able to see:

* The image
* The title
* Where it came from
* Material

Optional:

* A description
* The date
 * A term for a period
 * The date in numbers

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

`npm run start`
NOTE: Make sure you are still located in the root of the `Frontend Applications` folder when running this command.

### 5. Viewing the website
Open your browser and go to:

`localhost:....`

You can change the port on the second code line in the server.js file. When you change this port, make sure it matches with the port after localhost:

## API

The data I use is provided by an API. The API contains 700.000 objects. I wrote queries to get the objects that I want. 

I collect all toys which contains the following data that I want:

* Title
* Type
* Image
* Location
* Description
* Culture

## License

[MIT](https://github.com/StefanGerrits2/Frontend-Applications/blob/master/LICENSE.txt) © Stefan Gerrits