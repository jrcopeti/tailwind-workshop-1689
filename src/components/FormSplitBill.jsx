import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  // calculate the amount paid by the friend
  const paidByFriend = bill ? bill - paidByUser : "";

  // only allow numbers in the input
  const onlyNumber = (value) => {
    return Number(value.replace(/[^0-9]/g, ""));
  };

  // handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    handleSplitBill(whoIsPaying === "user" ? paidByUser : -paidByUser);
  };

  return (
    <form
      className="grid w-full grid-cols-2 gap-4 rounded-lg bg-orange-50 p-8 font-semibold"
      onSubmit={handleSubmit}
    >
      <h2 className="col-span-2 mb-6 text-2xl uppercase tracking-wide">
        Split a bill with {selectedFriend.name}
      </h2>

      <label>💸 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(onlyNumber(e.target.value))}
        className="rounded-md border border-orange-100 p-2 text-center"
      />

      <label>💸 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            onlyNumber(e.target.value) > bill
              ? paidByUser
              : onlyNumber(e.target.value),
          )
        }
        className="rounded-md border border-orange-100 p-2 text-center"
      />

      <label>💸 {selectedFriend.name}&apos;s expense</label>
      <input
        type="text"
        disabled
        value={paidByFriend}
        className="rounded-md border border-orange-100 bg-gray-100 p-2 text-center"
      />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
        className="rounded-md border border-orange-100 p-2"
      >
        <option value="user"> You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <div className="col-span-2 mt-4 flex w-full justify-end gap-4">
        <Button>{selectedFriend ? "Split bill" : "Splited"}</Button>
      </div>
    </form>
  );
}

export default FormSplitBill;
