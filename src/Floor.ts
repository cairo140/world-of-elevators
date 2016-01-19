import FloorConfig from './config/FloorConfig';

class Floor {
  constructor(floorConfig: FloorConfig) {
    console.log('Floor#constructor');
  }

  tick(clock: number) {
    console.log('Floor#tick');
  }
}

export default Floor;
