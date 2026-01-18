'use client';

import './signup.css';

const Signup = () => {
  return (
    <form
      action="https://app.convertkit.com/forms/1354718/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="1354718"
      data-uid="3ce5e74b86"
      data-format="inline"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"modal":{"trigger":null,"scroll_percentage":null,"timer":null,"devices":null,"show_once_every":null},"recaptcha":{"enabled":false},"return_visitor":{"action":"hide","custom_content":""},"slide_in":{"display_in":null,"trigger":null,"scroll_percentage":null,"timer":null,"devices":null,"show_once_every":null}}}'
      style={{
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '6px',
        margin: 'auto',
      }}
    >
      <div data-style="full">
        <div
          data-element="column"
          className="formkit-column"
          style={{ backgroundColor: 'rgb(249, 250, 251)' }}
        >
          <h1
            className="formkit-header"
            data-element="header"
            style={{
              color: 'rgb(77, 77, 77)',
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            Join the Newsletter
          </h1>
          <div
            data-element="subheader"
            className="formkit-subheader"
            style={{ color: 'rgb(104, 104, 104)', fontSize: '15px' }}
          >
            <p>Subscribe to get my latest content by email.</p>
          </div>
          <div className="formkit-image">
            <img
              src="/images/avatar.svg"
              style={{ maxWidth: '60px', marginBottom: 0 }}
              alt="Avatar"
            />
          </div>
        </div>
        <div data-element="column" className="formkit-column">
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          />

          <div data-element="fields" className="seva-fields formkit-fields">
            <div className="formkit-field">
              <input
                className="formkit-input"
                aria-label="Your first name"
                name="fields[first_name]"
                placeholder="Your first name"
                type="text"
                style={{
                  borderColor: 'rgb(227, 227, 227)',
                  borderRadius: '4px',
                  color: 'rgb(0, 0, 0)',
                  fontWeight: 400,
                }}
              />
            </div>
            <div className="formkit-field">
              <input
                className="formkit-input"
                name="email_address"
                placeholder="Your email address"
                required
                type="text"
                style={{
                  borderColor: 'rgb(227, 227, 227)',
                  borderRadius: '4px',
                  color: 'rgb(0, 0, 0)',
                  fontWeight: 400,
                }}
              />
            </div>
            <button
              data-element="submit"
              className="formkit-submit formkit-submit"
              style={{
                backgroundColor: 'rgb(131, 44, 44)',
                borderRadius: '24px',
                color: 'rgb(255, 255, 255)',
                fontWeight: 700,
              }}
            >
              <div className="formkit-spinner" />
              <span>Subscribe</span>
            </button>
          </div>
          <div
            data-element="guarantee"
            className="formkit-guarantee"
            style={{
              color: 'rgb(77, 77, 77)',
              fontSize: '13px',
              fontWeight: 400,
            }}
          >
            <p>I won&apos;t send you spam.</p>
            <p>
              Unsubscribe at <em>any</em> time.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
