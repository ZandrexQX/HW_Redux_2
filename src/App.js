import './App.css';
import {Provider} from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import store from "./store/store";
import {FilterProvider} from "./contexts/FilterContext";

function App() {

  return (
      <Provider store={store}>
          <FilterProvider>
            <TodoList/>
            <TodoFilter/>
            <AddTodo/>
          </FilterProvider>
      </Provider>
  );
}

export default App;
