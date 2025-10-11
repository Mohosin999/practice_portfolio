import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiNpm,
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiSwagger,
} from "react-icons/si";
import { RiGeminiFill, RiTailwindCssFill } from "react-icons/ri";
import { AiFillOpenAI } from "react-icons/ai";
import { TbBrandFramerMotion } from "react-icons/tb";

// =================== Overview ===================
export const overview = {
  title: "📝 Overview",
  text: `SmartGPT is a full-stack AI chatbot and image generation platform built with the MERN stack. It integrates OpenAI, Google Gemini, and ImageKit to provide intelligent, context-aware responses. Users can securely generate and store AI-powered chats and images, with authentication handled via JWT and bcrypt. The frontend uses React and Tailwind CSS for a modern UI, while the backend leverages Node.js, Express.js, and MongoDB for scalability. The platform also offers a well-documented RESTful API with Swagger for easy integration.`,
};

// =================== Approach ===================
export const approach = {
  title: "🧩 Approach",
  parts: [
    {
      subtitle: "Technology Selection:",
      points: [
        `🔹 Choose the MERN stack, OpenAI, Google Gemini, and ImageKit for secure storage and AI integration.`,
      ],
    },
    {
      subtitle: "System Architecture Design:",
      points: [
        `🔹 Plan frontend, backend, database, and API structure for scalability and maintainability.`,
      ],
    },
    {
      subtitle: "Implementation:",
      points: [
        `🔹 Build authentication, AI chat, image generation, chat management, and API endpoints.`,
      ],
    },
    {
      subtitle: "Documentation & Deployment:",
      points: [
        `🔹 Provide Swagger API docs, live demo, and proper environment setup.`,
      ],
    },
  ],
};

// =================== Features ===================
export const features = {
  title: "✨ Features",
  parts: [
    {
      subtitle: "Secure Authentication:",
      points: [
        `🔹 Register and log in using email and password.`,
        `🔹 Passwords are encrypted with bcrypt for security.`,
        `🔹 JSON Web Token (JWT) is used for authentication.`,
        `🔹 Without login, no user can access any feature.`,
      ],
    },
    {
      subtitle: "AI Chatbot:",
      points: [
        `🔹 Generate AI-powered responses for any text prompt.`,
        `🔹 Works like ChatGPT, giving intelligent answers instead of simple messaging.`,
        `🔹 Each conversation is saved securely in the user’s account.`,
      ],
    },
    {
      subtitle: "AI Image Generation:",
      points: [
        `🔹 Generate unique images from your own prompts.`,
        `🔹 Images are uploaded and stored using ImageKit.`,
      ],
    },
    {
      subtitle: "Chat Management:",
      points: [
        `🔹 Search Chats – Find specific conversations quickly.`,
        `🔹 Delete Chats – Remove unwanted chats individually.`,
        `🔹 Chat History – Access your past prompts and responses anytime.`,
      ],
    },
    {
      subtitle: "Backend API with Swagger:",
      points: [
        `🔹 RESTful API designed using Express.js and MongoDB.`,
        `🔹 Fully documented with Swagger UI.`,
        `🔹 Organized structure for scalability and easy integration.`,
      ],
    },
    {
      subtitle: "Dark / Light Mode:",
      points: [`🔹 Switch seamlessly between dark and light themes.`],
    },
  ],
};

