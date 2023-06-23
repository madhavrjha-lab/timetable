/*
- Disable the subject and teacher field on break (done)
- On Submit Form update the object and view (done)
- if it is break then disable the UI (done)
- Sort the Subject and Teachers in Option (done)
- Add new Row (start time would be end time of last row) (done)
- Delete last Row (ask before deleting) (done)
- Delete Cell Button (done)

- Short cut for edit all at once and save all at once.
*/




class Timetable {

  static subjects = [
    "Mathematics",
    "History",
    "English",
    "Science",
    "Geography",
    "Computer Science",
    "Physics",
    "Chemistry",
    "Biology",
    "Art",
    "Physical Education",
    "Music",
    "Foreign Language",
    "Economics",
    "Literature",
    "Arts and Culture"
  ];

  static teachers = [
    "Mr. Johnson",
    "Mrs. Smith",
    "Ms. Davis",
    "Mr. Thompson",
    "Mrs. Wilson",
    "Ms. Anderson",
    "Mr. Martinez",
    "Mrs. Clark",
    "Ms. Taylor",
    "Mr. Rodriguez",
    "Mrs. Brown",
    "Ms. Garcia",
    "Mr. Thomas",
    "Mrs. Robinson",
    "Ms. Lewis",
    "itadmin o itadmin"
  ];

  static timetable = {
    monday: [
      {
        fromTime: "12:05 AM",
        toTime: "12:54 AM",
        teacher: "itadmin o itadmin",
        subject: "Arts and Culture"
      },
      {
        fromTime: "12:41 AM",
        toTime: "02:00 AM",
        subject: "Break"
      },
      {
        fromTime: "12:05 AM",
        toTime: "12:54 AM",
        teacher: "itadmin o itadmin",
        subject: "Arts and Culture"
      }
    ],
    tuesday: [
      {
        fromTime: "12:05 AM",
        toTime: "12:54 AM",
        teacher: "itadmin o itadmin",
        subject: "Arts and Culture"
      },
      {
        fromTime: " 12:41 AM",
        toTime: "02:00 AM",
        subject: "Break"
      },
      {
        fromTime: "12:05 AM",
        toTime: "12:54 AM",
        teacher: "itadmin o itadmin",
        subject: "Arts and Culture"
      }
    ],
    wednesday: [
      {
        fromTime: "12:05 AM",
        toTime: "12:54 AM",
        teacher: "itadmin o itadmin",
        subject: "Arts and Culture"
      },
      {
        fromTime: " 12:41 AM",
        toTime: "02:00 AM",
        subject: "Break"
      },
      {
        fromTime: "12:05 AM",
        toTime: "12:54 AM",
        teacher: "itadmin o itadmin",
        subject: "Arts and Culture"
      }
    ],
    thursday: [
      {
        fromTime: "12:05 AM",
        toTime: "12:54 AM",
        teacher: "itadmin o itadmin",
        subject: "Arts and Culture"
      },
      {
        fromTime: " 12:41 AM",
        toTime: "02:00 AM",
        subject: "Break"
      },
      {
        fromTime: "12:05 AM",
        toTime: "12:54 AM",
        teacher: "itadmin o itadmin",
        subject: "Arts and Culture"
      }
    ],
    friday: [
      {
        fromTime: "12:05 AM",
        toTime: "12:54 AM",
        teacher: "itadmin o itadmin",
        subject: "Arts and Culture"
      },
      {
        fromTime: " 12:41 AM",
        toTime: "02:00 AM",
        subject: "Break"
      },
      {
        fromTime: "12:05 AM",
        toTime: "12:54 AM",
        teacher: "itadmin o itadmin",
        subject: "Arts and Culture"
      }
    ]
  }

  static initialSetUp() {
    // Sort the Teachers and Subjects
    Timetable.subjects = Timetable.subjects.sort((a, b) => a > b ? 1 : -1);
    Timetable.teachers = Timetable.teachers.sort((a, b) => a > b ? 1 : -1);
  }

