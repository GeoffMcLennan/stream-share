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
              {activeSong.song.albumName}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container>
        <Grid item xs={12}>
          <img src={activeSong.song.albumArt} />
        </Grid>

        <Grid container item xs={12}>
          <Grid container item xs={10}>
            <Grid item xs={12}>
              {activeSong.song.title}
            </Grid>
            <Grid item xs={12}>
              {activeSong.song.artist}
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
        <Slider defaultValue={activeSong.progress} max={activeSong.song.songLength}
         aria-label="Default" valueLabelDisplay="auto"
          valueLabelFormat={(songLengthValue) => {
            const minutes = Math.floor(songLengthValue / 60);
            let seconds: number | string = songLengthValue % 60;

            if (seconds < 10) {
              seconds = '0' + seconds
            }
            
            return `${minutes}:${seconds}`
            }} />
        </Grid>

        <ControlBar/>
      </Grid>
    </div>
  )
}