import { useState } from 'react';

function IndividualPost({ eachPost }) {
  console.log(
    '🚦 ~ file: IndividualPost.js ~ line 4 ~ IndividualPost ~ eachPost',
    eachPost
  );

  return (
    <div>
      <div class='indicator'>
        <div class='indicator-item indicator-bottom'>
          <button class='btn btn-primary uppercase'>Contact</button>
        </div>
        <div class='card justify-center'>
          {eachPost.for_sale === true ? (
            <span class='badge badge-primary text-2xl justify-center'>
              SELLING
            </span>
          ) : (
            <span class='badge badge-primary'>LOOKING</span>
          )}
          <div class='card-body'>
            <h2 class='card-title'>{eachPost.how_many_tickets} TICKETS</h2>
            <p>{eachPost.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualPost;
