;(function(moment) {
  moment.lang('en', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D YYYY',
      LLL: 'MMMM D YYYY LT',
      LLLL: 'dddd, MMMM D YYYY LT'
    },
    meridiem: function (hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'pm' : 'PM';
      }
      else {
        return isLower ? 'am' : 'AM';
      }
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    ordinal: function (number) {
      var b = number % 10
      var output = (~~ (number % 100 / 10) === 1) ? 'th' :
          (b === 1) ? 'st' :
          (b === 2) ? 'nd' :
          (b === 3) ? 'rd' : 'th'
      return number + output
    }
  })

  // support SeaJS
  if (typeof seajs !== 'undefined') {
    define('gallery/moment/2.0.0/i18n/en', [], function() {
      return moment
    })
  }
})(this.moment);
