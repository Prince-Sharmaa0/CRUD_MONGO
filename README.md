# CRUD Application Using MongoDB

This repository contains a simple CRUD (Create, Read, Update, Delete) application using MongoDB. This project demonstrates how to perform basic CRUD operations with a MongoDB database using Node.js and Express.js.

## Features

- **Create**: Add new records to the MongoDB database.
- **Read**: Retrieve and display records from the database.
- **Update**: Modify existing records.
- **Delete**: Remove records from the database.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Object Modeling**: Mongoose
- **View Engine**: EJS (Embedded JavaScript)
- **Environment Management**: dotenv

## Installation

Follow these steps to set up and run the application locally:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/repository-name.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd repository-name
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Set Up Environment Variables**

    Create a `.env` file in the root directory with the following content:

    ```
    MONGO_URI=mongodb://localhost:27017/your-database-name
    ```

    Replace `your-database-name` with the name of your MongoDB database.

5. **Start the Application**

    ```bash
    npm start
    ```

    The application will start and you can access it at `http://localhost:3000` (or the port specified in your `app.js` file).

## Usage

- **Create User**: Navigate to `/users/new` to create a new user.
- **View Users**: Go to `/users` to see a list of all users.
- **Edit User**: Visit `/users/:id/edit` to update a user's information.
- **Delete User**: Use the delete button on `/users/:id` to remove a user.

## Project Structure

- `app.js`: Main application file where routes and middleware are set up.
- `models/User.js`: Mongoose model for user schema.
- `routes/users.js`: Routes for handling CRUD operations on users.
- `views/`: EJS templates for rendering pages.


