Meteor.subscribe('posts');

Template.private.events({
    'click #menu-toggle': function (evt) {
        evt.preventDefault();
        console.log("buttion has been clicked");
        $("#wrapper").toggleClass("toggled");
        console.log("we should see some change");
  },
});
Template.private.rendered = function() {
  var currentUserId = Meteor.userId();
    if(!this._rendered) {
      this._rendered = true;
      var map = L.map('map', {
        doubleClickZoom: false,
        dragging : false
      }).setView([49.25044, -123.137], 13);
      L.tileLayer.provider('Stamen.Watercolor').addTo(map);
      /*Posts.insert({_id:"abc123",timestamp:Date.now(),title:"Editable post title - delete this title to remove the post",body:'This is the body of the post, written with the <strong>wysiwyg editor</strong>.  It is editable because we wrote {{&gt; editableText collection="posts" field="body" wysiwyg=true}} in the template instead of {{body}}.<br /><br />This demo app was written with meteor packages (<a href="https://github.com/aldeed/meteor-collection2" target="_blank">aldeed:collection2</a>, <a href="https://github.com/JackAdams/meteor-transactions" target="_blank">babrahams:transactions</a>, <a href="https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3" target="_blank">ian:accounts-ui-bootstrap-3</a>, <a href="https://github.com/meteorhacks/fast-render/" target="_blank">meteorhacks:fast-render</a>, <a href="https://github.com/JackAdams/meteor-editable-text-wysiwyg-bootstrap-3" target="_blank">babrahams:editable-text-wysiwyg-bootstrap-3</a>, <a href="https://github.com/JackAdams/meteor-editable-list" target="_blank">babrahams:editable-list</a>) and 222 lines of code (<a href="https://github.com/JackAdams/editable-text-demo/blob/master/editable-text-demo.html" target="_blank">html: 46 loc</a>, <a href="https://github.com/JackAdams/editable-text-demo/blob/master/editable-text-demo.js" target="_blank">js: 122 loc</a>, <a href="https://github.com/JackAdams/editable-text-demo/blob/master/editable-text-demo.css" target="_blank">css: 54 loc</a>). It demonstrates some of the uses of the <a href="https://github.com/JackAdams/meteor-editable-text">babrahams:editable-text</a> package.<br /><br />See the source at <a href="https://github.com/JackAdams/editable-text-demo">https://github.com/JackAdams/editable-text-demo.</a>',tags:['Drag to reorder','Click to edit']});*/

    }
}

//we started here again
EditableText.config({saveOnFocusout:false,trustHtml:true});
EditableText.useTransactions = true;
EditableText.maximumImageSize = 200000;

EditableText.trustHtml=true;
EditableText.registerCallbacks({
  uploadImageToslide : function(doc,collection)
  {
    console.log("Let us see the upload to image slide");
    console.log(this.newValue);
    var wrapper= document.createElement('div');
    wrapper.innerHTML= this.newValue;
    var image = wrapper.getElementsByTagName('img')[0];
    var imagestream = image.getAttribute("src");
    console.log("We now coll the savefile method");
    Meteor.call('saveFile', imagestream);
  }
});

if (Meteor.isClient) {
  Meteor.subscribe("Posts");

  Tracker.autorun(function() {
	EditableText.useTransactions = (Meteor.user()) ? true : false;
  });

  tx.undoRedoButtonClass = 'btn btn-default undo-redo';

  Template.private.helpers({
    posts: function() {
      return Posts.find();
    },
    docs: function() {
      return Docs.find();
    },
	comments: function() {
	  return Comments.find({post_id:this._id},{sort:{timestamp:1}});
	},
	newCommentDoc: function() {
	  return {};
	},
	timestamp: function() {
	  var time = (new Date(this.timestamp)).toDateString();
	  return time.substr(0,time.length - 4);
	},
	postOptions : function() {
	  return {
		collection:"posts",
		field:"title",
		removeEmpty:true,
		acceptEmpty:true,
    wysiwyg: true,
		placeholder:"Post title",
		substitute:'<i class="fa fa-pencil"></i>',
	  }
	}
  });


}
