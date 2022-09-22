import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();
  const [selling, setSelling] = useState(false);
  const [body, setBody] = useState('');
  const [ticketAmount, setTicketAmount] = useState('');
  const [error, setError] = useState('');

  //^ this state below is experimental, for dealing with checked
  const [ticketType, setTicketType] = useState('');

  const handleRadioChange = (e) => {
    console.log('within handleRadioChange, e.target.value: ', e.target.value);

    // setSelling(e.target.value);
  };

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

  const handleSubmit = (e) => {
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
  };

  return (
    <div>
      <div class='px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
        <div class='max-w-lg mx-auto'>
          <h1 class='text-2xl font-bold text-center text-indigo-600 sm:text-3xl'>
            TICKET POST
          </h1>

          <form class='p-8 mt-2 mb-0 rounded-lg shadow-2xl space-y-4'>
            <div>
              <fieldset>
                <strong class='flex justify-center mb-6'>
                  Are you selling tickets or looking to buy them?
                </strong>

                <div class='flex items-center mb-4'>
                  <input
                    id='requesting-tickets'
                    type='radio'
                    value='Looking'
                    onChange={handleRadioChange}
                    checked={ticketType === 'Looking'}
                    class='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
                  />
                  <label
                    for='requesting-tickets'
                    class='text-sm font-medium  ml-2 block'>
                    Looking!
                  </label>
                </div>
                <div class='flex items-center mb-4'>
                  <input
                    id='selling-tickets'
                    type='radio'
                    value='Selling'
                    onChange={handleRadioChange}
                    checked={ticketType === 'Selling'}
                    class='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-primary'
                  />
                  <label
                    for='selling-tickets'
                    class='text-md font-light text-bg-accent ml-2 block'>
                    Selling!
                  </label>
                </div>
              </fieldset>
            </div>
            <div>
              <input
                type='number'
                id='ticketAmount'
                value={ticketAmount}
                onChange={(e) => setTicketAmount(e.target.value)}
                placeholder='how many tickets?'
                class='input input-ghost w-full '
              />
            </div>

            <div>
              <input
                type='text'
                id='body'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder='write your message here! price, offers, etc'
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
