import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import SongForm from "./components/SongForm";
import Songs from "./components/Songs";
import Carousel from "./components/Carousel";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllSongs = async () => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_APP_API_URL + "/songs"
      );
      setSongs(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSongs();
  }, []);

  return (
    <>
      <Navbar />
          <Carousel/>
          <SongForm />
      {isLoading ? (
          <span className="loading loading-infinity loading-lg"></span>
        //  <div className="loading-screen">Loading...</div>
      ) : (
        <>
          <div>
            {songs.map((song) => (
              <Songs song={song} key={song._id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default App;
