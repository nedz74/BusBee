# BusBee Frontend Structure

This directory contains the organized frontend code for the BusBee React Native application.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── BusLogo.js      # Animated bus logo component
│   └── index.js        # Component exports
├── screens/            # Screen components
│   ├── SplashScreen.js # App splash screen
│   ├── HomeScreen.js   # Main home screen
│   └── index.js        # Screen exports
├── constants/          # App constants and configuration
│   ├── Colors.js       # Color palette
│   ├── AppConstants.js # App-wide constants
│   └── index.js        # Constant exports
├── assets/             # Static assets (images, fonts, etc.)
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── navigation/         # Navigation configuration
└── services/           # API services and external integrations
```

## Usage

### Importing Components
```javascript
import { BusLogo } from '../components';
import { SplashScreen, HomeScreen } from '../screens';
import { Colors, AppConstants } from '../constants';
```

### Adding New Components
1. Create your component in the appropriate directory
2. Export it from the corresponding `index.js` file
3. Import using the barrel export pattern

### Adding New Screens
1. Create your screen in `src/screens/`
2. Export it from `src/screens/index.js`
3. Add navigation logic in `src/navigation/`

## Best Practices

- Keep components small and focused on a single responsibility
- Use the barrel export pattern for cleaner imports
- Store all constants in the `constants/` directory
- Place reusable logic in `utils/` or custom hooks in `hooks/`
- Keep screen components in `screens/` and reusable UI in `components/`
