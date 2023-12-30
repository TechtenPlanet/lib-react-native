# Component structure

Components should be as small as possible. The structure of components should follow the [React Native Atomic Design Pattern](https://github.com/danilowoz/react-atomic-design). You can learn more [here](https://github.com/danilowoz/react-atomic-design).

Each component should be placed in it's own folder with the component name as the folder name and an index.js file that defines the component, a style.js file  that defines the styling for the component, and an actions.js file that defines the business logic for the component. 

If there are smaller components that are specific to the component, create subfolders following the same structure model.  
If there are smaller components that are reusable in other components, create a subfolder in the global components folder following the same structure model.  