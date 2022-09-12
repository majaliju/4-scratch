import React from "react";
import { useParams } from "react-router-dom";

function ArtistTicketActivity({ posts, setPosts, artists, concerts }) {
  console.log(
    "🚀 ~ file: ArtistTicketActivity.js ~ line 5 ~ ArtistTicketActivity ~ artists",
    artists
  );

  let params = useParams();
  console.log(
    "🚀 ~ file: ArtistTicketActivity.js ~ line 8 ~ ArtistTicketActivity ~ params",
    params
  );

  const thisArtist = artists.find(
    (artist) => parseInt(params.id) === artist.id
  );
  console.log(
    "🚀 ~ file: ArtistTicketActivity.js ~ line 12 ~ ArtistTicketActivity ~ thisArtist",
    thisArtist
  );

  return (
    <div>
      <h1>This is the artist page for {params.id}</h1>
      <h2>Artist.id = {params.id}</h2>
      <div>
        <h1>{thisArtist.name}</h1>
        <h1>{thisArtist.image}</h1>
      </div>
    </div>
  );
}

export default ArtistTicketActivity;
