// strings can use single or double quotes
//represents text
//use blackslash when u want to use "" inside of a string
  const foo = 'foo';
  const bar ="bar";

// concatenating strings
  const text = 'this is my inner text'
  const paragraph = '<p>' + text + '</p>' //connects string from const text w string from const paragraph
    console.log(paragraph);

// use === to compare strings

const string1 = 'foo';
const string2 = 'bar';
const string3 = 'foo';

string1 === string3; //true, they are identical
string2 === string1; //false

//built-in javascript methods 

const fooBar = 'foo bar foo bar';
fooBar.length; // => 15
fooBar.charAt(0); // => "f"
fooBar.slice(4); // => "bar foo bar"
fooBar.slice(4, 7); // => "bar"
fooBar.split(" "); // => ["foo", "bar", "foo", "bar"]
fooBar.toUpperCase(); // => "FOO BAR FOO BAR"
fooBar.replace('foo', 'bar'); // => 'bar bar foo bar'

//template literals `` 
//do not have to concatenate them
const badArtTips = (
  `<p>How to draw an owl:</p>
  <ul>
    <li>Draw a circle</li>
    <li>Draw the rest of the owl</li>
  </ul>`
);
