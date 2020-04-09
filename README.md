# Password-Generator

For this project, I have been tasked with creating a password generator. Upon opening the page, the user can see 3 buttons. One to generate a password, one to copy the password to the clipboard, and one to reset the generator in case you need to generate another password.

If you would like to try it out for yourself, please follow this link: https://ptj92e.github.io/Password-Generator/

## Generator

When the user clicks the password generator button, the user will be prompted with a series of questions with certain parameters that are needed for the password.

The first prompt is: "How many characters do you want?". This tells the program how many times the generator will loop to product one character.

The next series of confirms ask:

1. "Do you want UPPER CASE letters?" 

2. "Do you want lower case letters?" 

3. "Do you want numbers?" 

4. "Do you want any special characters?"

These confirms are linked to arrays that, when confirmed, are added to an array the for loop pulls random characters from.

## Copy 

When the user clicks the copy to clipboard button, the program will copy the generated password from the text area to the clipboard. After the text has been copied, the program will alter the user that the text has been copied. 

## Reset

This button was not a requirement, but I decided to add it to solve an issue if you wanted to generate multiple passwords. Before this button, if you ran the generator to get multiple passwords, it would add the passwords together in a series of strings. This button is programed to reset the text area, the password array, and the password characters array so the generator can run the way it was designed. 
