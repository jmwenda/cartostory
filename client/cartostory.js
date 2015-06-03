Template.private.events({
    'click #menu-toggle': function (evt) {
        evt.preventDefault();
        console.log("buttion has been clicked");
        $("#wrapper").toggleClass("toggled");
        console.log("we should see some change");
  }
});
Template.private.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      var map = L.map('map', {
        doubleClickZoom: false
      }).setView([49.25044, -123.137], 13);
      L.tileLayer.provider('Stamen.Watercolor').addTo(map);
    }
}
