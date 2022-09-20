import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();
  const [selling, setSelling] = useState(true);
  const [body, setBody] = useState('');
  const [ticketAmount, setTicketAmount] = useState('');
  const [error, setError] = useState('');

  function checkError(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      console.log('response: ', response);
      console.log('response.status: ', response.status);
      console.log('response.statusText: ', response.statusText);
      throw response;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('within the handleSubmit for form: ', e);
    // fetch('/new_post', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: JSON.stringify({
    //     body,
    //     for_sale: selling,
    //     how_many_tickets: ticketAmount,
    //     concert_id: null,
    //     user_id: null,
    //   }),
    // })
    //   .then(checkError)
    //   .then((item) => {
    //     console.log(item);
    //   })
    //   .catch((err) => console.log(err));
    // navigate(-1);
  }

  return (
    <div>
      <div class='px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
        <div class='max-w-lg mx-auto'>
          <h1 class='text-2xl font-bold text-center text-indigo-600 sm:text-3xl'>
            Easily post your tickets!
          </h1>

          <form class='p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4'>
            <select class='select select-ghost w-full '>
              <option disabled selected>
                Are you selling or requesting?
              </option>
              <option>I'm Selling Tickets</option>
              <option>I'm Requesting Tickets</option>
            </select>
            <div>
              <input
                type='text'
                id='selling'
                value={selling}
                placeholder='what price? best offer only? write all that here!'
                class='input input-ghost w-full '
              />
            </div>

            <div>
              <input
                type='text'
                placeholder='how many tickets are you selling/requesting?'
                class='input input-ghost w-full '
              />
            </div>

            <button
              onClick={handleSubmit}
              type='submit'
              class='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
