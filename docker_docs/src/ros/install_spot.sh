#install dependency
apt install -y ros-melodic-joint-state-publisher-gui ros-melodic-interactive-marker-twist-server ros-melodic-robot-state-publisher
apt-get install -y ros-melodic-rosbridge-suite

#catkin_make packages
cd /root
mkdir spot_ws
mkdir spot_ws/src
cd spot_ws/src
git clone https://github.com/QinjieLin-NU/web-spot.git
cd /root/spot_ws
apt-get install -y python-pip
pip install  rosdep
rosdep init
rosdep update
rosdep install --from-paths src --ignore-src -r -y
source /opt/ros/melodic/setup.bash && \
catkin_make

