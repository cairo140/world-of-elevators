export interface FloorConfigInit {
  entrance?: boolean;
}

export default class FloorConfig {
  entrance: boolean;
  constructor(params: FloorConfigInit= {}) {
    this.entrance = !!params.entrance;
  }
}
