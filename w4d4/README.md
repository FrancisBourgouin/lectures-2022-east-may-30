# W4D4 - Responsive design and Sass

## Today's menu

- Why we should use responsive design
- Media queries
- CSS units
- Sass / SCSS

- Styling changes depends on the device
- Design that changes based on factors
- Better user experience
- Don't need to build different websites

## What is responsive?

- Adapts based on screen size
- Different browser support
- Orientation
- Changes based on user input
- Type of media
- Quick loading

### Why and how to responsive design

https://developers.google.com/web/fundamentals/design-and-ux/responsive/
https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns

### Media Queries

Control our content based on specified breakpoints
we can use max-width:XXXpx
we can use min-width:XXXpx
https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

### Percentages

Percentage is based on parent size, not viewport size
https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Percentages

### ems, rems... what ?

Relative sizing based on body font-size (em based on parent, rem on body)
https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size

### Maximum and minimum width

Makes using % width better with maximum or minimum sizes
https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
https://developer.mozilla.org/en-US/docs/Web/CSS/max-width

### Viewport

Size of the screen used to see the content
beware ! vw/vh/vmin/vmax are based on screen size, and not the parent
https://css-tricks.com/snippets/html/responsive-meta-tag/
https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size

### The box model and how size is calculated

### Flexbox

Main axis and cross axis are based on the direction of flex-direction, not horizontal and vertical.
http://flexboxfroggy.com/
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://caniuse.com/#feat=flexbox

### Grid (?)

https://getbootstrap.com/docs/4.2/layout/grid/
http://cssgridgarden.com/
https://caniuse.com/#feat=css-grid

## Sass / SCSS / Less

### What is a preprocessor and why we should use it

https://sass-lang.com/

### Sass example : variables

variable are awesome !
Declared with a $ sign, like $primary-color and are accessible through all the document

### Sass example : nesting

Instead of typing ul li ul li ul li a:first-of-type we can use nesting to incrementally work our way through the tree

### Sass example : partials and import

For specific elements, like a menu or a slider, it's more interesting to put it in a partial since you can reuse it easily on other projects

### Sass example : mixins

Mostly used for compatibility purposes, use prefixes instead of repeating them all the time

### Sass example : extend

Applying a list of properties to a specific element is way easier with @extend, and we define our blocks with %name_of_block

### Sass example : math

https://sass-lang.com/guide
https://sass-lang.com/documentation/file.SASS_REFERENCE.html

### How to integrate Sass in your own project

https://sass-lang.com/install
https://www.npmjs.com/package/node-sass-middleware
