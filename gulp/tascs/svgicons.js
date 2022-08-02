import svgSprite from "gulp-svg-sprite";

export const svgicons = () =>{
    return app.gulp.src(`${app.path.src.iconssvg}`)

    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title:'FONTS',
            message:"Error <%= error.message %>"
        })
    ))

    .pipe(svgSprite({
        mode:{
       stack: {
       sprite: `../icons/icons.svg`,

       example: true

}
        }
    }))

    .pipe(app.gulp.dest(`${app.path.build.images}`))

}