# ngContextualMenu
Small directive for angular, to implement a contextual menu that's able to execute actions. You can see a demo <a href="http://imperdiblesoft.github.io/ngContextualMenu/demo/" target="_blank">here</a>.<br />

With this directive, developers can avoid to design and create a user interface for small tasks like refreshing the page, removing some data from a table, or opening some configs windows. Just create the logic, and ngContextualMenu will allow you to execute all these actions from the same place.

# Installation
To install ngContextualMenu on your project, follow these steps: <br />
1) Make a <code>npm install ng-contextual-menu</code>. <br />
2) Copy the file <code>node_modules/ng-contextual-menu</build/ngContextualMenu.js</code> to your project's folder. <br />
3) Declare ngContextualMenu as a dependency for your module <code>angular.module('myApp' ['ngContextualMenu'])</code> <br />
4) Save it. You are done!

# Use
Now, you just have to write <code>&lt;ng-contextual-menu&gt;&lt;/ng-contextual-menu&gt;</code> on your code, and that's it,
you already have a console installed on your Angular website.

You can use different attributes to customize it:
* *custom-theme*: An array with some colors config, so you can get your website's look&feel.
* *custom-actions*: An array with actions that you wanna add to the contextual menu.

# Custom actions
Custom actions must have particular properties to make them work. Each action must have:
* *label*: Text that's gonna be displayed on the dropdown (<code>string</code>).
* *action*: The function that's gonna be executed (<code>function(){ whatever(); }</code>).
* *spacer*: If you want to separate different sets of actions, just add this property to one action to transform it into a spacer (<code>boolean</code>).

# Custom theme
If you want to customize ngContextualMenu's default colors, you can specify a <code>customTheme</code> on your <code>options</code> object. This object can have:
* *bgColor*: The background color for the contextual menu.
* *hoverColor*: The color that the overed action is going to have.
* *spacerColor*: The color that spacers are going to have.
