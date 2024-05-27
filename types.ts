export type TOrderSection =
  | "what"
  | "when"
  | "where"
  | "address"
  | "summary"
  | "success";

export interface IServiceRequest {
  services: Set<string>;
  when: string | IDate;
  where: string;
}

export interface IDate {
  day: string;
  hour: string;
  min: string;
}

export interface ISavedAddresses {
  title: string;
  Address: string;
  unit: string;
  postCode: string;
}

export enum Services {
  "House Cleaning" = "1",
  "Carpet Cleaning" = "2",
  "Window Cleaning" = "3",
  "Deep Cleaning" = "4",
  "Move-in/Move-out Cleaning" = "5",
}
