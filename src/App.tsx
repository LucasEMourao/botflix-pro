import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/globals';
import BackgroundAnimation from './components/layout/BackgroundAnimation';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/detail/MovieDetail';
import Favorites from './pages/Favorites';
import SearchHistory from './pages/SearchHistory';

function App() {
  return (
    <Router>
      <BackgroundAnimation>
        <GlobalStyles />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/history" element={<SearchHistory />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BackgroundAnimation>
    </Router>
  );
}

export default App;