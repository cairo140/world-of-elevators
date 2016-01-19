export interface ElevatorConfigInit {
  size?: number;
}

export default class ElevatorConfig {
  size: number;
  constructor(params: ElevatorConfigInit= {}) {
    this.size = params.size || 6;
  }
}
