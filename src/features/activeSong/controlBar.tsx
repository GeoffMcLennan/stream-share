import { Grid, Slider, AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import LoopIcon from '@mui/icons-material/Loop';
import { togglePlaying } from "./activeSongSlice";

export function ControlBar() {
    const activeSong = useAppSelector(state => state.activeSong);
    const dispatch = useAppDispatch();

    return (

        <Grid container xs={12}>
            <Grid item xs={2}>
                <Button>
                    <ShuffleIcon />
                </Button>
            </Grid>

            <Grid item xs={2}>
                <Button>
                    <ShuffleIcon />
                </Button>
            </Grid>
            
            <Grid item xs={3}>
                <Button onClick={() => { dispatch(togglePlaying()) }}>
                    {activeSong.playing && <PauseCircleIcon />}
                    {!activeSong.playing && <PlayCircleIcon />}
                </Button>
            </Grid>
            <Grid item xs={2}><ShuffleIcon /></Grid>
            <Grid item xs={2}><ShuffleIcon /></Grid>
        </Grid>

    );

}
