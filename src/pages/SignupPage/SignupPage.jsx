import SignupForm from "../../components/Auth_SignupForm/SignupForm";
import NavbarOut from "../../components/Navbar/NavbarOut/NavbarOut";

export default function SignupPage({ setUser }) {
  return (
    <>
      <NavbarOut />
      <SignupForm setUser={setUser}  />
    </>
  );
}