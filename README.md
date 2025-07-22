
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

This portfolio includes both a traditional contact form and an interactive AI chatbot for collecting user inquiries. Both features require EmailJS configuration.

**For detailed setup instructions, see: [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)**

### Quick Setup

1. Create account at [emailjs.com](https://www.emailjs.com/) (200 emails/month in free tier)
2. Set up email service and template (see detailed guide)
3. Create `.env` file from `.env.example`:

```env
# Required: EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx

# Required: App Configuration  
NEXT_PUBLIC_APP_URL="http://127.0.0.1:3000"

# Optional: Site Analytics
NEXT_PUBLIC_GTM=

# Optional: Contact Form Captcha
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=

# Optional: Telegram Notifications
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

### Features Available

- **📝 Contact Form**: Traditional form in the contact section
- **🤖 AI Chatbot**: Interactive chatbot with step-by-step data collection
  - Collects name, email, project type, budget, and details
  - Humorous conversation flow
  - Validates email addresses
  - Sends structured notifications

Both features send formatted messages to your email and optionally to Telegram.

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
