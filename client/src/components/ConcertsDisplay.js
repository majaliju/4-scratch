function ConcertsDisplay({ concerts, artists, genres, searchTerm }) {
  return (
    <div>
      <h1> CONCERTS </h1>
    </div>
  );
}

export default ConcertsDisplay;

{
  /* <div class='bg-base-900 py-6 sm:py-8 lg:py-12'>
<div class='mx-auto max-w-screen-xl px-4 md:px-8'>
  <div class='mb-10 md:mb-16'>
    <h1 class='mb-4 text-center text-6xl font-thin text-primary md:mb-6 lg:text-7xl'>
      CONCERTS
    </h1>

    <p class='mx-auto text-center max-w-screen-md text-secondary text-gray-500 md:text-lg'>
      Here's our list of artists that are currently available on
      ticketblaster.
    </p>
  </div>
  <div class='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
    {concerts.map((concert) => (
      <div>
        <div
          key={concert.id}
          class='card w-96 max-w-xs bg-neutral text-neutral-content shadow-xl'>
          <div class='card-body p-4 m-2 mx-0 items-center text-center'>
            <h1 class='card-title'>{concert.name}</h1>
            <p>{concert.genre.name}</p>
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
</div> */
}
