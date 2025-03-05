import React from 'react';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Blog from './Components/Blog/Blog';

const App = () => {
  return (
    <div>
      <Header></Header>\
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
        <Blog></Blog>
      </div>
    </div>
  );
};

export default App;