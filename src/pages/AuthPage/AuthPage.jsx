import LoginForm from "../../components/Auth_LoginForm/LoginForm"
import NavbarOut from "../../components/Navbar/NavbarOut/NavbarOut";

export default function AuthPage( { setUser } ) {
  return (
    <>
      <NavbarOut />
      <LoginForm setUser={setUser} />
    </>
  );
}