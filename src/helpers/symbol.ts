export default {
  cedis: (val: number) => {
    if(!val){
      return `\u20B5${0}`;
    }
    return `\u20B5${val.toFixed(2)}`;
  },
  dot: "\u2022",
};
