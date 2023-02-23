import { useGlobalContext } from './context';
import Quiz from './components/Quiz';
import SetupForm from './components/SetupForm';
import Loading from './components/Loading';

function App() {
  const { loading, waiting } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  return <Quiz />;
}

export default App;
