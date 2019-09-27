
interface IGetObject {
  [key: string]: string;
}

const get = (object: IGetObject | any, path: string, defaultValue: unknown = null) => {
  if (!object || !path) { return defaultValue }
  const result = path.split('.').reduce((o:IGetObject = {}, key: string):any => o[key], object);
  return result || defaultValue;
}

  
export {
  get,
}