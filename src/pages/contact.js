import React from 'react';

const ContactPage = () => {
  return (
    <>
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
            <div className="no-display">
              <label htmlFor="w3lName">Name</label>
              <input type="text" name="w3lName" id="w3lName" value="default" />
            </div>
            <div>
              <label htmlFor="w3lSender">Enter your email</label>
              <input
                type="email"
                name="w3lSender"
                id="w3lSender"
                placeholder="example@mail.com"
              />
            </div>
            <div className="no-display">
              <label htmlFor="w3lSubject">Subject</label>
              <input
                type="text"
                name="w3lSubject"
                id="w3lSubject"
                value="default"
              />
            </div>
            <div className="no-display">
              <label htmlFor="w3lMessage">Message</label>
              <textarea
                name="w3lMessage"
                id="w3lMessage"
                value="default"
              ></textarea>
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
