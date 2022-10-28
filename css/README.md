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



### Resources
- [!Wiki CSS][https://en.wikipedia.org/wiki/CSS] 


