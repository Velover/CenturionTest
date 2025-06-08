import { Centurion } from "@rbxts/centurion";

const server = Centurion.server();

//loading all commands from the Commands folder
const commands_folder = script.Parent!.WaitForChild("Commands") as Folder;
commands_folder.GetChildren().forEach((c) => {
	if (!c.IsA("ModuleScript")) return;
	const [succ, err] = pcall(require, c);
	if (succ) return;
	warn(`Failed to load command ${c.GetFullName()}:`, err);
	return;
});

server.start();
