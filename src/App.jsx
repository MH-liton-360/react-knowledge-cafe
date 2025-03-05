import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Blog from './Components/Blog/Blog';

const App = () => {

  const [bookmarks, setBookmarks] = useState([]);

  const handleToBookmarks = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);

  }


  return (
    <div>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleToBookmarks={handleToBookmarks} ></Blogs>
        <Bookmarks bookmarks={bookmarks} ></Bookmarks>
        <Blog></Blog>
      </div>
    </div>
  );
};

export default App;