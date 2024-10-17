import Friend from "./Friend";

function FriendsList({ friends, handleSelectionFriend, selectedFriend }) {
  return (
    <ul className="mb-8 flex min-w-[500px] flex-col gap-4 text-lg">
      {/* // Loop through the friends array and render each friend */}
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
