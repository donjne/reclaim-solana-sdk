use anchor_lang::prelude::*;

use crate::state::Witness;

#[event]
pub struct AddEpochEvent {
    // Bump for the address
    pub bump: u8,
    // Epoch Config
    pub epoch_config: Pubkey,
    // Index
    pub index: u64,
    // Epoch Creation timestamp
    pub created_at: i64,
    // Epoch Expiration timestamp
    pub expired_at: i64,
    // Minimum witnesses for claim
    pub minimum_witnesses_for_claim: u8,
    // Witnesses
    pub witnesses: Vec<Witness>,
}
