import React from 'react';

import Banner from './components/Banner/Banner';
import PopularCities from './components/PopularCities/PopularCities';
import Footer from './components/Footer/Footer';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <div className="App">
      <Banner />
      <PopularCities />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
