import React from "react";
import "./Sidebar.css";
import RowCol from "../RowCol/RowCol";
import Companies from "../../Utilities/Companies";
import Guests from "../../Utilities/Guests";

function Sidebar({ props, setGreeting, greeting }) {
  const times = ["Morning", "Afternoon", "Evening"];
  return (
    <div className="Sidebar">
      <h3>Choose Greeting</h3>
      <div style={{ marginTop: "40px" }}>
        <RowCol>
          {greeting.company.id === null
            ? "Company: "
            : "Company: " + greeting.company.company}
        </RowCol>
        <RowCol>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <ul className="DropDownList">
                {Companies.map(company => {
                  return (
                    <li
                      key={company.company + company.id}
                      className="ListItem"
                      onClick={() =>
                        setGreeting({ ...greeting, company: company })
                      }
                    >
                      {company.id + ": " + company.company}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </RowCol>
      </div>

      <div style={{ marginTop: "40px" }}>
        <RowCol>
          {greeting.guest.id === null
            ? "Guest: "
            : "Guest: " + greeting.guest.lastName}
        </RowCol>
        <RowCol>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <ul className="DropDownList">
                {Guests.map(guest => {
                  return (
                    <li
                      key={guest.lastName + guest.id}
                      className="ListItem"
                      onClick={() => setGreeting({ ...greeting, guest: guest })}
                    >
                      {guest.id + ": " + guest.lastName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </RowCol>
      </div>

      <div style={{ marginTop: "40px" }}>
        <RowCol>
          {greeting.time === null ? "Time: " : "Time: " + greeting.time}
        </RowCol>
        <RowCol>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <ul className="DropDownList">
                {times.map(time => {
                  return (
                    <li
                      key={time}
                      className="ListItem"
                      onClick={() => setGreeting({ ...greeting, time: time })}
                    >
                      {time}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </RowCol>
      </div>
    </div>
  );
}

export default Sidebar;
