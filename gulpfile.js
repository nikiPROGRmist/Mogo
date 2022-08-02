
import gulp from "gulp"; // импорт самого галпа в файл
import {path} from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {   // global - глобальная переменная app
    gulp:gulp,
    path:path,
    plugins:plugins,

}


import { copy } from "./gulp/tascs/copy.js";
import { delet } from "./gulp/tascs/delet.js";
import { html} from "./gulp/tascs/html.js";
import { server} from "./gulp/tascs/server.js";
import { scss} from "./gulp/tascs/scss.js";
import { js} from "./gulp/tascs/js.js";
import { images} from "./gulp/tascs/images.js";
import { otfToTtf, otfTowof2, fontsStyle} from "./gulp/tascs/fonts.js";
import {svgicons } from "./gulp/tascs/svgicons.js";
import {zip } from "./gulp/tascs/zip.js";



function wather(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export {svgicons}
export {zipdeploy}





const mainTasks =  gulp.parallel(copy,html,scss,js,images);
const fonts = gulp.series(otfToTtf, otfTowof2, fontsStyle );
const zipdeploy = gulp.series(delet,otfToTtf, otfTowof2, fontsStyle,copy,html,scss,js,images,zip );
const dev = gulp.series( delet, fonts, mainTasks, gulp.parallel(wather,server)); //series - метод позволяет выполнять задачи последовательно

gulp.task('default', dev); // настройка по умолчани