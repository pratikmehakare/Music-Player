import React, { useEffect, useState, useRef } from "react";
import { GiPauseButton, GiPlayButton } from "react-icons/gi";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { FaBackward, FaForward } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../redux/Slice/bgReducer";
import { MdFavorite,MdFavoriteBorder  } from "react-icons/md";


const Player = () => {
  const dispatch = useDispatch();
  const { song } = useSelector((state) => state.trackSlice);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update Progress Bar as Song Plays
  useEffect(() => {
    const updateProgress = () => {
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);
    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  // Handle Slider Change (Seeking)
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
    }
  }, [song]);

  // Mute / Unmute Function
  const toggleMute = () => {
    if (audioRef.current.muted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };


  const toggleFavourite = (track) => {
    setShowOptions(false);
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    const exists = stored.find((t) => t.id === track.id);
    
    let updated;
    if (exists) {
      updated = stored.filter((t) => t.id !== track.id);
      setIsFavourite(false);
    } else {
      updated = [...stored, track];
      setIsFavourite(true);
    }
  
    localStorage.setItem("favourites", JSON.stringify(updated));
    
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    const fav = stored.some((t) => t.id === song.id);
    setIsFavourite(fav);
  }, [song]);
  
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = song.img;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const pixelData = ctx.getImageData(
        img.width / 2,
        img.height / 2,
        1,
        1
      ).data;

      const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
      dispatch(setColor(color));
      console.log("song", song);
    };
  }, [song]);

  return (
    <div>
      {/* Title Section */}
      <div className="w-[206px] h-[68px] flex flex-col gap-[8px] ">
        <h1 className="text-3xl font-bold font-basier leading-9 tracking-normal">
          {song.title}
        </h1>
        <p className="text-sm font-basier text-gray-400">{song.artist}</p>
      </div>

      {/* Album Cover */}
      <div className="mt-9">
        <img src={song.img} alt="Album Cover" className="rounded-lg " />
      </div>

      <div className="mt-5 ">
        <input
          type="range"
          value={progress}
          onChange={handleSeek}
          className="w-full mt-4"
          min="0"
          max="100"
        />
        <div className="flex items-center justify-center mt-7 py-4 relative">
          <button className="p-3 mr-12 rounded-full bg-gray-600"
          onClick={() => setShowOptions(!showOptions)}
          >
            <BsThreeDots size={24} />
          </button>

          {/* Options Menu */}
          {showOptions && (
            <div className="absolute bottom-12 left-0 mb-2   rounded-full  w-15 p-2">
              <button
                onClick={() => toggleFavourite(song)}
                className="w-full text-left p-2 "
              >
                {isFavourite ? <MdFavorite color="red" size={20} /> : <MdFavoriteBorder size={20} /> }
              </button>
            </div>
          )}

          <button className="p-2 ml-12 mr-4 text-gray-400 hover:text-gray-600">
            <FaBackward size={22} />
          </button>
          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-white text-black mx-4 flex items-center justify-center w-12 h-12"
          >
            {isPlaying ? (
              <GiPauseButton size={24} />
            ) : (
              <GiPlayButton size={24} />
            )}
          </button>
          <button className="p-2 mr-12 ml-4 text-gray-400 hover:text-gray-600">
            <FaForward size={22} />
          </button>
          <button
            onClick={toggleMute}
            className="p-3 ml-12 rounded-full bg-gray-600"
          >
            {isMuted ? (
              <HiMiniSpeakerXMark size={24} />
            ) : (
              <HiMiniSpeakerWave size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={song.audio} />

      {/* <audio ref={audioRef} controls className="mt-4 w-full">
        <source src={song?.audio} type="audio/mp3" />
      </audio> */}
    </div>
  );
};

export default Player;
