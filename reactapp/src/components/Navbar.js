//always named compnant to Capital lettername
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} `} style={{backgroundColor: props.mode==='light'? '#fffee9': "Black",
    border: '1px solid',
    borderColor: props.mode === 'light' ? '#b89f2d' : '#333'
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link disabled btn btn-link" disabled>
                  Disabled
                </button>
              </li>
            </ul>
            <form className="d-flex mx-2" role="search" >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div
              class={`form-check form-switch my-2 text-${props.mode === "light" ? "dark" : "light"}`}
            >
              <input
                className="form-check-input"
                onClick={props.togglemode}
                type="checkbox"
                value=""
                id="checkNativeSwitch"
                switch
              />
              <label className="form-check-label" htmlFor="checkNativeSwitch  mx-2">
                {props.mode==='dark'? 'light':'dark'} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
//impts and pts

Navbar.defaultProps = { title: "set tile here " };

// import PropTypes from "prop-types";
//       console.log("NODE_ENV =", process.env.NODE_ENV);

// export default function Navbar({ title = "Set title here" }) {
//   return (
//     <nav>
//       <h1>{title}</h1>

//     </nav>
//   );

// }

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
// PropTypes.checkPropTypes(
//   { title: PropTypes.string.isRequired },
//   { title: 123 },
//   "prop",
//   "Navbar"
// );
