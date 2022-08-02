import fileInclude  from "gulp-file-include";
import webphtmlnosvg  from "gulp-webp-html-nosvg";
import gulpversionnumber  from "gulp-version-number";

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title:'html',
            message:"Error <%= error.message %>"
        })
    ))
    .pipe(fileInclude())
    .pipe(webphtmlnosvg())
    .pipe(gulpversionnumber({
        'value': '%DT%',
        'append':{
            'key':'_v',
            'cover':'0',
            'to':[
                'css',
                'js',
            ]
        },
        'output':{
            'file':'gulp/version.json',
        }
    }))

    .pipe(app.plugins.raplace(/@img\//g, 'img/'))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())

}