
---
# [Built Portfolio With GitHub ](https://github.com/said7388/github-portfolio)  

---

# Developer Portfolio

### Are you struggling to create a professional portfolio website? Look no further! You can use the Developer Portfolio template and create your very own personalized portfolio today! My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

# Demo :movie_camera:

![](./public/image/screen.png)

## View live preview [here](https://abusaid.netlify.app/).

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev -- --host
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

## 📧 EmailJS & Contact Setup

This portfolio includes both a traditional contact form and an interactive AI chatbot for collecting user inquiries. Both features use EmailJS for email delivery.

**For detailed setup instructions, see: [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)**

### 🚨 IMPORTANT: Fix for "undefined/api/contact" Error

If you're getting a **405 Method Not Allowed** error with URL containing "undefined", you have two options:

#### Option 1: Pure EmailJS (Recommended - No Server Required)
Just use EmailJS directly from the client. **No need for `/api/contact` route**.

#### Option 2: Hybrid Approach (Current Implementation)
EmailJS + custom API route for additional features (Telegram notifications, logging).

### ⚙️ Environment Variables Setup

**Create `.env.local` file** (not `.env`) in your project root:

```env
# Required: EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx

# Required for Hybrid Approach: Set your actual domain
NEXT_PUBLIC_APP_URL=https://your-domain.com
# For local development: NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Site Analytics
NEXT_PUBLIC_GTM=

# Optional: Contact Form Captcha
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=

# Optional: Telegram Bot (for hybrid approach)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

### 🔧 Deployment Configuration

**For Vercel:**
1. Go to Project Settings → Environment Variables
2. Add all `NEXT_PUBLIC_*` variables
3. Set `NEXT_PUBLIC_APP_URL` to your actual domain: `https://your-domain.vercel.app`

**For other platforms:**
- Ensure all environment variables are set in your hosting platform
- `NEXT_PUBLIC_APP_URL` must match your deployed domain

### 🎯 How It Works

#### EmailJS Flow (Client-Side)
```javascript
// Direct EmailJS call - no server needed
await emailjs.send(serviceID, templateID, templateParams, options);
```

#### Hybrid Flow (Current Implementation)  
```javascript
// 1. Send via EmailJS (client-side)
await emailjs.send(serviceID, templateID, templateParams, options);

// 2. Send to custom API for Telegram notifications
await axios.post(`${NEXT_PUBLIC_APP_URL}/api/contact`, userInfo);
```

### ✨ Features Available

- **📝 Contact Form**: Traditional form in the contact section
- **🤖 AI Chatbot**: Interactive chatbot with step-by-step data collection
  - Collects name, email, project type, budget, and details  
  - Humorous conversation flow
  - Validates email addresses
  - Sends structured notifications

Both features send formatted messages to your email and optionally to Telegram.

### 🐛 Troubleshooting Common Issues

#### Issue: "405 Method Not Allowed" with "undefined/api/contact"
**Problem:** `NEXT_PUBLIC_APP_URL` environment variable is missing or not set correctly.

**Solutions:**
1. **Option A - Pure EmailJS (Remove API dependency):**
   ```javascript
   // Remove this line from your components:
   await axios.post(`${appUrl}/api/contact`, userInfo);
   
   // Keep only:
   await emailjs.send(serviceID, templateID, templateParams, options);
   ```

2. **Option B - Fix Environment Variable:**
   ```bash
   # In .env.local file:
   NEXT_PUBLIC_APP_URL=https://your-actual-domain.com
   ```

#### Issue: EmailJS not sending emails
**Check these items:**
- ✅ Environment variables are set in `.env.local` 
- ✅ EmailJS service is connected and working
- ✅ Template ID exists and is published
- ✅ Public key is correct
- ✅ Browser console shows no CORS errors

#### Issue: Build failing on Vercel/Netlify
**Common fixes:**
- Set all environment variables in hosting platform settings
- Use `NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app` (your actual domain)
- Verify template variables match your EmailJS template

#### Issue: Form submits but no email received  
**Debug steps:**
1. Check EmailJS dashboard for sent emails count
2. Verify email service is properly connected
3. Check spam/junk folder
4. Test EmailJS template directly in dashboard

### 🧪 Testing Your Setup

1. **Local Testing:**
   ```bash
   npm run dev
   # Test both contact form and chatbot
   ```

2. **Production Testing:**
   - Deploy with correct environment variables
   - Test on actual domain
   - Check browser console for errors

### Then, Customize data in the `utils/data` [folder](https://github.com/said7388/developer-portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "ABU SAID",
  profile: "/profile.png",
  designation: "Full-Stack Software Developer",
  description: "My name is ABU SAID....",
  email: "abusaid7388@gmail.com",
  phone: "+8801608797655",
  address: "Dhaka, Bangladesh",
  github: "https://github.com/said7388",
  facebook: "https://www.facebook.com/abusaid.riyaz/",
  linkedIn: "https://www.linkedin.com/in/abu-said-bd/",
  twitter: "https://twitter.com/said7388",
  stackOverflow: "https://stackoverflow.com/users/16840768/abu-said",
  leetcode: "https://leetcode.com/said3812/",
  devUsername: "said7388",
  resume: "...",
};
```

`devUsername` Used for fetching blog from `dev.to`.

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---
