# Swiggy React

# Parcel

- Dev build
- Local server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking - remove unused code
- Different dev and production bundles

/\*\*
_ Header
_ - Logo
_ - Nav items
_ Body
_ - Search
_ - Restuarant Container
_ - ResturantCard
_ - Img
_ - Name of Res, Star Rating, cuisine, delivery time  
 _ Footer
_ - copyright
_ - Links
_ - Address
_ - contact
\*/

Two type of Export/Import

- Default Export/Import

  export default Component;
  import Component from "path"

- Named Export/Import

export const Component
import {Component} from "path"

# Types of testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up testing

- install React Testing Library
- install jest
- install Babel dependencies
- Configure Babel
- Configure parcel Config file to disable default transpilation
- Jest -npx jest --init
- install jsdom library
- install @babel/preset-react
- install @testing-library/jest-dom
