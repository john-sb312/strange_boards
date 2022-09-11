﻿var CMM_ERROR				= 1;
var CMM_RSL_CONFLICT_KEY	= 1001;

// 4500-4599 updata Firmware/Config
var CMM_CFG_FILE_TOO_LONG = 4500;
var CMM_CFG_FILE_FORMAT_ERR = 4501;
var CMM_UPDATE_FILE_LEN_ERR = 4502;
var CMM_UPDATE_FILE_VER_ERR = 4503;
var CMM_GET_SIGN_ERR = 4504;
var CMM_RESTORE_DEFAULT_CFG_ERR = 4505;
var CMM_UPDATE_ADDI_HW_VER_ERR = 4506;

// 4600-4620	sys user
// 4621-4640	management control
// 4641-4660	httpd config
// 4700-4799	Firewall
var CMM_FW_ILLEGAL_IP					= 4700;	
var CMM_FW_NOT_LAN_IP					= 4701;	
var CMM_FW_LAN_IP						= 4702;	
var CMM_FW_ILLEGAL_PORT					= 4703;	
var CMM_FW_ILLEGAL_MAC					= 4704;	
var CMM_FW_EMPTY_INTERNAL_HOST			= 4705;	
var CMM_FW_EMPTY_EXTERNAL_HOST			= 4706;	
var CMM_FW_EMPTY_TASK_SCHEDULE			= 4707;	
var CMM_FW_EMPTY_RULE					= 4708;	
var CMM_FW_ILLEGAL_RULE					= 4709;	
var CMM_FW_CONFLICT_INTERNAL_HOST		= 4710;	
var CMM_FW_CONFLICT_EXTERNAL_HOST		= 4711;	
var CMM_FW_CONFLICT_TASK_SCHEDULE		= 4712;	
var CMM_FW_CONFLICT_RULE				= 4713;	
var CMM_FW_EMPTY_URL					= 4714;	
var CMM_FW_REACH_MAX_URL				= 4715;	
var CMM_FW_REQ_DENY						= 4716;	
var CMM_FW_SET_TIMER_ERROR				= 4717;	
var CMM_FW_MALLOC_RULE_FAILED			= 4718;	
var CMM_FW_SET_DEFAULT_ACTION_FAILED	= 4719;	
var CMM_FW_SET_URL_FAILED				= 4720;	
var CMM_PC_INHOST_IS_NOT_MAC			= 4721;													
var CMM_PC_EXHOST_IS_NOT_URL			= 4722;													
var CMM_PC_MAC_IS_SAME_WITH_PARENT_MAC	= 4723;	
var CMM_FW_NAME_INCLUDE_INVALID_CHAR	= 4724;	
var CMM_FW_NAME_END_WITH_SPACE			= 4725;	
var CMM_FW_INVILID_URL					= 4726;	
var CMM_PC_MAC_IS_SAME_WITH_CHILD_MAC	= 4727;	
	
// 4800-4899	QoS & TC
var CMM_TC_DOWN_BANDWIDTH				= 4800;
var CMM_TC_UP_BANDWIDTH					= 4801;
var CMM_TC_CONFLICT						= 4802;
var CMM_TC_START_IP_ERROR				= 4803;
var CMM_TC_END_IP_ERROR					= 4804;            
var CMM_TC_DOWN_TOTAL_BW				= 4805;
var CMM_TC_UP_TOTAL_BW					= 4806;
var CMM_TC_UP_TOTAL_BW_VOIP				= 4807;
var CMM_TC_VOIP_BW_ZERO					= 4808;
var CMM_TC_DOWN_ENABLE_BANDWIDTH                        = 4809;
var CMM_TC_UP_ENABLE_BANDWIDTH                          = 4810;

var CMM_TC_MAX_ERROR					= 4849;
var CMM_QOS_EMPTY_QUEUE         		= 4850;
var CMM_QOS_WRR_TOTALBW_ZERO    		= 4851;
var CMM_QOS_MAX_PRIO            		= 4852;
var CMM_QOS_SAME_QUEUE_NAME     		= 4853;
var CMM_QOS_SAME_QUEUE_PRIO     		= 4854;
var CMM_QOS_MAX_QUEUE_WEIGHT    		= 4855;
var CMM_QOS_SCH_NOT_SUPPORTED   		= 4856;
var CMM_QOS_SAME_APP_NAME       		= 4857;
var CMM_QOS_NONEXIST_APP_INTF   		= 4858;
var CMM_QOS_NOT_WAN_APP_INTF    		= 4859;
var CMM_QOS_NONEXIST_APP_QUEUE  		= 4860;
var CMM_QOS_NONEXIST_CLS_INTF   		= 4861;
var CMM_QOS_NONEXIST_CLS_QUEUE  		= 4862;
var CMM_QOS_EMPTY_CLS_INGRESS_INTF 		= 4863;
var CMM_QOS_SAME_CLS_NAME       		= 4864;
var CMM_QOS_SAME_CLS_CRITERION  		= 4865;
var CMM_QOS_CLS_SRC_IP_NON_LAN  		= 4866;
var CMM_QOS_CLS_DEST_IP_LAN     		= 4867;
var CMM_QOS_CLS_SRC_IP_LAN      		= 4868;
var CMM_QOS_CLS_DEST_IP_NON_LAN 		= 4869;
var CMM_QOS_INTF_INVALID        		= 4870;

// 4900-4999	Forward
// 4900-4929	DMZ 
var CMM_DMZ_IP_NOT_IN_LAN_SUBNET	= 4903; 
// 4930-4969	VS 
var CMM_VS_INVALID_LOCAL_IP_PARAM	= 4930;
var CMM_VS_PROTO_TYPE_ERR			= 4931;
var CMM_VS_ADD_NEW_INTERNAL_ERR 	= 4932;
var CMM_VS_DEL_OLD_INTERNAL_ERR 	= 4933;
var CMM_VS_RECORD_ALREADY_FULL		= 4934;
var CMM_VS_RECORD_ALREADY_EXIST 	= 4935;
var CMM_VS_PORT_OUT_RANGE			= 4936;
var CMM_VS_IP_NOT_IN_LAN_SUBNET 	= 4937;
var CMM_VS_CONFLICT_REMOTE_WEB_PORT = 4938;
// 4970-4999	PT 
var CMM_PT_RECORD_ALREADY_FULL 		= 4970;
var CMM_PT_OPEN_PROTO_TYPE_ERR		= 4971;
var CMM_PT_TRIG_PROTO_TYPE_ERR		= 4972;
var CMM_PT_TRIG_PORT_CONFLICT		= 4973;
var CMM_PT_TRIG_PORT_OUT_RANGE		= 4974;
var CMM_PT_OPEN_PORT_OUT_RANGE		= 4975;
var CMM_PT_ADD_NEW_INTERNAL_ERR		= 4976;
var CMM_PT_DEL_OLD_INTERNAL_ERR		= 4977;
var CMM_PT_RECORD_ALREADY_EXIST		= 4978;

// 5000-5099	DHCP server
var CMM_LAN_IP_ERR 													= 5000;
var CMM_LAN_MASK_ERR 												= 5001;
var CMM_LAN_IP_MASK_DISMATCH 										= 5002;
var CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_WAN 							= 5003;
var CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_OTHER_LAN 					= 5004;
var CMM_LAN_UNEXPECT_EXISTING_LAN_IP_AND_MASK						= 5005;
	
var CMM_DHCPS_SRV_MIN_ADDR_ERR 										= 5010;
var CMM_DHCPS_SRV_MAX_ADDR_ERR 										= 5011;
var CMM_DHCPS_SRV_GATEWAY_ADDR_ERR									= 5012;
var CMM_DHCPS_SRV_DNS1_ADDR_ERR 									= 5013;
var CMM_DHCPS_SRV_DNS2_ADDR_ERR 									= 5014;
var CMM_DHCPS_SRV_RELAY_SRV_ADDR_ERR 								= 5015;
var CMM_DHCPS_SRV_RELAY_SRV_ADDR_EMPTY 								= 5016;
var CMM_DHCPS_SRV_MIN_ADDR_NOT_IN_THE_SAME_SUBNET 					= 5017;
var CMM_DHCPS_SRV_MAX_ADDR_NOT_IN_THE_SAME_SUBNET 					= 5018;
var CMM_DHCPS_SRV_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET 				= 5019;
	
var CMM_DHCPS_FIX_MAP_MAC_ADDR_ERR 									= 5020;
var CMM_DHCPS_FIX_MAP_IP_ADDR_ERR 									= 5021;
var CMM_DHCPS_FIX_MAP_IP_NOT_IN_THE_SAME_SUBNET 					= 5022;
var CMM_DHCPS_FIX_MAP_MAC_CONFLICT 									= 5023;
var CMM_DHCPS_FIX_MAP_IP_CONFLICT 									= 5024;

var CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_EMPTY 					= 5030;
var CMM_DHCPS_CONDITIONAL_POOL_VID_EMPTY 							= 5031;
var CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_ERR 						= 5032;
var CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_ERR 						= 5033;
var CMM_DHCPS_CONDITIONAL_POOL_IPRouters_ADDR_ERR 					= 5034;
var CMM_DHCPS_CONDITIONAL_POOL_DNS1_ADDR_ERR 						= 5035;
var CMM_DHCPS_CONDITIONAL_POOL_DNS2_ADDR_ERR 						= 5036;
var CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_NOT_IN_THE_SAME_SUBNET 		= 5038;
var CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_NOT_IN_THE_SAME_SUBNET 		= 5039;
var CMM_DHCPS_CONDITIONAL_POOL_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET 	= 5040;
var CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_CONPLICT 				= 5041;
var CMM_DHCPS_CONDITIONAL_POOL_VID_CONPLICT 						= 5042;
var CMM_DHCPS_CONDITIONAL_POOL_POOLS_CONPLICT						= 5043;
var CMM_DHCPS_CONDITIONAL_POOL_OPTION_CODE_INVALID 					= 5044;
var CMM_DHCPS_CONDITIONAL_POOL_OPTION_VALUE_EMTPY 					= 5045;
var CMM_DHCPS_CONDITIONAL_POOL_VID_ERR								= 5046;

// 5100-5199	router
var	CMM_DEFAULT_ROUTE_NAME_ERR 			= 5100;
var	CMM_STATIC_ROUTE_DEST_IP_ERR		= 5101;
var	CMM_STATIC_ROUTE_DEST_SUB_ERR 		= 5102;
var	CMM_STATIC_ROUTE_GATEWAY_ERR 		= 5103;
var	CMM_STATIC_ROUTE_SUB_DISMATCH_IP 	= 5104;
var	CMM_STATIC_ROUTE_DEST_CONFLICT_LAN 	= 5105;
var	CMM_STATIC_ROUTE_DEST_CONFLICT_WAN 	= 5106;
var	CMM_STATIC_ROUTE_ENTRY_CONFLICT 	= 5107;
var	CMM_STATIC_ROUTE_NOT_SAME_NET 		= 5108;
var	CMM_STATIC_ROUTE_NAME_ERR			= 5109;
var CMM_STATIC_ROUTE_CONN_ERR			= 5110;
var CMM_STATIC_ROUTE_NEED_IF			= 5111;

// 5200-5299	DNS & DDNS
var CMM_DNS_DEFAULT_NAME_ERR 	= 5200;
var CMM_DNS_SET_ERR 			= 5201;
var CMM_DDNS_PH_START_ERROR 	= 5210;
var CMM_DDNS_PH_CFG_MSG_ERROR = 5211;
var CMM_DDNS_PH_RT_MSG_ERROR 	= 5212;
var CMM_DDNS_PH_STATE_GET_ERROR = 5213;
var CMM_DDNS_PH_USR_ERROR = 5214;
var CMM_DDNS_PH_PWD_ERROR = 5215;
var CMM_DDNS_PH_NO_RUN = 5216;
var CMM_DYNDNS_USERNAME_ERROR = 5217;
var CMM_DYNDNS_PASSWORD_ERROR = 5218;
var CMM_DYNDNS_USERDOMAIN_ERROR = 5219;
var CMM_DYNDNS_SERVER_ERROR = 5220;
var CMM_NOIPDNS_USERNAME_ERROR = 5221;
var CMM_NOIPDNS_PASSWORD_ERROR = 5222;
var CMM_NOIPDNS_USERDOMAIN_ERROR = 5223;
var CMM_NOIPDNS_SERVER_ERROR = 5224;
var CMM_CMXDNS_USERNAME_ERROR = 5225;
var CMM_CMXDNS_PASSWORD_ERROR = 5226;
var CMM_CMXDNS_USERDOMAIN_ERROR = 5227;
var CMM_CMXDNS_SERVER_ERROR = 5228;
// 5300-5349	SNTP
var	CMM_SNTP_SET_ERR 		= 5300;
var	CMM_SNTP_YEAR_ERR 		= 5303;
var	CMM_SNTP_MONTH_ERR 		= 5304;
var	CMM_SNTP_DAY_ERR 		= 5305;
var	CMM_SNTP_HOUR_ERR 		= 5306;
var	CMM_SNTP_MONUTES_ERR 	= 5307;
var	CMM_SNTP_SECONDS_ERR 	= 5308;

var	CMM_DST_START_INVALID = 5310;	
var	CMM_DST_END_INVALID = 5311;		
var	CMM_DST_CFG_INVALID = 5312;		

// 5350-5399	CLI

// 5400-5499	IP&ARP
var CMM_ARP_BIND_ENTRY_OVERFLOW = 5400;
var CMM_ARP_BIND_ENTRY_CONFLICT_WHEN_EDIT = 5401;
var CMM_ARP_BIND_ENTRY_CONFLICT_WHEN_IMPORT = 5402;
var CMM_ARP_BIND_ENTRY_IP_ADDR_ERR = 5403;
var CMM_ARP_BIND_ENTRY_MAC_ADDR_ERR = 5404;
var CMM_ARP_BIND_ENTRY_STATE_ERR = 5405;
var CMM_ARP_BIND_ENTRY_IP_NOT_IN_LAN_SUBNET = 5406;
var CMM_ARP_BIND_ADD_SYS_ENTRY_FAILED = 5407;
var CMM_ARP_BIND_DEL_SYS_ENTRY_FAILED = 5408;
var CMM_ARP_BIND_SET_SYS_ENTRY_FAILED = 5409;
var CMM_ARP_BIND_PARAM_FORMAT_ERR = 5410;

// 5500-5519	AutoPVC

// 5520-5549	IPTV
var CMM_IPTV_INVALIED_VCI 			= 5520;
var CMM_IPTV_INVALIED_VPI 			= 5521;
var CMM_IPTV_INVALIED_LANPORT		= 5522;
var CMM_IPTV_BR_NOTIN_GROUP			= 5523;
var CMM_IPTV_LAN_NOTIN_GROUP		= 5524;	
var CMM_IPTV_LANPORT_ALREADY_USED	= 5525;
var CMM_IPTV_ETHWAN_NOT_ENABLE        = 5526;
var CMM_IPTV_LANPORT_EMPTY           = 5527;
var CMM_IPTV_IP_IN_SAME_SUBNET_WITH_WAN  = 5528;

// 5550-5569	ETH WAN
var CMM_ETHWAN_INTF_NOTIN_DFTGROUP	= 5550;
var CMM_ETHWAN_INTF_NAME_IS_NULL	= 5551;
var CMM_ETHWAN_VIR_PORTS_IS_NOT_EN	= 5552;
var CMM_ETHWAN_LANPORT_ALREADY_USED = 5554;

var CMM_ETHWAN_INTF_NOT_EXIST		= 5555;

var CMM_WAN_DSL_SCR_INVAD                       = 5570;
var CMM_WAN_DSL_PCR_INVAD                       = 5571;
var CMM_WAN_DSL_SCR_LARGER_THAN_PCR             = 5572;
var CMM_WAN_DSL_MBS_INVAD						= 5573;
var CMM_WAN_DSL_CFG_HAS_NO_INTF					= 5574;
var CMM_WAN_DSL_ERR_LINKTYPE					= 5575;

// 5650-5699	WAN common error
var CMM_WAN_INVALID_AC_TYPE						= 5650;
var CMM_WAN_LINK_CFG_IFNAME_NULL				= 5651;
var CMM_WAN_NO_LINK_CFG_OBJ						= 5652;
var CMM_WAN_UNKNOWN_CONN_TYPE					= 5653;
var CMM_WAN_CAL_FAKE_MAC_FAILED					= 5654;

// 5700-5799 Static IP & Dynamic IP
var CMM_WAN_IP_BOOL_FORMAT_ERROR				= 5700;
var CMM_WAN_IP_PARAM_NOT_VALID_VALUE			= 5701;
var CMM_WAN_IP_INVALID_IP_ADDR_FORMAT			= 5702;
var CMM_WAN_IP_IFNAME_ERROR					    = 5703;
var CMM_WAN_IP_MAC_ADDR_ERROR                   = 5704;
var CMM_WAN_IP_CLONE_MAC_ADDR_ERROR             = 5705;
var CMM_WAN_IP_MAC_OVERRIDE_ERROR				= 5706;
var CMM_WAN_IP_MAC_CLONE_ERROR					= 5707;
var CMM_WAN_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN   = 5708;
var CMM_WAN_IP_DNS_ADDR_ERROR                   = 5709;
var CMM_WAN_IP_IP_ADDR_ERROR                    = 5710;
var CMM_WAN_IP_GATEWAY_ADDR_ERROR               = 5711;
var CMM_STATIC_IP_INTF_ERR						= 5712;
var CMM_IPOA_NONE_SINGLE_PVC_MULTI_CONN			= 5713;

var CMM_WAN_IPOA_INTF_ERROR						= 5717;

// 5800-5849 L2TP
var CMM_WAN_L2TP_BOOL_FORMAT_ERROR					= 5800;
var CMM_WAN_L2TP_PARAM_NOT_VALID_VALUE				= 5801;
var CMM_WAN_L2TP_IP_INVALID_IP_ADDR_FORMAT			= 5802;
var CMM_WAN_L2TP_PPP_INVALID_IP_ADDR_FORMAT			= 5803;
var CMM_WAN_L2TP_IFNAMEIP_ERROR						= 5804;
var CMM_WAN_L2TP_L2IFNAME_ERROR						= 5805;
var CMM_WAN_L2TP_MAC_ADDR_ERROR                 	= 5806;
var CMM_WAN_L2TP_CLONE_MAC_ADDR_ERROR           	= 5807;
var CMM_WAN_L2TP_MAC_OVERRIDE_ERROR					= 5808;
var CMM_WAN_L2TP_MAC_CLONE_ERROR					= 5809;
var CMM_WAN_L2TP_IP_DNS_ADDR_ERROR                  = 5810;
var CMM_WAN_L2TP_IP_IP_ADDR_ERROR                   = 5811;
var CMM_WAN_L2TP_PPP_IP_ADDR_ERROR					= 5812;
var CMM_WAN_L2TP_IP_GATEWAY_ADDR_ERROR              = 5813;
var CMM_WAN_L2TP_PPP_GATEWAY_ADDR_ERROR				= 5814;
var CMM_WAN_L2TP_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN  = 5815;
var CMM_WAN_L2TP_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN = 5816;
	