  static loadTable(callback) {
    const totalPeriod = Timetable.__getTotalPeriod();
    const tableBody = document.querySelector('.time-table-body tbody')

    // Create Rows
    for (let period = 1; period <= totalPeriod; period++) {
      const tr = Timetable.__createRow(period);
      tableBody.appendChild(tr);
    }

    callback();
  }

  static handleSwapCellView() {
    const editButtons = document.querySelectorAll('.time-table-body .edit-btn');
    const submitButtons = document.querySelectorAll('.time-table-body .save-period-btn');

    editButtons.forEach(editBtn => {
      editBtn.addEventListener('click', () => {
        const cellInfo = editBtn.parentElement;
        const editForm = editBtn.parentElement.parentElement.querySelector('.form');

        // Swap the View
        cellInfo.classList.add('hide');
        editForm.classList.remove('hide');
      });
    });

    submitButtons.forEach(submitBtn => {
      submitBtn.addEventListener('click', () => {
        const editForm = submitBtn.parentElement.parentElement;
        const cellInfo = submitBtn.parentElement.parentElement.parentElement.querySelector('.info');

        // Update View
        const data = Timetable.__getEditCellData(editForm);
        Timetable.__setInfoData(cellInfo, data);

        // Update Object
        const day = cellInfo.parentElement.dataset.day;
        const period = cellInfo.parentElement.parentElement.dataset.period;
        Timetable.__updateObject(data, period, day);

        // Swap View
        cellInfo.classList.remove('hide');
        editForm.classList.add('hide');
      });
    })
  }

  static handleDeleteCellData() {
    const deleteBtns = document.querySelectorAll('.time-table-body tbody .delete-btn');
    deleteBtns.forEach(deleteBtn => {
      deleteBtn.addEventListener('click', () => {
        const cellInfo = deleteBtn.parentElement;
        const day = deleteBtn.parentElement.parentElement.dataset.day;
        const period = deleteBtn.parentElement.parentElement.parentElement.dataset.period;
        const data = Timetable.timetable[day][period - 1];
        data.subject = '';
        data.teacher = '';
        Timetable.__setInfoData(cellInfo, data);
      })
    });
  }

