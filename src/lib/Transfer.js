import React, {Component} from 'react';

//const CARD_URL = "http://localhost:8080/api/v1/content-types?q=grammar";
const TRANSFER_URL_PROD = "http://172.17.0.3:8080/api/v1/transfers";

class Transfer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      destinationAccount: null,
      originAccount: null,
      scheduleDate: '',
      transferValue: ''
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

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    const {transferValue, scheduleDate, originAccount, destinationAccount} = this.state;
    console.log('transferValue: ' + transferValue);
    console.log('scheduleDate: ' + scheduleDate);
    console.log('originAccount: ' + originAccount);
    console.log('destinationAccount: ' + destinationAccount);
    var form = new FormData(document.getElementById('contactForm'));
    var formatedForm = JSON.stringify(form);
    console.log('form ' + formatedForm);

    // returns a promise object
    fetch(TRANSFER_URL_PROD, {
      method: "POST",
      //mode: "no-cors",
      headers: {
          "Content-Type": "application/json"
        },
      body: JSON.stringify({'transferValue': transferValue, 'scheduleDate': scheduleDate, 'originAccount': originAccount, 'destinationAccount': destinationAccount})
    }).then(result => result.json()).then((data) => {
      //console.log("-- "+ data.length);
      this.setState({isLoaded: true, items: data});
    }, (error) => {
      this.setState({isLoaded: false, error: error});
      console.log(error);
    });

    event.preventDefault();
  }

  render() {
    const {transferValue, scheduleDate, originAccount, destinationAccount} = this.state;
    const isTransferValue = transferValue == null || transferValue.length > 10;
    const isScheduleDateValid = scheduleDate == null || scheduleDate.length > 9; // && /[\d]{4}-[\d]{2}-[\d]{2}/.test(scheduleDate);
    const isOriginAccount = originAccount == null || originAccount.length > 10;
    const isDestinationAccount = destinationAccount == null || destinationAccount.length > 10;
    const isEnable = transferValue != null && scheduleDate != null && originAccount != null && isTransferValue && isScheduleDateValid && isOriginAccount;

    return (

      <div className="col-lg-5 col-md-12">

        <form className="p-5" id="contactForm" onSubmit={this.handleSubmit}>

          <div className="md-form form-sm">
            <i className="fa fa-user prefix grey-text"></i>
            <input type="text" value={this.state.destinationAccount} name="destinationAccount" onChange={this.handleInputChange} className="form-control" data-validation-required-message="Please enter the destination account."/>
            <label htmlFor="destinationAccount" style={{
              color: !isDestinationAccount
                ? 'red'
                : '#817C78'
            }}>Destination account {!isDestinationAccount
                ? '- The destination account must have at least 10 number!'
                : ''}</label>
          </div>

          <div className="md-form form-sm">
            <i className="fa fa-user prefix grey-text"></i>
            <input type="text" value={this.state.originAccount} name="originAccount" onChange={this.handleInputChange} className="form-control" data-validation-required-message="Please enter the origin account."/>
            <label htmlFor="originAccount" style={{
              color: !isOriginAccount
                ? 'red'
                : '#817C78'
            }}>Origin account {!isOriginAccount
                ? '- The origin account must have at least 10 number!'
                : ''}</label>
          </div>

          <div className="md-form form-sm">
            <i className="fa fa-calendar prefix grey-text"></i>
            <input type="text" value={this.state.scheduleDate} name="scheduleDate" className="form-control date" data-validation-required-message="Please enter the schedule date." onChange={this.handleInputChange}/>
            <label htmlFor="form34">Schedule date (yyyy-MM-dd)</label>
          </div>

          <div className="md-form form-sm">
            <i className="fa fa-money prefix grey-text"></i>
            <input type="text" value={this.state.transferValue} name="transferValue" onChange={this.handleInputChange} className="form-control money" data-validation-required-message="Please enter the transfer value."/>
            <label htmlFor="form8">Tranfer value</label>
          </div>

          <div className="">
            <span style={{
              display: 'none',
              color: '#00C851'
            }} id="message"></span>
          </div>

          <div className="" ng-repeat="error in errors" ng-show="errors != null">
            <span style={{
              color: '#880e4f'
            }} className="font-weight-bold"></span>
          </div>

          <div className="text-center">
            <button className="btn btn-unique" disabled={!isEnable} onClick={this.handleSubmit}>
              Transfer
              <i className="fa fa-paper-plane-o ml-1"></i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Transfer;
