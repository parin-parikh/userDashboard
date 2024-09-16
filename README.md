# User Dashboard

A React application that allows users to view and navigate between different users' profiles and activities using a dropdown menu. This project integrates with a mock REST API to fetch user data and display user activities.

## Features

- **User Profile**: Displays basic information about the selected user.
- **User Activities**: Shows a list of activities (posts) for the selected user.
- **Dropdown Navigation**: Allows easy navigation between different users without manually editing URLs.
- **Responsive Design**: Ensures a user-friendly experience across various devices.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Provides type safety for the application.
- **CSS**: For styling the components.
- **Axios**: For making HTTP requests to the REST API.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/user-dashboard.git
   cd user-dashboard
   ```

2. **Install Dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using Yarn:
   ```bash
   yarn install
   ```

3. **Start the Development Server**

   Using npm:
   ```bash
   npm start
   ```

   Or using Yarn:
   ```bash
   yarn start
   ```

   This will start the development server and open the application in your default web browser.

### Usage

1. **Select a User**: Use the dropdown menu to select a user from the list.
2. **View User Profile**: The selected user's profile information will be displayed.
3. **View User Activities**: The activities (posts) of the selected user will be shown.

### Project Structure

- **`src/`**: Contains all the source code for the project.
  - **`components/`**: Contains React components.
    - **`UserProfile.tsx`**: Component to display user profile information.
    - **`UserActivities.tsx`**: Component to display user activities.
  - **`App.tsx`**: Main application component.
  - **`index.tsx`**: Entry point for the React application.
- **`public/`**: Contains static assets like `index.html`.
- **`index.css`**: Global styles for the project.

### Styling

All component styling is defined in `index.css`, following a navy blue and white theme.

### Contact

For any questions or inquiries, please contact:

- **Name**: Parin Parikh
- **Email**: parinparikh1@gmail.com
- **LinkedIn**: [linkedin.com/in/parinparikh1](https://www.linkedin.com/in/parinparikh1)
