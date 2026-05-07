# Landing Page Using MUI  Project

A React application built with Vite and Material-UI (MUI) that showcases a responsive card layout with multiple sections.

## Features

- **Responsive Design**: Cards adapt to different screen sizes (3 cards per row on desktop, stacked on mobile)
- **Material-UI Components**: Uses MUI's Grid, Box, and other components for consistent styling
- **FontAwesome Icons**: Integrated FontAwesome icons for enhanced UI elements
- **Multiple Sections**: Includes Header, Hero Section, Card Container, Features, Call-to-Action, and Footer
- **Modern React**: Built with React 19 and Vite for fast development

## Components

- `CardCont`: Main container displaying cards in a responsive grid layout
- `OneCard`: Individual card component
- `Header`: Navigation header
- `Herosection`: Hero banner section
- `FeaturesSection`: Features showcase
- `Cta`: Call-to-action section
- `Footer`: Site footer

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Day01/mui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```





## Technologies Used

- **React 19**: Latest React with modern features
- **Vite**: Fast build tool and development server
- **Material-UI (MUI)**: React components implementing Google's Material Design
- **FontAwesome**: Icon library for React
- **Emotion**: CSS-in-JS styling solution (used by MUI)

## Responsive Behavior

- **Mobile (xs)**: Cards stack vertically (1 per row)
- **Small screens (sm)**: Cards stack vertically (1 per row)
- **Medium screens (md)**: 3 cards per row
- **Large screens (lg+)**: 3 cards per row with proper spacing

## Customization

The card layout can be easily customized by modifying the `CardCont.jsx` component:

- Change the number of cards by updating the array in the map function
- Adjust spacing using the `spacing` prop on the Grid container
- Modify padding using the `px` prop
- Customize card content in the `OneCard` component

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Test your changes
6. Submit a pull request

## License

This project is private and for educational purposes.
