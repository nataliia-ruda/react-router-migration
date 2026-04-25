# Kotlin Homepage - React Router 7 SSR Migration

This project involves migrating a legacy Kotlin website homepage to a modern React application powered by React Router 7 Framework Mode with Server-Side Rendering (SSR).

The goal was to modernize the architecture while preserving the original design and interactive behavior.

## Project Overview

The original project is a simplified version of the homepage from https://kotlinlang.org, provided as part of a technical assignment by JetBrains.

### Key objectives:
- Migrate to React Router 7 Framework Mode
- Implement Server-Side Rendering
- Preserve visual appearance
- Preserve interactive functionality 

## Tech Stack

- React 19  
- React Router 7 (Framework Mode)  
- TypeScript  
- SCSS  
- @rescui  
- Vite  

## ⚙️ Features & Implementation

#### Server-Side Rendering (SSR)
- The page is rendered on the server before being sent to the client
- Fully functional after hydration on the client

#### Hydration
- Client-side React seamlessly takes over the server-rendered HTML
- Ensures interactive elements work as expected

#### UI Preservation
- The layout, styles, and components match the original project
- Maintained usage of `@rescui` components

#### Interactive Behavior
- Tab switching and UI interactions work identically to the original implementation


## Challenges & Learnings

- Migrating a legacy codebase to a modern routing system  
- Understanding and implementing SSR + hydration flow
- Ensuring visual consistency during refactoring  
- Working with Framework Mode in React Router 7

## Getting Started

### Prerequisites
- Node.js v22.11.0 or higher

### Installation

```bash
npm install

npm run dev
```

Once started, open your browser at:
http://localhost:5173