// 5850-5899 PPTP	
var CMM_WAN_PPTP_BOOL_FORMAT_ERROR					= 5850;
var CMM_WAN_PPTP_PARAM_NOT_VALID_VALUE				= 5851;
var CMM_WAN_PPTP_IP_INVALID_IP_ADDR_FORMAT			= 5852;
var CMM_WAN_PPTP_PPP_INVALID_IP_ADDR_FORMAT			= 5853;
var CMM_WAN_PPTP_IFNAMEIP_ERROR						= 5854;
var CMM_WAN_PPTP_L2IFNAME_ERROR						= 5855;
var CMM_WAN_PPTP_MAC_ADDR_ERROR                 	= 5856;
var CMM_WAN_PPTP_CLONE_MAC_ADDR_ERROR           	= 5857;
var CMM_WAN_PPTP_MAC_OVERRIDE_ERROR					= 5858;
var CMM_WAN_PPTP_MAC_CLONE_ERROR					= 5859;
var CMM_WAN_PPTP_IP_DNS_ADDR_ERROR                  = 5860;
var CMM_WAN_PPTP_IP_IP_ADDR_ERROR                   = 5861;
var CMM_WAN_PPTP_PPP_IP_ADDR_ERROR					= 5862;
var CMM_WAN_PPTP_IP_GATEWAY_ADDR_ERROR              = 5863;
var CMM_WAN_PPTP_PPP_GATEWAY_ADDR_ERROR				= 5864;
var CMM_WAN_PPTP_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN  = 5865;
var CMM_WAN_PPTP_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN = 5866;

//5900-5999
var CMM_PPP_BOOL_FORMAT_ERROR					= 5900;
var CMM_PPP_PARAM_NOT_VALID_VALUE				= 5901;
var CMM_INVALID_PPP_ADDR_FORMAT					= 5902;
var CMM_PPP_INTF_ERROR							= 5903;
var CMM_PPP_MAC_OVERRIDE_ERROR					= 5904;
var CMM_PPP_MAC_CLONE_ERROR						= 5905;
var CMM_WAN_EXCEED_LIMITED_NUM					= 5906;
var CMM_WAN_NO_DSL_INTF_ERROR					= 5907;
var CMM_PPPOA_NONE_SINGLE_PVC_MULTI_CONN		= 5908;
var CMM_WAN_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN 	= 5909;
var CMM_WAN_INVALID_DNS							= 5910;
var CMM_WAN_NO_PPPOA_INTF					= 5911;
var CMM_WAN_PPPOA_ASSIGN_PVC_FAIL			= 5912;
var CMM_WAN_PPPOA_NO_DSL_CFG				= 5913;
var CMM_WAN_GENERATE_MAC_FAILED				= 5914;
var CMM_WAN_UNKOWN_PPP_CONN_TYPE			= 5915;
var CMM_PPP_NO_ETH_CFG_INTF					= 5916;

//6100-6199 USB
var CMM_USB_MORE_ALIVE_DEV						= 6100;
var CMM_USB_MORE_ALIVE_LOG						= 6101;
var CMM_USB_VOLUME_UMOUNT_FAIL					= 6102;
var CMM_USB_NOBODY_ERROR						= 6103;
var CMM_USB_ILLEGAL_FOLDER_PATH					= 6104;
var CMM_USB_3G_UNLOCK_PIN_CODE_FAIL				= 6110;
var CMM_USB_3G_FILE_TOO_LONG					= 6111;
var CMM_USB_3G_FILE_FORMAT_ERR					= 6112;
var CMM_USB_3G_TOO_MANY_ENTRIES					= 6113;
var CMM_USB_3G_UPLOAD_PARSE_FAILED				= 6114;
var CMM_USB_3G_ENTRY_ALREADY_EXIST				= 6115;
var CMM_USB_3G_MODEM_ENTRIES_FULL				= 6116;

// 6200-6299 IPv6
var CMM_ROUTE6_ADDR_VALID				= 6200;
var CMM_ROUTE6_DEFAULT_ROUTE_NAME_ERR	= 6201;
var CMM_ROUTE6_PREFIX_LEN_VALID			= 6210;
var CMM_ROUTE6_ENTRY_DUPLICATE			= 6211;
var CMM_ROUTE6_DEST_CONFLICT_LAN 		= 6212;
var CMM_ROUTE6_GW_PFX_NOT_SAME_WITH_WAN = 6213;
var CMM_ROUTE6_CONN_ERR					= 6214;	
	
var CMM_WAN6_CONN_TYPE_INVALID			= 6220;

var CMM_TUNNEL6_6RD_PREFIX_INVALID		= 6230;
	
//7000-7200 voip
var CMM_VOIP_FEATURE_CODE_LEN_ERROR		= 7003;
var CMM_VOIP_FEATURE_CODE_STRING_ERROR	= 7004;
var CMM_VOIP_FEATURE_CODE_CONFLICT_ERROR	= 7005;
var CMM_VOIP_PROFILE_NAME_CONFLICT_ERROR	= 7006;
var CMM_VOIP_PROFILE_CONFLICT_ERROR			= 7009;

// 7500-7999 WLAN
var CMM_WLAN_PARAM_CONFLICTE 				= 7500;	
var CMM_WLAN_INVALID_PARAM_VALUE			= 7501;	
var CMM_WLAN_SSID_CONFLICTE					= 7503;	
var CMM_WLAN_MACFILTER_ADDR_CONFLICT		= 7504;	
var CMM_WLAN_SSID_CONFLICTE_WITH_GUESTNET	= 7505;	
var CMM_WLAN_READ_DEFAULT_PIN_FAILED		= 7508;	

//7600 IPSEC
var CMM_TUNNEL_NAME_ALREADY_EXITS           = 7800;
var CMM_TUNNEL_LOCAL_IP_SHOULD_IN_LAN       = 7801;
var CMM_TUNNEL_REMOTE_IP_CONFLICT_LAN       = 7802;

// 9000 DM
var CMM_METHOD_NOT_SUPPORTED				= 9000;
var CMM_REQUEST_DENIED						= 9001;
var CMM_INTERNAL_ERROR						= 9002;
var CMM_INVALID_ARGUMENTS					= 9003;
var CMM_RESOURCE_EXCEEDED					= 9004;
var CMM_INVALID_PARAM_NAME					= 9005;
var CMM_INVALID_PARAM_TYPE					= 9006;
var CMM_INVALID_PARAM_VALUE 				= 9007;
var CMM_INVALID_CONFIG_FILE					= 9802;
var CMM_OBJECT_NOT_FOUND					= 9804;
var CMM_INSTANCE_NOT_FOUND					= 9805;
var CMM_OBJECT_BUF_EXCEEDED					= 9808;
var CMM_REACH_MAX_INSTANCE_NUM				= 9812;

// 71000-71999 errno from httpd
var ERR_HTTP_BASE = 71000;
var HTTP_ERR_FORMAT = 71011;
var ERR_HTTP_ERR_GET = 71012;
var ERR_HTTP_ERR_SET = 71013;
var ERR_HTTP_ERR_CGI_INVALID_FORMAT = 71014;
var ERR_HTTP_ERR_CGI_INVALID_OP = 71015;
var ERR_HTTP_ERR_CGI_INVALID_CGI = 71016;
var ERR_HTTP_ERR_CGI_INVALID_ANSI = 71017;
var ERR_HTTP_ERR_IO = 71111;
var ERR_HTTP_ERR_SOFT_UP = 71211;
var ERR_HTTP_ERR_CONF_UP = 71221;
var ERR_HTTP_ERR_USER_NAME_NOT_CORRECT = 71230;
var ERR_HTTP_ERR_USER_TYPE = 71231;
var ERR_HTTP_ERR_USER_CMM_ARG = 71232;
var ERR_HTTP_ERR_USER_PWD_NOT_CORRECT = 71233;
var ERR_HTTP_ERR_USER_WEB_ARG = 71234;
var ERR_HTTP_ERR_TOOL_GET_IPMAC = 71241;

//80000 - 80999 WEB basic error
var ERR_UNKOWN = 80000;
var ERR_EXIT = 80001;
var ERR_NONE_FILE = 80002;
var ERR_GET = 80011;
var ERR_SET = 80012;
var ERR_NUM_INVAD = 80101;
var ERR_NUM_OUTRANGE = 80102;
var ERR_STR_NOT_ASCII = 80201;
var ERR_IP_FORMAT = 80301;
var ERR_IP_BROADCAST = 80302;
var ERR_IP_SUBNETA_NET_0 = 80303;
var ERR_IP_LOOPBACK = 80304;
var ERR_IP_SUBNETC_HOST_255 = 80305;
var ERR_IP_MULTICAST = 80306;
var ERR_IP_PRESERVED = 80307;
var ERR_MASK_INVAD = 80308;
var ERR_IPMASK_SUBNET_INVAD = 80309;
var ERR_IPMASK_HOST_INVAD = 80310;
var ERR_IPGW_NOT_SAME_SUBNET = 80311;
var ERR_MAC_FORMAT = 80401;
var ERR_MAC_ZERO = 80402;
var ERR_MAC_BROADCAST = 80403;
var ERR_MAC_MULTICAST = 80404;

// 84400-84599 CWMP
var ERR_CWMP_URL_INVAD = 84400;
var ERR_CWMP_PATH_INVAD = 84401;
var ERR_CWMP_PORT_INVAD = 84402;

// 84500-84599 updata Firmware/Config
var ERR_CONF_FILE_NONE = 84500;
var ERR_FIRM_FILE_NONE = 84501;

// 84600-84619	sys user
var ERR_USER_OLD_PWD_EMPTY = 84600;
var ERR_USER_OLD_PWD_ASCII = 84601;
var ERR_USER_NAME_EMPTY = 84602;
var ERR_USER_NAME_ASCII = 84603;
var ERR_USER_PWD_EMPTY = 84604;
var ERR_USER_PWD_ASCII = 84605;
var ERR_USER_NAME_PWD_CONFLICT = 84606;
var ERR_USER_OLD_NAME_EMPTY = 84607;
var ERR_USER_OLD_NAME_ASCII = 84608;
var ERR_USER_NAME_HAS_SPACE = 84609;
var ERR_USER_PWD_HAS_SPACE = 84610;

// 84620-84639	management control
var ERR_APP_LOCAL_HOST = 84620;
var ERR_APP_REMOTE_HOST = 84621;
var ERR_APP_LOCAL_MAC = 84622;
var ERR_APP_REMOTE_IP = 84623;

// 84640-84659	httpd config
var ERR_HTTP_LOCAL_PORT = 84640;
var ERR_HTTPS_LOCAL_PORT = 84641;
var ERR_HTTP_HTTPS_LOCAL_CONFILICT = 84642;
var ERR_HTTP_REMOTE_PORT = 84643;
var ERR_HTTP_REMOTE_HTTPS_LOCAL_CONFILICT = 84644;
var ERR_HTTPS_REMOTE_PORT = 84645;
var ERR_HTTP_LOCAL_HTTPS_REMOTE_CONFILICT = 84646;
var ERR_HTTP_HTTPS_REMOTE_CONFILICT = 84647;

// 84661-84680	time
var ERR_TIME_YEAR_INVAD = 84661;
var ERR_TIME_MONTH_INVAD = 84662;
var ERR_TIME_DAY_INVAD = 84663;
var ERR_TIME_HOUR_INVAD = 84664;
var ERR_TIME_MINUTE_INVAD = 84665;
var ERR_TIME_SECOND_INVAD = 84666;
var ERR_TIME_NTP_SERVER = 84667;

// 84681 - 84699	diagnostic
var ERR_DIAG_PACKET_SIZE = 84681;
var ERR_DIAG_TIME_OUT	= 84682;
var ERR_DIAG_EWAN_OFF	= 84683;
var ERR_DIAG_PING_COUNT = 84684;
var ERR_DIAG_IP_ADDR = 84685;
var ERR_DIAG_TTL	= 84686;

// 84700-84799	FierWall
var ERR_FW_ENTRYNAME_INVAD = 84700;
var ERR_FW_URL_INVAD = 84701;
var ERR_FW_RULE_INVAD = 84702;
var ERR_FW_TIME_INVAD = 84703;
var ERR_FW_URL_NULL = 84704;

// 84800-84899	QoS & TC
var ERR_TC_IP_PORT_INVAD		= 84800;
var ERR_TC_NUM_INVAD			= 84801;
var ERR_PORT_NUM_INVAD			= 84802;
var ERR_PORT_ORDER_INVAD		= 84803;
var ERR_EMPTY_START_PORT		= 84804;
var ERR_TC_IP_ORDER_INVAD		= 84805;
var ERR_TC_BW_ORDER_INVAD		= 84806;
var ERR_TC_EMPTY_START_IP		= 84807;
var ERR_TC_BW_NULL			= 84808;
var ERR_QOS_TOTALBW_INVAD 		= 84850;
var ERR_QOS_TOTALBW_INVAD_SP 	= 84851;
var ERR_QOS_QUEUE_DIR 			= 84852;
var ERR_QOS_QUEUE_NAME 			= 84853;
var ERR_QOS_QUEUE_NAME_LENGTH 	= 84854;
var ERR_QOS_QUEUE_WEIGHT_NUM 	= 84855;
var ERR_QOS_QUEUE_SCH 			= 84856;
var ERR_QOS_CLS_NAME 			= 84857;
var ERR_QOS_CLS_NAME_LENGTH 	= 84858;
var ERR_QOS_CLS_INTF_INVAD 		= 84859;
var ERR_MAC_MASK_INVAD 			= 84860;
var ERR_QOS_EMPTY_QUEUE 		= 84861;
var ERR_QOS_APP_NAME 			= 84862;

// 84900-84999	Forward
var ERR_VS_PORT_INVAD = 84930;
var ERR_FW_ADD_FAILED = 84931;
var ERR_FTP_DATA_PORT_CONFLICT = 84932;
var ERR_VS_INTER_PORT_INVAD = 84933;

// 85000-85099 LAN & DHCPS
var ERR_LAN_IP_INVAD = 85000;
var ERR_LAN_MASK_INVAD = 85001;
var ERR_LAN_IPMASK_INVAD = 85002;
var ERR_DHCP_START_IP_INVAD = 85010;
var ERR_DHCP_END_IP_INVAD = 85011;
var ERR_DHCP_LEASE_INVAD = 85012;
var ERR_DHCP_GATEWAY_INVAD = 85013;
var ERR_DOMAIN_INVAD = 85014;
var ERR_DHCP_DNS1_INVAD = 85015;
var ERR_DHCP_DNS2_INVAD = 85016;
var ERR_DHCP_RMT_SRV_EMPTY = 85017;
var ERR_DHCP_RMT_SRV_INVAD = 85018;
var ERR_LAN_SEC_IP_INVAD = 85019;
var ERR_DHCP_POOL_INVAD = 85020;
var ERR_DHCP_START_IP_INVAD_1 = 85021;
var ERR_DHCP_END_IP_INVAD_1 = 85022;

var ERR_DHCP_COND_POOL_DEV_NAME_EMPTY = 85040;
var ERR_DHCP_COND_POOL_VID_EMPTY = 85041;
var ERR_DHCP_COND_POOL_START_IP_INVAD = 85042;
var ERR_DHCP_COND_POOL_END_IP_INVAD = 85043;
var ERR_DHCP_COND_POOL_GW_INVAD = 85044;
var ERR_DHCP_COND_POOL_OPT_VAL_EMPTY = 85045;
var ERR_DHCP_COND_DNS1_INVAD = 85046;
var ERR_DHCP_COND_DNS2_INVAD = 85047;
var ERR_GATEWAY_INVAD = 85048;
var ERR_DHCP_COND_POOL_VID_INVAD = 85049;
var ERR_DHCP_COND_POOL_DEV_NAME_INVALID = 85050;

// 85100-85199 route

// 85200-85299 DNS&DDNS
var ERR_DDNS_USERNAME_EMPTY = 85200;
var ERR_DDNS_PWD_EMPTY = 85201;
var ERR_DDNS_DOMAIN_INVAD = 85202;
var ERR_DDNS_DOMAIN_EMPTY = 85203;

// 85300-85349 SNTP

// 85350-85399 CLI

// 85400-85499 ARP
var ERR_ARP_CONFLICT = 85401;
var ERR_SEL_INVAD = 85402;

// 85500-85519	AutoPVC
var ERR_AUTOPVC_VPI_INVAD = 85501;
var ERR_AUTOPVC_VCI_INVAD = 85502;
var ERR_AUTOPVC_EXSIST_INVAD = 85503;

// 85520-85549	IPTV
var ERR_IPTV_LANPORT_EMPTY = 85520;
// 85550-85569	ETH WAN

// 85590-85599 DSL
var ERR_DSL_MODULATION_MODE_NULL =85591; 

