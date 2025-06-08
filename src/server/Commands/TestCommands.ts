import { CenturionType, Command, CommandContext, Group, Guard, Register } from "@rbxts/centurion";
import IsAdminGuard from "../Guards/IsAdminGuard";

@Register({ groups: [{ name: "Test" }] })
@Group("Test")
class TestCommands {
	@Command({
		name: "PrintName",
		description: "Spawns an NPC near player",
		arguments: [
			{
				name: "Player",
				description: "Player to print name of",
				type: CenturionType.Player,
			},
		],
	})
	@Guard(IsAdminGuard)
	PrintName(ctx: CommandContext, player: Player) {
		print("Player name:", player);

		//to display in the console
		ctx.reply("Player name: " + player.Name);
	}
}
