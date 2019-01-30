'use strict'

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