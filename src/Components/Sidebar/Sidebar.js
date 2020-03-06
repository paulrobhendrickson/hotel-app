import React, { useState } from "react";
import "./Sidebar.css";
import RowCol from "../RowCol/RowCol";
import Companies from "../../Utilities/Companies";
import Guests from "../../Utilities/Guests";

function Sidebar({
  props,
  templatesArray,
  setTemplatesArray,
  setTemplate,
  setGreetingVariables,
  greetingVariables
}) {
  let greetingID = templatesArray.length + 1;
  const [textAreaValue, setTextAreaValue] = useState({
    id: greetingID,
    greeting: null
  });

  return (
    <div className="Sidebar">
      <h3>Choose Greeting Variables</h3>
      <div className="mt-5">
        <RowCol>
          {greetingVariables.company.id === null
            ? "Company: "
            : "Company: " + greetingVariables.company.company}
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
                        setGreetingVariables({
                          ...greetingVariables,
                          company: company
                        })
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

      <div className="mt-5">
        <RowCol>
          {"Guest Name: " +
            greetingVariables.guest.lastName +
            ", " +
            greetingVariables.guest.firstName}
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
                      onClick={() =>
                        setGreetingVariables({
                          ...greetingVariables,
                          guest: guest
                        })
                      }
                    >
                      {guest.lastName + ", " + guest.firstName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </RowCol>
      </div>

      <div className="mt-5">
        <RowCol>Template: </RowCol>
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
                {templatesArray.map(templateChoice => {
                  return (
                    <li
                      key={templateChoice.id}
                      className="ListItem"
                      onClick={() => setTemplate(templateChoice)}
                    >
                      {templateChoice.greeting}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <p className="mt-3">
            To access the variables in database use: "_GUEST_ID_,"
            "_FIRST_NAME_," "_LAST_NAME_," "_ROOM_NUMBER_," "_START_TIME_,"
            "_END_TIME_," "_COMPANY_ID_," "_COMPANY_NAME_," " _COMPANY_CITY_ ,"
            "_TIMEZONE_," and "_TIME_OF_DAY_,"
          </p>

          <textarea
            className="mt-3 CustomTemplate"
            placeholder="Custom template"
            onChange={e => {
              setTextAreaValue({
                ...textAreaValue,
                id: greetingID,
                greeting: e.target.value
              });
            }}
          >
            {textAreaValue.greeting}
          </textarea>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              greetingID++;
              setTemplatesArray([...templatesArray, textAreaValue]);
            }}
          >
            Submit
          </button>
        </RowCol>
      </div>
    </div>
  );
}

export default Sidebar;
