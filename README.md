## Sg Rentify

Welcome to Sg Rentify, a full-stack real estate application built with the MERN stack. This project leverages modern web development technologies to provide a comprehensive platform for managing real estate listings and enabling real-time chat functionality.

## Features

- User Authentication: Secure user authentication using JWT and cookies.
- Real-Time Chat: Instant messaging with Socket.io.
- Real Estate Listings: CRUD operations for managing property listings.
- Responsive Design: Fully responsive design for mobile and desktop devices.
- State Management: Efficient state management using Context API.
- Routing: Client-side routing with React Router Dom.
- Database: MongoDB for data persistence, integrated with Prisma for ORM.

## Technologies Used

### Frontend:

- React
- Context API
- React Router Dom

### Backend:

- Node.js
- Express
- Prisma
- Socket.io

### Database:

- MongoDB

### Authentication:

- JWT
- Cookies

## Installation

Clone the repository:

git clone https://github.com/soumwadeep/SgRentify.git
cd SgRentify

Install dependencies for the server:

cd api
npm install

Install dependencies for the client:

cd client
npm install

Install dependencies for the socket server:

cd socket
npm install

## Usage

Start the backend server:

cd api
node app.js

Start the socket server:

cd socket
node app.js

Start the frontend server:

cd client
npm run dev

Access the application:
Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/)

## Environment Variables

Create a `.env` file in the `api` directory and add the following environment variables:

DATABASE_URL="Your Mongo Url"
JWT_SECRET_KEY="Any Random Key"
CLIENT_URL="http://localhost:5173/"

That's it! Now you can run the application perfectly.
