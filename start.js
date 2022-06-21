const { exec } = require("child_process");

exec("npm run build", (error, stdout, stderr) => {
    
    console.log(`stdout: ${stdout}`);
    exec(`copy .\\coin-back.png .\\dist\\`, (error, stdout, stderr) => {
    
        console.log(`stdout: ${stdout} ${stderr}`);
        exec(`copy .\\coin-front.png .\\dist\\`, (error, stdout, stderr) => {
    
            console.log(`stdout: ${stdout} ${stderr}`);
            exec(`copy .\\coin-edge.png .\\dist\\`, (error, stdout, stderr) => {
                exec(`copy .\\coin-front-map.png .\\dist\\`, (error, stdout, stderr) => {
                    exec(`npm run preview`, (error, stdout, stderr) => {
    
                        console.log(`stdout: ${stdout} ${stderr}`);
                    });
                    console.log(`stdout: ${stdout} ${stderr}`);
                });
                console.log(`stdout: ${stdout} ${stderr}`);
            });
        });
    });
});