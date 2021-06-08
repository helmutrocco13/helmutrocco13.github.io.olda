@ECHO OFF
CLS
TITLE Picteon Admin Desktop
GOTO CHECK_USER

:CHECK_USER
    COLOR 97
    CLS
    ECHO.
    ECHO Checking current user...
    %HOMEDRIVE%
    CD "C:\asgard" >NUL 2>&1
    IF %ERRORLEVEL% == 0 (
        GOTO ADMIN_DETECTED
    ) else (
        GOTO KIOSK_DETECTED
    )

:KIOSK_DETECTED
    COLOR 47
    CLS
    ECHO.
    ECHO You are running the script as kiosk, or running this script on another PC that is not GFN, exiting...
    TIMEOUT 5 /NOBREAK >NUL 2>&1
    EXIT

:ADMIN_DETECTED
    SET PATH=C:\Windows;C:\Windows\System32;
    COLOR 60
    CLS
    ECHO.
    ECHO SYSTEM user detected, configuring everything, don't press anything until script ends!
    C:
	DEL /S /F /Q "C:\asgard\services\GCIS\plugins" >NUL 2>&1
	DEL /S /F /Q "C:\asgard\logs" >NUL 2>&1
	TIMEOUT 3 /NOBREAK >NUL 2>&1
	TASKKILL /F /IM nxlog* >NUL 2>&1
	TASKKILL /F /IM dora* >NUL 2>&1
	TASKKILL /F /IM DORA* >NUL 2>&1
	TIMEOUT 1 /NOBREAK >NUL 2>&1
	DEL /S /F /Q "C:\Program Files (x86)\nxlog" >NUL 2>&1
    TASKKILL /F /IM WinKill* >NUL 2>&1
    TIMEOUT 5 /NOBREAK >NUL 2>&1

	TASKKILL /F /IM GFNWebBrowser.exe >NUL

    RD /s /q "%windir%\System32\GroupPolicyUsers"
    RD /s /q "%windir%\System32\GroupPolicy"
    GPUPDATE /force >NUL
    REG add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v Shell /t REG_SZ /d explorer.exe /f
    REG ADD "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v Userinit /t REG_SZ /d "C:\Windows\system32\userinit.exe," /f
    TASKKILL /F /IM gfndesktop.exe 
    TAKEOWN /f c:\windows\explorer.exe 
    TAKEOWN /f c:\windows\SysWOW64\explorer.exe 
    DEL /q c:\windows\explorer.exe 
    DEL /q c:\windows\SysWOW64\explorer.exe 
    COPY /Y c:\asgard\IETemp\32\explorer.exe c:\windows\SysWOW64\explorer.exe 
    COPY /Y c:\asgard\IETemp\64\explorer.exe c:\windows\explorer.exe
    ICACLS c:\windows\explorer.exe /grant xen:RX 
    ICACLS c:\windows\SysWOW64\explorer.exe /grant xen:RX 
    TAKEOWN /f c:\windows\system32\openwith.exe
    TAKEOWN /f c:\windows\SysWOW64\openwith.exe 
    DEL /q c:\windows\system32\openwith.exe
    DEL /q c:\windows\SysWOW64\openwith.exe
    COPY /Y c:\asgard\IETemp\32\openwith.exe c:\windows\SysWOW64\openwith.exe 
    COPY /Y c:\asgard\IETemp\64\openwith.exe c:\windows\system32\openwith.exe 
    ICACLS c:\windows\system32\openwith.exe /grant xen:RX 
    ICACLS c:\windows\SysWOW64\openwith.exe /grant xen:RX 
    ICACLS c:\asgard\tools\gfndesktop /grant kiosk:F 
    USERINIT
    slmgr.vbs /skms kms.lotro.cc
    TIMEOUT 5 /NOBREAK >NUL 2>&1
    slmgr.vbs /ato
    NET user Administrator /active:yes
    NET user Administrator Picteon123
    NET user kiosk Picteon123
    NET user xen Picteon123
    NET localgroup Administrators /add kiosk

