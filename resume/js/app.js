

    var bar = new ProgressBar.Circle(container, {
      color: '#0AA1DA',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 6,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#0AA1DA', width: 1 },
      to: { color: '#0AA1DA', width: 6 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
        circle.setText('Design');

      }
    });

    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '1rem';
    bar.text.style.fontWeight = 'bolder';
    bar.text.style.color= 'black';

    //bar.animate(1.0);


  var bar2 = new ProgressBar.Circle(container2, {
    color: '#0AA1DA',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#0AA1DA', width: 1 },
    to: { color: '#0AA1DA', width: 6 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('Concepts');

    }
  });

  bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar2.text.style.fontSize = '1rem';
  bar2.text.style.fontWeight = 'bolder';
  bar2.text.style.color= 'black';



  var bar3 = new ProgressBar.Circle(container3, {
    color: '#0AA1DA',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#0AA1DA', width: 1 },
    to: { color: '#0AA1DA', width: 6 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('Art Direction');

    }
  });

  bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar3.text.style.fontSize = '1rem';
  bar3.text.style.fontWeight = 'bolder';
  bar3.text.style.color= 'black';
  bar3.text.style.textAlign = 'center';


  var bar4 = new ProgressBar.Circle(container4, {
    color: '#0AA1DA',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#0AA1DA', width: 1 },
    to: { color: '#0AA1DA', width: 6 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('Teamwork');

    }
  });

  bar4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar4.text.style.fontSize = '1rem';
  bar4.text.style.fontWeight = 'bolder';
  bar4.text.style.color= 'black';


  var bar5 = new ProgressBar.Circle(container5, {
    color: '#0AA1DA',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#0AA1DA', width: 1 },
    to: { color: '#0AA1DA', width: 6 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.setText('Management');
    }
  });

  bar5.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar5.text.style.fontSize = '1rem';
  bar5.text.style.fontWeight = 'bolder';
  bar5.text.style.color= 'black';


  var waypoint = new Waypoint({
    element: document.querySelector(".circle-container"),
    handler: function(direction) {
      bar.animate(1.0);
      bar2.animate(0.9);
      bar3.animate(0.7);
      bar4.animate(0.6);
      bar5.animate(0.5);
    },
      offset: '75%'
  });



  //********************************************************************************


  var a = new ProgressBar.Line(line, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#0AA1DA',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#0AA1DA'},
    to: {color: '#0AA1DA'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  });


  var b = new ProgressBar.Line(line, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0AA1DA',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0AA1DA'},
  to: {color: '#0AA1DA'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var c = new ProgressBar.Line(line, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0AA1DA',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0AA1DA'},
  to: {color: '#0AA1DA'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var d = new ProgressBar.Line(line, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0AA1DA',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0AA1DA'},
  to: {color: '#0AA1DA'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var e = new ProgressBar.Line(line, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0AA1DA',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0AA1DA'},
  to: {color: '#0AA1DA'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

  var f = new ProgressBar.Line(line, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0AA1DA',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#0AA1DA'},
  to: {color: '#0AA1DA'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

var waypoint2 = new Waypoint({
  element: document.getElementById("software"),
  handler: function(direction) {
    a.animate(1.0);
    b.animate(0.9);
    c.animate(0.8);
    d.animate(0.7);
    e.animate(0.6);
    f.animate(0.5);
  },
    offset: '75%'
});
