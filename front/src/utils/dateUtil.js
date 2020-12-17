import dayjs from "dayjs";

class DateUtil {

    static toDate(date, format = 'YYYY/MM/DD HH:mm:ss') {

        return date && dayjs(date, format).toDate();
    }

    static format(date, format = 'YYYY/MM/DD HH:mm:ss') {

        if (date) return dayjs(date).format(format);
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

        return weekdayMap[dayjs(date).weekday()];
    }

    static prevYear = (date) => dayjs(date).add(-1, 'years').toDate();
    static nextYear = (date) => dayjs(date).add(1, 'years').toDate();
    static prevMonth = (date) => dayjs(date).add(-1, 'months').toDate();
    static nextMonth = (date) => dayjs(date).add(1, 'months').toDate();
    static addOneDay = (date) => dayjs(date).add(1, 'days').toDate();
    static addSevenDay = (date) => dayjs(date).add(7, 'days').toDate();
    static yesterday = (date) => dayjs(date).add(-1, 'd').toDate();

    static startOf = (date, unit = 'd') => dayjs(date).startOf(unit).toDate();

    static endOf(date, unit = 'd') {

        return dayjs(date).endOf(unit).toDate();
    }

    static setYear = (date, year) => date && new Date(year, date.getMonth(), date.getDate());
    static setMonth = (date, month) => date && new Date(date.getFullYear(), month, date.getDate());
    static setDay = (date, day) => date && new Date(date.getFullYear(), date.getMonth(), day);
    static getYear = (date) => dayjs(date).year();
    static getMonth = (date) => dayjs(date).month();
    static getDateOfMonth = (date) => dayjs(date).date(); // Date of Month

    static getMonthArrayWithDate(date) {
        return this.getMonthArray({year: dayjs(date).year(), month: dayjs(date).month()});
    }

    // 取得整個月日期的陣列資訊 ( 05/01 ~ 05/31 )
    static getMonthArray({year, month}) {

        // 當月 1 號 ( 05/01 )
        const monthFirstDate = new Date(year, month, 1);

        // 當月最後一天 ( 05/31 )
        const monthLastDate = dayjs(monthFirstDate).endOf('month');

        const endDate = dayjs(monthLastDate).endOf('w');
        const startDate = dayjs(monthFirstDate).startOf('w');
        const diffDate = endDate.diff(startDate, 'days');

        // 當月有幾周
        const weekAmountOfThisMonth = Math.ceil(diffDate / 7);

        let flagDate = monthFirstDate;
        const monthArray = [];
        for (let i = 0; i < weekAmountOfThisMonth; i++) {
            const weekArray = this.getWeekArray(flagDate);
            monthArray.push(weekArray);
            flagDate = this.addSevenDay(flagDate);
        }

        return monthArray;
    }

    static getWeekArray(date) {

        const from_date = dayjs(date).startOf('week').toDate();

        /*
        const to_date = dayjs(date).endOf('week').toDate();

        return this.getWeeklyDateArray({startDate: from_date, endDate: to_date});
         */

        // numbers = [0, 1, 2, 3, 4, 5, 6]
        const numbers = Array.from(Array(7).keys());

        // 起始日 + 0 ~ 6 的日期 , 產生一周的日期
        return numbers.map(i => dayjs(from_date).add(i, 'd').toDate());
    }

    static getWeeklyDateArray({startDate, endDate}) {

        const dateArray = [];
        let currentDate = startDate;
        while (currentDate <= endDate) {
            dateArray.push(currentDate);
            currentDate = this.addOneDay(currentDate);
        }
        return dateArray;
    }

    static isSameYear = (date, otherDate) => dayjs(date).year() === dayjs(otherDate).year();

    static isSameMonth(date, otherDate) {

        const isSameYear = (dayjs(date).year() === dayjs(otherDate).year());
        const isSameMonth = (dayjs(date).month() === dayjs(otherDate).month());
        return (isSameYear && isSameMonth);
    }

    static isSameDay(date, otherDate) {

        const isSameYear = (dayjs(date).year() === dayjs(otherDate).year());
        const isSameMonth = (dayjs(date).month() === dayjs(otherDate).month());
        const isSameDay = (dayjs(date).date() === dayjs(otherDate).date()); // Date of Month
        return (isSameYear && isSameMonth && isSameDay);
    }

}

export default DateUtil;
