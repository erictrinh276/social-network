import { Meteor } from 'meteor/meteor';
Post = new Mongo.Collection('post');
Products = new Mongo.Collection('products');

Meteor.startup(() => {
  // code to run on server at startup
  // var num = Products.find().count();
  // if(num === 0){
  //   var qty, prodIndex;
  //   var productOptions = ['red', 'green', 'purple', 'blue', 'white'];
  //   for(var i=0; i< 400; i++){
  //     qty = Math.ceil(1+Math.random()*20);
  //     prodIndex = Math.floor(Math.random()*productOptions.length);
  //     Products.insert({
  //       qty: qty,
  //       total: 100*qty,
  //       time: new Date(),
  //       product: productOptions.slice(0,prodIndex)
  //     })
  //   }
  // }
});

