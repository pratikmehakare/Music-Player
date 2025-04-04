import starboy from './assets/starboy.jpeg'
import demons from './assets/demons.jpeg'
import mouthof from './assets/Mouth_of_river.jpeg'
import sparks from './assets/sparks.jpeg'
import viva from './assets/Viva La Vida.jpeg'
import hymm from './assets/Hymm.jpeg'
import Alone from './assets/Alone.jpg'
import ghost from './assets/ghost.jpeg'

import Starboy from './songs/Starboy.mp3'
import alone from './songs/alone.mp3'
import demon from './songs/demon.mp3'
import hym from './songs/hymm.mp3'
import mouth from './songs/mouth.mp3'
import spark from './songs/spark.mp3'
import viv from './songs/viva.mp3'
import Ghost from './songs/Ghost.mp3'

export const songs = [
  {
    id:1,
    title: "Demons",
    artist: "Imagine Dragons",
    duration: "5:24",
    img:demons,
    audio:demon,
    favorite :false,
  },
  {
    id:2,
    title: "Starboy",
    artist: "The Weeknd",
    duration: "4:16",
    img: starboy,
    audio:Starboy,
    favorite :false,
    
  },
  {
    id:3,
    title: "Mouth of the river",
    artist: "Imagine Dragons",
    duration: "6:23",
    img: mouthof,
    audio: mouth,
    favorite :false,
  },
  {
    id:4,
    title: "Sparks",
    artist: "Coldplay",
    duration: "4:23",
    img: sparks,
    audio: spark,
    favorite :false,
  },
  {
    id:5,
    title: "Viva La Vida",
    artist: "Coldplay",
    duration: "5:32",
    img: viva,
    audio: viv,
    favorite :false,
  },
  {
    id:6,
    title: "Hymn for the weekend",
    artist: "Coldplay",
    duration: "2:23",
    img: hymm,
    audio: hym,
    favorite :false,
  },
  {
    id:7,
    title: "Alone",
    artist: "Alan Walker",
    duration: "3:12",
    img: Alone,
    audio: alone,
    favorite :false,
  },
  {
    id:8,
    title: "Ghost Stories",
    artist: "Cold Play",
    duration: "4:15",
    img: ghost,
    audio: Ghost,
    favorite :false,
  },
  
];