// 85600-85699	Bridge
var ERR_WAN_VPI_VCI_INVAD 	= 85601;
var ERR_WAN_PCR_INVAD 		= 85602;
var ERR_WAN_SCR_INVAD 		= 85603;
var ERR_WAN_MBS_INVAD 		= 85604;
var ERR_WAN_CONNECTIONTYPE_NULL  = 85605;
var ERR_WAN_CONNECTIONTYPE_INVAD = 85606;
var ERR_WAN_MTU_INVAD = 85607;
var ERR_WAN_DNSADDR_INVAD = 85608;
var ERR_WAN_SECDNS_INVAD = 85609;
var ERR_WAN_ECHOTIME_INVAD = 85610;
var ERR_WAN_USERNAME_INVAD = 85611;
var ERR_WAN_PWD_INVAD = 85612;
var ERR_WAN_PPPOE_MTU_INVAD = 85613;
var ERR_WAN_DEFGATEWAY_INVAD = 85614;
var ERR_AUTOPVC_INVAD = 85615;
var ERR_AUTOPVC_IP_FORMAT = 85616;
var ERR_GROUP_INVAD = 85617;
var ERR_INTERFACE_INVAD = 85618;
var ERR_GROUP_NAME_INVAD = 85619;
var ERR_PWD_INVAD = 85620;
var ERR_USERNAME_INVAD = 85621;
var ERR_WAN_SCR_EMPTY = 85622;
var ERR_WAN_PCR_EMPTY = 85623;
var ERR_WAN_SCR_LARGER_THAN_PCR = 85624;
var ERR_WAN_INTER_GROUPNAME_INVALID = 85625;
var ERR_WAN_MBS_EMPTY = 85626;
var ERR_WAN_DA_SERVER_NAME_EMPTY = 85627;
var ERR_WAN_DA_DNS_EMPTY = 85628;
var ERR_AUTHSERVER_INVAD = 85629;
var ERR_AUTHDOMAIN_INVAD = 85630;
var ERR_WAN_L2TP_MTU_INVAD = 85631;
var ERR_WAN_PPTP_MTU_INVAD = 85632;
var ERR_WAN_BPA_AUTHSERVER_INVAD = 85633;

// 85700-85799	Static IP/IPoA
var ERR_STAIP_IP_INVAD = 85700;
var ERR_STAIP_MASK_INVAD = 85701;
var ERR_STAIP_GW_INVAD = 85702;
var ERR_STAIP_IP_MASK_CONFLICT = 85703;
var ERR_STAIP_GW_MASK_CONFLICT = 85704;
var ERR_STAIP_IP_GW_CONFLICT = 85705;
var ERR_STAIP_DNS1_INVAD = 85706;
var ERR_STAIP_DNS2_INVAD = 85707;
var ERR_IPOA_PVC_INVAD = 85708;

// 85800-85899	Dynamic IP
var ERR_WAN_HOST_NAME_INVALID = 85800;
var ERR_WAN_DNS_INVAD = 85801;

// 85900-85999	PPPoE/PPPoA	
var ERR_IDLETIME_INVAD = 85900;
var ERR_PPPOA_PVC_INVAD = 85901;

// 86000-86099 SNMP
var ERR_SNMP_RCOMMUNITY_EMPTY	= 86000;
var ERR_SNMP_SCOMMUNITY_EMPTY	= 86001;
var ERR_SNMP_TRAP_IP_INVAD		= 86002;

//86100-86199 USB
var ERR_USB_SHARE_NAME_EMPTY					= 86111;
var ERR_USB_SHARE_NAME_NOT_ASCII				= 86112;
var ERR_USB_INVALID_CHAR_IN_FOLDER_NAME			= 86113;
var ERR_USB_DIR_NAME_EMPTY						= 86114;
var ERR_USB_DIR_NAME_NOT_ASCII					= 86115;
var ERR_USB_DIR_EXIST							= 86116;
var ERR_USB_SHARE_NAME_EXIST					= 86117;
var ERR_USB_DIR_NOT_EXIST						= 86118;
var ERR_USB_INVALID_CHAR_IN_USER_NAME			= 86119;
var ERR_USB_CONFLICT_USER_NAME					= 86120;
var ERR_USB_FTP_PORT_EMPTY						= 86121;
var ERR_USB_FTP_PORT_NOT_NUM					= 86122;
var ERR_USB_FTP_PORT_RANGE						= 86123;
var ERR_USB_FTP_PORT_CONFLICT					= 86124;
var ERR_USB_DLNA_SERVER_NAME_EMPTY              = 86125;
var ERR_USB_DLNA_SERVER_NAME_NOT_ASCII          = 86126;
var ERR_USB_DLNA_INVALID_SERVER_NAME            = 86127;
//86180-86199 USB 3G
var ERR_USB_3G_FILE_NONE						= 86180;

// 86200-86299	IPv6
var ERR_IP6_WAN_CONN_NONE		 		= 86200;
var ERR_LAN6_PREFIX_EMPTY 		 		= 86201;
var ERR_LAN6_PREFIX_INVALID		 		= 86202;
var ERR_LAN6_PREFIX_LEN_EMPTY 	 		= 86203;
var ERR_LAN6_PREFIX_LEN_INVALID   		= 86204;
var ERR_LAN6_DHCP6S_START_ID_EMPTY 		= 86205;
var ERR_LAN6_DHCP6S_END_ID_EMPTY 		= 86206;
var ERR_LAN6_LEASE_TIME_EMPTY 			= 86207;
var ERR_LAN6_DHCP6S_START_ID_INVALID	= 86208;
var ERR_LAN6_DHCP6S_END_ID_INVALID 		= 86209;
var ERR_LAN6_LEASE_TIME_INVALID   		= 86210;
var ERR_LAN6_DHCP6S_ADDR_CONFLICT 		= 86211;
var ERR_WAN6_IP_STACK_NONE				= 86220;
var ERR_WAN6_ADDR_INVAD					= 86221;
var ERR_WAN6_PFXLEN_INVAD				= 86222;
var ERR_WAN6_DNS_INVAD					= 86223;
var ERR_ROUTE6_DST_ADDR_VALID 			= 86240;
var ERR_ROUTE6_PREFIX_LEN_VALID 		= 86241;
var ERR_ROUTE6_GW_ADDR_VALID 			= 86242;
var ERR_ROUTE6_GW_VALID 				= 86243;
var ERR_TUNNEL6_DSLITE_REMOTE_INVALID	= 86250;
var ERR_TUNNEL6_DSLITE_WAN_CONN_ERR		= 86251;
var ERR_TUNNEL6_6RD_PREFIX_LEN_INVALID	= 86252;
var ERR_TUNNEL6_6RD_PREFIX_INVALID		= 86253;
var ERR_TUNNEL6_6RD_BR_INVALID			= 86254;
var ERR_TUNNEL6_6RD_IP_MASK_LEN_INVALID	= 86255;
var ERR_TUNNEL6_6RD_NOT_SUPPORT_AUTO	= 86256;
var ERR_TUNNEL6_6RD_WAN_CONN_ERR		= 86257;
var ERR_TUNNEL6_6TO4_WAN_CONN_ERR		= 86258;
var ERR_FW6_ADDR_INVAD					= 86260;
var ERR_FW6_PFXLEN_INVAD				= 86261;

//86400-86499  Voip
var ERR_VOIP_ACCOUNT_MUCH_DEL_ERROR		= 86400;
var ERR_VOIP_ACCOUNT_MUCH_ADD_ERROR		= 86401;
var ERR_VOIP_PROFILE_CONFLICT_ERROR		= 86402;
var ERR_VOIP_NUM_AND_REGISTRAR_CONFLICT_ERROR	= 86403;
var ERR_VOIP_PREFIX_CONFLICT_ERROR		= 86404;
var ERR_VOIP_DEST_EMPTY_ERROR			= 86405;
var ERR_VOIP_PREFIX_MAXLEN_ERROR		= 86406;
var ERR_VOIP_STRIP_LENGTH_ERROR			= 86407;
var ERR_VOIP_INTERFACE_ENABLE_ERROR		= 86408;
var ERR_VOIP_DIALPLAN_ADD_ERROR			= 86409;
var ERR_VOIP_INTERFACE_BAR_ERROR		= 86410;
var ERR_VOIP_ENTRY_MAX_ERROR			= 86411;
var ERR_VOIP_SPEEDDIAL_CONFLICT_ERROR	= 86412;
var ERR_VOIP_USB_DISCONNECT				= 86413;
var ERR_VOIP_USB_NO_FILES_ERROR			= 86414;
var ERR_VOIP_USB_CAP_NOT_EGOUGH			= 86415;
var ERR_VOIP_DIALPLAN_DEL				= 86416;
var ERR_VOIP_TOO_MANY_DIALPLAN			= 86417;
var ERR_VOIP_USB_BUSY_ERROR				= 86418;
var ERR_VOIP_CHAR_ERROR					= 86419;
var ERR_VOIP_NOT_EMPTY					= 86420;
var ERR_VOIP_VALUE_LEN_ERROR			= 86421;
var ERR_VOIP_NUMBER_OUT_RANGE			= 86422;
var ERR_VOIP_VALUE_INVALID				= 86423;
var ERR_VOIP_VALUE_FORMAT_ERROR			= 86424;
var ERR_VOIP_CONTAIN_ILLEGAL_CHAR		= 86425;
var ERR_VOIP_INVALID_IP					= 86426;
var ERR_VOIP_EXIST_ERROR				= 86427;
var ERR_VOIP_LIST_CONFILICT				= 86428;
var ERR_VOIP_PROFILE_NAME_CONFLICT_ERROR	= 86429;

// 87500-87999  Wireless
var ERR_WLAN_SSID_IS_EMPTY=87500;
var ERR_WLAN_SSID_LEN_OUTRANGE=87501;
var ERR_WLAN_WDS_SSID_IS_EMPTY=87502;
var ERR_WLAN_WDS_SSID_LEN_OUTRANGE=87503;
var ERR_WLAN_WDS_BSSID_IS_EMPTY=87504;
var ERR_WLAN_WDS_BSSID_INVALID=87505;
var ERR_WLAN_WDS_ASCII_KEY_INVALID=87506;
var ERR_WLAN_WDS_ASCII_KEY_OUTRANGE=87507;
var ERR_WLAN_WDS_HEX_KEY_INVALID=87508;
var ERR_WLAN_WDS_HEX_KEY_OUTRANGE=87509;
var ERR_WLAN_WDS_PSK_OUTRANGE=87510;
var ERR_WLAN_WDS_AUTO_CHANNEL=87511;
var ERR_WLAN_WDS_CHANNEL=87512;
var ERR_WLAN_SSID_IS_ILLEGAL=87513;
var ERR_WLAN_BEACONINTERVAL_INVAD=87550;
var ERR_WLAN_RTSINTERVAL_INVAD=87551;
var ERR_WLAN_FRAGTH_INVAD=87552;
var ERR_WLAN_DTIMTH_INVAD=87553;
var ERR_WLAN_BEACONINTERVAL_OUTRANGE=87554;
var ERR_WLAN_RTSINTERVAL_OUTRANGE=87555;
var ERR_WLAN_FRAGTH_OUTRANGE=87556;
var ERR_WLAN_DTIMTH_OUTRANGE=87557;
var ERR_WLAN_PIN_EMPTY=87600;
var ERR_WLAN_PIN_LEGNTH_INVALID=87601;
var ERR_WLAN_PIN_INVALID=87602;
var ERR_WLAN_PIN_CHECKSUM_FAIL=87603;
var ERR_WLAN_11N_WEP_CONFLICT=87650;
var ERR_WLAN_11N_TKIP_CONFLICT=87651;
var ERR_WLAN_QSS_WPA_CONFLICT=87652;
var ERR_WLAN_QSS_TKIP_CONFLICT=87653;
var ERR_WLAN_QSS_WEP_CONFLICT=87654;
var ERR_WLAN_MSSID_WEP_CONFLICT=87655; 
var ERR_WLAN_GUESTNETWORK_WEP_CONFLICT = 87656;
var ERR_WLAN_GUESTNETWORK_MAXSTANUM_INVALID = 87657;
var ERR_WLAN_WEP_NO_KEY=87700;
var ERR_WLAN_WEP_KEY_LENGTH_INVALID=87701;
var ERR_WLAN_WEP_KEY_HEX_INVALID=87702;
var ERR_WLAN_WEP_KEY_ASCII_INVALID=87703;
var ERR_WLAN_WPA_PSK_EMPTY=87704;
var ERR_WLAN_WPA_PSK_LENGTH_INVALID=87705;
var ERR_WLAN_WPA_PSK_HEX_INVALID=87706;
var ERR_WLAN_WPA_PSK_ASCII_INVALID=87707;
var ERR_WLAN_WPA_INTERVAL_INVALID=87708;
var ERR_WLAN_WPA_PORT_INVALID=87709;
var ERR_WLAN_WPA_PWD_EMPTY=87710;
var ERR_WLAN_WPA_PWD_INVALID=87711;
var ERR_WLAN_MAC_LIST_EMPTY=87750;
var ERR_WLAN_MAC_INVALID=87751;
var ERR_WLAN_MAC_CONFLICT=87752;
var ERR_WLAN_MAC_FILTER_INVALID=87753;
var ERR_WLAN_MAC_FILTER_DESCRIP_INVALID=87754;

// 88000-88099 IPTV Spec
var ERR_VLAN_INVALID_VLANID = 88001;
var ERR_VLAN_SAME_VLANID = 88002;
var ERR_VLAN_NO_INTERNET_GROUP = 88003;

//89000-89100 3G error
var ERR_PIN_CODE_EMPTY=89000;
var ERR_PIN_ASCII=89001;
var ERR_PIN_CODE_CONFLICT=89002;
var ERR_3G_INVLIAD_DIALNUM=89003;

//90000-90600 HTTP protocol error
var ERR_INTERNAL = 90000;
var ERR_NOT_FOUND = 90404;
var ERR_NOT_ACCEPTED = 90500;

//102000-? IE error
var ERR_NETWORK = 102000;

window.e_str = {};

e_str[CMM_ERROR]				= "Lỗi nội bộ!";
e_str[CMM_RSL_CONFLICT_KEY]		= "Mật mã đã tồn tại! Vui lòng nhập một giá trị khác.";

// 4500-4599 updata Firmware/Config
e_str[CMM_CFG_FILE_TOO_LONG] = "Kích thước tập tin không hợp lệ! Vui lòng kiểm tra tập tin của bạn và thử lại.";
e_str[CMM_CFG_FILE_FORMAT_ERR] = "Bạn đặt một tập tin sai.";
e_str[CMM_UPDATE_FILE_LEN_ERR] = "Kích thước tập tin không hợp lệ! Vui lòng kiểm tra tập tin của bạn và thử lại.";
e_str[CMM_UPDATE_FILE_VER_ERR] = "Các tập tin được tải lên không được chấp nhận bởi thiết bị.";
e_str[CMM_GET_SIGN_ERR] = "Lỗi! Vui lòng thử lại.";
e_str[CMM_RESTORE_DEFAULT_CFG_ERR] = "Không thể khôi phục lại các thiết lập mặc định.";
e_str[CMM_UPDATE_ADDI_HW_VER_ERR] = "Các tập tin được tải lên không phù hợp với phiên bản phần cứng hiện tại của thiết bị.";

// 4600-4619	sys user
// 4620-4639	management control
// 4640-4659	httpd config

// 4700-4799	firewall & parent control
e_str[CMM_FW_ILLEGAL_IP] = "Địa chỉ IP không hợp lệ!";
e_str[CMM_FW_NOT_LAN_IP] = "IP máy chủ mạng LAN không được trong cùng subnet với IP mạng LAN. Vui lòng nhập một số khác.";
e_str[CMM_FW_LAN_IP] = "IP máy chủ mạng WAN và IP máy chủ mạng LAN hiện tại đang ở trong cùng một subnet. Vui lòng nhập một số khác.";
e_str[CMM_FW_ILLEGAL_PORT] = "Số cổng không hợp lệ! Vui lòng nhập một giá trị khác nằm trong khoảng (1-65535).";
e_str[CMM_FW_ILLEGAL_MAC] = "Địa chỉ MAC không hợp lệ! Định dạng hợp lệ là '00-00-00-00-00-00'.";
e_str[CMM_FW_EMPTY_INTERNAL_HOST] = "Ít nhất, xin vui lòng cấu hình địa chỉ IP, cổng hoặc địa chỉ MAC cho máy chủ LAN.";
e_str[CMM_FW_EMPTY_EXTERNAL_HOST] = "Ít nhất, xin vui lòng cấu hình địa chỉ IP, cổng hoặc địa chỉ MAC cho máy chủ WAN.";
e_str[CMM_FW_EMPTY_TASK_SCHEDULE] = "Vui lòng cấu hình thời gian cho thời gian biểu mới.";
e_str[CMM_FW_EMPTY_RULE] = "Ít nhất, xin vui lòng cấu hình máy chủ LAN hoặc máy chủ WAN cho điều luật lọc.";
e_str[CMM_FW_ILLEGAL_RULE] = "Điều luật lọc không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[CMM_FW_CONFLICT_INTERNAL_HOST] = "Máy chủ LAN được thêm vào xung đột với máy chủ LAN hiện tại.";
e_str[CMM_FW_CONFLICT_EXTERNAL_HOST] = "Máy chủ WAN được thêm vào xung đột với máy chủ WAN hiện tại.";
e_str[CMM_FW_CONFLICT_TASK_SCHEDULE] = "Thời gian biểu được thêm vào xung đột với thời gian biểu hiện tại.";
e_str[CMM_FW_CONFLICT_RULE] = "Xung đột quy tắc lọc bổ sung với các quy tắt hiện hành.";
e_str[CMM_FW_EMPTY_URL] = "Vui lòng nhập ít nhất một URL của một trang web!";
e_str[CMM_FW_REACH_MAX_URL] = "Số URL đã đạt đến trên mức giới hạn!";
e_str[CMM_FW_REQ_DENY] = "Mục được sử dụng, không được phép xóa!";
e_str[CMM_FW_MALLOC_RULE_FAILED] = "Lỗi nội bộ xuất hiện trong cài đặt điều luật.";
e_str[CMM_FW_SET_DEFAULT_ACTION_FAILED] = "Không thể cấu hình quy tắc lọc mặc định.";
e_str[CMM_FW_SET_URL_FAILED] = "Không thể cấu hình URL!";
e_str[CMM_PC_MAC_IS_SAME_WITH_PARENT_MAC] = "Địa chỉ MAC của máy trẻ em phải khác với địa chỉ MAC của máy cha mẹ. Vui lòng nhập một giá trị khác. ";
e_str[CMM_FW_NAME_INCLUDE_INVALID_CHAR] = "Giá trị đầu vào không được chứa: \ / \":?. * <> | & Vui lòng nhập một số khác.";
e_str[CMM_FW_NAME_END_WITH_SPACE] = "Giá trị đầu vào không nên kết thúc với ký tự khoảng trắng. Vui lòng nhập một số khác.";
e_str[CMM_FW_INVILID_URL] = "Đầu vào URL chứa các ký tự không hợp lệ. Vui lòng nhập một số khác.";
e_str[CMM_PC_MAC_IS_SAME_WITH_CHILD_MAC] = "Địa chỉ MAC của máy cha mẹ phải khác mới địa chỉ MAC của máy trẻ em. Vui lòng nhập một giá trị khác.";

