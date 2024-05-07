import * as vscode from "vscode"
import { pruneFunction } from "ts-pruner"

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "prune-parameter-types.prune",
    async () => {
      const editor = vscode.window.activeTextEditor
      if (editor === undefined) return

      const position = editor.selection.active
      const { document } = editor
      const wordRange = document.getWordRangeAtPosition(position)
      if (wordRange === undefined) {
        vscode.window.showInformationMessage("No active editor.")
        return
      }

      const functionName = editor.document.getText(wordRange)
      const filePath = editor.document.uri.fsPath
      const updatedText = pruneFunction(functionName, filePath)
      if (updatedText === null) {
        vscode.window.showInformationMessage("Couldn't prune type")
        return
      }

      const fullRange = new vscode.Range(
        new vscode.Position(0, 0),
        new vscode.Position(document.lineCount + 1, 0)
      )
      const success = await editor.edit(editBuilder => {
        editBuilder.replace(fullRange, updatedText)
      })
      if (success === false) {
        vscode.window.showErrorMessage("Failed to change word.")
        return
      }
      document.save()
      vscode.window.showInformationMessage(
        `function ${functionName} parameters pruned`
      )
    }
  )

  context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
export function deactivate() {}
