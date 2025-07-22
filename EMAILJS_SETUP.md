# EmailJS Configuration Guide 📧

This guide will help you set up EmailJS integration for both the contact form and the interactive chatbot in your portfolio.

## 🚨 CRITICAL: Fix "undefined/api/contact" Error

If you're getting a **405 Method Not Allowed** error with URL containing "undefined", follow these steps:

### The Issue
Your `NEXT_PUBLIC_APP_URL` environment variable is undefined, causing:
```
POST https://your-domain.com/undefined/api/contact → 405 Error
```

### Solutions

#### Option 1: Pure EmailJS (Recommended)
**Remove the custom API dependency entirely - EmailJS handles everything client-side.**

1. **Remove API calls from your components:**
   ```javascript
   // ❌ Remove these lines:
   await axios.post(`${appUrl}/api/contact`, userInfo);
   await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, userInput);
   
   // ✅ Keep only EmailJS:
   await emailjs.send(serviceID, templateID, templateParams, options);
   ```

2. **Benefits:** Simpler setup, no server dependencies, works anywhere

#### Option 2: Fix Environment Variables (Current Implementation)
**Keep the hybrid approach with proper configuration.**

1. **Set environment variables correctly:**
   ```env
   # In .env.local (NOT .env)
   NEXT_PUBLIC_APP_URL=https://your-actual-domain.com
   ```

2. **For Vercel deployment:**
   - Go to Project Settings → Environment Variables  
   - Add: `NEXT_PUBLIC_APP_URL` = `https://your-project.vercel.app`

---

## 🚀 Quick Setup

