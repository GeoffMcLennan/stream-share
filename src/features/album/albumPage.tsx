import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Song } from "../data/song";

export function AlbumPage() {
  const displayAlbum = useAppSelector(state => state.displayAlbum);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className='Album'>
        <Grid container>
          <Grid item xs={12}>
            <img src={displayAlbum.albumArt} />
          </Grid>
          <Grid item xs={12}>
            <h2>{displayAlbum.albumName}</h2>
            <h3>{displayAlbum.artistName}</h3>
            <h4>Album - {displayAlbum.albumYear}</h4>
          </Grid>
          <SongList songs={displayAlbum.songs} />
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