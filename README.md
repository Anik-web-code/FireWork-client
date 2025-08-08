# Freelance Task Marketplace

A full-stack freelance task management platform where users can post small tasks and freelancers can browse and bid on them. Built with React, Express, MongoDB, and Firebase authentication.

## 🔗 Live Site

👉 [Visit the Live Site](https://your-live-site-url.netlify.app)

## 🚀 Features

- 🔐 **Firebase Authentication** (Email/Password + Google Login)
- 🔎 **Browse and View Tasks** with details fetched from MongoDB
- ➕ **Add / Update / Delete Tasks** (CRUD operations with validation and feedback using SweetAlert)
- 📦 **Private Routes** for task-related pages like Add Task, My Posted Tasks, Task Details, and Update Task
- 🎯 **Featured Tasks** based on deadline with MongoDB `limit` and `sort`
- 🌐 **Responsive Design** for mobile, tablet, and desktop
- ✨ **Animations with `react-awesome-reveal`** to enhance user experience
- 🖼️ **Profile Avatar with Tooltip** showing the user’s name and a custom Log Out button

```

## 🧠 Technologies Used

- Frontend: React.js, Tailwind CSS, React Router DOM, React Awesome Reveal
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Auth: Firebase Authentication
- Deployment: Netlify (Client), Vercel (Server)

## 🔒 Environment Variables

Create a `.env` file for both client and server:

### `.env` (Client)
```
VITE_API_URL=https://your-backend.vercel.app
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### `.env` (Server)
```
PORT=5000
MONGODB_URI=your_mongo_connection_string
```

## 🧪 Routing & Protection

- All protected routes redirect to `/login` if the user is not authenticated.
- Reloading any route does not break the application or redirect inappropriately.
- Implemented smooth navigation using React Router and conditional rendering.

## ❌ What’s Not Included

- ❌ Theme toggling (dark/light mode) was not implemented
- ❌ "Bids" functionality only updates bid count; it does not show a list of bidders




## 📞 Contact

For any issues or suggestions, feel free to connect:

- **Email**: your-email@example.com
- **LinkedIn**: [Your Name](https://linkedin.com/in/yourprofile)

---

