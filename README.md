# Course-Management-System-Backend

 
## Project Overview and Explanation:
Initially Project setup is done and a GitHub repository is created to connect the repository for version control. MVC project structure was followed at all possible situations in the whole project for better flow and consistency of code.
Then the registration, login, and logout logics have been implemented using jwt token and hashing the password using bcrypt.js, and access token for authorization of different tasks to specific roles only. Users will receive an access token which is valid for 12 hours and a refresh token which is valid for 5days.
After that the course logic is being done where basic crud operations are implemented with creation and deletion of courses can only be done by admin, the role is checked using the access token of the logged in user and matching with the role using middleware.
Finally, purchase operations have being implemented where users can purchase courses which are available in the database, the purchase also stores the price of the course, when it was purchased and the id of the user by whom it was purchased. Also, users can view all their purchases in the my-purchases api.


## Installation guide:
 1) Clone the repository: <br>
 git clone https://github.com/nahid500/Course-Management-System-Backend.git <br>
 cd Course-Management-System-Backend

 2) Install dependencies: npm install

 3) Create a .env file with values: <br>
     PORT = 5000 <br>
     MONGO_URI = mongodb+srv://nahid95622_db_user:GAEhNW6rtqVSlyVW@coursecluster.l3vlgdx.mongodb.net/   <br>
     JWT_SECRET = 3krkoui27gn7cesvi796iyk25o69xoyr <br>
     JWT_EXPIRY = 12h <br>
     JWT_REFRESH_SECRET = 3krkoui27gn7cesvi796iyk25o69xoyr <br>
     REFRESH_TOKEN_EXPIRY = 5d <br>

 4) Run the project locally: npm run dev <br>


## API endpoints with example requests/responses.:

Register:  http://localhost:5000/auth/register <br>
{
    "name": "user2",
    "email": "user2@gmail.com",
    "password": "user123"
}  <br>
{
    "_id": "68bf0a3123590eb5c64c8fe2",
    "name": "user2",
    "email": "user2@gmail.com",
    "role": "user",
    "message": "Registration Successful"
}

Login:  http://localhost:5000/auth/login  <br>
{
    "email": "user2@gmail.com",
    "password": "user123"
} <br>
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YmYwYTMxMjM1OTBlYjVjNjRjOGZlMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU3MzUwNDk4LCJleHAiOjE3NTczOTM2OTh9.HAEjb--qvkDWREmR2BI-Tgp3rGA9y9670o5sWGYNgUk",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YmYwYTMxMjM1OTBlYjVjNjRjOGZlMiIsImlhdCI6MTc1NzM1MDQ5OCwiZXhwIjoxNzU3NzgyNDk4fQ.6ZA73PT4P5VbHfX-KrVwXcDvNfdtDS0J77sFtDe9fAQ",
    "message": "Logged in Successfully"
}

Logout:  http://localhost:5000/auth/logout  <br>
Authorization-> Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YmViN2Q4NWY5Zjg5ZTYzZTQ3NTE0MyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU3MzI5NDM4LCJleHAiOjE3NTczNzI2Mzh9.VyuN_e5NxwUqGle7L71XvNZOthYdQ32aHCtzI36jd-s  <br>
{
    "message": "Logged Out Successfully "
}

Create Course(only admin):  http://localhost:5000/courses/create  <br>
{
    "title": "PowerBI",
    "description": "PowerBI is very important for data analytics",
    "price": 8500,
    "instructor": "nahid"
} <br>
{
    "message": "Course Created Successfully"
}

Delete Course(only admin): http://localhost:5000/courses/68bed216c7d656771756e299  <br>
Authorization-> Bearer <admin_token_here> <br>
{
    "message": "Course deleted successfully"
}

Get All Courses:  http://localhost:5000/courses/  <br>
[
    {
        "_id": "68bed237c7d656771756e29b",
        "title": "SQL",
        "description": "sql sql sql",
        "price": 3500,
        "instructor": "nabil",
        "__v": 0
    },<br>
    {
        "_id": "68bf0b2323590eb5c64c8feb",
        "title": "PowerBI",
        "description": "PowerBI is very important for data analytics",
        "price": 8500,
        "instructor": "nahid",
        "__v": 0
    }
]

Get Single Course:  http://localhost:5000/courses/68bf0b2323590eb5c64c8feb  <br>
{
    "_id": "68bf0b2323590eb5c64c8feb",
    "title": "PowerBI",
    "description": "PowerBI is very important for data analytics",
    "price": 8500,
    "instructor": "nahid",
    "__v": 0
}


Purchase Course:  http://localhost:5000/purchase/buy/68bf0b2323590eb5c64c8feb  <br>
{
    "courseId": "68bf0b2323590eb5c64c8feb"
}  <br>
{
    "message": "Course successfully Purchased"
}

My All Purchases:  http://localhost:5000/purchase/my-purchases  <br>
Authorization-> Bearer <user_token_here> <br>
{
    "purchases": [
        {
            "_id": "68beff09d4d44057fe14b64c",
            "userId": "68bed24dc7d656771756e29e",
            "courseId": {
                "_id": "68bed237c7d656771756e29b",
                "title": "SQL",
                "description": "sql sql sql",
                "price": 3500,
                "instructor": "nabil",
                "__v": 0
            },
            "amount": 3500,
            "purchaseDate": "2025-09-08T16:06:33.696Z",
            "__v": 0
        },  <br>
        {
            "_id": "68bf0be623590eb5c64c8ff2",
            "userId": "68bed24dc7d656771756e29e",
            "courseId": {
                "_id": "68bf0b2323590eb5c64c8feb",
                "title": "PowerBI",
                "description": "PowerBI is very important for data analytics",
                "price": 8500,
                "instructor": "nahid",
                "__v": 0
            },
            "amount": 8500,
            "purchaseDate": "2025-09-08T17:01:26.637Z",
            "__v": 0
        }
    ]
}












