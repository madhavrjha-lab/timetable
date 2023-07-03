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

  - Create A new Structure on period (done)
  - Update Only default Time on Period Time Change (done)
  - Solve the Default Period & Day 1 Bug (done)

  - Handle Change on Period Name (done) [the big one]
  - Enable Time for update of Break and Free period (done)
  - Solve null on class name issue (done)
  - Set Different Color Block for Teachers (done)
  - Sort the Teachers and Subjects
  - Map the Teachers with Colors (done)
  - Fix the Time Picker in Mobile View (done)
  - Add the Free Title when it is checked As Free
  - Implement the Shortcuts (Copy Focused [Teacher, Sbject, Break, Free] To [Row, Column, All] Inputs) (REMAINING)

  Add Some Style
   - View Timetable to Preview (done)
   - Ellipse Visible in Default (done)
   - Make Text Clear and Add Icons in Options (done)
   - Edit Timetable and Save Timetable in one place (done) 
   - Remove from 'from' time to 'to' time (done)
   - Make It Responsive in Preview (done)

  Add Some Validation
   - Highlight Period Title if it is repeated or null (done)
   - Disabled All the fields when there is error (done)

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

  static periods = [
    { title: '1', fromTime: '7:30 AM', toTime: '8:30 AM', isBreak: false, isFree: false },
    { title: '2', fromTime: '8:30 AM', toTime: '9:30 AM', isBreak: false, isFree: false },
    { title: 'Break', fromTime: '9:30 AM', toTime: '10:30 AM', isBreak: true, isFree: false },
    { title: '3', fromTime: '10:30 AM', toTime: '11:30 AM', isBreak: false, isFree: false },
    { title: '4', fromTime: '11:30 AM', toTime: '12:30 AM', isBreak: false, isFree: false }
  ]

  static timetable = {
    "Monday": [
      { fromTime: '7:30 AM', toTime: '8:30 AM', teacher: 'Thabo Mokwena', subject: 'English', isBreak: false, isFree: false },
      { fromTime: '8:30 AM', toTime: '9:30 AM', teacher: 'Nomfundo Khumalo', subject: 'Business Studies', isBreak: false, isFree: false },
      { fromTime: '9:30 AM', toTime: '10:30 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '10:30 AM', toTime: '11:30 AM', teacher: 'Sibusiso Ndlovu', subject: 'Mathematics', isBreak: false, isFree: false },
      { fromTime: '11:30 AM', toTime: '12:30 AM', teacher: 'Lerato Moloi', subject: 'Life Sciences', isBreak: false, isFree: false }
    ],
    "Tuesday": [
      { fromTime: '7:30 AM', toTime: '8:30 AM', teacher: 'Lerato Moloi', subject: 'Geography', isBreak: false, isFree: false },
      { fromTime: '8:30 AM', toTime: '9:30 AM', teacher: 'Thabo Mokwena', subject: 'Physical Sciences', isBreak: false, isFree: false },
      { fromTime: '9:30 AM', toTime: '10:30 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '10:30 AM', toTime: '11:30 AM', teacher: 'Sibusiso Ndlovu', subject: 'History', isBreak: false, isFree: false },
      { fromTime: '11:30 AM', toTime: '12:30 AM', teacher: 'Nomfundo Khumalo', subject: 'Accounting', isBreak: false, isFree: false }
    ],
    "Wednesday": [
      { fromTime: '7:30 AM', toTime: '8:30 AM', teacher: 'Lerato Moloi', subject: 'Business Studies', isBreak: false, isFree: false },
      { fromTime: '8:30 AM', toTime: '9:30 AM', teacher: 'Sibusiso Ndlovu', subject: 'Economics', isBreak: false, isFree: false },
      { fromTime: '9:30 AM', toTime: '10:30 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '10:30 AM', toTime: '11:30 AM', teacher: 'Nomfundo Khumalo', subject: 'Information Technology', isBreak: false, isFree: false },
      { fromTime: '11:30 AM', toTime: '12:30 AM', teacher: 'Thabo Mokwena', subject: 'Computer Applications Technology', isBreak: false, isFree: false }
    ],
    "Thursday": [
      { fromTime: '7:15 AM', toTime: '8:15 AM', teacher: 'Lerato Moloi', subject: 'Consumer Studies', isBreak: false, isFree: false },
      { fromTime: '8:15 AM', toTime: '9:15 AM', teacher: 'Sibusiso Ndlovu', subject: 'Tourism', isBreak: false, isFree: false },
      { fromTime: '9:15 AM', toTime: '10:15 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '10:15 AM', toTime: '11:15 AM', teacher: 'Thabo Mokwena', subject: 'Music', isBreak: false, isFree: false },
      { fromTime: '11:15 AM', toTime: '12:15 AM', teacher: 'Nomfundo Khumalo', subject: 'Drama', isBreak: false, isFree: false }
    ],
    "Friday": [
      { fromTime: '7:30 AM', toTime: '8:30 AM', teacher: 'Bongani Nkosi', subject: 'Life Orientation', isBreak: false, isFree: false },
      { fromTime: '8:30 AM', toTime: '9:30 AM', teacher: 'Nompumelelo Dlamini', subject: 'Agricultural Sciences', isBreak: false, isFree: false },
      { fromTime: '9:30 AM', toTime: '10:30 AM', teacher: '', subject: '', isBreak: true, isFree: false },
      { fromTime: '10:30 AM', toTime: '11:30 AM', teacher: 'Jabulani Mbatha', subject: 'Civil Technology', isBreak: false, isFree: false },
      { fromTime: '11:30 AM', toTime: '12:30 AM', teacher: 'Themba Mkhize', subject: 'Electrical Technology', isBreak: false, isFree: false }
    ]
  };

  static initialSetUp() {
    // Sort the Teachers and Subjects
    Data.subjects = Data.subjects.sort((a, b) => a > b ? 1 : -1);
    Data.teachers = Data.teachers.sort((a, b) => a > b ? 1 : -1);

    // Link Teachers with Colors
    const colors = Helper.getColors();
    Data.teachers = Data.teachers.map((teacher, index) => ({ name: teacher, color: colors[index] || '#1b1464' }));
  }

  static getTotalPeriod() {
    return Data.periods.length;
  }

  static getTotalDays() {
    return Object.keys(Data.timetable).length;
  }

  static getPeriodFromScheduleIndex(index) {
    return Data.periods[index].title;
  }

  static getPeriodIndexFromPeriodName(period) {
    return Data.periods.findIndex(p => p.title === period);
  }

  static getPeriodInfoFromRowIndex(rowIndex) {
    const { title, fromTime, toTime } = Data.periods[rowIndex];

    return {
      period: title,
      fromTime: fromTime || '--:--',
      toTime: toTime || '--:--',
    }
  }

  static getScheduleDataFromDayAndPeriod(day, period) {
    // day: Monday, Tuesday, Wednesday, Thrusday, ...
    // period: 1, 2, 3, Break

    const periodIndex = Data.periods.findIndex(p => p.title === period);
    const schedule = Data.timetable[day][periodIndex];

    return {
      fromTime: schedule.fromTime || '--:--',
      toTime: schedule.toTime || '--:--',
      teacher: schedule.teacher || 'Select Teacher',
      subject: schedule.subject || 'Select Subject',
      isBreak: schedule.isBreak,
      isFree: schedule.isFree
    }
  }

  static isDifferentFromDefaultTime(day, period) {
    const periodIndex = Data.periods.findIndex(p => p.title === period);
    const daySchedule = Data.timetable[day][periodIndex];
    const periodSchedule = Data.periods[periodIndex];

    if (daySchedule.fromTime === periodSchedule.fromTime && daySchedule.toTime === periodSchedule.toTime) {
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
    const newSchedule = [];

    Data.periods.forEach(({ fromTime, toTime, isBreak, isFree }) => {
      newSchedule.push({ fromTime, toTime, isBreak, isFree, teacher: '', subject: '' });
    });

    return newSchedule;
  }

  static removeRow(rowIndex) {
    const days = Object.keys(Data.timetable);
    days.forEach(day => Data.timetable[day].splice(rowIndex, 1));
    Data.periods.splice(rowIndex, 1);
  }

  static addRow(rowIndex) {
    Data.periods.splice(rowIndex, 0, Data.getNewPeriod(rowIndex));

    const days = Object.keys(Data.timetable);
    days.forEach(day => {
      Data.timetable[day].splice(rowIndex, 0, Data.getScheduleForPeriod(rowIndex))
    });
  }

  static getNewPeriod(index) {
    const title = Helper.getNextPeriodName();

    if (index === 0) {
      return { title, fromTime: '', toTime: Data.periods[0].fromTime, isBreak: false, isFree: false };
    } else if (index === Data.getTotalPeriod()) {
      return { title, fromTime: Data.periods[index - 1].toTime, toTime: '', isBreak: false, isFree: false };
    } else {
      return { title, fromTime: Data.periods[index - 1].toTime, toTime: Data.periods[index].fromTime, isBreak: false, isFree: false };
    }
  }

  static getScheduleForPeriod(periodIndex) {
    const { fromTime, toTime, isBreak, isFree } = Data.periods[periodIndex];
    return { fromTime, toTime, isBreak, isFree, teacher: '', subject: '' };
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

  static setPeriodTimings(periodName, key, value) {
    const periodIndex = Data.getPeriodIndexFromPeriodName(periodName);
    Data.periods[periodIndex][key] = value;

    // Update The Default Period Timings
    if (key.includes('Time')) {
      const days = Helper.getDaysToUpdateTime(periodName);
      days.forEach(day => Data.timetable[day][periodIndex][key] = value);
    }
  }

  static validatePeriodName(name) {
    if (!name) return false;
    const duplicateName = Data.periods.find(period => period.title === name);
    if (!duplicateName)
      return true;
    else
      return false;
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
      { title: 'Add Day to left ', action: 'add-column-left', iconClass: 'fa-circle-left' },
      { title: 'Add Day to right ', action: 'add-column-right', iconClass: 'fa-circle-right' },
      { title: 'Remove this Day ', action: 'remove-column', iconClass: 'fa-trash-can' }
    ].forEach(list => {
      const li = document.createElement('li');
      li.setAttribute('data-action', list.action);
      ul.append(li);

      li.append(document.createTextNode(list.title));

      const icon = document.createElement('i');
      icon.classList.add('fa-solid', list.iconClass);
      li.append(icon);
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
    tr.setAttribute('data-row-index', index);

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
    scheduleData.color = Data.teachers.find(teacher => teacher.name === scheduleData.teacher)?.color;

    const td = document.createElement('td');
    td.setAttribute("data-period", period);
    td.setAttribute("data-day", day);

    const cellWrapper = document.createElement('div');
    cellWrapper.classList.add('cell-wrapper');
    td.append(cellWrapper);

    // Creating Info View

    const infoView = document.createElement('div');
    infoView.classList.add('info-view');
    scheduleData.isBreak && infoView.classList.add('break');
    scheduleData.isFree && infoView.classList.add('free');
    Data.isDifferentFromDefaultTime(day, period) && infoView.classList.add('time-updated');
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
    subject.append(document.createTextNode(scheduleData.subject === 'Select Subject' ? "S ??" : scheduleData.subject));
    infoView.append(subject);

    const teacher = document.createElement('p');
    teacher.classList.add('teacher');
    teacher.style.backgroundColor = scheduleData.color || '#1b1464';
    teacher.append(document.createTextNode(scheduleData.teacher === 'Select Teacher' ? "T ??" : scheduleData.teacher));
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
    ['Select Teacher', ...Data.teachers.map(teacher => teacher.name)].forEach(teacher => {
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
      { title: ' Add Period above', action: 'add-row-above', iconClass: 'fa-circle-up' },
      { title: ' Add Period below', action: 'add-row-below', iconClass: 'fa-circle-down' },
      { title: ' Remove this Period', action: 'remove-row', iconClass: 'fa-trash-can' }
    ]
      .forEach(list => {
        const li = document.createElement('li');
        li.setAttribute('data-action', list.action);
        ul.append(li);

        const icon = document.createElement('i');
        icon.classList.add('fa-solid', list.iconClass);
        li.append(icon);

        li.append(document.createTextNode(list.title));

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
    periodInput.setAttribute('name', 'title');
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

  static updatePeriodInfo(periodName, key, value) {

    const inputs = UI.tbody.querySelectorAll(`td[data-period='${periodName}'] .edit-view input[name='${key}']`);
    const paragraphs = UI.tbody.querySelectorAll(`td[data-period='${periodName}'] .info-view p.time`);

    const days = Helper.getDaysToUpdateTime(periodName);

    inputs.forEach(input => {
      if (days.includes(input.parentElement.parentElement.parentElement.parentElement.dataset.day)) {
        input.dataset.defaultDate = value;
        input.value = value;
      }
    });

    paragraphs.forEach(p => {
      if (days.includes(p.parentElement.parentElement.parentElement.dataset.day)) {
        let fromTime = p.textContent.split(' to ')[0];
        let toTime = p.textContent.split(' to ')[1];
        if (key === 'fromTime') p.textContent = `${value} to ${toTime}`;
        if (key === 'toTime') p.textContent = `${fromTime} to ${value}`;
      }
    });
  }

  static applyAllInputs(value) {
    const inputs = UI.tbody.querySelectorAll("[name='fromTime'], [name='toTime'], [name='isBreak'], [name='isFree'], [name='subject'], [name='teacher']")
    inputs.forEach(input => {
      value
        ? input.setAttribute('disabled', true)
        : input.removeAttribute('disabled');
    });

    UI.disabledOnBreakOrFree();
  }

  static disabledOnBreakOrFree() {
    const editForms = UI.tbody.querySelectorAll('td .edit-view');
    editForms.forEach(form => {
      const subject = form.querySelector("[name='subject']");
      const teacher = form.querySelector("[name='teacher']");
      const isBreak = form.querySelector("[name='isBreak']");
      const isFree = form.querySelector("[name='isFree']");

      if (isBreak.checked) {
        subject.setAttribute('disabled', true);
        teacher.setAttribute('disabled', true);
        isFree.setAttribute('disabled', true);
      } else if (isFree.checked) {
        subject.setAttribute('disabled', true);
        teacher.setAttribute('disabled', true);
        isBreak.setAttribute('disabled', true);
      }
    });
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
    Helper.handleUpdatePeriodTimings();
    Helper.handleChangePeriodTitle();
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

  static getNextPeriodName() {
    const names = Data.periods.map(p => p.title);
    const filteredNames = names.filter(name => name.includes('Period '));
    if (!filteredNames.length) return 'Period 1';

    const numbers = filteredNames.map(name => parseInt(name.split(' ')[1]));
    return `Period ${Math.max(...numbers) + 1}`;
  }

  static getColors() {
    return [
      '#16a085', '#27ae60', '#2980b9',
      '#8e44ad', '#2c3e50', '#f39c12',
      '#d35400', '#c0392b', '#f0932b',
      '#eb4d4b', '#6ab04c', '#130f40',
      '#4834d4', '#be2edd', '#22a6b3',
      '#0097e6', '#8c7ae6', '#e1b12c',
      '#44bd32', '#c23616', '#718093',
      '#192a56', '#2f3640', '#EA2027',
      '#006266', '#1B1464', '#5758BB',
      '#6F1E51', '#1289A7', '#F97F51',
      '#1B9CFC', '#58B19F', '#2C3A47',
      '#6D214F', '#182C61', '#FC427B',
      '#BDC581', '#82589F', '#3d3d3d',
      '#7158e2', '#17c0eb', '#67e6dc',
      '#3ae374', '#ff9f1a', '#ff3838',
      '#c56cf0', '#2c2c54', '#474787',
      '#227093', '#218c74', '#b33939',
      '#cd6133', '#cc8e35', '#ccae62',
      '#3742fa', '#1e90ff', '#2ed573',
      '#ffa502', '#ff6348', '#ff4757'
    ];
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
        editBtn.innerHTML = `<i class="fa-solid fa-eye"></i> Preview`;
      }
    })
  }

  static addFlatpickrAndSelect2() {
    $('.select2').select2();
    flatpickr('.flatpickr', {
      dateFormat: "h:i K",
      enableTime: true,
      noCalendar: true,
      disableMobile: true,
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
      period = Data.getPeriodIndexFromPeriodName(cell.dataset.period),
      name = e.target.name,
      type = e.target.type,
      value = type == 'checkbox' ? e.target.checked : e.target.value;

    Data.timetable[day][period][name] = value;

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
          const rowIndex = Data.getPeriodIndexFromPeriodName(period);

          action.includes('above') && Data.addRow(rowIndex);
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

  static handleUpdatePeriodTimings() {
    const periodInputs = UI.tbody.querySelectorAll("th :is(input[name='fromTime'], input[name='toTime'])");

    periodInputs.forEach(periodInput => {
      periodInput.addEventListener('input', () => {
        const periodName = periodInput.parentElement.parentElement.parentElement.dataset.period;
        const fieldName = periodInput.name;
        const fieldValue = periodInput.value;

        Data.setPeriodTimings(periodName, fieldName, fieldValue);
        UI.updatePeriodInfo(periodName, fieldName, fieldValue);
      });
    });
  }

  static handleChangePeriodTitle() {

    const inputs = UI.tbody.querySelectorAll("th input[name='title']");

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        const periodTitle = input.parentElement.parentElement.parentElement.dataset.period;
        const value = input.value;

        const periods = Data.periods.map(p => p.title);
        const values = Array.from(inputs).map(input => input.value);

        if (value && !periods.includes(value)) {

          // Set Period Title in Data
          const periodIndex = Data.periods.findIndex(p => p.title === periodTitle);
          Data.periods[periodIndex].title = value;

          // Set period Title in UI
          const selectors = UI.tbody.querySelectorAll(`[data-period='${periodTitle}']`);
          selectors.forEach(selector => selector.dataset.period = value);

          // check if there is some issue with others
          // means when input data does not equals to periodInfo
          const dataTitles = Array.from(inputs).map(input => input.parentElement.parentElement.parentElement.dataset.period);

          // is Values unique then update all the data
          if (values.length === [... new Set(values)].length) {
            for (let i = 0; i <= values.length; i++) {
              if (values[i] !== dataTitles[i]) {
                // update the data
                Data.periods[i].title = values[i];
                // update the UI
                let selectors = UI.tbody.querySelectorAll(`tr[data-row-index='${i}'] [data-period='${dataTitles[i]}']`);
                selectors.forEach(selector => selector.dataset.period = values[i]);
              }
            }
          }
        }

        // Add or remove error class when its empty or repeated
        for (let i = 0; i < values.length; i++) {
          if (values.filter(value => value === values[i]).length > 1) {
            inputs[i].classList.add('error');
          } else {
            if (values[i]) {
              inputs[i].classList.remove('error');
            } else {
              inputs[i].classList.add('error');
            }
          }
        }
        const errorInputs = UI.tbody.querySelectorAll("th [name='title'].error");
        UI.applyAllInputs(errorInputs.length ? true : false);
      });
    })
  }

  static getDaysToUpdateTime(periodName) {
    const cells = UI.tbody.querySelectorAll(`td[data-period='${periodName}'] .info-view`);
    const days = [];
    cells.forEach(cell => {
      if (!cell.classList.contains('time-updated')) {
        days.push(cell.parentElement.parentElement.dataset.day);
      }
    });
    return days;
  }

  static handleChangeOnBreak() {
    const breakInputs = UI.tbody.querySelectorAll("td .break input[name='isBreak']");
    breakInputs.forEach(input => {
      input.addEventListener('change', () => {
        const editView = input.parentElement.parentElement;
        const inputs = {
          subject: editView.querySelector(".subject select[name='subject']"),
          teacher: editView.querySelector(".teacher select[name='teacher']"),
          isFree: editView.querySelector(".free input[name='isFree']"),
        };

        if (input.checked) {
          inputs.subject.disabled = true;
          inputs.teacher.disabled = true;
          inputs.isFree.disabled = true;
        } else {
          inputs.subject.disabled = false;
          inputs.teacher.disabled = false;
          inputs.isFree.disabled = false;
        }
      })
    });
  }

  static handleChangeOnFree() {
    const freeInputs = UI.tbody.querySelectorAll("td .free input[name='isFree']");
    freeInputs.forEach(input => {
      input.addEventListener('change', () => {
        const editView = input.parentElement.parentElement;
        const inputs = {
          subject: editView.querySelector(".subject select[name='subject']"),
          teacher: editView.querySelector(".teacher select[name='teacher']"),
          isBreak: editView.querySelector(".break input[name='isBreak']"),
        };

        if (input.checked) {
          inputs.subject.disabled = true;
          inputs.teacher.disabled = true;
          inputs.isBreak.disabled = true;
        } else {
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
  Data.initialSetUp();

  // Load UI
  UI.loadTableHeader();
  UI.loadTableBody();

  // Handle All Event Listeners
  Helper.addFlatpickrAndSelect2();
  Helper.handleFormDataChange();
  Helper.handleOptions();
  Helper.handleDayRename();
  Helper.handleUpdatePeriodTimings();
  Helper.handleChangePeriodTitle();
  Helper.handleChangeOnBreak();
  Helper.handleChangeOnFree();
}

main();