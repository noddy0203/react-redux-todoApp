export const addItem = (data) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: Math.floor(Math.random()*100000),
      data: data,
    },
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    id
  };
};

export const deleteItem = () => {
  return {
    type: "DELETE_ITEM",
  };
};
