import React from "react";
import { useParams } from "react-router-dom";

function ArtistTicketActivity({ posts, setPosts, artists, concerts }) {
  let { id } = useParams();

  const artist = artists.find((artist) => parseInt(id) === artist.id);

  // TODO
  //^ center the card in the middle of the page

  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="avatar">
          <div class="w-30 rounded">
            <img src={artist.image} alt="a small avatar of the music artist" />
          </div>
        </div>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{artist.name}</h2>
          <p>There's X upcoming concerts listed for {artist.name}!</p>
          <div>
            <div class="badge badge-primary uppercase">Z selling</div>
            <div class="badge badge-primary uppercase">Z looking</div>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-secondary w-full">
              I have tickets to sell
            </button>
            <button class="btn btn-secondary w-full">
              I'm Looking For Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistTicketActivity;
