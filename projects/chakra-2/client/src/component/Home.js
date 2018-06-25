import React, { Component } from "react"
import Modal from './Modal'

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {isOpen: false, isOpen2: false, isOpen3: false, isToggled: false, isToggledB: false, isToggledC: false, isToggledD: false, isToggledE: false, isToggledF: false, isToggledG: false};
    }

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      toggleModal2 = () => {
        this.setState({
          isOpen2: !this.state.isOpen2
        });
      }

      toggleModal3 = () => {
        this.setState({
          isOpen3: !this.state.isOpen3
        });
      }
      toggle = () => {
        this.setState({
          isToggled: !this.state.isToggled
        })
      }
      toggleB = () => {
        this.setState({
          isToggledB: !this.state.isToggledB
        })
      }
      toggleC = () => {
        this.setState({
          isToggledC: !this.state.isToggledC,
        })
      }
      toggleD = () => {
        this.setState({
          isToggledD: !this.state.isToggledD,
        })
      }
      toggleE = () => {
        this.setState({
          isToggledE: !this.state.isToggledE,
        })
      }
      toggleF = () => {
        this.setState({
          isToggledF: !this.state.isToggledF,
        })
      }
      toggleG = () => {
        this.setState({
          isToggledG: !this.state.isToggledG,
        })
      }
     
      render() {
        return (
          <div className="homePage">
            <div>
                <div className="what">
                    <button className="whatBtn" onClick={this.toggleModal}>
                    What is chakra balancing?
                    </button>
                  <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    `Chakra balancing is the process of restoring a harmonious flow of energy across the chakra system. The effect of well balanced chakras often translates into a feeling of well-being,relaxation, centeredness, increased vitality and embodiment of oneself.`
                  </Modal>
                </div>
                <div className="how">
                    <button className="howBtn" onClick={this.toggleModal2}>
                    How to balance chakras.
                    </button>
                  <Modal show={this.state.isOpen2}
                    onClose={this.toggleModal2}>
                    `Chakra balancing techniques fall into in three categories: Those centered on a physical process or activity, a meditative or introspective practice, and the transmission of energy from another person or on your own.`
                  </Modal>
                </div>
                <div className="why">
                    <button className="whyBtn" onClick={this.toggleModal3}>
                      Why balance your chakras?
                    </button>
                  <Modal show={this.state.isOpen3}
                    onClose={this.toggleModal3}>
                    `The purpose of chakra balancing is to support a balanced flow that will sustain our overall level of energy. In our everyday life,we are subjected to a number of activities, sources of stress and demands that result in fluctuations in our energy level. Some may feel draining, others fulfilling or nourishing. Furthermore, past events and experiences often leave a long lasting influence on how we feel and are in the world,therefore influencing how we manage our energy day-to-day.`
                  </Modal>
                  </div>
              </div>
              <div className="allChakra">
                  <div>
                    <button className="crown" onClick={this.toggle}> Crown Chakra </button>
                    <Modal show={this.state.isToggled}
                      onClose={this.toggle}>
                      <img className="colors" src="http://www.chakras.info/wp-content/uploads/Crown-Chakra-1.jpg" alt="crown"/>
                      <h3>The Crown Chakra</h3>
                      <p>Functions: Wisdom, transcendence, universality</p>
                    </Modal>
                  </div>
                  <div>
                      <button className="thirdEye" onClick={this.toggleB}> Third Eye Chakra </button>
                      <Modal show={this.state.isToggledB}
                        onClose={this.toggleB}>
                      <img className="colors" src="http://www.chakras.info/wp-content/uploads/Third-Eye-Chakra-1.jpg" alt="third eye"/>
                      <h3>The Third Eye Chakra</h3>
                      <p>Functions: Extrasensory perception, intuition, inspiration</p>
                      </Modal>
                  </div>
                  <div>
                      <button className="throat" onClick={this.toggleC}> Throat Chakra </button>
                      <Modal show={this.state.isToggledC}
                        onClose={this.toggleC}>
                      <img className="colors" src="http://www.chakras.info/wp-content/uploads/Throat-Chakra-1.jpg" alt="throat"/>
                      <h3>The Throat Chakra</h3>
                      <p>Function: Personal truth, etheric, expression</p>
                      </Modal>
                  </div>
                  <div>
                      <button className="heart" onClick={this.toggleD}> Heart Chakra </button>
                      <Modal show={this.state.isToggledD}
                        onClose={this.toggleD}>
                      <img className="colors" src="http://www.chakras.info/wp-content/uploads/Heart-Chakra-1.jpg" alt="heart"/>
                      <h3>The Heart Chakra</h3>
                      <p>Functions: Compassion, love, integration</p>
                      </Modal>
                    </div>
                  <div>
                      <button className="solar" onClick={this.toggleE}> Solar Plexus Chakra </button>
                      <Modal show={this.state.isToggledE}
                        onClose={this.toggleE}>
                      <img className="colors" src="http://www.chakras.info/wp-content/uploads/Solar-Plexus-Chakra-1.jpg" alt="solar plexus"/>
                      <h3>The Solar Plexus Chakra</h3>
                      <p>Functions: Will, social self, power</p>
                      </Modal>
                  </div>
                  <div>
                      <button className="sacral" onClick={this.toggleF}> Sacral Chakra </button>
                      <Modal show={this.state.isToggledF}
                        onClose={this.toggleF}>
                      <img className="colors" src="http://www.chakras.info/wp-content/uploads/Sacral-Chakra-1.jpg" alt="sacral"/>
                      <h3>The Sacral Chakra</h3>
                      <p>Functions: Emotions, creativity, sexuality</p>
                      </Modal>
                  </div>
                  <div>
                      <button className="root" onClick={this.toggleG}> Root Chakra </button>
                      <Modal show={this.state.isToggledG}
                        onClose={this.toggleG}>
                      <img className="colors" src="http://www.chakras.info/wp-content/uploads/Root-Chakra-1.jpg" alt="root"/>
                      <h3>The Root Chakra</h3>
                      <p>Functions: Safety, grounding, right to live</p>
                      </Modal>
                  </div>
              </div>
        </div>
        );
      }
}

export default Home;