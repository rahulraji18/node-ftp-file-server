# Node FTP-Style File Server

A simple FTP-style file server built with **Node.js**, **Express.js**, **TypeScript**, and **Serve-Index** that allows users to browse, view, and download files through a web browser.

## About

This project was developed as a backend portfolio project to demonstrate:

* Express.js and TypeScript development
* Static file serving
* Directory listing and file browsing
* HTTP-based file sharing
* Middleware integration
* Environment variable management with dotenv
* Lightweight file server implementation

---

## Features

* Browse directories through a web browser
* View directory contents
* Download files directly
* Automatic file listing generation
* File and folder icons support
* Nested folder navigation
* TypeScript support
* Lightweight and fast
* Easy deployment and setup

---

## Tech Stack

* Node.js
* Express.js
* TypeScript
* Serve-Index
* dotenv

---

## Project Structure

```text
node-ftp-file-server/
│
├── public/
│   ├── scripts/
│   │   └── example.json
│   │
│   ├── shared/
│   │
│   └── styles/
│
├── src/
│   └── app.ts
│
├── .env
├── .env.example
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/rahulraji18/node-ftp-file-server.git
cd node-ftp-file-server
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=4000
```

---

## Running the Application

Development Mode:

```bash
npm run dev
```

Production Build:

```bash
npm run build
npm start
```

---

## Usage

Place files and folders inside:

```text
public/shared
```

Start the server and open:

```text
http://localhost:4000
```

The application will automatically display all files and folders available inside the shared directory.

---

## Routes

### File Browser

```http
GET /
```

Displays all files and folders available inside the shared directory.

### File Download

```http
GET /<filename>
```

Downloads or opens the selected file in the browser.

### Folder Navigation

```http
GET /<foldername>
```

Displays the contents of the selected folder.

---

## Example Use Cases

* Internal file sharing system
* Team document repository
* Local network file server
* Download center for applications
* Learning Express.js static file serving
* Personal file hosting solution

---

## Future Improvements

* File Upload Support
* User Authentication
* Role-Based Access Control
* Search Functionality
* File Preview Support
* Download Statistics
* MongoDB Integration
* Shareable Download Links
* Drag-and-Drop Upload Interface
* Docker Deployment

---

## Author

**Rahul Rajeevan**

GitHub: https://github.com/rahulraji18

LinkedIn: https://www.linkedin.com/in/rahul-rajeevan/

Project Repository: https://github.com/rahulraji18/node-ftp-file-server

---

## License

MIT License

Copyright (c) 2026 Rahul Rajeevan
