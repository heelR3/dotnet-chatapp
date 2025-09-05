# .NET + Angular Chat App

This repository contains a **full-stack chat application** built with **ASP.NET Core (API)** and **Angular (Frontend)**. The project is deployed on Azure.

---

## Features

- User registration with optional profile image upload
- User login with JWT authentication
- Real-time chat functionality
- Separate frontend and backend code for modularity
- Deployed on **Azure**

---

## Technologies Used

- **Backend:** ASP.NET Core, Entity Framework, SQL Server
- **Frontend:** Angular, TypeScript, HTML, CSS
- **Authentication:** JWT
- **Deployment:** Azure Web App

---

## Setup Instructions

### Backend (API)

1. Navigate to the `API` folder:
    ```bash
    cd API
    ```
2. Restore packages:
    ```bash
    dotnet restore
    ```
3. Update your `appsettings.json` with the correct database connection string.
4. Run the API:
    ```bash
    dotnet run
    ```

### Frontend (Client)

1. Navigate to the `client` folder:
    ```bash
    cd client
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the Angular application:
    ```bash
    ng serve
    ```
4. Open your browser at `http://localhost:4200`.

---

## Deployment

The application is deployed separately on **Azure**:

- API: [Azure API URL]  
- Client: [Azure Frontend URL]

> Make sure to update the frontend `environment.ts` file to point to the deployed API URL.

---

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first.

---

## License

This project is licensed under the MIT License.
