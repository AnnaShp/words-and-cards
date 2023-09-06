import logo from './logo.svg';
import './App.css';
import CardWords from './components/words';

const Words = [{
  eng: 'you', transcription: '[ju]', rus: 'Вы, ты', topic: 'pronouns'
}, {
  eng: 'she', transcription: '[ʃi]', rus: 'она', topic: 'pronouns'
}, {
  eng: 'he', transcription: '[hiː]', rus: 'он', topic: 'pronouns'
}]

function App() {
  return (
    <div className="App">
      {Words.map((word) => <CardWords eng={word.eng} transcription={word.transcription} rus={word.rus} topic={word.topic} />)}
    </div>
  );
}

export default App;
