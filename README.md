
**Certainly! Here's a revised README file explanation for your project:**

**Donation Management Application**
**Overview**
-The Donation Management Application is a web-based platform that allows users to browse and manage donations easily. It offers several key features to enhance user experience and efficient data handling.

**Key Features**
**Donation Selection and Management:**
-Users can effortlessly browse and select donation cards from a list of available options.
-The application provides an intuitive user interface for efficiently managing selected donations.

**Error Notifications with SweetAlert:**
-Utilizes the SweetAlert library to provide user-friendly error notifications.
-Notifications are triggered when users attempt to:
-Select a donation card that is already in the cart.
-Exceed the limit of one card for donation selection.
-Enhances the overall user experience by providing informative feedback.

**Efficient Data Loading with useEffect:**
-Utilizes the useEffect hook to asynchronously load donation data from a JSON file.
-Ensures that users always have access to up-to-date donation information.
-Leveraging React's efficient rendering and updating mechanism for optimal performance.

**1.Import useState:**

-Import the useState hook from React at the top of the component file:
   import React, { useState } from 'react';

**2.Define State Variables:**

-Define state variables within the functional component for the pieces of data that need to be managed. For example, to track selected donations, remaining donations, and total donations, you can define them as follows:

const allData = useLoaderData();
const allDataNum = allData.length;
const favoritieDonations = JSON.parse(localStorage.getItem('favorities'));
const selectedDataNum = favoritieDonations.length;
const percentage = (selectedDataNum / allDataNum) * 100;
const pieChartData = [
  { name: 'Total donation', value: percentage },
  { name: 'Your donation', value: 100 - percentage },
];

 **3.Update State:**

Use the state updater functions (e.g., setDonations, setCard) to update the state variables when users interact with the application, such as selecting or deselecting donations

**4.Render State Data:**

In JSX, display the state data by enclosing it within curly braces {}. For example, to display the selected donations and total donations:
<p>Selected Donations: {selectedDataNum}</p>
<p>Total Donations: {allDataNum}</p>