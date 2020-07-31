import React from "react";

import DatePicker from "react-datepicker";
import {Link} from "react-router-dom";
import {Menu, Icon} from "semantic-ui-react";

import "react-datepicker/dist/react-datepicker.css";

const Navigation = ({signedIn, selectedDate, setDate}) => (
  <Menu secondary style={{
    display: "flex", 
    alignItems: "center", 
    height: "40px"
  }}>
    <Link to="/">
      <Menu.Item>
        <img src="/android-chrome-192x192.png" alt="Logo" />
      </Menu.Item>
    </Link>
    <Link to="/about"><Menu.Item name="about" /></Link>
    <Menu.Menu position="right">
      {
        signedIn ? 
          <>
            <DatePicker 
              selected={selectedDate} 
              onSelect={
                (newDate) => {
                  setDate(newDate);
                }
              } 
              customInput={
                <Menu.Item name="calendar">
                  <Icon name="calendar" />
                  <span>
                    <strong>
                      {selectedDate.getMonth() + 1}/{selectedDate.getDate()}/{selectedDate.getFullYear()}
                    </strong>
                  </span>
                </Menu.Item>
              }
              popperPlacement="auto"
              withPortal
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              todayButton="Jump to Today"
              maxDate={new Date()}
            /> 
            <Link to="/profile">
              <Menu.Item name="user">
                <Icon name="user" />
              </Menu.Item>
            </Link>
          </>
        : <Link to="/signin"><Menu.Item name="sign in" /></Link>
      }
    </Menu.Menu>
  </Menu>
)

export default Navigation;
