import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGoogle } from "react-icons/fa";
import { SiNpm, SiMui } from "react-icons/si";

// =================== Overview ===================
export const overview = {
  title: "📝 Overview",
  text: `Clean YouTube is a React-based web application designed to enhance your YouTube video-watching experience by providing a clean, ad-free, and distraction-free interface. Users can efficiently manage playlists, track recent activities, and save their favorite playlists for a seamless and enjoyable experience.`,
};

// =================== Problem Statement ===================
export const problemStatement = {
  title: "❗ Problem Statement",
  text: `YouTube’s default interface, while feature-rich, can often be overwhelming and distracting for users. Ads, recommendations, and cluttered layouts disrupt the viewing experience, and managing multiple playlists efficiently can be challenging. Users lack a simple, organized, and distraction-free platform to focus solely on their selected videos.`,
};

// =================== Objective ===================
export const objective = {
  title: "🎯 Objective",
  text: `To develop a clean, user-friendly web application that provides an ad-free and distraction-free YouTube experience, allowing users to efficiently manage playlists, track recently accessed content, and save favorites for a seamless and enjoyable viewing experience.`,
};

// =================== Approach ===================
export const approach = {
  title: "🧩 Approach",
  parts: [
    {
      subtitle: "Research:",
      points: [
        `🔹 Based on personal experiences of decreased attention and productivity due to YouTube ads and overly engaging content, the need for a distraction-free viewing experience has been identified.`,
        `🔹 Although I could have optimized the process by fetching only a subset of videos initially and then requesting the rest, for now, I chose to fetch all videos at once. This optimization can be implemented later.`,
      ],
    },
    {
      subtitle: "Design & UI/UX:",
      points: [
        `🔹 Built a clean and intuitive interface using React.js and Material UI.`,
        `🔹 Focused on minimalism and responsiveness for all devices.`,
        `🔹 Designed playlist, favorites, and recent history sections for easy navigation.`,
      ],
    },
    {
      subtitle: "Implementation:",
      points: [
        `🔹 Integrated React YouTube to embed videos without ads or clutter.`,
        `🔹 Used YouTube Data API to fetch playlist and video data dynamically.`,
        `🔹 Managed app state efficiently with EasyPeasy for playlist, favorites, and recent history tracking.`,
        `🔹 Implemented playlist addition by URL or ID or by search, favorites management, and permanent deletion functionality.`,
      ],
    },
  ],
};

// =================== Features ===================
export const features = {
  title: "✨ Features",
  parts: [
    {
      subtitle: "Add Playlists by ID, URL, or Search:",
      points: [
        `🔹 Users can quickly add a playlist by pasting its YouTube URL or Playlist ID.`,
        `🔹 Users can also search directly within the app to find and add their own playlists.`,
      ],
    },
    {
      subtitle: "Favorites Management:",
      points: [
        `🔹 Add frequently watched playlists to a favorites section for quick access.`,
        `🔹 Remove playlists from favorites as needed.`,
      ],
    },
    {
      subtitle: "Recent Playlist Tracking:",
      points: [
        `🔹 Automatically tracks and displays recently accessed playlists and videos for easy revisiting.`,
      ],
    },
    {
      subtitle: "Permanent Playlist Deletion:",
      points: [
        `🔹 Remove unwanted playlists permanently to keep your library organized and clutter-free.`,
      ],
    },
    {
      subtitle: "Live Video Search:",
      points: [
        `🔹 Users can search in real-time within a playlist to quickly find a specific video.`,
      ],
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
    { label: "EasyPeasy", icon: <SiNpm /> },
    { label: "React YouTube", icon: <SiNpm /> },
    { label: "YouTube Data API", icon: <FaGoogle /> },
    { label: "Material UI", icon: <SiMui /> },
    { label: "Axios", icon: <SiNpm /> },
    { label: "Prop-Types", icon: <SiNpm /> },
  ],
};

// =================== Challenges & Solutions ===================
export const challengesAndSolutions = {
  title: "⚡ Challenges & Solutions",
  parts: [
    {
      issueName: "Issue 01: Duplicate Success Messages When Adding a Playlist",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "When adding a new playlist, the success notification was triggered twice. Before the playlist was fetched, and after the playlist was successfully displayed. This created confusion and an inconsistent user experience.",
      solutionDescription:
        "Refactored the playlist addition handler to use async/await, ensuring that the success message is displayed only after the playlist fetch operation is completed successfully. This provided users with a clear and accurate confirmation flow.",
    },
    {
      issueName: "Issue 02: Low-Resolution Playlist Thumbnails",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "Default playlist thumbnails were displayed in low resolution, which negatively affected the overall visual quality and user experience.",
      solutionDescription:
        "Replaced the default playlist thumbnail with the first video’s thumbnail, which provides a higher resolution image. This improved the visual presentation and made the interface more appealing and professional.",
    },
    {
      issueName: "Issue 03: Excessive API Calls on Playlist Page Visits",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "Every time users navigated to the playlist page, a new API request was made to fetch playlist data. This caused slower performance due to repeated network calls, and increased and unnecessary load on the YouTube Data API.",
      solutionDescription:
        "Implemented local storage caching for playlist data. On the first visit, playlist data is fetched from the API and stored locally. On subsequent visits, the app retrieves data directly from local storage instead of making redundant API calls. This optimization significantly reduced API usage, improved performance, and provided a faster, smoother user experience.",
    },
    {
      issueName: "Issue 04: YouTube Data API 403 Forbidden Error",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "After a few months, the previously working YouTube Data API integration suddenly started failing. Even though the code and API key remained unchanged, every request to fetch playlists returned a 403 Forbidden error.",
      solutionDescription:
        "The issue occurred because the YouTube Data API v3, previously enabled, had become disabled for unknown reasons. After logging into Google Cloud Console → APIs & Services → Enabled APIs & Services, I found it disabled, re-enabled it, and retested the integration, the requests then worked successfully.",
    },
    {
      issueName: "Issue 05: AI Generating Invalid Playlist IDs",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "Attempted to integrate Google Gemini AI into the app to allow users to search for playlist links or IDs directly. While Gemini’s official website returned valid playlist links during testing, the implementation inside the app produced invalid, AI-generated playlist IDs instead of fetching real ones. This happened because Gemini, when used via API, cannot directly query YouTube’s database and instead generated IDs based on patterns, leading to unusable results.",
      solutionDescription:
        "Replaced the AI-based search with the YouTube Data API Search endpoint to reliably fetch playlist IDs, ensuring users always receive valid IDs directly from YouTube. This made the search functionality accurate, consistent, and production-ready while eliminating reliance on AI-generated results, providing a more dependable user experience.",
    },
  ],
};

// =================== Lessons Learned ===================
export const lessons = {
  title: "📖 Lessons Learned",
  lists: [
    "🔹 Proper use of async/await ensures predictable and user-friendly operations.",
    "🔹  Implementing local storage caching minimized redundant API calls, reduced server load, and delivered faster navigation.",
    "🔹 Regularly verifying API status prevents unexpected service disruptions.",
    "🔹 Using high-quality thumbnails improves visual appeal and professionalism.",
    "🔹 Relying on official API endpoints instead of AI-generated data ensures accuracy and reliability.",
  ],
};
