import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "258px", md: "358px" },
      borderRadius: "6px",
      border: "2px solid transparent",
    }}
    className="zoom"
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        className="sc"
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#fff", height: "auto" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography
          fontWeight="normal"
          color="#0E1924"
          style={{
            fontFamily: "Belanosima",
          }}
        >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography
          color="#0E1924"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: "10px",
            fontSize: "12px",
            fontFamily: "Belanosima",
          }}
        >
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "18px", color: "#00ADB5", ml: "5px" }}
          />
        </Typography>
        <Button color="error" style={{ marginTop: "20px" }}>
          Add to Playlist
        </Button>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
