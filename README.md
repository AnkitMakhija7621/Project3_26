# Handmade Artifacts E-commerce Platform

## Overview

This project is an e-commerce website dedicated to the sale of handmade artifacts. The platform is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and incorporates Apache Kafka for handling message-oriented middleware operations.

## Key Functionalities

- **User Roles**: Support for multiple user roles including Admin, Seller, and User.
- **Product Management**: Admins and Sellers can add products and set prices.
- **Shopping Cart**: Users can add products to their shopping cart and proceed to checkout.
- **Order Management**: Sellers can view orders related to their products, while Admins can view all orders and manage all platform users.

## Technical Architecture

- **Message Broker**: Apache Kafka is used as a message broker to facilitate asynchronous communication between different parts of the application.
- **Blackboard Architecture Pattern**: Utilized to manage the common knowledge base accessed by different systems.
- **Strategy Design Pattern**: Implemented for user registration, allowing dynamic changes in the registration process depending on the user role.

## Tech Stack

- **MongoDB**: NoSQL database for storing application data.
- **Express.js**: Backend framework running on Node.js.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime environment that executes JavaScript code server-side.
- **Kafka**: Used for managing messages across different parts of the application.

## Installation Steps

### Prerequisites

- Node.js
- MongoDB
- Apache Kafka

### Setup

1. **Download and Install Dependencies**:
    - Install Node.js and MongoDB on your machine.
    - Download Apache Kafka, extract it, and navigate into the Kafka directory.

2. **Run Kafka**:
    - Open two terminals. In the first, run the Zookeeper service:
      ```
      bin/zookeeper-server-start.sh config/zookeeper.properties
      ```
    - In the second, start the Kafka broker:
      ```
      bin/kafka-server-start.sh config/server.properties
      ```

3. **Configure the Project**:
    - Clone the project repository.
    - Create a `.env` file in the project root and add the following configurations:
      ```
      NODE_ENV=development
      PORT=<your_preferred_port>
      MONGO_URI=<your_mongoDB_uri>
      JWT_SECRET=<your_jwt_secret>
      ```

4. **Backend Setup**:
    - Navigate to the `backend` folder.
    - Install dependencies:
      ```
      npm i
      ```
    - Start the backend server:
      ```
      npm start
      ```

5. **Frontend Setup**:
    - Navigate to the `frontend` folder.
    - Install dependencies:
      ```
      npm i
      ```
    - Start the frontend application:
      ```
      npm start
      ```

## Conclusion

This README provides an overview and setup instructions for the Handmade Artifacts E-commerce platform. Follow the steps to get the project up and running on your local machine.
