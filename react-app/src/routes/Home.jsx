import React from 'react'
import HomePageImage from '../components/HomePageImage';

export default function Home(props) {

  const goToTicketPage = () => {
    props.history.push('/ticket');
  }
  
  return (
    <div className="homepage">
      <HomePageImage />
      <div className="homepage-main">
        <button onClick={goToTicketPage}>Get Started!</button>
      </div>
    </div>
  )
};
