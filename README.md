TINYTRESSES SALON
README

PROJECT OVERVIEW
TinyTresses Salon is a toddler-focused hair salon website and AI-powered productivity assistant. It is designed to help parents explore toddler-friendly hair services, request appointments, learn about the salon, and contact the business. A private administration area helps the salon manage bookings and routine work with AI-assisted tools.

Brand tagline: Little Kids ♥ Big Styles

Project status: This README describes the intended project structure and setup. Features that depend on backend services, API credentials, or external integrations must be configured and tested before being used with real customers.

FEATURES

1. Public Website
- Responsive homepage featuring the TinyTresses Salon logo and brand colours.
- Toddler-focused salon service cards with editable descriptions, durations, and prices.
- Hairstyle gallery with category filters.
- Appointment request form.
- About, frequently asked questions, and contact sections.
- Mobile-friendly navigation and clear form feedback.

2. Booking Management
- Appointment requests with selected service, preferred date and time, and parent or guardian contact details.
- Appointment status management for authorised salon administrators.
- Availability checks and protection against double bookings when a backend is configured.
- Booking confirmation messages that reflect the actual saved booking status.

3. AI Productivity Assistant
- Parent Communication Generator: drafts appointment confirmations, reminders, rescheduling messages, thank-you notes, and other parent communications.
- AI Task Planner: helps organise daily and weekly tasks by priority, deadline, and estimated duration.
- Notes Summariser: extracts summaries, decisions, and action items from supplied business notes.
- AI Chatbot: answers questions using verified salon information and directs users to the salon when an answer is unavailable.

AI-generated content should be reviewed by a person before it is sent or acted upon.

4. Administration and Privacy
- Authenticated admin dashboard.
- Management of services, prices, appointment requests, and business settings.
- Protected customer data and role-appropriate access.
- Responsible handling of children's information and photographs.

TOOLS USED
The following tools are the planned implementation stack. Update this list if the actual project uses different tools.

- Lovable: AI-assisted application development and UI generation.
- React: component-based user interface.
- TypeScript: type checking for application code.
- Tailwind CSS: responsive styling and design system.
- Supabase (planned): database, authentication, and server-side functionality.
- AI model API (to be configured): powers the chatbot, message generator, task planner, and notes summariser.
- Git or GitHub (optional): source control and collaboration.

SETUP INSTRUCTIONS

1. Open the project
Create or open the TinyTresses Salon project in Lovable. If the code has been exported, clone or download the project repository to your computer.

2. Install dependencies
For an exported React project, install a current supported version of Node.js and npm, then run:

npm install

3. Configure environment variables
Add the required environment variables using your hosting platform's secret manager or a local .env file for development. For example:

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

These are example names only. Match them to the actual implementation.

If AI features use a server-side function, configure the AI provider key as a server-side secret. Do not put private API keys in client-side code or commit secrets to version control. Never commit a real .env file; add it to .gitignore.

4. Configure the backend
If using Supabase:
- Create a Supabase project.
- Create the required tables for services, appointments, tasks, and other data used by the app.
- Configure authentication for salon administrators.
- Enable and test row-level security policies.
- Add server-side validation for appointment availability and booking changes.
- Configure any server-side functions needed for AI requests.
- Add the required environment variables to development and deployment environments.

Use test data while developing. Do not use real customer or child information in sample records.

5. Add brand assets and business details
- Upload and use the approved TinyTresses Salon logo.
- Replace placeholder service prices, durations, operating hours, policies, contact details, and location with verified business information.
- Use approved images and obtain appropriate parental consent before publishing identifiable photographs of children.
- Replace sample testimonials with genuine, authorised customer feedback.

6. Run the development server
For a typical Vite-based React project, run:

npm run dev

Open the local URL printed in the terminal. Available commands may vary depending on the generated project; check package.json.

7. Build for production
Run the project's production build command, commonly:

npm run build

Run any configured tests and resolve build errors before deploying. Deploy using Lovable's supported publishing flow or the hosting provider configured for the project. Set production environment variables and verify authentication, database permissions, and AI integrations after deployment.

CONFIGURATION AND LIMITATIONS
- Actual booking availability requires a working backend and server-side conflict checks.
- AI features require a configured provider and secure server-side integration.
- Email, WhatsApp, calendar, maps, and payment features require their own valid integrations if enabled.
- Demo mode or placeholder data must be clearly identified and must not be presented as a live service.
- The project should not diagnose medical or scalp conditions or provide medical treatment advice.

RESPONSIBLE AI AND DATA PROTECTION
- Review AI-generated messages and plans before use.
- Do not allow the AI to invent prices, appointment times, salon policies, or customer reviews.
- Collect only information needed to provide the service.
- Restrict private booking records to authorised users.
- Obtain parental consent before publishing identifiable images of children.
- Provide a way to correct inaccurate salon information and follow applicable privacy requirements.

SUGGESTED PROJECT DELIVERABLES
- Responsive TinyTresses Salon website.
- Appointment request and admin management workflow.
- Toddler hairstyle gallery and service listings.
- AI parent communication generator.
- AI task planner.
- AI notes summariser.
- AI chatbot.
- This README file with project documentation and setup instructions.
