export const api = {
  get: async (path: string) => fetch(path).then((res) => res.json()),
};
