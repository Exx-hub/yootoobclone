import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail, VideoList } from "./components";

import youtube from "./api/youtube";

const arr = ["nba", "dota", "reactjs", "javascript"];
const random = Math.floor(Math.random() * 4);

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleQuery = async (inputValue) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBbt0XAyH-qbjWvdCT1UYVaEA2rcCZTmDM",
        q: inputValue,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (clickedVideo) => {
    setSelectedVideo(clickedVideo);
  };

  useEffect(() => {
    handleQuery(arr[random]);
  }, []);

  return (
    <Grid justify="center" container spacing={6}>
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <SearchBar getQuery={handleQuery} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail selectedVideo={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
