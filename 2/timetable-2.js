/*

  - Show/Hide Menu Options to UI (done)
  - Add New Day/Period to UI (done)
  - Remove Day/Period to UI (done)
  - Update Day Name to UI (done)
  - Toggle Timetable View (Edit/Show) (done)
  - Refresh Table to Update View (done)
  - Timtable Form Data Update to Dataset and UI (done)

  - Handle Change in Period Default Timings (done)
  - Handle Change on Break (done)
  - Handle Change on Free Period (done)
  - Load the View with input Disabled when it is break or free (done)
  - Add Column to Left Bug Solve (done)
  - If No Teacher and Subject Selected Show ?? to UI (Done)

  - Create A new Structure on period (reamining)
  - Update Only default Time on Period Time Change (remaining)
  - Handle Change on Period Name (remaining)
  - Solve the Default Period & Day 1 Bug (remaining)
  - Set Different Color Block for Teachers (remaining)

*/

class Data {
  static teachers = [
    "Thabo Mokwena",
    "Nomfundo Khumalo",
    "Sibusiso Ndlovu",
    "Lerato Moloi",
    "Bongani Nkosi",
    "Nompumelelo Dlamini",
    "Jabulani Mbatha",
    "Themba Mkhize",
    "Precious Ngubane",
    "Siyabonga Zulu",
    "Lindiwe Sithole",
    "Mpho Phiri",
    "Nkosinathi Mthembu",
    "Zinhle Mabaso",
    "Ntombi Magwaza",
    "Thando Dube",
    "Musa Mahlangu",
    "Ayanda Nkosi",
    "Xolani Shabalala",
    "Zandile Moyo",
    "Nhlanhla Nxumalo",
    "Busisiwe Mkhwanazi",
    "Mandla Sibanda",
    "Nokuthula Zwane",
    "Sanele Gumede",
    "Amahle Cele",
    "Lungile Zungu",
    "Simphiwe Mkhize",
    "Zanele Mdlalose",
    "Sipho Ngcobo",
    "Refiloe Mohapi",
    "Buhle Nkosi",
    "Nkosi Khuzwayo",
    "Kabelo Radebe",
    "Zola Mthembu",
    "Zodwa Ndlovu",
    "Lwazi Sithole",
    "Nandi Dlamini",
    "Thulani Zwane",
    "Nomvula Xaba",
    "Melusi Moyo",
    "Gugu Vilakazi",
    "Mandisa Mabaso",
    "Njabulo Ntuli",
    "Lerato Phiri",
    "Jabu Molefe",
    "Thando Buthelezi",
    "Bongiwe Ngwenya",
    "Musawenkosi Sibiya",
    "Sibusisiwe Nxumalo"
  ];

  static subjects = [
    "Mathematics",
    "English",
    "Life Sciences",
    "Physical Sciences",
    "Geography",
    "History",
    "Accounting",
    "Business Studies",
    "Economics",
    "Information Technology",
    "Computer Applications Technology",
    "Consumer Studies",
    "Tourism",
    "Art",
    "Music",
    "Drama",
    "Life Orientation",
    "Agricultural Sciences",
    "Engineering Graphics and Design",
    "Civil Technology",
    "Electrical Technology",
    "Mechanical Technology",
    "Mathematical Literacy",
    "Afrikaans",
    "IsiZulu",
    "Sepedi",
    "Xhosa",
    "Setswana",
    "Sesotho",
    "French",
    "German",
    "Physical Education",
    "Religion Studies",
    "Design",
    "Visual Arts",
    "Computer Science",
    "Home Economics",
    "Entrepreneurship",
    "Legal Studies",
    "Development Studies",
    "Sports Science",
    "Media Studies",
    "Dance Studies",
    "Social Sciences",
    "Philosophy",
    "Psychology",
    "Sociology",
    "Anthropology",
    "Linguistics",
    "Political Studies"
  ];

