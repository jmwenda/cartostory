Template.private.events({
    'click #menu-toggle': function (evt) {
        evt.preventDefault();
        console.log("buttion has been clicked");
        $("#wrapper").toggleClass("toggled");
        console.log("we should see some change");
  }
});
