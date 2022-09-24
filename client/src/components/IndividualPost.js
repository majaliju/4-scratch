import { useState } from 'react';
import EachUser from './EachUser';

function IndividualPost({ eachPost, posts }) {
  const thisPost = posts.find(
    (post) => parseInt(eachPost.id) === parseInt(post.id)
  );

  //* include the user and link to EachUser page, where each users Posts display

  //* do the thing where you can click the link and open up the email app
  //* stylize the app better as well

  return (
    <div class='p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl'>
      <div class='block p-2 sm:p-4 rounded-xl'>
        <div class='m-2 sm:pr-4'>
          <h2 class='text-xl font-bold text-gray-900'>
            {thisPost.for_sale === true ? (
              <h1 class='text-3xl justify-center'>
                SELLING {thisPost.how_many_tickets} TICKETS
              </h1>
            ) : (
              <span class='text-3xl justify-center'>
                LOOKING FOR {thisPost.how_many_tickets} TICKETS
              </span>
            )}
          </h2>
          <h2 class='mt-2 text-lg text-white'>{thisPost.body}</h2>
        </div>
        <h4 class='mt-2 text-lg text-white'>EMAIL: {thisPost.user.email}</h4>
        <h4 class='mt-2 text-lg text-white'>
          <Link to=''> LINK TO CONCERT: {thisPost.concert.id}</Link>
        </h4>
      </div>
    </div>
  );
}

export default IndividualPost;

// // //* shadow with gradient border
// // //* from https://www.hyperui.dev/components/marketing/cards
