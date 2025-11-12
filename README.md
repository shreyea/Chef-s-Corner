# Chef's Corner

An AI-powered recipe generator that creates personalized recipes based on your ingredients. Built with React and Vite, featuring a modern, responsive interface.


## About the Project

Chef's Corner helps users generate recipes by simply adding ingredients they have on hand. The application uses AI to suggest creative and practical recipes, making meal planning easier and more inspiring.

## AI Integration

The application uses **Hugging Face Inference API** to generate recipes. The AI models are accessed via REST API calls with a fallback system for reliability:

- **Primary Model**: Mistral-7B-Instruct-v0.2
- **Fallback Models**: Mistral-7B-Instruct-v0.1, Zephyr-7b-beta, Llama-2-7b-chat-hf
- **API Method**: Uses `chatCompletion` with `textGeneration` as backup
- **Error Handling**: Comprehensive retry logic and user-friendly error messages

The AI receives a prompt with the user's ingredients and generates detailed recipes including title, ingredients list, instructions, and cooking tips.

## Tech Stack

### Frontend
- **React 19.1.0** - JavaScript library for building user interfaces
- **Vite 7.0.4** - Next-generation frontend build tool

### AI & APIs
- **@huggingface/inference 4.5.3** - Hugging Face API client for AI model integration
- **Mistral-7B Models** - Open-source language models for recipe generation

### UI & Styling
- **react-markdown 8.0.6** - Markdown rendering for formatted recipe display
- **CSS3** - Custom styling with CSS variables for theming
- **Responsive Design** - Mobile-first approach with media queries

