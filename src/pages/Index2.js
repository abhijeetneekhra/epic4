import React from "react";
import "../bootstrap.min.css";
import "../c3.min.css";
import "../main.css";
import "../theme2.css";

const Index2 = () => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <title>:: Epic :: Home</title>

        <link
          rel="stylesheet"
          href="../assets/plugins/bootstrap/css/bootstrap.min.css"
        />

        <link rel="stylesheet" href="../assets/plugins/charts-c3/c3.min.css" />

        <link rel="stylesheet" href="../assets/css/main.css" />
        <link rel="stylesheet" href="../assets/css/theme2.css" />
      </head>
      {/* <div class="page-loader-wrapper">
  <div class="loader">
  </div>
    </div> */}
      <div id="main_content">
        <div id="header_top" className="header_top">
          <div className="container">
            <div className="hleft">
              <a className="header-brand" href="index.html">
                <i className="fe fe-command brand-logo" />
              </a>
              <div className="dropdown">
                <a href="page-search.html" className="nav-link icon">
                  <i className="fa fa-search" />
                </a>
                <a href="app-calendar.html" className="nav-link icon app_inbox">
                  <i className="fa fa-calendar" />
                </a>
                <a href="app-contact.html" className="nav-link icon xs-hide">
                  <i className="fa fa-id-card-o" />
                </a>
                <a href="app-chat.html" className="nav-link icon xs-hide">
                  <i className="fa fa-comments-o" />
                </a>
                <a
                  href="app-filemanager.html"
                  className="nav-link icon app_file xs-hide"
                >
                  <i className="fa fa-folder-o" />
                </a>
              </div>
            </div>
            <div className="hright">
              <div className="dropdown">
                <a
                  href="javascript:void(0)"
                  className="nav-link icon theme_btn"
                >
                  <i
                    className="fa fa-paint-brush"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Themes"
                  />
                </a>
                <a
                  href="javascript:void(0)"
                  className="nav-link icon settingbar"
                >
                  <i
                    className="fa fa-gear fa-spin"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Settings"
                  />
                </a>
                <a href="javascript:void(0)" className="nav-link user_btn">
                  <img
                    className="avatar"
                    src="../assets/images/user.png"
                    alt=""
                    data-toggle="tooltip"
                    data-placement="right"
                    title="User Menu"
                  />
                </a>
                <a
                  href="javascript:void(0)"
                  className="nav-link icon menu_toggle"
                >
                  <i className="fa fa-align-left" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="rightsidebar" className="right_sidebar">
          <a href="javascript:void(0)" className="p-3 settingbar float-right">
            <i className="fa fa-close" />
          </a>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#Settings"
                aria-expanded="true"
              >
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#activity"
                aria-expanded="false"
              >
                Activity
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              role="tabpanel"
              className="tab-pane vivify fadeIn active"
              id="Settings"
              aria-expanded="true"
            >
              <div className="mb-4">
                <h6 className="font-14 font-weight-bold text-muted">
                  Font Style
                </h6>
                <div className="custom-controls-stacked font_setting">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="font"
                      defaultValue="font-opensans"
                    />
                    <span className="custom-control-label">Open Sans Font</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="font"
                      defaultValue="font-montserrat"
                      defaultChecked=""
                    />
                    <span className="custom-control-label">
                      Montserrat Google Font
                    </span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="font"
                      defaultValue="font-roboto"
                    />
                    <span className="custom-control-label">
                      Robot Google Font
                    </span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <h6 className="font-14 font-weight-bold text-muted">
                  Dropdown Menu Icon
                </h6>
                <div className="custom-controls-stacked arrow_option">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="marrow"
                      defaultValue="arrow-a"
                    />
                    <span className="custom-control-label">A</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="marrow"
                      defaultValue="arrow-b"
                    />
                    <span className="custom-control-label">B</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="marrow"
                      defaultValue="arrow-c"
                      defaultChecked=""
                    />
                    <span className="custom-control-label">C</span>
                  </label>
                </div>
                <h6 className="font-14 font-weight-bold mt-4 text-muted">
                  SubMenu List Icon
                </h6>
                <div className="custom-controls-stacked list_option">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="listicon"
                      defaultValue="list-a"
                      defaultChecked=""
                    />
                    <span className="custom-control-label">A</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="listicon"
                      defaultValue="list-b"
                    />
                    <span className="custom-control-label">B</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="listicon"
                      defaultValue="list-c"
                    />
                    <span className="custom-control-label">C</span>
                  </label>
                </div>
              </div>
              <div>
                <h6 className="font-14 font-weight-bold mt-4 text-muted">
                  General Settings
                </h6>
                <ul className="setting-list list-unstyled mt-1 setting_switch">
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">
                        Night Mode
                      </span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input btn-darkmode"
                      />
                      <span className="custom-switch-indicator" />
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">
                        Fix Navbar top
                      </span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input btn-fixnavbar"
                      />
                      <span className="custom-switch-indicator" />
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">
                        Header Dark
                      </span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input btn-pageheader"
                        defaultChecked=""
                      />
                      <span className="custom-switch-indicator" />
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">
                        Min Sidebar Dark
                      </span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input btn-min_sidebar"
                      />
                      <span className="custom-switch-indicator" />
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">
                        Sidebar Dark
                      </span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input btn-sidebar"
                      />
                      <span className="custom-switch-indicator" />
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">
                        Icon Color
                      </span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input btn-iconcolor"
                      />
                      <span className="custom-switch-indicator" />
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">
                        Gradient Color
                      </span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input btn-gradient"
                      />
                      <span className="custom-switch-indicator" />
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">
                        Box Shadow
                      </span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input btn-boxshadow"
                      />
                      <span className="custom-switch-indicator" />
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">
                        RTL Support
                      </span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input btn-rtl"
                      />
                      <span className="custom-switch-indicator" />
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">
                        Box Layout
                      </span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input btn-boxlayout"
                      />
                      <span className="custom-switch-indicator" />
                    </label>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="form-group">
                <label className="d-block">
                  Storage <span className="float-right">77%</span>
                </label>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={77}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "77%" }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block mt-3"
                >
                  Upgrade Storage
                </button>
              </div>
            </div>
            <div
              role="tabpanel"
              className="tab-pane vivify fadeIn"
              id="activity"
              aria-expanded="false"
            >
              <ul className="new_timeline mt-3">
                <li>
                  <div className="bullet pink" />
                  <div className="time">11:00am</div>
                  <div className="desc">
                    <h3>Attendance</h3>
                    <h4>Computer Class</h4>
                  </div>
                </li>
                <li>
                  <div className="bullet pink" />
                  <div className="time">11:30am</div>
                  <div className="desc">
                    <h3>Added an interest</h3>
                    <h4>“Volunteer Activities”</h4>
                  </div>
                </li>
                <li>
                  <div className="bullet green" />
                  <div className="time">12:00pm</div>
                  <div className="desc">
                    <h3>Developer Team</h3>
                    <h4>Hangouts</h4>
                    <ul className="list-unstyled team-info margin-0 p-t-5">
                      <li>
                        <img
                          src="../assets/images/xs/avatar1.jpg"
                          alt="Avatar"
                        />
                      </li>
                      <li>
                        <img
                          src="../assets/images/xs/avatar2.jpg"
                          alt="Avatar"
                        />
                      </li>
                      <li>
                        <img
                          src="../assets/images/xs/avatar3.jpg"
                          alt="Avatar"
                        />
                      </li>
                      <li>
                        <img
                          src="../assets/images/xs/avatar4.jpg"
                          alt="Avatar"
                        />
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="bullet green" />
                  <div className="time">2:00pm</div>
                  <div className="desc">
                    <h3>Responded to need</h3>
                    <a href="javascript:void(0)">“In-Kind Opportunity”</a>
                  </div>
                </li>
                <li>
                  <div className="bullet orange" />
                  <div className="time">1:30pm</div>
                  <div className="desc">
                    <h3>Lunch Break</h3>
                  </div>
                </li>
                <li>
                  <div className="bullet green" />
                  <div className="time">2:38pm</div>
                  <div className="desc">
                    <h3>Finish</h3>
                    <h4>Go to Home</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="theme_div">
          <div className="card">
            <div className="card-body">
              <ul className="list-group list-unstyled">
                <li className="list-group-item mb-2">
                  <p>Default Theme</p>
                  <a href="index.html">
                    <img
                      src="../assets/images/themes/default.png"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-group-item mb-2">
                  <p>Night Mode Theme</p>
                  <a href="https://nsdbytes.com/template/epic/dark/index.html">
                    <img
                      src="../assets/images/themes/dark.png"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-group-item mb-2">
                  <p>RTL Version</p>
                  <a href="https://nsdbytes.com/template/epic/rtl/index.html">
                    <img
                      src="../assets/images/themes/rtl.png"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-group-item mb-2">
                  <p>Theme Version2</p>
                  <a href="https://nsdbytes.com/template/epic/theme2/index.html">
                    <img
                      src="../assets/images/themes/theme2.png"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-group-item mb-2">
                  <p>Theme Version3</p>
                  <a href="https://nsdbytes.com/template/epic/theme3/index.html">
                    <img
                      src="../assets/images/themes/theme3.png"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-group-item mb-2">
                  <p>Theme Version4</p>
                  <a href="https://nsdbytes.com/template/epic/theme4/index.html">
                    <img
                      src="../assets/images/themes/theme4.png"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-group-item mb-2">
                  <p>Horizontal Version</p>
                  <a href="https://nsdbytes.com/template/epic/horizontal/index.html">
                    <img
                      src="../assets/images/themes/horizontal.png"
                      className="img-fluid"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="user_div">
          <h5 className="brand-name mb-4">
            Epic HR
            <a href="javascript:void(0)" className="user_btn">
              <i className="icon-logout" />
            </a>
          </h5>
          <div className="card">
            <div className="card-body">
              <div className="media">
                <img
                  className="avatar avatar-xl mr-3"
                  src="../assets/images/sm/avatar1.jpg"
                  alt="avatar"
                />
                <div className="media-body">
                  <h5 className="m-0">Sara Hopkins</h5>
                  <p className="text-muted mb-0">Webdeveloper</p>
                  <ul className="social-links list-inline mb-0 mt-2">
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        title=""
                        data-toggle="tooltip"
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        title=""
                        data-toggle="tooltip"
                        data-original-title="Twitter"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        title=""
                        data-toggle="tooltip"
                        data-original-title={1234567890}
                      >
                        <i className="fa fa-phone" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        title=""
                        data-toggle="tooltip"
                        data-original-title="@skypename"
                      >
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Statistics</h3>
              <div className="card-options">
                <a
                  href="#"
                  className="card-options-collapse"
                  data-toggle="card-collapse"
                >
                  <i className="fe fe-chevron-up" />
                </a>
                <a
                  href="#"
                  className="card-options-remove"
                  data-toggle="card-remove"
                >
                  <i className="fe fe-x" />
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="text-center">
                <div className="row">
                  <div className="col-6 pb-3">
                    <label className="mb-0">Balance</label>
                    <h4 className="font-30 font-weight-bold">$545</h4>
                  </div>
                  <div className="col-6 pb-3">
                    <label className="mb-0">Growth</label>
                    <h4 className="font-30 font-weight-bold">27%</h4>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="d-block">
                  Total Income<span className="float-right">77%</span>
                </label>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-blue"
                    role="progressbar"
                    aria-valuenow={77}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "77%" }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="d-block">
                  Total Expenses <span className="float-right">50%</span>
                </label>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
              <div className="form-group mb-0">
                <label className="d-block">
                  Gross Profit <span className="float-right">23%</span>
                </label>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-green"
                    role="progressbar"
                    aria-valuenow={23}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "23%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Friends</h3>
              <div className="card-options">
                <a
                  href="#"
                  className="card-options-collapse"
                  data-toggle="card-collapse"
                >
                  <i className="fe fe-chevron-up" />
                </a>
                <a
                  href="#"
                  className="card-options-remove"
                  data-toggle="card-remove"
                >
                  <i className="fe fe-x" />
                </a>
              </div>
            </div>
            <div className="card-body">
              <ul className="right_chat list-unstyled">
                <li className="online">
                  <a href="javascript:void(0);">
                    <div className="media">
                      <img
                        className="media-object"
                        src="../assets/images/xs/avatar4.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="name">Donald Gardner</span>
                        <span className="message">Designer, Blogger</span>
                        <span className="badge badge-outline status" />
                      </div>
                    </div>
                  </a>
                </li>
                <li className="online">
                  <a href="javascript:void(0);">
                    <div className="media">
                      <img
                        className="media-object"
                        src="../assets/images/xs/avatar5.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="name">Wendy Keen</span>
                        <span className="message">Java Developer</span>
                        <span className="badge badge-outline status" />
                      </div>
                    </div>
                  </a>
                </li>
                <li className="offline">
                  <a href="javascript:void(0);">
                    <div className="media">
                      <img
                        className="media-object"
                        src="../assets/images/xs/avatar2.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="name">Matt Rosales</span>
                        <span className="message">CEO, Epic Theme</span>
                        <span className="badge badge-outline status" />
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card b-none">
            <ul className="list-group">
              <li className="list-group-item d-flex">
                <div className="box-icon sm rounded bg-blue">
                  <i className="fa fa-credit-card" />
                </div>
                <div className="ml-3">
                  <div>+$29 New sale</div>
                  <a href="javascript:void(0)">Admin Template</a>
                  <div className="text-muted font-12">5 min ago</div>
                </div>
              </li>
              <li className="list-group-item d-flex">
                <div className="box-icon sm rounded bg-pink">
                  <i className="fa fa-upload" />
                </div>
                <div className="ml-3">
                  <div>Project Update</div>
                  <a href="javascript:void(0)">New HTML page</a>
                  <div className="text-muted font-12">10 min ago</div>
                </div>
              </li>
              <li className="list-group-item d-flex">
                <div className="box-icon sm rounded bg-teal">
                  <i className="fa fa-file-word-o" />
                </div>
                <div className="ml-3">
                  <div>You edited the file</div>
                  <a href="javascript:void(0)">reposrt.doc</a>
                  <div className="text-muted font-12">11 min ago</div>
                </div>
              </li>
              <li className="list-group-item d-flex">
                <div className="box-icon sm rounded bg-cyan">
                  <i className="fa fa-user" />
                </div>
                <div className="ml-3">
                  <div>New user</div>
                  <a href="javascript:void(0)">Puffin web - view</a>
                  <div className="text-muted font-12">17 min ago</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="left-sidebar" className="sidebar">
          <h5 className="brand-name">
            Epic HR
            <a href="javascript:void(0)" className="menu_option float-right">
              <i
                className="icon-grid font-16"
                data-toggle="tooltip"
                data-placement="left"
                title="Grid & List Toggle"
              />
            </a>
          </h5>
          <nav id="left-sidebar-nav" className="sidebar-nav">
            <ul className="metismenu">
              <li className="g_heading">Directories</li>
              <li className="active">
                <a href="javascript:void(0)" className="has-arrow arrow-c">
                  <i className="icon-rocket" />
                  <span>HRMS</span>
                </a>
                <ul>
                  <li className="active">
                    <a href="index.html">
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="hr-users.html">
                      <span>Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="hr-departments.html">
                      <span>Departments</span>
                    </a>
                  </li>
                  <li>
                    <a href="hr-employee.html">
                      <span>Employee</span>
                    </a>
                  </li>
                  <li>
                    <a href="hr-activities.html">
                      <span>Activities</span>
                    </a>
                  </li>
                  <li>
                    <a href="hr-holidays.html">
                      <span>Holidays</span>
                    </a>
                  </li>
                  <li>
                    <a href="hr-events.html">
                      <span>Events</span>
                    </a>
                  </li>
                  <li>
                    <a href="hr-payroll.html">
                      <span>Payroll</span>
                    </a>
                  </li>
                  <li>
                    <a href="hr-accounts.html">
                      <span>Accounts</span>
                    </a>
                  </li>
                  <li>
                    <a href="hr-report.html">
                      <span>Report</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)" className="has-arrow arrow-c">
                  <i className="icon-cup" />
                  <span>Project</span>
                </a>
                <ul>
                  <li>
                    <a href="project-index.html">Dashboard</a>
                  </li>
                  <li>
                    <a href="project-list.html">Project list</a>
                  </li>
                  <li>
                    <a href="project-taskboard.html">Taskboard</a>
                  </li>
                  <li>
                    <a href="project-ticket.html">Ticket List</a>
                  </li>
                  <li>
                    <a href="project-ticket-details.html">Ticket Details</a>
                  </li>
                  <li>
                    <a href="project-clients.html">Clients</a>
                  </li>
                  <li>
                    <a href="project-todo.html">Todo List</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)" className="has-arrow arrow-c">
                  <i className="icon-briefcase" />
                  <span>Job Portal</span>
                </a>
                <ul>
                  <li>
                    <a href="job-index.html">
                      <span>Job Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-positions.html">
                      <span>Positions</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-applicants.html">
                      <span>Applicants</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-resumes.html">
                      <span>Resumes</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-settings.html">
                      <span>Settings</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)" className="has-arrow arrow-c">
                  <i className="icon-lock" />
                  <span>Authentication</span>
                </a>
                <ul>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="forgot-password.html">Forgot password</a>
                  </li>
                  <li>
                    <a href="404.html">404 error</a>
                  </li>
                  <li>
                    <a href="500.html">500 error</a>
                  </li>
                </ul>
              </li>
              <li className="g_heading">UI Elements</li>
              <li>
                <a href="icons-fontawesome.html">
                  <i className="icon-tag" />
                  <span>Icons</span>
                </a>
              </li>
              <li>
                <a href="charts-apex.html">
                  <i className="icon-bar-chart" />
                  <span>Charts</span>
                </a>
              </li>
              <li>
                <a href="form-elements.html">
                  <i className="icon-layers" />
                  <span>Forms</span>
                </a>
              </li>
              <li>
                <a href="table-normal.html">
                  <i className="icon-tag" />
                  <span>Tables</span>
                </a>
              </li>
              <li>
                <a href="widgets.html">
                  <i className="icon-puzzle" />
                  <span>Widgets</span>
                </a>
              </li>
              <li>
                <a href="page-maps.html">
                  <i className="icon-map" />
                  <span>Maps</span>
                </a>
              </li>
              <li>
                <a href="page-gallery.html">
                  <i className="icon-picture" />
                  <span>Gallery</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="page">
          <div id="page_top" className="section-body top_dark">
            <div className="container-fluid">
              <div className="page-header">
                <div className="left">
                  <h1 className="page-title">HR Dashboard</h1>
                  <select className="custom-select">
                    <option>Year</option>
                    <option>Month</option>
                    <option>Week</option>
                  </select>
                  <div className="input-group xs-hide">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </div>
                <div className="right">
                  <ul className="nav nav-pills">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Language
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <img
                            className="w20 mr-2"
                            src="https://nsdbytes.com/template/epic/assets/images/flags/us.svg"
                          />
                          English
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          <img
                            className="w20 mr-2"
                            src="https://nsdbytes.com/template/epic/assets/images/flags/es.svg"
                          />
                          Spanish
                        </a>
                        <a className="dropdown-item" href="#">
                          <img
                            className="w20 mr-2"
                            src="https://nsdbytes.com/template/epic/assets/images/flags/jp.svg"
                          />
                          japanese
                        </a>
                        <a className="dropdown-item" href="#">
                          <img
                            className="w20 mr-2"
                            src="https://nsdbytes.com/template/epic/assets/images/flags/bl.svg"
                          />
                          France
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Reports
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="dropdown-icon fa fa-file-excel-o" /> MS
                          Excel
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="dropdown-icon fa fa-file-word-o" /> MS
                          Word
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="dropdown-icon fa fa-file-pdf-o" /> PDF
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Project
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Graphics Design
                        </a>
                        <a className="dropdown-item" href="#">
                          Angular Admin
                        </a>
                        <a className="dropdown-item" href="#">
                          PSD to HTML
                        </a>
                        <a className="dropdown-item" href="#">
                          iOs App Development
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Home Development
                        </a>
                        <a className="dropdown-item" href="#">
                          New Blog post
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="notification d-flex">
                    <div className="dropdown d-flex">
                      <a
                        className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                        data-toggle="dropdown"
                      >
                        <i className="fa fa-envelope" />
                        <span className="badge badge-success nav-unread" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <ul className="right_chat list-unstyled w250 p-0">
                          <li className="online">
                            <a href="javascript:void(0);">
                              <div className="media">
                                <img
                                  className="media-object"
                                  src="../assets/images/xs/avatar4.jpg"
                                  alt=""
                                />
                                <div className="media-body">
                                  <span className="name">Donald Gardner</span>
                                  <span className="message">
                                    Designer, Blogger
                                  </span>
                                  <span className="badge badge-outline status" />
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="online">
                            <a href="javascript:void(0);">
                              <div className="media">
                                <img
                                  className="media-object"
                                  src="../assets/images/xs/avatar5.jpg"
                                  alt=""
                                />
                                <div className="media-body">
                                  <span className="name">Wendy Keen</span>
                                  <span className="message">
                                    Java Developer
                                  </span>
                                  <span className="badge badge-outline status" />
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="offline">
                            <a href="javascript:void(0);">
                              <div className="media">
                                <img
                                  className="media-object"
                                  src="../assets/images/xs/avatar2.jpg"
                                  alt=""
                                />
                                <div className="media-body">
                                  <span className="name">Matt Rosales</span>
                                  <span className="message">
                                    CEO, Epic Theme
                                  </span>
                                  <span className="badge badge-outline status" />
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="online">
                            <a href="javascript:void(0);">
                              <div className="media">
                                <img
                                  className="media-object"
                                  src="../assets/images/xs/avatar3.jpg"
                                  alt=""
                                />
                                <div className="media-body">
                                  <span className="name">Phillip Smith</span>
                                  <span className="message">
                                    Writter, Mag Editor
                                  </span>
                                  <span className="badge badge-outline status" />
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <div className="dropdown-divider" />
                        <a
                          href="javascript:void(0)"
                          className="dropdown-item text-center text-muted-dark readall"
                        >
                          Mark all as read
                        </a>
                      </div>
                    </div>
                    <div className="dropdown d-flex">
                      <a
                        className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                        data-toggle="dropdown"
                      >
                        <i className="fa fa-bell" />
                        <span className="badge badge-primary nav-unread" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <ul className="list-unstyled feeds_widget">
                          <li>
                            <div className="feeds-left">
                              <i className="fa fa-check" />
                            </div>
                            <div className="feeds-body">
                              <h4 className="title text-danger">
                                Issue Fixed
                                <small className="float-right text-muted">
                                  11:05
                                </small>
                              </h4>
                              <small>
                                WE have fix all Design bug with Responsive
                              </small>
                            </div>
                          </li>
                          <li>
                            <div className="feeds-left">
                              <i className="fa fa-user" />
                            </div>
                            <div className="feeds-body">
                              <h4 className="title">
                                New User
                                <small className="float-right text-muted">
                                  10:45
                                </small>
                              </h4>
                              <small>I feel great! Thanks team</small>
                            </div>
                          </li>
                          <li>
                            <div className="feeds-left">
                              <i className="fa fa-thumbs-o-up" />
                            </div>
                            <div className="feeds-body">
                              <h4 className="title">
                                7 New Feedback
                                <small className="float-right text-muted">
                                  Today
                                </small>
                              </h4>
                              <small>
                                It will give a smart finishing to your site
                              </small>
                            </div>
                          </li>
                          <li>
                            <div className="feeds-left">
                              <i className="fa fa-question-circle" />
                            </div>
                            <div className="feeds-body">
                              <h4 className="title text-warning">
                                Server Warning
                                <small className="float-right text-muted">
                                  10:50
                                </small>
                              </h4>
                              <small>Your connection is not private</small>
                            </div>
                          </li>
                          <li>
                            <div className="feeds-left">
                              <i className="fa fa-shopping-cart" />
                            </div>
                            <div className="feeds-body">
                              <h4 className="title">
                                7 New Orders
                                <small className="float-right text-muted">
                                  11:35
                                </small>
                              </h4>
                              <small>You received a new oder from Tina.</small>
                            </div>
                          </li>
                        </ul>
                        <div className="dropdown-divider" />
                        <a
                          href="javascript:void(0)"
                          className="dropdown-item text-center text-muted-dark readall"
                        >
                          Mark all as read
                        </a>
                      </div>
                    </div>
                    <div className="dropdown d-flex">
                      <a
                        className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                        data-toggle="dropdown"
                      >
                        <i className="fa fa-user" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <a className="dropdown-item" href="page-profile.html">
                          <i className="dropdown-icon fe fe-user" /> Profile
                        </a>
                        <a className="dropdown-item" href="app-setting.html">
                          <i className="dropdown-icon fe fe-settings" />
                          Settings
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <span className="float-right">
                            <span className="badge badge-primary">6</span>
                          </span>
                          <i className="dropdown-icon fe fe-mail" /> Inbox
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="dropdown-icon fe fe-send" /> Message
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="dropdown-icon fe fe-help-circle" /> Need
                          help?
                        </a>
                        <a className="dropdown-item" href="login.html">
                          <i className="dropdown-icon fe fe-log-out" /> Sign out
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-body mt-3">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="mb-4">
                    <h4>Welcome Jason Porter!</h4>
                    <small>
                      Measure How Fast You’re Growing Monthly Recurring Revenue.
                      <a href="#">Learn More</a>
                    </small>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body ribbon">
                      <div className="ribbon-box green">5</div>
                      <a
                        href="hr-users.html"
                        className="my_sort_cut text-muted"
                      >
                        <i className="icon-users" />
                        <span>Users</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body">
                      <a
                        href="hr-holidays.html"
                        className="my_sort_cut text-muted"
                      >
                        <i className="icon-like" />
                        <span>Holidays</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body ribbon">
                      <div className="ribbon-box orange">8</div>
                      <a
                        href="hr-events.html"
                        className="my_sort_cut text-muted"
                      >
                        <i className="icon-calendar" />
                        <span>Events</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body">
                      <a
                        href="hr-payroll.html"
                        className="my_sort_cut text-muted"
                      >
                        <i className="icon-credit-card" />
                        <span>Payroll</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body">
                      <a
                        href="hr-accounts.html"
                        className="my_sort_cut text-muted"
                      >
                        <i className="icon-calculator" />
                        <span>Accounts</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body">
                      <a
                        href="hr-report.html"
                        className="my_sort_cut text-muted"
                      >
                        <i className="icon-pie-chart" />
                        <span>Report</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-body">
            <div className="container-fluid">
              <div className="row clearfix row-deck">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Salary Statistics</h3>
                      <div className="card-options">
                        <label className="custom-switch m-0">
                          <input
                            type="checkbox"
                            defaultValue={1}
                            className="custom-switch-input"
                            defaultChecked=""
                          />
                          <span className="custom-switch-indicator" />
                        </label>
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="chart-bar" style={{ height: 350 }} />
                    </div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-between align-items-center">
                        <a
                          href="javascript:void(0)"
                          className="btn btn-info btn-sm w200 mr-3"
                        >
                          Generate Report
                        </a>
                        <small>
                          Measure How Fast You’re Growing Monthly Recurring
                          Revenue. <a href="#">Learn More</a>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Revenue</h3>
                    </div>
                    <div className="card-body text-center">
                      <div className="mt-4">
                        <input
                          type="text"
                          className="knob"
                          defaultValue={82}
                          data-width={147}
                          data-height={147}
                          data-thickness="0.07"
                          data-bgcolor="#3f454a"
                          data-fgcolor="#e8769f"
                        />
                      </div>
                      <h3 className="mb-0 mt-3 font300">
                        <span className="counter">1,24,301</span>
                        <span className="text-green font-15">+3.7%</span>
                      </h3>
                      <small>
                        Lorem Ipsum is simply dummy text <br />
                        <a href="#">Read more</a>
                      </small>
                      <div className="mt-4">
                        <span className="chart_3">2,5,8,3,6,9,4,5,6,3</span>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-block btn-success btn-sm"
                      >
                        Send Report
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">My Balance</h3>
                    </div>
                    <div className="card-body">
                      <span>Balance</span>
                      <h4>
                        $<span className="counter">20,508</span>
                      </h4>
                      <div id="apexspark1" className="mb-4" />
                      <div className="form-group">
                        <label className="d-block">
                          Bank of America
                          <span className="float-right">
                            $<span className="counter">15,025</span>
                          </span>
                        </label>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-azure"
                            role="progressbar"
                            aria-valuenow={77}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "77%" }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="d-block">
                          RBC Bank
                          <span className="float-right">
                            $<span className="counter">1,843</span>
                          </span>
                        </label>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-green"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "50%" }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="d-block">
                          Frost Bank
                          <span className="float-right">
                            $<span className="counter">3,641</span>
                          </span>
                        </label>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-blue"
                            role="progressbar"
                            aria-valuenow={23}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "23%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-block btn-info btn-sm"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix row-deck">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Employee Structure</h3>
                    </div>
                    <div className="card-body text-center">
                      <div id="chart-bar-stacked" style={{ height: 280 }} />
                      <div className="row clearfix">
                        <div className="col-6">
                          <h6 className="mb-0">50</h6>
                          <small className="text-muted">Male</small>
                        </div>
                        <div className="col-6">
                          <h6 className="mb-0">17</h6>
                          <small className="text-muted">Female</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Employee Satisfaction</h3>
                    </div>
                    <div className="card-body text-center">
                      <div
                        id="chart-area-spline-sracked"
                        style={{ height: 280 }}
                      />
                      <div className="row clearfix">
                        <div className="col-6">
                          <h6 className="mb-0">195</h6>
                          <small className="text-muted">Last Month</small>
                        </div>
                        <div className="col-6">
                          <h6 className="mb-0">163</h6>
                          <small className="text-muted">This Month</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Performance</h3>
                    </div>
                    <div className="card-body">
                      <span>
                        Measure How Fast You’re Growing Monthly Recurring
                        Revenue. <a href="#">Learn More</a>
                      </span>
                      <ul className="list-group mt-3 mb-0">
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>35%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Design Team</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-azure"
                              role="progressbar"
                              style={{ width: "35%" }}
                              aria-valuenow={42}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>25%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Developer Team
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>15%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Marketing</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-orange"
                              role="progressbar"
                              style={{ width: "15%" }}
                              aria-valuenow={36}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>20%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Management</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-indigo"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow={6}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>11%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Other</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-pink"
                              role="progressbar"
                              style={{ width: "11%" }}
                              aria-valuenow={6}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Growth</h3>
                    </div>
                    <div className="card-body text-center">
                      <div id="GROWTH" style={{ height: 240 }} />
                    </div>
                    <div className="card-footer text-center">
                      <div className="row clearfix">
                        <div className="col-6">
                          <h6 className="mb-0">$3,095</h6>
                          <small className="text-muted">Last Year</small>
                        </div>
                        <div className="col-6">
                          <h6 className="mb-0">$2,763</h6>
                          <small className="text-muted">This Year</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Project Summary</h3>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Client Name</th>
                              <th>Team</th>
                              <th>Project</th>
                              <th>Project Cost</th>
                              <th>Payment</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>#AD1245</td>
                              <td>Sean Black</td>
                              <td>
                                <ul className="list-unstyled team-info sm margin-0 w150">
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar1.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar2.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar3.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar4.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li className="ml-2">
                                    <span>2+</span>
                                  </li>
                                </ul>
                              </td>
                              <td>Angular Admin</td>
                              <td>$14,500</td>
                              <td>Done</td>
                              <td>
                                <span className="tag tag-success">
                                  Delivered
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>#DF1937</td>
                              <td>Sean Black</td>
                              <td>
                                <ul className="list-unstyled team-info sm margin-0 w150">
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar1.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar2.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar3.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar4.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li className="ml-2">
                                    <span>2+</span>
                                  </li>
                                </ul>
                              </td>
                              <td>Angular Admin</td>
                              <td>$14,500</td>
                              <td>Pending</td>
                              <td>
                                <span className="tag tag-success">
                                  Delivered
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>#YU8585</td>
                              <td>Merri Diamond</td>
                              <td>
                                <ul className="list-unstyled team-info sm margin-0 w150">
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar1.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar2.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                </ul>
                              </td>
                              <td>One page html Admin</td>
                              <td>$500</td>
                              <td>Done</td>
                              <td>
                                <span className="tag tag-orange">Submit</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#AD1245</td>
                              <td>Sean Black</td>
                              <td>
                                <ul className="list-unstyled team-info sm margin-0 w150">
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar1.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar2.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar3.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar4.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                </ul>
                              </td>
                              <td>Wordpress One page</td>
                              <td>$1,500</td>
                              <td>Done</td>
                              <td>
                                <span className="tag tag-success">
                                  Delivered
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>#GH8596</td>
                              <td>Allen Collins</td>
                              <td>
                                <ul className="list-unstyled team-info sm margin-0 w150">
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar1.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar2.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar3.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../assets/images/xs/avatar4.jpg"
                                      alt="Avatar"
                                    />
                                  </li>
                                  <li className="ml-2">
                                    <span>2+</span>
                                  </li>
                                </ul>
                              </td>
                              <td>VueJs Application</td>
                              <td>$9,500</td>
                              <td>Done</td>
                              <td>
                                <span className="tag tag-success">
                                  Delivered
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-body">
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    Copyright © 2019
                    <a href="https://themeforest.net/user/puffintheme/portfolio">
                      PuffinTheme
                    </a>
                    .
                  </div>
                  <div className="col-md-6 col-sm-12 text-md-right">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="https://nsdbytes.com/template/epic/doc/index.html">
                          Documentation
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)">FAQ</a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="javascript:void(0)"
                          className="btn btn-outline-primary btn-sm"
                        >
                          Buy Now
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index2;
