# Basic remote control for Linux

This app can emulate key press from web page opened in your mobile device and send it to active window on your computer.

## Requierements

- Linux OS
- Installed Python
- Installed xvkbd - Software keyboard for Linux - from repositories
- Mobile device and computer connected to same network (wifi)

## How to run Remote Control

- Clome the repo
- run *python ./remoteControl.py*
- Search for local IP adress of your computer
- Go to mobile device and type *http://xx.xx.xx.xx:8080* to your favorite browser where xx are segments of IP address of computer

## How to customize control buttons?

Yust edit file *templates/index.html* and add more buttons. If you want to send keys, use [] bracket around key like in example. If you want do send text, type it in to data attribute of buttons element without [] brackets.

*This is only small project and I using it to control my presentations when my notebook cannot be connected near me.*
