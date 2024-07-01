    var re = {};

    re.re = function(s, r, f) {
        const matchs = s.match(r);
        if (matchs !== null) {
            matchs.forEach((match) => {
                f(match);
            });
        } else {
            ['no have matchs'].forEach((error) => {
                f(error);
            });
        }
    };

    re.matchs = function(s, r) {
        const matchs = s.match(r);
        return matchs !== null ? matchs.length : 0;
    };

    re.reDesincluding = function(s, r, f) {
        const matchs = s.split(r);
        if (matchs.length !== 0) {
            matchs.forEach((match) => {
                f(match);
            });
        } else {
            ['no have matchs with splits'].forEach((error) => {
                f(error);
            });
        }
    };

    re.haveMatchs = function(s, r) {
        const matchs = s.match(r);
        return matchs !== null && matchs.length !== 0;
    };

    module.exports = re;
