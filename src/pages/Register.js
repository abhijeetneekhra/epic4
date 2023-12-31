import React from "react";
import "../main.css";
import "../theme2.css";
import slider1 from "../images/slider1.svg";

const Register = () => {
  return (
    <div class="font-montserrat">
      <div class="auth">
        <div class="auth_left">
          <div class="card">
            <div class="text-center mb-5">
              <a class="header-brand" href="/index">
                <i class="fe fe-command brand-logo"></i>
              </a>
            </div>
            <div class="card-body">
              <div class="card-title">Create new account</div>
              <div class="form-group">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter name"
                />
              </div>
              <div class="form-group">
                <label class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" />
                  <span class="custom-control-label">
                    Agree the <a href="#">terms and policy</a>
                  </span>
                </label>
              </div>
              <div class="form-footer">
                <button type="submit" class="btn btn-primary btn-block">
                  Create new account
                </button>
              </div>
            </div>
            <div class="text-center text-muted">
              Already have account? <a href="/">Sign in</a>
            </div>
          </div>
        </div>
        <div class="auth_right">
          <div class="carousel slide" data-ride="carousel" data-interval="3000">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slider1} class="img-fluid" alt="login page" />
                <div class="px-4 mt-4">
                  <h4>Fully Responsive</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="assets/images/slider2.svg"
                  class="img-fluid"
                  alt="login page"
                />
                <div class="px-4 mt-4">
                  <h4>Quality Code and Easy Customizability</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="assets/images/slider3.svg"
                  class="img-fluid"
                  alt="login page"
                />
                <div class="px-4 mt-4">
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
  );
};

export default Register;
