import * as addressesAPI from "./2addressesAPI";


//*CREATE ADDRESS---------------------------------------------
export async function createAddress(addressData, user) {
  console.log('addressData is: ', addressData);
  console.log('user is: ', user);

  const body = {
    userId: user._id,
    fullName: addressData.fullName,
    phoneNumber: addressData.phoneNumber,
    country: addressData.country,
    postalCode: addressData.postalCode,
    addressStreet: addressData.addressStreet,
    addressAptUnitNum: addressData.addressAptUnitNum,
  };

  console.log('createAddress body: ', body);
  const newAddress = await addressesAPI.createAddress(body, user);

  return newAddress;
}


//*GET YOUR ONE ADDRESS----------------------------------------
export async function getOneAddress() {
  const data = await addressesAPI.getAddress();
  console.log(data);

  return data;
}


//*UPDATE YOUR ONE ADDRESS-------------------------------------
export async function updateOneAddress(addressData, user) {

  const body = {
    userId: user._id,
    fullName: addressData.fullName,
    phoneNumber: addressData.phoneNumber,
    country: addressData.country,
    postalCode: addressData.postalCode,
    addressStreet: addressData.addressStreet,
    addressAptUnitNum: addressData.addressAptUnitNum,
  };


  const updatedAddress = await addressesAPI.updateOneAddress(body);
  return updatedAddress;
}

//* SUPERUSER: GET ALL ADDRESSES----------------------------------------
//! wip: for Superuser. you need to add the ID too 
export async function getAllAddresses() {
  const data = await addressesAPI.getAllAddresses();
  console.log(data);

  return data;
}