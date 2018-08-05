class Skill {
  name: string;
  learned: boolean;

  /**
   *
   */
  constructor(name: string, learned = false) {
    this.name = name;
    this.learned = learned;
  }
}

export default Skill;
