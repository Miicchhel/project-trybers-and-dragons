import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static numberCreatedRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.numberCreatedRacesInstances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.numberCreatedRacesInstances;
  }
}