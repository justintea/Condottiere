import SignupForm from "../../components/2Auth_SignupForm/SignupForm";
import NavbarOut from "../../components/0Navbar/NavbarOut/NavbarOut";

export default function SignupPage({ setUser }) {
  return (
    <>
      <SignupForm setUser={setUser}  />
    </>
  );
}