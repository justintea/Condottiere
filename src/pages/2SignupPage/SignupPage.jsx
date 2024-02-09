import SignupForm from "../../components/2Auth_SignupForm/SignupForm";

export default function SignupPage({ setUser }) {
  return (
    <>
      <SignupForm setUser={setUser}  />
    </>
  );
}