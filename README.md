# Fradel and Spies
- Restaurant Management Website.

## Live link : https://assignment-11-b5583.web.app/

## Assignment_Category_04


## 1. User Management

- Allow new users to create accounts using their email and password.
- Enable third-party authentication methods like Google quick sign-up.
- Store user data securely in your database Firebase.
- Provide a secure way for users to log in with their registered credentials.
- User also login by Google

## 2. Private Route

- Purchase button - it is a private route if user not login and click button then go to login page.
- If user login then Purchase button work & open Purchase page.
- User profile Icon - its a private route. Only logged user see this.
- OnClick in profile Icon show MyFood, Add Food & My Orders there are also private Route

## 3. User-Specific Purchase Management
- Logged user can Purchase foods.
- Store Purchase foods in Mongodb based on the user's email.
- Logged-in users can view Purchase foods they have added. This functionality filters and displays items based on the user's email.

## 4. Update & Delete Equipment
- Users can edit and update the details of their added Foods

## 5. All Foods
- All Foods show here by add Multiple users
- Users can search foods by Foods name.

## 6. Trending Products
- In the home page here show 6 top-selling food items depending on the number of purchases of a food item.
- For showing 6 data from mongodb use the limit operator.

## 7. Responsive and Interactive UI
- The website uses Tailwind CSS for styling, ensuring a responsive and modern user interface. Features like transitions, grid layouts, and buttons provide a seamless and engaging experience. 

## 7. Integration of libraries & npm Packages
- axios
- JWT
- moment.js
- Yet-another-react-lightbox
- Tailwindcss
- react
- react-router
- react-toastify
