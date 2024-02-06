export const addblogFunction = (blog) => {
  return {
    type: "ADD_BLOG",
    payload: blog,
  };
};
export const removeblogFunction = (id) => {
  return {
    type: "REMOVE_BLOG",
    payload: id,
  };
};
