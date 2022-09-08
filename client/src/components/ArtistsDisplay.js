// TODO
//! USE A FILTER DISPLAY FOR THE SEARCH

function ArtistsDisplay({ artists }) {
  return (
    <div>
      <div class='w-1/2'>
        <div class='w-1/2 form-control'>
          <div class='input-group'>
            <input
              type='text'
              placeholder='Search for an artist!'
              class='input input-bordered'
            />
            <button class='btn btn-square'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {artists.map((artist) => (
          <div>
            <div
              key={artist.id}
              class='card w-96 max-w-xs bg-neutral text-neutral-content m-4 shadow-xl'>
              <div class='card-body p-4  items-center text-center'>
                <h1 class='card-title'>{artist.name}</h1>
                <p>{artist.genre.name}</p>
                <div class='card-actions justify-end'>
                  <button class='btn btn-primary'>Sell Tickets</button>
                  <button class='btn btn-primary'>Find Tickets</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistsDisplay;
