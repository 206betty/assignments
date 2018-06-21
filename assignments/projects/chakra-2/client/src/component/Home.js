import React, { Component } from "react"
import Modal from './Modal'

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {isOpen: false };
    }

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
      render() {
        return (
        <div>
          <div className="what">
            <button onClick={this.toggleModal}>
              What is chakra balancing?
            </button>
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
              `Chakra balancing is the process of restoring a harmonious flow of energy across the chakra system. The effect of well balanced chakras often translates into a feeling of well-being,relaxation, centeredness, increased vitality and embodiment of oneself.

              When we talk about chakra balancing, we may actually refer to various techniques and meanings. A commonly accepted definition of chakra balancing is the process through which the energy of the chakras is brought to a well functioning and harmonious state.
              
              The idea of balancing a chakra is only addressing part of the picture: Each chakra part of a system that functions as a whole. If we look at how chakras work, we see that they have a dynamic connection with each other and interact energetically. Therefore, when doing chakra balancing, it’s not only important to consider each chakra, but also the neighboring centers, and the energy through the whole system.`
            </Modal>
          </div>
          <div className="how">
            <button onClick={this.toggleModal}>
              How to balance chakras.
            </button>
    {/* this.state. === what how why */}
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
              `Chakra balancing techniques fall into in three categories: Those centered on a physical process or activity, a meditative or introspective practice, and the transmission of energy from another person or on your own.
            
            Common practices you can use to balance your chakras:
             - Hands on healing or energy healing
             - Meditation, including chakra meditation, self-inquiry
             - Exercises focused on the connection of body and mind, including yoga
             - Breath work, including pranayama
             - Holistic or alternative medicine`
            </Modal>
          </div>
          <div className="why">
            <button onClick={this.toggleModal}>
              Why balance your chakras?
            </button>
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
              `The purpose of chakra balancing is to support a balanced flow that will sustain our overall level of energy. In our everyday life,we are subjected to a number of activities, sources of stress and demands that result in fluctuations in our energy level. Some may feel draining, others fulfilling or nourishing. Furthermore, past events and experiences often leave a long lasting influence on how we feel and are in the world,therefore influencing how we manage our energy day-to-day.

              Stresses placed on us by the demands of life may result in interruptions and fluctuations in our energy flow and chakra imbalances. A chakra imbalance can affect:

              How much energy flows through the chakra or chakra system.
              A chakra is deficient when the energy is “blocked” or it is “closed up”.
              A chakra is overactive when the energy flow is excessively increased and not regulated.
              The position of the energetic field associated with one or several chakras is displaced.`
            </Modal>
          </div>
        </div>
        );
      }
}

export default Home;