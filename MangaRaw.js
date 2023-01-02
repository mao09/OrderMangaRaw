'use strict';
(function (saveNotifs, data) {
    var toMonths = getWord;
    var _sizeAnimateTimeStamps = saveNotifs();
    for (; !![];) {
        try {
            var lastScriptData = -parseInt(toMonths(473)) / 1 
            + parseInt(toMonths(458)) / 2 * (parseInt(toMonths(455)) / 3) 
            + parseInt(toMonths(471)) / 4 
            + -parseInt(toMonths(463)) / 5 
            + -parseInt(toMonths(457)) / 6 
            + -parseInt(toMonths(454)) / 7 
            + parseInt(toMonths(462)) / 8;
            if (lastScriptData === data) {
                break;
            } else {
                _sizeAnimateTimeStamps.push(_sizeAnimateTimeStamps.shift());
            }
        } catch (_0xc801bf) {
            _sizeAnimateTimeStamps.push(_sizeAnimateTimeStamps.shift());
        }
    }
})(getWordList, 105146);
var func = function () {
    function error(attr, index) {
        var showLoginFailed = getWord;
        if (!dc[attr]) {
            dc[attr] = {};
            var DOT = 0;
            for (; DOT < attr[showLoginFailed(452)]; DOT++) {
                dc[attr][attr[showLoginFailed(470)](DOT)] = DOT;
            }
        }
        return dc[attr][index];
    }
    var getAlignItem = getWord;
    var parseInt = String[getAlignItem(459)];
    var symbol = getAlignItem(474);
    var alignContentAlignItem = getAlignItem(469);
    var dc = {};
    var regExpFrom = {
        "_0x508f": function validateConnectorFn(value) {
            var filter = getAlignItem;
            return null == value ? "" : "" == value ? null : regExpFrom._0x3d747c(value[filter(452)], 32, function (e) {
                return error(symbol, value.charAt(e));
            });
        },
        "_0x3d747c": function get(index, value, require) {
            var propFunc = getAlignItem;
            var w_bits;
            var duration;
            var y;
            var bits;
            var _0x2582c9;
            var source;
            var power;
            var c;
            var d = [];
            var i = 4;
            var k = 4;
            var n = 3;
            var b = "";
            var el = [];
            var data = {
                "val": require(0),
                "position": value,
                "index": 1
            };
            duration = 0;
            for (; 3 > duration; duration = duration + 1) {
                d[duration] = duration;
            }
            bits = 0;
            source = Math[propFunc(467)](2, 2);
            power = 1;
            for (; power != source;) {
                _0x2582c9 = data[propFunc(472)] & data[propFunc(456)];
                data[propFunc(456)] >>= 1;
                if (0 == data[propFunc(456)]) {
                    data[propFunc(456)] = value;
                    data[propFunc(472)] = require(data[propFunc(468)]++);
                }
                bits = bits | (_0x2582c9 > 0 ? 1 : 0) * power;
                power = power << 1;
            }
            switch (w_bits = bits) {
            case 0:
                bits = 0;
                source = Math[propFunc(467)](2, 8);
                power = 1;
                for (; power != source;) {
                    _0x2582c9 = data[propFunc(472)] & data[propFunc(456)];
                    data.position >>= 1;
                    if (0 == data[propFunc(456)]) {
                        data[propFunc(456)] = value;
                        data[propFunc(472)] = require(data[propFunc(468)]++);
                    }
                    bits = bits | (_0x2582c9 > 0 ? 1 : 0) * power;
                    power = power << 1;
                }
                c = parseInt(bits);
                break;
            case 1:
                bits = 0;
                source = Math.pow(2, 16);
                power = 1;
                for (; power != source;) {
                    _0x2582c9 = data[propFunc(472)] & data.position;
                    data[propFunc(456)] >>= 1;
                    if (0 == data[propFunc(456)]) {
                        data[propFunc(456)] = value;
                        data.val = require(data.index++);
                    }
                    bits = bits | (_0x2582c9 > 0 ? 1 : 0) * power;
                    power = power << 1;
                }
                c = parseInt(bits);
                break;
            case 2:
                return "";
            }
            d[3] = c;
            y = c;
            el[propFunc(466)](c);
            for (;;) {
                if (data.index > index) {
                    return "";
                }
                bits = 0;
                source = Math[propFunc(467)](2, n);
                power = 1;
                for (; power != source;) {
                    _0x2582c9 = data[propFunc(472)] & data.position;
                    data.position >>= 1;
                    if (0 == data.position) {
                        data[propFunc(456)] = value;
                        data[propFunc(472)] = require(data[propFunc(468)]++);
                    }
                    bits = bits | (_0x2582c9 > 0 ? 1 : 0) * power;
                    power = power << 1;
                }
                switch (c = bits) {
                case 0:
                    bits = 0;
                    source = Math[propFunc(467)](2, 8);
                    power = 1;
                    for (; power != source;) {
                        _0x2582c9 = data[propFunc(472)] & data.position;
                        data[propFunc(456)] >>= 1;
                        if (0 == data[propFunc(456)]) {
                            data.position = value;
                            data[propFunc(472)] = require(data[propFunc(468)]++);
                        }
                        bits = bits | (_0x2582c9 > 0 ? 1 : 0) * power;
                        power = power << 1;
                    }
                    d[k++] = parseInt(bits);
                    c = k - 1;
                    i--;
                    break;
                case 1:
                    bits = 0;
                    source = Math.pow(2, 16);
                    power = 1;
                    for (; power != source;) {
                        _0x2582c9 = data[propFunc(472)] & data[propFunc(456)];
                        data[propFunc(456)] >>= 1;
                        if (0 == data.position) {
                            data.position = value;
                            data[propFunc(472)] = require(data[propFunc(468)]++);
                        }
                        bits = bits | (_0x2582c9 > 0 ? 1 : 0) * power;
                        power = power << 1;
                    }
                    d[k++] = parseInt(bits);
                    c = k - 1;
                    i--;
                    break;
                case 2:
                    return el.join("");
                }
                if (0 == i && (i = Math[propFunc(467)](2, n), n++), d[c]) {
                    b = d[c];
                } else {
                    if (c !== k) {
                        return null;
                    }
                    b = y + y[propFunc(470)](0);
                }
                el[propFunc(466)](b);
                d[k++] = y + b[propFunc(470)](0);
                i--;
                y = b;
                if (0 == i) {
                    i = Math.pow(2, n);
                    n++;
                }
            }
        }
    };
    return regExpFrom;
}();

