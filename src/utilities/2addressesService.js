import * as addressesAPI from "./2addressesAPI";


export async function createAddress(addressData, user) {
  console.log(addressData);
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
  const newAddress = await addressesAPI.createAddress(body);

  return newAddress;
}


export async function getAddress() {
  const data = await addressesAPI.getAddress();
  console.log(data);

  return data;
}


//? wip: for Superuser. you need to add the ID too 
export async function updateAddress(addressData, user) {
  // console.log(goal);

  const body = {
    userId: user._id,
    fullName: addressData.fullName,
    phoneNumber: addressData.phoneNumber,
    country: addressData.country,
    postalCode: addressData.postalCode,
    addressStreet: addressData.addressStreet,
    addressAptUnitNum: addressData.addressAptUnitNum,
  };

  const updatedAddress = await addressesAPI.updateAddress(body);
  return updatedAddress;
}
