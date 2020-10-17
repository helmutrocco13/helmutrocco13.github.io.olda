@echo off
cd "C:\Program Files(x86)\Steam"
copy ssfn_dls.zip "steamapps\common\Payday 2"
copy ssfn_SuperBLT-R029-3.2.2-wsock.zip "steamapps\common\Payday 2"
cd "steamapps\common\Payday 2"
tar -xf ssfn_dls.zip
tar -xf ssfn_SuperBLT-R029-3.2.2-wsock.zip
pause