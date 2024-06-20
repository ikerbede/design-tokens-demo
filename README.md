# Hands on Design Tokens 🙌

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/ikerbede/design-tokens-demo)



# Deal with Style Dictionary

## Resources

- [W3C Design Tokens](https://tr.designtokens.org/format/)
- [Style dictionary](https://amzn.github.io/style-dictionary/#/README)
- [Style dictionary Utils](https://github.com/lukasoppermann/style-dictionary-utils)


## Practice

### Basics

1. Install style dictionary dependencies: 
`npm i style-dictionary style-dictionary-utils`

2. Create a minimal configuration file `sd.config.js` to obtain css variables:
```javascript
import StyleDictionary from 'style-dictionary-utils';

const config = {
  "source": ["tokens/**/*.json"],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "buildPath": "dist/css/",
      "files": [{
        "destination": "variables.css",
        "format": "css/variables"
      }]
    }
  }
};

const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();
```

3. Add a script into `package.json` to build these variables:
```json
"scripts": {
  "sd-build": "node sd.config.js"
}
```

4. Build the css variables and use them in the `src/product-card.style.ts`. Example of applying a css variable:
```css
--dim-s: 8px;
--dim-l: 32px;
/* padding: 8px 32px; */
padding: var(--dim-s) var(--dim-l);
```


### Advanced features

5. Find a configuration to preserve token aliasses into generated css variables: 
```json
"color": {
  "primary": {
    "value": "{color.green.300}",
    "type": "color"
  }
}
```
should generate:
```css
  --dark-color-primary: var(--global-color-green-300);
```

6. Find a configuration to change automatically pixels to rems during the generation.


## Summary

[Video tutorial on Youtube](https://www.youtube.com/watch?v=RcxP0RePlVU)
