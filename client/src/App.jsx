import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import Home from "./screens/Home/Home"
import Donate from "./screens/Donation/Donate"
import Volunteer from "./screens/Volunteer/Volunteer"
import AllPets from "./screens/AllPets/AllPets"
import CreatePet from "./screens/CreatePet/CreatePet"
import EditPet from "./screens/EditPet/EditPet"
import PetDetail from "./screens/PetDetail/PetDetail"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pets" component={AllPets} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/volunteer" component={Volunteer} />
        <Route path="/add-pet" component={CreatePet} />
        <Route exact path="/pets/:id/edit" component={EditPet} />
        <Route exact path="/pets/:id" component={PetDetail} />
      </Switch>
    </div>
  )
}

export default App
