# Numbers API 🔢

A simple and dynamic API that takes a number and returns interesting mathematical properties and a fun fact about it. The API determines whether the number is prime, perfect, or Armstrong, identifies if it's even or odd, computes its digit sum, and fetches a fun fact from the Numbers API.

## 🚀 Features
- **Number Classification:** Checks if the number is prime, perfect, or Armstrong.
- **Even/Odd Identification:** Identifies if the number is even or odd.
- **Digit Sum Calculation:** Computes the sum of the digits of the number.
- **Fun Fact Generation:** Fetches a fun fact from the Numbers API.
- **JSON Responses:** Returns responses in the specified JSON format.

## 📦 Response Examples

### **200 OK**
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

400 Bad Request

```json
{
  "number": "alphabet",
  "error": true
}

⚙️ Technology Stack
Node.js: Backend runtime environment
Express.js: Web framework for handling routes
Axios: HTTP client for fetching fun facts from Numbers API

Installation and Usage

1. Clone the repository
git clone https://github.com/Nzube-ctrl/Numbers_API.git
cd Numbers_API

2. Install dependencies
npm install

3. Start the server
npm run dev

4. Test the API
Send a GET request to:
http://localhost:5000/api/classify-number?number=371

5. Deployment
The API is deployed to a publicly accessible endpoint: https://numbers-api-08t9.onrender.com/