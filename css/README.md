# CSS

What is CSS?
Cascading Style Sheets

What are Tree Structures?
The branching hierarchy or tree structure.

What is separation of concerns?
Keeps the organization for not only ourselves but for other developers on our team. 

What can we do with CSS?
Change the layout of a web page and change the color of text on a web page amongst other things.

## Developer Tools

How to access developer tools in various browsers.

**Google Chrome**
- ... > Tools > Developer Tools

- Ctrl + Click any page element > Inspect

**Safari**
- Safari > Preferences > Advanced
- check the box 'Show Develop menu in menu bar' checkbox
- Develop > Show Web Inspector

**Mozilla Firefox**
- Menu > Tools > Web Developer > Inspector
- Right click page > Inspect

==============================
**Text to Trees**



## Lessons Learned
The Elements tab within the Browser's Developer Tools does not show the original HTML source code. It shows a rendering of how the browser sees the page internally. 

**Data Structure:**
A way for information to be organized. 

An organized map that shows what's going to end up being displayed on the webpage. It is what Developer Tools let us look at.

**Tree Structure:**
Builds up a map within the computer memory of what all the elements are that it will display onto the screen. It shows which elements are nested inside which other elements. Basically makes an outline of the page. 
It is called a tree structure because each element can have branches that come out to other elements.
For each element there will be branches go to the elements listed inside of it.

The tree structure that the browser build out of HTML is called The DOM.

DOM stands for:
The Document Object Model

Has a tree structure for each HTML element for each piece of text and other elements inside the web page.

