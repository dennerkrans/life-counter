# Life Counter

> A modern web-based life counter for games such as, but not limited to, _Magic the Gathering_.

## Features

- ✅ Support for 1-6 players
- ✅ Customizable starting life totals (20, 30, 40, 60, or custom)
- ✅ Touch-friendly interface optimized for mobile devices
- ✅ Dark/light theme toggle
- ✅ Session persistence using browser storage
- ✅ Responsive design for various screen sizes
- ✅ Keyboard navigation support
- ✅ Full accessibility features

## Technology Stack

This project is built with modern web technologies:

- **React 18** - Modern React with hooks and functional components
- **React Router v6** - Client-side routing for single-page application
- **Create React App** - Build tooling and development server
- **CSS Custom Properties** - Dynamic theming system
- **Progressive Web App** - Service worker for offline functionality

## Architecture

### Component Structure

- **App** - Main application router and theme provider
- **Home** - Player count and starting life selection
- **Session** - Game session with life counters for each player
- **Player** - Individual player life counter with editable name
- **Range** - Reusable selection component for options
- **ThemeSwitch** - Dark/light mode toggle

### State Management

- Modern React hooks (useState, useEffect, useCallback, useMemo)
- URL parameters for session configuration
- Browser sessionStorage for game persistence
- Functional state updates for performance optimization

### Accessibility

- Full keyboard navigation support
- ARIA labels and semantic HTML
- Screen reader compatibility
- Focus management for interactive elements

## Getting Started

### Prerequisites

- Node.js (version 22.14.0 or higher)
- npm

**Note**: This project includes a `.nvmrc` file. If you use nvm, you can run `nvm use` to automatically switch to the correct Node.js version.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dennerkrans/life-counter.git
cd life-counter
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Deployment

This project is configured for deployment on Vercel with the included `vercel.json` configuration file. The configuration handles:

- Static asset optimization with long-term caching
- Single-page application routing
- Favicon and manifest file serving
- Service worker caching strategies

To deploy on Vercel:

1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## Browser Support

This application supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## How to Use

1. **Select Players**: Choose the number of players (1-6) using the player count selector
2. **Set Starting Life**: Select a preset life total (20, 30, 40, 60) or enter a custom amount
3. **Start Game**: Click "Play" to begin a new game session
4. **Track Life**: Use the + and - buttons to adjust each player's life total
5. **Edit Names**: Click on player names to edit them
6. **Theme Toggle**: Use the theme switch button to toggle between light and dark modes

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
