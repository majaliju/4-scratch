**Formal Requirements**
For this project, you must:

- [x] Use a Rails API backend with a React frontend.
- [x] Have at least three models on the backend, that include:
  - [x] at least one one-to-many relationship </br>
  *one GENRE can have many ARTISTS* </br>
  - [x] at least one many-to-many relationship</br>
 *many ARISTS can have many VENUES, through CONCERTS*
 *many VENUES can have many ARTISTS, through CONCERTS*
  - [ ] full CRUD actions for at least one resource</br>
  *creating, editing, deleting a post that you make*</br>
  *you can't delete others reviews but you can create/delete/update your own, matching your own userID*
- [x] Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
- [x] Implement authentication/authorization, including password protection. A user should be able to log in to the site with a secure password and stay logged in via user ID in the session hash.

// TODO
**WHAT IS THE SITE?**
A virtual marketplace like CraigsList but for concerts: where you can leave posts either announcing tickets for sale, or requesting tickets for a given event. 
MVP: As a user, I can:
  - [ ] Log into the site
  - [ ] View 
    - [ ] upcoming events on the front page
    - [ ] a list of artists and their upcoming events
    - [ ] a list of venues and their upcoming events
    - [ ] a list of upcoming concerts, sorted by proximity of date
    - [ ] saved posts on the FrontPage
  - [ ] create a post for a concert
  - [ ] edit or delete my own posts
STRETCH: As a user, I can:
  - [ ] View a map of concerts near-by, and sorted by a date slider
  - [ ] Search feature to find artists or venues

## VIA CHARLOTTE NEFF
- [x] Use a Rails API backend with a React frontend.
  - [x] Follow best practices for both front and back end
  - [x] Proper RESTful routing
  - [x] Do not rely on redirects and reloads to refresh data
  - [x] No document.reload or window.reload in your application
- [x] Have at least three models on the backend, that include:
  - [x] at least one many-to-many relationship
    - [x] You need a joins table with two foreign keys
    - [ ] You will need two has many/belongs to relationships to implement
    - [ ] Implement many to many by writing two has many through relationships
    - [x] YOU MUST DISPLAY AT LEAST ONE SIDE OF THIS RELATIONSHIP IN YOUR APPLICATION AND SHOW IT WORKS PROPERLY, other half can be evaluated in console
- [ ] full CRUD actions for at least one resource
  - [ ] A ‘like’ functionality will not count for an update, you must use a form that is pre-filled with existing values for the object. On submission of update form, the object updates appropriately.
  - [ ] Validations and error messages also expected to be present
- [x] Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
  - [x] RESTful routing where applicable
- [x] Implement authentication/authorization, including password protection. A user should be able to log in to the site with a secure password and stay logged in via user ID in the session hash.
  - [x] Ensure you are able to walk through and explain the authentication process
  - [ ] Ensure that one user is unable to edit or delete a resource created by another user. Only if the logged in user is the creator should they have this ability.