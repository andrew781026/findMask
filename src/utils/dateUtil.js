const moment = require('moment');

class DateUtil {

    static format(date, format = 'YYYY/MM/DD') {

        if (date) return moment(date).format(format);
        else return date;
    }

    static getWeekDayStr(date) {

        const weekdayMap = {
            0: '日',
            1: '一',
            2: '二',
            3: '三',
            4: '四',
            5: '五',
            6: '六',
        };

        return weekdayMap[moment(date).weekday()];
    }

    static yesterday() {

        return moment().add(-1, 'd').toDate();
    }

    static nextWeek() {

        return moment().add(7, 'd').toDate();
    }

    static startOf(date, unit = 'd') {

        return moment(date).startOf(unit).toDate();
    }

    static endOf(date, unit = 'd') {

        return moment(date).endOf(unit).toDate();
    }


}

module.exports = DateUtil;
