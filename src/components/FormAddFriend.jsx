import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    // create new friend object
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    // add the new friend to the list
    handleAddFriend(newFriend);

    // clear the form
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form
      className="mb-6 grid grid-cols-2 gap-4 rounded-lg bg-orange-50 p-4"
      onSubmit={handleSubmit}
    >
      <label className="font-medium">👯‍♂️ Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-md border border-orange-100 p-2"
      />

      <label>📸 Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="rounded-md border border-orange-100 p-2"
      />
      <div className="flex">
        <Button>Add</Button>
      </div>
    </form>
  );
}

export default FormAddFriend;
