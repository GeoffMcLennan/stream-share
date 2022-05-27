import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AsyncStatus } from "../../app/interface";
import { AsyncWrapper } from "../async/async";
import { EMPTY_ALBUM } from "../data/album";
import { Song } from "../data/song";
import { loadAlbum } from "./albumSlice";

export function AlbumPage() {
  const displayAlbum = useAppSelector(state => state.displayAlbum);
  console.log(displayAlbum)
  const { albumId } = useParams();
  console.log(albumId)
  const dispatch = useAppDispatch();
  const album = displayAlbum.album || EMPTY_ALBUM;
  // if (displayAlbum.loadStatus == AsyncStatus.IDLE && !displayAlbum.album) {
  //   console.log('loading album')
  //   // Initial load of album data
  //   dispatch(loadAlbum(albumId));
  //   return <h1>Loading ...</h1>
  // }

  // if (displayAlbum.loadStatus == AsyncStatus.LOADING) {
  //   return <h1>Loading ...</h1>
  // }

  // if (displayAlbum.loadStatus == AsyncStatus.FAILED || !displayAlbum) {
  //   return <h1>Error loading album</h1>
  // }

  return (
    <AsyncWrapper 
        shouldInitialize={!displayAlbum.album}
        status={displayAlbum.loadStatus}
        asyncAction={() => {
          dispatch(loadAlbum(albumId));
        }} >
      <div className='Album'>
        <Grid container>
          <Grid item xs={12}>
            <img src={album.albumArt} />
          </Grid>
          <Grid item xs={12}>
            <h2>{album.albumName}</h2>
            <h3>{album.artistName}</h3>
            <h4>Album - {album.albumYear}</h4>
          </Grid>
          <SongList songs={album.songs} />
        </Grid>
      </div>
    </AsyncWrapper>
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