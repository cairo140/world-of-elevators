import Elevator from './Elevator';
import ElevatorConfig from './config/ElevatorConfig';
import Floor from './Floor';
import FloorConfig from './config/FloorConfig';
import Person from './Person';
import WorldConfig from './config/WorldConfig';

export default class World {
  clock: number;
  elevators: Array<Elevator>;
  floors: Array<Floor>;
  people: Array<Person>;
  constructor(worldConfig: WorldConfig) {
    this.clock = 0;
    this.floors = [];
    worldConfig.floorConfigs.forEach((config: FloorConfig) => {
      this.floors.push(new Floor(config));
    });
    this.people = [];
    this.elevators = [];
    worldConfig.elevatorConfigs.forEach((config: ElevatorConfig) => {
      this.elevators.push(new Elevator(config));
    });
  }

  tick() {
    this.floors.forEach(floor => {
      floor.tick(this.clock);
    });
    this.people.forEach(person => {
      person.tick(this.clock);
    });
    this.elevators.forEach(elevator => {
      elevator.tick(this.clock);
    });
    this.clock++;
  }
}
