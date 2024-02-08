// import UserpreferenceForm from "../../../components/UserPreferenceForm/UserpreferenceForm";
import UserInfoForm from "../../../components/UserInfoForm/UserInfoForm";
import { Outlet, useOutletContext } from "react-router-dom";
  
export default function UserInfoPage() {
  useOutletContext();
  return (
    <>
      <h2> User Information </h2>
      {/* <UserpreferenceForm /> */}
      <UserInfoForm />

    </>);
}