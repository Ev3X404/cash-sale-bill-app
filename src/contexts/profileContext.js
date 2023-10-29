// profileContext.js

import React, { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function useProfile() {
  return useContext(ProfileContext);
}

export default function ProfileProvider({ children }) {
  const [profileData, setProfileData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    date: "",
    nameTwo: "",
  });

  const setProfileInfo = (name, address, phoneNumber, date, nameTwo) => {
    setProfileData({ name, address, phoneNumber, date, nameTwo });
  };

  return (
    <ProfileContext.Provider value={{ profileData, setProfileInfo }}>
      {children}
    </ProfileContext.Provider>
  );
}
