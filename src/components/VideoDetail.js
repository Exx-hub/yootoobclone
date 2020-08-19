import React, { Fragment } from "react";

import { Paper, Typography } from "@material-ui/core";

function VideoDetail({ selectedVideo }) {
  if (!selectedVideo) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="video player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {selectedVideo.snippet.title} - {selectedVideo.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {selectedVideo.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {selectedVideo.snippet.description}
        </Typography>
      </Paper>
    </Fragment>
  );
}

export default VideoDetail;
