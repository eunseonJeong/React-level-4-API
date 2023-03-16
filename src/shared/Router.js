import { BrowserRouter, Routes, Route } from "react-router-dom";
import TDDetail from "../Page/TDDetail";
import TDList from "../Page/TDList";
import TDMain from "../Page/TDMain";
import TDWrite from "../Page/TDWrite";

const Router = ({todos}) => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TDMain />}/>
          <Route path="/write" element={<TDWrite />}/>
          <Route path="/list" element={<TDList todos={todos} />}/>
          <Route path="/detail" element={<TDDetail />}/>
        </Routes>
      </BrowserRouter>
    );
}

export default Router;