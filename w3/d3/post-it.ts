'use strict'

/*
# Post-it

 -  Create a `PostIt` a class that has
     -  a `backgroundColor`
     -  a `text` on it
     -  a `textColor`
 -  Create a few example post-it objects:
     -  an orange with blue text: "Idea 1"
     -  a pink with black text: "Awesome"
     -  a yellow with green text: "Superb!"
*/

class PostIt {

  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(bgcIn, textIn, textColorIn) {

    this.backgroundColor = bgcIn;
    this.text = textIn;
    this.textColor = textColorIn;

  }
}

const PostItObj1 = new PostIt ('orange', 'blue', 'Idea 1');
const PostItObj2 = new PostIt ('pink', 'black', 'Awesome');
const PostItObj3 = new PostIt ('yellow', 'green', 'Superb!');