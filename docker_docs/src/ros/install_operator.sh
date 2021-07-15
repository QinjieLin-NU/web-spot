cd /root/
git clone https://github.com/QinjieLin-NU/operator-gui.git
cd /root/operator-gui/
cp gui/src/cors_server.py /opt/ros/melodic/share/.
cp -r /root/spot_ws/src/web-spot/spot_ros/spot_description /opt/ros/melodic/share/.

apt-get update -y && \
apt-get install -y ros-melodic-web-video-server && \
apt-get install -y ros-melodic-tf2-web-republisher