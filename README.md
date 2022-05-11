# React Router Dog Finder

Build an app that routes to different dogs and displays information on that dog when you're at that route.

The routes look like this:

- `/dogs` is the homepage and shows all three dogs
- Clicking on a dog from the homepage takes you to that dog's route. For example clicking on Whiskey will take you to `/dogs/whiskey`.
- `/` and every other endpoint not listed should navigate you to `/dogs`.

Here's an image of what the app looks like. It should look the same once you've refactored it!

![dog finder app](./dog-finder.gif)

`hint`:
App has two routes:

`/dogs`
`/dogs/:name`

Both of them render the `Dogs` component.

`Dogs` maps over the dog info, and renders a `Dog` component for each dog.

The `Dog` component reads the route parameter, `name`, and renders extra info if it matches `props.name`.
