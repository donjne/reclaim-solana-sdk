use anchor_lang::prelude::*;

use crate::constants::*;
use crate::events::*;
use crate::state::*;

#[derive(Accounts)]
#[instruction(args: CreateGroupArgs)]
pub struct CreateGroup<'info> {
    #[account(
        init,
        payer = creator,
        space = Group::size(&[]),
        seeds = [
            SEED_PREFIX,
            SEED_GROUP,
            create_key.key().as_ref(),
            args.provider.as_bytes(),
        ],
        bump
    )]
    pub group: Account<'info, Group>,

    #[account(mut)]
    pub creator: Signer<'info>,
    pub create_key: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn create(ctx: Context<CreateGroup>, args: CreateGroupArgs) -> Result<()> {
    let group = &mut ctx.accounts.group;
    let creator = &ctx.accounts.creator;
    let create_key = &ctx.accounts.create_key;

    // TODO: Store group id based on provider

    group.set_inner(Group {
        bump: ctx.bumps.group,
        create_key: create_key.key(),
        creator: creator.key(),
        provider: args.provider.clone(),
        members: vec![],
    });

    group.validate()?;

    emit!(CreateGroupEvent {
        group_id: group.key(),
        provider: args.provider
    });

    Ok(())
}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct CreateGroupArgs {
    pub provider: String,
}
