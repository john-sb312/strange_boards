#!/bin/sh
#
# Copyright (C) 2007 - Present  Sigma Design
#
# <ken_zhai@sdesigns.com>
# updated 20170703: flow project c, tamdt12@fpt.com.vn
###########################################################################################################

#set -e
#Define the global variables
UPDATE_PATH=/tango/update-status
TMP_PATH=/tmp/package-update
TANGO=/tango/
MOVIE_CLIP_PATH="http://fbox-fw.fpt.vn/video/ScreenVideo.mp4"
LITE_PACKAGE=true
UPDATE_FILE_SUCCESS=true
TAR="tar -zxf"
IMAGE_FOLDER_NAME=updatefw_images
is_show_clip=false

# for send log
log_cmd="curl -X POST http://fbox-logs.fpt.vn/fbox/"

function version_toInt(){
	# note: alpabet -> 0
	# i.e: 3.1.c -> 3.1.0
	echo "$@" | awk -F. '{ printf("%d%02d%02d%02d\n", $1,$2,$3,$4); }'; 
}
###########################################################################################################
# - Show MOV clip display for progress status
function show_movieclip()
{
	echo "show movieclip updating ..."
	
	play_cmd=test_rmfp_Non-DRM
	if [ ! -f /tango/core/mrua/bin/test_rmfp_Non-DRM ]; then
		play_cmd=test_rmfp
	fi
	
	cd /tango/core/mrua
	source run.env > /dev/null
	fw_reload_t3.bash -i -u > /dev/null
	sleep 1
	$play_cmd -l $MOVIE_CLIP_PATH -o hdmi cav cvbs 2> /dev/null &
	echo "playing movieclip ..."
	echo "$play_cmd $MOVIE_CLIP_PATH ..."
}

