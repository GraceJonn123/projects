if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "Gerrarrahia" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });
}