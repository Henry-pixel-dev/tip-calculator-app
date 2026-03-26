# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://tip-calculator-app-rho-steel.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://tailwindcss.com/) - For styles

### What I learned

using of global variable and the use of the dynamic rendering of the anwser even.

To see how you can add code snippets, see below:

```html
<input type="number" min="1"  id="custom-tip" class="bg-Grey-100 text-right text-3xl font-bold text-Green-900 block w-full rounded-md border-gray-300 shadow-sm  hover:outline-Green-400  focus:outline-Green-400 " placeholder="Custom">
```
```css

.border-red-500{
  outline:1px solid hsl(0, 100%, 50%);
}
```
```js
function calculateTip() {
    if (numberOfPeople === 0) {
        showError();
        return;
    }

    if (!Number.isInteger(numberOfPeople) || numberOfPeople <= 0) {
        return;
    }

    if (amount === 0 && tipPercentage === 0) {
        return;
    }

    
    const tipAmount = (amount * (tipPercentage / 100)) / numberOfPeople;
    const totalAmount = (amount / numberOfPeople) + tipAmount;
    tipAmountDisplay.textContent = tipAmount.toFixed(2)
    totalAmountDisplay.textContent = totalAmount.toFixed(2)
}
```
i learned alot about dynamic rendering and also a little html form validation
### Continued development
i learned alot about javascript maths logic , so now i think i want something to move on to a new face and transist to a new path




### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- claude
- i used it to describe how a tip calculator works it is not native to my region
- What worked well? everythig is smooth so far


## Author

- Frontend Mentor - [@Henry-pixel-dev](https://www.frontendmentor.io/profile/@Henry-pixel-dev)
- Twitter - [@Histobloq](https://www.twitter.com/@Histobloq)