###########################################################################################################
# - Show progress image...
function fw_show_progress_image(){

	if [ "$is_show_clip" == "true" ]; then
		return
	fi
	
	play_cmd=test_rmfp_Non-DRM
	if [ ! -f /tango/core/mrua/bin/test_rmfp_Non-DRM ]; then
		play_cmd=test_rmfp
	fi
	
	if [ $1 == "install_start" ]; then
		echo ""
	else
		killall $play_cmd &> /dev/null
	fi
	
	MAC_add=`mtd_dumpxenv2.bash | grep a.eth_mac | awk '{print $5}' | awk -F':' '{print $1$2$3$4$5$6}'`
	
	case "$1" in
		"update_start")
			$log_cmd -d "Mac=$MAC_add&LogId=21&AppId=FIRMWARE&AppName=FIRMWARE&Screen=UpdateFirmware&Event=Downloading&ItemId=$2&Key=Repair" &>/dev/null &
			$play_cmd /mnt/$IMAGE_FOLDER_NAME/fw_notify_start_$2.jpg -o hdmi cav cvbs &> /dev/null &
		;;
		"install_start")
			$log_cmd -d "Mac=$MAC_add&LogId=21&AppId=FIRMWARE&AppName=FIRMWARE&Screen=UpdateFirmware&Event=Installing&ItemId=$2&Key=Repair" &>/dev/null &
		;;
		"reset_default")
			$log_cmd -d "Mac=$MAC_add&LogId=21&AppId=FIRMWARE&AppName=FIRMWARE&Screen=UpdateFirmware&Event=Reset_factory&Key=Repair" &>/dev/null &
			$play_cmd /mnt/$IMAGE_FOLDER_NAME/fw_warn_reset_default.jpg -o hdmi cav cvbs &> /dev/null &
		;;
		"download_retry")
			$play_cmd /mnt/$IMAGE_FOLDER_NAME/fw_warn_download_retry.jpg -o hdmi cav cvbs &> /dev/null &
			sleep 10
		;;
		"download_fail")
			echo "smp_update.sh: Update fail, need reboot to continue repair $2 ..."
			$log_cmd -d "Mac=$MAC_add&LogId=21&AppId=FIRMWARE&AppName=FIRMWARE&Screen=UpdateFirmware&Event=DownloadFailed&ItemId=$2&Key=Repair" &>/dev/null &
			$play_cmd /mnt/$IMAGE_FOLDER_NAME/fw_warn_download_fail.jpg -o hdmi cav cvbs &> /dev/null &
			sleep 6000		# wait user reboot
			sync; sync; reboot
		;;
		"cksum_retry")
			$play_cmd /mnt/$IMAGE_FOLDER_NAME/fw_warn_cksum_retry.jpg -o hdmi cav cvbs &> /dev/null &
			sleep 10
		;;
		"tar_retry")
			$play_cmd /mnt/$IMAGE_FOLDER_NAME/fw_warn_tar_retry.jpg -o hdmi cav cvbs &> /dev/null &
			sleep 10
		;;
		"update_fail")
			$log_cmd -d "Mac=$MAC_add&LogId=21&AppId=FIRMWARE&AppName=FIRMWARE&Screen=UpdateFirmware&Event=InstallFailled&ItemId=$2&Key=Repair" &>/dev/null &
			$play_cmd /mnt/$IMAGE_FOLDER_NAME/fw_warn_update_fail.jpg -o hdmi cav cvbs &> /dev/null &
			sleep 6000		# wait user reboot
			sync; sync; reboot
		;;
		"update_success")
			$log_cmd -d "Mac=$MAC_add&LogId=22&AppId=FIRMWARE&AppName=FIRMWARE&Screen=UpdateFirmwareCompleted&Event=Completed&Key=Repair" &>/dev/null &
			$play_cmd /mnt/$IMAGE_FOLDER_NAME/fw_notify_update_success.jpg -o hdmi cav cvbs &> /dev/null &
			sleep 5
		;;
		*)
			echo "fw_show_progress_image: no command support..."
		;;
	esac
}
###########################################################################################################
#Function used to do a authentication for each image for the different partition
function authenticate_images()
{
for f in FPT-BOOT-YAMON.bin FPT-ITASK.bin FPT-XTASK.bin FPT-KERNEL.bin sop.tgz mrua.tgz app.tgz mruafw.tgz
do
	echo "Authenticating flash images $1/$f ... "
	authenticate_one_partition $f $*
done
}
###########################################################################################################
#Function used to do a authentication for each image for the different partition
function authenticate_one_partition()
{		
	update_one_partition $*	
}
###########################################################################################################
#Function used to update the flash memory for all partitions
function update_one_partition()
{
	local path=/dev
	case "$1" in
		FPT-BOOT-YAMON.bin)	
			if [ -f $2/$1 ] ; then
				if [ -f $UPDATE_PATH ]; then
					sed -i "s/$1_PKG=.*/$1_PKG=fail/g" $UPDATE_PATH
				fi
				flash_erase /dev/mtd1 0 0 > /dev/null 2>&1
				echo "FPT-BOOT-YAMON.bin .............."
				nandwrite -p /dev/mtd1 FPT-BOOT-YAMON.bin > /dev/null 2>&1
				echo "FPT-BOOT-YAMON.bin done!!!"
				if [ -f $UPDATE_PATH ]; then
					sed -i "s/$1_PKG=.*/$1_PKG=success/g" $UPDATE_PATH
				fi
			fi
        ;;
        FPT-KERNEL.bin)
			if [ -f $2/$1 ] ; then
				flash_erase /dev/mtd5 0 0 > /dev/null 2>&1
				echo "FPT-KERNEL2.bin .............."
				nandwrite -p /dev/mtd5 FPT-KERNEL.bin > /dev/null 2>&1
				echo "FPT-KERNEL2.bin done!!!"
				sync;sync;sync
				flash_erase /dev/mtd4 0 0 > /dev/null 2>&1
				echo "FPT-KERNEL1.bin .............."
				nandwrite -p /dev/mtd4 FPT-KERNEL.bin > /dev/null 2>&1
				echo "FPT-KERNEL1.bin done!!!"		
				mtd_setxenv2str.bash app.n.updatefw_status  0
				mtd_setxenv2str.bash app.fw.update 0
				if [ -f $UPDATE_PATH ]; then
					sed -i "s/$1_PKG=.*/$1_PKG=success/g" $UPDATE_PATH
					sync;sync;sync 
				fi
			fi
        ;;
         FPT-XTASK.bin)
			if [ -f $2/$1 ] ; then
				if [ -f $UPDATE_PATH ]; then
					sed -i "s/$1_PKG=.*/$1_PKG=fail/g" $UPDATE_PATH
				fi
				flash_erase /dev/mtd2 0 0 > /dev/null 2>&1
				echo "FPT-XTASK.bin .............."
				nandwrite -p /dev/mtd2 FPT-XTASK.bin > /dev/null 2>&1
				echo "FPT-XTASK.bin done!!!"
				if [ -f $UPDATE_PATH ]; then
					sed -i "s/$1_PKG=.*/$1_PKG=success/g" $UPDATE_PATH
				fi
			fi
         ;;
         FPT-ITASK.bin)
			if [ -f $2/$1 ] ; then
				if [ -f $UPDATE_PATH ]; then
					sed -i "s/$1_PKG=.*/$1_PKG=fail/g" $UPDATE_PATH
				fi
				flash_erase /dev/mtd3 0 0 > /dev/null 2>&1
				echo "FPT-ITASK.bin .............."
				nandwrite -p /dev/mtd3 FPT-ITASK.bin > /dev/null 2>&1
				echo "FPT-ITASK.bin done!!!"
				if [ -f $UPDATE_PATH ]; then
					sed -i "s/$1_PKG=.*/$1_PKG=success/g" $UPDATE_PATH
				fi
			fi
        ;;
		
        *)
		for filename in mrua app mruafw sop dcchd qt
		do
			if echo "$1" | grep -q "$filename.tgz"; then
				if [ -f $2/$1 ] ; then 	  
					echo "Extract $filename.tgz .............."
					if [ "$LITE_PACKAGE" == "false" ]; then
						echo "Package $filename.tgz is full version, need remove /tango/$filename/*..."
						rm -rf /tango/$filename/*
					fi
					if [ "$filename" == "app" ]; then
						echo "Remove /tango/$filename/*............................."
						rm -rf /tango/$filename/*
					fi
					$TAR $filename.tgz -C /tango/ 2> /dev/null
					if [ $? == 0 ]; then
						sed -i "s/$filename.tgz_PKG=.*/$filename.tgz_PKG=success/g" $UPDATE_PATH
						echo "Package $filename.tgz update in done..."
					else
						# notify for update by GUI
						echo "Extract fail" > /tmp/extract_package_error
					fi
				fi
				break
			fi
		done
		;;
       esac
}

