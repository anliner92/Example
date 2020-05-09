import React, { Component } from "react"

import SideBar from "react-sidebar"
import "./menu.css"
import { Link } from "gatsby"
import { Motion, spring, presets } from "react-motion"

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
      sidebarpullRight: true,
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  render() {
    const style = {
      overflow: "visible",
      cursor: "pointer",
      // disable touch highlighting on devices
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
    }
    const yearCopyright = new Date()
    return (
      <SideBar
        sidebar={
          <div className="navigation">
            <div className="menu-logo">
              <Link to="/">
                <img
                  className="img-fluid mb-4"
                  src="/img/logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            <ul className="text-left list-unstyled d-flex main-nav sidebar-nav flex-column mb-0">
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Info</Link>
              </li>
            </ul>
            <ul className="list-unstyled d-flex flex-column justify-content-start mt-4 side-info">
              <li className="mb-3">
                <a
                  title="tel#"
                  href="tel:719-985-8354"
                  className="text-default hvr-shadow"
                >
                  (719) 985-8354
                </a>
              </li>
            </ul>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight={this.state.sidebarpullRight}
        styles={{
          sidebar: {
            background: "#ffffff",
            width: "300px",
            position: "fixed",
            zIndex: "9999",
            height: "100%",
          },
          root: { position: "relative", overflow: "visible" },
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.65)" },
          content: {
            position: "relative",
            overflow: "visible",
            cursor: "pointer",
          },
        }}
      >
        <div
          className="nav_content"
          // onClick={() => this.onSetSidebarOpen(true)}
        >
          {/* <h5 className="float-right nav_handle mb-0 ">
            <img src="/img/bars.svg" alt="bar" />
          </h5> */}
          <button
            className="bm-burger-button float-right"
            onClick={() => this.onSetSidebarOpen(true)}
          >
            <svg viewBox="0 0 96 96" height="1em" style={style}>
              <Motion
                style={{
                  x: spring(this.state.toggle ? 1 : 0, presets.wobbly),
                  y: spring(this.state.toggle ? 0 : 1, presets.wobbly),
                }}
              >
                {({ x, y }) => (
                  <g
                    id="navicon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                  >
                    <line
                      transform={`translate(${x * 12}, ${x * -7}) rotate(${
                        x * 45
                      }, 7, 26)`}
                      x1="7"
                      y1="26"
                      x2="89"
                      y2="26"
                    />
                    <line
                      transform={`translate(${x * 12}, ${x * 7}) rotate(${
                        x * -45
                      }, 7, 70)`}
                      x1="7"
                      y1="70"
                      x2="89"
                      y2="70"
                    />
                    <line
                      transform={`translate(${x * -96})`}
                      opacity={y}
                      x1="7"
                      y1="48"
                      x2="89"
                      y2="48"
                    />
                  </g>
                )}
              </Motion>
            </svg>
          </button>
        </div>
      </SideBar>
    )
  }
}
