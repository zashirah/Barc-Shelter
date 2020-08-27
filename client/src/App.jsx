import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import Home from "./screens/Home/Home";
import AllPets from "./screens/AllPets/AllPets";
// import CreatePet from "./screens/CreatePet/CreatePet";
// import EditPet from "./screens/EditPet/EditPet";
import PetDetail from "./screens/PetDetail/PetDetail";
import AdoptionProcess from "./screens/AdoptionProcess/AdoptionProcess"
import Donate from "./screens/Donation/Donate"
import Volunteer from "./screens/Volunteer/Volunteer"
import Applicant from "./screens/Applicant/Applicant";
import Applicants from "./screens/Applicants/Applicants";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pets/:type" component={AllPets} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/volunteer" component={Volunteer} />
        {/* <Route path="/add-pet" component={CreatePet} /> */}
        {/* <Route exact path="/pets/:id/edit" component={EditPet} /> */}
        <Route exact path="/pet/:id" component={PetDetail} />
        <Route exact path="/adopt" component={AdoptionProcess} />
        <Route exact path="/applicants" component={Applicants} />
        <Route exact path="/applicants/:applicantId" component={Applicants} />
      </Switch>
    </div>
  );
}

export default App
