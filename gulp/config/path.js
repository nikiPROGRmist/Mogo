import * as nodePath from "path"; // подключение самого галпа
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;


  export const path = {
     build:{
         js: `${buildFolder}/js/`,
         css: `${buildFolder}/css/`,
         html: `${buildFolder}/`,
         files: `${buildFolder}/files/`,
         images:`${buildFolder}/images/`,
         fonts:`${buildFolder}/fonts/`,

     },
     src:{
        js: `${srcFolder}/js/*.js`,
        scss: `${srcFolder}/scss/style.scss`,
         html: `${srcFolder}/*.html`,
         files: `${srcFolder}/files/**/*.*`,
         svg:`${srcFolder}/images/**/*.svg`,
         images:`${srcFolder}/images/**/*.{jpg,jpeg,png,webp,gif}`,
         iconssvg:`${srcFolder}/iconsSVG/*.svg`

     },
     watch:{
        js: `${srcFolder}/js/**/*.js`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images:`${srcFolder}/images/**/*.{jpg,jpeg,svg,png,webp,gif}`,


     },
     clean: buildFolder,
     buildFolder:buildFolder,
     srcFolder:srcFolder,
     nodePath:nodePath,
     rootFolder:rootFolder


 }