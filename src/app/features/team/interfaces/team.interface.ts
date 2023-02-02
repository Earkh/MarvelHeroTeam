import { IHero } from '../../hero/interfaces/hero.interface';

export interface ITeam {
  name?: string;
  desc?: string;
  heroes?: IHero[];
}

export interface ITeamDataForm {
  name?: string;
  desc?: string;
}
