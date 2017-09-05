'use strict';

// TO DO: 将交作业次数相同的同学的名字按字母顺序排列

var fs = require('fs');
var path = require('path');

var homeworkPath = path.join(__dirname, '../homework');
var nameFilePath = path.join(__dirname, 'homework.json');

var ext = ['md', 'jpg', 'jpeg', 'png', 'js']
    .map(ele => '.' + ele);
var ignore = ['.DS_Store', 'readme.md', 'Thumbs.db']
    .map(ele => ele.toLowerCase());

var homework = {};

function start() {

    var folders = readFolders();

    if (folders === -1) {
        console.log('读取作业文件夹失败，请检查路径');
        return -1;
    }

    var names = getNames(folders);

    if (names <= 0) {
        console.log('没有同学交过作业，是不是哪里出了问题？');
        return -1;
    }
}

function readFolders() {

    try {

        var files = fs.readdirSync(homeworkPath);

        if (files.length <= 0) {
            return -1;
        }

        return filterFolders(files);

    } catch (ex) {

        return -1;

    }
}

function filterFolders(files) {

    for (var i = files.length - 1; i >= 0; i--) {

        var fullPath = path.join(homeworkPath, files[i]);

        if (!fs.statSync(fullPath).isDirectory() || files[i].endsWith('4')) {
            files.splice(i, 1);
        }
    }

    return files;
}

function getNames(folders) {

    for (var i = 0; i < folders.length; i++) {

        readNames(folders[i]);
    }

    var result = sortNames();
    writeNames(result);
}

function readNames(folder) {

    var fullPath = path.join(homeworkPath, folder);

    try {

        var names = fs.readdirSync(fullPath);

        if (names.length <= 0) {

            return -1;
        }

        names = filterNames(folder, names);

        if (names.length > 0) {

            countNames(names);
        }

    } catch (ex) {

        return -1;
    }
}

function filterNames(folder, names) {

    for (var i = names.length - 1; i >= 0; i--) {

        if (ext.indexOf(path.extname(names[i]).toLowerCase()) < 0 ||
            ignore.indexOf(names[i].toLowerCase()) >= 0 ||
            (i > 0 &&
                path.basename(names[i], path.extname(names[i]))
                    .toLowerCase() ===
                path.basename(names[i - 1], path.extname(names[i - 1]))
                    .toLowerCase())) {

            console.log(folder + ' 中的文件 ' + names[i] + ' 已被跳过。');
            names.splice(i, 1);
        }
    }

    return names = names
        .map(name => name.toLowerCase())
        .map(name => path.basename(name, path.extname(name)));
}

function countNames(names) {

    for (var i = 0; i < names.length; i++) {

        homework[names[i]] = names[i] in homework ? homework[names[i]] + 1 : 1;
    }
}

function sortNames() {

    var sortNames = [];

    for (var name in homework) {
        sortNames.push([name, homework[name]]);
    }

    // https://stackoverflow.com/a/1069840/2667665
    homework = sortNames.sort(function (a, b) {
        return b[1] - a[1];
    });

    var result = '';

    for (var i = 0; i < homework.length; i++) {
        result += homework[i][0] + ': ' + homework[i][1] + '\n';
    }

    return result.trim();
}

function writeNames(result) {
    
        try {
    
            fs.writeFileSync(nameFilePath, result);
    
        } catch (ex) {
    
            console.log(ex.message);
            return -1;
        }
}

start();