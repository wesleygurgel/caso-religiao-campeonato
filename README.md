# Fiscall

A modern financial management application built with React, TypeScript, and Vite.

## Technologies Used

### Core Technologies
- **Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **CSS Framework**: TailwindCSS

### Libraries
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
fiscall/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── App.tsx          # Main App component with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles and Tailwind directives
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/fiscall.git
   cd fiscall
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.
