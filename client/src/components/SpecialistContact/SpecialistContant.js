import React from 'react';
import '../css/style.css';

// Header message = { this.state.info }

const SpecialistContact = (props) => {
  return (
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
        <div class="container">
          <div class="banner_content text-center">
            <h2>CONTACT A SPECIALIST</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="contact_area p_120">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" id="email" name="email" placeholder="Enter email address">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="subject" name="subject" placeholder="Enter Subject">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea class="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                </div>
              </div>
              <div class="col-md-12 text-right">
                <button type="submit" value="submit" class="btn submit_btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SpecialistContact;