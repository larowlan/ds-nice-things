We deserve nice things.

Just because we work with Drupal doesn't mean we can't have nice frontend things.

It's easy to look at all the new frameworks and be envious

A lot of their new features are things we've had for years

HTMX is the new shiny -> its a re-imagining of #ajax which we've had for 16 years

Incremental static regeneration -> we've had big-pipe and render caching for years. Our invalidation is much nicer.

Island architecture - we've had islands of interactivity for at least a decade.

Tempting to look at the development experience for the frameworks and think I want those things.

But if you jump to decoupled you risk degrading or needing to rebuild features that editors love.

Developer experience shouldn't be more important than everything else like complexity, performance, maintenance.

It doesn't have to be this way

So with that aside, I give you the Nice Things Manifesto

* Painless css processing (postcss/sass)
* Painless JavaScript bundling
* NPM installable stuff
* Component libraries and great frontend docs 
* Playground for designers to see how components interact
* No duplication of markup between Drupal and design system
* Hot module reloading, no more hard-reloads
* Interaction, snapshot and visual regression testing

Well I'm here to tell you can have this and Drupal. 

In fact I'm going to show you.

🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄

To get started you need npm

Let's start a new Vite project - pick your flavour (react/html/TS)

Configure Vite and Storybook

Setup some Global CSS

🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄

Create a story 

🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄

Hot reloading

This is where the nice things kick in.

Let's rearrange my screen and go through FE workflow.

🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄

What about your usual tools like PostCSS or SASS if your still using that

Vite has built in support

Setup you config

Let's use a mixin

🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄

So now you've got the parts, its time to do the work and build your components

But we can document things as we go, mixing stories with markdown thanks to Storybook blocks and MDX

🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄

What about at production time

Vite is built on top of rollup so anything you can do with Rollup you can do here

🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄

Interaction testing

🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄

Using in Drupal