// 4800-4899	QoS & TC
e_str[CMM_TC_DOWN_BANDWIDTH] = "Hệ thống không thể đáp ứng tốc độ lưu lượng dòng xuống tối thiểu được yêu cầu. Vui lòng nhập lại.";
e_str[CMM_TC_UP_BANDWIDTH] = "Hệ thống không thể đáp ứng tốc độ lưu lượng dòng lên tối thiểu được yêu cầu. Vui lòng nhập lại.";
e_str[CMM_TC_CONFLICT] = "Quy tắc được thêm vào xung đột với quy tắc hiện tại.";
e_str[CMM_TC_START_IP_ERROR] = "Các địa chỉ IP bắt đầu cũng giống như IP mạng LAN hoặc không ở cùng một subnet với địa chỉ IP của mạng LAN. Vui lòng nhập một số khác.";
e_str[CMM_TC_END_IP_ERROR] = "Địa chỉ IP kết thúc giống nhau như địa chỉ IP LAN hoặc không ở cùng một subnet với địa chỉ IP của mạng LAN. Vui lòng nhập một số khác.";
e_str[CMM_TC_DOWN_TOTAL_BW] = "Tổng băng thông đi vào không được nhỏ hơn tổng của tất cả tốc độ luồng xuống tối thiểu của các quy tắc được kích hoạt.";
e_str[CMM_TC_UP_TOTAL_BW] = "Tổng băng thông đi ra không được nhỏ hơn tổng của tất cả tốc độ  luồng lên tối thiểu của các quy tắc được kích hoạt.";
e_str[CMM_TC_MAX_ERROR] = "Danh sách điều luật kiểm soát băng thông đã đầy!Vui lòng xóa một mục đã có trước khi thêm một mục mới.";
e_str[CMM_TC_DOWN_ENABLE_BANDWIDTH] = "System can't satisfy the min downstream rate. Please modify the min downstream rate and try again.";
e_str[CMM_TC_UP_ENABLE_BANDWIDTH] = "System can't satisfy the min upstream rate. Please modify the min upstream rate and try again.";

e_str[CMM_QOS_EMPTY_QUEUE] = "Phân loại doanh nghiệp hoặc lưu lượng phải liên kết thành một hàng.";
e_str[CMM_QOS_WRR_TOTALBW_ZERO] = "Trọng lượng của hàng WRR được thêm vào phải lớn hơn 0!";
e_str[CMM_QOS_MAX_PRIO] = "Các ưu tiên của hàng SP thêm không phải lớn hơn 8!";
e_str[CMM_QOS_SAME_QUEUE_NAME] = "Tên của hàng đợi cùng hướng QoS phải khác nhau!";
e_str[CMM_QOS_SAME_QUEUE_PRIO] = "Các ưu tiên của hàng SP thêm không phải là cùng với hàng SP hiện có!";
e_str[CMM_QOS_MAX_QUEUE_WEIGHT] = "Tổng của tất cả các hàng WRR với cùng hướng QoS không được lớn hơn 100!";
e_str[CMM_QOS_SCH_NOT_SUPPORTED] = "Hệ thống không thể hỗ trợ các thuật toán lập lịch được yêu cầu";
e_str[CMM_QOS_SAME_APP_NAME] = "Tên doanh nghiệp trong phân loại doanh nghiệp được thêm vào không được giống với phân loại doanh nghiệp hiện tại!";
e_str[CMM_QOS_NONEXIST_APP_INTF] = "Giao diện QoS mà phân loại doanh nghiệp là ràng buộc không tồn tại!";
e_str[CMM_QOS_NOT_WAN_APP_INTF] = "Phân loại doanh nghiệp chỉ được sử dụng cho QoS ngược dòng!";
e_str[CMM_QOS_NONEXIST_APP_QUEUE] = "Phân loại kết hợp với hàng đợi QoS không tồn tại!";
e_str[CMM_QOS_NONEXIST_CLS_INTF] = "Giao diện QoS mà phân loại lưu lượng là ràng buộc không tồn tại!";
e_str[CMM_QOS_NONEXIST_CLS_QUEUE] = "Luồng phân loại kết hợp với hàng đợi QoS không tồn tại!";
e_str[CMM_QOS_EMPTY_CLS_INGRESS_INTF] = "Giao diệnphân loại lưu lượng vào không hợp lệ!";
e_str[CMM_QOS_SAME_CLS_NAME] = "Tên lớp trong phân loại lưu lượng được thêm vào không được giống với phân loại lưu lượng hiện tại!";
e_str[CMM_QOS_SAME_CLS_CRITERION] = "Các tiêu chí phân loại thêm vào không được giống với các tiêu chí phân loại hiện tại!";
e_str[CMM_QOS_CLS_SRC_IP_NON_LAN] = "Các địa chỉ IP nguồn của phân luồng cho luồng lên QoS phải là địa chỉ IP của bên LAN!"; 
e_str[CMM_QOS_CLS_DEST_IP_LAN] = "Điểm đến của việc phân loại lưu lượng QoS luồng lên phải là địa chỉ IP của bên LAN!"; 
e_str[CMM_QOS_CLS_SRC_IP_LAN] = "Các địa chỉ IP nguồn của phân luồng cho luồng xuống QoS không phải là địa chỉ IP của bên LAN!"; 
e_str[CMM_QOS_CLS_DEST_IP_NON_LAN] = "Địa chỉ IP điểm đến của việc phân loại lưu lượng QoS luồng xuống phải là địa chỉ IP của bên LAN!"; 
e_str[CMM_QOS_INTF_INVALID] = "Hướng QoS không hợp lệ!"; 

// 4900-4999	Forward
e_str[CMM_DMZ_IP_NOT_IN_LAN_SUBNET] = "Địa chỉ IP không giống trong cùng một subnet với địa chỉ IP của mạng LAN. Vui lòng nhập một số khác.";
e_str[CMM_VS_RECORD_ALREADY_FULL] = "Danh sách các mục máy chủ ảo đầy!";
e_str[CMM_VS_RECORD_ALREADY_EXIST] = "Mục đã tồn tại hoặc cổng của nó đã sử dụng bởi một cổng khác.";
e_str[CMM_VS_PORT_OUT_RANGE] = "Số cổng không hợp lệ! Vui lòng nhập một giá trị khác nằm trong khoảng (1-65535).";
e_str[CMM_VS_IP_NOT_IN_LAN_SUBNET] = "Địa chỉ IP không giống trong cùng một subnet với địa chỉ IP của mạng LAN. Vui lòng nhập một số khác.";
e_str[CMM_VS_CONFLICT_REMOTE_WEB_PORT] = "Lỗi: Cổng quản lý web từ xa xung đột với cổng của server ảo.";
e_str[CMM_PT_RECORD_ALREADY_FULL] = "Danh sách mục Cổng cảnh báo đã đầy!";
e_str[CMM_PT_TRIG_PORT_CONFLICT] = "Xung đột cổng kích hoạt";
e_str[CMM_PT_TRIG_PORT_OUT_RANGE] = "Cổng kích hoạt phải ở trong phạm vi (1-65535). Vui lòng nhập một số khác.";
e_str[CMM_PT_OPEN_PORT_OUT_RANGE] = "Cổng đến phải nằm trong khoảng (1-65535). Vui lòng nhập một giá trị khác.";
e_str[CMM_PT_RECORD_ALREADY_EXIST] = "Cổng kích hoạt đầu vào xung đột với cổng đã tồn tại!";

// 5000-5099	DHCP server
e_str[CMM_LAN_IP_ERR] 													= "Địa chỉ IP LAN không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[CMM_LAN_MASK_ERR] 												= "Subnet Mask không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[CMM_LAN_IP_MASK_DISMATCH] 										= "IP LAN không khớp với Subnet Mask, hoặc đây là địa chỉ IP dành riêng.";
e_str[CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_WAN] 							= "Các IP LAN không được ở trong cùng một subnet với IP mạng WAN. Vui lòng nhập một số khác.";
e_str[CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_OTHER_LAN] 					= "Các IP LAN không được ở trong cùng một subnet với IP mạng LAN của các nhóm khác. Vui lòng nhập một số khác.";
e_str[CMM_LAN_UNEXPECT_EXISTING_LAN_IP_AND_MASK]						= "Không tìm được IP mạng LAN mặc định cho nhóm mới. Hãy thay đổi IP LANvà Subnet Mask của các nhóm khác.";

e_str[CMM_DHCPS_SRV_MIN_ADDR_ERR] 										= "Địa chỉ IP bắt đầu không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[CMM_DHCPS_SRV_MAX_ADDR_ERR] 										= "Địa chỉ IP kết thúc không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[CMM_DHCPS_SRV_GATEWAY_ADDR_ERR] 									= "Subnet Mask không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[CMM_DHCPS_SRV_DNS1_ADDR_ERR] 										= "DNS chính không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[CMM_DHCPS_SRV_DNS2_ADDR_ERR] 										= "DNS thứ hai không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[CMM_DHCPS_SRV_RELAY_SRV_ADDR_ERR] 								= "Địa chỉ IP máy chủ từ xa không hợp lệ! Vui lòng nhập một địa chỉ khác.";
e_str[CMM_DHCPS_SRV_RELAY_SRV_ADDR_EMPTY] 								= "Vui lòng nhập Địa chỉ IP máy chủ từ xa.";
e_str[CMM_DHCPS_SRV_MIN_ADDR_NOT_IN_THE_SAME_SUBNET] 					= "Địa chỉ IP bắt đầu không nằm trong cùng một subnet như IP mạng LAN hoặc địa chỉ IP riêng của nó. Vui lòng nhập một địa chỉ IP.";
e_str[CMM_DHCPS_SRV_MAX_ADDR_NOT_IN_THE_SAME_SUBNET] 					= "Kết thúc địa chỉ IP không nằm trong cùng subnet với IP LAN hoặc địa chỉ IP riêng của nó. Vui lòng nhập một địa chỉ khác.";
e_str[CMM_DHCPS_SRV_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET] 				= "Cổng mặc định không nằm trong cùng subnet như IP LAN hoặc địa chỉ IP dành riêng cho nó. Vui lòng nhập một địa chỉ khác.";

e_str[CMM_DHCPS_FIX_MAP_MAC_ADDR_ERR] 									= "Địa chỉ IP không hợp lệ! Vui lòng nhập một địa chỉ khác.";
e_str[CMM_DHCPS_FIX_MAP_IP_ADDR_ERR] 									= "Địa chỉ MAC không hợp lệ. Vui lòng nhập một địa chỉ MAC khác.";
e_str[CMM_DHCPS_FIX_MAP_IP_NOT_IN_THE_SAME_SUBNET] 						= "Địa chỉ IP không nằm cùng lớp mạng với IP LAN hoặc địa chỉ IP đã được dành riêng. Vui lòng nhập một địa chỉ khác.";
e_str[CMM_DHCPS_FIX_MAP_MAC_CONFLICT]				 					= "Địa chỉ MAC xung đột với điều luật đã tồn tại. Vui lòng nhập một địa chỉ MAC khác.";
e_str[CMM_DHCPS_FIX_MAP_IP_CONFLICT] 									= "Địa chỉ IP xung đột với điều luật hiện hành. Vui lòng nhập một địa chỉ khác.";

e_str[CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_EMPTY]	 					= "Vui lòng nhập Tên máy khách.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_VID_EMPTY] 							= "Vui lòng nhập ID nhà cung cấp.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_ERR] 							= "Địa chỉ IP bắt đầu không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_ERR] 							= "Địa chỉ IP kết thúc không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_IPRouters_ADDR_ERR] 					= "Không có Gateway mặc định hoặc Gateway mặc định không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_DNS1_ADDR_ERR] 						= "DNS chính không hợp lệ hoặc không có. Vui lòng nhập một giá trị khác.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_DNS2_ADDR_ERR] 						= "DNS thứ hai không hợp lệ hoặc không có. Vui lòng nhập một giá trị khác.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_NOT_IN_THE_SAME_SUBNET] 		= "Địa chỉ IP bắt đầu không nằm trong cùng một subnet như IP mạng LAN hoặc địa chỉ IP riêng của nó. Vui lòng nhập một địa chỉ IP.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_NOT_IN_THE_SAME_SUBNET] 		= "Kết thúc địa chỉ IP không nằm trong cùng subnet với IP LAN hoặc địa chỉ IP riêng của nó. Vui lòng nhập một địa chỉ khác.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET] 	= "Cổng mặc định không nằm trong cùng subnet như IP LAN hoặc địa chỉ IP dành riêng cho nó. Vui lòng nhập một địa chỉ khác.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_CONPLICT] 					= "Bấm vào đây để khôi phục lại tất cả các thiết lập bên trong thiết bị về thiết lập mặc định gốc. Rất khuyến nghị bạn sao lưu cấu hình hiện tại của bạn trước khi bạn khôi phục lại mặc định gốc.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_VID_CONPLICT] 							= "Xung đột ID nhà cung cấp với các mục ID nhà cung cấp hiện có. Vui lòng nhập một số khác.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_POOLS_CONPLICT]						= "Địa chỉ vùng lưu trữ DHCP trùng với địa chỉ vùng lưu trữ DHCP hiện có. Vui lòng nhập một địa chỉ khác.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_OPTION_CODE_INVALID] 					= "tùy chọn riêng ra khỏi phạm vi.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_OPTION_VALUE_EMTPY] 					= "Vui lòng nhập giá trị tùy chọn dành riêng.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_VID_ERR]								= "Xung đột ID nhà cung cấp với các mục ID nhà cung cấp hiện có. Vui lòng nhập một số khác.";

// 5100-5199	router
e_str[CMM_DEFAULT_ROUTE_NAME_ERR] = "Gateway mặc định không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[CMM_STATIC_ROUTE_DEST_IP_ERR] = "Địa chỉ IP đích đến không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[CMM_STATIC_ROUTE_DEST_SUB_ERR] = "Subnet Mask không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[CMM_STATIC_ROUTE_GATEWAY_ERR] = "Gateway không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[CMM_STATIC_ROUTE_SUB_DISMATCH_IP] = "Subnet Mask không phù hợp với địa chỉ IP đích. Vui lòng nhập một số khác.";
e_str[CMM_STATIC_ROUTE_DEST_CONFLICT_LAN] = "Địa chỉ IP đích không thể nằm trong cùng subnet như IP LAN. Vui lòng nhập một số khác.";
e_str[CMM_STATIC_ROUTE_DEST_CONFLICT_WAN] = "Địa chỉ IP đích không thể nằm trong cùng subnet như IP WAN. Vui lòng nhập một số khác.";
e_str[CMM_STATIC_ROUTE_ENTRY_CONFLICT] = "Đề mục đã tồn tại! Vui lòng nhập đề mục khác.";
e_str[CMM_STATIC_ROUTE_NOT_SAME_NET] = "Cổng phải nằm trong cùng một mạng như cấu trúc giao diện của địa chỉ IP . Vui lòng nhập một số khác.";
e_str[CMM_STATIC_ROUTE_NAME_ERR] = "Định tuyến tĩnh không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[CMM_STATIC_ROUTE_CONN_ERR] = "Mục thuộc về kết nối đó không tồn tại!";
e_str[CMM_STATIC_ROUTE_NEED_IF] = "Không thể tìm thấy giao diện tương ứng! Vui lòng chọn giao diện bằng tay.";

// 5200-5299	DNS & DDNS
e_str[CMM_DNS_DEFAULT_NAME_ERR] = "DNS lỗi! Vui lòng thử lại.";
e_str[CMM_DNS_SET_ERR] = "Không thể cấu hình DNS. Vui lòng thử lại.";
e_str[CMM_DDNS_PH_CFG_MSG_ERROR] = "Không thể cấu hình DNS động.";
e_str[CMM_DDNS_PH_STATE_GET_ERROR] = "Không thể lấy được thông tin DNS."
e_str[CMM_DDNS_PH_USR_ERROR] = "Tên người dùng không thể vượt quá 64 ký tự.";
e_str[CMM_DDNS_PH_PWD_ERROR] = "Mật mã không thể vượt quá 64 ký tự.";
e_str[CMM_DDNS_PH_NO_RUN] = "Dịch vụ DDNS không chạy";

// 5300-5349	SNTP
e_str[CMM_SNTP_SET_ERR] = "Lỗi máy chủ thời gian tĩnh! Vui lòng thử lại.";
e_str[CMM_SNTP_YEAR_ERR] = "Định dạng năm không hợp lệ. Vui lòng nhập một giá trị khác (1970 - 2037).";
e_str[CMM_SNTP_MONTH_ERR] = "Định dạng tháng không hợp lệ. Vui lòng nhập một giá trị khác (01-12).";
e_str[CMM_SNTP_DAY_ERR] = "Định dạng ngày không hợp lệ. Vui lòng nhập một giá trị khác (01-31).";
e_str[CMM_SNTP_HOUR_ERR] = "Tên nhóm không hợp lệ. Vui lòng nhập một giá trị khác(0-23).";
e_str[CMM_SNTP_MONUTES_ERR] = "Định dạng phút không hợp lệ. Vui lòng nhập một giá trị khác (00-60).";
e_str[CMM_SNTP_SECONDS_ERR] = "Định dạng thứ hai không hợp lệ. Vui lòng nhập một giá trị khác (00-60).";

e_str[CMM_DST_START_INVALID] = "Ngày bắt đầu không hợp lệ!",
e_str[CMM_DST_END_INVALID] = "Ngày kết thúc không hợp lệ!",	
e_str[CMM_DST_CFG_INVALID] = "Cấu hình ngày không hợp lệ! Ngày bắt đầu phải sớm hơn ngày kết thúc!",	
// 5350-5399	CLI

