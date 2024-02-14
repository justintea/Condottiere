import UserEditAddressForm from "../../../components/3UserPage/3UserAddressForm/UserEditAddressForm";
  
export default function UserEditAddressPage({ user }) {
  
  return (<>
    
    <h2 style={{ fontFamily: "Palatino Linotype", margin: '1% 0 1.5% 4%' }}> Edit Address </h2>
    <UserEditAddressForm user={user} />
  <br></br>
  <br></br> 
    
  </>);
}