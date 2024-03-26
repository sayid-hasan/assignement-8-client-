const getIdFromLS = (keyName) => {
  let storedItemsLS = localStorage.getItem(`${keyName}`);
  if (storedItemsLS) {
    return JSON.parse(storedItemsLS);
  }
  return [];
};

const saveItemLS = (id, keyName) => {
  let storeditems = getIdFromLS(`${keyName}`);
  let exists = storeditems.find((jobId) => jobId === id);
  if (!exists) {
    storeditems.push(id);
    localStorage.setItem(`${keyName}`, JSON.stringify(storeditems));
  }
};
export { getIdFromLS, saveItemLS };
