import React from 'react';
import Helmet from 'react-helmet';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact — MFCoder</title>
        <meta name="description" content="Contact page of MFCoder" />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail">
          <h1 className="post-title">Subscribe to our newsletter!</h1>
          <p>
            I'll never use your email for anything different than notifying you
            about new articles.
          </p>
        </div>
        <div>
          <form
            className="form-container"
            action="https://sendmail.w3layouts.com/SubmitContactForm"
            method="post"
          >
            <div>
              <label htmlFor="w3lSender">Enter your email</label>
              <input
                type="email"
                name="w3lSender"
                id="w3lSender"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <input
                type="submit"
                className="button -primary"
                style={{ marginRight: 0, cursor: 'pointer' }}
                value="Sign me up!"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
