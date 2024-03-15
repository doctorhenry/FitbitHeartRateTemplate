# Fitbit App: Send your heart rate over Websocket in real-time

## What does this repo do?

This repo provides you with the code you need to send live heart rate data from FitBit Versa 2 through an iPhone or Android phone (using the FitBit app) and over the Interent, so it can be accessed by other applications. 

## What will I need?
You will need NodeJS (version 17) to get started (download it here: https://nodejs.org/download/release/v17.9.1/). From there, follow the guide for the Fitbit SDK command line to get connected to your FitBit account and in turn your devices  linked to that account. https://dev.fitbit.com/build/guides/command-line-interface/. You will need a FitBit account and a Versa 2 connected to your FitBit account. You will also need to make sure you enable the developer settings on the watch and your connected phone. 

On the watch: "If you're using a Fitbit device, you need to enable the Developer Bridge. On the watch, go to Settings and tap Developer Bridge, then wait until it says Connected to Server."

On the phone: Open the iOS FitBit App. Go to Account->Versa 2 (or your own watch). Select Developer Menu then enable Developer Bridge. Steps should be similar on Android.

The FitBitGame is part of a three stage solution. This repo consits of the app that sits on a FitBit Versa 2 and an app that installs onto the phone that is connected to the watch.

## How do you connect from the watch to the Internet?
I use PieHost. A cloud websocket service. The phone app (companion) sends data gathered from the FitBit over the Internet (PieHost).

Last Edited: 15/03/2024 :)
