import { useAppDispatch, useAppSelector } from "../../app/hooks"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid, Slider, AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { toggleLiked } from "./activeSongSlice";
import { ControlBar } from "./controlBar"; 

import './activeSong.css';

export function ActiveSong() {
  const activeSong = useAppSelector(state => state.activeSong);
  const dispatch = useAppDispatch();

  return (
    <div className="ActiveSong">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="AppBarActiveSong"
          position="static"
          style={{
            background: 'transparent',
            boxShadow: 'none',
          }}>
          <Toolbar>
            <Typography className="activeSongText" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {activeSong.albumName}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container>
        <Grid item xs={12}>
          <img src={activeSong.albumArt} />
        </Grid>

        <Grid container item xs={12}>
          <Grid container item xs={10}>
            <Grid item xs={12}>
              {activeSong.title}
            </Grid>
            <Grid item xs={12}>
              {activeSong.artist}
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Button onClick={() => {dispatch(toggleLiked());}}>
              {activeSong.liked && <FavoriteIcon/>}
              {!activeSong.liked && <FavoriteBorderIcon/>}
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}> 
        <Slider defaultValue={activeSong.progress}
         aria-label="Default" valueLabelDisplay="auto" />
        </Grid>
        <ControlBar/>
      </Grid>
    </div>
  )
}