// https://careervault.io/json/remote

(function () {
    const vscode = acquireVsCodeApi();
    const jobs = document.getElementById("jobs");

    jobs.innerHTML = "";

    console.log(" Fetching Remote Jobs");
    fetch("https://careervault.io/json/remote")
        .then(response => response.json())
        .then((result) => {
            // console.log(result);
            result['data'].forEach(j => {

                let job = document.createElement('li');
                let jobTitle = document.createElement('h2');
                let companyName = document.createElement('h5');
                let location = document.createElement('p');
                let jobLink = document.createElement('a');
                
                
                companyName.innerHTML = j["CompanyName"];
                job.append(companyName);

                jobLink.href = j['Url'];
                jobTitle.innerHTML = j["JobTitle"];
                jobLink.append(jobTitle);
                job.append(jobLink);

                location.innerHTML = j["Location"];
                job.append(location);
                job.className = "job";

                jobs.append(job);
            });

            console.log("Completed");
        })
        .catch(console.log);
}());