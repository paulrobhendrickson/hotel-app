import React from "react";
import "./Greeting.css";

function Greeting({ props, template, greetingVariables }) {
  function replace(string) {
    let fixedString = string;

    const GUEST_ID = /_GUEST_ID_/gi;
    const FIRST_NAME = /_FIRST_NAME_/gi;
    const LAST_NAME = /_LAST_NAME_/gi;
    const ROOM_NUMBER = /_ROOM_NUMBER_/gi;
    const START_TIME = /_START_TIME_/gi;
    const END_TIME = /_END_TIME_/gi;
    const COMPANY_ID = /_COMPANY_ID_/gi;
    const COMPANY_NAME = /_COMPANY_NAME_/gi;
    const COMPANY_CITY = /_COMPANY_CITY_/gi;
    const TIMEZONE = /_TIMEZONE_/gi;
    const TIME_OF_DAY = /_TIME_OF_DAY_/gi;

    fixedString = fixedString.replace(GUEST_ID, greetingVariables.guest.id);
    fixedString = fixedString.replace(
      FIRST_NAME,
      greetingVariables.guest.firstName
    );
    fixedString = fixedString.replace(
      LAST_NAME,
      greetingVariables.guest.LAST_NAME
    );
    fixedString = fixedString.replace(
      ROOM_NUMBER,
      greetingVariables.guest.reservation.roomNumber
    );
    fixedString = fixedString.replace(
      START_TIME,
      greetingVariables.guest.reservation.startTimestamp
    );
    fixedString = fixedString.replace(
      END_TIME,
      greetingVariables.guest.reservation.endTimestamp
    );
    fixedString = fixedString.replace(
      END_TIME,
      greetingVariables.guest.reservation.endTimestamp
    );
    fixedString = fixedString.replace(COMPANY_ID, greetingVariables.company.id);
    fixedString = fixedString.replace(
      COMPANY_NAME,
      greetingVariables.company.company
    );
    fixedString = fixedString.replace(
      COMPANY_CITY,
      greetingVariables.company.city
    );
    fixedString = fixedString.replace(
      TIMEZONE,
      greetingVariables.company.timezone
    );
    fixedString = fixedString.replace(TIME_OF_DAY, greetingVariables.time);
    return fixedString;
  }

  return (
    <div className="Greeting">
      <h3>Proposed Greeting</h3>
      <div className="container mt-5">{replace(template.greeting)}</div>
    </div>
  );
}

export default Greeting;
