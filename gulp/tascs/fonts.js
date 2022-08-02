import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woof2 from 'gulp-ttf2woff2';


export const otfToTtf = () =>{
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
    // ищем файлы шрифтов в otf
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title:'FONTS',
            message:"Error <%= error.message %>"
        })
    ))
// конвертируем в ttf
    .pipe(fonter({
        formats: ['ttf']
    }))
// выгружаем в папку с результатом
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))

}


export const otfTowof2 = () =>{
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    // ищем файлы шрифтов в otf
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title:'FONTS',
            message:"Error <%= error.message %>"
        })
    ))
// конвертируем в ttf
    .pipe(fonter({
        formats: ['woff']
    }))
// выгружаем в папку с результатом
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    //ищем файлы шрифтов в ttf
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*ttf`))
    //конвертируем  в woff2
    .pipe(ttf2woof2())
// выгружаем в папку с результатом
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))

}



 export const fontsStyle = () =>{
     // файл в который подключаются стили шрифтов
     let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
     fs.readdir(app.path.build.fonts, function(err,fontsFiles){
        if(fontsFiles){
            if(!fs.existsSync(fontsFile)){
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (let i = 0; i < fontsFiles.length; i++) {
                    let fontsFileName = fontsFiles[i].split('.')[0];
                    if(newFileOnly !== fontsFileName){
                        let fontname = fontsFileName[i].split('-')[0] ? fontsFileName[i].split('-')[0]: fontsFileName;
                        let fontweight = fontsFileName[i].split('-')[1] ? fontsFileName[i].split('-')[1]: fontsFileName;

                        if(fontweight.toLowerCase() === 'thin'){

                            fontweight = 100;
                        }else if(fontweight.toLowerCase() === 'extralight'){
                            fontweight= 200 ;

                        }else if(fontweight.toLowerCase() === 'light'){
                           fontweight= 300 ;

                       }else if(fontweight.toLowerCase() === 'medium'){
                           fontweight= 500 ;

                       }else if(fontweight.toLowerCase() === 'semibold'){
                           fontweight = 600;

                       }else if(fontweight.toLowerCase() === 'bold'){
                           fontweight = 700;

                       }else if(fontweight.toLowerCase() === 'extrabold' || fontweight.toLowerCase() === 'heavy'){
                           fontweight = 800;

                       }else if(fontweight.toLowerCase() === 'black'){
                           fontweight = 900;

                       } else {
                           fontweight = 400;
                    }
                    newFileOnly = fontsFileName;


                    fs.appendFile(fontsFile,
                      `@font-face{
                          font-family: ${fontname};
                          font-display: swap;
                          src: url("../fonts/ ${fontsFileName}.woff") format("woff"), url("../fonts/${fontsFileName}.woff2")format("woff2");
                          font-weight: ${fontweight};
                          font-style:normal;
                      }\r\n`, cb);









                }

            }
        }else{
            console.log(" файл css/fonts уже существует. удалите папку и перезапустите gulp")
        }
    }


})
return app.gulp.src(`${app.path.srcFolder}`);
function cb() {}
 }


