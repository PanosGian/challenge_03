# Software Requirements - Week 3

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

- - -
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Implementation
The code generation script was implemented successfully by following strictly the SRS outlined in the above sections as follows:
* The user is prompted for a valid number of password length, which should be beween 8 and 128 characters length.
* The user input is checked until a valid number is provided
* additional prompts pop up allowing other options including: for 
** capital letter
** lower case letters
** numbers (from 0 to 9)
** special caharacters

Based on the user's options an array is populated WITH the corresoonding ASCII characters.

An iterator, limited to the selected maximum number of password characters, is used to select a ranodm index from the passowrd options array.

The randomly slected characters are concatenated into a string variable which is the final passowrd.

The final passord is displayed






