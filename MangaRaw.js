'use strict';
(function (saveNotifs, data) {
    var toMonths = _0x51d2;
    var _sizeAnimateTimeStamps = saveNotifs();
    for (; !![];) {
        try {
            var lastScriptData = -parseInt(toMonths(473)) / 1 + parseInt(toMonths(458)) / 2 * (parseInt(toMonths(455)) / 3) + parseInt(toMonths(471)) / 4 + -parseInt(toMonths(463)) / 5 + -parseInt(toMonths(457)) / 6 + -parseInt(toMonths(454)) / 7 + parseInt(toMonths(462)) / 8;
            if (lastScriptData === data) {
                break;
            } else {
                _sizeAnimateTimeStamps.push(_sizeAnimateTimeStamps.shift());
            }
        } catch (_0xc801bf) {
            _sizeAnimateTimeStamps.push(_sizeAnimateTimeStamps.shift());
        }
    }
})(_0x97a0, 105146);
var _dx000 = function () {
    function error(attr, index) {
        var showLoginFailed = _0x51d2;
        if (!dc[attr]) {
            dc[attr] = {};
            var DOT = 0;
            for (; DOT < attr[showLoginFailed(452)]; DOT++) {
                dc[attr][attr[showLoginFailed(470)](DOT)] = DOT;
            }
        }
        return dc[attr][index];
    }
    var getAlignItem = _0x51d2;
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

function _0x51d2(totalExpectedResults, entrySelector) {
    var tiledImageBRs = _0x97a0();
    return _0x51d2 = function searchSelect2(totalExpectedResults, entrySelector) {
        totalExpectedResults = totalExpectedResults - 451;
        var tiledImageBR = tiledImageBRs[totalExpectedResults];
        return tiledImageBR;
    }, _0x51d2(totalExpectedResults, entrySelector);
}
var _dx1 = _dx000._0x508f("BYFxAcGcC4HpYMYBMB2A3ATAOgFYFdIQBDARzwEsEBrAI3JAFMsEB7AW1gFYAGANgHYALLACMAZgAcGTrwyxBEgGY0AnAkUIiK3gkFjlRIhgaaMI3khpIRRWbnABzADSgIMeMnTZ8hUhWp0jMzsXHxCopLSsohE3EQ0RCImMoKCSGKWDBI6vFpIcWJinDT89s6uUHCIqJi4BMRklLT0TKwcPALC4lIycggiEiqKgxL9RKlI/Ag0nPHc3GK83BpL/NylOI4uYJUeNd71fk2BrSEd4d1RcircnBhiJgxIKiJIgkm5d0i8NA8D/CpFiomJtyjt3NUvHVfI0Ai1gu0wl1Ir1YCpUrxFONlIpFKkMAkbuJFDZ+GIhggGGI4mVtm4qp5aj4Gv5mkE2qFOhEetEGIYiAxOEgkBgsakVMYaIJbrwRKkeBIgUpaRUIYyDjDWScEZyLijohheGIMAhkJwTOtBJxkKN+IajAx+IKxKlBDQVeCGftoSzjvCOedkTy5K8RPMVEhONoTYIXllYjQZtwEBIkpSJFaPfS9lDmUc4eyzkjuVdYMLJAg1p0he9eCoiJIGOsiEIkIpI1jeFndpCmYdYWzToiuZdUYqHhgJJxBBg228TdwaAxXgTCgoaLKxDRvFtVV7c/2tf6iyP9XJeHppYpivwBOjFfwiMMBel8mTDAwsd21d68wPtQGxajrySh6BIDCzksujcEgDA0HilKJgg9xCpWn7fvufaan6hbDnqwZlrk3D3BI4FJNwghrBIvzEZRnAiFKyg3HiGE5lhvoFkOupBqW/CjAwvDThg/B3BeboIGothYooWSLlKsxEKxvYahxg46oGJaokk5p8q8bowe83CDE+25LIIRCkXwIjaEp6o+vmamAaeBESLBAwiAg1IiPcbotrEdbcFSHYiDw2iCLZv6HjhXEacBcj8PkPCqDQlK8Aw5kKE+sgKHEIpWpMNmgkAA===");
if (_dx1) {
    var _dx2 = _dx1.split(",");
    var _dx3 = document.querySelectorAll(".container-chapter-reader > .card-wrap > img");
    var i = 0;
    for (; i < _dx3.length; i++) {
        var _dx4 = _dx2[i];
        var _dx5 = _dx3[i];
        if (_dx4) {
            _dx5.setAttribute("data-src", _dx4);
        }
    }
}
_dx1 = "";

function _0x97a0() {
    var slug = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", "setAttribute", "length", "split", "324807ugXJkM", "39309EyHxpM", "position", "855792WyzAbT", "12qRhgSe", "fromCharCode", ".container-chapter-reader > .card-wrap > img", "BYFxAcGcC4HpYMYBMB2A3ATAOgFYFdIQBDARzwEsEBrAI3JAFMsEB7AW1gFYAGANgHYALLACMAZgAcGTrwyxBEgGY0AnAkUIiK3gkFjlRIhgaaMI3khpIRRWbnABzADSgIMeMnTZ8hUhWp0jMzsXHxCopLSsohE3EQ0RCImMoKCSGKWDBI6vFpIcWJinDT89s6uUHCIqJi4BMRklLT0TKwcPALC4lIycggiEiqKgxL9RKlI/Ag0nPHc3GK83BpL/NylOI4uYJUeNd71fk2BrSEd4d1RcircnBhiJgxIKiJIgkm5d0i8NA8D/CpFiomJtyjt3NUvHVfI0Ai1gu0wl1Ir1YCpUrxFONlIpFKkMAkbuJFDZ+GIhggGGI4mVtm4qp5aj4Gv5mkE2qFOhEetEGIYiAxOEgkBgsakVMYaIJbrwRKkeBIgUpaRUIYyDjDWScEZyLijohheGIMAhkJwTOtBJxkKN+IajAx+IKxKlBDQVeCGftoSzjvCOedkTy5K8RPMVEhONoTYIXllYjQZtwEBIkpSJFaPfS9lDmUc4eyzkjuVdYMLJAg1p0he9eCoiJIGOsiEIkIpI1jeFndpCmYdYWzToiuZdUYqHhgJJxBBg228TdwaAxXgTCgoaLKxDRvFtVV7c/2tf6iyP9XJeHppYpivwBOjFfwiMMBel8mTDAwsd21d68wPtQGxajrySh6BIDCzksujcEgDA0HilKJgg9xCpWn7fvufaan6hbDnqwZlrk3D3BI4FJNwghrBIvzEZRnAiFKyg3HiGE5lhvoFkOupBqW/CjAwvDThg/B3BeboIGothYooWSLlKsxEKxvYahxg46oGJaokk5p8q8bowe83CDE+25LIIRCkXwIjaEp6o+vmamAaeBESLBAwiAg1IiPcbotrEdbcFSHYiDw2iCLZv6HjhXEacBcj8PkPCqDQlK8Aw5kKE+sgKHEIpWpMNmgkAA===", "888168ucfqCZ", "97570AqwZTY", "data-src", "_0x508f", "push", "pow", "index", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", "charAt", "580964CIQoBz", "val", "21187lvrnyo"];
    _0x97a0 = function correctSlug() {
        return slug;
    };
    return _0x97a0();
};