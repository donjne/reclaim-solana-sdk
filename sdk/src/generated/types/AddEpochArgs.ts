/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import { Witness, witnessBeet } from './Witness'
export type AddEpochArgs = {
  witnesses: Witness[]
  minimumWitnessesForClaim: number
}

/**
 * @category userTypes
 * @category generated
 */
export const addEpochArgsBeet = new beet.FixableBeetArgsStruct<AddEpochArgs>(
  [
    ['witnesses', beet.array(witnessBeet)],
    ['minimumWitnessesForClaim', beet.u8],
  ],
  'AddEpochArgs'
)