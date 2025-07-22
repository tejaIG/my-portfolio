import axios from 'axios';
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat_id = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chat_id) {
    return NextResponse.json({
      success: false,
    }, { status: 200 });
  };

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
    // Format message based on whether it's from chatbot (has projectType/budget) or regular contact form
    let message;
    if (payload.projectType || payload.budget) {
      // Chatbot message format
      message = `🤖 New Chatbot Inquiry from ${payload.name}

📧 Email: ${payload.email}

🎯 Project Type: ${payload.projectType || 'Not specified'}
💰 Budget: ${payload.budget || 'Not specified'}

📝 Message:
${payload.message}

📅 Received: ${new Date().toLocaleString()}
🔗 Source: Portfolio Chatbot`;
    } else {
      // Regular contact form message format  
      message = `📬 New Contact Form Message from ${payload.name}

📧 Email: ${payload.email}

📝 Message:
${payload.message}

📅 Received: ${new Date().toLocaleString()}
🔗 Source: Contact Form`;
    }

    const res = await axios.post(url, {
      text: message,
      chat_id: process.env.TELEGRAM_CHAT_ID
    });

    if (res.data.ok) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      }, { status: 200 });
    };
  } catch (error) {
    console.log(error.response.data)
    return NextResponse.json({
      message: "Message sending failed!",
      success: false,
    }, { status: 500 });
  }
};