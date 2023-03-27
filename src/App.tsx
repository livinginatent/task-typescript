import "./App.css";
import ProductList from "./ProductList";
import { Provider } from "react-redux";
import store from "./app/store";
import { SearchField } from "./SearchField";

function App() {
  return (
    <Provider store={store}>
      <SearchField/>
      <ProductList />
    </Provider>
  );
}

export default App;
