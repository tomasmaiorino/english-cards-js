import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      subject: '',
      email: null,
      message: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
     const {email, name, message, subject} = this.state;
    // const isEmailValid = email === null || email.length > 10 && email.indexOf('@') !== -1;
    // const isNameValid = name === null || name.length > 9 && /[a-zA-Z]+? [a-zA-Z]/.test(name);
    // const isMessageValid = message === null || message.length > 10;
    const enable = true;
    return (

      <section id="contact">
        <h2 className="mb-5 font-weight-bold text-center">Contact us</h2>
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <form className="p-5" id="contactForm">
              <div className="md-form form-sm">
                <i className="fa fa-user prefix grey-text"></i>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} className="form-control" id="senderName" />
                <label htmlFor="senderName">Your name *</label>
              </div>
              <div className="has-warning md-form form-sm">
                <i className="fa fa-envelope prefix grey-text"></i>
                <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" id="senderEmail" />
                <label htmlFor="senderEmail">Your email *</label>
              </div>
              <div className="has-error md-form form-sm">
                <i className="fa fa-tag prefix grey-text"></i>
                <input type="text" name="subject"
                  className="form-control" value={this.state.subject} onChange={this.handleInputChange} id="subject" data-validation-required-message="Please enter a subject." />
                <label htmlFor="subject">Subject *</label>
                <small className="form-text text-muted red-text"></small>
              </div>
              <div className="md-form form-sm">
                <i className="fa fa-pencil prefix grey-text"></i>
                <textarea type="text" name="message" className="md-textarea"
                  style={{
                    height: 100
                  }}
                  id="message" data-validation-required-message="Please enter a message." value={this.state.message} onChange={this.handleInputChange}>
                </textarea>
                <label htmlFor="message">Your message *</label>
              </div>
              <div className="text-center">
                <button className="btn btn-unique" disable={!enable}>Send <i className="fa fa-paper-plane-o ml-1"></i></button>
              </div>
            </form>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="row text-center">
              <div className="col-lg-4 col-md-12 mb-3">
                <p><i className="fa fa-map fa-1x mr-2 grey-text"></i>New York, NY 10012</p>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <p><i className="fa fa-building fa-1x mr-2 grey-text"></i>Mon - Fri, 8:00-22:00</p>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <p><i className="fa fa-phone fa-1x mr-2 grey-text"></i>+ 01 234 567 89</p>
              </div>
            </div>
            <div id="map-container" className="z-depth-1-half map-container" style={{
              height: 400
            }}></div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
