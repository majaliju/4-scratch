// add the login-form details

function LoginButton() {
  return (
    <div>
      <label for='my-modal-4' class='btn glass modal-button'>
        LOGIN
      </label>

      <input type='checkbox' id='my-modal-4' class='modal-toggle' />
      <label for='my-modal-4' class='modal cursor-pointer'>
        <label class='modal-box relative' for=''>
          <h3 class='text-lg font-bold'>LOGIN</h3>
          <div class='form-control'>
            <label class='label'></label>
            <label class='input-group'>
              <span class='uppercase'>Username</span>
              <input type='text' class='input input-bordered' />
            </label>
            <label class='input-group'>
              <span class='uppercase'>Password</span>
              <input type='text' class='input input-bordered' />
            </label>
            <button class='btn glass'>SUBMIT</button>
          </div>
        </label>
      </label>
    </div>
  );
}

export default LoginButton;
