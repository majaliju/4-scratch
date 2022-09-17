import { useState } from 'react';

function IndividualPost({ eachPost }) {
  console.log('eachPost: ', eachPost);
  return (
    <div class='p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl'>
      <div class='block p-2 sm:p-4 rounded-xl'>
        <div class='m-2 sm:pr-4'>
          <h2 class='text-xl font-bold text-gray-900'>
            {eachPost.for_sale === true ? (
              <h1 class='text-3xl justify-center'>
                SELLING {eachPost.how_many_tickets} TICKETS
              </h1>
            ) : (
              <span class='text-3xl justify-center'>
                LOOKING FOR {eachPost.how_many_tickets} TICKETS
              </span>
            )}
          </h2>
          <h2 class='mt-2 text-lg text-white'>{eachPost.body}</h2>
          {/* <h4>EMAIL: {eachPost.user.email}</h4> */}
        </div>
      </div>
    </div>
  );
}

export default IndividualPost;

// // //* shadow with gradient border
// // //* from https://www.hyperui.dev/components/marketing/cards

// <div>
//   <div tabindex='0' class='collapse group'>
//     <div class=' collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content'>
//       <div class='justify-center'>
//         <div class='card justify-center'>
//           {eachPost.for_sale === true ? (
//             <span class='badge badge-secondary text-xl justify-center'>
//               SELLING
//             </span>
//           ) : (
//             <span class='badge badge-secondary text-2xl justify-center'>
//               LOOKING
//             </span>
//           )}{' '}
//         </div>
//         <h2 class='card-title'>{eachPost.how_many_tickets} TICKETS</h2>
//       </div>
//     </div>
//     <div class='collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content'>
//       <p>{eachPost.body}</p>
//     </div>
//   </div>
// </div>;
