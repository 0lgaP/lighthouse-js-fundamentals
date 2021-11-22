let facebookProfile = {
  name: "olga",
  friends: 139,
  messages: ["Bad biscuits make the baker broke, bro.", "You're letting your brain dial turn your fear volume up.", "People get built different"],
  postMessage: function postMessage(x){
      return this.messages.push(x);
  },
  deleteMessage: function deleteMessage(x){
      return this.messages.splice([x], 1);
  },
  addFriend: function addFriend(){
      return this.friends += 1;
  },
  removeFriend: function removeFriend(){
      return this.friends -= 1;
  }
};
console.log(facebookProfile.name);
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);
console.log(facebookProfile.postMessage("Come on bish"));
console.log(facebookProfile.deleteMessage(3));
console.log(facebookProfile.addFriend);
console.log(facebookProfile.removeFriend);