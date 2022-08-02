import sassgulp from "sass"; // препроцессор sass
import gulpsass from "gulp-sass";// плагин для запуска этого препроцессора
import rename from "gulp-rename";// плагин для переменования css файла
import cleanCss from "gulp-clean-css";// сжатие css файла
import  webpcss from "gulp-webpcss";// вывод webp изображений
import autoprefixer from "gulp-autoprefixer";// добавление вендорных префиксов
import groupcssmediaqueries from "gulp-group-css-media-queries";// групировка медиа запросов

const scssgulp = gulpsass(sassgulp);


export const scss = () =>{
    return  app.gulp.src(app.path.src.scss,{sourcemaps: true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title:'scss',
                message:"Error <%= error.message %>"
            })
        ))
        .pipe(scssgulp({
              outputStyle: "expanded"
        }))

        .pipe(groupcssmediaqueries())
        .pipe(webpcss(
          {
              webpClass: "",
              noWebpClass: ".no-webp"
          }
    ))



    .pipe(autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
        cascade:true
    }))

    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
        extname: ".min.css"
    }))


    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}