  static disableEditFormOnBreak() {
    const isBreakCheckboxes = document.querySelectorAll(".time-table-body tbody .form [name='is-break']");
    isBreakCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const teacherInput = checkbox.parentElement.parentElement.querySelector("select[name='subject-name']");
        const subjectInput = checkbox.parentElement.parentElement.querySelector("select[name='teacher-name']");
        checkbox.checked
          ? teacherInput.disabled = subjectInput.disabled = true
          : teacherInput.disabled = subjectInput.disabled = false
      })
    });
  }

  static handleAddNewPeriod() {
    const addNewPeriodbtn = document.querySelector('.time-table-body tfoot .add-period-btn');

    addNewPeriodbtn.addEventListener('click', () => {
      Timetable.__addNewPeriodInObject();
      Timetable.refreshTable(afterTableLoad);
    });
  }

  static handleRemoveLastPeriod() {
    const addNewPeriodbtn = document.querySelector('.time-table-body tfoot .remove-period-btn');

    addNewPeriodbtn.addEventListener('click', () => {
      if (!confirm('Are you sure to delete the last period?')) return;
      Timetable.__removeLastPeriodInObject();
      Timetable.refreshTable(afterTableLoad);
    });
  }

  static refreshTable(callback) {
    const totalPeriod = Timetable.__getTotalPeriod();
    const tableBody = document.querySelector('.time-table-body tbody')

    // Remove all rows
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }

    // Create Rows
    for (let period = 1; period <= totalPeriod; period++) {
      const tr = Timetable.__createRow(period);
      tableBody.appendChild(tr);
    }

    callback();
  }

  static async handleSaveTimeTable() {
    try {
      const response = await fetch('url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${'<your-access-token>'}`
        },
        credentials: 'include',
        body: JSON.stringify(Timetable.timetable)
      });
      if (response.ok) alert('Timetable Saved');
    } catch (err) {
      console.error(err.message);
    }
  }

  static __addNewPeriodInObject() {
    const totalPeriod = Timetable.__getTotalPeriod();

    Timetable.timetable.monday.push({
      fromTime: Timetable.timetable.monday[totalPeriod - 1]?.toTime || '',
      toTime: '',
      teacher: '',
      subject: ''
    });
    Timetable.timetable.tuesday.push({
      fromTime: Timetable.timetable.tuesday[totalPeriod - 1]?.toTime || '',
      toTime: '',
      teacher: '',
      subject: ''
    });
    Timetable.timetable.wednesday.push({
      fromTime: Timetable.timetable.wednesday[totalPeriod - 1]?.toTime || '',
      toTime: '',
      teacher: '',
      subject: ''
    });
    Timetable.timetable.thursday.push({
      fromTime: Timetable.timetable.thursday[totalPeriod - 1]?.toTime || '',
      toTime: '',
      teacher: '',
      subject: ''
    });
    Timetable.timetable.friday.push({
      fromTime: Timetable.timetable.friday[totalPeriod - 1]?.toTime || '',
      toTime: '',
      teacher: '',
      subject: ''
    });
  }

  static __removeLastPeriodInObject() {
    Timetable.timetable.monday.pop();
    Timetable.timetable.tuesday.pop();
    Timetable.timetable.wednesday.pop();
    Timetable.timetable.thursday.pop();
    Timetable.timetable.friday.pop();
  }

  static __updateObject(data, period, day) {
    const cellObj = Timetable.timetable[day][period - 1];
    cellObj.fromTime = data.fromTime;
    cellObj.toTime = data.toTime;
    cellObj.subject = data.isBreak ? 'Break' : data.subject;
    cellObj.teacher = data.isBreak ? null : data.teacher;
  }

  static __getEditCellData(formElement) {
    const fromTime = formElement.querySelector("[name='time-from']").value;
    const toTime = formElement.querySelector("[name='time-to']").value;
    const teacher = formElement.querySelector("[name='teacher-name']").value;
    const subject = formElement.querySelector("[name='subject-name']").value;
    const isBreak = formElement.querySelector("[name='is-break']").checked;

    return { fromTime, toTime, teacher, subject, isBreak };
  }

  static __setInfoData(cellInfo, data) {
    const { fromTime, toTime, teacher, subject, isBreak } = data;
    isBreak ? cellInfo.classList.add('break') : cellInfo.classList.remove('break')
    cellInfo.querySelector('.time-from').innerHTML = `${fromTime}`;
    cellInfo.querySelector('.time-to').innerHTML = `${toTime}`;
    cellInfo.querySelector('.subject-name').innerHTML = `${subject}`;
    cellInfo.querySelector('.teacher-name').innerHTML = `${teacher}`;
  }

  static __getTotalPeriod() {
    return Math.max(
      parseInt(Timetable.timetable?.monday?.length),
      parseInt(Timetable.timetable?.tuesday?.length),
      parseInt(Timetable.timetable?.wednesday?.length),
      parseInt(Timetable.timetable?.thursday?.length),
      parseInt(Timetable.timetable?.friday?.length)
    );
  }

  static __getBreakPeriod() {
    const periods = Object.values(Timetable.timetable);
    const breakPeriods = periods.map(period => period.findIndex(p => p.subject.toLowerCase() === 'break'));
    return breakPeriods[0] + 1;
  }

  static __createRow(period) {
    const tr = document.createElement('tr');
    tr.setAttribute('data-period', `${period}`);

    const td = document.createElement('td');
    td.innerText = `${period}`;
    tr.appendChild(td);

    const tdMonday = Timetable.__createCell(period, 'monday');
    const tdTuesday = Timetable.__createCell(period, 'tuesday');
    const tdWednesday = Timetable.__createCell(period, 'wednesday');
    const tdThrusday = Timetable.__createCell(period, 'thursday');
    const tdFriday = Timetable.__createCell(period, 'friday');

    tr.appendChild(tdMonday);
    tr.appendChild(tdTuesday);
    tr.appendChild(tdWednesday);
    tr.appendChild(tdThrusday);
    tr.appendChild(tdFriday);

    return tr;
  }

  static __createCell(period, day) {
    const td = document.createElement('td');
    td.setAttribute('data-day', day);
    const form = Timetable.__createForm(period, day);
    const info = Timetable.__createInfo(period, day);
    td.appendChild(form);
    td.appendChild(info);
    return td;
  }

  static __createForm(period, day) {
    const form = document.createElement('div');
    form.classList.add('form', 'hide');

    const cellData = Timetable.__getCellDataFromObj(period, day);

    const timeDiv = Timetable.__createTimeInput(cellData);
    form.appendChild(timeDiv);
    const teacherNameDiv = Timetable.__createTeacherInput(cellData);
    form.appendChild(teacherNameDiv);
    const subjectNameDiv = Timetable.__createSubjectInput(cellData);
    form.appendChild(subjectNameDiv);
    const checkIsBreakDiv = Timetable.__createIsBreakInput(cellData, period, day);
    form.appendChild(checkIsBreakDiv);
    const submitDiv = Timetable.__createSubmitEditDiv();
    form.appendChild(submitDiv);

    return form;
  }

  static __createSubmitEditDiv() {
    const submitDiv = document.createElement('div');
    submitDiv.classList.add('submit');

    const button = document.createElement('button');
    button.classList.add('save-period-btn');

    const icon = document.createElement('i');
    icon.classList.add('fa-regular', 'fa-floppy-disk');

    button.appendChild(icon);
    button.appendChild(document.createTextNode(' Save Period'));
    submitDiv.appendChild(button);

    return submitDiv;
  }

  static __createIsBreakInput(cellData, period, day) {
    const checkBreakDiv = document.createElement('div');
    checkBreakDiv.classList.add('check-break');

    const isBreakInput = document.createElement('input');
    isBreakInput.setAttribute('type', 'checkbox');
    cellData.subject.toLowerCase() === 'break' ? isBreakInput.setAttribute('checked', true) : null;
    isBreakInput.setAttribute('name', 'is-break');
    isBreakInput.setAttribute('id', `${day}-${period}`);

    const isBreakLabel = document.createElement('label');
    isBreakLabel.setAttribute('for', `${day}-${period}`);
    isBreakLabel.appendChild(document.createTextNode('is Break'));

    checkBreakDiv.appendChild(isBreakInput);
    checkBreakDiv.appendChild(isBreakLabel);

    return checkBreakDiv;
  }

  static __createSubjectInput(data) {
    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subject-name');

    const subjectSelect = document.createElement('select');
    subjectSelect.classList.add('select2');
    subjectSelect.disabled = data.subject.toLowerCase() === 'break' ? true : false;
    subjectSelect.setAttribute('name', 'subject-name');

    const subjectOption = document.createElement('option');
    subjectOption.setAttribute('disabled', true);
    subjectOption.setAttribute('selected', true);
    subjectOption.appendChild(document.createTextNode('Select Subject'));
    subjectSelect.appendChild(subjectOption);

    Timetable.subjects.forEach(subject => {
      const subjectOption = document.createElement('option');
      subject === data.subject ? subjectOption.setAttribute('selected', true) : null;
      subjectOption.appendChild(document.createTextNode(subject));

      subjectSelect.appendChild(subjectOption);
    });

    subjectDiv.appendChild(subjectSelect);
    return subjectDiv;
  }

  static __createTeacherInput(data) {
    const teacherDiv = document.createElement('div');
    teacherDiv.classList.add('teacher-name');

    const teacherSelect = document.createElement('select');
    teacherSelect.classList.add('select2');
    teacherSelect.disabled = data.subject.toLowerCase() === 'break' ? true : false;
    teacherSelect.setAttribute('name', 'teacher-name');

    const teacherOption = document.createElement('option');
    teacherOption.setAttribute('disabled', true);
    teacherOption.setAttribute('selected', true);
    teacherOption.appendChild(document.createTextNode('Select Teacher'));
    teacherSelect.appendChild(teacherOption);

    Timetable.teachers.forEach(teacher => {
      const teacherOption = document.createElement('option');
      teacher === data.teacher ? teacherOption.setAttribute('selected', true) : null;
      teacherOption.appendChild(document.createTextNode(teacher));

      teacherSelect.appendChild(teacherOption);
    });

    teacherDiv.appendChild(teacherSelect);
    return teacherDiv;
  }

  static __createTimeInput(data) {
    const timeDiv = document.createElement('div');
    timeDiv.classList.add('time');

    const timeFromInput = document.createElement('input');
    timeFromInput.classList.add('flatpickr');
    timeFromInput.setAttribute('type', 'time');
    timeFromInput.setAttribute('name', 'time-from');
    timeFromInput.setAttribute('placeholder', 'Starts At');
    timeFromInput.setAttribute('data-default-date', `${data.fromTime}`);

    const sepraterSpan = document.createElement('span');
    sepraterSpan.appendChild(document.createTextNode('-'));

    const timeToInput = document.createElement('input');
    timeToInput.classList.add('flatpickr');
    timeToInput.setAttribute('type', 'time');
    timeToInput.setAttribute('name', 'time-to');
    timeToInput.setAttribute('placeholder', 'Ends At');
    timeToInput.setAttribute('data-default-date', `${data.toTime}`);

    timeDiv.appendChild(timeFromInput);
    timeDiv.appendChild(sepraterSpan);
    timeDiv.appendChild(timeToInput);

    return timeDiv;
  }

  static __createInfo(period, day) {
    const cellData = Timetable.__getCellDataFromObj(period, day);
    const isBreak = cellData.subject.toLowerCase() === 'break';

    const p = document.createElement('p');
    p.classList.add('info');
    isBreak && p.classList.add('break')

    const editSpan = document.createElement('span');
    editSpan.classList.add('edit-btn');
    editSpan.setAttribute('title', 'Edit');

    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pencil');
    editSpan.appendChild(editIcon);

    const deleteSpan = document.createElement('span');
    deleteSpan.classList.add('delete-btn');
    deleteSpan.setAttribute('title', 'Delete');

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash-can');
    deleteSpan.appendChild(deleteIcon);

    const timeFromSpan = document.createElement('span');
    timeFromSpan.classList.add('time-from');
    timeFromSpan.appendChild(document.createTextNode(`${cellData.fromTime}`));

    const timeToSpan = document.createElement('span');
    timeToSpan.classList.add('time-to');
    timeToSpan.appendChild(document.createTextNode(`${cellData.toTime}`));

    const breakSpan = document.createElement('span');
    breakSpan.classList.add('break');
    breakSpan.appendChild(document.createTextNode('Break'));

    const teacherName = document.createElement('span');
    teacherName.classList.add('teacher-name');
    teacherName.appendChild(document.createTextNode(`${cellData.teacher}`));

    const subjectName = document.createElement('span');
    subjectName.classList.add('subject-name');
    subjectName.appendChild(document.createTextNode(`${cellData.subject}`));

    p.appendChild(editSpan);
    p.appendChild(deleteSpan);
    p.appendChild(timeFromSpan);
    p.appendChild(document.createTextNode(' - '));
    p.appendChild(timeToSpan);
    p.appendChild(document.createElement('br'));
    p.appendChild(breakSpan);
    p.appendChild(teacherName);
    p.appendChild(document.createElement('br'));
    p.appendChild(subjectName);

    return p;
  }

  static __getCellDataFromObj(period, day) {
    return Timetable.timetable[day][period - 1];
  }
}

// Helper Functions

function afterTableLoad() {
  Timetable.handleSwapCellView();
  Timetable.handleDeleteCellData();
  Timetable.disableEditFormOnBreak();

  $('.select2').select2();
  flatpickr('.flatpickr', {
    dateFormat: "h:i K",
    enableTime: true,
    noCalendar: true
  });
}

// Main Executions

async function main() {
  Timetable.initialSetUp();
  Timetable.loadTable(afterTableLoad);
  Timetable.handleAddNewPeriod();
  Timetable.handleRemoveLastPeriod();
  Timetable.handleSaveTimeTable();
}

main();