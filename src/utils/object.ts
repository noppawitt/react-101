export const set = <T>(obj: T, path: string, value: unknown): T => {
  const props = path.split('.');
  const finalProp = props.pop();

  if (!finalProp) {
    return obj;
  }

  const newObj = { ...obj } as Record<string, unknown>;

  let ptr = newObj;

  props.forEach((prop) => {
    ptr[prop] = Object.assign({}, ptr[prop]);
    ptr = ptr[prop] as Record<string, unknown>;
  });

  ptr[finalProp] = value;

  return newObj as T;
};
