import { CommandContext } from "@rbxts/centurion";

export default function IsAdminGuard(ctx: CommandContext) {
	const executor: Player = ctx.executor;
	//replace with your own admin check logic
	return true;
}