  static timetable = {
    "Monday": [
      { fromTime: '07:30 AM', toTime: '08:30 AM', teacher: 'Sibusiso Ndlovu', subject: 'Design', isBreak: false, isFree: false },
      { fromTime: '08:30 AM', toTime: '09:30 AM', teacher: '', subject: 'English', isBreak: false, isFree: false },
      { fromTime: '09:30 AM', toTime: '10:00 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '', toTime: '11:00 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '11:00 AM', toTime: '12:00 PM', teacher: '', subject: '', isBreak: false, isFree: false }
    ],
    "Tuesday": [
      { fromTime: '07:30 AM', toTime: '08:30 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '08:30 AM', toTime: '09:30 AM', teacher: 'Sibusisiwe Nxumalo', subject: '', isBreak: false, isFree: false },
      { fromTime: '09:30 AM', toTime: '10:00 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '', toTime: '11:00 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '11:00 AM', toTime: '12:00 PM', teacher: '', subject: '', isBreak: false, isFree: false }
    ],
    "Wednesday": [
      { fromTime: '07:30 AM', toTime: '08:30 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '08:30 AM', toTime: '09:30 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '09:30 AM', toTime: '10:00 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '', toTime: '11:00 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '11:00 AM', toTime: '12:00 PM', teacher: '', subject: '', isBreak: false, isFree: false }
    ],
    "Thursday": [
      { fromTime: '07:30 AM', toTime: '08:30 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '08:30 AM', toTime: '09:30 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '09:30 AM', toTime: '10:00 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '', toTime: '11:00 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '11:00 AM', toTime: '12:00 PM', teacher: '', subject: '', isBreak: false, isFree: false }
    ],
    "Friday": [
      { fromTime: '07:30 AM', toTime: '08:30 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '08:30 AM', toTime: '09:30 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '09:30 AM', toTime: '10:00 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '', toTime: '11:00 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '11:00 AM', toTime: '12:00 PM', teacher: '', subject: '', isBreak: false, isFree: false }
    ],
    "Saturday": [
      { fromTime: '07:30 AM', toTime: '08:30 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '08:30 AM', toTime: '09:30 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '09:30 AM', toTime: '10:00 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '', toTime: '11:00 AM', teacher: '', subject: '', isBreak: false, isFree: false },
      { fromTime: '11:00 AM', toTime: '12:00 PM', teacher: '', subject: '', isBreak: false, isFree: false }
    ]
  };

  static getTotalPeriod() {
    const periods = [];
    const days = Object.keys(Data.timetable); // ['Monday', 'Tuesay']

    days.forEach(day => {
      const totalPeriodsInDay = Data.timetable[day].length // 5
      periods.push(totalPeriodsInDay)
    });

    return Math.max(...periods);
  }

  static getTotalDays() {
    return Object.keys(Data.timetable).length;
  }

  static getPeriodFromScheduleIndex(index) {
    return ++index;
  }

  static getPeriodInfoFromRowIndex(rowIndex) {
    const firstDay = Object.keys(Data.timetable)[0];
    const fromTime = Data.timetable[firstDay][rowIndex].fromTime;
    const toTime = Data.timetable[firstDay][rowIndex].toTime;
    const period = `${++rowIndex}`;

    return {
      period,
      fromTime: fromTime || '--:--',
      toTime: toTime || '--:--',
    }
  }

  static getScheduleDataFromDayAndPeriod(day, period) {
    const daySchedule = Data.timetable[day][Number(period) - 1];
    return {
      fromTime: daySchedule.fromTime || '--:--',
      toTime: daySchedule.toTime || '--:--',
      teacher: daySchedule.teacher || 'Select Teacher',
      subject: daySchedule.subject || 'Select Subject',
      isBreak: daySchedule.isBreak,
      isFree: daySchedule.isFree
    }
  }

  static isDifferentFromDefaultTime(day, period) {
    const firstDay = Object.keys(Data.timetable)[0];
    const givenSchedule = Data.timetable[day][period - 1];
    const defaultSchedule = Data.timetable[firstDay][period - 1];

    if (givenSchedule.fromTime === defaultSchedule.fromTime &&
      givenSchedule.toTime === defaultSchedule.toTime) {
      return false;
    }
    return true;
  }

  static removeColumn(columnIndex) {
    const days = Object.keys(Data.timetable);
    const deleteDay = days[columnIndex];
    const newDays = days.filter(day => day !== deleteDay);

    const newTimetable = {};
    newDays.forEach(day => {
      newTimetable[day] = Data.timetable[day];
    });

    Data.timetable = newTimetable;
  }

  static addColumn(columnIndex) {
    const days = Object.keys(Data.timetable);
    days.splice(columnIndex, 0, Helper.getNextDay(days));

    const newTimetable = {};
    days.forEach(day => {
      if (Data.timetable[day]) {
        newTimetable[day] = Data.timetable[day];
      } else {
        newTimetable[day] = Data.getNewScheduleForDay();
      }
    });

    Data.timetable = newTimetable;
  }

  static getNewScheduleForDay() {
    const firstDay = Object.keys(Data.timetable)[0];
    const firstDaySchedule = Data.timetable[firstDay];

    const newSchedule = [];
    firstDaySchedule.forEach(schedule => {
      newSchedule.push({
        fromTime: schedule.fromTime,
        toTime: schedule.toTime,
        teacher: '',
        subject: '',
        isBreak: schedule.isBreak,
        isFree: false
      })
    });

    return newSchedule;
  }

  static removeRow(rowIndex) {
    const days = Object.keys(Data.timetable);
    days.forEach(day => {
      Data.timetable[day].splice(rowIndex, 1);
    });
  }

  static addRow(rowIndex) {
    const days = Object.keys(Data.timetable);
    const totalPeriod = Data.getTotalPeriod();
    days.forEach(day => {
      Data.timetable[day].splice(rowIndex, 0, Data.getScheduleForPeriod(day, rowIndex, totalPeriod));
    });
  }

  static getScheduleForPeriod(day, periodIndex, totalPeriod) {

    let fromTime = '', toTime = '';

    if (periodIndex === 0) {
      toTime = Data.timetable[day][0].fromTime;
    } else if (periodIndex === totalPeriod) {
      fromTime = Data.timetable[day][periodIndex - 1].toTime;
    } else {
      fromTime = Data.timetable[day][periodIndex - 1].toTime;
      toTime = Data.timetable[day][periodIndex].fromTime;
    }

    return {
      fromTime, toTime,
      teacher: '',
      subject: '',
      isBreak: '',
      isFree: ''
    };
  }

  static getColumnIndexFromDay(day) {
    const days = Object.keys(Data.timetable);
    return days.indexOf(day);
  }

  static renameDay(oldDay, newDay) {
    const oldDays = Object.keys(Data.timetable);
    const newDays = Object.keys(Data.timetable);
    newDays[oldDays.indexOf(oldDay)] = newDay;

    const newTimetable = {};

    oldDays.forEach((oldDay, index) => {
      newTimetable[newDays[index]] = Data.timetable[oldDay];
    });

    Data.timetable = newTimetable;
  }

  static setDefaultPeriodTime({ rowIndex, name, value }) {
    const days = Object.keys(Data.timetable);
    days.forEach(day => {
      Data.timetable[day][rowIndex][name] = value;
    });
  }

}

class UI {
  static table = document.querySelector('.tt-white-box .tt-body table');
  static thead = document.querySelector('.tt-white-box .tt-body thead');
  static tbody = document.querySelector('.tt-white-box .tt-body tbody');

  static loadTableHeader() {
    const tr = document.createElement('tr');

    // Create First Cell - Period Cell
    const th = document.createElement('th');

    const cellWrapper = document.createElement('div');
    cellWrapper.classList.add('cell-wrapper');
    th.append(cellWrapper);

    const p = document.createElement('p');
    p.append(document.createTextNode('Period'));
    cellWrapper.append(p);

    tr.append(th);

    // Appending Other <th> as per the Timetable Template
    Object.keys(Data.timetable).forEach(day => tr.append(UI.getHeaderCellWrapper(day)));

    UI.thead.append(tr);
  }

  static getHeaderCellWrapper(day) {

    const th = document.createElement('th');
    th.setAttribute('data-day', day);

    // Creating Cell Wrapper

    const cellWrapper = document.createElement('div');
    cellWrapper.classList.add('cell-wrapper');
    th.append(cellWrapper);

    // Creating Options

    const options = document.createElement('div');
    options.classList.add('options');
    cellWrapper.append(options);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    options.append(menuBtn);

    const menuIcon = document.createElement('i');
    menuIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    menuBtn.append(menuIcon);

    const nav = document.createElement('nav');
    nav.classList.add('menu-list');
    menuBtn.append(nav);

    const ul = document.createElement('ul');
    nav.append(ul);

    [
      { title: 'Add Column to left', action: 'add-column-left' },
      { title: 'Add Column to right', action: 'add-column-right' },
      { title: 'Remove this column', action: 'remove-column' }
    ].forEach(list => {
      const li = document.createElement('li');
      li.setAttribute('data-action', list.action);
      li.append(document.createTextNode(list.title));
      ul.append(li);
    });

    // Creating Info View

    const infoView = document.createElement('div');
    infoView.classList.add('info-view');
    cellWrapper.append(infoView);

    const p = document.createElement('p');
    p.classList.add('day');
    p.append(document.createTextNode(day));
    infoView.append(p);

    // Creating Edit View

    const editView = document.createElement('div');
    editView.classList.add('edit-view');
    cellWrapper.append(editView);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', day);
    input.setAttribute('placeholder', 'Enter Day');
    editView.append(input);

    return th;
  }

  static loadTableBody() {
    for (let row = 0; row < Data.getTotalPeriod(); row++) {
      UI.tbody.append(UI.getTableRow({ index: row }));
    }
  }

  static getTableRow({ index }) {
    const tr = document.createElement('tr');

    // Create First Data in Table Row
    tr.append(UI.getTbodyFirstCellWrapper(index));

    Object.keys(Data.timetable).forEach(day => {
      const period = Data.getPeriodFromScheduleIndex(index);
      tr.append(UI.getTbodyCellWrapper({ day, period }));
    })
    return tr;
  }

  static getTbodyCellWrapper({ day, period }) {

    const scheduleData = Data.getScheduleDataFromDayAndPeriod(day, period);


    const td = document.createElement('td');
    td.setAttribute("data-period", period);
    td.setAttribute("data-day", day);

    const cellWrapper = document.createElement('div');
    cellWrapper.classList.add('cell-wrapper');
    td.append(cellWrapper);

    // Creating Info View

    const infoView = document.createElement('div');
    infoView.classList.add(
      'info-view',
      scheduleData.isBreak ? 'break' : null,
      scheduleData.isFree ? 'free' : null,
      Data.isDifferentFromDefaultTime(day, period) ? 'time-updated' : null
    );
    cellWrapper.append(infoView);

    const breakPeriod = document.createElement('h2');
    breakPeriod.classList.add('break');
    breakPeriod.append(document.createTextNode('Break'));
    infoView.append(breakPeriod);

    const freePeriod = document.createElement('h2');
    freePeriod.classList.add('free');
    freePeriod.append(document.createTextNode('Free'));
    infoView.append(freePeriod);

    const time = document.createElement('p');
    time.classList.add('time');
    time.append(document.createTextNode(`${scheduleData.fromTime} to ${scheduleData.toTime}`));
    infoView.append(time);

    const subject = document.createElement('p');
    subject.classList.add('subject');
    subject.append(document.createTextNode(scheduleData.subject === 'Select Subject' ? "Subject ??" : scheduleData.subject));
    infoView.append(subject);

    const teacher = document.createElement('p');
    teacher.classList.add('teacher');
    teacher.append(document.createTextNode(scheduleData.teacher === 'Select Teacher' ? "Teacher ??" : scheduleData.teacher));
    infoView.append(teacher);

    // Creating Edit View

    const editView = document.createElement('div');
    editView.classList.add('edit-view');
    cellWrapper.append(editView);

    const timeDiv = document.createElement('div');
    timeDiv.classList.add('time');
    editView.append(timeDiv);

    const fromTimeInput = document.createElement('input');
    fromTimeInput.classList.add('flatpickr');
    fromTimeInput.setAttribute('type', 'time');
    fromTimeInput.setAttribute('name', 'fromTime');
    fromTimeInput.setAttribute('data-default-date', scheduleData.fromTime);
    fromTimeInput.setAttribute('placeholder', 'From');
    if (scheduleData.isBreak || scheduleData.isFree) fromTimeInput.disabled = true;
    timeDiv.append(fromTimeInput);

    const dashSpan = document.createElement('span');
    dashSpan.append(document.createTextNode(' - '));
    timeDiv.append(dashSpan);

    const toTimeInput = document.createElement('input');
    toTimeInput.classList.add('flatpickr');
    toTimeInput.setAttribute('type', 'time');
    toTimeInput.setAttribute('name', 'toTime');
    toTimeInput.setAttribute('data-default-date', scheduleData.toTime);
    toTimeInput.setAttribute('placeholder', 'To');
    if (scheduleData.isBreak || scheduleData.isFree) toTimeInput.disabled = true;
    timeDiv.append(toTimeInput);

    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subject');
    editView.append(subjectDiv);

    const subjectSelect = document.createElement('select');
    subjectSelect.classList.add('select2');
    subjectSelect.setAttribute('name', 'subject');
    subjectSelect.setAttribute('value', scheduleData.subject);
    if (scheduleData.isBreak || scheduleData.isFree) subjectSelect.disabled = true;
    ['Select Subject', ...Data.subjects].forEach(subject => {
      const option = document.createElement('option');
      option.setAttribute('value', subject);
      if (subject === scheduleData.subject) {
        option.selected = true;
      }
      option.append(document.createTextNode(subject));
      subjectSelect.append(option);
    });
    subjectDiv.append(subjectSelect);


    const teacherDiv = document.createElement('div');
    teacherDiv.classList.add('teacher');
    editView.append(teacherDiv);

    const teacherSelect = document.createElement('select');
    teacherSelect.classList.add('select2');
    teacherSelect.setAttribute('name', 'teacher');
    teacherSelect.setAttribute('value', scheduleData.teacher);
    if (scheduleData.isBreak || scheduleData.isFree) teacherSelect.disabled = true;
    ['Select Teacher', ...Data.teachers].forEach(teacher => {
      const option = document.createElement('option');
      option.setAttribute('value', teacher);
      if (teacher === scheduleData.teacher) {
        option.selected = true;
      }
      option.append(document.createTextNode(teacher));
      teacherSelect.append(option);
    });
    teacherDiv.append(teacherSelect);


    const breakDiv = document.createElement('div');
    breakDiv.classList.add('break');
    editView.append(breakDiv);

    const breakInput = document.createElement('input');
    breakInput.setAttribute('type', 'checkbox');
    breakInput.setAttribute('name', 'isBreak');
    breakInput.setAttribute('id', `break-${day}-${period}`);
    if (scheduleData.isFree) breakInput.disabled = true;
    if (scheduleData.isBreak) breakInput.checked = true;
    breakDiv.append(breakInput);

    const breakLabel = document.createElement('label');
    breakLabel.setAttribute('for', `break-${day}-${period}`);
    breakLabel.append(document.createTextNode('is Break'));
    breakDiv.append(breakLabel);


    const freeDiv = document.createElement('div');
    freeDiv.classList.add('free');
    editView.append(freeDiv);

    const freeInput = document.createElement('input');
    freeInput.setAttribute('type', 'checkbox');
    freeInput.setAttribute('name', 'isFree');
    freeInput.setAttribute('id', `free-${day}-${period}`);
    if (scheduleData.isBreak) freeInput.disabled = true;
    if (scheduleData.isFree) freeInput.checked = true;
    freeDiv.append(freeInput);

    const freeLabel = document.createElement('label');
    freeLabel.setAttribute('for', `free-${day}-${period}`);
    freeLabel.append(document.createTextNode('is Free'));
    freeDiv.append(freeLabel);

    return td;
  }

  static getTbodyFirstCellWrapper(index) {

    const cell = Data.getPeriodInfoFromRowIndex(index);

    const th = document.createElement('th');
    th.setAttribute('data-period', cell.period);

    // Creating Cell Wrapper

    const cellWrapper = document.createElement('div');
    cellWrapper.classList.add('cell-wrapper');
    th.append(cellWrapper);

    // Creating Options

    const options = document.createElement('div');
    options.classList.add('options');
    cellWrapper.append(options);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    options.append(menuBtn);

    const menuIcon = document.createElement('i');
    menuIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    menuBtn.append(menuIcon);

    const nav = document.createElement('nav');
    nav.classList.add('menu-list');
    menuBtn.append(nav);

    const ul = document.createElement('ul');
    nav.append(ul);

    [
      { title: 'Add row above', action: 'add-row-above' },
      { title: 'Add row below', action: 'add-row-below' },
      { title: 'Remove this row', action: 'remove-row' }
    ]
      .forEach(list => {
        const li = document.createElement('li');
        li.setAttribute('data-action', list.action);
        li.append(document.createTextNode(list.title));
        ul.append(li);
      });

    // Creating Info View

    const infoView = document.createElement('div');
    infoView.classList.add('info-view');
    cellWrapper.append(infoView);

    const period = document.createElement('h2');
    period.classList.add('period');
    period.append(document.createTextNode(cell.period));
    infoView.append(period);

    const fromTime = document.createElement('p');
    fromTime.classList.add('fromTime');
    fromTime.append(document.createTextNode('from '));
    infoView.append(fromTime);

    const fromTimeSpan = document.createElement('span');
    fromTimeSpan.append(document.createTextNode(cell.fromTime));
    fromTime.append(fromTimeSpan);

    const toTime = document.createElement('p');
    toTime.classList.add('toTime');
    toTime.append(document.createTextNode('to '));
    infoView.append(toTime);

    const toTimeSpan = document.createElement('span');
    toTimeSpan.append(document.createTextNode(cell.toTime));
    toTime.append(toTimeSpan);

    // Creating Edit View

    const editView = document.createElement('div');
    editView.classList.add('edit-view');
    cellWrapper.append(editView);

    const periodInput = document.createElement('input');
    periodInput.setAttribute('type', 'text');
    periodInput.setAttribute('name', 'period');
    periodInput.setAttribute('value', cell.period);
    periodInput.setAttribute('placeholder', 'Enter Period');
    editView.append(periodInput);

    const fromTimeInput = document.createElement('input');
    fromTimeInput.classList.add('flatpickr');
    fromTimeInput.setAttribute('type', 'time');
    fromTimeInput.setAttribute('name', 'fromTime');
    fromTimeInput.setAttribute('data-default-date', cell.fromTime);
    fromTimeInput.setAttribute('placeholder', 'From Time');
    editView.append(fromTimeInput);

    const toTimeInput = document.createElement('input');
    toTimeInput.classList.add('flatpickr');
    toTimeInput.setAttribute('type', 'time');
    toTimeInput.setAttribute('name', 'toTime');
    toTimeInput.setAttribute('data-default-date', cell.toTime);
    toTimeInput.setAttribute('placeholder', 'To Time');
    editView.append(toTimeInput);

    return th;
  }

  static renameDay(oldDay, newDay) {
    const dataDayElements = UI.table.querySelectorAll(`[data-day='${oldDay}']`);
    dataDayElements.forEach(element => {
      element.dataset.day = newDay;
    })
  }

  static handleChangePeriodTiming({ period, name, value }) {
    const infoViewPeriods = UI.tbody.querySelectorAll(`td[data-period='${period}'] .info-view p.time`);
    const editViewPeriods = UI.tbody.querySelectorAll(`td[data-period='${period}'] .edit-view input[name='${name}']`);

    infoViewPeriods.forEach(info => {
      console.log(info.textContent);
      let fromTime = info.textContent.split(' to ')[0];
      let toTime = info.textContent.split(' to ')[1];
      if (name === 'fromTime') info.textContent = `${value} to ${toTime}`;
      if (name === 'toTime') info.textContent = `${fromTime} to ${value}`;
    })

    editViewPeriods.forEach(input => {
      input.dataset.defaultDate = value;
      input.value = value;
    })
  }

  static refreshTable() {
    // Remove All the Events & Event Listener
    Helper.removeAllEventListener();

    // Remove All the Data from Table
    while (UI.thead.firstChild) UI.thead.removeChild(UI.thead.firstChild);
    while (UI.tbody.firstChild) UI.tbody.removeChild(UI.tbody.firstChild);

    // Load Table
    UI.loadTableHeader();
    UI.loadTableBody();

    // Add all the Events and Events Listener
    Helper.addFlatpickrAndSelect2();
    Helper.handleFormDataChange();
    Helper.handleOptions();
    Helper.handleDayRename();
    Helper.handleDefaultPeriodTimings();
    Helper.handleChangeOnBreak();
    Helper.handleChangeOnFree();
  }

}

class Helper {

  static getNextDay(days) {
    const filteredDays = days.filter(day => day.includes('Day '));
    if (!filteredDays.length) return 'Day 1';

    const dayNumbers = filteredDays.map(day => parseInt(day.split(' ')[1]));
    return `Day ${Math.max(...dayNumbers) + 1}`;
  }

  static handleEditAndViewTimetable() {
    const editBtn = document.querySelector('.tt-white-box .tt-header .edit-btn');

    editBtn.addEventListener('click', () => {
      if (UI.table.classList.contains('edit')) {
        UI.table.classList.remove('edit');
        editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> Edit Timetable`;
        UI.refreshTable();
      } else {
        UI.table.classList.add('edit');
        editBtn.innerHTML = `<i class="fa-solid fa-eye"></i> View Timetable`;
      }
    })
  }

  static addFlatpickrAndSelect2() {
    $('.select2').select2();
    flatpickr('.flatpickr', {
      dateFormat: "h:i K",
      enableTime: true,
      noCalendar: true
    });
  }

  static handleFormDataChange() {
    const formInputs = UI.table.querySelectorAll("td .edit-view input");
    const formSelectInputs = $('.tt-body td .edit-view select.select2');

    formInputs.forEach(input => input.addEventListener('change', Helper.setFormDataInTimetable));
    formSelectInputs.on('select2:select', Helper.setFormDataInTimetable);
  }

  static setFormDataInTimetable(e) {
    const
      cell = e.target.parentElement.parentElement.parentElement.parentElement,
      day = cell.dataset.day,
      period = cell.dataset.period,
      name = e.target.name,
      type = e.target.type,
      value = type == 'checkbox' ? e.target.checked : e.target.value;

    Data.timetable[day][period - 1][name] = value;

  }

  static removeAllEventListener() {
    // Form Change Event Listener
    const formInputs = UI.table.querySelectorAll("td .edit-view input");
    const formSelectInputs = $('.tt-body td .edit-view select.select2');

    formInputs.forEach(input => input.removeEventListener('change', Helper.setFormDataInTimetable));
    formSelectInputs.unbind();

    // Remove Select2
    $('.tt-body select.select2').select2("destroy");

    // Remove Flatpickrs
    const flatpickrCalendars = document.querySelectorAll('.flatpickr-calendar');
    flatpickrCalendars.forEach(calendar => {
      calendar.parentElement.removeChild(calendar);
    });

    // Remove Options [REMOVED AUTOMATICALLY]

    // Remove Days Rename [REMOVED AUTOMATICALLY]
  }

  static handleOptions() {
    const menuItems = UI.table.querySelectorAll('.menu-list li');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const action = item.dataset.action;
        if (action.includes('column')) {

          const day = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.day;
          const columnIndex = Data.getColumnIndexFromDay(day);
          action.includes('left') && Data.addColumn(!columnIndex ? 0 : columnIndex);
          action.includes('right') && Data.addColumn(columnIndex + 1);

          if (action.includes('remove')) {
            if (Data.getTotalDays() === 1) alert("Timetable must contain one day.");
            else if (confirm('This Day will be deleted permanently')) Data.removeColumn(columnIndex);
          }

        } else if (action.includes('row')) {

          const period = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.period;
          const rowIndex = period - 1;
          action.includes('above') && Data.addRow(!rowIndex ? 0 : rowIndex - 1);
          action.includes('below') && Data.addRow(rowIndex + 1)

          if (action.includes('remove')) {
            if (Data.getTotalPeriod() === 1) alert("Timetable must contain one period.");
            else if (confirm('This period will be deleted permanently')) Data.removeRow(rowIndex);
          }
        }
        UI.refreshTable();
      });
    });
  }

  static handleDayRename() {
    const dayInputs = UI.thead.querySelectorAll('th .edit-view input');
    dayInputs.forEach(input => {
      input.addEventListener('input', () => {
        const oldName = input.parentElement.parentElement.parentElement.dataset.day;
        const newName = input.value;
        Data.renameDay(oldName, newName);
        UI.renameDay(oldName, newName);
      });
    });
  }

  static handleDefaultPeriodTimings() {
    const timeInputs = UI.tbody.querySelectorAll("th :is(input[name='fromTime'], input[name='toTime'])");
    timeInputs.forEach(input => {
      input.addEventListener('change', () => {
        // Get That Period
        const period = parseInt(input.parentElement.parentElement.parentElement.dataset.period);
        const name = input.name;
        const value = input.value;

        // Change Period Time to Dataset
        Data.setDefaultPeriodTime({ rowIndex: period - 1, name, value });

        // Change Period Time to All UI Timings
        UI.handleChangePeriodTiming({ period, name, value });
      });
    })
  }

  static handleChangeOnBreak() {
    const breakInputs = UI.tbody.querySelectorAll("td .break input[name='isBreak']");
    breakInputs.forEach(input => {
      input.addEventListener('change', () => {
        const editView = input.parentElement.parentElement;
        const inputs = {
          fromTime: editView.querySelector(".time input[name='fromTime']"),
          toTime: editView.querySelector(".time input[name='toTime']"),
          subject: editView.querySelector(".subject select[name='subject']"),
          teacher: editView.querySelector(".teacher select[name='teacher']"),
          isFree: editView.querySelector(".free input[name='isFree']"),
        };

        if (input.checked) {
          inputs.fromTime.disabled = true;
          inputs.toTime.disabled = true;
          inputs.subject.disabled = true;
          inputs.teacher.disabled = true;
          inputs.isFree.disabled = true;
        } else {
          inputs.fromTime.disabled = false;
          inputs.toTime.disabled = false;
          inputs.subject.disabled = false;
          inputs.teacher.disabled = false;
          inputs.isFree.disabled = false;
        }
      })
    })
  }

  static handleChangeOnFree() {
    const freeInputs = UI.tbody.querySelectorAll("td .free input[name='isFree']");
    freeInputs.forEach(input => {
      input.addEventListener('change', () => {
        const editView = input.parentElement.parentElement;
        const inputs = {
          fromTime: editView.querySelector(".time input[name='fromTime']"),
          toTime: editView.querySelector(".time input[name='toTime']"),
          subject: editView.querySelector(".subject select[name='subject']"),
          teacher: editView.querySelector(".teacher select[name='teacher']"),
          isBreak: editView.querySelector(".break input[name='isBreak']"),
        };

        if (input.checked) {
          inputs.fromTime.disabled = true;
          inputs.toTime.disabled = true;
          inputs.subject.disabled = true;
          inputs.teacher.disabled = true;
          inputs.isBreak.disabled = true;
        } else {
          inputs.fromTime.disabled = false;
          inputs.toTime.disabled = false;
          inputs.subject.disabled = false;
          inputs.teacher.disabled = false;
          inputs.isBreak.disabled = false;
        }
      })
    })
  }
}

async function main() {
  Helper.handleEditAndViewTimetable();

  // Load UI
  UI.loadTableHeader();
  UI.loadTableBody();

  // Handle All Event Listeners
  Helper.addFlatpickrAndSelect2();
  Helper.handleFormDataChange();
  Helper.handleOptions();
  Helper.handleDayRename();
  Helper.handleDefaultPeriodTimings();
  Helper.handleChangeOnBreak();
  Helper.handleChangeOnFree();

}

main();