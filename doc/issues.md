1. Each child in a list should have a unique "key" prop.
   If you're iterating over an array and creating components, ex: arr.map((item) => <Text>{item}<Text/>), you'll get this error if you don't add a key for each item. to do this, add the key prop to the component (mayonly be true for <view>. if so just wrap your component in a view)
   
   ```
   arr.map((item, index) => <View key={index}>
                            <Text>{item}
                            <Text/>)
   ```

2. next