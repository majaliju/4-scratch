function CreatePost() {
  return (
    <div>
      <div class='px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
        <div class='max-w-lg mx-auto'>
          <h1 class='text-2xl font-bold text-center text-indigo-600 sm:text-3xl'>
            Easily post your tickets!
          </h1>

          <form action='' class='p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4'>
            <p class='text-lg font-lg'>T</p>

            <div>
              <label for='body' class='text-sm font-medium'>
                body
              </label>

              <div class='relative mt-1'>
                <input
                  type='body'
                  id='body'
                  class='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Type out your post here!'
                />

                <span class='absolute inset-y-0 inline-flex items-center right-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              {/* GOTTA DO A CHECKBOX IF LOOKING FOR SELLING -- INFO COMES FROM WHAT THE USER PASSED IN BASED ON WHICH BUTTON THEY CLICK */}
              <label for='for_sale' class='text-sm font-medium'>
                for_sale
              </label>

              <div class='relative mt-1'>
                <input
                  type='for_sale'
                  id='for_sale'
                  class='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter for_sale'
                />

                <span class='absolute inset-y-0 inline-flex items-center right-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
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
