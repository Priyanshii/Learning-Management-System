import { BrowserRouter as Router } from "react-router-dom";
import Pages from './pages'

function App() {
  return (
    <div className="overflow-x-hidden relative">
      <Router>
        <Pages />
      </Router>
    </div>
  );
}

export default App;