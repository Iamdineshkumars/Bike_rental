## problem statement
**Problem Statement**

Your task is to create a React-based admin dashboard for a bike rental service. The dashboard should allow administrators to view and manage bike rentals, including adding new bookings and marking existing bookings as completed. The provided boilerplate includes a basic project structure and component hierarchy.

**Pre-requisites:**

1. `axios` - to make HTTP requests
2. `hooks` - `useState`, `useEffect` - for managing state and side effects in functional components.
3. `react-router-dom` - `Link`, `useNavigate` - Link component for navigation and the useNavigate hook for programmatic navigation
4. `json-server` - to simulate a RESTful API

**Component Structure**

```
src
├── App.css
├── App.js
├── index.css
├── index.js
├── Components
|  ├── Bike.jsx
|  ├── Bikes.jsx
|  ├── Loading.jsx
|  └── Navbar.jsx
├── Pages
|  ├── BikeDetails.jsx
|  ├── Bookings.jsx
|  └── Home.jsx
├── Routes
|  └── AllRoutes.jsx
└── Utils
   └── api.js          ? You can use it for creating api request functions(not necessary)

```

**Pages & Components**

**1. App.js**

- Import the `Navbar.jsx` and `AllRoutes.jsx` components here.

**2. Navbar.jsx**

- This component should have navigation links to the Home page and Bookings page.
- Use the `Link` component to create two navigation links:
    - The `first link` with `to="/"`, labeled as `Bike Rental` which takes users to the home page.
    - Display the title `Bike Rental Admin Dashboard` as a title inside a `<h3>` tag.
    - The `second link` with `to="/bookings"`, labeled as `All Bookings` which directs users to the bookings page.

**3. AllRoutes.jsx**

- Create the following routes:
    
    ```
    /           -  `Home` page
    /bike/:id   -  `BikeDetails` page
    /bookings   -  `Bookings`
    
    ```
    

**4. Home.jsx (Home Page)**

- When the home page loads, make an API request to the `/bikes` endpoint and show only a loading indicator using `Loading.jsx` component while the request is in progress.
- Use the `useState` hook to manage the state.
- Map the retrieved bike data using the map function inside the `div` with the class name `bikes_container`, and render each bike using the `Bike.jsx` component.

https://camo.githubusercontent.com/79a482b34550780fbd81eba117fc398f0cebac1effb992264801d6ef73f9fede/68747470733a2f2f692e696d6775722e636f6d2f584c554b54704e2e706e67

**Fig .1 - Home Page**

**5. Loading.jsx**

- To show a loading indicator while the API request is in progress and add the text `Loading...` within an `<h1>` tag inside a `<div>` with the attribute `data-testid="loading-indicator"`.

https://camo.githubusercontent.com/4c6b6eca8c725e4aa1afa51591875829be9e7754f171556935d3f4257a13d7d5/68747470733a2f2f692e696d6775722e636f6d2f6c7839797952572e706e67

**Fig .2 - Loading Indicator**

**5. Bike.jsx**

- This component will receive a bike information as prop, which is an object containing all the bike information to display.
- A `<div>` element with the class name `bike` is already given show following bike information inside it.
    - Display the bike's image using an `<img>` tag with the `src` attribute set to `image` and an `alt` attribute with the bike's `name` for accessibility.
    - Display the `bike's name` in an `<h2>` tag with the attribute `data-testid="bike_name"`.
    - Display the `bike's hourly rate` in an `<h2>` tag with the attribute `data-testid="bike_hourly-rate"`. The rate should be in the format `{hourlyRate} Rs/hr`.
    - Display the `bike's unique ID` in an `<h3>` tag with the attribute `data-testid="bike_number"`. Label it as `Bike Number: {id}`.
    - Show the `number of available bikes` out of the total bikes in an `<h3>` tag with the attribute `data-testid="bike_available"`. Format it as `Bikes Available: {availableBikes}/{totalBikes}`".
    - Create a `<button>` element with the attribute `data-testid="bike_booking-btn"` and text `Book Now`.
    - Attach an onClick event handler to the button to navigate to the bike details page by using `useNavigate`(`/bike/${id}`).
    - Disable the button if there are no available bikes.

**5. BikeDetails.jsx (Bike Details Page)**

