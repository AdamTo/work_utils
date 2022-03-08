const time_data = `14:00 - 18:20
20:30 - 21:00
22:00 - 00:45`;

const create_date_array = (time_data) => {
  const time_array = time_data.split("\n");
  for (let i = 0; i < time_array.length; i++) {
    time_array[i] = time_array[i].split(" - ");
    for (let j = 0; j < 2; j++) {
      time_array[i][j] = parseFloat(time_array[i][j].replace(":", "."));
    }
  }
  return time_array;
};

const round_time = (time) => {
  rest = (time % 1).toFixed(2);
  if (rest > 0.7) {
    return parseInt(time) + 1;
  }
  if (rest <= 0.3) {
    return parseInt(time);
  } else {
    return parseInt(time) + 0.5;
  }
};

const get_hours = (time) => {
  let timetime_spent = 0;

  for (let hour of time) {
    if (hour[0] > hour[1]) {
      hour[1] += 24;
    }
    for (let i = 0; i < 2; i++) {
      hour[i] =
        parseInt(hour[i]) +
        (parseFloat((hour[i] - parseInt(hour[i])).toFixed(3)) * 100) / 60;
    }
    timetime_spent += hour[1] - hour[0];
  }
  console.log(round_time(timetime_spent.toFixed(1)));
};

get_hours(create_date_array(time_data));
