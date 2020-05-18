acf.add_filter('color_picker_args', function (args, $field) {
  // do something to args
  args.palettes = [
    '#1c3773',
    '#3fafe1',
    '#e5e5e5',
    '#0296c5',
    '#ffffff',
    '#f3f7fb',
    '#f9745f', //Orange?
  ];

  // return
  return args;
});