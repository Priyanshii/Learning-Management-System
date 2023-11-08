import { BrowserRouter as Router } from "react-router-dom";
import Pages from './pages'

function App() {
  return (
    <div className="overflow-x-hidden relative w-full h-full">
      <Router>
        <Pages />
      </Router>
    </div>
  );
}

export default App;