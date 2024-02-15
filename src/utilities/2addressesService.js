import * as addressesAPI from "./2addressesAPI";


//*CREATE ADDRESS---------------------------------------------
export async function createOneAddress(addressData, user) {
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
  const newAddress = await addressesAPI.createOneAddress(body, user);

  return newAddress;
}


//*GET YOUR ONE ADDRESS----------------------------------------
export async function getOneAddress() {
  const data = await addressesAPI.getOneAddress();
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

  console.log('userId in addressesService: ', body.userId); 
  console.log('entire Body in addressesService: ', body);
  
  const updatedAddress = await addressesAPI.updateOneAddress(body);
  return updatedAddress;
}

//* SUPERUSER: GET ALL ADDRESSES----------------------------------------
//! wip: for Superuser. you need to add the ID too 
export async function indexAllAddresses() {
  const data = await addressesAPI.indexAllAddresses();
  console.log(data);

  return data;
}

//*SUPERUSER: DELETE ONE ADDRESS-------------------------------------
export async function deleteOneAddress(id) {
  const deletedAddress = await addressesAPI.deleteOneAddress(id);

  return deletedAddress;
}