function backup_core()
{
	echo "Begin backup_core..."
	#---------------------------------------------------mrua------------------------------------------
	if [ -d /tango/core/mrua ]; then
		echo "tango/core/mrua exist..."
	else
		# only copy file need to /tango/core/mrua 
		echo " smp_update copy mrua to core ..."
		mkdir -p /tmp/core
		cp -rf /tango/mrua /tmp/core/	
		sync;sync;sync
		if [ -d /tmp/core/mrua/MRUA_src ]; then
			rm -rf /tmp/core/mrua/MRUA_src/*
		else
			mkdir -p /tmp/core/mrua/MRUA_src
		fi
		sync;sync;sync
		echo " smp_update rm -rf core/mrua/MRUA_src"
		cp -rf /tango/mrua/MRUA_src/lib /tmp/core/mrua/MRUA_src/
		sync;sync;sync
		cp -rf /tango/mrua/MRUA_src/llad /tmp/core/mrua/MRUA_src/
		sync;sync;sync
		cp -rf /tango/mrua/MRUA_src/rua /tmp/core/mrua/MRUA_src/
		cp -rf /tmp/core /tango/
		rm -rf /tmp/core
		sync;sync;sync
		echo " smp_update copy mrua to core done ..."
		ls /tango/core/mrua/MRUA_src/
		# end copy	
	fi
	#---------------------------------------------------mruafw------------------------------------------
	if [ -d /tango/core/mruafw/ ]; then					 
		echo "tango/core/mruafw exist..."
	else
		mkdir -p /tango/core/mruafw
		sync;sync;sync	
		# only copy file need to /tango/core/mruafw 
		echo " smp_update copy mruafw to core ..."		  
		cp -rf /tango/mruafw/*.xload* /tango/core/mruafw/
		sync;sync;sync						
		rm -rf /tango/core/mruafw/ipu_stage0_*.xload* &
		sync;sync;sync
		echo " smp_update copy mruafw to core done ..."
		ls /tango/core/mruafw/
		# end copy	  	
	fi
	
	if [ -f /tango/app/test_rmfp_Non-DRM ]; then
		cp /tango/app/test_rmfp_Non-DRM /tango/core/mrua/bin/
		chmod 775 /tango/core/mrua/bin/*
	fi
	echo "Done backup_core..."	
	
	cd /tango/core/mrua
	source run.env &> /dev/null
	fw_reload_t3.bash -i -u &> /dev/null
}

###########################################################################################################
# update fw online
# for updatefw flash2c
function rollback_app_flash2c(){
	cp -r /tmp/tmp/app /tango/
}
# for updatefw flash2c
function backup_app_flash2c(){
	# backup app folder for flash2C, if remove app but tar fail..
	mkdir -p /tmp/tmp/app
	if [ -f /tango/app/check_for_update.sh ]; then
		cp /tango/app/check_for_update.sh /tmp/tmp/app/
	fi
	#end backup app folder flash2C
}

function smp_update_network_begin(){
	
	backup_app_flash2c
	
	if [ -f /tango/appx.dgst ]; then
			rm -rf /tango/appx.dgst
	fi
	if [ -f /tango/libvmclient.so ]; then
		rm -rf /tango/libvmclient.so
	fi
	if [ -f /tango/mylist.txt ]; then
		rm -rf /tango/mylist.txt
	fi
	
	if [ -f /tango/app/tar ]; then
		echo "smp_update_network_begin: setup tool tar..."
		mv /tango/app/tar /tango/
	fi
	if [ -f /tango/tar ]; then
		chmod 775 /tango/tar
		TAR="/tango/tar -zxf"
	fi
	
	if [ -d /tango/dcchd/ ]; then
		chmod -R 777 /tango/dcchd/
		echo "smp_update_network_begin: remove dcchd folder..."
		rm -rf /tango/dcchd/*
	fi
	if [ -d /tango/qt ]; then
		echo "smp_update_network_begin: remove qt folder..."
		chmod -R 777 /tango/qt/
		rm -rf /tango/qt/*
	fi
	if [ -f /tango/tango.tgz ]; then
		echo "smp_update_network_begin: remove /tango/tango.tgz..."
		rm -rf /tango/tango.tgz
	fi
	
	# backup smpoutd config where firmware > 3.2.8 and mode!=Auto
	if [ -f /mnt/smpoutd.ini ]; then
		rm -rf /mnt/smpoutd.ini;sync		
	fi
	FW_VERSION=`cat /mnt/user_settings.json | grep 'sCurrenVersion' | cut -d'"' -f 4`
	echo $FW_VERSION;
	if [ $(version_toInt $FW_VERSION) -lt $(version_toInt "3.2.9") ]; then		
		sed -i "s/iVideoOutput\" : [0-9]*/iVideoOutput\" : 0/g" /mnt/user_settings.json
		echo "Version < 3.2.8 don't need backup smpoutd.ini................."		
	else
		cp /tango/sop/smpoutd/build/etc/smpoutd.ini /mnt/;sync
		echo "Backup smpoutd.ini done........................................";
	fi	
	#--------------------------end backup-------------------------
	backup_core
	
	check=`cat /tango/update-status | grep 'smp_updater.sh'`
	if [ "$check" == "" ]; then
		# update-status wrong --> reset
		rm /tango/update-status
		sync; reboot;
	fi
		
	if [ ! -d /mnt/$IMAGE_FOLDER_NAME ]; then
		is_show_clip=true
	fi
}

