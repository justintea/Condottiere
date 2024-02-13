// import UserpreferenceForm from "../../../components/UserPreferenceForm/UserpreferenceForm";
import UserInfoForm from "../../../components/3UserPage/1UserInfoForm/UserInfoForm";
import { Outlet, useOutletContext } from "react-router-dom";
  
export default function UserInfoPage() {
  useOutletContext();
  return (
    <>
      <h2> User Information </h2>
      <UserInfoForm />

    </>);
}