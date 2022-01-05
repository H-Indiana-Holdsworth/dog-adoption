# Epic Pet Plan

## App.js

- [x] `<Route exact path=/home component={Dogs}`
- [x] `<Route exact path=/dogs/:id component={Dog}`

## Views - have state

### Dogs - A page that lists all of the DogCards

- [x] use useEffect to fetchDogs the list of DogCards
- [x] use useState to define the dogs variable
- [x] `return(<DogCards />)`

### DogCard - A page that renders info about a single dog

- [x] use useEffect to fetchDogById
- [x] use useState to define DogCard variable
- [x] `return(<DogDetail />)`

## Components - have no state

### DogList - Renders all of the dog cards

- [x] use a .map to render the dog cards

### DogDetail - Renders dog info

- [x] renders dog info

## Services

### dogs.js

- [x] make api call using fetchDogs to get all DogCards
- [x] make api call using fetchDogById to get a specific dog
