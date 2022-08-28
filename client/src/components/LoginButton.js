// add the login-form details

function LoginButton() {
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      <label for='my-modal-6' class='btn modal-button'>
        LOGIN
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type='checkbox' id='my-modal-6' class='modal-toggle' />
      <div class='modal modal-bottom sm:modal-middle'>
        <div class='modal-box'>
          <h3 class='font-bold text-lg'>ENTER YOUR USERNAME and PASSWORD</h3>
          <p class='py-4'>LOGIN</p>
          <div class='modal-action'>
            <label for='my-modal-6' class='btn'>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginButton;
