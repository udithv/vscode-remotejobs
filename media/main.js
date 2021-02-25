// https:/wannahireme.com/api/alljob

(function () {
    const vscode = acquireVsCodeApi();
    const jobs = document.getElementById("jobs");

    jobs.innerHTML = "";

    console.log(" Fetching Remote Jobs");
    fetch("https:/wannahireme.com/api/alljobs")
        .then(response => response.json())
        .then((result) => {
            // console.log(result);
            result.forEach(j => {

                let job = document.createElement('li');
                let jobTitle = document.createElement('h2');
                let companyName = document.createElement('h5');
                let location = document.createElement('p');
                let jobLink = document.createElement('a');
                // let saveButton = document.createElement('button');
                // let bookmarked = false;
                
                companyName.innerHTML = j["company"];
                job.append(companyName);

                jobLink.href = j['joburl'];
                jobTitle.innerHTML = j["position"];
                jobLink.append(jobTitle);
                job.append(jobLink);

                location.innerHTML = j["location"];
                job.append(location);
                job.className = "job";


                // saveButton.textContent = bookmarked ? "Remove Bookmark" : "Bookmark Job";
                // saveButton.onclick = function(e) {
                //     console.log(j);

                //     if(!bookmarked) {


                //         saveButton.textContent = "Remove Bookmark";
                //         bookmarked = true;
                //         vscode.postMessage({
                //             type: "onInfo",
                //             value: "Job Bookmarked"
                //         });

                        
                //     }else {


                //         saveButton.textContent = "Bookmark Job";
                //         bookmarked = false;
                //         vscode.postMessage({
                //             type: "onInfo",
                //             value: "BookMark Removed"
                //         });

                //     }
                // };
                // job.append(saveButton);



                jobs.append(job);
            });

            console.log("Completed");
        })
        .catch(console.log);
}());