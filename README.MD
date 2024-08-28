# Check-in Server

A simple check-in server built using the MEN (MongoDB, Express, Node.js) stack, with functionality for user registration, login, check-in, and check-out.

## Features

- User registration and login with JSON Web Token (JWT) authentication
- Check-in and check-out functionality, with timestamps stored for each event
- Secure password hashing using bcrypt

## Installation

1. Clone the repository:
```
git clone https://github.com/Code-Gale/checkIn-server.git
```

2. Navigate to the project directory:
```
cd checkin-server
```

Copy

3. Install the dependencies:
```
npm install
```
4. Set up the environment variables:

Create a `.env` file in the project root and add the following variables:

DBURI = mongodb://localhost/checkin-server
SECRET_KEY= your_secret_key
PORT = 5000

Replace `your_secret_key` with a secret key of your choice.

5. Start the server:
```
npm start
```

The server will start running on `http://localhost:5000`.

## API Endpoints

1. **Registration**:
- Endpoint: `POST /api/users/register`
- Request body: `{ "username", "email", "password" }`
- Response: `{ "token" }`

2. **Login**:
- Endpoint: `POST /api/users/login`
- Request body: `{ "email", "password" }`
- Response: `{ "token" }`

3. **Check-in**:
- Endpoint: `POST /api/users/checkin`
- Headers: `Authorization: Bearer <token>`
- Response: `{ "message": "Checked in successfully" }`

4. **Check-out**:
- Endpoint: `POST /api/users/checkout`
- Headers: `Authorization: Bearer <token>`
- Response: `{ "message": "Checked out successfully" }`

## Technologies Used

- **MongoDB**: NoSQL database for storing user and check-in/check-out data
- **Express**: Web application framework for Node.js
- **Node.js**: JavaScript runtime environment
- **bcrypt**: Library for hashing passwords
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).