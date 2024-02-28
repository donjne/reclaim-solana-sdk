/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link EpochConfig}
 * @category Accounts
 * @category generated
 */
export type EpochConfigArgs = {
  bump: number
  deployer: web3.PublicKey
  epochDurationSeconds: beet.bignum
  epochIndex: beet.bignum
  epochs: web3.PublicKey[]
}

export const epochConfigDiscriminator = [190, 66, 87, 197, 214, 153, 144, 193]
/**
 * Holds the data for the {@link EpochConfig} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class EpochConfig implements EpochConfigArgs {
  private constructor(
    readonly bump: number,
    readonly deployer: web3.PublicKey,
    readonly epochDurationSeconds: beet.bignum,
    readonly epochIndex: beet.bignum,
    readonly epochs: web3.PublicKey[]
  ) {}

  /**
   * Creates a {@link EpochConfig} instance from the provided args.
   */
  static fromArgs(args: EpochConfigArgs) {
    return new EpochConfig(
      args.bump,
      args.deployer,
      args.epochDurationSeconds,
      args.epochIndex,
      args.epochs
    )
  }

  /**
   * Deserializes the {@link EpochConfig} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [EpochConfig, number] {
    return EpochConfig.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link EpochConfig} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<EpochConfig> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find EpochConfig account at ${address}`)
    }
    return EpochConfig.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'rEcLDWaVLaymz82eGr6cutosPxE6SEzw6q4pbtLuyqf'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, epochConfigBeet)
  }

  /**
   * Deserializes the {@link EpochConfig} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [EpochConfig, number] {
    return epochConfigBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link EpochConfig} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return epochConfigBeet.serialize({
      accountDiscriminator: epochConfigDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link EpochConfig} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: EpochConfigArgs) {
    const instance = EpochConfig.fromArgs(args)
    return epochConfigBeet.toFixedFromValue({
      accountDiscriminator: epochConfigDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link EpochConfig} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: EpochConfigArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      EpochConfig.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link EpochConfig} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      bump: this.bump,
      deployer: this.deployer.toBase58(),
      epochDurationSeconds: (() => {
        const x = <{ toNumber: () => number }>this.epochDurationSeconds
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      epochIndex: (() => {
        const x = <{ toNumber: () => number }>this.epochIndex
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      epochs: this.epochs,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const epochConfigBeet = new beet.FixableBeetStruct<
  EpochConfig,
  EpochConfigArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
    ['deployer', beetSolana.publicKey],
    ['epochDurationSeconds', beet.u64],
    ['epochIndex', beet.u64],
    ['epochs', beet.array(beetSolana.publicKey)],
  ],
  EpochConfig.fromArgs,
  'EpochConfig'
)