// 5400-5499	IP&ARP
e_str[CMM_ARP_BIND_ENTRY_OVERFLOW] = "Số lượng các mục bắt buộc đã đạt tối đa !";
e_str[CMM_ARP_BIND_ENTRY_CONFLICT_WHEN_EDIT] = "Các mục gắn với ARP đã tải xung đột với mục hiện có!";
e_str[CMM_ARP_BIND_ENTRY_CONFLICT_WHEN_IMPORT] = "Các mục ARP đã tải xung đột với mục hiện có!";
e_str[CMM_ARP_BIND_ENTRY_IP_ADDR_ERR] = "Định dạng địa chỉ IP không hợp lệ.";
e_str[CMM_ARP_BIND_ENTRY_MAC_ADDR_ERR] = "Định dạng địa chỉ MAC không hợp lệ.";
e_str[CMM_ARP_BIND_ENTRY_STATE_ERR] = "Trạng thái không hợp lệ!";
e_str[CMM_ARP_BIND_ENTRY_IP_NOT_IN_LAN_SUBNET] = "Địa chỉ IP không nằm trong cùng một mạng như địa chỉ IP của mạng LAN. Vui lòng nhập một địa chỉ khác.";
e_str[CMM_ARP_BIND_ADD_SYS_ENTRY_FAILED] = "Không thêm hệ thống ARP!";
e_str[CMM_ARP_BIND_DEL_SYS_ENTRY_FAILED] = "Không thể xóa hệ thống APP!";
e_str[CMM_ARP_BIND_SET_SYS_ENTRY_FAILED] = "Không thể thiết lập hệ thống ARP!"; 
e_str[CMM_ARP_BIND_PARAM_FORMAT_ERR] = "Định dạng tham số không hợp lệ.";

// 5500-5519	AutoPVC

// 5520-5549	IPTV
e_str[CMM_IPTV_INVALIED_VCI]	= "VCI không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[CMM_IPTV_INVALIED_VPI]	= "Invalid VPI. Vui lòng nhập một giá trị khác.";
e_str[CMM_IPTV_INVALIED_LANPORT]= "Cổng LAN không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[CMM_IPTV_BR_NOTIN_GROUP]	= "Kết nối bắt cầu IPTV không nằm trong nhóm này!";
e_str[CMM_IPTV_LAN_NOTIN_GROUP]	= "Cổng LAN IPTV không nằm trong nhóm này!";
e_str[CMM_IPTV_LANPORT_ALREADY_USED] = "Các cổng LAN cho kết nối IPTV đã được sử dụng bằng một kết nối truyền thông khác (Ethernet WAN). Vui lòng kiểm tra kết nối.";
e_str[CMM_IPTV_ETHWAN_NOT_ENABLE]        = "Mạng cục bộ WAN không được kích hoạt!";
e_str[CMM_IPTV_LANPORT_EMPTY]           = "Cổng LAN IPTV trống!";
e_str[CMM_IPTV_IP_IN_SAME_SUBNET_WITH_WAN]  = "Địa chỉ IP LAN IPTV xung đột  với địa chỉ IP WAN!";

// 5550-5569	ETH WAN
e_str[CMM_ETHWAN_INTF_NOTIN_DFTGROUP]	= "Giao diện mạng cục bộ WAN không nằm trong nhóm mặc định!";
e_str[CMM_ETHWAN_INTF_NAME_IS_NULL]		= "Tên giao diện mạng cục bộ WAN trống!";
e_str[CMM_ETHWAN_VIR_PORTS_IS_NOT_EN]	= "VLAN được vô hiệu hóa. Vui lòng kích hoạt nó đầu tiên.";
e_str[CMM_ETHWAN_LANPORT_ALREADY_USED]	= "Các cổng LAN cho kết nối Ethernet WAN đã được sử dụng bằng một kết nối truyền thông khác (IPTV). Vui lòng kiểm tra kết nối.";
e_str[CMM_ETHWAN_INTF_NOT_EXIST]	= "Giao diện mạng cục bộ WAN không tồn tại!";
e_str[CMM_WAN_DSL_SCR_INVAD]						= "Giá trị SCR không thể trống.";
e_str[CMM_WAN_DSL_PCR_INVAD]						= "Giá trị PCR không thể để trống.";
e_str[CMM_WAN_DSL_SCR_LARGER_THAN_PCR]				= "Giá trị SCR không thể vượt quá giá trị PCR.";
e_str[CMM_WAN_DSL_MBS_INVAD]						= "Không thể để trống giá trị MBS.";
e_str[CMM_WAN_DSL_CFG_HAS_NO_INTF]					= "Giao diện DSL WAN không tồn tại!";
e_str[CMM_WAN_DSL_ERR_LINKTYPE]						= "Dạng đường dẫn cho kết nối IP này không hợp lệ.";

// 5600-5699	Bridge
e_str[CMM_WAN_INVALID_AC_TYPE]						= "Không được hỗ trợ loại liên kết!";
e_str[CMM_WAN_LINK_CFG_IFNAME_NULL]					= "Giao diện kết nối DSL/Ethernet không có tác dụng!";
e_str[CMM_WAN_NO_LINK_CFG_OBJ]						= "Không có cấu hình liên kết Ethernet!";
e_str[CMM_WAN_UNKNOWN_CONN_TYPE]					= "Loại kết nối này không được hỗ trợ!";
e_str[CMM_WAN_CAL_FAKE_MAC_FAILED]					= "Tạo địa chỉ MAC không thành công. Hãy xóa một mục và thử lại!";

// 5700-5799	Static IP & Dynamic IP
e_str[CMM_WAN_IP_BOOL_FORMAT_ERROR]					= "Dạng Bool không hợp lệ!";
e_str[CMM_WAN_IP_PARAM_NOT_VALID_VALUE]				= "Giá trị không nằm trong mảng chuỗi quy định!";
e_str[CMM_WAN_IP_INVALID_IP_ADDR_FORMAT]			= "Định dạng địa chỉ IP không hợp lệ.";
e_str[CMM_WAN_IP_IFNAME_ERROR]					    = "Tên giao diện không hợp lệ!";
e_str[CMM_WAN_IP_MAC_ADDR_ERROR]                   	= "Địa chỉ MAC không hợp lệ hoặc định dạng không chính xác.";
e_str[CMM_WAN_IP_CLONE_MAC_ADDR_ERROR]            	= "Địa chỉ MAC không hợp lệ hoặc định dạng không chính xác.";
e_str[CMM_WAN_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN]   	= "IP mạng WAN không thể nằm trong cùng subnet IP mạng LAN!";
e_str[CMM_WAN_IP_DNS_ADDR_ERROR]                   	= "Định dạng địa chỉ máy chủ DNS không hợp lệ.";
e_str[CMM_WAN_IP_IP_ADDR_ERROR]                    	= "Địa chỉ IP không hợp lệ hoặc định dạng không chính xác.";
e_str[CMM_WAN_IP_GATEWAY_ADDR_ERROR]               	= "Gateway không hợp lệ hoặc định dạng không chính xác.";
e_str[CMM_STATIC_IP_INTF_ERR]						= ""; //This error id is not in using.
e_str[CMM_IPOA_NONE_SINGLE_PVC_MULTI_CONN]			= "IPoA không hỗ trợ đa kết nối trên một PVC. Vui lòng cài đặt giá trị VPI/VCI khả dụng.";
e_str[CMM_WAN_IPOA_INTF_ERROR]						= "Không thể tạo giao diện iPod!";

// 5800-5849 L2TP
e_str[CMM_WAN_L2TP_BOOL_FORMAT_ERROR]					= "Dạng Bool không hợp lệ!";
e_str[CMM_WAN_L2TP_PARAM_NOT_VALID_VALUE]				= "Giá trị không nằm trong mảng chuỗi quy định!";
e_str[CMM_WAN_L2TP_IP_INVALID_IP_ADDR_FORMAT]			= "Định dạng IP không hợp lệ cho kết nối ip.";
e_str[CMM_WAN_L2TP_PPP_INVALID_IP_ADDR_FORMAT]			= "Định dạng IP không hợp lệ cho kết nối ppp.";
e_str[CMM_WAN_L2TP_IFNAMEIP_ERROR]						= "Tên giao diện kết nối IP không hợp lệ.!"
e_str[CMM_WAN_L2TP_L2IFNAME_ERROR]						= "Tên giao diện kết nối ppp không hợp lệ.!"
e_str[CMM_WAN_L2TP_MAC_ADDR_ERROR]                 		= "Địa chỉ MAC không hợp lệ hoặc định dạng không chính xác."
e_str[CMM_WAN_L2TP_CLONE_MAC_ADDR_ERROR]           		= "Địa chỉ MAC không hợp lệ hoặc định dạng không chính xác.";
e_str[CMM_WAN_L2TP_MAC_OVERRIDE_ERROR]					= ""; 
e_str[CMM_WAN_L2TP_MAC_CLONE_ERROR]						= ""; 
e_str[CMM_WAN_L2TP_IP_DNS_ADDR_ERROR]                  	= ""; 
e_str[CMM_WAN_L2TP_IP_IP_ADDR_ERROR]                   	= "Địa chỉ IP không hợp lệ hoặc định dạng kết nối IP không chính xác.";
e_str[CMM_WAN_L2TP_PPP_IP_ADDR_ERROR]					= "Địa chỉ IP không hợp lệ hoặc định dạng kết nối ppp không chính xác.";
e_str[CMM_WAN_L2TP_IP_GATEWAY_ADDR_ERROR]              	= "Gateway không hợp lệ hoặc định dạng kết nối IP không hợp lệ.";
e_str[CMM_WAN_L2TP_PPP_GATEWAY_ADDR_ERROR]				= "Gateway không hợp lệ hoặc định dạng kết nối PPP không hợp lệ.";
e_str[CMM_WAN_L2TP_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN]  	= "Các địa chỉ ip của kết nối ip không thể nằm trong cùng subnet như IP mạng LAN!";
e_str[CMM_WAN_L2TP_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN] 	= "Địa chỉ IP thu được bằng PPP dial-up nằm trong cùng subnet với IP LAN";

// 5850-5899 PPTP
e_str[CMM_WAN_PPTP_BOOL_FORMAT_ERROR]					= "Dạng Bool không hợp lệ!";
e_str[CMM_WAN_PPTP_PARAM_NOT_VALID_VALUE]				= "Giá trị không nằm trong mảng chuỗi quy định!";
e_str[CMM_WAN_PPTP_IP_INVALID_IP_ADDR_FORMAT]			= "Định dạng IP không hợp lệ cho kết nối ip.";
e_str[CMM_WAN_PPTP_PPP_INVALID_IP_ADDR_FORMAT]			= "Định dạng IP không hợp lệ cho kết nối ppp.";
e_str[CMM_WAN_PPTP_IFNAMEIP_ERROR]						= "Tên giao diện kết nối IP không hợp lệ.!"
e_str[CMM_WAN_PPTP_L2IFNAME_ERROR]						= "Tên giao diện kết nối ppp không hợp lệ.!"
e_str[CMM_WAN_PPTP_MAC_ADDR_ERROR]                 		= "Địa chỉ MAC không hợp lệ hoặc định dạng không chính xác."
e_str[CMM_WAN_PPTP_CLONE_MAC_ADDR_ERROR]           		= "Địa chỉ MAC không hợp lệ hoặc định dạng không chính xác.";
e_str[CMM_WAN_PPTP_MAC_OVERRIDE_ERROR]					= ""; 
e_str[CMM_WAN_PPTP_MAC_CLONE_ERROR]						= ""; 
e_str[CMM_WAN_PPTP_IP_DNS_ADDR_ERROR]                  	= ""; 
e_str[CMM_WAN_PPTP_IP_IP_ADDR_ERROR]                   	= "Địa chỉ IP không hợp lệ hoặc định dạng kết nối IP không chính xác.";
e_str[CMM_WAN_PPTP_PPP_IP_ADDR_ERROR]					= "Địa chỉ IP không hợp lệ hoặc định dạng kết nối ppp không chính xác.";
e_str[CMM_WAN_PPTP_IP_GATEWAY_ADDR_ERROR]              	= "Gateway không hợp lệ hoặc định dạng kết nối IP không hợp lệ.";
e_str[CMM_WAN_PPTP_PPP_GATEWAY_ADDR_ERROR]				= "Gateway không hợp lệ hoặc định dạng kết nối PPP không hợp lệ.";
e_str[CMM_WAN_PPTP_IP_IP_IN_THE_SAME_SUBNET_WITH_LAN]  	= "Các địa chỉ ip của kết nối ip không thể nằm trong cùng subnet như IP mạng LAN!";
e_str[CMM_WAN_PPTP_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN] 	= "Địa chỉ IP thu được bằng PPP dial-up nằm trong cùng subnet với IP LAN";

// 5900-5999	PPPoE/PPPoA	
e_str[CMM_PPP_BOOL_FORMAT_ERROR]					= "Dạng Bool không hợp lệ!";
e_str[CMM_PPP_PARAM_NOT_VALID_VALUE]				= "Giá trị không nằm trong mảng chuỗi quy định!";
e_str[CMM_INVALID_PPP_ADDR_FORMAT]					= "Định dạng địa chỉ IP không hợp lệ.";
e_str[CMM_PPP_INTF_ERROR]							= "Tên giao diện không hợp lệ!";
e_str[CMM_PPP_MAC_OVERRIDE_ERROR]					= "Kết nối PPPoA không hỗ trợ Sao địa chỉ MAC!";
e_str[CMM_PPP_MAC_CLONE_ERROR]						= "Lỗi Sao địa chỉ MAC!";
e_str[CMM_WAN_EXCEED_LIMITED_NUM]					= "Sô cổng WAN đã đạt giá trị tối đa!";
e_str[CMM_WAN_NO_DSL_INTF_ERROR]					= "Không có giao diện DSL!";
e_str[CMM_PPPOA_NONE_SINGLE_PVC_MULTI_CONN]			= "PPPoA không hỗ trợ nhiều kết nối trên một PVC. Vui lòng cài đặt giá trị VPI/VCI khả dụng.";
e_str[CMM_WAN_PPP_IP_IN_THE_SAME_SUBNET_WITH_LAN]	= "Địa chỉ IP thu được bằng PPP dial-up nằm trong cùng subnet với IP LAN";
e_str[CMM_WAN_INVALID_DNS]							= "Địa chỉ DNS không hợp lệ!";

e_str[CMM_WAN_NO_PPPOA_INTF]						= "Không thể tạo giao diện PPPoE!";
e_str[CMM_WAN_PPPOA_ASSIGN_PVC_FAIL]				= "Không thể gán PVC đến giao diện PPPoA!";
e_str[CMM_WAN_PPPOA_NO_DSL_CFG]						= "Không tồn tại giao diện atm  cho kết nối PPPoA này!";
e_str[CMM_WAN_GENERATE_MAC_FAILED]					= "Tạo địa chỉ MAC không thành công. Hãy xóa một mục và thử lại!";
e_str[CMM_WAN_UNKOWN_PPP_CONN_TYPE]					= "Không nhận ra loại kết nối PPP!";
e_str[CMM_PPP_NO_ETH_CFG_INTF]						= "Các kết nối PPPoE không có một giao diện ethernet!";

//6100-6199		USB
e_str[CMM_USB_MORE_ALIVE_DEV]						= "Hai thiết bị tối đa có thể được kích hoạt cùng một lúc.";
e_str[CMM_USB_MORE_ALIVE_LOG]						= "Tám giá trị tối đa có thể được kích hoạt cùng một lúc.";
e_str[CMM_USB_VOLUME_UMOUNT_FAIL]					= "Nhãn đang được sử dụng, không thể tháo bây giờ!";
e_str[CMM_USB_NOBODY_ERROR]							= "Tên đăng nhập không thể chứa các giá trị \"không ai\"!";
e_str[CMM_USB_ILLEGAL_FOLDER_PATH]					= "Thư mục không hợp lệ, vui lòng thay đổi giá trị nhập.";
e_str[CMM_USB_3G_UNLOCK_PIN_CODE_FAIL]				= "Không thể mở khóa bảo vệ mã PIN. Vui lòng xác nhận mã PIN!";
e_str[CMM_USB_3G_FILE_TOO_LONG]						= "Kích thước tập tin không hợp lệ! Vui lòng kiểm tra tập tin của bạn và thử lại.";
e_str[CMM_USB_3G_FILE_FORMAT_ERR]					= "Bạn đặt một tập tin sai.";
e_str[CMM_USB_3G_TOO_MANY_ENTRIES]					= "Tối đa 4 mục lệnh tải lên USB 3G!";
e_str[CMM_USB_3G_UPLOAD_PARSE_FAILED]				= "Không thể phân tích cú pháp tập tin tải lên.";
e_str[CMM_USB_3G_ENTRY_ALREADY_EXIST]				= "Đề mục đã tồn tại, đầu tiên phải xóa nó . Các mục tải lên và đề mục hiện tại giống như các lệnh khác nhau.";
e_str[CMM_USB_3G_MODEM_ENTRIES_FULL]				= "Các mục USB 3G đã đầy! không thể tải lên nữa.";

// 6200-6299 IPv6  
e_str[CMM_ROUTE6_ADDR_VALID]				= "Địa chỉ trang web IPv6 không hợp lệ!";
e_str[CMM_ROUTE6_DEFAULT_ROUTE_NAME_ERR]	= "Gateway IPv6 mặc định không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[CMM_ROUTE6_PREFIX_LEN_VALID]			= "Chiều dài tiền tố là không hợp lệ!";
e_str[CMM_ROUTE6_ENTRY_DUPLICATE]			= "Các tuyến tĩnh IPv6 đã tồn tại.";
e_str[CMM_ROUTE6_DEST_CONFLICT_LAN]			= "Địa chỉ IPv6 điếm đến phải chính xác giống như địa chỉ IP của mạng LAN.";
e_str[CMM_ROUTE6_GW_PFX_NOT_SAME_WITH_WAN]	= "Cổng IPv6 không chứa cùng một tiền tố vị trí như mạng WAN!";
e_str[CMM_ROUTE6_CONN_ERR]					= "Mục thuộc về kết nối đó không tồn tại!";

e_str[CMM_WAN6_CONN_TYPE_INVALID]			= "Loại kết nối IPv6 mạng WAN IPv6 không hợp lệ!";

e_str[CMM_TUNNEL6_6RD_PREFIX_INVALID]		= "Các tiền tố 6RD là không hợp lệ! Vui lòng kiểm tra tiền tố 6RD và độ dài tiền tố 6RD.";

//7000-7200
e_str[CMM_VOIP_FEATURE_CODE_LEN_ERROR]		= "Chiều dài tối đa của mã tính năng là 3 và không được để trống!";
e_str[CMM_VOIP_FEATURE_CODE_STRING_ERROR]	= "Tính năng mật mã phải bao gồm từ 0 ~ 9, bắt đầu với '*' hoặc '#'. Chiều dài tối đa là 3!";
e_str[CMM_VOIP_FEATURE_CODE_CONFLICT_ERROR] = "Xung đột tính năng mật mã với các mục hiện có. Vui lòng nhập một số khác.";
e_str[CMM_VOIP_PROFILE_NAME_CONFLICT_ERROR] = "Lưu ý: Tên hồ sơ đã tồn tại, chúng tôi sẽ xóa tài khoản với tên hồ sơ trùng!";
e_str[CMM_VOIP_PROFILE_CONFLICT_ERROR]		= "Tên hồ sơ đã tồn tại!";

