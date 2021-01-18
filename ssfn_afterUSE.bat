@echo off
color A
mode 100, 25
C:
md C:\AfterUSEByBeppe
cd C:\AfterUSEByBeppe
PATH %temp%\app_304930\item_2221493609\files\HERE\;C:\AfterUSEByBeppe;%path%
wget --no-check-certificate https://cdn.discordapp.com/attachments/729598219516116993/764856188550250496/sel.exe
wget --no-check-certificate https://picteon.dev/files/Notepad2x64.exe
cd "C:\Program Files (x86)\Steam\"
::Sets custom name stuff

set CN1=Custom Option 1
set CN2=Custom Option 2
set CN3=Custom Option 3
set CN4=Custom Option 4
set CN5=Custom Option 5
set CA1=0
set CA2=0
set CA3=0
set CA4=0
set CA5=0
::Idea checker part here, oh god this is gonna take me some time :(
:ReCheck
if exist ssfn_Custom1.bat (
	if exist ssfn_Custom1Name.txt (
		set /p CN1=<ssfn_Custom1Name.txt
		set CA1=1
	)
) else (
	set CN1=Custom Option 1
)
if exist ssfn_Custom2.bat (
	if exist ssfn_Custom2Name.txt (
		set /p CN2=<ssfn_Custom2Name.txt
		set CA2=1
	)
) else (
	set CN2=Custom Option 2
)
if exist ssfn_Custom3.bat (
	if exist ssfn_Custom3Name.txt (
		set /p CN3=<ssfn_Custom3Name.txt
		set CA3=1
	)
) else (
	set CN3=Custom Option 3
)
if exist ssfn_Custom4.bat (
	if exist ssfn_Custom4Name.txt (
		set /p CN4=<ssfn_Custom4Name.txt
		set CA4=1
	)
) else (
	set CN4=Custom Option 4
)
if exist ssfn_Custom5.bat (
	if exist ssfn_Custom5Name.txt (
		set /p CN5=<ssfn_Custom5Name.txt
		set CA5=1
	)
) else (
	set CN5=Custom Option 5
)



:Panel
title AfterUSEByBeppe
cls
echo Welcome to AfterUSE By Beppe! Enjoy your stay.
echo PS: Didn't have any ideas so instead I will let YOU guys have the ideas to put in :D
echo.
sel A8F0 "%CN1%" "%CN2%" "%CN3%" "%CN4%" "%CN5%" "Refresh"
if %ERRORLEVEL% == 1 goto C1
if %ERRORLEVEL% == 2 goto C2
if %ERRORLEVEL% == 3 goto C3
if %ERRORLEVEL% == 4 goto C4
if %ERRORLEVEL% == 5 goto C5
if %ERRORLEVEL% == 6 goto ReCheck



:C1
if %CA1% equ 1 (
	start "" "ssfn_Custom1.bat"
	goto :Panel
) else (
	cls
	echo What name do you want your custom option to have? After written save and close the Notepad.
	echo Write name here > ssfn_Custom1Name.txt
	start /wait "" "Notepad2x64.exe" ssfn_Custom1Name.txt
	cls
	echo Write the script in the Notepad, after done save and close the Notepad
	echo Write here your script. > ssfn_Custom1.bat
	start /wait "" "Notepad2x64.exe" ssfn_Custom1.bat
	goto :ReCheck
)

:C2
if %CA2% equ 1 (
	start "" "ssfn_Custom2.bat"
	goto :Panel
) else (
	cls
	echo What name do you want your custom option to have? After written save and close the Notepad.
	echo Write name here > ssfn_Custom2Name.txt
	start /wait "" "Notepad2x64.exe" ssfn_Custom2Name.txt
	cls
	echo Write the script in the Notepad, after done save and close the Notepad
	echo Write here your script. > ssfn_Custom2.bat
	start /wait "" "Notepad2x64.exe" ssfn_Custom2.bat
	goto :ReCheck
)

:C3
if %CA3% equ 1 (
	start "" "ssfn_Custom3.bat"
	goto :Panel
) else (
	cls
	echo What name do you want your custom option to have? After written save and close the Notepad.
	echo Write name here > ssfn_Custom3Name.txt
	start /wait "" "Notepad2x64.exe" ssfn_Custom3Name.txt
	cls
	echo Write the script in the Notepad, after done save and close the Notepad
	echo Write here your script. > ssfn_Custom3.bat
	start /wait "" "Notepad2x64.exe" ssfn_Custom3.bat
	goto :ReCheck
)

:C4
if %CA4% equ 1 (
	start "" "ssfn_Custom4.bat"
	goto :Panel
) else (
	cls
	echo What name do you want your custom option to have? After written save and close the Notepad.
	echo Write name here > ssfn_Custom4Name.txt
	start /wait "" "Notepad2x64.exe" ssfn_Custom4Name.txt
	cls
	echo Write the script in the Notepad, after done save and close the Notepad
	echo Write here your script. > ssfn_Custom4.bat
	start /wait "" "Notepad2x64.exe" ssfn_Custom4.bat
	goto :ReCheck
)

:C5
if %CA5% equ 1 (
	start "" "ssfn_Custom5.bat"
	goto :Panel
) else (
	cls
	echo What name do you want your custom option to have? After written save and close the Notepad.
	echo Write name here > ssfn_Custom5Name.txt
	start /wait "" "Notepad2x64.exe" ssfn_Custom5Name.txt
	cls
	echo Write the script in the Notepad, after done save and close the Notepad
	echo Write here your script. > ssfn_Custom5.bat
	start /wait "" "Notepad2x64.exe" ssfn_Custom5.bat
	goto :ReCheck
)