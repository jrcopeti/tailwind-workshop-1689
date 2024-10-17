import Button from "./Button";

function Friend({ friend, handleSelectionFriend, selectedFriend }) {
  // check if the friend is selected
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className={`flex items-center justify-between gap-10 p-4 transition-colors duration-300 hover:bg-orange-50 ${
        isSelected ? "bg-orange-50" : ""
      }`}
    >
      <img
        className="h-12 w-12 rounded-full"
        src={friend.image}
        alt={friend.name}
      />
      <h3 className="text-xl font-bold">{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="text-red-600">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="text-green-600">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even 🙌</p>}

      <Button onClick={() => handleSelectionFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