1. **Create EmailJS Account**: Visit [emailjs.com](https://www.emailjs.com/) and sign up for a free account
2. **Configure Environment Variables**: Set up your `.env` file with the required credentials
3. **Create Email Template**: Design your email template to handle form data
4. **Optional**: Set up Telegram bot for notifications

---

## 📋 Step-by-Step Configuration

### Step 1: EmailJS Account Setup

1. Go to [emailjs.com](https://www.emailjs.com/) and create an account
2. Verify your email address
3. Log in to your EmailJS dashboard

### Step 2: Create Email Service

1. In your EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your email provider
5. **Copy the Service ID** - you'll need this for your `.env` file

### Step 3: Create Email Template

1. Click **"Email Templates"** in your dashboard
2. Click **"Create New Template"**
3. Use this template structure for maximum compatibility:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Portfolio Contact</title>
</head>
<body>
    <h2>{{subject}}</h2>
    
    <h3>Contact Details:</h3>
    <p><strong>Name:</strong> {{name}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    
    {{#if projectType}}
    <h3>Project Information:</h3>
    <p><strong>Project Type:</strong> {{projectType}}</p>
    <p><strong>Budget:</strong> {{budget}}</p>
    {{/if}}
    
    <h3>Message:</h3>
    <p>{{message}}</p>
    
    {{#if project_details}}
    <h3>Additional Details:</h3>
    <pre>{{project_details}}</pre>
    {{/if}}
    
    <hr>
    <p><em>Sent from Portfolio Website</em></p>
</body>
</html>
```

4. **Copy the Template ID** - you'll need this for your `.env` file

### Step 4: Get Public Key

1. Go to **"Account"** → **"General"** in your EmailJS dashboard
2. Find your **Public Key** (User ID)
3. **Copy the Public Key** - you'll need this for your `.env` file

### Step 5: Environment Variables

**IMPORTANT:** Create `.env.local` file (NOT `.env`) in your project root:

```env
# EmailJS Configuration (Required)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx

# App Configuration (Required for hybrid approach)
NEXT_PUBLIC_APP_URL=https://your-actual-domain.com
# For local development: NEXT_PUBLIC_APP_URL=http://localhost:3000
# For Vercel: NEXT_PUBLIC_APP_URL=https://your-project.vercel.app

# Optional: Telegram Bot Configuration  
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

### Step 6: Deployment Configuration

#### For Vercel:
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add each variable individually:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_xxxxx`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_xxxxx` 
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `xxxxxxxxxxxxx`
   - `NEXT_PUBLIC_APP_URL` = `https://your-project.vercel.app`

#### For Netlify:
1. Site Settings → Environment Variables
2. Add the same variables as above
3. Set `NEXT_PUBLIC_APP_URL` to your Netlify domain

#### For other platforms:
- Ensure all `NEXT_PUBLIC_*` variables are available at build time
- Set `NEXT_PUBLIC_APP_URL` to your actual deployed domain

---

## 🤖 Telegram Bot Setup (Optional)

For additional notifications via Telegram:

### Step 1: Create Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot` command
3. Follow instructions to create your bot
4. **Copy the Bot Token** provided by BotFather

### Step 2: Get Chat ID

1. Add your bot to a group or send it a message
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Look for the **chat_id** in the response
4. Add both values to your `.env` file

---

## 🧪 Testing Your Setup

### Test 1: Contact Form
1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the contact form
4. Check your email for the received message

### Test 2: Chatbot
1. Click the chatbot toggle button (bottom-right)
2. Go through the complete conversation flow:
   - Enter your name
   - Provide email address
   - Select project type
   - Choose budget range
   - Describe your project
3. Check both email and Telegram (if configured) for messages

---

## 🔧 Troubleshooting

### Issue: "405 Method Not Allowed" with "undefined/api/contact"

**Root Cause:** `NEXT_PUBLIC_APP_URL` environment variable is undefined.

**Quick Fixes:**

1. **Check environment variables:**
   ```bash
   # In your deployed app console:
   console.log('App URL:', process.env.NEXT_PUBLIC_APP_URL);
   ```

2. **Verify in hosting platform:**
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Ensure `NEXT_PUBLIC_APP_URL` is set to your actual domain

3. **Alternative - Remove API dependency:**
   ```javascript
   // In ChatBot.jsx and contact-without-captcha.jsx
   // Comment out or remove these lines:
   // const teleRes = await axios.post(`${appUrl}/api/contact`, userInfo);
   
   // Keep only EmailJS call:
   const res = await emailjs.send(serviceID, templateID, templateParams, options);
   ```

### Common Issues

**Email not sending:**
- Verify all environment variables are set correctly
- Check EmailJS dashboard for usage limits
- Ensure email service is properly authenticated
- Check browser console for error messages

**Template not working:**
- Verify template variables match the sent data
- Test template in EmailJS dashboard
- Check for typos in variable names

**Telegram not working:**
- Verify bot token and chat ID
- Ensure bot has permission to send messages
- Check API endpoint accessibility

### Deployment-Specific Issues

#### Vercel Deployment Issues
**Problem:** Environment variables not loading
**Solution:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Verify all variables are added for "Production" environment
3. Redeploy after adding variables

**Problem:** Build fails with "Cannot resolve module"  
**Solution:**
1. Ensure all dependencies are in `package.json`
2. Check that `@emailjs/browser` is installed: `npm install @emailjs/browser`

#### Netlify Deployment Issues
**Problem:** Functions not working
**Solution:**
1. Ensure API routes are in `pages/api/` for Next.js
2. Check build command and publish directory settings

#### Local vs Production Differences
**Local works, production doesn't:**
1. Check environment variable names (case-sensitive)
2. Verify domain in `NEXT_PUBLIC_APP_URL` matches deployed site
3. Check browser console for CORS errors
4. Ensure EmailJS domain restrictions allow your domain

### Debug Mode

Add these lines to see detailed logs in development:

```javascript
// In your component
console.log('EmailJS Config:', {
  serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
});
```

---

## 📊 Message Formats

### Contact Form Message
```
📬 New Contact Form Message from [Name]

📧 Email: [Email]

📝 Message:
[User Message]

📅 Received: [Timestamp]
🔗 Source: Contact Form
```

### Chatbot Message
```
🤖 New Chatbot Inquiry from [Name]

📧 Email: [Email]

🎯 Project Type: [Project Type]
💰 Budget: [Budget Range]

📝 Message:
[Project Details]

📅 Received: [Timestamp]
🔗 Source: Portfolio Chatbot
```

---

## 🎯 Template Variables Reference

Your EmailJS template can use these variables:

| Variable | Source | Description |
|----------|--------|-------------|
| `name` | Both | User's name |
| `email` | Both | User's email address |
| `message` | Both | User's main message |
| `subject` | Chatbot | Email subject line |
| `projectType` | Chatbot | Type of project selected |
| `budget` | Chatbot | Budget range selected |
| `project_details` | Chatbot | Formatted project information |

---

## 🔒 Security Best Practices

1. **Never commit `.env` files** to version control
2. **Use environment variables** for all sensitive data
3. **Set up domain restrictions** in EmailJS dashboard
4. **Monitor usage** to prevent abuse
5. **Implement rate limiting** if needed

---

## 📞 Support

If you encounter issues:

1. Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Verify your environment variables
3. Test in EmailJS dashboard
4. Check browser console for errors
5. Review this guide's troubleshooting section

---

## 🎉 Success!

Once configured, your portfolio will have:

- ✅ Working contact form
- ✅ Interactive chatbot with email integration
- ✅ Professional email notifications
- ✅ Optional Telegram notifications
- ✅ Detailed project information collection

Your visitors can now easily reach out to you through multiple engaging channels!