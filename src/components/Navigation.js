import React, { useEffect, useState } from "react";
import { NavLink, useNavigate,useLocation  } from "react-router-dom";
import "../css/Navigation.css";
import { isAuthenticated, signout } from "./user/apiCore";
const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({ ...isAuthenticated() });
  }, []);
  const singOut = () => {
    signout();
  };
  return (
    <>
      <div className="header">
        <div className="title-1">
          <div onClick={() => navigate("/", { replace: true })} className="img">
            <img
              src="https://inkythuatso.com/uploads/images/2021/09/logo-cong-an-09-13-27-02.jpg-09-13-27-02.jpg"
              alt=""
            />
          </div>

          <div className="title-word">
            <h4>Cổng thông tin quốc gia về</h4>
            <h3>Hồ sơ công dân</h3>
          </div>
        </div>

        <div>
          {isAuthenticated() ? (
            <>
              <h4>
                Xin chào cán bộ <span>{isAuthenticated().username}</span> !
              </h4>
              <NavLink
              
                onClick={() => singOut()}
                exact
                to="/"
                className="btn btn-primary"
              >
                Đăng xuất
              </NavLink>
            </>
          ) : (
            <>
              <h4>Xin chào !</h4>
              <NavLink exact to="/Login" className="btn btn-primary">
                Đăng nhập
              </NavLink>
              <NavLink exact to="/SignUp" className="btn btn-primary m-2">
                Đăng ký
              </NavLink>
            </>
          )}
        </div>
      </div>
      <nav>
        <ul className="nav-bar-link">
          {!isAuthenticated() && (
            <>
              <li>
                <NavLink  exact to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/news">
                  Tin tức
                </NavLink>
              </li>
            </>
          )}
          {isAuthenticated() && isAuthenticated().role === 0 && (
            <>
              <li>
                <NavLink exact to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink  exact to="/Home">
                  Hồ sơ công dân
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Yourownappointment">
                  Lịch hẹn bản thân
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Request">
                  Yêu cầu lên cơ quan cấp trên
                </NavLink>
              </li>
            </>
          )}
          {isAuthenticated() && isAuthenticated().role === 1 && (
            <>
              <li>
                <NavLink exact to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Home">
                  Hồ sơ công dân
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Statistics">
                  Thống kê và Báo cáo
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Notification">
                  Thông báo
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/RequestList">
                  Danh sách yêu cầu
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