// 7500-7999
e_str[CMM_WLAN_PARAM_CONFLICTE] 			= "Cài đặt mạng không dây xung đột! Vui lòng kiểm tra cài đặt, ví dụ bảo mật WEP hoặc mã hóa TKIP/WPA không được hỗ trợ với chế độ mạng không dây chỉ 11n được kích hoạt.";	
e_str[CMM_WLAN_INVALID_PARAM_VALUE]			= "Cài đặt không dây không hợp lệ!";	
e_str[CMM_WLAN_SSID_CONFLICTE]				= "SSID đã tồn tại. Vui lòng nhập một số khác.";	
e_str[CMM_WLAN_MACFILTER_ADDR_CONFLICT]		= "Lọc địa chỉ MAC đầu vào giống như một địa chỉ đã tồn tại!";	
e_str[CMM_WLAN_READ_DEFAULT_PIN_FAILED]		= "Không thể lấy được mã PIN!";
e_str[CMM_WLAN_SSID_CONFLICTE_WITH_GUESTNET]= "SSID đã được sử dụng bởi các mạng khách. Vui lòng nhập một số khác.";

//7800 IPSEC
e_str[CMM_TUNNEL_NAME_ALREADY_EXITS]           = "Tên đường hầm IPSec đã tồn tại!";
e_str[CMM_TUNNEL_LOCAL_IP_SHOULD_IN_LAN]       = "Địa chỉ nội bộ đường hầm IPSec phải nằm cùng lớp mạng với IP LAN!";
e_str[CMM_TUNNEL_REMOTE_IP_CONFLICT_LAN]       = "Địa chỉ đường hầm IPSec từ xa không thể nằm cùng lớp mạng với IP LAN!";

// 9000 DM
e_str[CMM_METHOD_NOT_SUPPORTED]				= "Chức năng, gọi, không được hỗ trợ!";
e_str[CMM_REQUEST_DENIED]					= "Các yêu cầu bị từ chối. Vui lòng kiểm tra nếu giá trị hoặc hoạt động có giá trị.";
e_str[CMM_INTERNAL_ERROR]					= "Lỗi nội bộ!";
e_str[CMM_INVALID_ARGUMENTS]				= "Giá trị không hợp lệ !";
e_str[CMM_RESOURCE_EXCEEDED]				= "Tràn vùng đệm hoặc các giá trị đã đạt đến mức tối đa!";
e_str[CMM_INVALID_PARAM_NAME]				= "Tên tham số không hợp lệ.";
e_str[CMM_INVALID_PARAM_TYPE]				= "Dạng tham số không hợp lệ.";
e_str[CMM_INVALID_PARAM_VALUE]				= "Giá trị không hợp lệ !";
e_str[CMM_INVALID_CONFIG_FILE]				= "Tập tin cấu hình không hợp lệ! Vui lòng kiểm tra định dạng và giá trị tập tin.";
e_str[CMM_OBJECT_NOT_FOUND]					= "Đối tượng tương ứng không tìm thấy!";
e_str[CMM_INSTANCE_NOT_FOUND]				= "Trường hợp tương ứng không tìm thấy!";
e_str[CMM_OBJECT_BUF_EXCEEDED]				= "Đối tượng tràn bộ nhớ đệm!";
e_str[CMM_REACH_MAX_INSTANCE_NUM]			= "Số lượng các mục đã đạt đến mức tối đa!";

// 71000-71999 errno from httpd
e_str[ERR_HTTP_ERR_GET] = "IO thu thập thất bại.";
e_str[ERR_HTTP_ERR_SET] = "IO cấu hình thất bại.";
e_str[ERR_HTTP_ERR_IO] = "Không thể truy cập dữ liệu.";
e_str[ERR_HTTP_ERR_SOFT_UP] = "Không thể tải lên các tập tin nâng cấp! Vui lòng xác nhận đúng tập tin được chọn";
e_str[ERR_HTTP_ERR_CONF_UP] = "Không thể tải lên các tập tin cấu hình! Vui lòng xác nhận đúng tập tin được chọn";
e_str[ERR_HTTP_ERR_USER_NAME_NOT_CORRECT] = "Tên đăng nhập cũ không chính xác!";
e_str[ERR_HTTP_ERR_USER_PWD_NOT_CORRECT] = "Mật mã cũ không chính xác!";
e_str[ERR_HTTP_ERR_TOOL_GET_IPMAC] = "Không thể lấy được địa chỉ MAC của máy tính hiện tại!";

//80000 - 81000 WEB basic error
e_str[ERR_UNKOWN] = "Lỗi không xác định!";

e_str[ERR_GET] = "Không thể lấy được các thông số!";
e_str[ERR_SET] = "Không thể thiết lập các thông số!";

e_str[ERR_NUM_INVAD] = "Giá trị không hợp lệ !";
e_str[ERR_NUM_OUTRANGE] = "Giá trị không nằm trong phạm vi yêu cầu!";

e_str[ERR_STR_NOT_ASCII] = "Các chuỗi ký tự chứa các ký tự ASCII!";

e_str[ERR_IP_FORMAT] = "Định dạng địa chỉ IP không hợp lệ.";
e_str[ERR_IP_BROADCAST] = "Địa chỉ IP có thể không thể phát đi địa chỉ!";
e_str[ERR_IP_SUBNETA_NET_0] = "Số mạng lớp A của địa chỉ IP không thể là 0!";
e_str[ERR_IP_LOOPBACK] = "Địa chỉ IP không thể là địa chỉ lặp (127.0.0.0)!";
e_str[ERR_MASK_INVAD] = "Subnet Mask không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[ERR_IP_SUBNETC_HOST_255] = "Số máy chủ lớp C của địa chỉ IP mạng LAN không thể là 255!";
e_str[ERR_IP_MULTICAST] = "Các địa chỉ IP của mạng LAN không thể là địa chỉ truyền đa hướng!";
e_str[ERR_IP_PRESERVED] = "Địa chỉ IP của mạng LAN không thể địa chỉ IP mạng LAN riêng. ";
e_str[ERR_IPMASK_SUBNET_INVAD] = "Địa chỉ IP không phù hợp với Subnet Mask: địa chỉ mạng không hợp lệ.";
e_str[ERR_IPMASK_HOST_INVAD] = "Địa chỉ IP không phù hợp với Subnet Mask: số máy chủ không hợp lệ.";
e_str[ERR_IPGW_NOT_SAME_SUBNET] = "Địa chỉ IP không ở trong cùng một subnet như cổng vào!";

e_str[ERR_MAC_FORMAT] = "Định dạng địa chỉ MAC không hợp lệ.";
e_str[ERR_MAC_ZERO] = "Địa chỉ MAC không thể ở định dạng 00: 00: 00: 00: 00: 00!";
e_str[ERR_MAC_BROADCAST] = "Địa chỉ MAC không thể là địa chỉ quảng bá!";
e_str[ERR_MAC_MULTICAST] = "Địa chỉ MAC không thể là địa chỉ multicast!";

// 84400-84499 CWMP
e_str[ERR_CWMP_URL_INVAD] = "Vui lòng cài đặt URL khả dụng!";
e_str[ERR_CWMP_PORT_INVAD] = "Vui lòng chọn cổng khả dụng!";
e_str[ERR_CWMP_PATH_INVAD] = "Vui lòng chọn đường dẫn khả dụng!";

// 84500-84599 updata Firmware/Config
e_str[ERR_CONF_FILE_NONE] = "Vui lòng chọn tập tin cấu hình!";
e_str[ERR_FIRM_FILE_NONE] = "Vui lòng chọn tập tin nâng cấp!";

// 84600-84619	sys user
e_str[ERR_USER_OLD_PWD_EMPTY] = "Mật mã cũ không thể để trống!";
e_str[ERR_USER_OLD_PWD_ASCII] = "Mật mã cũ phải có định dạng ký tự ASCII!";
e_str[ERR_USER_NAME_EMPTY] = "Tên người dùng mới không thể để trống!";
e_str[ERR_USER_NAME_ASCII] = "Tên người dùng mới phải ở định dạng ký tự ASCII!";
e_str[ERR_USER_PWD_EMPTY] = "Mật mã mới không thể để trống!";
e_str[ERR_USER_PWD_ASCII] = "Mật mã mới phải có định dạng ký tự ASCII!";
e_str[ERR_USER_NAME_PWD_CONFLICT] = "Xác nhận Mật khẩu không phù hợp với mật khẩu mới!";
e_str[ERR_USER_OLD_NAME_EMPTY] = "Tên người dùng cũ không thể để trống!";
e_str[ERR_USER_OLD_NAME_ASCII] = "Tên người dùng cũ phải ở định dạng ký tự ASCII!";
e_str[ERR_USER_NAME_HAS_SPACE] = "Tên người dùng mới không được có bất kỳ khoảng trắng nào.";
e_str[ERR_USER_PWD_HAS_SPACE] = "Mật mã mới không được có bất kỳ khoảng trắng nào.";
 
// 84620-84639	management control
e_str[ERR_APP_LOCAL_HOST] = "Vui lòng nhập địa chỉ IP hoặc địa chỉ MAC hợp lệ!";
e_str[ERR_APP_REMOTE_HOST] = "Vui lòng nhập địa chỉ IP hoặc địa chỉ MAC hợp lệ!";
e_str[ERR_APP_LOCAL_MAC] = "Vui lòng nhập địa chỉ MAC hợp lệ!";
e_str[ERR_APP_REMOTE_IP] = "Vui lòng nhập địa chỉ IP hợp lệ!";

// 84640-84659	httpd config
e_str[ERR_HTTP_LOCAL_PORT] = "HTTP quản lý số cổng cục bộ không phải là một giá trị số hoặc không nằm trong phạm vi được yêu cầu. Vui lòng nhập 80 cho các cổng dịch vụ hoặc một số từ 1024 đến 65535.";
e_str[ERR_HTTPS_LOCAL_PORT] = "HTTPS quản lý  số cổng cục bộ không phải là một giá trị số hoặc không nằm trong phạm vi được yêu cầu. Vui lòng nhập 443 hoặc một số từ 1024-65535.";
e_str[ERR_HTTP_HTTPS_LOCAL_CONFILICT] = "HTTP  quản lý  số cổng cục bộ cũng giống như HTTPS quản lý số cổng cục bộ! Vui lòng nhập một số khác.";
e_str[ERR_HTTP_REMOTE_PORT] = "HTTP  quản lý số cổng từ xa không phải là một giá trị số hoặc không nằm trong phạm vi được yêu cầu. Vui lòng nhập 80 hoặc một số từ 1024 đến 65535.";
e_str[ERR_HTTP_REMOTE_HTTPS_LOCAL_CONFILICT] = "HTTP quản lý số  cổng  từ xa giống như HTTPS quản lý số cổng từ xa! Vui lòng nhập một số khác.";
e_str[ERR_HTTPS_REMOTE_PORT] = "HTTPS  quản lý số cổng từ xa không phải là một giá trị số hoặc không nằm trong phạm vi được yêu cầu. Vui lòng nhập 443 hoặc một số từ 1024 đến 65535.";
e_str[ERR_HTTP_LOCAL_HTTPS_REMOTE_CONFILICT] = "HTTP quản lý số cổng cục bộ cũng giống như HTTPS  quản lý số cổng từ xa! Vui lòng nhập một khác.";
e_str[ERR_HTTP_HTTPS_REMOTE_CONFILICT] = "HTTP  quản lý số  cổng từ xa giống như HTTPS  quản lý số cổng từ xa! Vui lòng nhập một số khác.";

// 84660-84679	time
e_str[ERR_TIME_YEAR_INVAD] = "Định dạng năm không hợp lệ. Vui lòng nhập một giá trị khác (1970 - 2037).";
e_str[ERR_TIME_MONTH_INVAD] = "Định dạng sai tháng! Vui lòng nhập một số khác (1-12).";
e_str[ERR_TIME_DAY_INVAD] = "Định dạng ngày không hợp lệ. Vui lòng nhập một giá trị khác (01-31).";
e_str[ERR_TIME_HOUR_INVAD] = "Tên nhóm không hợp lệ. Vui lòng nhập một giá trị khác(0-23).";
e_str[ERR_TIME_MINUTE_INVAD] = "Định dạng phút không hợp lệ. Vui lòng nhập một giá trị khác (00-60).";
e_str[ERR_TIME_SECOND_INVAD] = "Định dạng thứ hai không hợp lệ. Vui lòng nhập một giá trị khác (00-60).";
e_str[ERR_TIME_NTP_SERVER] = "Invalid NTP Server format. Please input IP address or domain name.";

// 84681-84699 diagnostic
e_str[ERR_DIAG_PACKET_SIZE] = "Kích thước gói tin phải từ 0 đến 65500!";
e_str[ERR_DIAG_TIME_OUT] = "Thời gian nghỉ phải từ 1 đến 60!";
e_str[ERR_DIAG_EWAN_OFF] = "WAN ngoại tuyến, vui lòng kiểm tra!";
e_str[ERR_DIAG_PING_COUNT] = "Đếm Ping phải nằm trong khoảng 1 và 50!";
e_str[ERR_DIAG_IP_ADDR] = "Lỗi Địa chỉ IP / Tên miền!";
e_str[ERR_DIAG_TTL] = "TTL phải từ 1 đến 30!";

// 84700-84799		Firewall
e_str[ERR_FW_ENTRYNAME_INVAD] = "Vui lòng nhập mô tả chính xác! Mô tả không thể để trống hoặc chứa các ký tự '\/\":*?<>|&',";
e_str[ERR_FW_URL_INVAD] = "Vui lòng nhập URL chính xác!";
e_str[ERR_FW_RULE_INVAD] = "Vui lòng chọn ít nhất một mục máy chủ LAN hoặc máy chủ WAN!";
e_str[ERR_FW_TIME_INVAD] = "Thời gian kết thúc không thể sớm hơn so với thời gian bắt đầu.";
e_str[ERR_FW_URL_NULL] = "Vui lòng thêm ít nhất một mục URL!";

// 84800-84899	QoS & TC
e_str[ERR_TC_IP_PORT_INVAD] = "Cả địa chỉ IP và số cổng đều bỏ trống!";
e_str[ERR_TC_NUM_INVAD] ="Vui lòng nhậo giá trị dạng số, trừ 0!"; 
e_str[ERR_PORT_NUM_INVAD] ="Số cổng không hợp lệ! Vui lòng nhập một giá trị khác nằm trong khoảng (1-65535).";
e_str[ERR_PORT_ORDER_INVAD] = "Giá trị số cổng kết thúc ít hơn số cổng bắt đầu. Vui lòng nhập một số khác.";
e_str[ERR_EMPTY_START_PORT] = "Số cổng bắt đầu không thể để trống khi số lượng cổng kết thúc trống!";
e_str[ERR_TC_BW_ORDER_INVAD] ="Băng thông tối đa thì phải ít hơn so với băng thông tối thiểu!";
e_str[ERR_TC_IP_ORDER_INVAD] ="Địa chỉ IP kết thúc ngắn hơn so với địa chỉ IP bắt đầu! Vui lòng nhập một số khác.";
e_str[ERR_TC_EMPTY_START_IP] = "Các địa chỉ IP bắt đầu không thể để trống khi địa chỉ IP kết thúc trống!";
e_str[ERR_TC_BW_NULL] = "Tốc độ tối thiểu đối với các giá trị luồng lên và luồng xuống không thể để trống!";

e_str[ERR_QOS_TOTALBW_INVAD] = "Giá tị tổng băng thông cho WRR hoặc Kiểm soát băng thông không hợp lệ! Vui lòng nhập một giá trị từ 1 đến giá trị cao nhất của đường truyền.";
e_str[ERR_QOS_TOTALBW_INVAD_SP] = "Tổng băng thông cho CAR không hợp lệ! Vui lòng để trống nếu bạn không giới hạn tổng băng thông, ngược lại, nhập một giá trị từ 1 đến giá trị cao nhất của đường truyền.";
e_str[ERR_QOS_QUEUE_DIR] = "Ô danh bạ trống! Vui lòng chọn một cái từ danh sách.";
e_str[ERR_QOS_QUEUE_NAME] = "Vui lòng nhập tên hàng đợi chính xác! Tên hàng đợi không thể để trống hoặc chứa các ký tự '\/\":*?<>|&' ";
e_str[ERR_QOS_QUEUE_NAME_LENGTH] = "Chiều dài của tên hàng phải ít hơn 12 ký tự!";
e_str[ERR_QOS_QUEUE_WEIGHT_NUM] = "Khối lượng không hợp lệ, vui lòng nhập một giá trị từ 1 đến 100.";
e_str[ERR_QOS_QUEUE_SCH] = "Thuật toán lập thời gian biểu không hợp lệ!";
e_str[ERR_QOS_CLS_NAME] = "Vui lòng nhập một tên lớp hợp lệ! Tên lớp không thể để trống hoặc chứa ký tự '\/\":*?<>|&' ";
e_str[ERR_QOS_CLS_NAME_LENGTH] = "Chiều dài của tên lớp phải ít hơn 12 ký tự!";
e_str[ERR_QOS_CLS_INTF_INVAD] = "Giao diện vào trống! Vui lòng chọn một giá trị từ danh sách.";
e_str[ERR_MAC_MASK_INVAD] = "Địa chỉ MAC không hợp lệ!";
e_str[ERR_QOS_EMPTY_QUEUE] = "Hàng đợi trống! Vui lòng chọn từ danh sách.";
e_str[ERR_QOS_APP_NAME] = "Tên doanh nghiệp bị bỏ trống! Vui lòng chọn một tên trong danh sách.";

// 84900-84999	Forward
e_str[ERR_VS_PORT_INVAD] = "Định dạng cổng không hợp lệ, định dạng hợp lệ là XX-XX hoặc XX.";
e_str[ERR_FW_ADD_FAILED] = "Chỉnh sửa mục không thành công!";
e_str[ERR_FTP_DATA_PORT_CONFLICT] = "Để tránh xung đột với các máy chủ FTP USB, xin vui lòng nhập vào một cổng dịch vụ khác bên ngoài phạm vi của 59990-59999.";
e_str[ERR_VS_INTER_PORT_INVAD] = "Định dạng cổng nội bộ không hợp lệ, định dạng đúng là XX hoặc để trống.";

