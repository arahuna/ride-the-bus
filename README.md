
# Critical Requirements
- [ ] Fetch, shuffle, and draw from the deck API
- [ ] 4 Questions, for each question draw a card: 
  - [ ] 1: Is the next card red or black
  - [ ] 2: Is the next card greater, lesser or equal to the previous card
  - [ ] 3: What is the suit of the next card
- [ ] If the player fails a question, display a gameover message and ask if they want to restart
- [ ] If the player answers all questions correctly, display a success message and ask if they want to restart
- [ ] Each card should be displayed

# Bonus Requirements
- [ ] Add a score counter for each question
- [ ] Fancy animations


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
