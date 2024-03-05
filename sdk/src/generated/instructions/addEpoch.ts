/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { AddEpochArgs, addEpochArgsBeet } from '../types/AddEpochArgs'

/**
 * @category Instructions
 * @category AddEpoch
 * @category generated
 */
export type AddEpochInstructionArgs = {
  args: AddEpochArgs
}
/**
 * @category Instructions
 * @category AddEpoch
 * @category generated
 */
export const addEpochStruct = new beet.FixableBeetArgsStruct<
  AddEpochInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', addEpochArgsBeet],
  ],
  'AddEpochInstructionArgs'
)
/**
 * Accounts required by the _addEpoch_ instruction
 *
 * @property [_writable_] epoch
 * @property [_writable_] epochConfig
 * @property [_writable_, **signer**] rentPayer
 * @property [**signer**] deployer
 * @category Instructions
 * @category AddEpoch
 * @category generated
 */
export type AddEpochInstructionAccounts = {
  epoch: web3.PublicKey
  epochConfig: web3.PublicKey
  rentPayer: web3.PublicKey
  deployer: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const addEpochInstructionDiscriminator = [
  250, 231, 141, 199, 139, 208, 231, 27,
]

/**
 * Creates a _AddEpoch_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AddEpoch
 * @category generated
 */
export function createAddEpochInstruction(
  accounts: AddEpochInstructionAccounts,
  args: AddEpochInstructionArgs,
  programId = new web3.PublicKey('rEcLDWaVLaymz82eGr6cutosPxE6SEzw6q4pbtLuyqf')
) {
  const [data] = addEpochStruct.serialize({
    instructionDiscriminator: addEpochInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.epoch,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.epochConfig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rentPayer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.deployer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}