// 85000-85099	DHCP server
e_str[ERR_LAN_IP_INVAD] = "Địa chỉ IP cổng LAN không thể để trống hoặc không hợp lệ.";
e_str[ERR_LAN_MASK_INVAD] = "Subnet Mask của cổng LAN không thể để trống hoặc không hợp lệ.";
e_str[ERR_LAN_IPMASK_INVAD] = "Địa chỉ IP cổng LAN không khớp với Subnet Mask.";

e_str[ERR_DHCP_START_IP_INVAD] = "Vui lòng nhập địa chỉ IP bắt đầu.";
e_str[ERR_DHCP_END_IP_INVAD] = "Vui lòng nhập địa chỉ IP kết thúc.";
e_str[ERR_DHCP_LEASE_INVAD] = "Địa chỉ cho thuê vượt quá phạm vi yêu cầu.";
e_str[ERR_DHCP_GATEWAY_INVAD] = "Định dạng gateway không hợp lệ!";
e_str[ERR_DOMAIN_INVAD] = "Định dạng tên miền mặc định không hợp lệ!";
e_str[ERR_DHCP_DNS1_INVAD] = "Định dạng máy chủ DNS chính không hợp lệ.";
e_str[ERR_DHCP_DNS2_INVAD] = "Định dạng máy chủ DNS thứ hai không hợp lệ.";
e_str[ERR_DHCP_RMT_SRV_EMPTY] = "Đặt lại DHCP đã kích hoạt. Vui lòng nhập từ xa địa chỉ IP máy chủ DHCP.";
e_str[ERR_DHCP_RMT_SRV_INVAD] = "Định dạng máy chủ từ xa không hợp lệ.";
e_str[ERR_LAN_SEC_IP_INVAD] = "Địa chỉ IP thứ hai không thể giống như địa chỉ IP cổng LAN.";
e_str[ERR_DHCP_POOL_INVAD] = "Cấu hình dải địa chỉ DHCP không hợp lệ! Dải địa chỉ DHCP phải nằm cùng lớp mạng và số máy chủ không thể có toàn giá trị 0 hoặc 1 theo định dạng nhị phân.";	//__CHG__
e_str[ERR_GATEWAY_INVAD] = "Địa chỉ Gateway không hợp lệ! Địa chỉ Gateway phải nằm cùng lớp mạng và số máy chủ không thể có toàn giá trị 0 hoặc 1 theo định dạng nhị phân.";	//__CHG__
e_str[ERR_DHCP_START_IP_INVAD_1] = "Phần cuối của địa chỉ IP kết thúc không thể là giá trị 0 và 255.";
e_str[ERR_DHCP_END_IP_INVAD_1] = "Phần cuối của địa chỉ IP bắt đầu không thể là giá trị 0 và 255.";
e_str[ERR_DHCP_COND_POOL_DEV_NAME_INVALID] = "Tên thiết bị không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[ERR_DHCP_COND_POOL_DEV_NAME_EMPTY] = "Vui lòng nhập tên thiết bị.";
e_str[ERR_DHCP_COND_POOL_VID_EMPTY] = "Vui lòng nhập ID nhà cung cấp.";
e_str[ERR_DHCP_COND_POOL_START_IP_INVAD] = "Vui lòng nhập địa chỉ IP hợp lệ.";
e_str[ERR_DHCP_COND_POOL_END_IP_INVAD] = "Vui lòng nhập IP kết thúc hợp lệ.";
e_str[ERR_DHCP_COND_POOL_GW_INVAD] = "Vui lòng nhập địa chỉ Gateway.";
e_str[ERR_DHCP_COND_POOL_OPT_VAL_EMPTY] = "Vui lòng nhập giá trị tùy chọn xác định.";
e_str[ERR_DHCP_COND_DNS1_INVAD] = "Vui lòng nhập DNS1 khả dụng.";
e_str[ERR_DHCP_COND_DNS2_INVAD] = "Định dạng DNS2 không hợp lệ!";
e_str[ERR_DHCP_COND_POOL_VID_INVAD] = "ID nhà cung cấp không được bao gồm \".";
// 85100-85199	router
// 85200-85299	DNS & DDNS
e_str[ERR_DDNS_USERNAME_EMPTY] = "Tên người dùng không thể vô giá trị.";
e_str[ERR_DDNS_PWD_EMPTY] = "Mật mã không thể để trống.";
e_str[ERR_DDNS_DOMAIN_INVAD] = "Tên miền không hợp lệ";
e_str[ERR_DDNS_DOMAIN_EMPTY] = "Tên miền không thể rỗng."
e_str[CMM_DYNDNS_USERNAME_ERROR] = "Tên người dùng không thể vô giá trị.";
e_str[CMM_DYNDNS_PASSWORD_ERROR] = "Mật mã không thể để trống.";
e_str[CMM_DYNDNS_USERDOMAIN_ERROR] = "Tên miền không thể rỗng hoặc bất hợp pháp";
e_str[CMM_DYNDNS_SERVER_ERROR] = "Tên máy chủ không thể để trống hoặc không hợp lệ.";
e_str[CMM_NOIPDNS_USERNAME_ERROR] = "Tên người dùng không thể vô giá trị.";
e_str[CMM_NOIPDNS_PASSWORD_ERROR] = "Mật mã không thể để trống.";
e_str[CMM_NOIPDNS_USERDOMAIN_ERROR] = "Tên miền không thể rỗng hoặc bất hợp pháp";
e_str[CMM_NOIPDNS_SERVER_ERROR] = "Tên máy chủ không thể để trống hoặc không hợp lệ.";
e_str[CMM_CMXDNS_USERNAME_ERROR] = "Tên người dùng không thể vô giá trị.";
e_str[CMM_CMXDNS_PASSWORD_ERROR] = "Mật mã không thể để trống.";
e_str[CMM_CMXDNS_USERDOMAIN_ERROR] = "Tên miền không thể rỗng hoặc bất hợp pháp";
e_str[CMM_CMXDNS_SERVER_ERROR] = "Tên máy chủ không thể để trống hoặc không hợp lệ";
// 85300-85349	SNTP
// 85350-85399	CLI
// 85400-85499	IP&ARP
e_str[ERR_ARP_CONFLICT] = "Các mục tải đã tồn tại.";
e_str[ERR_SEL_INVAD] = "Vui lòng chọn mục mong muốn.";

// 85500-85519	AutoPVC
e_str[ERR_AUTOPVC_VPI_INVAD] = "Giá trị VPI phải là một giá trị số giữa 0 và 255. Vui lòng nhập giá trị khác.";
e_str[ERR_AUTOPVC_VCI_INVAD] = "Giá trị VCI phải là một giá trị số giữa 0 và 65535. Vui lòng nhập giá trị khác.";
e_str[ERR_AUTOPVC_EXSIST_INVAD] = "PVC này đã tồn tại trong danh sách PVC.";

// 85520-85549	IPTV
e_str[ERR_IPTV_LANPORT_EMPTY] = "Cổng không hợp lê. Vui lòng chọn một giá trị khác.";
// 85550-85569	ETH WAN

// 85500-85599	DSL
e_str[ERR_DSL_MODULATION_MODE_NULL] = "Vui lòng chọn ít nhất một chế độ gỡ lỗi.";

// 85600-85699	Bridge
e_str[ERR_WAN_VPI_VCI_INVAD] = "Cấu hình dãi VPI/VCI không hợp lệ.";
e_str[ERR_WAN_PCR_INVAD] = "Giá trị SCR không hợp lệ. Vui lòng nhập một giá trị nằm trong khoảng 0 đến 5500.";
e_str[ERR_WAN_SCR_INVAD] = "Giá trị SCR sai. Vui lòng nhập số nguyên giữa 0 và 5500.";
e_str[ERR_WAN_MBS_INVAD] = "Giá trị MBS không hợp lệ. Vui lòng nhập một giá trị số từ 0 đến 65535.";
e_str[ERR_WAN_CONNECTIONTYPE_NULL] = "Loại kết nối không lựa chọn.";
e_str[ERR_WAN_CONNECTIONTYPE_INVAD] = "Chức năng này bị vô hiệu hóa dưới loại kết nối cổng WAN hiện tại.";
e_str[ERR_WAN_MTU_INVAD] = "Giá trị MTU không hợp lệ. Vui lòng nhập một giá trị từ  576 đến 1500.";
e_str[ERR_WAN_PPPOE_MTU_INVAD] = "Giá trị MTU không hợp lệ. Vui lòng nhập một giá trị từ  576 đến 1492.";
e_str[ERR_WAN_DNSADDR_INVAD] = "Cấu hình địa chỉ máy chủ DNS không hợp lệ.";
e_str[ERR_WAN_SECDNS_INVAD] = "Cấu hình Địa chỉ máy chủ DNS thứ hai không hợp lệ.";
e_str[ERR_WAN_ECHOTIME_INVAD] = "Cấu hình thời gian kích hoạt trực tuyến không hợp lệ. Vui lòng nhập giá trị trong khoảng 0-120.";
e_str[ERR_WAN_USERNAME_INVAD] = "Vui lòng nhập tên đăng nhập.";
e_str[ERR_WAN_PWD_INVAD] = "Vui lòng nhập mật mã.";
e_str[ERR_WAN_DEFGATEWAY_INVAD] = "Vui lòng chọn cổng WAN làm gateway mặc định của hệ thống.";
e_str[ERR_AUTOPVC_INVAD] = "Tìm kiếm PVC thất bại.";
e_str[ERR_AUTOPVC_IP_FORMAT] = "Vui lòng cài đặt địa chỉ IP gateway khả dụng khi tự động tìm kiếm PVC.";
e_str[ERR_GROUP_INVAD] = "Không có giao diện được thêm hoặc không có tên nhóm!";
e_str[ERR_INTERFACE_INVAD] = "Vui lòng chọn giao diện trước.";
e_str[ERR_GROUP_NAME_INVAD] = "Nhóm này đã tồn tại. Vui lòng nhập một số khác.";
e_str[ERR_PWD_INVAD] = "Mật khẩu xác nhận phải phù hợp với mật khẩu mới!";
e_str[ERR_USERNAME_INVAD] = "Tên đăng nhập không chính xác. Vui lòng nhập một giá trị khác."; 
e_str[ERR_WAN_SCR_EMPTY] = "Giá trị SCR không thể trống.";
e_str[ERR_WAN_PCR_EMPTY] = "Giá trị PCR không thể để trống.";
e_str[ERR_WAN_SCR_LARGER_THAN_PCR] = "Giá trị SCR không thể vượt quá giá trị PCR.";
e_str[ERR_WAN_INTER_GROUPNAME_INVALID] = "Tên nhóm không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[ERR_WAN_MBS_EMPTY] = "Không thể để trống giá trị MBS.";
e_str[ERR_WAN_DA_SERVER_NAME_EMPTY] = "Ô Tên/ địa chỉ IP máy chủ không thể để trống!";
e_str[ERR_WAN_DA_DNS_EMPTY] = "Ít nhất một địa chỉ DNS phải được nhập nếu địa chỉ IP/ tên máy chủ không phải là một địa chỉ IP thực!";
e_str[ERR_AUTHSERVER_INVAD] = "Vui lòng nhập tên địa chỉ IP hoặc tên máy chủ.";
e_str[ERR_AUTHDOMAIN_INVAD] = "Vui lòng nhập tên miền xác thực.";
e_str[ERR_WAN_L2TP_MTU_INVAD] = "Giá trị MTU không hợp lệ. Vui lòng nhập một giá trị từ  576 đến 1460.";
e_str[ERR_WAN_PPTP_MTU_INVAD] = "Giá trị MTU không hợp lệ. Vui lòng nhập một giá trị từ  576 đến 1420.";
e_str[ERR_WAN_BPA_AUTHSERVER_INVAD] = "Vui lòng nhập tên miền xác thực.";

// 85700-85799	Static IP/IPoA
e_str[ERR_STAIP_IP_INVAD] = "Địa chỉ IP không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[ERR_STAIP_MASK_INVAD] = "Subnet Mask không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[ERR_STAIP_GW_INVAD] = "Gateway mặc định không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[ERR_STAIP_IP_MASK_CONFLICT] = "Địa chỉ IP xung đột với Subnet Mask. Vui lòng nhập một giá trị khác.";
e_str[ERR_STAIP_GW_MASK_CONFLICT] = "Cổng mặc định xung đột với Subnet Mask. Vui lòng nhập một số khác.";
e_str[ERR_STAIP_IP_GW_CONFLICT] = "Các cổng mặc định không thuộc về đoạn mạng của địa chỉ IP. Vui lòng nhập một số khác.";
e_str[ERR_STAIP_DNS1_INVAD] = "DNS chính không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[ERR_STAIP_DNS2_INVAD] = "DNS thứ hai không hợp lệ. Vui lòng nhập một giá trị khác.";
e_str[ERR_IPOA_PVC_INVAD] = "IPoA không hỗ trợ đa kết nối trên một PVC. Vui lòng cài đặt giá trị VPI/VCI khả dụng.";

// 85800-85899	Dynamic IP
e_str[ERR_WAN_HOST_NAME_INVALID] = "Tên máy chủ không hợp lệ. Vui lòng chọn tên khác.";
e_str[ERR_WAN_DNS_INVAD] = "Bạn đã chọn để cấu hình DNS bằng tay. Vui lòng đặt ít nhất một địa chỉ máy chủ DNS.";

// 85900-85999	PPPoE/PPPoA	
e_str[ERR_IDLETIME_INVAD] = "Thời gian nghỉ tối đa không hợp lệ! Vui lòng nhập một giá trị số từ 0-99!";
e_str[ERR_PPPOA_PVC_INVAD] = "PPPoA không hỗ trợ nhiều kết nối trên một PVC. Vui lòng cài đặt giá trị VPI/VCI khả dụng.";

// 86000-86000 	SNMP
e_str[ERR_SNMP_RCOMMUNITY_EMPTY]	= "Vui lòng nhập giá trị để đọc chung.";
e_str[ERR_SNMP_SCOMMUNITY_EMPTY]	= "Vui lòng nhập giá trị để cài đặt chung.";
e_str[ERR_SNMP_TRAP_IP_INVAD]		= "Địa chỉ IP quản lý Trap không hợp lệ. Vui lòng nhập một giá trị khác."; 

//86100-86199 USB
e_str[ERR_USB_SHARE_NAME_EMPTY] 					= "Tên chia sẻ không thể trống!";
e_str[ERR_USB_SHARE_NAME_NOT_ASCII]					= "Tên chia sẻ phải là định dạng ký tự ASCII!";
e_str[ERR_USB_INVALID_CHAR_IN_FOLDER_NAME] 			= "Ký tự trong tên thư mục không hợp lệ: ký tự đặc biệt hoặc \/*?\"<>|]";
e_str[ERR_USB_DIR_NAME_EMPTY]						= "Danh bạ không thể trống!";
e_str[ERR_USB_DIR_NAME_NOT_ASCII]					= "Danh bạ phải ở định dạng ký tự ASCII!";
e_str[ERR_USB_DIR_EXIST]							= "Danh bạ đã tồn tại!";
e_str[ERR_USB_SHARE_NAME_EXIST]						= "Tên chia sẻ đã tồn tại!";
e_str[ERR_USB_DIR_NOT_EXIST]						= "Danh bạ không tồn tại!";
e_str[ERR_USB_INVALID_CHAR_IN_USER_NAME] 			= "Ký tự trong tên người dùng không hợp lệ: ký tự đặc biệt hoặc \/:*?\"<>|@+=;,.[]()$";
e_str[ERR_USB_CONFLICT_USER_NAME] 					= "Tên người dùng xung đột với nhau!";
e_str[ERR_USB_FTP_PORT_EMPTY]						= "Vui lòng nhập cổng dịch vụ!";
e_str[ERR_USB_FTP_PORT_NOT_NUM]						= "Cổng dịch vụ phải là một con số!";
e_str[ERR_USB_FTP_PORT_RANGE]						= "Các cổng dịch vụ nằm ngoài phạm vi!";
e_str[ERR_USB_FTP_PORT_CONFLICT]					= "Các cổng dịch vụ đã được sử dụng bởi dịch vụ khác!";
e_str[ERR_USB_DLNA_SERVER_NAME_EMPTY] 				= "Tên máy chủ không thể để trống!";
e_str[ERR_USB_DLNA_SERVER_NAME_NOT_ASCII] 			= "Tên máy chủ phải là định dạng ký tự ASCII!";
e_str[ERR_USB_DLNA_INVALID_SERVER_NAME] 			= "Ký tự trong tên máy chủ không hợp lệ: ký tự đặc biệt hoặc \/*?\"<>|]";
//86180-86199 USB 3G
e_str[ERR_USB_3G_FILE_NONE]							= "Vui lòng chọn tập tin cấu hình USB 3G để tải!";

// 86200-86299	IPv6
e_str[ERR_IP6_WAN_CONN_NONE]				= "Không có kết nối WAN! Vui lòng thêm kết nối.";

e_str[ERR_LAN6_PREFIX_EMPTY]				= "Vui lòng nhập tiền tố.";
e_str[ERR_LAN6_PREFIX_INVALID]				= "Tiền tố IPv6 không hợp lệ! Vui lòng nhập một giá trị khác.";
e_str[ERR_LAN6_PREFIX_LEN_EMPTY]			= "Vui lòng nhập độ dài tiền tố.";
e_str[ERR_LAN6_PREFIX_LEN_INVALID]			= "Chiều dài tiền tố phải 64.";
e_str[ERR_LAN6_DHCP6S_START_ID_EMPTY]		= "Vui lòng nhập ID giao diện IPv6 bắt đầu.";
e_str[ERR_LAN6_DHCP6S_END_ID_EMPTY]			= "Vui lòng nhập ID giao diện IPv6 kết thúc.";
e_str[ERR_LAN6_LEASE_TIME_EMPTY]			= "Vui lòng nhập thời gian thuê địa chỉ.";
e_str[ERR_LAN6_DHCP6S_START_ID_INVALID]		= "ID giao diện IPv6 bắt đầu không hợp lệ! Please input a hexadecimal number in range(1-FFFF).";
e_str[ERR_LAN6_DHCP6S_END_ID_INVALID]		= "ID giao diện IPv6 kết thúc không hợp lệ! Vui lòng nhập số định dạng thập lục phân nằm trong khoảng (1-FFFF).";
e_str[ERR_LAN6_LEASE_TIME_INVALID]			= "Thời gian thuê không hợp lệ! Vui lòng nhập một giá trị số trong khoảng (0-999999).";
e_str[ERR_LAN6_DHCP6S_ADDR_CONFLICT]		= "Đầu vào không hợp lệ! ID giao diện bắt đầu lớn hơn ID giao diện kết thúc.";

