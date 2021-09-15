import moment from "moment";
import "moment/locale/ru";
// import 'moment/locale/uk';

class DataByPeriod {
  #dateFormat = {
    simple: "YYYY-MM-DD",
    full: "YYYY-MMMM-WW",
    curTime: "hh:mm",
  };

  #direction = {
    RIGHT: "right",
    LEFT: "left",
  };

  #periodsTypes = {
    year: "year",
    month: "month",
    week: "week",
    day: "day",
  };

  #getPeriod = {
    week: (date) => moment(date).week(),
    year: (date = null) => this.splitDate(date)["year"],
    month: (date = null) => this.splitDate(date)["month"],
  };

  get dateFormat() {
    return this.#dateFormat;
  }

  get direction() {
    return this.#direction;
  }

  get periodsTypes() {
    return this.#periodsTypes;
  }

  get getPeriod() {
    return this.#getPeriod;
  }

  constructor() {
    this.current = moment().format(this.dateFormat.simple);
    this.updatingDate = this.current;
    this.pointOfPeriod = 0;
    this.currentTime = moment().format(this.dateFormat.curTime);
  }

  resetDate = () => moment().format(this.dateFormat.simple);

  changeDateToDate = (dateStr) => moment(dateStr)._d;

  changeToCapitalize = (str) => str[0].toUpperCase() + str.slice(1);

  splitDate = (date = null) => {
    const [year, month, day] = (date || this.current).split("-");
    return {
      year,
      month,
      day,
    };
  };

  splitFullDate = (date) => {
    const fullDate = moment(date).local("ru").format(this.dateFormat.full);
    const dayOfWeek = moment(date).isoWeekday();
    const [year, month] = fullDate.split("-");
    return {
      year,
      month,
      dayOfWeek,
    };
  };

  getWeekDay = (date) => moment(date).format("dd");

  getDataPerDay = (data, date) => {
    return data.filter((transaction) => transaction.date === date);
  };

  getDataPerWeek = (data, date) => {
    const periodWeek = this.getPeriod.week(date);
    const periodYear = this.getPeriod.year(date);
    return data.filter(
      ({ date: dataDate }) =>
        this.getPeriod.year(dataDate) === periodYear &&
        this.getPeriod.week(dataDate) === periodWeek
    );
  };

  getDataPerMonth = (data, date) => {
    const { month: periodMonth, year: periodYear } = this.splitDate(date);
    return data.filter(({ date }) => {
      const { month, year } = this.splitDate(date);
      return year === periodYear && month === periodMonth;
    });
  };

  getDataPerYear = (data, date) => {
    const { year: periodYear } = this.splitDate(date);
    return data.filter(({ date }) => {
      const { year } = this.splitDate(date);
      return year === periodYear;
    });
  };

  // moment("2021-09-15").add(1, "years").format("YYYY-MM-DD")
  getUpdatingDate = (baseDate, method, periodType) =>
    moment(baseDate)[method](1, periodType.name + "s")._d;

  getDataByCat = (data) => {
    return data.reduce((acc, transaction) => {
      const { category: cat } = transaction;
      const sum = Number(transaction.sum);
      const category = typeof cat === "object" ? cat.name : cat;
      if (!acc[category]) {
        acc[category] = { total: sum };
        acc[category] = {
          ...acc[category],
          data: [transaction],
        };
        return acc;
      }
      acc[category].data.push(transaction);
      acc[category].total += sum;
      return acc;
    }, {});
  };

  getDataListOfCategories = ({ data, date, period = "all" }) => {
    const { day, week, year, month } = this.periodsTypes;
    const dateStr = moment(date).format("YYYY-MM-DD");
    let newData = [];
    switch (period) {
      case day:
        newData = this.getDataPerDay(data, dateStr);
        break;
      case week:
        newData = this.getDataPerWeek(data, dateStr);
        break;
      case month:
        newData = this.getDataPerMonth(data, dateStr);
        break;
      case year:
        newData = this.getDataPerYear(data, dateStr);
        break;
      default:
        newData = data;
    }
    return this.getDataByCat(newData);
  };

  getDateOfPeriodStr = ({ date, period }) => {
    switch (period) {
      case this.periodsTypes.month:
        const { year, month } = this.splitFullDate(date);
        const monthWithCapitalize = this.changeToCapitalize(month);
        return `${monthWithCapitalize} ${year}`;
      case this.periodsTypes.week:
        const { dayOfWeek } = this.splitFullDate(date);
        const weekStart = moment(date)
          .subtract(dayOfWeek - 1, "days")
          .format("LL");
        const weekEnd = moment(date)
          .add(7 - dayOfWeek, "days")
          .format("LL");
        return `${weekStart} - ${weekEnd}`;
      case this.periodsTypes.day:
        return moment(date).format("LL");
      case this.periodsTypes.year:
        return this.splitFullDate(date).year;
      default:
        return;
    }
  };

  setUpdatingDate = (upDate, periodType, updatingDirection) => {
    const method =
      updatingDirection === this.direction.RIGHT
        ? "add"
        : updatingDirection === this.direction.LEFT
        ? "subtract"
        : null;
    if (!method) return;
    const updatedDate = this.getUpdatingDate(upDate, method, periodType);
    return updatedDate;
  };
}

const dataByPeriod = new DataByPeriod();

export default dataByPeriod;
