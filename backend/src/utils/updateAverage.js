import User from "../models/user.js";

const updateAverage = async (user, result) => {
  const prevResults = [...user.testsResults];
  const sumOfPrevResults = prevResults.reduce((acc, result) => {
    acc += result;
    return acc;
  }, 0);

  let newAvg = (sumOfPrevResults + result) / (prevResults.length + 1);
  // if the number is not an integer truncate it to two decimal places
  if (Math.ceil(newAvg) !== newAvg) {
    const num = newAvg.toString().split(".");
    newAvg = +[num[0], num[1].substring(0, 2)].join(".");
  }

  await User.findByIdAndUpdate(user._id, {
    averageResult: newAvg,
    amountOfTests: prevResults.length + 1,
    testsResults: [...prevResults, result],
  });
};

export default updateAverage;
