:init
cls
@echo off
title HrConsole
set arg1=%1 >nul
set arg2=%2 >nul


:jumphandler1
if "%arg1%" == "jump" goto jumphandler2

goto console
:jumphandler2
goto %arg2%


:console
set /p input=">"
if not defined input goto 404
if "%input:~0,4%" == "jump" goto jump
if "%input:~0,4%" == "exec" goto exec
if "%input%" == "help" goto smallHelp
if "%input:~0,4%" == "help " goto help
if "%input%" == "clear" goto clear
if "%input:~0,3%" == "end" goto end
if "%input%" == "restart" goto assembleRestart
if "%input%" == "commands" goto printCommands
if "%input%" == "update" goto update

:404
echo %input% isn't a valid command. Please try help!
echo Maybe it's a load error try restart.
goto console

:printCommands
cd C:\Windows\System32
FOR /F "delims=|" %%f in (commands.txt) DO echo %%f
goto console


:update
set inf="noVerSupport" 


:notDefined
echo "This command (%input%) isn't defined yet. Please try later. For advanced info try "advInf %input%""

:jump
title "%input%"
goto %input:~5%

:help
set subhelp="%input:~5%"


if not defined subhelp goto smallHelp

:smallHelp
cd C:\Windows\System32
FOR /F "delims=|" %%f in (help.txt) DO echo %%f
goto console



:assembleRestart
console


:exec
title "%input%"
start %input:~5%
:clear
cls
goto console

:end
set ERRORCODE=%input:~4%
title EingabeAUFFORDERUNG
echo Bye %USERNAME%
cls

