# Run all three apps on different devices

I usually run the partner app in bluestack, the rider app on my phone for the location and the delivery app on another bluestack instance or the emulator. We just need to specify --port <portnumber>  
if the port thing is not working, a trick to do is to run the default port on bluestack, then run --port

# Alias

We can create aliases for directories so we don't have to worry about completing a full path to import a component. 
For example, we can create an alias called _components that aliases ./src/components. With this we can replace the following import;
import 'Button' from './src/components/Button'
with;
import 'Button' from 'lib_components/Button'

This allows us to maintain clean code, especially for imports that requires us to reference multiple parent directories. 
For example we can replace the following import;
import 'Button' from '../../../components/Button'
with;
import 'Button' from 'lib_components/Button'

Use the following steps to configure aliases in your project.

1. npm install --save-dev babel-plugin-module-resolver eslint-import-resolver-babel-module

2. edit bable.config.js with the following
   
   ```
   [
      require.resolve('babel-plugin-module-resolver'),
      {
   
        root: ['./src/'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _hooks: './src/hooks',
          _images: './src/assets/images',
          _models: './src/assets/models',
          _modals: './src/assets/modals',
          _navigations: './src/navigations',
          _screens: './src/screens',
          _services: './src/services',
          _stores: './src/stores',
          _styles: './src/styles',
          _helpers: './src/helpers',
        },
   
      },
    ],
   ```

3. edit jsconfig.json with the following
   
   ```
   "baseUrl": "./",
   "jsx": "react",
   "paths": {
     "_assets/*": ["./src/assets/*"],
     "_components/*": ["./src/components/*"],
     "_hooks/*": ["./src/hooks/*"],
     "_images/*": ["./src/assets/images/*"],
     "_models/*": ["./src/assets/models/*"],
     "_modals/*": ["./src/assets/modals/*"],
     "_navigations/*": ["./src/navigations/*"],
     "_screens/*": ["./src/screens/*"],
     "_services/*": ["./src/services/*"],
     "_stores/*": ["./src/stores/*"],
     "_styles/*": ["./src/styles/*"],
     "_helpers/*": ["./src/helpers/*"]
   },
   ```

4. edit .eslintrc with the following;
   ```  
   settings: {
    "import/resolver": {
      "babel-module": {}
    }
   }