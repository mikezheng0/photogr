import React from "react";
import { Button } from "../../../Styles";

const LogoutButton = ({ handleLogout }) => (
  <Button onClick={handleLogout}>Logout</Button>
);

export default LogoutButton;
