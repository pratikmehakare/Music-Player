import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { songs } from "../data";
import { useDispatch } from "react-redux";
import { setSong } from "../redux/Slice/trackReducer";

const TopSidebar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(""); 
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("playCounts")) || {};
    const sorted = Object.values(stored)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10); // top 10

    setTopTracks(sorted);
  }, []);

  const filteredSongs = topTracks.filter((track) =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div>
      <h2 className="text-3xl font-basier font-bold mb-6">Top Tracks</h2>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-900 h-12 rounded-lg mb-4 px-4">
        <input
          type="text"
          placeholder="Search Song, Artist"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none text-white flex-grow"
        />
        <IoIosSearch size={20} className="text-gray-400" />
      </div>

      {/* Song List */}
      <ul className="mt-8 space-y-5">
        {filteredSongs.map((track, index) => (
          <li
            key={index}
            onClick={() => dispatch(setSong(track))}
            className="flex mt-2 items-center justify-between p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img
                src={track.img}
                alt={track.title}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-basier text-lg">{track.title}</p>
                <p className="text-sm text-gray-400">{track.artist}</p>
              </div>
            </div>
            <span className="text-base">{track.duration}</span>
          </li>
        ))}
      </ul>

      {/* No results found */}
      {filteredSongs.length === 0 && (
        <p className="text-gray-400 text-center mt-4">No songs found</p>
      )}
    </div>
  );
};

export default TopSidebar;
