# Funputer

#### A counting webpage that returns silly statements for the numbers 1,2 and 3. 6/12/2019

#### By **Mike Lofgren**

## Description

A webpage created with jQuery, CSS and HTML to return silly statements for certain numbers.
This webpage utilizes jQuery with switch statements a loop and CSS styles to replace certain numbers.
A user inputs a number. The program returns numbers counting from 0 to 1 to 2 to 3 and so on. Once the number gets to one hundred Funputer runs out of batteries.


### Specs
| Spec                                                                         |   Input             |   Output                |
| :--------------------------------------------------------------------------- | :------------------ | :---------------------- |
| The program will only accept numbers.                                        | p                   | nothing                 |
| If the user inputs zero, the program returns zero                            | 0                   | 0                       |
| If the user inputs 1, the program will return 0, "Beep"                      | 1                   | 0, "Beep"               |
| If the user inputs 2, the program will return 0, "Beep", "Boop"              | 2                   |0, "Beep", "Boop"        |
| If the user inputs 3, the program will return 0, "Beep", "Boop", "I'm sorry Dave I can't do that" |    2 |  0, "Beep", "Boop", "I'm sorry Dave I can't do that" |               
| If the user inputs 5, the program will return 0, "Beep", "Boop", "I'm sorry Dave I can't do that" | 5    |  0, "Beep", "Boop", "I'm sorry Dave I can't do that", 4, 5                                                                    |                     |                         |
|If the user inputs a number higher than 1-9 the process will repeat itself to 100 | 55    | 50, "Beep", "Boop", "I'm sorry Dave I can't do that", 54 ,55


## Setup/Installation Requirements

1. To run this program, clone repository from this GitHub.
2. Open file in a web browser such as Google Chrome.
3. Type in a number and push submit to receive a return response on the screen.
5. The bootstrap file should be under "css" folder of project and jQuery file should be under "js" directory.

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * HTML
  * CSS (bootstrap 3.3.7 which is available in https://getbootstrap.com/docs/3.3/)
  * Javascript
  * jQuery-3.4.1 (https://jquery.com/download/)

## Support and contact details

If there are any questions, bugs or concerns, please contact mikeylofgren@gmail.com

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **Mike Lofgren**
