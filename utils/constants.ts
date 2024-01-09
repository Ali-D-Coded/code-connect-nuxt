export enum ACCOUNT_TYPE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum ACCOUNT_STATUS {
  APPROVAL_PENDING = 'APPROVAL_PENDING',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  BLOCKED = 'BLOCKED',
  DELETED = 'DELETED',
}

export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export type media = {
  url: string;
  name: string;
  size: number;
};
