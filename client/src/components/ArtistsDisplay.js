function ArtistsDisplay({ artists }) {
  return (
    <div>
      {artists.map((artist) => (
        <div key={artist.id} class='card w-96 bg-base-100 shadow-xl'>
          <div class='card-body'>
            <h1 class='card-title'>{artist.name}</h1>
            <p>{artist.genre.name}</p>
            <div class='card-actions justify-end'>
              <button class='btn btn-primary'>Sell Tickets</button>
            </div>
            <div class='card-actions justify-end'>
              <button class='btn btn-primary'>Buy Tickets</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtistsDisplay;
