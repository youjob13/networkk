export const updateObject = (items, itemId, objPropName, objProps) => {
  return items.map((item) => {
    if (item[objPropName] === itemId) {
      return { ...item, ...objProps };
    }
    return item;
  });
};
