# Nativ 🌱

![Nativ Logo](/client/public/nativLogo.png)
---

- **Production URL**: https://faithful-recreation-production.up.railway.app/
  ---

**Reconnect With Nature, One Native Plant at a Time**

Nativ is a full-stack web application that uses AI to provide personalized native plant recommendations based on your location, available space, and gardening experience. Our mission is to combat deforestation and monoculture by empowering individuals to restore biodiversity through sustainable, native plant gardening.

---

## 🌿 Features

- **AI-Powered Plant Recommendations**: Get personalized suggestions for native plants using Claude AI
- **User Authentication**: Secure JWT-based authentication system
- **Favorites Library**: Save and manage your favorite plants
- **Plant Filtering**: Filter saved plants by season
- **Plant Information**: Detailed care instructions, fun facts, and growing zones for each plant
- **Photo Integration**: Visual plant identification using the Trefle API

---

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern UI library
- **React Router DOM** - Client-side routing
- **Materialize CSS** - Material Design framework
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express 5** - Web application framework
- **MySQL** - Relational database
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing

### AI & APIs
- **Anthropic Claude Haiku 4.5** - Native plant recommendations
- **Trefle API** - Plant photo library

---

## 📁 Project Structure

```
green-hacks/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images and media
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS files
│   │   ├── utils/         # Utility functions
│   │   └── main.jsx       # App entry point
│   └── package.json
│
├── server/                # Backend Node.js application
│   ├── config/            # Database configuration
│   ├── routes/            # API routes and controllers
│   ├── schema/            # Database schemas
│   └── server.js          # Server entry point
│
└── README.md
```

---

## 🔐 API Endpoints

### Authentication
- `POST /auth/signup` - Register new user
- `POST /auth/login` - User login

### Plants
- `POST /api/search` - Get AI plant recommendations (Protected)

### Favorites Library
- `GET /library` - Get user's favorite plants (Protected)
- `POST /library` - Add plant to favorites (Protected)
- `DELETE /library/:id` - Remove plant from favorites (Protected)

---



### Deployment Platforms
- **Frontend**: Railway
- **Backend**: Railway
- **Database**: MySQL (Railway)

---

## 👥 Team

- **Helena Lian** - Creative Director | [LinkedIn](https://www.linkedin.com/in/helena-lian/)
- **Eddie Millsaps Jr** - Front End Engineer | [LinkedIn](https://www.linkedin.com/in/eddiemillsapsjr/)
- **Kevin Anderson** - AI Engineer | [LinkedIn](https://www.linkedin.com/in/kevin-anderson-06a09929b/)
- **Eduardo Sanchez** - Software Developer | [LinkedIn](https://www.linkedin.com/in/eduardo-san/)

---

## 🎯 Mission & Vision

**Vision**: A future where every space—urban or rural—thrives with native plants, pollinators, and harmony between people and nature.

**Mission**: Empower individuals and communities to combat deforestation and monoculture through sustainable, biodiversity-focused gardening.

**Values**: Sustainability, innovation, and inclusivity—believing that even small gardens can make a big difference.

---

## 📊 Impact Statistics

- **80%** of deforestation is caused by agricultural expansion
- **1M+** species are at risk of extinction due to habitat loss
- **45%** of the world's natural ecosystems are severely degraded
- **10×** increase in biodiversity when homeowners plant native species

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License.

---

## 🐛 Known Issues

- Localhost API calls may fail in production environments
- Some plant photos may not load if not available in Trefle API
  
---

## 📞 Support

For support, please reach out to the team through our LinkedIn profiles or open an issue in the GitHub repository.

---

## 🙏 Acknowledgments

- Anthropic for Claude AI API
- Trefle.io for plant photo database
- The open-source community for amazing tools and libraries

---

**Made with 💚 for the planet**

*Be Part of the Change - Plant Native, Grow Wild*