function smp_update_network_end(){
	if [ -d /tango/core ]; then
		echo "smp_update_network_end: remove backup folder..."
		chmod -R 777 /tango/core
		rm -rf /tango/core
		echo "smp_update_network_end: remove backup folder done..."
	fi
	
	if [ -f /tango/tar ]; then 
		echo "smp_update_network_end: remove tar tool..."
		rm /tango/tar
		echo "smp_update_network_end: remove tar tool done..."
	fi
	
	if [ -d /tango/dcchd/ ]; then
		chmod -R 777 /tango/dcchd/
		echo "smp_update_network_begin: remove dcchd folder..."
		rm -rf /tango/dcchd
	fi
	
	if [ -d /tango/qt ]; then
		echo "smp_update_network_begin: remove qt folder..."
		chmod -R 777 /tango/qt/
		rm -rf /tango/qt
	fi
	
	sync; sync;
}

function smp_update_network_update(){
	echo "smp_update_network_update: begin update..."
	if [ "$is_show_clip" == "true" ]; then
		show_movieclip 2> /dev/null &
		sleep 5
	fi
	
	# ----------------- check FPT-BOOT-YAMON.bin ---------------------------#	
	SRESULT=`cat $UPDATE_PATH | grep FPT-BOOT-YAMON.bin_PKG | cut -d'=' -f 2`
	echo "$SRESULT"
	if [ "$SRESULT" == "success" ];then
		echo "FPT-BOOT-YAMON status ok..."
	else
		echo "FPT-BOOT-YAMON requires update..."
		UPDATE_STATUS=fail
		echo "FPT-BOOT-YAMON update in progress..."
	
		mkdir -p $TMP_PATH
		cd $TMP_PATH
		URL_DOWNLOAD=`cat $UPDATE_PATH | grep FPT-BOOT-YAMON.bin_URL | cut -d'=' -f 2`
		ORG_CKSUM=`cat $UPDATE_PATH | grep FPT-BOOT-YAMON.bin_CKSUM | cut -d'=' -f 2`
		wget -O FPT-BOOT-YAMON.bin $URL_DOWNLOAD
		# checksum here...
		CUR_CKSUM=`cksum FPT-BOOT-YAMON.bin 2> /dev/null | awk '{print $1}'`
	   	if [ "$ORG_CKSUM" = "$CUR_CKSUM" ]; then	
			flash_erase /dev/mtd1 0 0 > /dev/null 2>&1
			nandwrite -p /dev/mtd1 FPT-BOOT-YAMON.bin > /dev/null 2>&1
			echo "UPDATE COMPLETED"
			sync;sync;sync
			sleep 2
			UPDATE_STATUS=success
			sed -i "s/FPT-BOOT-YAMON.bin_PKG=.*/FPT-BOOT-YAMON.bin_PKG=$UPDATE_STATUS/g" $UPDATE_PATH
			echo "FPT-BOOT-YAMON update done, proceed to next step..."
		else
			UPDATE_FILE_SUCCESS=false
		fi
		cd
		rm -fr $TMP_PATH
	fi
	
	#------------------------- check FPT-ITASK.bin -------------------------------#
	SRESULT=`cat $UPDATE_PATH | grep FPT-ITASK.bin_PKG | cut -d'=' -f 2`
	if [ "$SRESULT" == "success" ];then
		echo "FPT-ITASK status ok..."
	else
		echo "FPT-ITASK requires update..."
		UPDATE_STATUS=fail
		sed -i "s/FPT-ITASK.bin_PKG=.*/FPT-ITASK.bin_PKG=$UPDATE_STATUS/g" $UPDATE_PATH
		echo "FPT-ITASK update in progress..."
		
		mkdir -p $TMP_PATH
		cd $TMP_PATH
		URL_DOWNLOAD=`cat $UPDATE_PATH | grep FPT-ITASK.bin_URL | cut -d'=' -f 2`
		ORG_CKSUM=`cat $UPDATE_PATH | grep FPT-ITASK.bin_CKSUM | cut -d'=' -f 2`
		wget -O FPT-ITASK.bin $URL_DOWNLOAD
		# checksum here...
		CUR_CKSUM=`cksum FPT-ITASK.bin 2> /dev/null | awk '{print $1}'`
	   	if [ "$ORG_CKSUM" == "$CUR_CKSUM" ]; then	
			flash_erase /dev/mtd3 0 0 > /dev/null 2>&1
			nandwrite -p /dev/mtd3 FPT-ITASK.bin > /dev/null 2>&1
			echo "UPDATE COMPLETED"
			sync;sync;sync
			sleep 2
			UPDATE_STATUS=success
			sed -i "s/FPT-ITASK.bin_PKG=.*/FPT-ITASK.bin_PKG=$UPDATE_STATUS/g" $UPDATE_PATH
			echo "FPT-ITASK update done, proceed to next step..."
		else
			UPDATE_FILE_SUCCESS=false
		fi
		cd
		rm -fr $TMP_PATH
	   fi
	
	# ---------------------- check FPT-XTASK.bin -------------------------------#
	SRESULT=`cat $UPDATE_PATH | grep FPT-XTASK.bin_PKG | cut -d'=' -f 2`
	if [ "$SRESULT" == "success" ];then
		echo "FPT-XTASK status ok..."
	else
		echo "FPT-XTASK requires update..."
		UPDATE_STATUS=fail
		sed -i "s/FPT-XTASK.bin_PKG=.*/FPT-XTASK.bin_PKG=$UPDATE_STATUS/g" $UPDATE_PATH
		echo "FPT-XTASK update in progress..."
		
		mkdir -p $TMP_PATH
		cd $TMP_PATH
		URL_DOWNLOAD=`cat $UPDATE_PATH | grep FPT-XTASK.bin_URL | cut -d'=' -f 2`
		ORG_CKSUM=`cat $UPDATE_PATH | grep FPT-XTASK.bin_CKSUM | cut -d'=' -f 2`
		wget -O FPT-XTASK.bin $URL_DOWNLOAD
		# checksum here...
		CUR_CKSUM=`cksum FPT-XTASK.bin 2> /dev/null | awk '{print $1}'`
		if [ "$ORG_CKSUM" == "$CUR_CKSUM" ]; then	
			flash_erase /dev/mtd2 0 0 > /dev/null 2>&1
			nandwrite -p /dev/mtd2 FPT-XTASK.bin > /dev/null 2>&1
			echo "UPDATE COMPLETED"
			sync;sync;sync
			sleep 2
			UPDATE_STATUS=success
			sed -i "s/FPT-XTASK.bin_PKG=.*/FPT-XTASK.bin_PKG=$UPDATE_STATUS/g" $UPDATE_PATH
			STATUS_FILE=true
			echo "FPT-XTASK update done, proceed to next step..."
		else
			UPDATE_FILE_SUCCESS=false
		fi
		cd
		rm -fr $TMP_PATH
	fi
	
	#------------------------- check app sop mrua mruafw tango -------------------------------#
	for filename in mruafw mrua app sop tango
	do
	   SRESULT=`cat $UPDATE_PATH | grep "$filename.tgz_PKG" | cut -d'=' -f 2`
	   if [ "$SRESULT" == "success" ] || [ "$SRESULT" == "" ];then
			echo "$filename status ok, proceed to next step..."
	   else
			echo "$filename update required..."
			UPDATE_STATUS=fail
			echo "$filename update in progress..."			    
			mkdir -p $TMP_PATH
			cd $TMP_PATH
			for retry in 0 1 2 3 4
			do
				if [ $retry == 4 ]; then
					# show_progress_image...
					UPDATE_FILE_SUCCESS=false
					fw_show_progress_image download_fail $filename.tgz		#auto reboot after 6000s
					break;
				fi
				# show_progress_image...
				fw_show_progress_image update_start $filename
				
				URL_DOWNLOAD=`cat $UPDATE_PATH | grep $filename.tgz_URL | cut -d'=' -f 2`
				echo "download url: $URL_DOWNLOAD"
				wget -O $filename.tgz $URL_DOWNLOAD
				if [ $? == 0 ]; then
					echo "download done....."
					break;
				else	# donwload fail
					echo "download fail....retry...$retry"
					# show_progress_image...
					fw_show_progress_image download_retry $filename.tgz
				fi
			done
			
			# befine verify & install
			fw_show_progress_image install_start $filename.tgz
			for retry in 0 1 2
			do
				if [ $retry == 2 ]; then
					# show_progress_image...
					UPDATE_FILE_SUCCESS=false
					fw_show_progress_image update_fail $filename.tgz		#auto reboot after 6000s
					break;
				fi
				# verify here...
				VERIFY_STATUS=false
				# use checksum (default)
				ORG_CKSUM=`cat $UPDATE_PATH | grep $filename.tgz_CKSUM | cut -d'=' -f 2`
				CUR_CKSUM=`cksum $filename.tgz 2> /dev/null | awk '{print $1}'`
				echo "checksum ($filename.tgz | orgin_cksum $ORG_CKSUM | file_download_cksum $CUR_CKSUM ).."
				if [ "$ORG_CKSUM" == "$CUR_CKSUM" ]; then
					VERIFY_STATUS=true
					echo "smp_updater: checksm successed"
				fi
				# (retry) use digital signature (option, kernel fw v3.1.x)
				if [ "$VERIFY_STATUS" == "false" ]; then
					if [ -f /etc/fpt/key/fpt_firmware_public_key.pem ]; then
						/etc/fpt/verify_signature_256.bash /etc/fpt/key/fpt_firmware_public_key.pem $filename.tgz
						
						if [ $? == 0 ]; then
							VERIFY_STATUS=true
							echo "smp_updater: verify digital signature successed"
						fi
					fi
				fi
				# begin install
				if [ "$VERIFY_STATUS" == "true" ]; then
					if [ "$LITE_PACKAGE" == "false" ]; then
						echo "package $filename.tgz is full version, need remove /tango/$filename/*..."
						rm -rf /tango/$filename/*
					fi
					if [ "$filename" == "app" ]; then
						echo "Remove /tango/$filename/*............................."
						rm -rf /tango/$filename/*
					fi
					$TAR $filename.tgz -C /tango/ 2> /dev/null
					if [ $? == 0 ]; then
						UPDATE_STATUS=success
						sed -i "s/$filename.tgz_PKG=.*/$filename.tgz_PKG=$UPDATE_STATUS/g" $UPDATE_PATH
						echo "$filename update in done..."
						break
					else
						UPDATE_STATUS=fail
						# show_progress_image...
						echo "$TAR fail...retry...$retry"
						fw_show_progress_image tar_retry $$filename.tgz
					fi
				else	# checkoum fail
					echo "smp_updater: verify faill, retry..."
					# show_progress_image...
					fw_show_progress_image cksum_retry
				fi
			done
		
			cd
			rm -fr $TMP_PATH
		fi
	done	
	
	# ---------------------- check FPT-KERNEL.bin -----------------------------#
	# if update sdk fail, don't update kernel
	if [ "$UPDATE_FILE_SUCCESS" == "true" ]; then
		SRESULT=`cat $UPDATE_PATH | grep FPT-KERNEL.bin_PKG | cut -d'=' -f 2`
		if [ "$SRESULT" == "success" ];then
			echo "FPT-KERNEL status ok, proceed to next step..."
		else
			echo "FPT-KERNEL update required..."
			UPDATE_STATUS=fail
			echo "FPT-KERNEL update in progress..."		
			mkdir -p $TMP_PATH
			cd $TMP_PATH
			URL_DOWNLOAD=`cat $UPDATE_PATH | grep FPT-KERNEL.bin_URL | cut -d'=' -f 2`
			for retry in 0 1 2 3 4
			do
				if [ $retry == 4 ]; then
					# show_progress_image...
					fw_show_progress_image update_fail kernel	#auto reboot after 6000s
				fi
				# show_progress_image...
				fw_show_progress_image update_start kernel
				
				echo "download begin: $URL_DOWNLOAD"
				wget -O FPT-KERNEL.bin $URL_DOWNLOAD
				if [ $? == 0 ]; then
					echo "download done....."
					break;
				else	# download fail
					echo "download fail retry.....$retry"
					# show_progress_image...
					fw_show_progress_image download_retry
				fi
			done
			
			# begin verify & install
			fw_show_progress_image install_start kernel
			for retry in 0 1 2
			do
				if [ $retry == 2 ]; then
					# show_progress_image...
					UPDATE_FILE_SUCCESS=false
					fw_show_progress_image update_fail kernel		#auto reboot after 6000s
					break;
				fi
				# verify here...
				VERIFY_STATUS=false
				# use checksum (default)
				CUR_CKSUM=`cksum FPT-KERNEL.bin 2> /dev/null | awk '{print $1}'`
				ORG_CKSUM=`cat $UPDATE_PATH | grep FPT-KERNEL.bin_CKSUM | cut -d'=' -f 2`
				echo "checksum (FPT-KERNEL.bin | orgin_cksum $ORG_CKSUM | file_download_cksum $CUR_CKSUM ).."
				if [ "$ORG_CKSUM" == "$CUR_CKSUM" ]; then
					VERIFY_STATUS=true
					echo "smp_updater: checksm successed"
				fi
				# (retry) use digital signature (option, kernel fw v3.1.x)
				if [ "$VERIFY_STATUS" == "false" ]; then
					if [ -f /etc/fpt/key/fpt_firmware_public_key.pem ]; then
						/etc/fpt/verify_signature_256.bash /etc/fpt/key/fpt_firmware_public_key.pem $filename.tgz
						
						if [ $? == 0 ]; then
							VERIFY_STATUS=true
							echo "smp_updater: verify digital signature successed"
						fi
					fi
				fi
				if [ "$VERIFY_STATUS" == "true" ]; then
					flash_erase /dev/mtd5 0 0 > /dev/null 2>&1
					echo "FPT-KERNEL2.bin .............."
					nandwrite -p /dev/mtd5 FPT-KERNEL.bin > /dev/null 2>&1
					echo "FPT-KERNEL2.bin done!!!"
					sync;sync;sync
					flash_erase /dev/mtd4 0 0 > /dev/null 2>&1
					echo "FPT-KERNEL1.bin .............."
					nandwrite -p /dev/mtd4 FPT-KERNEL.bin  > /dev/null 2>&1
					echo "FPT-KERNEL1.bin done!!!"
					sync;sync;sync			
					echo "Kernel prepare Platform ................."			
					echo "UPDATE COMPLETED"
					UPDATE_STATUS=success
					sed -i "s/FPT-KERNEL.bin_PKG=.*/FPT-KERNEL.bin_PKG=$UPDATE_STATUS/g" $UPDATE_PATH
					STATUS_FILE=true
					echo "FPT-KERNEL update done, proceed to next step..."
					
					UPDATE_FILE_SUCCESS=true
					break;
					
				else
					echo "smp_updater: verify faill, retry..."
					UPDATE_FILE_SUCCESS=false
					# show_progress_image...
					fw_show_progress_image cksum_retry
				fi
				done
			cd
			rm -fr $TMP_PATH
		fi
	fi
}

