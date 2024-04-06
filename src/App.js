import { useState } from "react";
import Dashboard from "./Component/Dashboard/Dashboard";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import defaultimg from './assets/jay-mantri-TFyi0QOx08c-unsplash.jpg'

function App() {
  // Default story object
  const defaultStory = {
    title:'AI Character Demo storyboard',
    image: defaultimg,
    frameSize:  'Landscape (4:3)',
    timeStamp: '19 Mar 24'
  }

  // State to manage the list of stories
  const [newStory, setNewStory] = useState([defaultStory]);
  
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Navbar Component */}
      <Navbar setSearchQuery={setSearchQuery} />

      {/* Dashboard Body Component */}
      <Dashboard setNewStory={setNewStory} newStory={newStory} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
