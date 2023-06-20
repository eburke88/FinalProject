import '../css/JamFeed.css';
import '../css/style.css';
import '../css/Project.css';

import React from 'react';

import Footer from "../AppComponents/Footer.js";
import Chats from "../Chats/Chats.js";
import Header from "../AppComponents/Header.js";
import Search from "../AppComponents/Search.js";




export default function ChatPage() { /* function for compiling the whole profile page*/
    return (
      <div>
        <Header />
        <Chats />
        <Footer />
      </div>
    );
   
}
