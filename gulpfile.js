var gulp = require('gulp'),//Gulp is a javascript task runner that lets you automate repetative tasks
nodemon =require('gulp-nodemon');//Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. 
gulpMocha = require('gulp-mocha');

//now we have to tell gulp that we have a task 'default' and then use task to execute nodemon plugin
//nodemon going to take a json object nodemon({}) to configure iteself
gulp.task('defualt', function(){
  nodemon({
      script:'app.js',
      ext:'js',
      env:{
          PORT:8000
      },
      ignore:['./node_modules/**'] // just to avoid confusion whenenvr node module install , ignore everything under node module

  }).on('restart', function(){
      console.log('Restarting')
  });
});

gulp.task('test',function(){
    gulp.src('test/*js',{read:false})
    .pipe(gulpMocha({reporter:'nyan'}))
})