**IMPORTANT NOTE**
The .env file in this repository is provided solely for demonstration purposes to illustrate the setup of environment
variables. For production use, it is standard practice to exclude such files from version control for security reasons.
It is recommended to use environment-specific methods for managing sensitive configurations.

## Installation and Setup

1. Clone the repository:
    - git clone <repository-url>
2. Navigate to the project directory:
    - cd web.socket_restful.api
3. Install the dependencies:
    - npm install
4. Running the Server
   For development with hot reload:
    - npm run dev
      For production:
    - npm start

Alternatively, for a live demo, please visit the deployed application on Heroku:

https://radiant-dusk-41601-a18d430fdc97.herokuapp.com/

**PROJECT DESCRIPTION**

# WebSocket & RESTful API Server

This repository contains a dual-purpose server setup using Node.js: a WebSocket server for real-time messaging and a
RESTful API server for traditional CRUD operations. The WebSocket server can handle multiple client connections
simultaneously and is capable of broadcasting messages to all connected clients, ensuring real-time communication. The
RESTful API server, built using Express.js, provides endpoints for creating, reading, and deleting resources, catering
to the data management needs of a client application.

## Project Structure

The project is compartmentalized into several directories, each with a specific purpose:

- **Middleware**: Houses utility functions and Express middleware used across the application for tasks like error
  handling and request logging.
- **Services**: Contains business logic and data manipulation code, abstracting this functionality away from the route
  handlers to keep the codebase modular.
- **Controllers**: Define the application's request handling logic, delegating data handling to the services.
- **Routes**: Includes the routing definitions for the API, mapping endpoints to the appropriate service functions.
- **Models**: Comprises schemas that define the structure of data within the MongoDB database, utilizing Mongoose for
  schema definitions and data validation.
- **Configs**: Contains configuration files that setup and export configurations used by different parts of the
  application, such as database connections or third-party service credentials.

## Architecture Overview

### WebSocket Server

The WebSocket server leverages the `ws` library to establish a full-duplex communication channel between the server and
clients. The server maintains a list of active connections and distributes incoming messages to all clients, thereby
facilitating a broadcast communication pattern.

- **Code Structure:**
    - The WebSocket server is encapsulated within a module responsible for initializing connections and defining message
      handling logic.
    - Connections are managed through an event-driven architecture that listens for new messages and errors, ensuring
      robust connection handling.

### RESTful API Server

The RESTful API server, designed with the Express.js framework, conforms to REST principles and handles HTTP requests to
perform operations on resources. It features a clean and scalable structure by separating concerns into routes,
middlewares, controllers and services.

## Design Decisions and Libraries

- **Node.js**: Chosen for its non-blocking I/O and event-driven nature, ideal for real-time and network applications.
- **Express.js**: A minimal and flexible Node.js web application framework that provides robust features for web and
  mobile applications.
- **ws**: A simple-to-use WebSocket library for Node.js that complies with the WebSocket protocol RFC 6455.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js that manages relationships between data
  and translates between objects in code and their representation in MongoDB.
- **Morgan**: An HTTP request logger middleware for Node.js, used for logging request details for monitoring and
  debugging.
- **cors**: Middleware that enables CORS (Cross-Origin Resource Sharing) with various options, crucial for API security
  in a web context.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`, making it
  easy to manage application settings.
- **nodemon**: A utility that monitors changes in the source code and automatically restarts the server, improving the
  developer experience.
- **eslint**: A pluggable linting utility for JavaScript, ensuring code quality and consistency across the codebase.

## Extensibility and Future Development

The server setup has been designed with scalability and future growth in mind. By adhering to a modular architecture, it
allows for straightforward incorporation of new features and improvements as the needs of the application evolve.

### WebSocket Communication

For WebSocket communication, which enables real-time, bidirectional, event-based communication between clients and the
server, there is significant potential for extensibility:

- **Private Messaging**: Implementing a private messaging feature would involve creating a service that can track and
  manage individual WebSocket connections and route messages only to specific clients based on a unique identifier, such
  as a user ID.

- **Presence Features**: To add user presence features (like showing who is online), the server could maintain a list of
  active connections in conjunction with user status. A presence service can update and broadcast user statuses in
  real-time as users connect, disconnect, or change their status.

- **Channels and Topics**: For applications needing to broadcast messages to specific groups or topics, the server can
  be extended to handle subscription-based channels where clients can subscribe and publish to specific topics.

### RESTful API Development

The RESTful API is constructed using Express.js, which provides a powerful yet simple way to create scalable APIs.
Future development can build upon this foundation in several ways:

- **New Routes**: As new resources or functionalities become necessary, additional routes can be added to the API. These
  routes will adhere to REST principles and map to their respective controllers.

- **Complex Queries**: To support advanced querying capabilities, services can be augmented to handle complex filters,
  sorting, and pagination. This allows clients to retrieve exactly the data they need.

- **Authentication and Authorization**: To control access to various endpoints, middleware can be implemented to handle
  authentication (verifying user identity) and authorization (verifying access permissions).

- **Microservices**: For larger applications, the API could be split into a microservices architecture, where different
  services are responsible for different functionalities. This separation allows for independent scaling and development
  of each microservice.

By keeping components decoupled and following best practices for API development, the server is well-positioned to
handle future requirements, whether it involves extending current functionalities or integrating new technologies.

## Best Practices

The codebase is meticulously organized following industry-standard practices, enhancing both readability and
maintainability. It embraces the principles of clean code, ensuring that the logic is straightforward and
self-explanatory where possible, and well-documented where necessary. The structure of the codebase is modular, with a
clear separation of concerns. Extensive commenting complements the code's structure. Comments are consistently applied
across the codebase, providing clear explanations for complex logic, configuration details, and function purposes.
