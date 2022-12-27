/*
In 2015, the U.S. Bureau of Labor Statistics conducted research(http://www.bls.gov/emp/ep_chart_001.htm) to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:

no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.

Salary for someone with a Nanodegree from Udacity (http://blog.udacity.com/2016/07/nanodegree-101.html)

Directions: 
Write a switch statement to set the average salary of a person based on their type of completed education. 

Afterwards, print the following to the console.

"In 2015, a person with __________ earned an average of __________/year."

Fill in the blanks w/ the type of education and expected average salary. Make sure to use correct grammar in our printed statement, and watch out for any extra or missing characters (including spaces and punctuation marks.)

"In 2015, a person with a Bachelor's degree earned an average of $59,124/year."

Tip: 
To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US").

Running Code:
node back-to-school.js
*/

/*
Testing Code:
Salary	        Education
$25,636	        no high school diploma
$35,256	        high school diploma
$41,496	        Associate's degree
$59,124	        Bachelor's degree
$69,732	        Master's degree
$89,960	        Professional degree
$84,396	        Doctoral degree
*/

const education = "Doctoral degree";

let salary = 0;

switch (education){
    case "no high school diploma":
        console.log("$25,636");
        break;
    case "high school diploma":
        console.log("$35,256");
        break;
    case "Associate's degree":
        console.log("$41,496");
        break;
    case "Bachelor's degree":
        console.log("$59,124");
        break;
    case "Master's degree":
        console.log("$69,732");
        break;
    case "Professional degree":
        console.log("$89,960");
        break;
    case "Doctoral degree":
        console.log("$84,396");
}   
