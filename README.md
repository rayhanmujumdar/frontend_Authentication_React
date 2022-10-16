# Make Authentication System
**Project Requirement:** Make a simple authentication with sign up and sign in form and set data to mongo database.

Agenda: 

- add functional requirement
- software requirement specification (SRS) model make
- Technology use
- Project setup
- git hub push code

## **Functional Requirement:**

## **Frontend:**

**user authentication Signup:  → every input section must be validation check**

- user Name input - Enter your name provided this input → required must
- email input - user email address provide this input → important to authentication → require must
- user age input - enter user age provided this input
- married status radio input →  value is yes or no → required must
- Password input - user secret password provide this input → required must
- confirm password input - user confirmation this password was same → validation check to password input

**user authentication sign in: → every input must be validation check**

- Email input → user sign up email provide → required must
- Password input → user sign up password → required must

**Note:**  all input data sent to backend server. if match to sign up info or sign in info is equal then authentication is success. if don’t match user authentication info not access to user inside

## **Backend:**

### **Requirement:**

**SignUp:**

- get to signup data from frontend
- validation to schema
- if validation is successful then data is set to database
- if validation not success then return a not success message to frontend

**Login:** 

- get to signin data from frontend
- get and matching to database signup user info
- if user email or password match to database store signup user email and pass then user sent a successful authentication message
- if not matching user email or password backend sent to not success message

**API Routes:**

- /api/v1/auth/signup → POST
- /api/v1/auth/signin → GET

### **Model & Schema :**

**signup:**

- username → string
    - validation
        - required
        - minLength
        - maxLength
        - trim
- email → string
    - validation
        - required
        - check valid email → validation check to regular expression
        - error message → if find any error
- age → number
    - validation
        - required
        - min
- married → boolean
    - validation
        - default value set
- password → string
    - password hash
    - validation
        - require

## Technology selected:

**Frontend:** 

- React
- tailwind css
- React router dom
- React hooks form
- axios
- tailwind elements

**Backend firework or library:** 

- Express.js
- Mongoose
- dotenv
- **[bcrypt.js](https://github.com/kelektiv/node.bcrypt.js)**

**Backend Middleware:**

- cors
- morgan
- express json
- router

## Project setup:

**Use Tools:**

- Vs code → code editor
- Github → my code store