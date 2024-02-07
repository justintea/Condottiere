import "./GoalsPage.css";
import { useState } from "react";
import { Card,  Modal, Input, Button } from "antd";
import {
  createGoal,
  deleteGoal,
  updateGoal,
} from "../../../utilities/goalsService";
import { DatePicker, Progress } from "antd";
import dayjs from "dayjs";
import { getUser } from "../../../utilities/usersService";
import { useOutletContext } from "react-router-dom";

export default function GoalsPage() {
  const [visible, setVisible] = useState(false);
  const [newCardVisible, setNewCardVisible] = useState(false);
  const { goals, setGoals } = useOutletContext();
  const [cardData, setCardData] = useState({
    _id: null,
    userId: getUser()._id,
    name: "",
    description: "",
    endDate: "",
    targetAmount: 0,
    currentAmount: 0,
  });

  const handleClickOpen = (goal, event) => {
    event.preventDefault();
    setCardData(goal);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
    setNewCardVisible(false);
  };

  const handleSave = async () => {
    let temp = [...goals];
    try {
      const updatedGoal = await updateGoal(cardData);
      for (let i = 0; i < temp.length; i++) {
        if (temp[i]._id === updatedGoal._id) {
          temp[i] = updatedGoal;
          break;
        }
      }
      setGoals(temp);
      console.log(goals);
      setVisible(false);
    } catch (e) {
      window.alert("Something went wrong");
    }
  };

  const handleAddNew = () => {
    setCardData({
      userId: getUser()._id,
      name: "",
      description: "",
      endDate: "",
      targetAmount: 0,
      currentAmount: 0,
    });
    setNewCardVisible(true);
  };

  const handleCreate = async () => {
    try {
      const newGoal = await createGoal(cardData);
      setGoals([...goals, newGoal]);
      setNewCardVisible(false);
    } catch (e) {
      window.alert("Something went here wrong");
    }
  };

  const handleDelete = async () => {
    try {
      const deleted = await deleteGoal(cardData._id)
      setGoals(goals.filter(goal => goal._id !== deleted._id))
      setVisible(false)
    } catch (e) {
      window.alert("Something went wrong while deleting")
    }
  }

  return (
    <>
      <h1>Goals Page</h1>
      <div className="goals-container">
        {goals.map((goal) => {
          const progressPercent =
            goal.targetAmount > 0
              ? (goal.currentAmount / goal.targetAmount) * 100
              : 0;
          return (
            <Card
              key={goal._id}
              title={goal.name}
              extra={
                <a href="#" onClick={(event) => handleClickOpen(goal, event)}>
                  Edit
                </a>
              }
              style={{ width: 300 }}
            >
              <p>Description: {goal.description}</p>
              <p>End Date: {new Date(goal.endDate).toLocaleDateString()}</p>
              <p>Target Amount: ${goal.targetAmount.toFixed(2)}</p>
              <p>Current Amount: ${goal.currentAmount.toFixed(2)}</p>
              <Progress percent={progressPercent} size="small" />
            </Card>
          );
        })}
        <Card onClick={handleAddNew} style={{ width: 300, cursor: "pointer" }}>
          <p>Add New Goal</p>
        </Card>
      </div>

      <Modal
        title="Edit Goal"
        open={visible}
        onOk={handleSave}
        onCancel={handleClose}
        footer={[
          <Button key="back" danger type="primary" onClick={handleDelete}>
            Delete
          </Button>,
          <Button key="back" onClick={handleClose}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Input
          value={cardData.name}
          onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
          placeholder="Name"
        />
        <Input
          value={cardData.description}
          onChange={(e) =>
            setCardData({ ...cardData, description: e.target.value })
          }
          placeholder="Description"
        />
        <DatePicker
          value={dayjs(cardData.endDate)}
          onChange={(date, dateString) =>
            setCardData({ ...cardData, endDate: dateString })
          }
        />
        <Input
          value={cardData.targetAmount}
          onChange={(e) =>
            setCardData({ ...cardData, targetAmount: e.target.value })
          }
          placeholder="Target Amount"
        />
        <Input
          value={cardData.currentAmount}
          onChange={(e) =>
            setCardData({ ...cardData, currentAmount: e.target.value })
          }
          placeholder="Current Amount"
        />
      </Modal>

      <Modal
        title="New Goal"
        open={newCardVisible}
        onOk={handleCreate}
        onCancel={handleClose}
        footer={[
          <Button key="back" onClick={handleClose}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleCreate}>
            Save
          </Button>,
        ]}
      >
        <Input
          value={cardData.name}
          onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
          placeholder="Name"
        />
        <Input
          value={cardData.description}
          onChange={(e) =>
            setCardData({ ...cardData, description: e.target.value })
          }
          placeholder="Description"
        />
        <DatePicker
          defaultValue={dayjs()}
          onChange={(date, dateString) =>
            setCardData({ ...cardData, endDate: dateString })
          }
        />
        <Input
          value={cardData.targetAmount}
          onChange={(e) =>
            setCardData({ ...cardData, targetAmount: e.target.value })
          }
          placeholder="Target Amount"
        />
        <Input
          value={cardData.currentAmount}
          onChange={(e) =>
            setCardData({ ...cardData, currentAmount: e.target.value })
          }
          placeholder="Current Amount"
        />
      </Modal>
    </>
  );
}
