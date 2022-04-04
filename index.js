var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');
groupBy = require('handlebars-group-by');

Handlebars.registerHelper(groupBy(Handlebars));
Handlebars.registerHelper('date', require('helper-date'));
Handlebars.registerHelper('dateformat', require('helper-dateformat'));

function render(resume) {
    var css = fs.readFileSync(__dirname + '/style.css', 'utf-8');
    var tpl = fs.readFileSync(__dirname + '/resume.hbs', 'utf-8');
    var partialsDir = path.join(__dirname, 'partials');
    var filenames = fs.readdirSync(partialsDir);


    filenames.forEach(function(filename) {
        var matches = /^([^.]+).hbs$/.exec(filename);
        if (!matches) {
            return;
        }
        var name = matches[1];
        var filepath = path.join(partialsDir, filename);
        var template = fs.readFileSync(filepath, 'utf8');
        Handlebars.registerPartial(name, template);
    });

    return Handlebars.compile(tpl)({
        css: css,
        resume: resume,
    });
}

module.exports = {
    render: render,
    pdfRenderOptions: {
        margin: {
            top: '1cm',
            bottom: '1cm',
        },
        mediaType: 'print',
    },
};