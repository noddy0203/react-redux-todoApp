const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data
          },
        ],
      };
    case "REMOVE_ITEM":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList
      };

    case "DELETE_ITEM":
      return {
        ...state,
        list: []
      };

    default:
      return state;
  }
};

export default todoReducer;
