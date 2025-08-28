# Life Counter

> A modern web-based life counter for games such as, but not limited to, _Magic the Gathering_.

## Recent Modernization Updates (v0.2.0)

This project has been fully modernized with the following improvements:

### 🚀 Technology Updates

- **React 18**: Upgraded from React 16.8.6 to React 18.2.0 with new createRoot API
- **React Router v6**: Migrated from deprecated @reach/router to react-router-dom v6
- **React Scripts 5**: Updated build tooling to latest version
- **Dependencies**: All dependencies updated to latest stable versions

### 🔧 Code Modernization

- **Modern React Patterns**: All components use modern hooks and functional components
- **Performance Optimizations**: Added useCallback and useMemo for better performance
- **Accessibility**: Added proper ARIA labels, keyboard navigation, and semantic HTML
- **Code Quality**: Removed unused variables and imports, fixed ESLint warnings
- **Type Safety**: Enhanced PropTypes validation

### 🎨 User Experience Improvements

- **Keyboard Navigation**: All interactive elements support keyboard navigation
- **Accessibility**: Screen reader friendly with proper ARIA attributes
- **Theme Switching**: Enhanced theme toggle with better visual feedback
- **Responsive Design**: Maintained mobile-first responsive design

### 🛠 Technical Improvements

- **Session Management**: Improved state management with modern React patterns
- **URL Parameters**: Better handling of URL search parameters with useSearchParams
- **Component Structure**: Cleaner component architecture with better separation of concerns
- **Error Handling**: More robust error handling and loading states

## Features

- ✅ Support for 1-6 players
- ✅ Customizable starting life totals (20, 30, 40, 60, or custom)
- ✅ Touch-friendly interface optimized for mobile devices
- ✅ Dark/light theme toggle
- ✅ Session persistence using browser storage
- ✅ Responsive design for various screen sizes
- ✅ Keyboard navigation support
- ✅ Accessibility features

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Browser Support

This project supports all modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
