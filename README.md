# 🎬 Cinematic Prompt & Asset Studio

A full-stack content management system designed to catalog, refine, and version-control complex AI image generation metadata and parameters. 

This project bridges the gap between raw generative prompts and organized, searchable digital asset management.

## ✨ Features
* **Complete CRUD Operations:** Create, Read, Update, and Delete prompt assets in real-time.
* **Instant Filtering:** Real-time search by aesthetic tags, lighting styles, and film textures.
* **RESTful Architecture:** Clean separation of concerns between the Spring Boot API and React client.
* **Modern UI:** Dark-mode, masonry-style gallery built for high-fidelity visual assets.

## 🛠️ Tech Stack
* **Backend:** Java 17, Spring Boot, Spring Data JPA, RESTful APIs
* **Database:** PostgreSQL
* **Frontend:** TypeScript, React, Vite
* **Styling:** CSS Grid, Custom Dark Theme

## 🚀 Getting Started

### Prerequisites
* Java JDK 17+
* Node.js v18+
* PostgreSQL running locally on port 5432

### Backend Setup
1. Create a PostgreSQL database named `assetstudio`.
2. Navigate to the `/backend` directory.
3. Update `src/main/resources/application.properties` with your database credentials.
4. Run the application via your IDE or `mvn spring-boot:run`.

### Frontend Setup
1. Navigate to the `/frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Vite development server.
4. Open `http://localhost:5173` in your browser.