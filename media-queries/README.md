# Media Queries

Expressions we can add to our code that modify our website based on characteristics of the device that it's being viewed on.

135 device sizes

Different devices will display our code differently.

Media queries with breakpoints.

What are **breakpoints**?
The ```viewport``` width at which we want our design to change.

Writing code within a media query, with a set breakpoint, we want to go into effect only when the viewport width the app is being viewed on is at least the breakpoint width.

Only the CSS that we want to change goes there. The original CSS rules still apply, only the new CSS rules written within the media query will override any pre-existing rules. 


What is **viewport**?
The part of the document that is currently visible.

The area of the window in which web content can be seen. We use the dimensions of the viewport(usually the width, but sometimes the height) as the basis of our media queries.

Viewports are mutable.


# Adding Media Queries in Code

Media queries are used to set different style rules for different devices or sized screens.

Use breakpoints to set the condition of a media query.

```
@media(feature:value)
```

Media features are aspects of the device that our media (website) is viewed on.

The media feature we're most interested in right now is width, which allows us to evaluate the viewport width of the browser and set conditions based on that evaluation.

We write min-width of max-width because width is one of many media features that are range features, means they can be prefixed to express constraints, which is what we're looking for with our breakpoints!

If the constraint of the breakpoint (viewport width being in the range below our breakpoint) is broken (the width is larger than the breakpoint) the new CSS rule takes effect.

```
@media(min-width:900px) {
    body{
        background:red;
    }
}
```
The viewport width is greater than 900px the background of the webpage turns red.

The most sane way is to start first with the smallest setting then expand from there.

Mobile-ready site then develop to a big website.

Always a good idea to place our media queries below our code.

Media queries are used to create responsive layouts using breakpoints. 

Another example of the syntax used for creating media queries:

```
@media(min-width:1100px) {
    body{
        font-size: 27px;
    }
}
```

If the browser width of the webpage being viewed is above 1100px wide, then the font-size would become 27px.

Media queries can help change the layout for different screen sizes.

# Multiple Breakpoints

There are some development moments that will call for 3 possible layouts.

A simple example would be creating 2 different breakpoints so that up to x width one set of CSS rules apply, then between x and y width a second set would apply, and then for anything beyond a width of y a third set of CSS rules would apply.

```
/* Anything smaller than first breakpoint 600px */
.container{
    // rules for small screen
}

/* Medium Screens */
@media (min-width: 600px) and (max-width:900px) {
    .container {
    // rules for medium-sized screen
    }
}

/* Large Screens */
@media (min-width: 901px) {
    container {
        // rules for large screen
    }
}
```

The medium screens media query is new, and we use the keyword and to build a complex media query that evaluates both a min and max to create a range for the CSS rules to apply, in this case if the width of the viewport is between 600px - 900px.

Can set up as many breakpoints as we want but they can start to conflict pretty quickly.

Complex media queries can be built using the keyword and to bound CSS rules between a range using min-width and max-width.

Media queries are a vast landscape of possibility, most of which we'll probably never use but, having a strong grasp of media queries and responsive breakpoints is essential for a web developer.

# Building Responsive Layouts with Flexbox and Grid

CSS grid is one of the most useful features that can easily nest grids inside each other to create elegant, complex layouts. To nest CSS grids simply set ```display``` property of the container element to grid then select the child grid item you want to make nested grid and set the display property of that element to grid as well. 

# Nesting Grids in Practice

Nesting CSS grids is simply can be done using the ```display: grid``` rule for both a parent and child element.

```
.container {
    display: grid;
    // ...
}

#one {
    display:grid
}
```

# Resources:

[!MDN media queries][https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries]
[!viewport][https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts#What_is_a_viewport]
[!viewport meta tag][https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag]