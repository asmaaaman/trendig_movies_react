import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/system";
import { getMediaItemDetails } from "../../network/api";
import { img_500, unavailable } from "../../Config/config";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Details({ media }) {
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const params = useParams();
  const id = params?.id;
  const media_type = params.media_type;

  const fetchDetailsData = () => {
    getMediaItemDetails(id, media_type)
      .then((res) => {
        setContent(res?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchDetailsData();
  }, []);
  return (
    <>
      {content && (
        <Container sx={{ p: 3, m: 3 }}>
          <Card sx={{ maxWidth: 500 }}>
            <CardHeader
              title={content?.name}
              subheader={content?.first_air_date}
            />
            <CardMedia
              component="img"
              height="100%"
              image={
                content.poster_path
                  ? `${img_500}/${content.poster_path}`
                  : unavailable
              }
              alt="Paella dish"
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {content?.overview}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      )}
    </>
  );
}

export default Details;
