# 🌴 Travelite – Tour Package Booking Platform (MERN + Firebase)

Welcome to **Travelite** — a modern and responsive **Tour Package Booking Management System** built using the **MERN Stack** with **Firebase Authentication** and **JWT Security**.

> ✈️ “Explore. Experience. Enjoy.”  
> A single platform to discover, book, and manage your dream travel adventures.

---

## 🌐 Live Demo

🔗 **Client:** [https://your-client-live-link.netlify.app](#)  
🔗 **Server API:** [https://your-server-url.vercel.app](#)

---

## 🧰 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js (Vite), React Router DOM, Tailwind CSS, DaisyUI / ShadCN UI, React Hook Form, Framer Motion, Axios |
| **Backend** | Node.js, Express.js, MongoDB (Atlas), CORS, dotenv, JWT |
| **Auth System** | Firebase Authentication (Email/Password + Google) |
| **Extra Features** | Theme Toggle, SweetAlert2, Toast Notifications, Responsive UI |

---

## 🪄 Core Features

### 🌍 General (Public)
- View all available tour packages  
- Search packages by name or destination  
- Explore featured packages on homepage  
- About Us page + beautiful hero section  

### 🔐 Authenticated (Private)
- Secure login via Firebase (Email/Password + Google)  
- JWT-based protected APIs  
- Add your own tour packages  
- Manage (update/delete) personal packages  
- Book packages with booking confirmation modal  
- View and confirm your bookings  
- Incremental booking counter using MongoDB `$inc`  

### 💡 UI & UX
- Fully responsive (Mobile / Tablet / Desktop)  
- Light & Dark mode toggle 🌗  
- Clean and modern layout with Framer Motion animations  
- Toast notifications and SweetAlert confirmations  

---

## 🧾 Pages & Routes

| Route | Description | Access |
|--------|--------------|--------|
| `/` | Home page with hero + featured packages | Public |
| `/packages` | All packages with search | Public |
| `/package/:id` | Package details + Book Now | Private |
| `/add-package` | Add new tour package | Private |
| `/manage-packages` | Edit/Delete own packages | Private |
| `/my-bookings` | View & confirm user bookings | Private |
| `/about` | About us | Public |
| `/login` / `/register` | Firebase authentication | Public |
| `/privacy-policy` | Privacy policy page | Public |
| `/terms-and-conditions` | Terms & Conditions page | Public |
| `*` | 404 Page — “Oops! You seem lost in the Himalayas.” | Public |

---

## 🗄️ Database Design (MongoDB)

### 🧳 `tourPackages` Collection
```json
{
  "_id": "ObjectId",
  "tour_name": "Dhaka to Cox’s Bazar",
  "image": "https://example.com/image.jpg",
  "duration": "3 Days 2 Nights",
  "departure_location": "Dhaka",
  "destination": "Cox’s Bazar",
  "price": 8500,
  "departure_date": "2025-11-10",
  "package_details": "Beautiful 3-day beach adventure.",
  "guide_name": "John Doe",
  "guide_email": "john@example.com",
  "guide_photo": "https://example.com/john.jpg",
  "guide_contact_no": "01700000000",
  "bookingCount": 0,
  "created_at": "Date"
}
