/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import { ClaimData, claimDataBeet } from './ClaimData'
export type SignedClaim = {
  claimData: ClaimData
  signatures: number[] /* size: 65 */[]
}

/**
 * @category userTypes
 * @category generated
 */
export const signedClaimBeet = new beet.FixableBeetArgsStruct<SignedClaim>(
  [
    ['claimData', claimDataBeet],
    ['signatures', beet.array(beet.uniformFixedSizeArray(beet.u8, 65))],
  ],
  'SignedClaim'
)
