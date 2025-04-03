import starboy from './assets/starboy.jpeg'
import demons from './assets/demons.jpeg'
import mouthof from './assets/Mouth_of_river.jpeg'
import sparks from './assets/sparks.jpeg'
import viva from './assets/Viva La Vida.jpeg'
import hymm from './assets/Hymm.jpeg'
import Alone from './assets/Alone.jpg'

import Starboy from './songs/Starboy.mp3'
import alone from './songs/alone.mp3'
import demon from './songs/demon.mp3'
import hym from './songs/hymm.mp3'
import mouth from './songs/mouth.mp3'
import spark from './songs/spark.mp3'
import viv from './songs/viva.mp3'

export const songs = [
  {
    title: "Starboy",
    artist: "The Weeknd",
    duration: "4:16",
    img: starboy,
    audio:Starboy,
    favorite :false,
    
  },
  {
    title: "Demons",
    artist: "Imagine Dragons",
    duration: "5:24",
    img:demons,
    audio:demon,
    favorite :false,
  },
  {
    title: "Mouth of the river",
    artist: "Imagine Dragons",
    duration: "6:23",
    img: mouthof,
    audio: mouth,
    favorite :false,
  },
  {
    title: "Sparks",
    artist: "Coldplay",
    duration: "4:23",
    img: sparks,
    audio: spark,
    favorite :false,
  },
  {
    title: "Viva La Vida",
    artist: "Coldplay",
    duration: "5:32",
    img: viva,
    audio: viv,
    favorite :false,
  },
  {
    title: "Hymn for the weekend",
    artist: "Coldplay",
    duration: "2:23",
    img: hymm,
    audio: hym,
    favorite :false,
  },
  {
    title: "Alone",
    artist: "Alan Walker",
    duration: "3:12",
    img: Alone,
    audio: alone,
    favorite :false,
  },
];