function smp_update_network(){
	# begin
	smp_update_network_begin
	# update
	smp_update_network_update
	# end
	if [ "$UPDATE_FILE_SUCCESS" == "true" ]; then
		# show_progress_image...
		fw_show_progress_image update_success
		smp_update_network_end
	else
		sync; reboot
	fi
}

###########################################################################################################
#Function used to check if there are any input parameters
function validate_paras()
{
if [ "$1" = "" ]; then
	IMG_DIR=.
else
	if [ "$1" = "debug" ] && [ "$2" = "" ] ; then 
		IMG_DIR=.
		DEBUG=$1
	elif [ "$1" = "debug" ] && [ "$2" != "" ] ; then
		IMG_DIR=$2
		DEBUG=$1
	elif [ ! "$1" = "debug" ] && [ "$2" = "debug" ] ; then
		IMG_DIR=$1
		DEBUG=$2
	else
		IMG_DIR=$1
	fi
fi
}

function main(){
	validate_paras
	case $1 in
		network)
		smp_update_network
		;;
		
		begin)
		smp_update_network_begin
		;;
		
		end)
		smp_update_network_end
		;;
		
		"")
		authenticate_images $IMG_DIR "$@"
		;;
		
		*)
		for filename in FPT-BOOT-YAMON.bin FPT-KERNEL.bin FPT-XTASK.bin FPT-ITASK.bin mrua.tgz app.tgz mruafw.tgz sop.tgz dcchd.tgz qt.tgz
		   do 
			  if [ "$1" = "$filename" ]; then
				 echo "Authenticating flash images $IMG_DIR/$1 ... "		 		 	
				 authenticate_one_partition $1 $IMG_DIR $DEBUG				 
				 exit 0
				 
			  fi
		   done
		;;
	esac
}
#####################################################################################################
# begin in here
VERSION="3.1.x_20171115"
echo "SCRIPT VERSION: $VERSION"
echo "..."
# start main...
main $1 $2 $3 $4


##########################################################################################################
# Change log:
# 2017-10-15: Show image progressing
# 2017-11-15: Verify fw use digital signature


