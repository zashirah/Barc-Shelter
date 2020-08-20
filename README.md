# Barc-Shelter Overview

## Barc-Shelter

Barc Shelter is a website for animals at a shelter to adopt

## Project Description

A collaboraton of UX Designers and Software Engineers. This document is created by Software enginners as a plan to articulate the events taken to produce the product.

https://docs.google.com/document/d/1EfjZDBdApXgTKQf4p8k6Wl1ZhXrEm0sApP52E8Vvcc8/edit

## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need


## Wireframes

https://whimsical.com/Cfsr52QZEz5tbv9zevyL4X

## Overview
 The features included in this website are: create a page, edit page, filter thru the all animal page, a button that leads to the donate page, a button that leads to the volunteer page. After creating all of this and making it functional our goal is to add some extra style to the website. Make it responsive and separate the two styles from (the mobile and desktop)so the viewer can tell when you get on the mobile page only a certain style is working. And then, when you are on the desktop page different styles, would be active.


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Our MVP consist of the home page, all pets page, pet detail, edit pet, and create pet screens.

#### MVP

- Homepage
- Render data on page
- Cat List page
  More Details are:
  Components:
  App.js

ALL

- Layout
- Header
- Footer
- SocialButtons (in Footer)
- AllAnimalsHeaderSection (all but home page)
- SmallButton (yellow button/black text)

ANCILLARY

- MainButton (orange button/white text)

HOME PAGE

- HomePageCards (x4; needs title)
- HomePageLargeSection
- HomePageSmallSection
- HorizontalAnimalPictureSection
- Button (Adopt me!)
- Button (Volunteer Info - vol page wasn't designed by UX)
- Button (Donate Now)

ALL ANIMALS PAGE

- AnimalCards
- Filter
- Sort
- PageNavigation
- (links to create animal page, details page)

DETAILS PAGE (CRUD) - Zach

- Carousel
- InfoSection
- EligibilityInformationSection
- Button (Adopt me!)
- Button (Delete)
- Button (Edit)
- (links to edit page, adopt page)

EDIT PET (CRUD)

- same as detail but with edittable text
- Button (Submit)

CREATE PET (CRUD)

- CreateAnimalForm

#### PostMVP

_These are examples only. Replace with your own Post-MVP features._

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| July 10-12 | Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete |
| July 13    | Project Approval                                   | Incomplete |
| July 13    | Core Application Structure (HTML, CSS, etc.)       | Incomplete |
| July 14    | Pseudocode / actual code                           | Incomplete |
| July 15    | Initial Clickable Model                            | Incomplete |
| July 16    | MVP                                                | Incomplete |
| July 17    | Presentations                                      | Incomplete |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix. Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Adding Form      |    H     |      3hrs      |    3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |    2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |     5hrs      |    5hrs     |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
