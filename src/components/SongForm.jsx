import { useState } from "react";
import axios from "axios";
import FileInput from "./FileInput";

function SongForm() {
  const [data, setData] = useState({
    name: "",
    artist: "",
    song: "",
    img: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = import.meta.env.VITE_APP_API_URL + "/songs";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      setIsSubmitted(true);
      window.location.reload(); // Reload the page
	  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
  <form
    className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md"
    onSubmit={handleSubmit}
  >
    <h1 className="text-2xl font-bold text-white mb-4 text-center">Song Form</h1>
    <input
      type="text"
      className="bg-gray-700 text-white rounded-lg px-4 py-2 mb-4 w-full"
      placeholder="Song Name"
      name="name"
      onChange={handleChange}
      value={data.name}
    />
    <input
      type="text"
      className="bg-gray-700 text-white rounded-lg px-4 py-2 mb-4 w-full"
      placeholder="Artist Name"
      name="artist"
      onChange={handleChange}
      value={data.artist}
    />
    <label className="label">
    <span className="label-text">Pick an Image</span>
  </label>
    <FileInput
      name="img"
      label="Choose Image"
      handleInputState={handleInputState}
      type="image"
      value={data.img}
      className=" file-input file-input-bordered w-full max-w-xs mb-4"
    />
    <label className="label">
    <span className="label-text">Pick a Song</span>
  </label>
    <FileInput
      name="song"
      label="Choose Song"
      handleInputState={handleInputState}
      type="audio"
      className="file-input file-input-bordered w-full max-w-xs mb-4"
      value={data.song}
    />
    <button type="submit" className="btn w-full mt-4">
      Submit
    </button>
    {isSubmitted && (
          <div className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your song has been submitted!</span>
          </div>
        )}
  </form>
</div>

  );
}

export default SongForm;
