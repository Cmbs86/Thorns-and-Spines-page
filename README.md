# Thorns & Spines Tattoo Page

A static website for the Thorns and Spines Tattoo Shop, showcasing resident artists, upcoming guest artists, studio information, and contact details. Built with React, TailwindCSS, and Framer Motion for an engaging and modern user experience.

## Table of Contents

- [Thorns \& Spines Tattoo Page](#thorns--spines-tattoo-page)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Design and Branding](#design-and-branding)
  - [Folder Structure](#folder-structure)
  - [About the Project](#about-the-project)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Resident Artists**: Dedicated section showcasing profiles of resident tattoo artists, with links to their Instagram profiles and booking options based on each artist's preference.
- **Guest Artists**: Details and booking information for upcoming guest artists, including links to their Instagram profiles and preferred booking methods.
- **Interactive Design**: Smooth animations using Framer Motion.
- **Mobile-Friendly and Interactive Navigation**: Fully responsive design with TailwindCSS. Includes a `hamburger-react` menu for mobile navigation.
- **Localization**: Supports English and German translations using i18next.
- **Contact Page**: Includes a Google Maps integration pointing to the tattoo shop's location and a contact form powered by EmailJS for direct inquiries.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Languages**: TypeScript
- **Animations**: Framer Motion
- **Localization**: i18next
- **Bundler**: Vite

## Design and Branding

The design of the website follows the official color scheme and branding of the **Thorns and Spines Tattoo Shop** to ensure consistency with the shop’s identity and aesthetic.

- **Color Scheme**: The background, font colors, and other UI elements were inspired by the tattoo shop's official colors, creating a cohesive and authentic experience.
  - **Colors**:
    - `TNS Mint Cream`: #F0F5EB
    - `TNS Ash Gray Light`: #CAD3C2
    - `TNS Ash Gray`: #AFBCA1
    - `TNS Ebony`: #606954
    - `TNS Ebony Dark`: #485040
- **Typography**: The font used is **Quicksand**, a modern and legible typeface that aligns with the tattoo shop's bold and artistic style. The font is applied across the website for a consistent reading experience.

These design choices were implemented using TailwindCSS, which allowed for flexible customization and ensured consistency across the entire website.

## Folder Structure

```plaintext
Thorns-and-Spines-page
├── node_modules/          # Auto-generated folder for project dependencies
├── public/                # Public assets available to the browser
├── src/                   # Main source code directory
│   ├── assets/            # Images, fonts, and other static assets
│   ├── components/        # Reusable React components
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout components for page structure
│   ├── locales/           # Translation files for i18next
│   ├── pages/             # Individual page components
│   ├── utils/             # Utility functions and helpers
│   ├── App.tsx            # Main App component
│   ├── custom.d.ts        # Image module declaration
│   ├── index.css          # TailwindCSS configuration and global styles
│   ├── main.tsx           # Application entry point
│   ├── routes.ts          # Centralized route configuration
│   ├── vite-env.t.ts      # TypeScript declarations for Vite environment variables
├── .env                   # Environment variables file
├── .gitignore             # Git configuration to exclude files/folders
├── eslint.config.js       # ESLint configuration for linting
├── index.html             # Entry point for the application
├── LICENSE                # Project license
├── package-lock.json      # Auto-generated dependency tree for npm
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.js         # Vite configuration file
```

## About the Project

The **Thorns and Spines Tattoo Shop** website was designed and developed by **[Carlos Brito de Sousa]** as a client project. Initially developed with JavaScript, the project was later refactored to TypeScript to enhance type safety and maintainability. I handled everything from conceptualizing the user interface to coding the React components, customizing TailwindCSS, integrating animations with Framer Motion, and working with TypeScript for better scalability and error prevention. This project was built to showcase the tattoo shop's offerings and provide an engaging online experience for potential clients.

## Contributing

Thank you for your interest in my project! At this time, this project is primarily intended to showcase my work and skills. While I appreciate the enthusiasm for contributing, I’m not currently accepting external contributions. Please feel free to reach out if you have any questions or would like to discuss the project further!

## License

This project is licensed under a proprietary license. You are welcome to view the code, but you are not permitted to modify, fork, or redistribute it. Contributions are not accepted at this time.

For more information, see the [LICENSE](LICENSE) file.
