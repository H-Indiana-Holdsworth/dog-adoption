# Epic Pet Plan

## App.js

- [ ] `<Route exact path=/dogs component={Dogs}`
- [ ] `<Route exact path=/dogs/:id component={Dog}`

## Views - have state

### Dogs - A page that lists all of the DogCards

- [ ] use useEffect to fetchDogs the list of DogCards
- [ ] use useState to define the dogs variable
- [ ] `return(<DogCards />)`

### DogCard - A page that renders info about a single dog

- [ ] use useEffect to fetchDogById
- [ ] use useState to define DogCard variable
- [ ] `return(<DogCard />)`

## Components - have no state

### DogList - Renders all of the dog cards

- [ ] use a .map to render the dog cards

### DogDetail - Renders dog info

- [ ] renders dog info

## Services

### dogs.js

- [ ] make api call using fetchDogs to get all DogCards
- [ ] make api call using fetchDogById to get a specific dog
