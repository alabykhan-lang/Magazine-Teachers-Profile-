@echo off
set GIT_EXE="C:\Program Files\Git\cmd\git.exe"
if not exist %GIT_EXE% set GIT_EXE="C:\Program Files (x86)\Git\cmd\git.exe"
if not exist %GIT_EXE% set GIT_EXE="C:\Users\HP\AppData\Local\Programs\Git\cmd\git.exe"
if not exist %GIT_EXE% set GIT_EXE=git

echo Using Git at: %GIT_EXE%

echo Removing old .git directory...
rmdir /s /q .git

echo Re-initializing Git...
%GIT_EXE% init

echo Setting up user config...
%GIT_EXE% config user.name "alabykhan-lang"
%GIT_EXE% config user.email "alabykhan-lang@users.noreply.github.com"

echo Adding files (respecting .gitignore)...
%GIT_EXE% add .

echo Creating commit...
%GIT_EXE% commit -m "Initial commit of Magazine production system"

echo Setting up remote...
%GIT_EXE% branch -m main
%GIT_EXE% remote add origin https://github.com/alabykhan-lang/Magazine-Teachers-Profile-.git

echo Pushing to GitHub...
%GIT_EXE% push -f -u origin main
echo Done.
