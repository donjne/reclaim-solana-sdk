import { PublicKey } from "@solana/web3.js";
import { PROGRAM_ID } from "./generated";
import { toU32Bytes, toU8Bytes } from "./utils";

const SEED_PREFIX = new TextEncoder().encode("reclaim");
const SEED_EPOCH_CONFIG = new TextEncoder().encode("epoch_config");
const SEED_EPOCH = new TextEncoder().encode("epoch");
const SEED_GROUP = new TextEncoder().encode("group");
const SEED_DAPP = new TextEncoder().encode("dapp");

export function getEpochConfigPda({
  createKey,
  programId = PROGRAM_ID,
}: {
  createKey: PublicKey;
  programId?: PublicKey;
}): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [SEED_PREFIX, SEED_EPOCH_CONFIG, createKey.toBuffer()],
    programId
  );
}

export function getEpochPda({
  epochConfig,
  epochIndex,
  programId = PROGRAM_ID,
}: {
  epochConfig: PublicKey;
  epochIndex: number;
  programId?: PublicKey;
}): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [SEED_PREFIX, epochConfig.toBuffer(), SEED_EPOCH, toU32Bytes(epochIndex)],
    programId
  );
}

export function getGroupPda({
  provider,
  programId = PROGRAM_ID,
}: {
  provider: string;
  programId?: PublicKey;
}): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [SEED_PREFIX, SEED_GROUP, new TextEncoder().encode(provider)],
    programId
  );
}

export function getDappPda({
  createKey,
  group,
  programId = PROGRAM_ID,
}: {
  createKey: PublicKey;
  group: PublicKey;
  programId?: PublicKey;
}): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [SEED_PREFIX, SEED_DAPP, createKey.toBuffer(), group.toBuffer()],
    programId
  );
}
