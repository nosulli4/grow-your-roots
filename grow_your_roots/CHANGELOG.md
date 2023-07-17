# Changelog
All noteable changes to the project are noted in this file

# [Unreleased]

# [0.4.0] 12-10-2022
# Added
- 'Forgot Password' pipeline from login page
- User profile page off of the user page
- Edit page for the profile details
- Edit page for plant details
- Protected routes to all pages added off the user page
- Blog page where users can write comments and see what other users wrote
- Blog comments automatically track what user made the comment

# Changed
- Input form on users page allows users to upload an image of their personal plant
- Input form on users page only requires user to submit nickname, plant type,
  and image of their plant. The other attributes related to the plant get
  autofilled into the database based off what type of plant it is.

# Removed

# Fixed
- Plant_owned attribute in the UserPlants class of the database
  now correctly references owner of the plant
- Plant_id attribute in the UserPlants class of the database
  now correctly references a plant type that is stored in the Plant class



# [0.3.0] 11-09-2022
# Added
- Log in and registration functionality.
- Accompanying authentication to determine if a user exists or not.
- ProtectedRoutes to the user page so that a user cannot access this page until they are logged in.
- Log out functionality from the user page and the home page when the user is logged in.
- Light setting option to User's plant list input form
- Save plant owner functionality so plant owners are saved when they add a new plant.

# Changed
- Changed the navigation buttons on the user page to navigate to the home page and allow the user to log out.
- Changed the navigation buttons on the home page only if the user is already logged in.

# Removed

# Fixed
- Navigation between home and user pages after the user logs in was not working because user was losing authentication every time they navigated.
- Added a work around by re-authenticating the user if they are navigating betweeen pages after they are logged in.

# [0.2.0] 10-26-2022
# Added
- The newest release includes data being pulled in from a back4app database rather than a local file.
- Data is also being written to the database based on user input.
- React routes are being used to correctly adjust the url based on what page the user is on.
- React links are used to navigate between pages.
- The user can dynamically add and delete plants on the user page.

# Changed
- The plant data is no longer being stored in a local JSON file.
- html <a> tags were replaced with React links to navigate between pages.

# Removed
- The plant data in the JSON file has been removed from the project.
- The quick add functionality has been removed from the home page since the user can add plants on the user page.
