/* eslint-disable jsx-a11y/alt-text */

import { useEffect } from 'react';

function Welcome({ update }) {
  // TODO stylizing
  // stylize the FINALLY text to be more centered
  // change the image that renders

  return (
    <div class='hero min-h-screen bg-base-200'>
      <div class='hero-content flex-col lg:flex-row'>
        <img
          src='https://placeimg.com/260/400/arch'
          class='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 class='text-5xl font-bold'>FINALLY! </h1>
          <p class='py-4'>
            Everyone is sick of TicketMaster and all of these bloated websites
            that don't let you buy tickets without throwing on a lot of
            unexpected fees.
          </p>
          <p class='py-4'>
            Well now you don't have to deal with them just to watch your
            favorite artists live!
          </p>
          <button class='btn btn-primary' onClick={update}>
            Get Started with TICKETBLASTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