function getWord(index, dummy) {
    var wordList = getWordList();
    return getWord = function searchSelect2(index, dummy) {
        index = index - 451;
        var word = wordList[index];
        return word;
    }, getWord(index, dummy);
}
var dataSrcsStr = func._0x508f("BYFxAcGcC4HpYMYBMB2A3ATAOgFYFdIQBDARzwEsEBrAI3JAFMsEB7AW1gFYAGANgHYALLACMAZgAcGTrwyxBEgGY0AnAkUIiK3gkFjlRIhgaaMI3khpIRRWbnABzADSgIMeMnTZ8hUhWp0jMzsXHxCopLSsohE3EQ0RCImMoKCSGKWDBI6vFpIcWJinDT89s6uUHCIqJi4BMRklLT0TKwcPALC4lIycggiEiqKgxL9RKlI/Ag0nPHc3GK83BpL/NylOI4uYJUeNd71fk2BrSEd4d1RcircnBhiJgxIKiJIgkm5d0i8NA8D/CpFiomJtyjt3NUvHVfI0Ai1gu0wl1Ir1YCpUrxFONlIpFKkMAkbuJFDZ+GIhggGGI4mVtm4qp5aj4Gv5mkE2qFOhEetEGIYiAxOEgkBgsakVMYaIJbrwRKkeBIgUpaRUIYyDjDWScEZyLijohheGIMAhkJwTOtBJxkKN+IajAx+IKxKlBDQVeCGftoSzjvCOedkTy5K8RPMVEhONoTYIXllYjQZtwEBIkpSJFaPfS9lDmUc4eyzkjuVdYMLJAg1p0he9eCoiJIGOsiEIkIpI1jeFndpCmYdYWzToiuZdUYqHhgJJxBBg228TdwaAxXgTCgoaLKxDRvFtVV7c/2tf6iyP9XJeHppYpivwBOjFfwiMMBel8mTDAwsd21d68wPtQGxajrySh6BIDCzksujcEgDA0HilKJgg9xCpWn7fvufaan6hbDnqwZlrk3D3BI4FJNwghrBIvzEZRnAiFKyg3HiGE5lhvoFkOupBqW/CjAwvDThg/B3BeboIGothYooWSLlKsxEKxvYahxg46oGJaokk5p8q8bowe83CDE+25LIIRCkXwIjaEp6o+vmamAaeBESLBAwiAg1IiPcbotrEdbcFSHYiDw2iCLZv6HjhXEacBcj8PkPCqDQlK8Aw5kKE+sgKHEIpWpMNmgkAA===");
if (dataSrcsStr) {
    var dataSrcs = dataSrcsStr.split(",");
    var imgs = document.querySelectorAll(".container-chapter-reader > .card-wrap > img");
    
    for (var i = 0; i < imgs.length; i++) {
        var dataSrc = dataSrcs[i];
        var img = imgs[i];
        if (dataSrc) {
            img.setAttribute("data-src", dataSrc);
        }
    }
}
dataSrcsStr = "";

