# User Management System

## Project Overview

This project is a **User Management System** designed to handle user creation, editing permissions, searching, and filtering based on roles and permissions. It supports authentication via login (JWT tokens) and allows users to perform actions according to their assigned roles and permissions.

---

## Features

### 1. **Create Users**
   - Admin users can create new users by providing details such as name, email, role, and permissions.
   - Roles include **Admin**, **User**, and **Moderator**, each with different levels of access.

### 2. **Edit Permissions**
   - Admins can edit the permissions of existing users, giving them control over what actions the users can perform within the application.

### 3. **Filters & Search**
   - The system supports dynamic filters based on roles, permissions, or search queries like name and email.
   - Admins can quickly find users based on different criteria (e.g., role, email, name).

### 4. **Roles with Defined Permissions**
   - Users are categorized by roles such as **Admin**, **User**, and **Moderator**.
   - Each role comes with specific permissions (e.g., admin can manage users, user can only view content).

### 5. **Login System (API)**  
   - The application includes a login API (`/api/login/route.ts`) that authenticates users based on predefined credentials.
   - Upon login, users receive a JWT token and their permissions are assigned based on their roles.

---

## Project Setup Instructions

### Prerequisites:
- **Node.js** (version 16 or higher)
- **npm** or  (package manager)


### Step 1: Clone the repository
Clone the project to your local machine:

```bash
git clone https://github.com/yourusername/project-name.git
