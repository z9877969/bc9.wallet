import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import { userLogin, userRegister } from "../redux/auth/authOperations";

const AuthPage = () => {
  const dispatch = useDispatch();
  const { authType } = useParams();

  const handleAuthUser = (user) => {
    dispatch(authType === "register" ? userRegister(user) : userLogin(user));
  };

  return <AuthForm authType={authType} cbOnSubmit={handleAuthUser} />;
};

export default AuthPage;