- Use the `useParams` hook to extract the `id parameter` from the `route's URL`, representing the bike to be displayed..
- When the this page loads, make an API request to the `/bikes/{id}` endpoint and show only a loading indicator using `Loading.jsx` component while the request is in progress.
- Display the bike details within a `<div>` element given with the `className="bike"`:
    - Display the bike's image using an `<img>` tag with the `src` attribute set to `image` and an `alt` attribute with the bike's `name` for accessibility.
    - Display the `bike's name` in an `<h2>` tag with the attribute `data-testid="bike_name"`.
    - Display the `bike's hourly rate` in an `<h2>` tag with the attribute `data-testid="bike_hourly-rate"`. The rate should be in the format `{hourlyRate} Rs/hr`.
    - Display the `bike's unique ID` in an `<h3>` tag with the attribute `data-testid="bike_number"`. Label it as `Bike Number: {id}`.
    - Show the `number of available bikes` out of the total bikes in an `<h3>` tag with the attribute `data-testid="bike_available"`. Format it as `Bikes Available: {availableBikes}/{totalBikes}`".

https://camo.githubusercontent.com/2986c37966359bac5ff93dd239caea9e14ea8b93a04ea2969c637eb2d03c1286/68747470733a2f2f692e696d6775722e636f6d2f636d46646441332e706e67

**Fig .3 - Bike Details Page**

- To complete the booking, retrieve the form values and send a `POST` request to the `/bookings` endpoint. Handle the following conditions:
    - If the pickup date and drop-off date are the same, display an alert with the message "`Pickup date and drop-off date are equal`"
    - If the pickup date is later than the drop-off date, display an alert with the message "`Pickup date is later than drop-off date`"
    - If all conditions are met, create a POST request to add the customer's booking. The request should have the following JSON format:
    
    ```
    {
        "name":              ? customer name,
        "phone":             ? phone number,
        "pickup":            ? pickup date & time,
        "dropoff":           ? dropoff date & time,
        "completed":         ? default is false because the ride is not completed,
        "bikeID":            ? id of the bike,
        "totalAmount":       ? the total amount for the time ((pickup-dropoff/(60 * 60 * 1000))*rate/hr)
     }
    ```
    
- If the POST request succeeds, redirect the user to the `Bookings` page.

**5. Bookings.jsx (Bookings Page)**

- Use the useState hook to manage retrieved booking data from the API, and display all the booking data using the given table.
- When the this page loads, make an API request to the `/bookings` endpoint and show only a loading indicator using `Loading.jsx` component while the request is in progress.
- Calculate the `total revenue` by iterating through the bookings array and summing up the totalAmount of each booking. Display it in the format `Total Revenue = {totalRevenue} Rs` inside given `<h2>` tag given with `className="total-revenue"`.
- Basic structure of `table` is already given you just have to populate the values.
- Iterate through the `bookings` array and create table rows for each booking.
    - Create a button inside the `Completed` column for all bookings that allows administrators to change the booking status.
    - Display `Yes` if the booking is completed, and `No` if it's not.
    - On clicking `No` make a `PATCH` request and set booking `completed` status to `true` and also update bike availability by making another `PATCH` request to `/bikes/{id}` endpoint.
- If the admin returns to the home page, update the respective bike availability accordingly.
- To achieve the functionality described, where you need to make requests in a specific order to update booking completion status and bike availability, you can follow these steps:
    
    ```
    PATCH Request -    ?  Update Booking Completion Status (/bookings/{id}):
    GET Request -      ?  Get Single Bike Data (/bike/{id}): to get availability count
    PATCH Request -    ?  Update Availability Count of Bike (/bike/{id}):
    GET   -            ?  Fetch Updated Bookings  `/bookings`.
    
    ```
    

https://camo.githubusercontent.com/1e58abbe69e80116199ad503264524efa4a2b59d397a52f238cde120c4a28995/68747470733a2f2f692e696d6775722e636f6d2f4b5450627233392e706e67

**Fig .4 - Bookings Page**

https://camo.githubusercontent.com/0ca47b1ce0cf2ff3d5b0248e481bc2b0b1d2e0e1126d848b2f9a0e9759ee689e/68747470733a2f2f692e696d6775722e636f6d2f56624f747869792e706e67

**Fig .5 - After marking a booking ride completed**




## Description:
Admin can Add bike details and user can book the bike for rental
functional requirements:
1) book bike
2) Dashboard
3) Time for cost


