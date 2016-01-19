import ElevatorConfig from './config/ElevatorConfig';

export default class Elevator {
  constructor(config: ElevatorConfig) {
    console.log('Elevator#constructor');
  }

  tick(clock: Number) {
    console.log('Elevator#tick');
  }
}
