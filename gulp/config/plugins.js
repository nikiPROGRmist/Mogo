import replace from "gulp-replace"; // поиск и замена
import plumber from "gulp-plumber"; // уведомление ошибка
import notify from "gulp-notify"; // окно в виндовс об ошибке
import browsersync from "browser-sync"; // окно в браузере
import never from "gulp-newer"; // обновление картинки

export const plugins = {
    raplace:replace,
    notify:notify,
    plumber:plumber,
    browsersync:browsersync,
    never:never
}