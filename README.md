# LinguaForge 🌐⚡

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_DEPLOY_ID/deploy-status)](https://app.netlify.com/sites/YOUR_SITE_NAME/deploys)
[![React](https://img.shields.io/badge/React-18.3.1-%2361DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-%23646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-%2338B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern web application that combines AI-powered text translation with secure string generation, built for developers and language enthusiasts.

## ✨ Features

### 🤖 AI Text Translator
- **100+ Languages**: Translate text across a vast array of languages with professional accuracy
- **Real-time Translation**: Instant AI-powered translations with smart context understanding
- **Professional Accuracy**: Enterprise-grade translation quality powered by Deep Translate API
- **Beautiful Interface**: Modern, responsive design with smooth animations

### 🔐 Secure String Generator
- **Military-grade Security**: Cryptographically secure random string generation
- **Customizable Length**: Generate strings of any desired length
- **One-click Generation**: Instant generation with copy-to-clipboard functionality
- **History Tracking**: Keep track of previously generated strings

### 🎨 Modern UX
- **Responsive Design**: Flawless experience on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Accessible UI**: Built with Radix UI components for full accessibility
- **Dark/Light Mode**: Automatic theme switching based on system preferences

## 🚀 Demo

Check out the live demo: [LinguaForge Live](https://linguaforge.netlify.app/)

### Screenshots
*(Add your screenshots here)*
- Home page with feature showcase
- Translation interface
- String generator interface
- Responsive mobile views

## 🛠️ Installation

### Prerequisites
- Node.js 16+ 
- npm, yarn, or pnpm
- RapidAPI account (for translation features)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/linguaforge.git
   cd linguaforge
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_RAPIDAPI_KEY=your_rapidapi_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 API Configuration

### Deep Translate API Setup

1. **Create RapidAPI Account**
   Visit [RapidAPI](https://rapidapi.com/) and create a free account

2. **Subscribe to Deep Translate**
   Go to the [Deep Translate API](https://rapidapi.com/gatzuma/api/deep-translate1) page
   - Click "Subscribe to Test"
   - Choose the free plan (200,000 characters/month)

3. **Get Your API Key**
   - Navigate to your RapidAPI dashboard
   - Copy your API key from the "Authorization" section

4. **Configure Environment**
   Add your API key to the `.env` file:
   ```env
   VITE_RAPIDAPI_KEY=your_actual_api_key_here
   ```

## 📖 Usage

### Translation Feature
1. Navigate to the **Translate** section
2. Enter text in the input field
3. Select target language from the dropdown
4. Click "Translate" to get instant results
5. Copy translated text with the copy button

### String Generation
1. Go to the **Generate** section
2. Set desired string length (default: 16 characters)
3. Click "Generate" to create a secure random string
4. Use the copy button to easily use the generated string

## 🏗️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI component primitives
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

### Backend & Deployment
- **Express.js** - Server framework
- **Netlify Functions** - Serverless functions
- **Netlify** - Hosting and deployment platform

### Development Tools
- **TypeScript** - Type safety (in client directory)
- **Prettier** - Code formatting
- **Vitest** - Testing framework

## 📁 Project Structure

```
linguaforge/
├── client/                 # TypeScript client application
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── src/                  # JavaScript client application
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   └── utils/           # Utility functions
├── server/              # Express server
│   └── routes/          # API routes
├── netlify/             # Netlify functions
│   └── functions/       # Serverless functions
├── public/              # Static assets
└── shared/              # Shared utilities
```

## 🚀 Deployment

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build:client`
   - Set publish directory: `dist/spa`
   - Add environment variable: `VITE_RAPIDAPI_KEY`

3. **Configure Redirects**
   The `netlify.toml` file is already configured for proper routing

### Environment Variables for Production
Ensure these are set in your Netlify dashboard:
- `VITE_RAPIDAPI_KEY` - Your RapidAPI key for translation services

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and patterns
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and code comments
- **Issues**: Open a GitHub issue for bugs or feature requests
- **Email**: support@linguaforge.app
- **Live Chat**: Available on the support page

### Common Issues

**Translation not working?**
- Ensure your RapidAPI key is correctly set in environment variables
- Check your API quota on RapidAPI dashboard
- Verify internet connection

**Build errors?**
- Clear node_modules and reinstall dependencies
- Check Node.js version compatibility

## 🙏 Acknowledgments

- **Deep Translate API** - Powering our translation features
- **RapidAPI** - API marketplace and management
- **React Community** - Amazing ecosystem and tools
- **Tailwind CSS** - Beautiful utility-first CSS framework
- **Netlify** - Excellent hosting and serverless platform

---

**LinguaForge** - Where language meets technology. Built with ❤️ for the developer community.

*Star this repo if you find it useful! ⭐*
