# CSS Grid

Grid vs Flexbox

Flexbox is for how content flows, Grid is for how content is placed. 

Grid works nicely for page layouts, flex works nicely for regions within the grid.

To use CSS Grid set the display property of the container element to grid.

Flexbox can work within Grid.

Grid is two dimensional, while Flex is one.
Grid is layout first, while Flexbox is content first.
Flex is for components for an app, Grid is for the app layout itself.

CSS Grid does not replace Flexbox. Each can achieve things that the other is not capable of. A true master can use Flexbox and CSS Grid together in harmony to create the ultimate webpage layout.

At the highest level CSS Grid excels at creating layouts for a webpage, while Flexbox is a master of content flow for each element that makes up the page layout.

**Rows and Columns**
grid-template-columns
grid-template-rows
grid-gap: defines the gutters [distance between rows and columns] we can use grid-gap on the parent container that has the display property set to grid.
*grid-gap is deprecated. gap is used instead*

**Rows and Columns in Action**
grid-template-columns property defines the column layout of the grid. this is how many sections the page should be divided into vertically.

The values for this property are the explicit value for each column and the number of columns is defined by the number of values entered.

```
grid-template-columns: 60px 60px;
```

creates two columns of 60px each. If we had two items inside our grid and didn't set their position explicitly, the first item would be placed in the first column and the second item in the second. grid-template-rows follows the same logic.

```
grid-template-columns: 60px 60px;
grid-template-rows: 160px 60px;
```

creates a grid with two columns and rows.

A CSS Grid us made up of rows and .columns which are defined using CSS properties grid-template-columns & grid-template-rows, which take as values the size of each track.

**Grid Areas**
The grid-area property specifies a particular area or set of rows and columns that a grid item occupies. it is applied to the grid item itself with CSS. Here is an example:

```
.item{
    <!-- places the item from rows 1-2 and columns 2-3 -->
    grid-area: 1/2/3/3
}
```

grid-area is shorthand for [grid-row-start, grid-column-start, grid-row-end, grid-column-end].

**Working with Grid Areas**
the grid-area property defines the space an element takes up in the grid by setting values for the row it starts and ends in, and the column it starts and ends in.

#one {
    <!-- row start/ column start/ row end/ column end -->
    grid-area: 1/2/3/3;
}

the element with the id, one would start at the first row and the first column, and end at the third row (which is the end of the second row if there is no third row) and the third column.

the grid-area CSS property is shorthand for grid-row-start, grid-column-start, grid-row-end, and grid-column-end, and it defines the area that an element occupies in a grid.

Grid Areas Summary
grid-template-areas is the property used to name the rows and columns of a grid and set its layout. It could look like this:

```
.container {
      display:grid;
      grid-template-columns: 300px 300px 300px;
      grid-template-rows: 250px 600px;
      grid-template-areas: 
      "hd hd hd hd hd hd hd hd"
      "sd sd sd main main main main main"
      "ft ft ft ft ft ft ft ft";
  }
```
the named areas in the grid are then assigned to each element according to where we want them to be displayed in the grid:

```
.header {
    grid-area: hd;
}
```

in the example above the element with the class header will stretch across the entire first row of columns because we have assigned it the grid-area hd, and we have defined the area hd with the value for grid-template-areas in the parent element.


# Resource

[!Complete Grid Guide][https://css-tricks.com/snippets/css/complete-guide-grid/]
[!Grid visualizer & generator][https://cssgrid-generator.netlify.com/]
[!Grid or Flexbox?][https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412]
[!Grid vs. Flexbox][https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf]
[!Does CSS Grid Replace Flexbox?][https://css-tricks.com/css-grid-replace-flexbox/]