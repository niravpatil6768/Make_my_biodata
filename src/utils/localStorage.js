export const setUserId = (userId) => {
  localStorage.setItem("userId", userId);
  console.log(localStorage.getItem("userId"));
};

export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  return userId;
};
