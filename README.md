# Fradel and Spies

## Live link : https://assignment-11-b5583.web.app/

## Assignment_Category_04


## 1. User Management

- Allow new users to create accounts using their email and password.
- Enable third-party authentication methods like Google quick sign-up.
- Store user data securely in your database Firebase.
- Provide a secure way for users to log in with their registered credentials.
- Use Firebase to verify email and password combinations.
- User also login by Google

## 2. Private Route

- Learn more button - it is a private route if user not login and click button then go to login page.
- If user login then Learn more button work & open service details page.
- My Profile & User profile Icon - its a private route. Only logged user see this.

## 3. User-Specific Equipment Management
- Logged user can add Equipment.
- Store Equipment in Mongodb based on the user's email.
- Logged-in users can view all sports equipment they have added. This functionality filters and displays items based on the user's email.

## 4. Update & Delete Equipment
- Users can edit and update the details of their added equipment, such as price, description, category, and more. Updates are submitted to the backend for persistence.

## 5. All Sports Equipment
- All equipment show here by add Multiple users
- Users can sort the equipment by price in ascending or descending order using a toggle button with interactive icons.

## 6. Trending Products
- In the home page here display at least 6 product card with a view details button
- For showing 6 data from mongodb use the limit operator.

## 7. Responsive and Interactive UI
- The website uses Tailwind CSS for styling, ensuring a responsive and modern user interface. Features like transitions, grid layouts, and buttons provide a seamless and engaging experience. 
- Integration of libraries <b>react-awesome-reveal</b> & <b>react-Tooltip</b>