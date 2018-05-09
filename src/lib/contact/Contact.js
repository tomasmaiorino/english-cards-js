import React, { Component } from 'react';
import Select from './../../Select';

<<<<<<< HEAD
// const CARD_URL = "http://localhost:8080/api/v1/content-types?q=grammar";
// const CARD_URL_PROD = "https://fathomless-tundra-22713.herokuapp.com/api/v1/content-types?q=grammar";
const token = 'qwetyuasdtyuer4rr';
//const API = "http://172.17.0.3:8080/api/v1/messages/" + token;
const API = "http://localhost:40585/api/v1/messages/" + token;


=======
>>>>>>> c5b3eb3a718e703d2e3d1e4588a5549a5ee0c48a
class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      subject: "",
      enableSubmit: false
    };

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendingEmail = this.sendingEmail.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubject(e) {
    this.setState({
      subject: e.target.value
    });
  }

  sendingEmail() {
    console.log("sending email  ->");
    const data = {
      senderName: this.state.name,
      senderEmail: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };
    console.log(data);
    fetch(API, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(data => this.setState({
        email: null,
        name: null,
        subject: null,
        message: null
      }))
      .catch(error => console.log(error));
  }

  enableSubmit() {
    return (
      this.state.email &&
      this.state.email.length > 0 &&
      /@/.exec(this.state.email) &&
      this.state.name &&
      this.state.name.length > 0 &&
      this.state.subject &&
      this.state.subject.length > 0 &&
      this.state.message && 
      this.state.message.length > 0
    );
  }

  handleSubmit(e) {
    this.sendingEmail();
    e.preventDefault();
  }

  render() {
<<<<<<< HEAD

    const enable = this.enableSubmit();

=======
     const {email, name, message, subject} = this.state;
    // const isEmailValid = email === null || email.length > 10 && email.indexOf('@') !== -1;
    // const isNameValid = name === null || name.length > 9 && /[a-zA-Z]+? [a-zA-Z]/.test(name);
    // const isMessageValid = message === null || message.length > 10;
    const enable = true;
>>>>>>> c5b3eb3a718e703d2e3d1e4588a5549a5ee0c48a
    return (

      <section id="contact">
        <h2 className="mb-5 font-weight-bold text-center">Contact us</h2>
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <form className="p-5" id="contactForm">
              <div className="md-form form-sm">
<<<<<<< HEAD
                <i className="fa fa-user prefix grey-text" />
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="senderName"
                  onChange={this.handleName}
                  value={this.state.name}
                />
                <label htmlFor="senderName">Your name *</label>
              </div>
              <div className="has-warning md-form form-sm">
                <i className="fa fa-envelope prefix grey-text" />
                <input
                  type="text"
                  name="email"
                  onChange={this.handleEmail}
                  value={this.state.email}
                  className="form-control"
                  id="senderEmail"
                />
                <label htmlFor="senderEmail">Your email *</label>
                <small className="form-text text-muted red-text">
                  invalid email
                </small>
              </div>
              <div className="has-error md-form form-sm">
                <i className="fa fa-tag prefix grey-text" />
                <input
                  type="text"
                  name="subject"
                  onChange={this.handleSubject}
                  value={this.state.subject}
                  className="form-control"
                  id="senderEmail"
                />
=======
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
>>>>>>> c5b3eb3a718e703d2e3d1e4588a5549a5ee0c48a
                <label htmlFor="subject">Subject *</label>
                <small className="form-text text-muted red-text" />
              </div>
              <div className="md-form form-sm">
                <i className="fa fa-pencil prefix grey-text" />
                <textarea
                  type="text"
                  name="message"
                  className="md-textarea"
                  style={{
                    height: 100
                  }}
<<<<<<< HEAD
                  id="message"
                  onChange={this.handleMessage}
                  value={this.state.message}
                  data-validation-required-message="Please enter a message."
                />
                <label htmlFor="message">Your message *</label>
              </div>
              <div className="text-center">
                <button
                  disabled={!enable}
                  onClick={this.handleSubmit}
                  className="btn btn-unique"
                >
                  Send <i className="fa fa-paper-plane-o ml-1" />
                </button>
=======
                  id="message" data-validation-required-message="Please enter a message." value={this.state.message} onChange={this.handleInputChange}>
                </textarea>
                <label htmlFor="message">Your message *</label>
              </div>
              <div className="text-center">
                <button className="btn btn-unique" disable={!enable}>Send <i className="fa fa-paper-plane-o ml-1"></i></button>
>>>>>>> c5b3eb3a718e703d2e3d1e4588a5549a5ee0c48a
              </div>
            </form>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="row text-center">
              <div className="col-lg-4 col-md-12 mb-3">
                <p>
                  <i className="fa fa-map fa-1x mr-2 grey-text" />New York, NY
                  10012
                </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <p>
                  <i className="fa fa-building fa-1x mr-2 grey-text" />Mon -
                  Fri, 8:00-22:00
                </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <p>
                  <i className="fa fa-phone fa-1x mr-2 grey-text" />+ 01 234 567
                  89
                </p>
              </div>
            </div>
            <div
              id="map-container"
              className="z-depth-1-half map-container"
              style={{
                height: 400
              }}
            />
          </div>
        </div>
      </section>


    )
  }
}

export default Contact;
