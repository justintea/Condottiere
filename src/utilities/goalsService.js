import * as goalsAPI from "./goalsAPI";

export async function getGoals() {
  // Existing getGoals function
  const goals = await goalsAPI.getGoals();
  return goals;
}

export async function createGoal(goal) {
  console.log(goal);
  const body = {
    id: goal._id,
    userId: goal.userId,
    name: goal.name,
    description: goal.description,
    endDate: goal.endDate,
    targetAmount: goal.targetAmount,
    currentAmount: goal.currentAmount,
    dateUpdate: new Date(),
  };

  const newGoal = await goalsAPI.createGoal(body);

  return newGoal;
}

export async function updateGoal(goal) {
  // console.log(goal);

  const body = {
    id: goal._id,
    userId: goal.userId,
    name: goal.name,
    description: goal.description,
    endDate: goal.endDate,
    targetAmount: goal.targetAmount,
    currentAmount: goal.currentAmount,
    dateUpdate: new Date(),
  };

  const updatedGoal = await goalsAPI.updateGoal(body);
  return updatedGoal;
}

export async function deleteGoal(id) {
  const deletedGoal = await goalsAPI.deleteGoal(id);
  return deletedGoal;
}