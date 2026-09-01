# 🏠 Quetta State — AI Real Estate Property Management System

> **Find Your Place. Find Your Future.**  
> *Smart Property Search for a Better Tomorrow.*

---

## 📌 Description

**Quetta State** is a modern, professional, AI-powered real-estate property management and intelligent lead qualification platform built specifically for the property ecosystem in **Quetta, Balochistan**.

The core problem this platform solves:
> **Real estate agents waste valuable time dealing with unqualified leads and manually searching for suitable properties.**

Quetta State provides an automated matching engine and lead qualification scoring model to connect buyers and renters with properties that match their **budget, preferred location, property type, requirements, and preferences**.

---

## 🚀 Key Features

* 🔎 **Intelligent Property Search & Multi-Filter**: Filter by purpose (Buy/Rent), 12+ Quetta localities (Jinnah Town, Samungli Road, Satellite Town, Airport Road, Brewery Road, Sariab Road, Cantt, Zarghoon Road, etc.), property type, bedrooms, and budget ranges in PKR.
* 🤖 **Smart AI Property Recommendations**: Input custom buyer requirements and receive 0–100% weighted match scores with humanized explanations of *why* each property matches and potential compromises.
* 🎯 **Automated Lead Qualification**: Weighted scoring engine (0–100) categorizing leads into **🔥 Hot Leads (80–100%)**, **🟡 Warm Leads (50–79%)**, and **❄️ Cold Leads (0–49%)**.
* 👥 **Agent Lead Management Dashboard**: Complete CRM view with live metric counters (Total Leads, Qualified Leads, Active Properties, Follow-ups Due), quick lead profiles, and instant property matching.
* 📅 **Property Visit Scheduling**: On-site visit booking with customer selection, property linking, calendar time slots, assigned agents, and auto-generated follow-up tasks.
* 📞 **Follow-up Reminders & Alerts**: Actionable overdue alert banners with instant "Done" completion and rescheduling flows.
* 🏘️ **Property Management CRUD**: Add new properties with photo URLs, edit specifications, delete with safety checks, and track verified titles.
* 🖼️ **Interactive Property Lightbox Gallery**: Full-size image viewing, thumbnail navigation, specifications, and neighborhood amenity breakdown.
* 🤖 **Custom Agent Integration Ready**: Default assistant widget removed with a dedicated integration slot in `index.html` allowing you to embed your own custom chatbot widget (e.g. n8n chat, Voiceflow, Botpress, Dialogflow, or custom backend agent).
* 📈 **Market Analytics & Visual Funnel**: Canvas-based charts showing lead conversion funnels, location demand percentages across Quetta, and lead quality breakdown.
* ❤️ **Favorites System**: Save and compare favorite properties across sessions.
* 🌙 **Dark & Light Mode**: Seamless theme switching with saved preference.
* 📱 **Fully Responsive Architecture**: Mobile hamburger menu, touch-friendly controls, and adaptive layout for mobile, tablet, laptop, and desktop screens.

---

## 🛠️ Technology Stack

* **HTML5**: Semantic web structure
* **CSS3**: Custom design tokens, glassmorphism, responsive grid & flexbox layouts, animations, and dark mode variables
* **Vanilla JavaScript**: Pure ES6+ state management, recommendation algorithms, lead scoring, and DOM manipulation
* **HTML5 Canvas API**: Custom interactive data visualizations
* **LocalStorage API**: Persistent client-side database storage across page refreshes

---

## 📐 Business Logic & Scoring Formulas

### 1. Property Recommendation Match Score (0–100%)
* **Budget Match**: 30%
* **Location Match**: 25%
* **Property Type**: 15%
* **Bedrooms**: 15%
* **Purpose (Buy/Rent)**: 10%
* **Keyword & Feature Match**: 5%

### 2. Lead Qualification Score (0–100)
* **Budget Confirmed**: +25
* **Location Confirmed**: +20
* **Property Type Specified**: +15
* **Buying Timeline**: +20
* **Contact Information (Phone & Email)**: +10
* **Specific Requirements Provided**: +10

---

## 🔌 Custom Agent Integration

To integrate your own agent (e.g. n8n chat, Voiceflow, Botpress, Tidio, or custom AI script), simply place your script tag or widget snippet right before `</body>` in `index.html`:

```html
<!-- Example Custom Agent Widget Embed -->
<script type="module">
  import Chatbot from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";
  Chatbot.createChat({
    webhookUrl: 'https://your-n8n-instance/webhook/your-chat-id'
  });
</script>
```

---

## 💻 Running the Project

1. Open `index.html` directly in any modern browser, or run a local dev server:
```bash
npm run dev
# or
npx serve
```
2. The application will start at `http://localhost:3000`.