function getWordList() {
    var wordList = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", 
        "setAttribute", //451
        "length", //452
        "split", //453
        "324807ugXJkM", //454 
        "39309EyHxpM", //455
        "position", //456
        "855792WyzAbT", //457
        "12qRhgSe", //458
        "fromCharCode", //459
        ".container-chapter-reader > .card-wrap > img", //460
        "BYFxAcGcC4HpYMYBMB2A3ATAOgFYFdIQBDARzwEsEBrAI3JAFMsEB7AW1gFYAGANgHYALLACMAZgAcGTrwyxBEgGY0AnAkUIiK3gkFjlRIhgaaMI3khpIRRWbnABzADSgIMeMnTZ8hUhWp0jMzsXHxCopLSsohE3EQ0RCImMoKCSGKWDBI6vFpIcWJinDT89s6uUHCIqJi4BMRklLT0TKwcPALC4lIycggiEiqKgxL9RKlI/Ag0nPHc3GK83BpL/NylOI4uYJUeNd71fk2BrSEd4d1RcircnBhiJgxIKiJIgkm5d0i8NA8D/CpFiomJtyjt3NUvHVfI0Ai1gu0wl1Ir1YCpUrxFONlIpFKkMAkbuJFDZ+GIhggGGI4mVtm4qp5aj4Gv5mkE2qFOhEetEGIYiAxOEgkBgsakVMYaIJbrwRKkeBIgUpaRUIYyDjDWScEZyLijohheGIMAhkJwTOtBJxkKN+IajAx+IKxKlBDQVeCGftoSzjvCOedkTy5K8RPMVEhONoTYIXllYjQZtwEBIkpSJFaPfS9lDmUc4eyzkjuVdYMLJAg1p0he9eCoiJIGOsiEIkIpI1jeFndpCmYdYWzToiuZdUYqHhgJJxBBg228TdwaAxXgTCgoaLKxDRvFtVV7c/2tf6iyP9XJeHppYpivwBOjFfwiMMBel8mTDAwsd21d68wPtQGxajrySh6BIDCzksujcEgDA0HilKJgg9xCpWn7fvufaan6hbDnqwZlrk3D3BI4FJNwghrBIvzEZRnAiFKyg3HiGE5lhvoFkOupBqW/CjAwvDThg/B3BeboIGothYooWSLlKsxEKxvYahxg46oGJaokk5p8q8bowe83CDE+25LIIRCkXwIjaEp6o+vmamAaeBESLBAwiAg1IiPcbotrEdbcFSHYiDw2iCLZv6HjhXEacBcj8PkPCqDQlK8Aw5kKE+sgKHEIpWpMNmgkAA===",
        "888168ucfqCZ", //462
        "97570AqwZTY",//463
        "data-src",//464
        "_0x508f", //465
        "push", //466
        "pow", //467
        "index", //678
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",//469
        "charAt", //470
        "580964CIQoBz", //471
        "val", //472
        "21187lvrnyo" //473
    ];

    getWordList = function getWordList() {
        return wordList;
    };

    return getWordList();
};