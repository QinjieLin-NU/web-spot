sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
apt update -y
apt install -y ros-melodic-desktop-full

#install dependency
apt install -y ros-melodic-joint-state-publisher-gui ros-melodic-interactive-marker-twist-server ros-melodic-robot-state-publisher
apt-get install -y ros-melodic-rosbridge-suite
apt-get install -y python-pip
pip install  rosdep