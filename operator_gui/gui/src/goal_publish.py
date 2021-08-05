#!/usr/bin/env python  
import roslib
import rospy
import math
import geometry_msgs.msg
import move_base_msgs.msg
import std_msgs.msg
import time
if __name__ == '__main__':
    rospy.init_node('pose_tf_listener')
    pub = rospy.Publisher('/move_base/goal', move_base_msgs.msg.MoveBaseActionGoal, queue_size=10)
    pub_pose =  geometry_msgs.msg.PoseStamped()
    pub_pose.header.frame_id = 'map'
    pub_header = std_msgs.msg.Header()
    pub_header.frame_id = 'map'
    rate = rospy.Rate(10.0)
    while not rospy.is_shutdown():
        pub_msg = move_base_msgs.msg.MoveBaseActionGoal()
        pub_msg.header = pub_header
        pub_msg.goal.target_pose = pub_pose
        pub.publish(pub_msg)
        rate.sleep()
        time.sleep(10)