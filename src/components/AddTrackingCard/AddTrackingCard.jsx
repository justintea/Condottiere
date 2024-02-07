import { Card, InputNumber, Input, Checkbox, Select, Button } from "antd";
import { useState } from "react";
const { Option } = Select;

export default function AddTrackingCard({ type, addAccount }) {
  const newAccount = {
    savings: { name: null, amount: 0, isShared: false },
    investments: { name: null, amount: 0, deposit: 0, dw: "add" },
    liabilities: { name: null, amount: 0 },
  };

  const [account, setAccount] = useState({ ...newAccount[type] });

  const [checked, setChecked] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();

    if (!account.name) {
      window.alert("Name required");
      return;
    }

    if (type === "investments") {
      account.deposit = Math.abs(account.deposit);
      if (account.dw === "minus") {
        addAccount(
          {
            name: account.name,
            amount: account.amount,
            deposit: -account.deposit,
          },
          type
        );
      } else {
        addAccount(
          {
            name: account.name,
            amount: account.amount,
            deposit: account.deposit,
          },
          type
        );
      }
    } else {
      addAccount(account, type);
    }
    setAccount(newAccount[type]);
  };

  const handleNameChange = (e) => {
    setAccount({ ...account, name: e.target.value });
    // console.log(account)
  };

  const handleAmountChange = (value) => {
    // console.log(value);
    setAccount({ ...account, amount: value });
    // console.log(account)
  };

  const handleIsSharedChange = (e) => {
    console.log("checked = ", e.target.checked);
    // setChecked(e.target.checked);
    setAccount({ ...account, isShared: e.target.checked });
    // console.log(account)
  };

  const handleDepositAmountChange = (value) => {
    setAccount({ ...account, deposit: value });
    // console.log(account)
  };

  const handleDWChange = (value) => {
    setAccount({ ...account, dw: value });
    // console.log(account)
  };

  const selectBefore = (
    <Select
      defaultValue="add"
      style={{ width: "7rem" }}
      onChange={handleDWChange}
    >
      <Option value="add">Deposit</Option>
      <Option value="minus">Withdrawal</Option>
    </Select>
  );

  return (
    <>
      <Card
        title={
          <Input
            placeholder={
              "New " + type.charAt(0).toUpperCase() + type.slice(1) + " Account"
            }
            style={{ width: "90%" }}
            onChange={handleNameChange}
            value={account.name}
          />
        }
        style={{ width: "20rem" }}
        extra={
          <Button type={"primary"} onClick={handleAdd}>
            Add
          </Button>
        }
        bodyStyle={{ display: "inline-block" }}
      >
        <div className="label-input-container">
          Amount:{" "}
          <InputNumber
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={handleAmountChange}
            min={0}
            value={account.amount}
          />
        </div>

        {type === "savings" ? (
          <>
            <br />
            <div className="label-input-container">
              Shared Account:{" "}
              <Checkbox checked={checked} onChange={handleIsSharedChange} />{" "}
            </div>
          </>
        ) : type === "investments" ? (
          <>
            <br />
            <div className="label-input-container">
              <InputNumber
                addonBefore={type === "investments" ? selectBefore : null}
                defaultValue={0}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                onChange={handleDepositAmountChange}
                value={account.deposit}
                min={0}
                style={{
                  width: "14rem",
                }}
              />
            </div>
          </>
        ) : null}
      </Card>
    </>
  );
}
