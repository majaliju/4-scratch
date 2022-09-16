import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IndividualPost from './IndividualPost';

function EachArtistCard({ posts, setPosts, artists, concerts }) {
  let { id } = useParams();

  console.log('id: ', id);

  //! issues with reload when using this style below
  const thisArtist = artists.find(
    (artist) => parseInt(id) === parseInt(artist.id)
  );

  //! why does thisArtist = undefined on page reload??
  console.log('thisArtist: ', thisArtist);

  const [selling, setSelling] = useState(0);
  const [looking, setLooking] = useState(0);
  const [upcomingShows, setUpcomingShows] = useState(0);

  //^ this one doesn't take into account the if statement, at ALL
  // useEffect(() => {
  //   if (thisArtist != undefined) {
  //     thisArtist.posts.map((each) => {
  //       if (each.for_sale === true) {
  //         setSelling(selling + 1);
  //       } else {
  //         setLooking(looking + 1);
  //       }
  //     }) &&
  //       thisArtist.posts.map((each) => {
  //         if (each.for_sale === true) {
  //           setSelling(selling + 1);
  //         } else {
  //           setLooking(looking + 1);
  //         }
  //       });
  //   }
  // }, []);

  useEffect(() => {
    thisArtist.posts.map((each) => {
      if (each.for_sale === true) {
        setSelling(selling + 1);
      } else {
        setLooking(looking + 1);
      }
    });
  }, []);

  useEffect(() => {
    thisArtist.concerts.map((each) => setUpcomingShows(upcomingShows + 1));
  }, []);

  // TODO
  //^ center the card in the middle of the page

  return (
    <div>
      <div class='bg-base-900 py-6 sm:py-8 lg:py-'>
        <div class='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div class='mb-10 md:mb-16'>
            <h1 class='mb-4 text-center text-6xl font-thin uppercase text-primary md:mb-6 lg:text-7xl'>
              {thisArtist.name}
            </h1>
          </div>

          <div class='flex justify-center'>
            <div class='card w-96 bg-base-500 bg-neutral text-neutral-content justify-center shadow-2xl'>
              <div class='avatar'>
                <div class='w-30 rounded'>
                  <img
                    src={thisArtist.image}
                    alt='a small avatar of the music thisArtist'
                  />
                </div>
              </div>
              <div class='card-body items-center text-center'>
                <h2 class='card-title'>{thisArtist.name}</h2>
                <p>
                  There's {upcomingShows} upcoming concerts listed for{' '}
                  {thisArtist.name}!
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
                  <button class='btn btn-outline btn-black w-full'>
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2 class='my-10 text-center text-5xl font-thin uppercase text-primary md:mb-6 lg:text-6xl'>
            ALL POSTS
          </h2>
          {/* {thisArtist.posts.map((each) => (
            <IndividualPost eachPost={each} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default EachArtistCard;

//* cool card component to implement for eachArtistCard
//* darkened background with content on hover

// <a class="relative block bg-black group" href="">
//   <img
//     class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity  group-hover:opacity-50"
//     src="https://www.hyperui.dev/photos/man-6.jpeg"
//     alt=""
//   />
//   <div class="relative p-8">
//     <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
//       Developer
//     </p>

//     <p class="text-2xl font-bold text-white">Barry Scott</p>

//     <div class="mt-64">
//       <div
//         class="opacity-0 transition-all transform translate-y-8  group-hover:opacity-100 group-hover:translate-y-0"
//       >
//         <p class="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </a>
