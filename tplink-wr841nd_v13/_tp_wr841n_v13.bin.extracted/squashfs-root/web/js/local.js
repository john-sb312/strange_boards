﻿if (!$.paramsloaded)
{
	var menulist = ["status.htm", "qsStart.htm", "sysMode.htm", "iptv.htm", 
					"wan.htm", "ethWan.htm", "usb3g.htm", "group.htm", "lan.htm", "lan6.htm", "macClone.htm", "alg.htm", "dslcfg.htm", "autoPVC.htm", "ipsec.htm",
					"dhcp.htm", "dhcpClient.htm", "dhcpStatic.htm", "dhcpCond.htm",
					"wlBasic.htm", "wlQss.htm", "wlSec.htm", "wlScheEdit.htm","wlAcl.htm", "wlAdv.htm", "wlStats.htm", "wlGuest.htm", "wlGuestStats.htm",
					"wlBasic5G.htm", "wlQss5G.htm", "wlSec5G.htm", "wlScheEdit5G.htm","wlAcl5G.htm", "wlAdv5G.htm", "wlStats5G.htm", "wlGuest5G.htm", "wlGuestStats5G.htm",
					"voice_account.htm", "voice_dialplan.htm", "voice_forbiddencall.htm", "voice_emergencycall.htm", "voice_line.htm", "voice_advance.htm",	
					"voice_speeddial.htm", "voice_calllog.htm", "voice_firewall.htm", "voice_blacklist.htm", "voice_whitelist.htm", "voice_usbmail.htm",
					"usbManage.htm", "usbUserAccount.htm", "usbSmbSrv.htm", "ftpSrv.htm", "dlnaManage.htm", "printSrv.htm",
					"defGateway.htm", "route.htm", "defGateway6.htm", "route6.htm", "rip.htm", "virtualServer.htm", "portTrigger.htm", "dmz.htm", "upnp.htm",
					"parentCtrl.htm", "fwRules.htm", "fwLan.htm", "fwWan.htm", "fwSche.htm", "ddos.htm",
					"fw6Rules.htm", "fw6Lan.htm", "fw6Wan.htm", "fw6Sche.htm", "tunnel6.htm", 
					"qos.htm", "qosList.htm", "qosTrafCtrlList.htm",
					"trafficCtrl.htm", "arpBind.htm", "arpList.htm", "phDDNS.htm", "diagnostic.htm",
					"log.htm", "time.htm", "manageCtrl.htm", "cwmp.htm", "snmp.htm", 
					"backNRestore.htm", "defaultCfg.htm", "softup.htm", "restart.htm", "stat.htm", "autoReboot.htm"];
	$.paramsloaded = true;
	if (!$.find)
		$.find =  function( container, query ) {
			if (query === undefined) {
				query = container;
				container = $.d;
			}
			if ((container.nodeType && container.nodeType == 1 || container == $.d) && typeof query === "string") {
				query = " " + query;
				var qs = query.match(/\s*[#\.]?\w+/g);
				var ql;
				var ret = (container instanceof Array) ? container : [container];

				var contains = $.d.compareDocumentPosition ? function(a, b){
					return !!(a.compareDocumentPosition(b) & 16);
				} : function(a, b){
					return a !== b && (a.contains ? a.contains(b) : true);
				};
				
				while(ql = qs.shift()){
					var newRet = [];
					var exp = ql.match(/(\s*)([#\.]?)(\w+)/);
					if (exp)
						switch (exp[2]) {
						case '#':
							var obj = $.d.getElementById(exp[3]);

							if (obj && ((exp[1] && !$.each(ret, function(arg){if (contains(this, arg)) return false}, obj))
								|| (!exp[1] && $.inArray(obj, ret))))
								newRet = [obj];
							else
								return null;
							break;
						case '.':
							$.each(ret, function(){
								if (exp[1])
									$.surf(this, function(){if ($.hasClass(this, exp[3]) && !$.inArray(this, newRet)) newRet.push(this)});
								else if ($.hasClass(this, exp[3]) && !$.inArray(this, newRet))
									newRet.push(this);
							});
							break;
						default:
							$.each(ret, function(){$.merge(newRet, $.d.getElementsByTagName(exp[3]))});
							break;
						}
					if (newRet.length) {
						ret = newRet; 
						newRet = null;
					}
					else
						return null;
				}
				return ret;
			}
		};	
}

if($.curPage)
{
	switch(/(\w+).htm$/.exec($.curPage)[1])
	{
	case "demorpm":
		var testarg = "好的\"\\\'";
		break;
	case "softup":
		var _ret = 0;
		break;
	case "brdemo":
		var vlan = 1;
		var brlist = ["br0", "br1"];
		var filterlist = ["br0", "br1", "br0", "br1", "br0"];
		var iflist = ["eth0", "eth0.1", "eth0.2", "eth0.3", "eth0.4"];
		break;
	case "status":
		var swVer = "0.9.9 Build 101111 Rel.12345";
		var hwVer = "1.0.0";
		var lanArg = ["00-11-22-33-44-55", "192.168.0.1", "255.255.255.0"];
		var wanArg = ["00-11-22-33-44-56", "172.31.70.120", "255.255.0.0", "172.31.70.1", "172.31.70.1,0.0.0.0"];
		var wlArg = ["Enabled", "TPLINK_334455", "6", "11n", "300Mbps", "00-11-22-33-44-55"];
		var staArg = ["7453689", "1022303", "21232", "3821"];
		$.ret = 0;
		break;
	case "bnr":
		$.ret = 0;
		break;
	}
}