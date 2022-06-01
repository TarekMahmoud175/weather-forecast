import React from "react";
import Text from "../Text";
import Styles from "./side.module.css";

const SideNav = () => {
  return (
    <div className={`${Styles.mainContainer} p-4 text-center`}>
      {/* search bar */}
      <div className={`${Styles.formContainer} d-flex align-items-center justify-content-center my-5`}>
        <input className={`${Styles.input}`} type="text" placeholder="Search for cities" />
        <button className={`${Styles.btn}`}>search</button>
      </div>
      {/* town */}
      <Text className={`${Styles.townText} my-5`}>Cairo, Egypt</Text>
      {/* hour  */}
      <Text className={`${Styles.hourText} my-5`}>12:30 pm</Text>
      {/* date */}
      <Text className={`${Styles.dateText} my-5`}>25 may 2022</Text>
    </div>
  );
};

export default SideNav;
