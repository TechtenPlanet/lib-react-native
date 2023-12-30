## Common Issues
### Parse Server Cyclic Dependencies; 
>>  Parse server javascript npm module has cyclic dependencies that may not be an issue but causes warning messages to flood the console when developing;  
    example log is;
    > Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.
    [Sat Mar 06 2021 16:32:19.556]  WARN     Require cycle: node_modules\rn-fetch-blob\index.js -> node_modules\rn-fetch-blob\polyfill\index.js -> node_modules\rn-fetch-blob\polyfill\XMLHttpRequest.js -> node_modules\rn-fetch-blob\index.js

    To get rid of these, edit the metro file in node_modules.  
    find C:\Users\manny\Documents\manny\business\akuila\project\akuila\akuila_app\akuila_delivery_driver\node_modules\metro\src\lib\polyfills\require.js  
    and comment out the following lines;  
    ``` 
    console.warn(
        `Require cycle: ${cycle.join(" -> ")}\n\n` +
          "Require cycles are allowed, but can result in uninitialized values. " +
          "Consider refactoring to remove the need for a cycle."
    );
    ```
    Keep in mind this could affect other cyclic dependencies that could be a problem.