e_str[ERR_WAN6_IP_STACK_NONE]				= "Vui lòng chọn ít nhất một IP stack!";
e_str[ERR_WAN6_ADDR_INVAD]					= "Định dạng địa chỉ IPv6 không hợp lệ!";
e_str[ERR_WAN6_PFXLEN_INVAD]				= "Chiều dài tiền tố phải là một số giữa 0 và 128."; /* modify by liweijie*/
e_str[ERR_WAN6_DNS_INVAD]					= "Bạn đã chọn để cấu hình DNS IPv6 bằng tay, vui lòng nhập ít nhất một địa chỉ máy chủ DNS IPv6 hợp lệ.";

e_str[ERR_ROUTE6_DST_ADDR_VALID]			= "Vui lòng nhập địa chỉ IPv6 đích đến hợp lệ.";
e_str[ERR_ROUTE6_PREFIX_LEN_VALID]			= "Vui lòng nhập độ dài tiền tố hợp lệ. Giá trị không được vượt quá 64.";
e_str[ERR_ROUTE6_GW_ADDR_VALID]				= "Vui lòng nhập một địa chỉ gateway IPv6 chính xác.";
e_str[ERR_ROUTE6_GW_VALID]					= "Địa chỉ cổng không thể có tiền tố giống như chọn địa chỉ giao diện WAN IPv6.";

e_str[ERR_TUNNEL6_DSLITE_REMOTE_INVALID]	= "Vui lòng nhập một địa chỉ IPv6 từ xa chính xác.";
e_str[ERR_TUNNEL6_DSLITE_WAN_CONN_ERR]		= "Không thể có một kết nối DS-Lite IPv4 mạng WAN. Vui lòng kiểm tra cấu hình WAN.";
e_str[ERR_TUNNEL6_6RD_PREFIX_LEN_INVALID]	= "Vui lòng nhập một độ dài tiền tố 6RD hợp lệ. Giá trị nên nằm trong khoảng (1-32).";
e_str[ERR_TUNNEL6_6RD_PREFIX_INVALID]		= "Vui lòng nhập một tiền tố 6RD họp lệ.";
e_str[ERR_TUNNEL6_6RD_BR_INVALID]			= "Please input a valid border relay IPv4 address.";
e_str[ERR_TUNNEL6_6RD_IP_MASK_LEN_INVALID]	= "Vui lòng nhập độ dài mask IPv4 hợp lệ. Giá trị phải nằm trong khoảng (1-32).";
e_str[ERR_TUNNEL6_6RD_NOT_SUPPORT_AUTO]		= "Chỉ kết nối WAN IP động hỗ trợ 6RD tự động. Vui lòng thay đổi dạng cấu hình sang thủ công hoặc chọn một dạng kết nối khác!";
e_str[ERR_TUNNEL6_6RD_WAN_CONN_ERR]			= "Không thể có các kết nối IPv6 mạng WAN trong 6RD. Vui lòng kiểm tra các kết nối WAN.";
e_str[ERR_TUNNEL6_6TO4_WAN_CONN_ERR]		= "Không thể có các kết nối IPv6 mạng WAN trong 6to4. Vui lòng kiểm tra các kết nối WAN.";

e_str[ERR_FW6_ADDR_INVAD]					= "Định dạng địa chỉ IPv6 không hợp lệ!";
e_str[ERR_FW6_PFXLEN_INVAD]					= "Độ dài tiền tố không hợp lệ!";

// 86400-86499  Voip
e_str[ERR_VOIP_ACCOUNT_MUCH_DEL_ERROR]		= "Có quá nhiều tài khoản hiện có, một tài khoản sẽ bị xóa.";
e_str[ERR_VOIP_ACCOUNT_MUCH_ADD_ERROR]		= "Có quá nhiều tài khoản hiện có. Bạn không thể thêm tài khoản khác cho đến khi một mục trước đó đã được xóa.";
e_str[ERR_VOIP_PROFILE_CONFLICT_ERROR]		= "Tên hồ sơ đã tồn tại.";
e_str[ERR_VOIP_NUM_AND_REGISTRAR_CONFLICT_ERROR]	= "Các số điện thoại và đăng ký đã tồn tại!";
e_str[ERR_VOIP_PREFIX_CONFLICT_ERROR]		= "Tiền tố đã tồn tại!";
e_str[ERR_VOIP_DEST_EMPTY_ERROR]			= "Ô điểm đến không được để trống!";
e_str[ERR_VOIP_PREFIX_MAXLEN_ERROR]			= "Chiều dài tối đa là không hợp lệ, giá trị chiều dài tối đa không được nhỏ hơn chiều dài của tiền tố.";
e_str[ERR_VOIP_STRIP_LENGTH_ERROR]			= "Chiều dài dải không hợp lệ, chiều dài dải không được lớn hơn chiều dài của tiền tố.";
e_str[ERR_VOIP_INTERFACE_ENABLE_ERROR]		= "Mục giao diện kích hoạt không thể để trống.";
e_str[ERR_VOIP_DIALPLAN_ADD_ERROR]			= "Số lượng của các mục kế hoạch quay số đã vượt quá giới hạn! Nếu bạn muốn thêm một kế hoạch quay số khác, hãy loại bỏ một mục hiện tại.";
e_str[ERR_VOIP_INTERFACE_BAR_ERROR]			= "Mục giao diện Barring không thể để trống.";
e_str[ERR_VOIP_ENTRY_MAX_ERROR]				= "Số lượng tối đa của mục đã tồn tại, không thể thêm mục vào!";
e_str[ERR_VOIP_SPEEDDIAL_CONFLICT_ERROR]	= "Mục tốc độ quay số này đã tồn tại.";
e_str[ERR_VOIP_USB_DISCONNECT]				= "Lưu ý: Ổ lưu trữ USB đã ngắt kết nối!";
e_str[ERR_VOIP_USB_NO_FILES_ERROR]			= "Lưu ý: Không tìm thấy định dạng tập tin thích hợp trong thiết bị lưu trữ USB.";
e_str[ERR_VOIP_USB_CAP_NOT_EGOUGH]			= "Lưu ý: Không đủ Dung lượng hộp thư USB khả dụng!";
e_str[ERR_VOIP_DIALPLAN_DEL]				= "Các mục mà bạn đã chọn sẽ bị xóa!";
e_str[ERR_VOIP_TOO_MANY_DIALPLAN]			= "Số lượng của các mục kế hoạch quay số đã vượt quá giới hạn! Nếu bạn muốn thêm một kế hoạch quay số khác, hãy loại bỏ một mục hiện tại.";
e_str[ERR_VOIP_USB_BUSY_ERROR]				= "Hộp thư thoại USB hiện đang bận, vui lòng thử lại sau!";
e_str[ERR_VOIP_CHAR_ERROR]					= "Vui lòng chỉ nhập ký tự định dạng mã ASCII!";
e_str[ERR_VOIP_NOT_EMPTY]					= "Vui lòng nhập một giá trị được chấp nhận vào trường này.";
e_str[ERR_VOIP_VALUE_LEN_ERROR]				= "Chiều dài của giá trị này là vượt quá phạm vi chỉ định.";
e_str[ERR_VOIP_NUMBER_OUT_RANGE]			= "Số trong giá trị này ra khỏi phạm vi chỉ định.";
e_str[ERR_VOIP_VALUE_INVALID]				= "Giá trị chỉ có thể chứa các ký tự 0-9.";
e_str[ERR_VOIP_VALUE_FORMAT_ERROR]			= "Mục nhập này chứa các ký tự không hợp lệ.";
e_str[ERR_VOIP_CONTAIN_ILLEGAL_CHAR]		= "Các giá trị không thể chứa các ký tự không hợp lệ \"\" \"\;: <@\".";
e_str[ERR_VOIP_INVALID_IP]					= "Địa chỉ IP không hợp lệ.";
e_str[ERR_VOIP_EXIST_ERROR]					= "Đã tồn tại";
e_str[ERR_VOIP_LIST_CONFILICT]				= "Số điện thoại này đã được thêm vào";
e_str[ERR_VOIP_PROFILE_NAME_CONFLICT_ERROR] = "Lưu ý: Tên hồ sơ đã tồn tại, chúng tôi sẽ xóa tài khoản với tên hồ sơ trùng!";

// 87500-87999	Wireless
e_str[ERR_WLAN_SSID_IS_EMPTY]="Vui lònh nhập SSID.";
e_str[ERR_WLAN_SSID_LEN_OUTRANGE]="Tối đa 32 ký tự tại trường SSID!";
e_str[ERR_WLAN_WDS_SSID_IS_EMPTY]="Vui lòng nhập SSID bắt cầu.";
e_str[ERR_WLAN_WDS_SSID_LEN_OUTRANGE]="Tối đa 32 ký tự tại trường SSID bắt cầu!";
e_str[ERR_WLAN_WDS_BSSID_IS_EMPTY]="Vui lòng nhập BSSID bắt cầu.";
e_str[ERR_WLAN_WDS_BSSID_INVALID]="Định dạng SSID cầu nối không hợp lệ. Vui lòng kiểm tra giá trị nhập.";
e_str[ERR_WLAN_WDS_ASCII_KEY_INVALID]="Mật mã Bridge ASCII chứa các ký tự bất hợp pháp.";
e_str[ERR_WLAN_WDS_ASCII_KEY_OUTRANGE]="Các từ khóa ASCII kết nối cầu WEP phải là 5, 13 hoặc 16 ký tự.";
e_str[ERR_WLAN_WDS_HEX_KEY_INVALID]="Mật khẩu thập lục phân của kết nối cầu chứa các ký tự không hợp lệ.";
e_str[ERR_WLAN_WDS_HEX_KEY_OUTRANGE]=" Từ khóa thập lục phân kết nối cầu WEP phải là 10, độ dài 26 hoặc 32 ký tự.";
e_str[ERR_WLAN_WDS_PSK_OUTRANGE]="Các từ khóa kết nối cầu PSK phải có từ 8 đến 63 ký tự ASCII hoặc 64 ký tự thập lục phân trong chiều dài.";
e_str[ERR_WLAN_WDS_AUTO_CHANNEL]="Nếu đang sử dụng WDS, kênh phải được đặt theo RootAP.";
e_str[ERR_WLAN_WDS_CHANNEL]="Kết nối kênh AP là $, mà cấu hình kênh AP khác nhau. Vui lòng xác nhận các thiết lập kênh.";
e_str[ERR_WLAN_SSID_IS_ILLEGAL]="SSID chứ ký tự không hợp lệ.";

e_str[ERR_WLAN_BEACONINTERVAL_INVAD]="Giá trị mốc báo khoảng cách chứa các ký tự bất hợp pháp. Vui lòng kiểm tra đầu vào.";
e_str[ERR_WLAN_RTSINTERVAL_INVAD]="Giá trị mức RTS chứa các ký tự không hợp lệ. Vui lòng kiểm tra đầu vào.";
e_str[ERR_WLAN_FRAGTH_INVAD]="Giá trị mức độ phân mảnh chứa các ký tự bất hợp pháp. Vui lòng kiểm tra đầu vào.";
e_str[ERR_WLAN_DTIMTH_INVAD]="Giá trị khoảng DTIM chứa các ký tự bất hợp pháp. Vui lòng kiểm tra đầu vào.";
e_str[ERR_WLAN_BEACONINTERVAL_OUTRANGE]="Giá trị mốc báo khoảng cách phải nằm trong phạm vi 25-1000. Vui lòng kiểm tra đầu vào.";
 
e_str[ERR_WLAN_RTSINTERVAL_OUTRANGE]="Giá trị mức RTS phải nằm trong phạm vi 1-2346. Vui lòng kiểm tra đầu vào.";
e_str[ERR_WLAN_FRAGTH_OUTRANGE]="Giá trị mức độ phân mảnh phải nằm trong phạm vi 256-2346. Vui lòng kiểm tra đầu vào.";
e_str[ERR_WLAN_DTIMTH_OUTRANGE]="Giá trị khoảng DTIM phải nằm trong phạm vi 1-255. Vui lòng kiểm tra đầu vào.";

e_str[ERR_WLAN_11N_WEP_CONFLICT]="chỉ 11n không được hỗ trợ với kích hoạt mã hóa WEP.";
e_str[ERR_WLAN_11N_TKIP_CONFLICT]="chỉ 11n không được hỗ trợ với kích hoạt mã hóa TKIP.";
e_str[ERR_WLAN_QSS_WPA_CONFLICT]="mã hóa WPA thì không được hỗ trợ với WPS đã kích hoạt.";
e_str[ERR_WLAN_QSS_TKIP_CONFLICT]="mã hóa TKIP không được hỗ trợ với WPS được kích hoạt.";
e_str[ERR_WLAN_QSS_WEP_CONFLICT]="mã hóa WEP không được hỗ trợ với WPS được kích hoạt.";
e_str[ERR_WLAN_MSSID_WEP_CONFLICT]="Tính năng Multi SSID sẽ không được hỗ trợ khi kích hoạt mã hóa WEP.";
e_str[ERR_WLAN_GUESTNETWORK_WEP_CONFLICT] = "Khách mạng không được hỗ trợ cùng với kích hoạt mã hóa WEP";
e_str[ERR_WLAN_GUESTNETWORK_MAXSTANUM_INVALID] = "Số lượng khách nên giữa 1 và 32";
e_str[ERR_WLAN_PIN_EMPTY]="Vui lòng nhập PIN.";
e_str[ERR_WLAN_PIN_LEGNTH_INVALID]="Tối đa 8 ký tự tại trường PIN!";
e_str[ERR_WLAN_PIN_INVALID]="Giá trị PIN phải là định dạng số.";
e_str[ERR_WLAN_PIN_CHECKSUM_FAIL]="Mã PIN không hợp lệ. Vui lòng kiểm tra lại.";
e_str[ERR_WLAN_WEP_NO_KEY]="Vui lòng đảm bảo ít nhất có một mã WEP hợp lệ.";
e_str[ERR_WLAN_WEP_KEY_LENGTH_INVALID]="Vui lòng nhập mã WEP hợp lệ.";
e_str[ERR_WLAN_WEP_KEY_HEX_INVALID]="Vui lòng đảm bảo mã hiện tại chỉ có ký tự thập lục phân.";
e_str[ERR_WLAN_WEP_KEY_ASCII_INVALID]="Vui lòng đảm bảo mã hiện tại chỉ có ký tự ASCII.";
e_str[ERR_WLAN_WPA_PSK_EMPTY]="Vui lòng nhập mật mã TKIP/AES!";
e_str[ERR_WLAN_WPA_PSK_LENGTH_INVALID]="Chiều dài của mật mã TKIP/AES phải có nhiều hơn 8 ký tự.";
e_str[ERR_WLAN_WPA_PSK_HEX_INVALID]="Các giá trị TKIP/AES chứa không được là các ký tự thập lục phân. Vui lòng nhập một mật mã ở dạng thập lục phân hợp lệ.";
e_str[ERR_WLAN_WPA_PSK_ASCII_INVALID]="Các giá trị TKIP/AES chứa không được là các ký tự ASCII. Vui lòng nhập một mật mã khác ở dạng ký tự ASCII hợp lệ.";
e_str[ERR_WLAN_WPA_INTERVAL_INVALID]="Chu kỳ đổi mới nhóm từ khóa không hợp lệ!";
e_str[ERR_WLAN_WPA_PORT_INVALID]="Vui lòng nhập Cổng máy chủ RADIUS hợp lệ!";
e_str[ERR_WLAN_WPA_PWD_EMPTY]="Vui lòng nhập Mật mã máy chủ RADIUS!";
e_str[ERR_WLAN_WPA_PWD_INVALID]="Vui lòng nhập Mật mã máy chủ RADIUS hợp lệ!";

e_str[ERR_WLAN_MAC_LIST_EMPTY]="Danh sách lọc địa chỉ MAC không dây trống.";
e_str[ERR_WLAN_MAC_INVALID]="Địa chỉ MAC không hợp lệ. Vui lòng nhập một địa chỉ MAC khác.";
e_str[ERR_WLAN_MAC_CONFLICT]="Địa chỉ hiện tại này đã tồn tại. Vui lòng nhập một địa chỉ khác.";
e_str[ERR_WLAN_MAC_FILTER_INVALID]="Cấu hình bộ lọc địa chỉ MAC thất bại. Hãy chắc chắn rằng chức năng không dây đã được kích hoạt!";
e_str[ERR_WLAN_MAC_FILTER_DESCRIP_INVALID]="Vui lòng nhập mô tả chính xác! Mô tả không thể chứa các ký tự '\/\":*?<>|&', và không được kết thúc bằng khoảng trắng.";

// 88000-88099 For IPTV Spec
e_str[ERR_VLAN_INVALID_VLANID] = "Invalid VLAN ID,please enter a number between 2 and 4094";
e_str[ERR_VLAN_SAME_VLANID] = "Các ID VLAN không thể giống nhau.";
e_str[ERR_VLAN_NO_INTERNET_GROUP] = "Bắt buộc Ít nhất một cổng Internet.";

// 89000-89100 3G error
e_str[ERR_PIN_CODE_EMPTY] = "Mã PIN không thể để trống!";
e_str[ERR_PIN_ASCII] = "Mã PIN phải là ký tự định dạng ASCII!";
e_str[ERR_PIN_CODE_CONFLICT] = "Xác nhận mã PIN mới phải phù hợp với mã PIN mới!";
e_str[ERR_3G_INVLIAD_DIALNUM] = "Số quay không hợp lệ. Giá trị được chấp nhận là 0-9 và # và *!";

// 90000-96000	HTTP protocol error
e_str[ERR_INTERNAL] = "Lỗi hệ thống nội bộ!";
e_str[ERR_NOT_FOUND] = " không tìm thấy tập tin!";
e_str[ERR_NOT_ACCEPTED] = "Tập tin không được chấp nhận!";

//120000-? IE error
e_str[ERR_NETWORK] = "Lỗi mạng.Vui lòng kiểm tra kết nối mạng và cấu hình mạng.";

