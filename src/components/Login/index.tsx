import React from "react";
import { Content, LoginButton } from "./styles";
import { fbPopup, googlePopup } from "../../config/Api";

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
    <Content>
      <LoginButton onClick={handleFacebookLogin}>
        Logar com Facebook
      </LoginButton>
      <LoginButton onClick={handleGoogleLogin}>Logar com Google</LoginButton>
    </Content>
  );
};

export { Login };
