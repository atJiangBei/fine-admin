const temporary = {
  set(name: string, item: string | object) {
    item = typeof item === 'object' ? JSON.stringify(item) : item;
    window.sessionStorage.setItem(name, item);
  },
  get(name: string): string | object | null {
    const result = window.sessionStorage.getItem(name);
    try {
      return JSON.parse(result as string);
    } catch (err) {
      return result;
    }
  },
  remove(name: string) {
    window.sessionStorage.removeItem(name);
  },
};

export { temporary };
