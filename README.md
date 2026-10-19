# Assignment 5 - React Product Dashboard

Talha Yılmaz - Web Programming, Fall 2026

A small React app made with Vite. It shows a greeting from a name input and a product list that
can be shown or hidden with a button.

## Running

```
npm install
npm run dev
```

node_modules is not in the repo (it is listed in .gitignore), so `npm install` is needed first.

## File organization

```
index.html                     page with the #root div
package.json                   dependencies and scripts (from Vite)
vite.config.js                 Vite config (from the template)
src/
  main.jsx                     mounts <App /> into #root
  App.jsx                      root component, holds the two states
  components/
    Card.jsx                   layout wrapper, renders its children
    Product.jsx                one product (title + price) inside a Card
    ProductList.jsx            product array + .map() to Product components
```

App holds all the state (`showProducts` and `name`). ProductList gets nothing from App, it has the
static array itself. Product only receives `title` and `price` as props and has no state. Card does
not know what is inside it, it just renders `children` with a border and padding.

## Challenges I faced

**Cleaning the Vite template.** The template comes with its own App, CSS files, logos and a
counter example. I removed App.css, index.css, the assets folder and the public folder, and also
the favicon link in index.html, otherwise the page tried to load a file that no longer existed.

**Keys in the list.** The easy way is `key={index}` from map, but the assignment does not allow
it. Each product already has an `id`, so `key={product.id}` is stable and unique and there is no
key warning in the console.

**Controlled input.** At first I only had `onChange`, which works but is not a controlled input.
It only becomes controlled when `value={name}` comes from state too, so React is the one that
decides what the input shows.

**Where to put the state.** I thought about putting the show/hide state inside ProductList, but
the button is in App and the list is shown or hidden by App, so the state belongs in App. Then
`{showProducts && <ProductList />}` does the conditional rendering without touching the DOM.
