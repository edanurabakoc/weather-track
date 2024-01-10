import React, { useState, useEffect } from 'react';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Today from './components/today';
import Daily from './components/daily';
import useWeather from './hooks/useWeather';

function App() {
  const [states, functions] = useWeather();
  return (
    <div className="flex bg-gray-100">
      <Sidebar
        isSidebarOpen={states.isSidebarOpen}
        setIsSidebarOpen={functions.setIsSidebarOpen}
        setCity={functions.setCity}
        search={functions.search}
        city={states.city}
        setIsActiveCategory={functions.setIsActiveCategory}
        isActiveCategory={states.isActiveCategory}
        menuCities={states.menuCities}
        lastSearchedCities={states.lastSearchedCities} />

      {(states.isSearched == false && states.isSearching == false) &&
        <div className='flex-1 flex justify-center bg-white flex flex-col items-center'>
          <img className='max-h-[50%] self-center' src='search-bg.gif' />
          <h1>Search for a place...</h1>
        </div>
      }
      {
        (states.isNotFound === true || states.isSearching === true) &&
        <div className='flex-1  flex justify-center bg-white flex flex-col items-center'>
          <img className='max-h-[50%] self-center' src='not-found.gif' />
          <h1>{states.isNotFound ? "Not found!" : "Searching..."}</h1>
        </div>
      }

      <Today
        isSidebarOpen={states.isSidebarOpen}
        setIsSidebarOpen={functions.setIsSidebarOpen}
        isActiveCategory={states.isActiveCategory}
        isSearched={states.isSearched}
        isNotFound={states.isNotFound}
        isSearching={states.isSearching}
        icon={states.icon}
        moonset={states.moonset}
        uvIndex={states.uvIndex}
        humidity={states.humidity}
        moonrise={states.moonrise}
        pressure={states.pressure}
        windSpeed={states.windSpeed}
        deg={states.deg}
        minutesAgo={states.minutesAgo}
        formattedTime={states.formattedTime}
        formattedDate={states.formattedDate}
        todayHeaderImage={states.todayHeaderImage} />

      <Daily isActiveCategory={states.isActiveCategory}
        isSearched={states.isSearched}
        isNotFound={states.isNotFound}
        isSearching={states.isSearching}
        deg={states.deg}
        minutesAgo={states.minutesAgo}
        formattedTime={states.formattedTime}
        formattedDate={states.formattedDate}
        todayHeaderImage={states.todayHeaderImage}
        formatDate={functions.formatDate}
        getDayOfWeek={functions.getDayOfWeek}
        sevenDays={states.sevenDays}
        currentDesc={states.currentDesc}
        description={states.description} />

      <Footer />
    </div >
  );
}

export default App;
