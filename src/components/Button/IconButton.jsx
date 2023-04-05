import { useState } from "react";
import { ButtonWrapper } from "./styled";

export const IconState = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const IconButton = ({ primaryIcon, secondaryIcon, onClick, activeIcon }) => {
  const [iconState, setIconState] = useState(activeIcon);

  return (
    <ButtonWrapper
      onClick={() => {
        onClick();
        if (iconState === IconState.PRIMARY) {
          setIconState(IconState.SECONDARY);
        } else {
          setIconState(IconState.PRIMARY);
        }
      }}
    >
      {iconState === IconState.PRIMARY ? primaryIcon : secondaryIcon}
    </ButtonWrapper>
  );
};

export default IconButton;
