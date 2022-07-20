import data from './data';
import SingleQuestion from './components/Question';
import { useState } from 'react';

function App() {
  const [questions, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and answers about login</h3>
        <section className="info">
          {questions.map(question => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
