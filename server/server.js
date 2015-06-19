Meteor.publish('posts', function() {
  return Posts.find();
});
/*var Posts = new Mongo.Collection('posts');

//Posts.insert({_id:"abc123",timestamp:Date.now(),title:"Editable post title - delete this title to remove the post",body:'This is the body of the post, written with the <strong>wysiwyg editor</strong>.  It is editable because we wrote {{&gt; editableText collection="posts" field="body" wysiwyg=true}} in the template instead of {{body}}.<br /><br />This demo app was written with meteor packages (<a href="https://github.com/aldeed/meteor-collection2" target="_blank">aldeed:collection2</a>, <a href="https://github.com/JackAdams/meteor-transactions" target="_blank">babrahams:transactions</a>, <a href="https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3" target="_blank">ian:accounts-ui-bootstrap-3</a>, <a href="https://github.com/meteorhacks/fast-render/" target="_blank">meteorhacks:fast-render</a>, <a href="https://github.com/JackAdams/meteor-editable-text-wysiwyg-bootstrap-3" target="_blank">babrahams:editable-text-wysiwyg-bootstrap-3</a>, <a href="https://github.com/JackAdams/meteor-editable-list" target="_blank">babrahams:editable-list</a>) and 222 lines of code (<a href="https://github.com/JackAdams/editable-text-demo/blob/master/editable-text-demo.html" target="_blank">html: 46 loc</a>, <a href="https://github.com/JackAdams/editable-text-demo/blob/master/editable-text-demo.js" target="_blank">js: 122 loc</a>, <a href="https://github.com/JackAdams/editable-text-demo/blob/master/editable-text-demo.css" target="_blank">css: 54 loc</a>). It demonstrates some of the uses of the <a href="https://github.com/JackAdams/meteor-editable-text">babrahams:editable-text</a> package.<br /><br />See the source at <a href="https://github.com/JackAdams/editable-text-demo">https://github.com/JackAdams/editable-text-demo.</a>',tags:['Drag to reorder','Click to edit']});

Posts.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId && doc.owner === userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.owner === userId;
  },
  fetch: ['owner']
});*/
/*if (Meteor.isServer) {
  /*Posts.insert({
    timestamp:Date.now(),
    title:"Editable post title - delete this title to remove the post",
    body:'I basically have no idea what is happening here'
  });*/
/*    Meteor.publish('posts', function(subsargs) {
        //subsargs are args passed in the next section
        return posts.find()
        //or
        return posts.find({}, {time:-1, limit: 5}) //etc
   });
   Posts.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
  /*    return true;
    }
  });
}*/
