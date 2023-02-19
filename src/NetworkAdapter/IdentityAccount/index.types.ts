import { CredentialsStorageDriverSpec } from "../CredentialsManager/CredentialsStorageDriver/index.types";
import { CredentialsManager } from "../CredentialsManager/index.types";

export type IdentityAccountProps<
  T extends CredentialsStorageDriverSpec<Record<string, any>, any>
> = {
  seed: string;
  isOld: boolean;
  store: T;
  extras?: any;
};

export declare class IdentityAccount {
  credentials: CredentialsManager<
    CredentialsStorageDriverSpec<Record<string, any>, any>
  >;

  public static build(): Promise<IdentityAccount>;

  public getDid(): string;

  public getDocument(): Record<string, any>;
}