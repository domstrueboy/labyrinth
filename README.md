## Hey!

My name is Pavel Bobylyov, I am from Russia, my city's name is Chelyabinsk (I guess it's hard to pronounce for you), I have children, and my daughter likes, you know, phone games with robots, that you should direct the robot through a labyrinth with your commands. Such games should teach a kid how to program. Usually, you apply these commands by buttons with arrows or something like that because the games are for little children, who can't write (or type) the code yet. My daughter can write though, she is already 8. And she tries and likes typing on the laptop keyboard. So, why don't I try to mix these activities she likes? As a final project for CS50 I chose the game "Labyrinth" where you have several simple commands, much simpler than a real programming language, but you should really write "the code".

The Labyrinth is a single page application, I hosted it on a free static hosting by GitHub. There is no server in the first version. I used Svelte framework for a frontend (actually only) part of the app.

You have several commands: up, down, left, right, repeat (for my daughter I added Russian versions of the commands yet). After a command you must provide a number of steps. Also you can use "blocks" of code, split by an empty line. For instance:

```
up 2
left 1

repeat 2
down 1
right 1

right 2
```

The Bug in the Labyrinth will go:
```
up
up
left
down
right
down
right
right
right
```

That's it. Let's try!

## Possible improvements:

- scores and charts
- syntax highlighting
- running command highlighting
- more maps
- maps editor
- actual server with login ability
- ability to choose a character instead of the Bug
- color themes
- more cell types - stones, pits, etc

---

## Getting started for a developer
*Note that you will need to have [Node.js](https://nodejs.org) installed.*

Install the dependencies...

```bash
npm i
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000/dev](http://localhost:5000/dev). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Building and running in production mode

For my repository I also set auto-building the app when you push a commit into master branch on github. It uses GutHub Actions for building (look at .github/workflows directory). The built app is available on [https://domstrueboy.github.io/labyrinth/](https://domstrueboy.github.io/labyrinth/).
