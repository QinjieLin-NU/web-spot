var ros = new ROSLIB.Ros({
  // url : 'ws://localhost:9090'
  url : 'ws://192.168.10.68:9090'
});

ros.on('connection', function() {
  // document.getElementById("status").innerHTML = "Connected";
});

ros.on('error', function(error) {
  // document.getElementById("status").innerHTML = "Error";
});

ros.on('close', function() {
  // document.getElementById("status").innerHTML = "Closed";
});

cmd_vel_listener = new ROSLIB.Topic({
    ros : ros,
    name : "/cmd_vel", //"/navigation_velocity_smoother/raw_cmd_vel",
    messageType : 'geometry_msgs/Twist'
  });

move = function (linear, angular) {
  var twist = new ROSLIB.Message({
    linear: {
      x: linear,
      y: 0,
      z: 0
    },
    angular: {
      x: 0,
      y: 0,
      z: angular
    }
  });
  cmd_vel_listener.publish(twist);
}

  createJoystick = function () {
      var options = {
        zone: document.getElementById('zone_joystick'),
        threshold: 0.1,
        position: { left: 520+'pt', top: 400+'pt' },
        mode: 'static',
        size: 150,
        color: 'DodgerBlue',
      };
        manager = nipplejs.create(options);

        linear_speed = 0;
        angular_speed = 0;

        self.manager.on('start', function (event, nipple) {
            timer = setInterval(function () {
                move(linear_speed, angular_speed);
            }, 25);
            });

        self.manager.on('move', function (event, nipple) {
        max_linear = 0.2; // m/s
        max_angular = 0.5; // rad/s
        max_distance = 75.0; // pixels;
        linear_speed = Math.sin(nipple.angle.radian) * max_linear * nipple.distance/max_distance;
        angular_speed = -Math.cos(nipple.angle.radian) * max_angular * nipple.distance/max_distance;
        });

        self.manager.on('end', function () {
        if (timer) {
            clearInterval(timer);
        }
        self.move(0, 0);
        });
  }