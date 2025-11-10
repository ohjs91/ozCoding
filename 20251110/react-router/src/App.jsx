import { useState } from "react";

import "./App.css";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
function App() {
  const navigate = useNavigate();
  // navigate( ? )
  const location = useLocation();
  // console.log(location.pathname);
  // console.log(location.search);
  // console.log(location);
  return (
    <>
      <div>
        {/* <Link to="/main">메인</Link>
        <Link to="/mypage">마이페이지</Link>
        <Link to="/test">테스트</Link> */}
        <button
          type="button"
          onClick={() => {
            navigate("/main");
          }}
        >
          메인페이지
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/mypage");
          }}
        >
          마이페이지
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/test");
          }}
        >
          테스트페이지
        </button>
        <div>
          <button
            type="button"
            onClick={() => {
              navigate(1);
            }}
          >
            앞으로가기
          </button>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/main/:name" element={<Main />}></Route>
        <Route path="/mypage" element={<div>마이 페이지</div>}></Route>
        <Route path="/test" element={<div>테스트 페이지</div>}></Route>
      </Routes>
    </>
  );
}

function Main() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(params.name);
  // searchParams.get('name')
  console.log(searchParams.get("name"));
  return <div>메인 페이지</div>;
}
export default App;
