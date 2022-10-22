const ghpages = require('gh-pages');

ghpages.publish(`dist/${process.env.PROJECT_NAME}`, err => {
    console.log(err);
});
