# E-Vehicle Rental Website (Friends Motors)

A modern React-based e-vehicle rental platform with a comprehensive car booking system.

## Features
- **Car Rental System**: Browse and book electric vehicles
- **Interactive Hero Slider**: Showcase featured vehicles
- **Car Catalog**: Detailed car listings with specifications
- **Booking System**: Complete reservation functionality
- **Blog Section**: Latest news and updates
- **User Testimonials**: Customer feedback and reviews
- **Responsive Design**: Works on all devices
- **Payment Integration**: Multiple payment methods

## Project Structure
```
src/
├── components/
│   ├── Header/          # Navigation component
│   ├── Footer/          # Footer component
│   ├── Layout/          # Main layout wrapper
│   ├── Helmet/          # Page head management
│   └── UI/              # Reusable UI components
├── pages/               # Main application pages
├── assets/              # Images and static data
├── styles/             # CSS stylesheets
└── routers/            # Application routing
```

## Key Components
- **HeroSlider**: Dynamic vehicle showcase
- **CarItem**: Individual car display cards
- **BookingForm**: Vehicle reservation form
- **FindCarForm**: Search and filter functionality
- **ServicesList**: Available services display
- **PaymentMethod**: Payment options interface

## Technologies Used
- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - UI framework
- **Reactstrap** - Bootstrap components for React
- **React Slick** - Carousel/slider functionality
- **Remix Icon** - Icon library

## Setup Instructions
1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   Application will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Run Tests**
   ```bash
   npm test
   ```

## Available Scripts
- `npm start` - Runs development server
- `npm build` - Creates production build
- `npm test` - Runs test suite
- `npm eject` - Ejects from Create React App

## Pages
- **Home** - Landing page with hero section
- **About** - Company information
- **Car Listing** - Browse all vehicles
- **Car Details** - Individual vehicle details
- **Blog** - Latest articles and news
- **Blog Details** - Individual article view
- **Contact** - Contact information and form

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes
- Built with Create React App
- Uses functional components with hooks
- Responsive design with Bootstrap
- Modular component architecture
- Clean separation of concerns
