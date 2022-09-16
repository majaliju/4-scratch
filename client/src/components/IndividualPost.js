import { useState } from 'react';

function IndividualPost({ eachPost }) {
  return (
    <div>
      <div tabindex='0' class='collapse group'>
        <div class=' collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content'>
          <div class='justify-center'>
            <div class='card justify-center'>
              {eachPost.for_sale === true ? (
                <span class='badge badge-secondary text-xl justify-center'>
                  SELLING
                </span>
              ) : (
                <span class='badge badge-secondary text-2xl justify-center'>
                  LOOKING
                </span>
              )}{' '}
            </div>
            <h2 class='card-title'>{eachPost.how_many_tickets} TICKETS</h2>
          </div>
        </div>
        <div class='collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content'>
          <p>{eachPost.body}</p>
        </div>
      </div>
    </div>
  );
}

export default IndividualPost;

// //* shadow with gradient border
// //* from https://www.hyperui.dev/components/marketing/cards

// <div class="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
//   <a class="block p-6 bg-white sm:p-8 rounded-xl" href="">
//     <div class="mt-16 sm:pr-8">
//       <h5 class="text-xl font-bold text-gray-900">Science of Chemistry</h5>

//       <p class="mt-2 text-sm text-gray-500">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
//       </p>
//     </div>
//   </a>
// </div>
