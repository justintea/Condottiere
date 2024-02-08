import LoginForm from "../../components/2Auth_LoginForm/LoginForm"

export default function AuthPage( { setUser } ) {
  return (
    <>
      <LoginForm setUser={setUser} />
    </>
  );
}