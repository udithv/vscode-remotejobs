// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { RemoteJobsPanel } from './RemoteJobsPanel';
import { SidebarProvider } from './SideBarProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
		"remotejobs-sidebar",
		sidebarProvider
		)
	);

	// context.subscriptions.push(
	// 	vscode.commands.registerCommand("remotejobs.reloadSidebar", async () => {
	// 	  await vscode.commands.executeCommand("workbench.action.closeSidebar");
	// 	  await vscode.commands.executeCommand(
	// 		"workbench.view.extension.remotejobs-sidebar-view"
	// 	  );
	// 	  setTimeout(() => {
	// 		vscode.commands.executeCommand(
	// 		  "workbench.action.webview.openDeveloperTools"
	// 		);
	// 	  }, 500);
		  // SwiperPanel.kill();
		  // SwiperPanel.createOrShow(context.extensionUri);
		  // if (sidebarProvider._view) {
		  //   sidebarProvider.resolveWebviewView(sidebarProvider._view);
		  // }
	// 	})
	//   );

	context.subscriptions.push(vscode.commands.registerCommand('remotejobs.showJobs', () => {
		// The code you place here will be executed every time your command is executed
		RemoteJobsPanel.createOrShow(context.extensionUri);
	}));

}

// this method is called when your extension is deactivated
export function deactivate() {}
