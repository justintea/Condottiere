import LoginForm from "../../components/2Auth_LoginForm/LoginForm"
import NavbarOut from "../../components/0Navbar/NavbarOut/NavbarOut";

export default function AuthPage( { setUser } ) {
  return (
    <>
      <NavbarOut />
      <LoginForm setUser={setUser} />
    </>
  );
}