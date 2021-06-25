import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import DataForm from './dataForm'
import AddDataForm from './addDataForm'
function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={DataForm} exact/>
            <Route path="/add" component={AddDataForm} exact/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
