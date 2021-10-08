export const updateObject = <I, T>(
  items: any,
  itemId: number,
  objPropName: string,
  objProps: T,
) =>
  items.map((item: any) => {
    if (item[objPropName] === itemId) {
      return { ...item, ...objProps };
    }
    return item;
  });
