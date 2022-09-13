import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';

function ArtistTicketActivity({ posts, setPosts, artists, concerts }) {
  let { id } = useParams();

  const artist = artists.find((artist) => parseInt(id) === artist.id);

  // TODO
  //^ HANDLE THESE 3 OPERATIONS ON THE BACK-END, TO MAKE SURE THE TALLIES DON'T GET SKEWED BY RELOADS

  const [selling, setSelling] = useState(0);
  const [looking, setLooking] = useState(0);
  const [upcomingShows, setUpcomingShows] = useState(0);

  useEffect(() => {
    artist.posts.map((each) => {
      if (each.for_sale === true) {
        setSelling(selling + 1);
      } else {
        setLooking(looking + 1);
      }
    });
  }, []);

  useEffect(() => {
    artist.concerts.map((each) => setUpcomingShows(upcomingShows + 1));
  }, []);

  // TODO
  //^ center the card in the middle of the page

  return (
    <div>
      <div class='bg-base-900 py-6 sm:py-8 lg:py-12'>
        <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div class='mb-10 md:mb-16'>
            <h1 class='mb-4 text-center text-6xl font-thin uppercase text-primary md:mb-6 lg:text-7xl'>
              {artist.name}
            </h1>
          </div>

          <div class='flex justify-center'>
            <div class='card w-96 bg-base-500 bg-neutral text-neutral-content justify-center shadow-2xl'>
              <div class='avatar'>
                <div class='w-30 rounded'>
                  <img
                    src={artist.image}
                    alt='a small avatar of the music artist'
                  />
                </div>
              </div>
              <div class='card-body items-center text-center'>
                <h2 class='card-title'>{artist.name}</h2>
                <p>
                  There's {upcomingShows} upcoming concerts listed for{' '}
                  {artist.name}!
                </p>
                <div>
                  <div class='badge badge-primary uppercase'>
                    {selling} selling
                  </div>
                  <div class='badge badge-primary uppercase'>
                    {looking} looking
                  </div>
                </div>
                <div class='card-actions justify-end'>
                  <button class='btn btn-secondary w-full'>
                    I have tickets to sell
                  </button>
                  <button class='btn btn-secondary w-full'>
                    I'm Looking For Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2 class='my-10 text-center text-5xl font-thin uppercase text-primary md:mb-6 lg:text-6xl'>
            ALL POSTS
          </h2>
          {artist.posts.map((each) => (
            <IndividualPost eachPost={each} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistTicketActivity;
