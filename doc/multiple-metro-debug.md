# React Native 0.63 running on device by other port solution

React Native Metro bundler is runs on port 8081. And very unlucky my working machine is running a McAfee antivirus with the port 8081.

On React Native official sites there are provide two solution Terminating a process on port 8081 or Using a port other than 8081 .

Will the first solution Terminating a process is not work, even is work this is not a good solution since you will terminal you Anti virus protection on you machine. But when running McAfee antivirus the `kill -9 <PID>` command is not work.

Seconds solution using a port other than 8081 this is more better solution . But there are something unclear if you run on x-code their are still have the 8081 port on use error. And i can't find the node\_modules/react-native/React/React.xcodeproj/project.pbxproj file to change the 8081.

After try and error finally found a solution.

# For iOS Device

**0) Start React Native Metro with port 8070**

`npx react-native start --port=8070`

![](https://childofcode.com/content/images/2020/10/start.png)

**1) Open react*native*learning.xcworkspace on project ios folder**

![](https://childofcode.com/content/images/2020/10/ios-project.png)

**2) Search and change 8081 on workspace replace 8081 to 8070 below is the files need to change**

*   RCTBridgeDelegate.h
*   RTCDefines.h
*   RCTInspectorDevServerHelper.mm
*   RCTDevMenu.mm

![](https://childofcode.com/content/images/2020/10/project-8081.png)

**3) Go to Signing & Capabilities On project target and test target Update you own developer detail Signing on Team > xxx(company)**

![](https://childofcode.com/content/images/2020/10/sign1.png) ![](https://childofcode.com/content/images/2020/10/sign2.png)

**4)Go to Build Phases Select "Start Packager"
Change the Shell script 8081 to 8070**

![](https://childofcode.com/content/images/2020/10/shell.png)

**5) Click run on x-code and launch apps on device**

You apps should running on connected iOS device now.

**6) Open apps and shake open React Native developer menu. Click "Reload" on first launch this will enable the Fast Refresh function if not the Fast Refresh will not working.**

Command to debug on simulator
`npx react-native run-ios --port 8070`

Command to debug on Device
`npx react-native run-ios --device "MyiPhoneDevice" --port 8070`

# For Android Device

Android is more easy than iOS, Just need change the port on command and reverse the tcp port.

**0) Start React Native Metro with port 8070**

`npx react-native start --port=8070`

**1) Open an Existing Project > go to react native project > android folder**

![](https://childofcode.com/content/images/2020/10/android-studio.png)

![](https://childofcode.com/content/images/2020/10/android.png)

**2) Reverse the tcp port by below command**

`adb reverse tcp:8081 tcp:8070`

**3) Build on Android Studio**

You apps should working good on android device with Fast Refresh.

Command to debug on emulator
`npx react-native run-android --port 8070`

Command to debug on specific connect device
`npx react-native run-android --deviceId=11AA22A3C --port 8070`

You can find deviceId with below command
`adb devices`

**Dependencies version**

react 16.13.1
react-native 0.63.3

**Developer IDE version**

Xcode 12.0.1
Android Studio Version 4.1

**Mobile device operating system**

Android 11
iOS 14.0.1