import React from "react";
import { LoginContainer, FacebookButton, GoogleButton } from "./styles";
import { fbPopup, googlePopup } from "../../config/Api";
import FacebookIcon from "@material-ui/icons/Facebook";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
interface IProps {
  onReceive: Function;
}
const Login: React.FC<IProps> = ({ onReceive }) => {
  async function handleFacebookLogin() {
    let result = await fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert("Erro ao logar!");
    }
  }

  async function handleGoogleLogin() {
    let result = await googlePopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert("Erro ao logar!");
    }
  }

  return (
    <LoginContainer>
      <FacebookButton className="facebook" onClick={handleFacebookLogin}>
        <FacebookIcon />
        Logar com Facebook
      </FacebookButton>
      <GoogleButton onClick={handleGoogleLogin}>
        <AccountBoxIcon />
        Logar com Google
      </GoogleButton>
    </LoginContainer>
  );
};

export { Login };
