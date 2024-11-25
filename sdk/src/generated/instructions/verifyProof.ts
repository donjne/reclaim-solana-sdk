/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { VerifyProofArgs, verifyProofArgsBeet } from '../types/VerifyProofArgs'

/**
 * @category Instructions
 * @category VerifyProof
 * @category generated
 */
export type VerifyProofInstructionArgs = {
  args: VerifyProofArgs
}
/**
 * @category Instructions
 * @category VerifyProof
 * @category generated
 */
export const verifyProofStruct = new beet.FixableBeetArgsStruct<
  VerifyProofInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', verifyProofArgsBeet],
  ],
  'VerifyProofInstructionArgs'
)
/**
 * Accounts required by the _verifyProof_ instruction
 *
 * @property [] epoch
 * @property [] epochConfig
 * @property [**signer**] signer
 * @category Instructions
 * @category VerifyProof
 * @category generated
 */
export type VerifyProofInstructionAccounts = {
  epoch: web3.PublicKey
  epochConfig: web3.PublicKey
  signer: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const verifyProofInstructionDiscriminator = [
  217, 211, 191, 110, 144, 13, 186, 98,
]

/**
 * Creates a _VerifyProof_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category VerifyProof
 * @category generated
 */
export function createVerifyProofInstruction(
  accounts: VerifyProofInstructionAccounts,
  args: VerifyProofInstructionArgs,
  programId = new web3.PublicKey('9Hk1t2edUC4kufMjkid2mt4m29cPwyaPhwNhAfrmEoG7')
) {
  const [data] = verifyProofStruct.serialize({
    instructionDiscriminator: verifyProofInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.epoch,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.epochConfig,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.signer,
      isWritable: false,
      isSigner: true,
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
