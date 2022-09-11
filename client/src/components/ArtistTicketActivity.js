function ArtistTicketActivity({ posts, setPosts, artists, concerts }) {
  return (
    <div>
      <h1>{artists.map((artist) => artist.name)}</h1>
    </div>
  );
}

export default ArtistTicketActivity;
