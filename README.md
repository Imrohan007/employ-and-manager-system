# Employee Management System (EMS)

A modern, responsive Employee Management System built with React, Vite, and Tailwind CSS. This application streamlines task management for employees and administrators with an intuitive interface.

## 🚀 Live Demo

**🔗 Live Application**: https://imrohan007.github.io/employ-and-manager-system/

## ✨ Features

### For Employees
- ✅ View assigned tasks
- ✅ Accept new tasks
- ✅ Mark tasks as complete
- ✅ Report failed tasks
- ✅ Dashboard with task statistics

### For Administrators
- ✅ Create and assign tasks
- ✅ View all employee tasks
- ✅ Monitor task progress
- ✅ Admin dashboard with analytics
- ✅ Task management system

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Authentication**: Local storage based auth system
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
ems-main/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── TaskList/
│   │   │   ├── AcceptTask.jsx
│   │   │   ├── CompleteTask.jsx
│   │   │   ├── FailedTask.jsx
│   │   │   ├── NewTask.jsx
│   │   │   └── TaskList.jsx
│   │   └── other/
│   │       ├── AllTask.jsx
│   │       ├── CreateTask.jsx
│   │       ├── Header.jsx
│   │       └── TaskListNumbers.jsx
│   ├── context/
│   │   └── AuthProvider.jsx
│   ├── utils/
│   │   └── localStorage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Imrohan007/employ-and-manager-system.git
   cd employ-and-manager-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Authentication

The application uses a simple authentication system with predefined credentials:

**Admin Login:**
- Username: `admin`
- Password: `admin`

**Employee Login:**
- Username: `employee`
- Password: `employee`

## 📱 Features Overview

### Dashboard
- **Employee Dashboard**: View personal task statistics and quick actions
- **Admin Dashboard**: Overview of all tasks and system analytics

### Task Management
- **Create Tasks**: Admins can create new tasks and assign them
- **Task Status**: Tasks can be in states: New, Accepted, Complete, Failed
- **Task Tracking**: Real-time updates on task progress

### User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with Tailwind CSS
- **Smooth Interactions**: Hover effects and transitions for better UX

## 🌐 Deployment

This project is deployed using GitHub Pages. The build process is automated:

1. Code is pushed to the `main` branch
2. GitHub Pages automatically builds and deploys the application
3. The live site is updated within minutes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Rohan**
- GitHub: [@Imrohan007](https://github.com/Imrohan007)

## 📞 Support

If you have any questions or need support, feel free to:
- Open an issue on GitHub
- Contact me directly

---

⭐ **Star this repository if it helped you!**
