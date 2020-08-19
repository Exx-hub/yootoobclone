import React from "react";
import VideoItem from "./VideoItem";

import { Grid } from "@material-ui/core";

function VideoList({ videos, onVideoSelect }) {
  return (
    <Grid container spacing={6}>
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect}
          />
        );
      })}
    </Grid>
  );
}

export default VideoList;
