const fetchUserData = require('./fetchUserData');

test("when userId is supplied then JSON object of user is returned", async () => {
  const userId = "user-id";

  const result = await fetchUserData(userId);
  
  expect(result).toEqual({
    id: userId,
    name: "Jason Object"
  })
})

test("when userId is not supplied then error is thrown", async () => {
  try {
    await fetchUserData();
    throw new Error("I don't expect to reach this line");
  } catch (error) {
    expect(error.message).toBe("User ID not provided");
  }
})