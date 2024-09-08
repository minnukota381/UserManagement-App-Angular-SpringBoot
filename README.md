# **User Management Application (Angular + Spring Boot)**

This project is a user management system built using **Angular** for the frontend and **Spring Boot** for the backend. It provides functionality to create, read, update, and delete (CRUD) users, with the data being stored in a **MySQL** database.

## **Features**

- Create new users
- View a list of all users
- Update existing users
- Delete users
- Frontend and backend communication using RESTful APIs
- Postman setup for API testing

## **Technologies Used**

### **Frontend (Angular)**

- **Angular 15+**
- **TypeScript**
- **HTML5/CSS3**
- **Bootstrap 5 (for UI components)**

### **Backend (Spring Boot)**

- **Spring Boot 3+**
- **Spring Data JPA**
- **Hibernate ORM**
- **MySQL Database**
- **Maven (for dependency management)**

### **Tools**

- **Postman** for API testing
- **STS (Spring Tool Suite)** for backend development
- **Angular CLI** for frontend development

---

## **Prerequisites**

To run the project, ensure you have the following installed on your machine:

- **Node.js** (for Angular)
- **Angular CLI** (globally installed)
- **JDK 17+** (for Spring Boot)
- **MySQL Server** (or a MySQL-compatible database)
- **STS** (Spring Tool Suite) or any IDE for running Spring Boot
- **Postman** (optional for API testing)

---

## **Database Setup (MySQL)**

1. Install and configure **MySQL** on your system.
2. Create a new MySQL database:

    ```sql
    CREATE DATABASE user_management;
    ```

3. Open the `application.properties` file in your Spring Boot project and set your MySQL credentials:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/user_management
    spring.datasource.username=your-username
    spring.datasource.password=your-password
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
    ```

---

## **How to Run the Application**

### **Backend (Spring Boot)**

1. Open the Spring Boot project in **STS** or any IDE of your choice.
2. Ensure your MySQL server is running and the database is properly configured.
3. Run the Spring Boot application:
    - Right-click on the project > Run As > Spring Boot App (or run the main class in your IDE).
4. The backend API will be accessible at:
    - `http://localhost:8080/api/users`

### **Frontend (Angular)**

1. Open a terminal and navigate to the **Angular** project folder.
2. Install the required dependencies by running:

    ```bash
    npm install
    ```

3. Run the Angular development server:

    ```bash
    ng serve
    ```

4. The Angular app will be running at:
    - `http://localhost:4200`

---

## **Postman Setup**

You can use **Postman** to test the backend APIs:

1. **GET All Users**
   - URL: `GET http://localhost:8080/api/users`
2. **POST Create New User**
   - URL: `POST http://localhost:8080/api/users`
   - Body (JSON):

     ```json
     {
       "name": "Helcy",
       "age": 18
     }
     ```

3. **DELETE a User**
   - URL: `DELETE http://localhost:8080/api/users/{id}`

---

## **Project Structure**

### **Frontend (Angular)**

```plaintext
src/
├── app/
│   ├── components/
│   │   ├── user-create/
│   │   ├── user-list/
│   ├── models/
│   │   └── user.model.ts
│   ├── services/
│   │   └── user.service.ts
│   ├── app.module.ts
│   └── app.component.html
├── assets/
└── index.html
```

### **Backend (Spring Boot)**

```plaintext
src/main/java/com/example/user/
├── controller/
│   └── UserController.java
├── model/
│   └── User.java
├── repository/
│   └── UserRepository.java
├── service/
│   └── UserService.java
└── UserManagementApplication.java
```

---

## **Troubleshooting**

1. **CORS Policy Error**
   If you encounter a CORS issue, ensure that you have added CORS configuration in your Spring Boot application:

   ```java
   @Configuration
   public class WebConfig implements WebMvcConfigurer {
       @Override
       public void addCorsMappings(CorsRegistry registry) {
           registry.addMapping("/api/**").allowedOrigins("http://localhost:4200");
       }
   }
   ```

2. **MySQL Connection Issues**
   - Ensure MySQL is running, and the database URL, username, and password are correct in the `application.properties` file.
   - Make sure the MySQL service is active on your machine (`sudo service mysql start` for Linux/Mac).

---

## **API Endpoints**

### **User Management Endpoints**

- **GET** `/api/users` - Retrieve all users
- **POST** `/api/users` - Create a new user
- **DELETE** `/api/users/{id}` - Delete a user by ID