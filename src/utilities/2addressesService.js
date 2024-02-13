import * as addressesAPI from "./2addressesAPI";


export async function createAddress(addressData) {
  console.log(addressData);
  const body = {
    id: addressData._id,
    userId: addressData.userId,
    name: addressData.name,
    description: addressData.description,
    endDate: addressData.endDate,
    targetAmount: addressData.targetAmount,
    currentAmount: addressData.currentAmount,
    dateUpdate: new Date(),
  };

  const newAddress = await addressesAPI.createAddress(body);

  return newAddress;
}


export async function getAddress() {
  // Existing getGoals function
  const goals = await addressesAPI.getAddress();
  return goals;
}


export async function updateAddress(addressData) {
  // console.log(goal);

  const body = {
    id: addressData._id,
    userId: addressData.userId,
    name: addressData.name,
    description: addressData.description,
    endDate: addressData.endDate,
    targetAmount: addressData.targetAmount,
    currentAmount: addressData.currentAmount,
    dateUpdate: new Date(),
  };

  const updatedAddress = await addressesAPI.updateAddress(body);
  return updatedAddress;
}
