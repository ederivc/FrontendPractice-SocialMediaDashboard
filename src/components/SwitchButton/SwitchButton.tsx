import React from "react";
import { SwitchInput } from "./styles";

function SwitchButton() {
  return (
    <SwitchInput>
      <input type="checkbox" name="switch" id="switch" />
      <span></span>
    </SwitchInput>
  );
}

export default SwitchButton;
