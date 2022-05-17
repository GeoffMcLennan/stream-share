import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AsyncStatus } from "../../app/interface";
import { Song } from "../data/song";
import { loadAlbum } from "./albumSlice";

export function AlbumPage() {
  const displayAlbum = useAppSelector(state => state.displayAlbum);
  console.log(displayAlbum)
  const { albumId } = useParams();
  console.log(albumId)
  const dispatch = useAppDispatch();
  if (displayAlbum.loadStatus == AsyncStatus.IDLE && !displayAlbum.album) {
    console.log('loading album')
    // Initial load of album data
    dispatch(loadAlbum(albumId));
    return <h1>Loading ...</h1>
  }

  if (displayAlbum.loadStatus == AsyncStatus.LOADING) {
    return <h1>Loading ...</h1>
  }

  if (displayAlbum.loadStatus == AsyncStatus.FAILED || !displayAlbum) {
    return <h1>Error loading album</h1>
  }

  return (
    <div>
      <div className='Album'>
        <Grid container>
          <Grid item xs={12}>
            <img src={displayAlbum.album!.albumArt} />
          </Grid>
          <Grid item xs={12}>
            <h2>{displayAlbum.album!.albumName}</h2>
            <h3>{displayAlbum.album!.artistName}</h3>
            <h4>Album - {displayAlbum.album!.albumYear}</h4>
          </Grid>
          <SongList songs={displayAlbum.album!.songs} />
        </Grid>
      </div>
    </div>
  )
}

interface SongListProps {
  songs: Array<Song>;
}
export function SongList(props: SongListProps) {
  return <Grid item container xs={12}>
    {props.songs.map(song => (
      <Grid item xs={12}>
        {song.title}
      </Grid>
    ))}
  </Grid>
}