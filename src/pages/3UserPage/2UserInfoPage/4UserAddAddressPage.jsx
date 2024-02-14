import UserAddAddressForm from "../../../components/3UserPage/3UserAddressForm/UserAddAddressForm";

export default function UserAddAddressPage({ user }) {
  
  return (<>
    
    <h2 style={{ fontFamily: "Palatino Linotype", margin: '1% 0 1.5% 4%' }}> Add Address </h2>
    <UserAddAddressForm user={user} />
    <br></br>
  <br></br> 
    
  </>);
}