// TODO
//^ potentially add a map unique genres that generates buttons for each, that upon each button click renders artists only with that genre classification

//^ make the search bar center itself -- check tailwind to find the right class

function ArtistsDisplay({ artists, genres, searchTerm, setSearchTerm }) {
  return (
    <div class='bg-base-900 py-6 sm:py-8 lg:py-12'>
      <div class='form-control'>
        <label class='flex input-group input-group-lg'>
          <span>SEARCH</span>
          <input
            type='text'
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search for your favorite artists here...just start typing'
            class='input input-bordered w-full input-lg text-center'
          />
        </label>
      </div>
      <div>
        <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div class='mb-10 md:mb-16'>
            <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
              ARTISTS
            </h1>
            <p class='mx-auto uppercase text-center max-w-screen-md text-secondary text-gray-500 md:text-lg'></p>
          </div>
          <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
            {artists
              .filter((artist) => {
                if (searchTerm === '') {
                  return artist;
                } else if (
                  artist.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return artist;
                }
              })
              .map((artist) => (
                <div>
                  <div
                    key={artist.id}
                    class='card w-96 max-w-xs bg-neutral text-neutral-content shadow-xl'>
                    <div class='card-body p-4 m-2 mx-0 items-center text-center'>
                      <div class='avatar'>
                        <div class='w-30 rounded'>
                          <img
                            src={artist.image}
                            alt='a small avatar of the musical artist'
                          />
                        </div>
                      </div>
                      <h1 class='card-title'>{artist.name}</h1>
                      <p>{artist.genre.name}</p>
                      <div class='card-actions justify-end'>
                        <button class='btn btn-primary'>
                          X People Selling Z Tickets
                        </button>
                        <button class='btn btn-primary'>
                          X People Looking For Z Tickets
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistsDisplay;

// //& the artist cards
// <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
// {artists.map((artist) => (
//   <div>
//     <div
//       key={artist.id}
//       class='card w-96 max-w-xs bg-neutral text-neutral-content shadow-xl'>
//       <div class='card-body p-4 m-2 mx-0 items-center text-center'>
//         <div class='avatar'>
//           <div class='w-30 rounded'>
//             <img
//               src={artist.image}
//               alt='a small avatar of the musical artist'
//             />
//           </div>
//         </div>
//         <h1 class='card-title'>{artist.name}</h1>
//         <p>{artist.genre.name}</p>
//         <div class='card-actions justify-end'>
//           <button class='btn btn-primary'>Sell Tickets</button>
//           <button class='btn btn-primary'>Find Tickets</button>
//         </div>
//       </div>
//     </div>
//   </div>
// ))}
// </div>
