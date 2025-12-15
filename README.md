# React Task Management App

A **role-based task management application** built with React and Tailwind CSS, using **localStorage** for persistence. This project allows Admins to create, assign, and reassign tasks, while Users can view and complete their tasks.

## Features

* **Role-based Access**: Admins and Users
* **Task Management**: Create, assign, and mark tasks as completed
* **Drag-and-Drop**: Admins can drag tasks to reassign users
* **Data Persistence**: All data stored in localStorage
* **Responsive UI**: Built with Tailwind CSS

## Tech Stack

* React (18+)
* Tailwind CSS
* React-DnD
* UUID for unique task IDs
* localStorage for data storage

## Default Credentials

### Admin

```
username: admin
password: admin123
```

### User

```
username: user1
password: user123
```
username: user2
password: user123
```

## Project Structure

```
public/
│── index.html

src/
│── components/
│   │── LoginForm.js        # User authentication
│   │── TaskForm.js         # Admin task creation
│   │── TaskList.js         # Task display with drag-drop
│   │── UserList.js         # Admin user list
│
│── contexts/
│   │── AuthContext.js      # Authentication & role management
│
│── utils/
│   │── storage.js          # localStorage helpers (getTasks, saveTasks, getUsers, initData)
│
│── App.js                  # Main component with role-based rendering
│── index.js                # Entry point
│── index.css               # Tailwind imports
```

zip file: https://drive.google.com/file/d/1jTLV_ZYOD4JbOLLGZAAQYC8fV2GmE2ju/view?usp=sharing

## Installation
cd react-task-management
npm install
npm install react-dnd react-dnd-html5-backend uuid

3. Start the development server:

npm start
```

App runs at:- http://localhost:3000

## Usage

1. Open the app in the browser.
2. Login with Admin or User credentials.
3. Admin can create tasks and assign them to users.
4. Users can view assigned tasks and mark them as completed.
5. Admin can drag and drop tasks to reassign them.
6. Logout is available in the header.

Deploy link: https://anilabsoluteassignment.vercel.app


