// import UserpreferenceForm from "../../../components/UserPreferenceForm/UserpreferenceForm";
import UserInfoForm from "../../../components/3UserPage/2UserInfoForm/UserInfoForm";
import { Outlet, useOutletContext } from "react-router-dom";
  
export default function UserInfoPage() {
  useOutletContext();
  return (
    <>
      <h2 style={{ fontFamily: "Palatino Linotype" , margin: '1% 0 0 5%' }}> User Information </h2>
      <UserInfoForm />

    </>);
}