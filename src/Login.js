import React from "react";
import "./main.css";
import "./theme2.css";
import slider1 from "./images/slider1.svg";

const Login = () => {
  return (
    <>
      <div className="font-montserrat">
        <div className="auth">
          <div className="auth_left">
            <div className="card">
              <div className="text-center mb-2">
                <a className="header-brand" href="index.html">
                  <i className="fe fe-command brand-logo"></i>
                </a>
              </div>
              <div className="card-body">
                <div className="card-title">Login to your account</div>
                <div className="form-group">
                  <select className="custom-select">
                    <option>HR Dashboard</option>
                    <option>Project Dashboard</option>
                    <option>Job Portal</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Password
                    <a
                      href="forgot-password.html"
                      className="float-right small"
                    >
                      I forgot password
                    </a>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label">Remember me</span>
                  </label>
                </div>
                <div className="form-footer">
                  <a
                    href="index.html"
                    className="btn btn-primary btn-block"
                    title
                  >
                    Sign in
                  </a>
                </div>
              </div>
              <div className="text-center text-muted">
                Don't have account yet? <a href="register.html">Sign up</a>
              </div>
            </div>
          </div>
          <div className="auth_right">
            <div
              className="carousel slide"
              data-ride="carousel"
              data-interval="3000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slider1} className="img-fluid" alt="login page" />
                  <div className="px-4 mt-4">
                    <h4>Fully Responsive</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="assets/images/slider2.svg"
                    className="img-fluid"
                    alt="login page"
                  />
                  <div className="px-4 mt-4">
                    <h4>Quality Code and Easy Customizability</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="assets/images/slider3.svg"
                    className="img-fluid"
                    alt="login page"
                  />
                  <div className="px-4 mt-4">
                    <h4>Cross Browser Compatibility</h4>
                    <p>
                      Overview We're a group of women who want to learn
                      JavaScript.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mirrored from nsdbytes.com/template/epic/main/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 22 Aug 2023 11:21:06 GMT */}
    </>
  );
};

export default Login;
