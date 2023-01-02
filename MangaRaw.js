// https://mangarawjp.io
// https://mangarawjp.io/chapters/%E3%80%90%E7%AC%AC1071%E8%A9%B1%E3%80%91%E3%83%AF%E3%83%B3%E3%83%94%E3%83%BC%E3%82%B9-raw/

(function (saveNotifs, data) {
    // move first to last item in wordList

    var _sizeAnimateTimeStamps = saveNotifs();
    for (; !![];) {
        try {
            var lastScriptData = -fromCharCode("21187lvrnyo") / 1 //21187
                + fromCharCode("12qRhgSe") / 2 * (fromCharCode("39309EyHxpM") / 3) //78618
                + fromCharCode("580964CIQoBz") / 4 //145241
                + -fromCharCode("97570AqwZTY") / 5 //19514
                + -fromCharCode("855792WyzAbT") / 6 //142632
                + -fromCharCode("324807ugXJkM") / 7 //46401
                + fromCharCode("888168ucfqCZ") / 8; //111021

            // 21187 + 78618 + 145241 - 19514 - 142632 - 46401 + 111021
            // = 147520
            if (lastScriptData === data) {
                break;
            } else {
                _sizeAnimateTimeStamps.push(_sizeAnimateTimeStamps.shift());
            }
        } catch (ex) {
            _sizeAnimateTimeStamps.push(_sizeAnimateTimeStamps.shift());
        }
    }
})(getWordList, 105146);

function getBits (data, position, max) {
    var bits = 0;
    
    for (var i = 1; i != max;) {
        var tmp = data.val & data.position;
        data.position >>= 1;
        if (0 == data.position) {
            data.position = position
            data.val = getValue(data.position++);
        }
        bits = bits | (tmp > 0 ? 1 : 0) * i;
        i = i << 1;
    }

    return bits
}

var func = function () {
    function getValueByChar(chars, char) {

        if (!dc[chars]) {
            dc[chars] = {};

            for (var i = 0; i < chars.length; i++) {
                dc[chars][chars.charAt(i)] = i;
            }
        }
        return dc[chars][char];
    }

    var fromCharCode = String.fromCharCode;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
    var dc = {};
    var func = {
        "_0x508f": function validateConnectorFn(value) {

            return null == value
                ? ""
                : "" == value
                    ? null :
                    func._0x3d747c(value.length, 32, function (e) {
                        return getValueByChar(chars, value.charAt(e));
                    });
        },
        "_0x3d747c": function get(char, position, getValue) {
            var y;
            var c;
            var d = [];
            var i = 4;
            var k = 4;
            var n = 3;
            var b = "";
            var dataSrcsStr = [];
            var data = {
                "val": getValue(0),
                "position": position,
                "index": 1
            };

            for (var j = 0; 3 > j; j = j + 1) {
                d[j] = j;
            }

            var bits = getBits(data,position, 4);
            
            switch (bits) {
                case 0:
                    bits = getBits(data,position, 256);
                    c = fromCharCode(bits);
                    break;
                case 1:
                    bits = getBits(data, position, 65536)
                    c = fromCharCode(bits);
                    break;
                case 2:
                    return "";
            }

            d[3] = c;
            y = c;
            dataSrcsStr.push(c);
            for (; ;) {
                if (data.index > index) {
                    return "";
                }

                max = Math.pow(2, n);
                bits = getBits(data, position, max);

                switch (c = bits) {
                    case 0:
                        bits = getBits(data,position, 256);
                        d[k++] = fromCharCode(bits);
                        c = k - 1;
                        i--;
                        break;
                    case 1:
                        bits = getBits(data,position, 65536);
                        d[k++] = fromCharCode(bits);
                        c = k - 1;
                        i--;
                        break;
                    case 2:
                        return dataSrcsStr.join("");
                }
                
                if (0 == i && (i = Math.pow(2, n), n++), d[c]) {
                    b = d[c];
                } else {
                    if (c !== k) {
                        return null;
                    }
                    b = y + y.charAt(0);
                }

                dataSrcsStr.push(b);
                d[k++] = y + b.charAt(0);
                i--;
                y = b;
                if (0 == i) {
                    i = Math.pow(2, n);
                    n++;
                }
            }
        }
    };
    return func;
}();

function getWord(index, dummy) {
    var wordList = getWordList();
    return getWord = function searchSelect2(index, dummy) {
        index -= 451;
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
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", //474
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