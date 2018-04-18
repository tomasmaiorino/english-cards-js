import React, { Component } from 'react';
import Load from './../Load';
import Content from './Content';

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: [],
      currentContent: 0
    }
  }
  /*
    componentWillMount() {
      const contentsTest =
        [
          {
            id: 100,
            name: "Grammar",
            status: "ACTIVE",
            rules: null,
            contents: [
              {
                id: 102,
                name: "Prepositions",
                content: "<div _ngcontent-c8=\"\"><div> <div class=\"row\"> <div class=\"col-md-6\"> <h4 class=\"mb-3\"><strong>Prepositions</strong></h4> <p></p> <ul> <li>Prepositions indicate relationships between other words in a sentence.</li> <li>Many prepositions tell you where something is or when something happened.</li> <li>Most prepositions have several definitions, so the meaning changes quite a bit in different contexts.</li> <li>Ending a sentence with a preposition is not a grammatical error.</li> </ul> <p></p> <h4 class=\"mb-3\"><strong>Prepositions</strong></h4> <p>Prepositions tell us where or when something is in relation to something else. When monsters are approaching, it’s good to have these special words to tell us where those monsters are. Are they behind us or in front of us? Will they be arriving in three seconds or at midnight?</p> <p>Prepositions tell us where or when something is in relation to something else. When monsters are approaching, it’s good to have these special words to tell us where those monsters are. Are they behind us or in front of us? Will they be arriving in three seconds or at midnight?</p> <p></p> <p>Prepositions often tell us where one noun is in relation to another (e.g., The coffee is on the table beside you). But they can also indicate more abstract ideas, such as purpose or contrast (e.g., We went for a walk despite the rain).</p></div> <div class=\"col-md-6\"> <h4 class=\"mb-3\"><strong>Types of Prepositions</strong></h4> <p>Prepositions indicate direction, time, location, and spatial relationships, as well as other abstract types of relationships. </p> <ul> <li>Direction: Look to the left and you’ll see our destination.</li> <li>Time: We’ve been working since this morning.</li> <li>Location: We saw a movie at the theater.</li> <li>Space: The dog hid under the table.</li> </ul> <h4 class=\"mb-3\"><strong>Examples of Prepositions</strong></h4> <p>Unfortunately, there’s no reliable formula for determining which preposition to use with a particular combination of words. The best way to learn which prepositions go with which words is to read as much high-quality writing as you can and pay attention to which combinations sound right. Here are a few examples of the most common prepositions used in sentences.</p> <ul> <li>Did you send that letter <mark class=\"tool__keyword\">to</mark> your mother?</li> <li>Sam left his jacket <mark class=\"tool__keyword\">in</mark> the car.</li> <li>I should rewrite the introduction <mark class=\"tool__keyword\">of</mark> my essay.</li> <li>We’re cooking <mark class=\"tool__keyword\">for</mark> ten guests tonight.</li> <li>Dan ate lunch <mark class=\"tool__keyword\">with</mark> his boss.</li> </ul></div> </div></div></div>",
                isHtml: true,
                status: "ACTIVE",
                contentType: null,
                imgUrl: null
              },
              {
                id: 103,
                name: "Clauses and Phrases",
                content: "<div _ngcontent-c8=\"\"><div> <div class=\"row\"> <div class=\"col-md-6\"> <h4 class=\"mb-3\"><strong>Clauses and Phrases</strong></h4> <p></p> <p>A <strong>clause</strong> is a group of words containing a subject and verb. An independent clause is a simple sentence. It can stand on its own</p> <p><strong>Examples:</strong> She is hungry. I am feeling well today.</p> <p></p> <p>A <strong>dependent</strong> clause cannot stand on its own. It needs an independent clause to complete a sentence. Dependent clauses often begin with such words as although, since, if, when, and because.</p> <p><strong>Examples:</strong> Although she is hungry … Whoever is hungry … Because I am feeling well …</p> </div> <div class=\"col-md-6\"> <p> </p><table> <tbody><tr> <td><strong>Dependent</strong></td> <td><span><strong>Independent</strong></span></td> </tr> <tr> <td>Although she is hungry,</td> <td><span>she will give him some of her food</span></td> </tr> <tr> <td>Whatever they decide,</td> <td><span>I will agree to.</span></td> </tr> </tbody></table> <p></p> <p>A <strong>phrase</strong> is a group of words without a subject-verb component, used as a single part of speech.</p> <p><strong>Examples:</strong> Best friend (this phrase acts as a noun) Needing help (this phrase acts as an adjective; see Adjectives and Adverbs) With the blue shirt (this prepositional phrase acts as an adjective; see Prepositions) For twenty days (this prepositional phrase acts as an adverb)</p> </div> </div></div></div>",
                isHtml: true,
                status: "ACTIVE",
                contentType: null,
                imgUrl: null
              },
              {
                id: 104,
                name: "Clauses and Phrases Changed",
                content: "<div _ngcontent-c8=\"\"><div> <div class=\"row\"> <div class=\"col-md-6\"> <h4 class=\"mb-3\"><strong>Clauses and Phrases  Changed </strong></h4> <p></p> <p>A <strong>clause</strong> is a group of words containing a subject and verb. An independent clause is a simple sentence. It can stand on its own</p> <p><strong>Examples:</strong> She is hungry. I am feeling well today.</p> <p></p> <p>A <strong>dependent</strong> clause cannot stand on its own. It needs an independent clause to complete a sentence. Dependent clauses often begin with such words as although, since, if, when, and because.</p> <p><strong>Examples:</strong> Although she is hungry … Whoever is hungry … Because I am feeling well …</p> </div> <div class=\"col-md-6\"> <p> </p><table> <tbody><tr> <td><strong>Dependent</strong></td> <td><span><strong>Independent</strong></span></td> </tr> <tr> <td>Although she is hungry,</td> <td><span>she will give him some of her food</span></td> </tr> <tr> <td>Whatever they decide,</td> <td><span>I will agree to.</span></td> </tr> </tbody></table> <p></p> <p>A <strong>phrase</strong> is a group of words without a subject-verb component, used as a single part of speech.</p> <p><strong>Examples:</strong> Best friend (this phrase acts as a noun) Needing help (this phrase acts as an adjective; see Adjectives and Adverbs) With the blue shirt (this prepositional phrase acts as an adjective; see Prepositions) For twenty days (this prepositional phrase acts as an adverb)</p> </div> </div></div></div>",
                isHtml: true,
                status: "ACTIVE",
                contentType: null,
                imgUrl: null
              }
            ],
            imgUrl: null
          }
        ]
  
    }
  */
  componentDidMount() {
    //const CARD_URL = "http://localhost:8080/api/v1/content-types?q=grammar";
    const CONTENT_URL = "https://fathomless-tundra-22713.herokuapp.com/api/v1/content-types?q=grammar";

    // returns a promise object
    fetch(CONTENT_URL).then(result => result.json()).then((data) => {
      this.setState({
        contentType: data[0].contents,
      })
    }, (error) => {
      this.setState({ isLoaded: false, error: error });
      console.log(error);
    });
  }

  doNextAction = () => {
    this.setState((prevState) => ({
      currentContent: prevState.currentContent + 1
    }));
  }

  doPreviousAction = () => {
    this.setState((prevState) => ({
      currentContent: prevState.currentContent - 1
    }));
  }


  enableContentInContentType = () => {
    return this.state.contentType.map((cont, index) => {
      if (index === this.state.currentContent) {
        cont.isVisible = true;
      } else {
        cont.isVisible = false;
      }
      return cont;
    });
  }

  render() {
    if (!this.state.contentType || this.state.contentType.length === 0) {
      return (
        <section id="grammar">
          <h2 className="mb-5 font-weight-bold text-center">Grammar Tips</h2>
          <Load />
        </section>
      );
    }
    const contentType = this.enableContentInContentType();
    const contentsList = contentType.map((cont) =>
      <Content key={cont.id} content={cont}
        previousAction={this.doPreviousAction.bind(this)}
        nextAction={this.doNextAction.bind(this)}
        currentPosition={this.state.currentContent}
        contentLength={contentType.length} />
    );

    return (
      <section id="grammar">
        <h2 className="mb-5 font-weight-bold text-center">Grammar Tips</h2>
        {contentsList}
      </section>
    );
  }
}

export default Contents;
