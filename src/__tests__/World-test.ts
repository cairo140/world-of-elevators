import ElevatorConfig from "../config/ElevatorConfig";
import FloorConfig from "../config/FloorConfig";
import WorldConfig from "../config/WorldConfig";

jest.dontMock("../World");

import World from "../World";

describe("World with basic config", () => {
  let basicWorldConfig;
  let world;
  beforeEach(() => {
    basicWorldConfig = new WorldConfig();
    basicWorldConfig.floorConfigs = [new FloorConfig(), new FloorConfig()];
    basicWorldConfig.elevatorConfigs = [new ElevatorConfig()];
    world = new World(basicWorldConfig);
  });

  it("should instantiate", () => {
    expect(world).toBeDefined();
  });

  it("should have 0 people", () => {
    expect(world.people.length).toBe(0);
  });
});
