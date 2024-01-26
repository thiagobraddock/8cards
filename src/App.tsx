/* eslint-disable max-len */
import Flashcard from './components/Flashcard';
import './App.css';

function App() {
  const flashcards = [
    {
      word: 'Flux Pattern',
      definition: 'Flux is an architectural pattern introduced by Facebook for user interfaces. It is designed to manage the flow of data in larger applications. It emphasizes a unidirectional data flow, where data has a single source of truth',
    },
    {
      word: 'Immutable State',
      definition: 'In Redux, the state is immutable, meaning it cannot be changed directly. Instead, state changes are made via functions (reducers) that take the current state and an action, and return a new state object.',
    },
    {
      word: 'Single Source of Truth',
      definition: 'The concept of having a single source of truth in Redux means that the state of your whole application is stored in an object tree within a single store. This makes it easier to debug or inspect an application.',
    },
    {
      word: 'Redux',
      definition: 'Redux is a library for managing and centralizing application state in JavaScript environments. It provides a single, immutable state object, ensuring consistent and predictable state updates across the app.',
    },

    {
      word: 'Actions / Action Creators',
      definition: 'Redux actions are plain objects with type and data that trigger updates in the store. Action creators are functions used to generate these actions, simplifying their creation and dispatch.',
    },
    {
      word: 'Reducers in Redux',
      definition: 'Reducers in Redux are pure functions that determine state changes, taking the previous state and an action to return the new state. Multiple reducers can be used or combined to manage complex state changes.',
    },
    {
      word: 'Store in Redux',
      definition: 'The store in Redux is an object that serves as the single source of truth for the application\'s state, holding and updating it in response to actions processed by reducers.',
    },

    {
      word: 'Middleware in Redux',
      definition: "Middleware in Redux enhances the store's capabilities, enabling asynchronous logic and interactions with the store. Thunk, a popular middleware, allows writing action creators that return functions rather than plain actions.",
    },

  ];

  return (
    <>
      <h1>Eight Cards to Learn Redux</h1>
      <div className="flashcard-container">
        {flashcards.map((card, index) => (
          <Flashcard key={ index } word={ card.word } definition={ card.definition } />
        ))}
      </div>
    </>
  );
}

export default App;