// =================== SKILLS ===================
export const techStack = {
  title: "🛠️ Tech Stack",
  skills: [
    { label: "JavaScript", icon: <IoLogoJavascript /> },
    { label: "React", icon: <FaReact /> },
    { label: "React Router DOM", icon: <SiNpm /> },
    { label: "Redux Toolkit", icon: <SiRedux /> },
    { label: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { label: "shadcn/ui", icon: <SiShadcnui /> },
    { label: "Framer Motion", icon: <TbBrandFramerMotion /> },
    { label: "Express.js", icon: <SiExpress /> },
    { label: "MongoDB", icon: <SiMongodb /> },
    { label: "JWT", icon: <SiNpm /> },
    { label: "Swagger UI", icon: <SiSwagger /> },
    { label: "OpenAI", icon: <AiFillOpenAI /> },
    { label: "Google Gemini AI", icon: <RiGeminiFill /> },
    { label: "ImageKit", icon: <SiNpm /> },
    { label: "React Markdown", icon: <SiNpm /> },
    { label: "PrismJS", icon: <SiNpm /> },
    { label: "React Hot Toast", icon: <SiNpm /> },
    { label: "React Icons", icon: <SiNpm /> },
    { label: "Axios", icon: <SiNpm /> },
    { label: "Prop-Types", icon: <SiNpm /> },
  ],
};

// =================== Challenges & Solutions ===================
export const challengesAndSolutions = {
  title: "⚡ Challenges & Solutions",
  parts: [
    {
      issueName: "Issue 01: Route Not Found (404) in Swagger UI",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "When testing the registration API via Swagger, the request returned a `404 Not Found` error. The issue occurred because the route was either not defined correctly or mounted after middleware in the Express app.",
      solutionDescription:
        "The problem was fixed by ensuring the middleware (eg. express.json(), CORS, Swagger/OpenAPI validator) was applied before mounting the routes. Correct ordering guarantees that requests are parsed and routed properly.",
    },
    {
      issueName: "Issue 02: Undefined req.body (500 Internal Server Error)",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "After fixing the route, the API returned a 500 Internal Server Error with the message `Cannot destructure property 'name' of 'req.body' as it is undefined`. This happened because Express did not parse incoming JSON bodies before reaching the controller.",
      solutionDescription:
        "I forgot to define express.json() before the route. Ensured express.json() middleware is applied before routes. This allows Express to correctly parse JSON requests so req.body is available",
    },
    {
      issueName:
        "Issue 03: User.findUserByEmail is not a function (500 Internal Server Error)",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "During registration, calling userExist(email) function caused an error because the Mongoose `User` model does not have a findUserByEmail method. Initially, the code incorrectly called a non-existent model function.",
      solutionDescription:
        "Created a helper function findUserByEmail(email) and updated userExist function to call this helper instead of the model directly.",
    },
    {
      issueName: "Issue 04: Chat API Query Failure",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "The chat API query used id instead of _id, causing it to return null and fail to find the correct chat.",
      solutionDescription:
        "Updated the query to `Chat.findOne({ userId, _id: chatId })`, ensuring the correct chat is retrieved.",
    },
    {
      issueName: "Issue 05: AI Messages and Chat Title Not Updating Instantly",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "AI-generated messages and chat titles were not showing instantly in the app. Even though the data was created successfully, nothing appeared until the page was reloaded. The issue caused delayed updates and made the chat feel unresponsive.",
      solutionDescription:
        "I solved it by calling related functions like createChat, showAllChat, and selectChatById inside one main function. However, the real fix came after properly using async/await, which ensured all asynchronous operations completed in the right order, allowing messages and chat titles to appear instantly without reloading.",
    },
    {
      issueName: "Issue 06: Image Generation Blocked Due to Account Limits",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "While working with ImageKit, every request to generate an image through my endpoint was returning a 403 Forbidden error. I double-checked my code, API keys, and endpoint configuration; everything seemed perfectly fine, yet the error persisted.",
      solutionDescription:
        "The issue was due to exceeding ImageKit’s 650 monthly extension units in the free plan, which blocks extension requests. I resolved it by monitoring usage and planning to upgrade the plan if more capacity is needed.",
    },
    {
      issueName: "Issue 07: Persistent Login Error Toast Notification",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "After a failed login, the `Invalid credentials` toast reappeared when revisiting the login page even without a new login attempt. The issue happened because the error state in Redux persisted. This caused outdated error messages and a poor user experience.",
      solutionDescription:
        "Added a `clearError` action in the Redux slice and dispatched it after showing the toast, resetting the error state. This ensured notifications only appear in response to actual login attempts.",
    },
    {
      issueName: "Issue 08: Swagger File Not Loading in Vercel Deployment",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "Deploying my Express + Swagger API to Vercel failed because `./swagger.yaml` didn’t resolve correctly in the serverless environment, even though it worked locally. The API couldn’t load the Swagger file, causing runtime errors.",
      solutionDescription: `I fixed it by using path.join(__dirname, "../../swagger.yaml") to reference the file relative to the current module. This ensured the Swagger file loaded correctly in Vercel, allowing Swagger docs and OpenAPI validation to work without errors.`,
    },
  ],
};

// =================== Lessons Learned ===================
export const lessons = {
  title: "📖 Lessons Learned",
  lists: [
    "🔹 Correct middleware order and proper async handling are essential for reliable API behavior.",
    "🔹 Monitoring external service limits prevents unexpected feature blocks.",
    "🔹 Using correct database query fields and helper functions avoids silent failures.",
    "🔹 Deployment environments may require different file path handling for consistent functionality.",
  ],
};
