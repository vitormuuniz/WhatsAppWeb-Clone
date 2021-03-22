import React, { useContext } from "react";
import {
  StyLoginContainer,
  StyFacebookButton,
  StyGoogleButton,
} from "./styles";
import { addUser, fbPopup, googlePopup } from "../../config/Api";
import FacebookIcon from "@material-ui/icons/Facebook";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { ApplicationContext } from "../../context/ApplicationContext";
const Login = () => {
  const { setUser } = useContext(ApplicationContext);

  const handleLoginData = async (u: any) => {
    const newUser: any = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    };

    await addUser(newUser);

    setUser(newUser);
  };

  async function handleFacebookLogin() {
    let result = await fbPopup();
    if (result) {
      handleLoginData(result.user);
    } else {
      alert("Erro ao logar!");
    }
  }

  async function handleGoogleLogin() {
    let result = await googlePopup();
    if (result) {
      handleLoginData(result.user);
    } else {
      alert("Erro ao logar!");
    }
  }

  return (
    <StyLoginContainer>
      <StyFacebookButton className="facebook" onClick={handleFacebookLogin}>
        <FacebookIcon />
        Logar com Facebook
      </StyFacebookButton>
      <StyGoogleButton onClick={handleGoogleLogin}>
        <AccountBoxIcon />
        Logar com Google
      </StyGoogleButton>
    </StyLoginContainer>
  );
};

export { Login };