**Tree Structure**
A tree has a root node.
Each node can have branches that lead to other nodes (it's children)
Each node has only one parent(except the root)

##Styling with CSS
**Styling HTML Directory**
Avoid repeating yourself

Style can be added to HTML via the style element
```
<style>
  p { color: blue }
</style>
<p>I'm blue!</p>

```

via the style attribute
```
<p style="color: blue">I'm blue</p>
```

What is inline style?
When styles are applied directly to an HTML element using the style attribute.

Using the style element the style is separated.

**CSS Syntax**
What is a CSS Ruleset made up of?

Selector: indicates which HTMLs elements the ruleset applies to.

Declaration Block: describes how the ruleset will modify the elements.

Can have multiple declarations inside of it.

Declarations hold a property and value. Declarations end with a semicolon.

**Properties and Values**

property: background-color:
value: blue;

**Selectors: Type**
used when wanting to apply a style very widely

What is a CSS Selector?
It tells the browser which elements the rule will affect.

One example of a type of CSS selector is called a type. 

Selector > Declaration block > Property > Value

**Selectors: Class and ID**
Class is a group of things with the same characteristics.

```
<p class="introduction">This is an element that has a class</p>
```
Within CSS file class starts with a '.'

ID is when there's only one element to apply it to.

```
<div id="main-article">
This has an id</div>
```
Within CSS file id starts with a '#'


**Cascading and Specificity**

What is cascading?
The way that style properties 'cascade' down the DOM tree starting at the top.

Styles applied to the body will affect the entire document. Style applied to a lower-level element will affect that element and all its descendants.

Style applied at a lower level can override a style at a higher level.

**Units**

- pixels = px = 1/96 of an inch = 96px within 1 inch
37.8 px = 1cm

- point = pt = 1/72 of an inch = 72pt within 1 inch

- em = relative to a size to something else on the page 

em relative to the font size of the text in the element 

```
p { font-size: 12pt }
<!-- 1em = 12pt -->

li { font-size: 18pt }
<!-- 1em = 18pt -->
```

**Boxes**

What is div? 
```
<div>
</div>
```
Div is short for division, its used to divide up pages into different sections.

It has an invisible box around it. Has a border, margin, height, width etc.

It is a generic container meant to contain text. Can place other elements you'd like within it. Used to organize content as well.

**Box Model**
- margin (outermost)
- border
- padding
- content (innermost)


**Percentages**

by default with doesn't include border or padding.

usually make the border & padding sizing smaller

**Separating Style**

```
<link rel="stylesheet" href="URL-OF-File">
```

**Color**

256 Colors in the browser.
Each color is stored in a single byte.

Primary Colors:
RGB = Red , Green and Blue


Color Pickers are helpful.
Color Pickers are included in Developers Tool section. 

To make the color gray:
Use equal amounts of red, green, and blue. 

To make black all values have to be zeroed out.(000)

To make white all values have to be maxed out. (255, FF, or 100%)

HSL = Hue Saturation and Lightness

bright red = rgb(100%, 0%, 0%)
bright blue = rgb(0%, 0%, 100%)
dark green = rgb(0%, 40%, 0%)
dark gray = rgb(30%, 30%, 30%)
black = rgb(0, 0, 0)
white = rgb(100%, 100%, 100%)
white = rgb(255, 255, 255)

Amount and intensity = brightness and light. 

Higher values = more intense brighter light.

Lower intensity = darker less intense light.

Hexadecimal = Base 16 (0-9, A-F)

#00cc66 or #99ccff
 R G B

#000000 = black
#ffffff = white
#ff0000 = bright red
#0000ff = bright blue

rgb(0%, 100%, 100%) = #00fff, aqua, rgb(0, 255, 255)

chartreuse = rgb(127, 255, 0)
value for green is high which makes it a bright, mostly-green color.

**Fonts**

Choose fonts that work well together.
```
font-family: 'Times New Roman', Helvetica, Impact;
```
Not every computer or device has the same fonts installed.

Times New Roman is not a font but a typeface.

**Typefaces** have multiple versions that look a little different from one another. 

Times New Roman italic, Times New Roman bold.

**Font** is a specified version of a typeface.

**Font Families**
Font families are a group of related fonts.

quotes surrounds font families that have spaces in their name. They help ensure the name is read as one thing, rather than three separate things.

**Generic Font Families and Font Stacks**

Generic font-families:
- serif
- sans-serif
- cursive
- fantasy 
- monospace: Courier, Courier New, and Source Code Pro

In monospace font family, every character is the same width. 

Useful for writing code because it ensures that everything lines up exactly as expected.

```
font-family: monospace;
```
Generally are used as fallbacks
In case the browser doesn't have access to the particular font that we want.

**Font Stack**
We can give multiple options to use. 

The first font in the stack is the most-preferred choice. If that isn't available then the next one, and so on.

```
font-family: Courier, "Courier New", monospace;
```
That way if none of the other font families are available, the browser will still use the right general type.

When you don't care what kind of font family the user sees but you know that you want it to be some sort of font. 

List of font alternatives the browser will pick the first it can.

Constantia font is only available on Windows.

**More Font Properties**

Other properties we can use to style our text.

bold - font-weight: bold;
italic - font-weight: italic;
underline - text-decoration: underline;

to change the font size we use font-size property
```
font-size: 24px;
```

to make text bold we use font-weight property

```
font-weight: bold;
```

to make text italic we use font-style property

```
font-size: italic;
```

to make text underline we use text decoration property 
```
text-decoration: underline;
```

**Shorthand font property**
It can get tedious typing different properties out individually. Fortunately there is a shorthand way to do this.

```
instead of typing out:
font-style: italic;
font-size: 24px;
font-family: Times;
```

we can type:
```
font: italic 24px Times;
```

font combines all of these properties in a single line:

1. font-style
2. font-variant
3. font-weight
4. font-size
5. line-height
6. font-family

When using this shorthand property they must be within a specific order. 

```
font: font-style font-variant font-weight font-size font-family;
```
```
font: italic small-caps bold 24px "Times New Roman";
```

What if I leave something out?
There are two properties that are required when using the font shorthand:

font-size and font-family
Everything else is optional. 

If we leave out one of the optional properties, it will just use the default.

```
font: italic 24px Times;
```
```
font: 24px Times;
``` 
- since font-style isn't specified, it defaults to normal and not italic 

Key Points About the font shorthand:
- font size and font family are required
- things need to go in the right order
- if we leave an optional property out, it will use the default



[CSS-Tricks article][https://css-tricks.com/snippets/css/font-shorthand/]
[CSS font property documentation from W3Schools][https://www.w3schools.com/css/css_font_shorthand.asp]
or Google: 'font shorthand order'

specific fonts:
Courier, Helvetica

generic fonts:
serif, monospace

If worried about fonts not being installed on all computers, another option is by using Google Web Fonts.

Since they do not have to be installed on the user's computer in order to work!

[!Try Google Web Fonts][https://developers.google.com/fonts/docs/getting_started]

can find all the available fonts here:
[https://fonts.google.com]

- read the get started with Google Fonts API documentation

**How to add Google Fonts Api**
- add a stylesheet link to request the desired web font:
```
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Font+Name">
  ```

- style an element with the requested web, font either in a style sheet:
```
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Font+Name">
```

- or with an inline style on the element itself:
```
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Font+Name">
```

always list a fallback web-safe font in order to avoid unexpected behaviors. 

Add generic font name like serif or sans-serif to the end of the list.

**Meaning Vs Style**

what's the difference between
```
 <strong></strong> <em></em> tags?
```
the historical reason is that HMTL was created before CSS, but engineers who designed CSS wanted to provide extra customization than HTML did. 

the default way to show emphasis is by styling it as italic. 

we don't have to do it that way, we can use CSS to override the default stylings. 

HTML code isn't only used by browsers that display on the screen. It's also used by search engines, smart speaker apps, and other programs. 

Those programs can't see 'boldface' or 'italics', but they know still need to know which text on a page is more important.

The em and strong elements specify the meaning of their contents. 

CSS style properties specify just the visual appearance.

HTML = meaning
CSS = look

This is semantics. Using markup to indicate meaning and not just appearance.

em tag indicates what needs to be emphasized. A program that's reading the page aloud to the user will use tone of voice to convey importance. If the page is displayed to the user it might want to emphasize by using color or another property instead of italics.

**Containers**

nesting boxes is useful when using a box as a container for other boxes.

**Flexbox**
Flexible box layout

```
display: flex;
```
resizes to fit the screen

```
flex-wrap: wrap
```
this wraps the elements down the window


[!w3schools color picker tool][https://www.w3schools.com/colors/colors_picker.asp]
[!w3schools hsl colors][https://www.w3schools.com/colors/colors_hsl.asp]
### Resources
- [!Wiki CSS][https://en.wikipedia.org/wiki/CSS] 


