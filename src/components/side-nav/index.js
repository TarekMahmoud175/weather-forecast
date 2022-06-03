import React, { useEffect, useState } from "react";
import Text from "../Text";
import Styles from "./side.module.css";
import moment from "moment";

const SideNav = () => {
  const [hour, sethour] = useState(null);
  const [date, setdate] = useState(null);
  useEffect(() => {
    setdate(moment().format("DD MMMM YYYY"));
    sethour(moment().format("hh:mm a"));
  }, [moment]);

  useEffect(() => {
    setInterval(() => sethour(moment().format("hh:mm a")), 60000);
  },[]);

  return (
    <div className={`${Styles.mainContainer} p-4 text-center`}>
      {/* search bar */}
      <div
        className={`${Styles.formContainer} d-flex align-items-center justify-content-center my-5 w-100`}
      >
        <input
          className={`${Styles.input}`}
          type="text"
          placeholder="Search for cities"
        />
        <button className={`${Styles.btn}`}>search</button>
      </div>
      {/* town */}
      <Text className={`${Styles.townText} my-5`} dontWrap={false}>
        Cairo, Egypt
      </Text>
      {/* hour  */}
      <Text className={`${Styles.hourText} my-5`} dontWrap={false}>
        {hour}
      </Text>
      {/* date */}
      <Text className={`${Styles.dateText} my-5`} dontWrap={false}>
        {date}
      </Text>
    </div>
  );
};

export default SideNav;
