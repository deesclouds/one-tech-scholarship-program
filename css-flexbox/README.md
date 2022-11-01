# CSS Flexbox

The Flexible Box Module:

To use flexbox set display property of a container to flex.

The items inside the element will automatically become flex items, and we can use the flexbox syntax in our CSS code.

container = parent element
items = elements within the parent

**Axes and Direction with Flexbox**

The main axis & cross axis
- row
- row-reverse
- column
- column-reverse

Two row settings will create the main axis horizontally - or inline direction.

The two column settings will create the main axis vertically - or block direction. 

block or inline here refer to the CSS display settings.

The axis determines the flow of our content. Think as being either rows or columns. They will be determined when we start aligning and justifying content with a flex container.

**Axes and Direction in Action**

After turning on flex, next we state how the elements should be laid out. [rows / columns] and we do this with flex-direction property.

The two axis control the flow of space in flexbox and correspond to the align-items and justify-content properties.

Drawing out flex containers first can be helpful for mapping out axes and direction.

**Ordering Elements with Flexbox**
Three ways to set the order which items appear within flexbox container. 

- moving html code for the elements to reorder
- row-reverse or column-reverse: will reverse the order in the specified row or column
- using order property of the individual items inside the grid.

**Ordering Elements Demo**
- flex-direction: row; lays elements out from left to right
- flex-direction: row-reverse; flip order and display elements from right to left

**Aligning Items & Justifying Content w/ Flexbox**
- align items on the cross axis use align-items with:
    - stretch
    - flex-start
    - flex-end
    - center
- justify-content on the main axis:
    - flex-start
    - flex-end
    - center
    - space-around
    - space-between
    - space-evenly
**Aligning & Justifying in Action**
Flexbox is all about aligning, justifying & distributing.
    
## Resources
[!MDN Align & Justify][https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#Alignment_justification_and_distribution_of_free_space_between_items]
[!MDN Flexbox][https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox#Ordering_flex_items]
[!MDN Flexbox][https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox]
[!MDN axes&direction][https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#The_two_axes_of_flexbox]