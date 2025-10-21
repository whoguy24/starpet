#!/bin/bash

cd /Users/whoguy/Library/CloudStorage/Dropbox/OBSS/Projects/StarPet/App

ProcessID=$(lsof -ti:5173)
if [ -n "$ProcessID" ]; then
    kill -9 $ProcessID
fi

npm run dev &

sleep 2

osascript -e 'tell application "Terminal" to set miniaturized of front window to true'

open http://localhost:5173/