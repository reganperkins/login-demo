import * as React from 'react';
import './Home.scss';

const Home: React.SFC = () => {
  return (
    <iframe
     title="rick-roll"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      frameBorder="0"
      allow="autoplay;"
      allowFullScreen></iframe>
  );
}

export default Home;