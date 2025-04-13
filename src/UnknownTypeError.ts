export default class UnknownTypeError extends Error {
  constructor(name: string, type: never) {
    super(`${name}: Unknown type '${type}'.`);
  }
}
