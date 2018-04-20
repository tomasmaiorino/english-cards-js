import React, {Component} from 'react';

class Features extends Component {

  render() {
    return (
      <div>
        <section id="best-features" className="text-center">
         <h2 className="mb-4 font-weight-bold">Features</h2>
         <div className="row d-flex justify-content-center mb-4">
          <div className="col-md-8">
           <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptate hic provident nulla repellat
            facere esse molestiae ipsa labore porro minima quam quaerat rem, natus repudiandae debitis est
            sit pariatur.</p>
           </div>
          </div>
          <div className="row">
           <div className="col-md-4 mb-5">
            <i className="fa fa-address-card-o fa-4x orange-text"></i>
            <h4 className="my-4 font-weight-bold">Vocabulary Cards</h4>
            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
             assumenda deleniti hic.</p>
            </div>
            <div className="col-md-4 mb-1">
             <i className="fa fa-file-text fa-4x orange-text"></i>
             <h4 className="my-4 font-weight-bold">Definitions</h4>
             <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
              assumenda deleniti hic.</p>
             </div>
             <div className="col-md-4 mb-1">
              <i className="fa fa-book fa-4x orange-text"></i>
              <h4 className="my-4 font-weight-bold">Grammar and Tips</h4>
              <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
               assumenda deleniti hic.</p>
              </div>
             </div>
            </section>

      </div>
    );

  }
}

export default Features;
