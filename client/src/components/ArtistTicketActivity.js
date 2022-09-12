import React from "react";
import { useParams } from "react-router-dom";

function ArtistTicketActivity({ posts, setPosts, artists, concerts }) {
  let { id } = useParams();

  const artist = artists.find((artist) => parseInt(id) === artist.id);

  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={artist.image} alt={artist.name} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{artist.name}</h2>
          <p>There's X upcoming concerts listed for {artist.name}!</p>
          <div class="card-actions">
            <button class="btn btn-primary">I have tickets to sell</button>
            <button class="btn btn-primary">I'm Looking For Tickets</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistTicketActivity;
