import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "../../src/protocols-generator";

jest.mock("uuid", () => {
  return {
    v4: () => {
      return "mock protocol"
    }
  }
})

describe("Protocol generation", () => {
  it("Should create protocol", async () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const priority = faker.datatype.boolean()

    const result = generateProtocolForPacient(firstName, lastName, priority)
    expect(result).toEqual({
      priority,
      date: expect.any(Date),
      pacient: `${firstName} ${lastName}`,
      protocol: "mock protocol"
    })
  });
});