import React from 'react';

function Songs({ song }) {
  return (
    <div className="justify-center">
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mt-8">
      <img src={song.img} alt="song_img" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-white">{song.name}</h2>
        <p className="text-gray-300">{song.artist}</p>
        <audio src={song.song} controls className="mt-4 w-full" />
      </div>
    </div>
    </div>
  );
}

export default Songs;
