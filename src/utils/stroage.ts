const createStorage = (storageType: 'localStorage' | 'sessionStorage') => {
  const storage = window[storageType];
  return {
    set(name: string, item: string | object) {
      storage.setItem(name, JSON.stringify(item));
      return storage;
    },
    get(name: string): string | object | null {
      return storage.getItem(name);
    },
    remove(name: string) {
      storage.removeItem(name);
      return storage;
    },
  };
};
const temporary = createStorage('sessionStorage');

const eternal = createStorage('localStorage');
export { temporary, eternal };
