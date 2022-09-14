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
