function generateMarkdown (data) {
    let preCardMarkUp = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="./reset.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="./style.css" />
      <title>Title</title>
    </head>
    
    <body>
      <header class="bg-danger py-5" >
        <h2 class="text-center text-white">My Team</h2>
      </header>
      <main>
        <section class="p-5 d-flex flex-wrap justify-content-center container">`

    let postCardMarkUp = `
    </section>
  </main>
</body>

</html>`


    for (let i = 0; i < data.length; i++) {
        let currentEmployee = data[i];
        if (currentEmployee.role == `Manager`) {
            let managerCard = `
          <div class="w-20 my-4 mx-4 shadow card">
            <div class="bg-primary text-white p-3">
              <h4>${currentEmployee.employeeName}</h4>
              <h5>${currentEmployee.role}</h5>
            </div>
            <div class="py-4 px-2 bg-light ">
              <p class="my-1 py-1 px-2 bg-white">ID: ${currentEmployee.id}</p>
              <a class="my-1 py-1 px-2 bg-white" href = "mailto: ${currentEmployee.email}">Email: ${currentEmployee.email}</a>
              <p class="my-1 py-1 px-2 bg-white">Office Number: ${currentEmployee.officeNumber}</p>
            </div>
          </div>`
          preCardMarkUp = preCardMarkUp.concat(managerCard);
        };
    };

    for (let i = 0; i < data.length; i++) {
        let currentEmployee = data[i];
        if (currentEmployee.role == `Engineer`) {
            let engineerCard = `
          <div class="w-20 my-4 mx-4 shadow card">
            <div class="bg-primary text-white p-3">
              <h4>${currentEmployee.employeeName}</h4>
              <h5>${currentEmployee.role}</h5>
            </div>
            <div class="py-4 px-2 bg-light ">
              <p class="my-1 py-1 px-2 bg-white">ID: ${currentEmployee.id}</p>
              <a class="my-1 py-1 px-2 bg-white" href = "mailto: ${currentEmployee.email}">Email: ${currentEmployee.email}</a>
              <a class="my-1 py-1 px-2 bg-white" href = "https://github.com/${currentEmployee.gitHub}/">github: ${currentEmployee.gitHub}</p>
            </div>
          </div>`
          preCardMarkUp = preCardMarkUp.concat(engineerCard);
        };
    };

    for (let i = 0; i < data.length; i++) {
        let currentEmployee = data[i];
        if (currentEmployee.role == `Intern`) {
            let internCard = `
          <div class="w-20 my-4 mx-4 shadow card">
            <div class="bg-primary text-white p-3">
              <h4>${currentEmployee.employeeName}</h4>
              <h5>${currentEmployee.role}</h5>
            </div>
            <div class="py-4 px-2 bg-light ">
              <p class="my-1 py-1 px-2 bg-white">ID: ${currentEmployee.id}</p>
              <a class="my-1 py-1 px-2 bg-white" href = "mailto: ${currentEmployee.email}">Email: ${currentEmployee.email}</a>
              <p class="my-1 py-1 px-2 bg-white">School: ${currentEmployee.school}</p>
            </div>
          </div>`
          preCardMarkUp = preCardMarkUp.concat(internCard);
        };
    };

    preCardMarkUp = preCardMarkUp.concat(postCardMarkUp);
    return preCardMarkUp;
}

module.exports = { generateMarkdown };