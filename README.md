# battleship-game-repo

![Design preview for the Space tourism website coding challenge](./assets/preview.jpg)

## Welcome! 👋
## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS utility classes


### What I learned

1) the way to present ships in the game within OOP

```js
let model = {
  
  ships = [
    { locations: ["", "", ""], hits: ["", "", ""] },
    { locations: ["", "", ""], hits: ["", "", ""] },
    
  ],
  
};
```

2) .indexOf() method returns an index of its value in the brackets. Used to find index inside both arrays and strings
```js
// I check if the locations array has a sought element and if it does the method returns its index. 
// Otherwise it returns -1. The index variable keeps the result.
let index = ship.locations.indexOf(guess);
```

3) string.charAt(index) method returns a character of a string, located on the specified index
```js
// I use it to get letter out of the user's input and turn it into a number later on 
let firstChar = guess.charAt(0);
```

4) making chosen functions load in advance
```js
window.onload = init;
```

### Continued development

* CSS grid;

*Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Grid Attack](https://codingfantasy.com) - This helped me practice CSS GRID. Challenging and interactive game aimed at learning the css grid properties' application.

- [Git + GitHub](https://www.youtube.com/watch?v=RGOj5yH7evk) - the basic git commands (Youtube).
- [The Markdown Guide](https://www.markdownguide.org/) - for more help with writing markdown (Article).

## Author

- Github - [DannyLenk](https://github.com/DannyLenk)
- Frontend Mentor - [@DannyLenk](https://www.frontendmentor.io/profile/DannyLenk)
- Facebook - [Valerii Danylenko](https://www.facebook.com/valerii.danylenko)
- LinkedIn - [Valerii Danylenko](https://www.linkedin.com/in/valerii-danylenko-74379212b)
- insta - [valeriidanylenko](https://www.instagram.com/valeriidanylenko/?hl=ru)

## Acknowledgments

Thank you, Kevin Powell. Hats off to you and your clear English.
