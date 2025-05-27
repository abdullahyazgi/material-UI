import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import loremimage from "../image/loremph.jpg";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image={loremimage}
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lorem
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            aspernatur velit facere voluptate. Culpa eum quos voluptates?
            Ratione, fuga inventore.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">
            Share
          </Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
