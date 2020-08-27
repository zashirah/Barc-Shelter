import React from "react";
//import { IndexLink, Link } from 'react-router';

import "./SecondaryHeaderImage.css";

const SecondaryHeaderImage = ({ image }) => {
  return (
    <div className="secondary-header-image-div">
      <img
        className="secondary-header-image"
        src={image}
        alt="Header Image of Pet(s)"
      />
      <h1 className="secondary-header-image-title"><i>Barc</i> Shelter</h1>
    </div>
    //    <div>
    //      <IndexLink to="/" activeClassName="active">Home</IndexLink>
    //     > {this.props.params.repo}</p>

    //     <button onClick={this.selectMode.bind(this, 'commits')}>Show Commits</button>
    //     <button onClick={this.selectMode.bind(this, 'forks')}>Show Forks</button>
    //     <button onClick={this.selectMode.bind(this, 'pulls')}>Show Pulls</button>
    //     {content}
    // </div>);

    //and then add this to following pages needed
    //   render() {
    //     return (<div>
    //
    //         <IndexLink to="/" activeClassName="active">Home</IndexLink>
    //         > {this.props.params.user}</p>
    //         <ul>
    //         {this.state.events.map((event, index) => {
    //             const eventType = event.type;
    //             const repoName = event.repo.name;
    //             const creationDate = event.created_at;

    //             return (<li key={index}><strong>{repoName}</strong>: {eventType}
    //                 at {creationDate}.
    //             </li>);
    //         })}
    //         </ul>
    //     </div>);
    // }
  );
};

export default SecondaryHeaderImage;
