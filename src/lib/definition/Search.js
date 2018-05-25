import React from "react";
import Result from "./Result";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      syn: false,
      mean: false,
      usage: false,
      searchingSyn: false,
      searchingMean: false,
      searchingUsage: false,
      word: "",
      showResultLoad: false,
      searchResult: [],
      errorMessage: ""
    };
    this.handleWordInput = this.handleWordInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.isTypeSearchSelected = this.isTypeSearchSelected.bind(this);
    this.addSearchResult = this.addSearchResult.bind(this);
    this.searchSyn = this.searchSyn.bind(this);
    this.isSearching = this.isSearching.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(e) {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }

  handleWordInput(e) {
    this.setState({
      word: e.target.value.trim()
    });
  }

  searchMean(word) {
    this.setState({
      searchingMean: true
    });
    const CONTENT_URL =
      "https://fathomless-tundra-22713.herokuapp.com/api/v1/definitions/" +
      word;
    this.search(
      CONTENT_URL,
      "definitions",
      "searchingMean",
      data => (data.definitions ? data.definitions[0].definitions : null)
    );
  }

  searchSyn(word) {
    this.setState({
      searchingSyn: true
    });
    const CONTENT_URL =
      "https://fathomless-tundra-22713.herokuapp.com/api/v1/definitions/" +
      word +
      "/synonyms";
    this.search(
      CONTENT_URL,
      "synonyms",
      "searchingSyn",
      data => (data.definitions ? data.definitions[0].synonyms : null)
    );
  }

  searchUsage(word) {
    const CONTENT_URL =
      "https://fathomless-tundra-22713.herokuapp.com/api/v1/definitions/" +
      word +
      "/sentences";
    this.search(
      CONTENT_URL,
      "sentences",
      "searchingUsage",
      data => (data.definitions ? data.definitions[0].sentences : null)
    );
  }

  search(contentUrl, searchType, searchingParam, searchCheck) {
    this.setState({
      [searchingParam]: true
    });
    let resStatus = 0;
    fetch(contentUrl)
      .then(result => {
        resStatus = result.status;
        return result.json();
      })
      .then(
        data => {
          switch (resStatus) {
            case 200:
              if (searchCheck(data)) {
                this.addSearchResult(
                  {
                    type: searchType,
                    content: Object.values(searchCheck(data))
                  },
                  searchingParam,
                  false
                );
              }
              break;
            case 400:
              //console.log("deu ruim :( " + data.message);
              this.setState({
                showResultLoad: false,
                [searchingParam]: false,
                errorMessage: data.message,
                syn: false,
                mean: false,
                usage: false
              });
              console.log("test " + this.state.syn);
              break;
            default:
          }
        },
        error => {
          this.setState({
            showResultLoad: false,
            [searchingParam]: false
          });
          console.log(error);
        }
      );
  }

  addSearchResult(result, name, value) {
    const searchResult = this.state.searchResult;
    searchResult.push(result);
    this.setState({
      searchResult: searchResult,
      showResultLoad: false,
      [name]: value
    });
  }

  handleSearchSubmit(e) {
    this.setState({
      showResultLoad: true,
      searchResult: [],
      errorMessage: ""
    });
    if (this.state.mean) {
      this.searchMean(this.state.word);
    }
    if (this.state.syn) {
      this.searchSyn(this.state.word);
    }
    if (this.state.usage) {
      this.searchUsage(this.state.word);
    }
    e.preventDefault();
  }

  isTypeSearchSelected() {
    return this.state.mean || this.state.syn || this.state.usage;
  }

  isSearching() {
    return (
      this.state.searchingMean ||
      this.state.searchingSyn ||
      this.state.searchingUsage
    );
  }

  render() {
    const enableSubmit =
      this.state.word &&
      /^[a-zA-z]+$/.test(this.state.word) &&
      this.isTypeSearchSelected() &&
      !this.isSearching();
    return (
      <div className="row">
        <div className="col-md-4 border-right">
          <form>
            <div className="md-form">
              <i className="fa fa-user prefix grey-text"></i>
              <input type="text" id="materialFormContactNameEx"
                value={this.state.word}
                onChange={this.handleWordInput}
                className="form-control" />
              <label for="materialFormContactNameEx">Your word</label>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input"
                  name="syn"
                  value={this.state.syn}
                  onChange={this.handleCheck}
                  type="checkbox" id="checkSyn" />
                <label className="form-check-label" forhtml="checkSyn">
                  Synonyms
              </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input"
                  name="mean"
                  value={this.state.mean}
                  onChange={this.handleCheck}
                  type="checkbox" id="checkMean" />
                <label className="form-check-label" forhtml="checkMean">
                  Definition
              </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input"
                  name="usage"
                  value={this.state.usage}
                  onChange={this.handleCheck}
                  type="checkbox" id="checkUsage" />
                <label className="form-check-label" forhtml="checkUsage">
                  Sentences
              </label>
              </div>
            </div>
            <div className="flex-row">
              <button
                disabled={!enableSubmit}
                onClick={this.handleSearchSubmit}
                type="button"
                className="btn btn-outline-primary waves-effect">
                Search
            </button>
            </div>
          </form>
        </div>
        <Result
          showLoad={this.state.showResultLoad}
          result={this.state.searchResult} />
      </div>
    );
  }
}
export default Search;
