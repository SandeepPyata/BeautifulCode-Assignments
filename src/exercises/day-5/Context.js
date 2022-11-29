// "1. In the signup form you built above:

// - Have a switch out side the form component
// - If that switch is toggled input field for username should be shown. (Validations should be present for username)
// - If the switch is toggled again username shouldn't be shown. (Validations shouldn't be present for username)
//   State for switch toggling should be in a context and shared using useContext between form and switch

// 2. Explain why context is useful even though we can lift state to parent and update it from child

import React, { useState } from "react";
import { ContextForm } from "./ContextForm";

export const UserContext = React.createContext();

export default function Context() {
  const [toggle_state, setToggle] = useState(false);
  console.log(toggle_state);

  return (
    <UserContext.Provider value={{ setToggle }}>
      <ContextForm />
    </UserContext.Provider>
  );
}
