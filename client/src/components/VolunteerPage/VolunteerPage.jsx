// react
import React from "react"

// css
import "./VolunteerPage.css"

// components
import SecondaryHeaderImage from "../SecondaryHeaderImage/SecondaryHeaderImage"

// assets
import group from "./group3.png"
import human1 from "./human1.jpg"
import human2 from "./human2.jpg"
import human3 from "./human3.jpg"
import human4 from "./human4.jpg"
import human5 from "./human5.jpg"
import human6 from "./human6.jpg"
import human7 from "./human7.jpg"
import human8 from "./human8.jpg"
import human9 from "./human9.jpg"



const VolunteerPage = () => {
  return (
    <div className="">
      <SecondaryHeaderImage image={group}/>
      <main className="main-body">
        <section className="volunteer-container">
          <h1 className="volunteer-heading">Volunteer</h1>
          <section className="individual-volunteer">
            <h2 className="volunteer-with-animals">
              Individual Volunteering with Dogs and Cats:
            </h2>
            <ul className="volunteer-list">
              <li>No walk-in volunteers are accepted</li>
              <li>
                Volunteer hours need to be reserved in advance by email:
                info@barcshelter.org
              </li>
            </ul>
          </section>
          <section className="individual-volunteer">
            <h2 className="volunteer-with-animals">Dog-walking Hours</h2>
            <ul className="volunteer-list">
              <li>Monday ~ Saturday</li>
              <li>9:30am ~ 12:00pm (noon)</li>
            </ul>
          </section>
          <section className="individual-volunteer">
            <h2 className="volunteer-with-animals">Eligibility</h2>
            <ul className="volunteer-list">
              <li>
                All dog walkers (holding the leash) must be 21 years of age
              </li>
              <li>
                Including anyone under 21 accompanied by a person over the age
                of 21
              </li>
            </ul>
          </section>
          <section className="individual-volunteer">
            <h2 className="volunteer-with-animals">Recommended Apparel</h2>
            <ul className="volunteer-list">
              <li>
                Comfortable clothes and sneakers you don't mind getting dirty
              </li>
              <li>
                Don't bring personal belongings, as we have no storage space
              </li>
            </ul>
          </section>
          <section className="individual-volunteer">
            <h2 className="volunteer-with-animals">Required Guidelines</h2>
            <ul className="volunteer-list">
              <li>
                We require all our volunteers to follow our guidelines listed
                below, and sign in before walking dogs EVERY TIME.
              </li>
            </ul>
          </section>
          <section className="individual-volunteer">
            <ul className="volunteer-list-with-bullets">
              <li> All BARC dogs must be kept on the leash at all times.</li>
              <li>
                Please place your hand through the loop on the leash and keep
                our dogs on a short leash.
              </li>
              <li>
                Keep both hands FREE of CELL PHONES, DRINKS, etc. when walking.
              </li>
              <li>
                Do not let other people, children, or other dogs play with or
                pet our BARC dog.
              </li>
              <li> Never take any BARC dog to a dog run.</li>
              <li>
                Never take anything (bones, food, garbage, etc.) out of our
                dogs’ mouths. We will deal with // it when you bring the dog
                back to the shelter.
              </li>
              <li>
                Do not try to “train” the dogs, as it will only confuse them.
              </li>
              <li>
                Never tie up the BARC dog you are walking or leave them
                unattended for ANY reason.
              </li>
              <li>
                If your dog is ever in a fight, never put your hands in to
                separate the dogs. Grab your dog’s hind legs, have the other
                person grab their dog’s hind legs, and pull them apart.
              </li>
              <li>
                Always take some poop bags with you from near the front door.
                Picking up the poop makes us good neighbors and it is the law.
              </li>
              <li>
                If a dog gets away from you, do not chase it! Squat or lie down
                and call the dog’s name and it should come back to you. If you
                chase them, they think it’s a game and will keep running away.
              </li>
              <li>
                Take the dog for a 20-30 minute walk, or as directed. If your
                dog seems tired, come back
              </li>
              <li>
                When your walk is finished, please bring your dog back to the
                kennel area for a staff member to put the dog away. Never go
                inside the kennel without a staff member.
              </li>
              <li>
                If no one is in the kennel, ring the bell and someone will come
                to assist you.
              </li>
              <li>
                Don't assume because the dog is small that it likes to be picked
                up.
              </li>
            </ul>
          </section>
          <section >
            <div className="warning-message">
              FAILURE TO COMPLY WITH THESE RULES MAY LEAD TO YOUR VOLUNTEER
              STATUS BEING REVOKED.
            </div>
          </section>
          <br/>
          <section className="individual-volunteer">
            <div className="keep-in-mind">
              *Please keep in mind that we can only give out easy and friendly
              dogs out for walks. If you come by to help with a lot of people,
              you will be asked to share dogs, as usually, we might not have
              dogs that get along with each other. We do not reserve dogs for
              anybody, dog-walking is first come - first serve.
            </div>
          </section>
          <section className="individual-volunteer">
            <h2 className="court-school-style">
              Court/school appointed volunteer work:
            </h2>
            <ul className="volunteer-list">
              <li>
                Any volunteering work that needs to have a signed letter or any
                community service for courts/school has to submit a request with
                court/school letterhead that our board of directors has to
                approve before we start with your volunteer projects.
              </li>
            </ul>
            <h1>
              (BARC shelter reserves the right to refuse any volunteers for the
              safety and comfort of our animals)
            </h1>
          </section>
          <section className="individual-volunteer">
            <h2 className="court-school-style">Cat Loft Volunteering</h2>
            <ul className="volunteer-list">
              <li>ALL CAT LOFT VOLUNTEERS MUST BE 21 YEARS OF AGE</li>
              <li>
                BARC shelter is no longer accepting walk-in volunteers, we get
                so many helpers a day. All volunteer hours have to be reserved
                in advance by emailing us and we will let you know if there is
                availablility, so everyone gets a chance to volunteer.
              </li>
            </ul>
          </section>
          <section className="images-of-people">
            <img src={human1} alt="Person holding dog" className="human1" />
            <img src={human2} alt="Person holding dog" className="human2" />
            <img src={human3} alt="Person holding dog" className="human3" />
            <img src={human4} alt="Person holding dog" className="human4" />
            <img src={human5} alt="Person holding dog" className="human5" />
            <img src={human6} alt="Person holding dog" className="human6" />
            <img src={human7} alt="Person holding dog" className="human7" />
            <img src={human8} alt="Person holding dog" className="human8" />
            <img src={human9} alt="Person holding dog" className="human9" />
          </section>
        </section>
      </main>
    </div>
  )
}

export default VolunteerPage
