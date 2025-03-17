Express.js DTOs & Cursor-Based Pagination Example

This repository demonstrates the use of Data Transfer Objects (DTOs) and Cursor-Based Pagination in an Express.js application. DTOs help in structuring API responses, while cursor-based pagination provides an efficient way to paginate large datasets.

Features

Data Transfer Objects (DTOs): Ensures structured and consistent API responses.

Cursor-Based Pagination: Efficiently fetch paginated data without offset limitations.

Express.js Backend: A lightweight and scalable backend setup.

Installation

Clone the repository and install dependencies:
npm install
origin https://github.com/U82146510/express-DTOs-CURSOR-BASED.git
Running the Project

Start the Express server:
npm start
The API will be available at http://localhost:3000.

API Endpoints

1. Get Paginated Products

Fetch products using cursor-based pagination:
GET /products?cursor=<lastProductId>&limit=10
Query Parameters:

cursor (optional) - The last product ID from the previous page.

limit (optional, default=10) - Number of products to fetch per page.

Response Example:
{
  "products": [
    { "id": "123", "name": "Product 1", "price": 100 },
    { "id": "124", "name": "Product 2", "price": 120 }
  ],
  "nextCursor": "124"
}
2. Create a Product
POST /products
Content-Type: application/json

{
  "name": "New Product",
  "price": 150
}
Response Example:
{
  "id": "125",
  "name": "New Product",
  "price": 150
}
Technologies Used

Node.js + Express.js

TypeScript

Cursor-Based Pagination
