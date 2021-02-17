// https://careervault.io/json/remote

(function () {
    const vscode = acquireVsCodeApi();
    

    const showJobs = document.getElementById("show-all-btn");

    showJobs.onclick = function () {
        vscode.postMessage({
            type: "showJobs",
        });
        
    };


    

}());