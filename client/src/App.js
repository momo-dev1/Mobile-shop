import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ProductList, SingleProduct } from "./components/index";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="mobiles" element={<ProductList />}>
            <Route path=":mobileId" element={<SingleProduct />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
