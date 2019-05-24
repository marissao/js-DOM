/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var nameTaylor = document.getElementById('name1');
nameTaylor.innerHTML = 'Tay-Tay'

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

//Shortcut
position2.innerHTML = 'Project Manager'
/*var khaledPosition = document.getElementById('position2');
khaledPosition.innerHTML = 'Project Manager'*/

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

alias3.innerHTML = 'Concatenation'

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var profileBox = document.getElementsByClassName('profile');
profileBox[0].innerHTML = 'I only wanted to see you laughing in the purple rain.'

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

profileBox[1].innerHTML ='"Knowledge will give you power, but character respect."'

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliasBox = document.getElementsByClassName('alias');
aliasBox[2].innerHTML = 'Agent Nick Fury'

/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var nameIge = document.createElement('div');
nameIge.id = 'name7';
nameIge.innerHTML = 'David Ige';
nameParent.appendChild(nameIge) 

/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

