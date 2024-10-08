/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type Witness = {
  address: string
  url: string
}

/**
 * @category userTypes
 * @category generated
 */
export const witnessBeet = new beet.FixableBeetArgsStruct<Witness>(
  [
    ['address', beet.utf8String],
    ['url', beet.utf8String],
  ],
  'Witness'
)
