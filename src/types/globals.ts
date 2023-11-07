/************** ENUMS **************/
export enum Environments {
  PRODUCTION = 'production',
  STAGING = 'staging',
  DEVELOPMENT = 'development',
}
/************** ENUMS **************/

/************** INTERFACES **************/
export interface IFilter {
  keyMatch: Record<string, Array<string|boolean|number>> | null,
  orderByKey: string,
  startIndex: number,
  max?: number,
}
/************** INTERFACES **************/
