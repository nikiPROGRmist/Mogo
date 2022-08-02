


export const server = () =>{
    app.plugins.browsersync.init({


        server:`${app.path.build.html}`,

        port:3000,

        notify: false






    })



    }






