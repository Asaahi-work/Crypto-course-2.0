import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CoinDetailPage from "./components/ui/pages/CoinDetailPage/CoinDetailPage";
import HomePage from "./components/ui/pages/HomePage/HomePage";
import MarketsPage from "./components/ui/pages/MarketsPage/MarketsPage";
import PreviewPage from "./components/ui/pages/PreviewPage/PreviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreviewPage/>}/>

        <Route path="/home" element={<HomePage/>}/>
        <Route path="/markets" element={<MarketsPage/>}/>

        <Route path="/coin/detail/:id" element={<CoinDetailPage/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
