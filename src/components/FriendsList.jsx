import Friend from "./Friend";

function FriendsList({ friends, handleSelectionFriend, selectedFriend }) {
  return (
    <ul className="mb-8 flex flex-col text-lg ">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          handleSelectionFriend={handleSelectionFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
