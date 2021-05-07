import React  from 'react'
import './App.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Addcarousel from './components/Addcarousel'
import Blogpost from './components/Blogpost'


const App = () => {


  return (
    <div>
      <Addcarousel />
        <Blogpost />
    </div>
  );
}

export default App;
