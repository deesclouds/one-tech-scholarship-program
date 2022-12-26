/*
Finding the right t-shirt can sometimes be a challenge. What size am I? What's the difference between S(small), M(medium), and L(large)? I usually wear L, but what if I need an XL(extra large)?

Thankfully, our friends at Teespring have got us covered because they've created a sizing chart to make things a lot easier. 

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Directions: 

Create a series of logical expressions that prints the size of a t-shirt based on measurements of shirtWidth, shirtLength, and shirtSleeve.

Valid sizes include: S, M, L, XL, 2XL, and 3XL.

For example, if...
const shirtWidth = 23;
const shirtLength = 30;
const shirtSleeve = 8.71;

then print L to the console.

Hint: You will need to compare a range of values when checking for shirtWidth, shirtLength, and shirtSleeve.

Ex: if the shirts width is at least 20", but no more than 22", then the shirt should be medium(M) - as long as the other values for the shirt's length and sleeve measurements match up.

const shirtWidth = 18; //size (S)
const shirtLength = 29; // size (M)
const shirtSleeve = 8.47; // size (M)

then print N/A to the console because the measurements don't all match up with one particular size.

Running Code:
node what-wear.js
*/

const shirtWidth = 18;
const shirtLength = 28;
const shirtSleeve = 8.13;

// Width	Length	Sleeve	Size
// 18	    28	    8.13	S
// 19.99	28.99	8.379	S
// 20	    29	    8.38	M
// 22	    30	    8.63	L
// 24	    31	    8.88	XL
// 26	    33	    9.63	2XL
// 27.99	33.99	10.129	2XL
// 28	    34	    10.13	3XL
// 18	    29	    8.47	NA

let size = null;

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve < 8.38 && shirtSleeve >= 8.13 )){
    size = "S";
}else if((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve < 8.63 && shirtSleeve >= 8.38 )){
    size = "M";
}else if((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve < 8.88 && shirtSleeve >= 8.63)){
    size = "L";
}else if((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve < 9.63 && shirtSleeve >= 8.88)){
    size = "XL";
}else if((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve <<10.13 && shirtSleeve >= 9.63)){
    size = "2XL";
}else if((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)){
    size = "3XL";
}else{
    size = 'N/A'
}

console.log(size);