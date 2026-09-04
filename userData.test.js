jest.mock('./fetchFromApi');

const fetchFromApiMock = require('./fetchFromApi');
const userData = require('./userData');

test("when fetchFromApi returns then userData returns", async () => {
  fetchFromApiMock.mockResolvedValue({ id: "user-id", name: "username" });
  
  const result = await userData("supplied-user-id");
  
  expect(result).toEqual({ id: "user-id", name: "username" });
})