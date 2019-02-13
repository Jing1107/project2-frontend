import React, { Component } from 'react';


class About extends Component {
  render () {
    return (
      <section className="bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="text-center text-uppercase text-white">About</h2>
          <hr className="star-light mb-5" />
          <div className="row">
            <div className="col-lg-4 ml-auto">
              <p className="lead">Board Game Arena (BGA) is an online board game platform. With BGA, you can play online and in real time against players from around the world. A selection of various board games and card games are available. In order to play, the only thing you need is your browser!
              </p>
            </div>
            <div className="col-lg-4 mr-auto">
              <p className="lead">On Board Game Arena your opponents are connected to the game platform during the entire game. They can see your moves and react to them immediately - as is the case in the real world.</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="#">
              
              Game Arena
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About
