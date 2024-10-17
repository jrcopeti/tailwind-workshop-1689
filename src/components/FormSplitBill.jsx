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
      className="grid w-full grid-cols-1 gap-4 rounded-lg bg-orange-50 p-4 font-semibold md:grid-cols-2 md:p-8"
      onSubmit={handleSubmit}
    >
      <h2 className="col-span-1 mb-4 text-xl uppercase tracking-wide md:col-span-2 md:mb-6 md:text-2xl">
        Split a bill with {selectedFriend.name}
      </h2>

      <label>💸 Bill value</label>
      <input
        type="text"
        placeholder="How much was the bill?"
        value={bill}
        onChange={(e) => setBill(onlyNumber(e.target.value))}
        className="rounded-md border border-orange-100 p-2 placeholder-gray-400"
      />

      <label>💸 Your expense</label>
      <input
        type="text"
        placeholder="How much did you pay?"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            onlyNumber(e.target.value) > bill
              ? paidByUser
              : onlyNumber(e.target.value),
          )
        }
        className="rounded-md border border-orange-100 p-2 placeholder-gray-400"
      />

      <label>💸 {selectedFriend.name}&apos;s expense</label>
      <input
        type="text"
        placeholder="Amount paid by your friend"
        disabled
        value={paidByFriend}
        className="rounded-md border border-orange-100 bg-gray-100 p-2 disabled:cursor-not-allowed disabled:bg-gray-200"
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
      <div className="col-span-1 mt-4 flex w-full justify-end gap-4 md:col-span-2">
        <Button>{selectedFriend ? "Split bill" : "Splited"}</Button>
      </div>
    </form>
  );
}

export default FormSplitBill;
