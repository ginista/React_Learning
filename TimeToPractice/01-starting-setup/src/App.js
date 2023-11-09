
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';
import Top from './components/top';
import Concept from './components/ConceptComponent';

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function App() {
  return (
    <div>
 <Top></Top>
 <ul id="concepts">

 {concepts.map((concept, index) => (
  <Concept key={index} concept={concept} />
))}
</ul>
  {  /*  
  
  <li className="concept">
          <img src={concepts[0].image} alt="TODO: TITLE" />
          <h2>{concepts[0].title}</h2>
          <p>{concepts[0].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[1].image} alt="TODO: TITLE" />
          <h2>{concepts[1].title}</h2>
          <p>{concepts[1].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[2].image} alt="TODO: TITLE" />
          <h2>{concepts[2].title}</h2>
          <p>{concepts[2].description}</p>
      </li>*/}

     
    </div>
  );
}

export default App;
