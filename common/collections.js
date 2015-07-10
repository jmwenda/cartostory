Posts = new Mongo.Collection('posts');

EditableText.trustHtml=true
EditableText.registerCallbacks({
  addTimestampToDoc : function(doc,collection) {
   console.log(this.newValue);
  }
});
