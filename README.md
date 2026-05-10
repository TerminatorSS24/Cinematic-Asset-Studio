# 🎬 Cinematic Prompt & Asset Studio

A professional full-stack digital asset management system designed to catalog, version-control, and refine complex AI image generation metadata. This application provides a high-fidelity interface for prompt engineers to manage their creative workflow.

## 🔗 Live Demo
* **Frontend:** [https://cinematic-asset-studio.vercel.app](https://cinematic-asset-studio.vercel.app)
* **API Endpoint:** [https://cinematic-asset-studio.onrender.com/api/assets](https://cinematic-asset-studio.onrender.com/api/assets)

## ✨ Features
* **Full CRUD Functionality:** Create, archive, and manage prompts with persistent cloud storage.
* **Smart Filtering:** Real-time search and filter by aesthetic tags, lighting styles, and textures.
* **Dockerized Architecture:** Backend containerized for consistent deployment and scalability.
* **Responsive Design:** A masonry-style gallery built with CSS Grid for a premium editorial look.
* **CORS Optimized:** Secure communication between disparate cloud environments (Vercel & Render).

## 🛠️ Tech Stack
* **Frontend:** TypeScript, React 18, Vite
* **Backend:** Java 17, Spring Boot, Spring Data JPA, Docker
* **Database:** PostgreSQL (Hosted via Neon.tech)
* **Deployment:** Vercel (Frontend), Render (Backend)

## 🏗️ Architecture
The application follows a modern decoupled architecture:
1. **Frontend:** A React SPA deployed on Vercel, optimized for fast delivery.
2. **Backend:** A containerized Spring Boot REST API running on Render.
3. **Database:** A serverless PostgreSQL instance managing relational prompt data.

## 🚀 Local Development

### Prerequisites
* Java JDK 17+
* Node.js v18+
* Docker (Optional for local container testing)
* PostgreSQL 15+

### Backend Setup (Spring Boot)
1. Navigate to the `/demo` directory.
2. Update `src/main/resources/application.properties` with your local database credentials.
3. Run the application:
   ```bash
   ./mvnw spring-boot:run

### Frontend Setup (Vite/React)
1. Navigate to the /frontend directory.
2. Install dependencies:
    ```Bash
    npm install
3. Update the API base URL in src/App.tsx to http://localhost:8080.
4. Start the development server:
    ```Bash
    npm run dev

### 🐋 Docker Deployment
1. To build and run the backend container locally:
    ```Bash
    docker build -t cinematic-backend ./demo
    docker run -p 8080:8080 --env-file .env cinematic-backend

---