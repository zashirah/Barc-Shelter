import React from "react"
import "./DonatePage.css"
import hugingDog from "./huging-dog.jpg"
import amazonWishList from "./bitmap.jpg"
import donateNow from "./donate-now.jpg"
import donateMethod from "./payment-type.jpg"
import resWalk from "./reswalk.jpg"
import chairDog from "./chair-dog.jpg"
import hungryCat from "./hungry-cat.jpg"

const DonatePage = () => {
  return (
    <div>
      <div className="first-diva">
      {/* <img src={hugingDog} alt="Dog" className="huging-dog" /> */}
      <div className="title-div">
      <h1 className="donate-header-text">
        <i>BARC</i> Shelter
      </h1>
      </div>
      </div>
      <section className="text-container">
        <h1 className="donation-header">Donation</h1>
        <h2 className="tax-deductible">*All donations are tax-deductible</h2>
        <h2 className="donation-pays">Your donation pays for: </h2>
        <ul>
          <li>• Animal care - We keep the animals clean, healthy, and safe.</li>
          <li>• Nutrition - We provide quality food.</li>
          <li>• Health – We provide vaccinations and inoculations.</li>
          <li>
            • Spay/Neuter – We spay and neuter all of the animals that come into
            our shelter.
          </li>
          <li>
            • Staff – We hire experienced, devoted staff to care for the
            animals.
          </li>
          <li>
            • Facilities maintenance – Your donation helps us to provide
            electricity, heat, and upkeep of our shelter.
          </li>
        </ul>
      </section>
      <section className="donation-method">
        <h1 className="donation-method-header">Donation Methods</h1>
        <h2 className="amazon-wishlist">Amazon Wishlist</h2>
        <img src={amazonWishList} alt="Dog" className="amazon-wishlist-image" />
        <ul>
          <li>• All donations are tax-deductible</li>
          <li>• Cleaning supplies, bedding material, pet beds </li>
          <li>• Health – We provide vaccinations and inoculations.</li>
          <li>• Toys for both Cats/Dogs</li>
          <li>• Food for both Cats/Dogs</li>
        </ul>
        <h2 className="amazon-wishlist">Network for Good</h2>
        <img src={donateNow} alt="Dog" className="amazon-wishlist-image" />
        <ul>
          <li>• One-time Donation</li>
          <li>• Monthly Sponsor </li>
          <li>• $10 USD minimum</li>
        </ul>
        <h2 className="amazon-wishlist">PayPal</h2>
        <img src={donateMethod} alt="Dog" className="amazon-wishlist-image" />
        <ul>
          <li>• One-time Donation</li>
          <li>• No minimum amount of donatio</li>
        </ul>
        <h2 className="amazon-wishlist">Walk Applications</h2>
        <img src={resWalk} alt="Dog" className="amazon-wishlist-image" />
        <ul>
          <li>• Download mobile apps to raise money</li>
          <li>• Create your profile</li>
          <li>• Find BARC Shelter Brooklyn,NY </li>
          <li>• START WALKING!</li>
        </ul>
      </section>
      <section className="mail-info">
        <h2>
          If you prefer to donate by mail, please make checks payable to BARC
          Shelter and send to: BARC Shelter 86 North 1st Street Brooklyn, NY
          11249
        </h2>
      </section>
      <section className="pic-info">
        <img src={chairDog} alt="Dog" className="chair-dog" />
        <img src={hungryCat} alt="Cat" className="hungry-cat" />
      </section>
    </div>
  )
}

export default DonatePage
