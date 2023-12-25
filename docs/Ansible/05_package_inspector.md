---
title: Ansible Package Changelog
---
# Ansible Package Changelog <!-- omit in toc -->

- [ansible-9.0.1](#ansible-901)
  - [Version Changes](#version-changes)
  - [Modules Added](#modules-added)
  - [Modules Removed](#modules-removed)
  - [Collections](#collections)
- [ansible-8.5.0](#ansible-850)
  - [Version Changes](#version-changes-1)
  - [Modules Added](#modules-added-1)
  - [Modules Removed](#modules-removed-1)
  - [Collections](#collections-1)
- [ansible-8.3.0](#ansible-830)
  - [Version Changes](#version-changes-2)
  - [Modules Added](#modules-added-2)
  - [Modules Removed](#modules-removed-2)
  - [Collections](#collections-2)
- [ansible-8.0.0](#ansible-800)
  - [Version Changes](#version-changes-3)
  - [Modules Added](#modules-added-3)
  - [Modules Removed](#modules-removed-3)
  - [Collections](#collections-3)
- [ansible-7.6.0](#ansible-760)
  - [Collections](#collections-4)

## ansible-9.0.1

!!! seealso "FYI"
    All changes compared to previous version inspected, _ansible-8.5.0_

### Version Changes

  | Collection | Old Version | New Version |
  | --- | :---: | :---: |
  | amazon.aws | <span style="text-decoration-line: line-through">6.5.0</span> | 7.0.0 |
  | ansible.netcommon | <span style="text-decoration-line: line-through">5.2.0</span> | 5.3.0 |
  | ansible.windows | <span style="text-decoration-line: line-through">1.14.0</span> | 2.1.0 |
  | arista.eos | <span style="text-decoration-line: line-through">6.1.2</span> | 6.2.1 |
  | awx.awx | <span style="text-decoration-line: line-through">22.7.0</span> | 23.3.1 |
  | azure.azcollection | <span style="text-decoration-line: line-through">1.18.1</span> | 1.19.0 |
  | cisco.aci | <span style="text-decoration-line: line-through">2.7.0</span> | 2.8.0 |
  | cisco.asa | <span style="text-decoration-line: line-through">4.0.2</span> | 4.0.3 |
  | cisco.dnac | <span style="text-decoration-line: line-through">6.7.5</span> | 6.7.6 |
  | cisco.intersight | <span style="text-decoration-line: line-through">1.0.27</span> | 2.0.3 |
  | cisco.ios | <span style="text-decoration-line: line-through">4.6.1</span> | 5.2.0 |
  | cisco.iosxr | <span style="text-decoration-line: line-through">5.0.3</span> | 6.1.0 |
  | cisco.meraki | <span style="text-decoration-line: line-through">2.16.5</span> | 2.16.14 |
  | cisco.nxos | <span style="text-decoration-line: line-through">4.4.0</span> | 5.2.1 |
  | community.aws | <span style="text-decoration-line: line-through">6.3.0</span> | 7.0.0 |
  | community.ciscosmb | <span style="text-decoration-line: line-through">1.0.6</span> | 1.0.7 |
  | community.crypto | <span style="text-decoration-line: line-through">2.15.1</span> | 2.16.0 |
  | community.dns | <span style="text-decoration-line: line-through">2.6.2</span> | 2.6.3 |
  | community.docker | <span style="text-decoration-line: line-through">3.4.9</span> | 3.4.11 |
  | community.general | <span style="text-decoration-line: line-through">7.5.0</span> | 8.0.2 |
  | community.grafana | <span style="text-decoration-line: line-through">1.5.4</span> | 1.6.1 |
  | community.hashi_vault | <span style="text-decoration-line: line-through">5.0.0</span> | 6.0.0 |
  | community.hrobot | <span style="text-decoration-line: line-through">1.8.1</span> | 1.8.2 |
  | community.mysql | <span style="text-decoration-line: line-through">3.7.2</span> | 3.8.0 |
  | community.network | <span style="text-decoration-line: line-through">5.0.0</span> | 5.0.2 |
  | community.postgresql | <span style="text-decoration-line: line-through">2.4.3</span> | 3.2.0 |
  | community.sap | <span style="text-decoration-line: line-through">1.0.0</span> | 2.0.0 |
  | community.sops | <span style="text-decoration-line: line-through">1.6.6</span> | 1.6.7 |
  | community.vmware | <span style="text-decoration-line: line-through">3.10.0</span> | 4.0.0 |
  | community.windows | <span style="text-decoration-line: line-through">1.13.0</span> | 2.0.0 |
  | containers.podman | <span style="text-decoration-line: line-through">1.10.3</span> | 1.11.0 |
  | dellemc.openmanage | <span style="text-decoration-line: line-through">7.6.1</span> | 8.4.0 |
  | dellemc.powerflex | <span style="text-decoration-line: line-through">1.9.0</span> | 2.0.1 |
  | f5networks.f5_modules | <span style="text-decoration-line: line-through">1.26.0</span> | 1.27.0 |
  | fortinet.fortimanager | <span style="text-decoration-line: line-through">2.2.1</span> | 2.3.0 |
  | fortinet.fortios | <span style="text-decoration-line: line-through">2.3.2</span> | 2.3.4 |
  | hetzner.hcloud | <span style="text-decoration-line: line-through">1.16.0</span> | 2.3.0 |
  | ibm.spectrum_virtualize | <span style="text-decoration-line: line-through">1.12.0</span> | 2.0.0 |
  | inspur.ispim | <span style="text-decoration-line: line-through">1.3.0</span> | 2.1.0 |
  | lowlydba.sqlserver | <span style="text-decoration-line: line-through">2.2.1</span> | 2.2.2 |
  | netapp.aws | <span style="text-decoration-line: line-through">21.7.0</span> | 21.7.1 |
  | netapp.azure | <span style="text-decoration-line: line-through">21.10.0</span> | 21.10.1 |
  | netapp.cloudmanager | <span style="text-decoration-line: line-through">21.22.0</span> | 21.22.1 |
  | netapp.ontap | <span style="text-decoration-line: line-through">22.7.0</span> | 22.8.2 |
  | netapp.um_info | <span style="text-decoration-line: line-through">21.8.0</span> | 21.8.1 |
  | netbox.netbox | <span style="text-decoration-line: line-through">3.14.0</span> | 3.15.0 |
  | purestorage.flasharray | <span style="text-decoration-line: line-through">1.21.0</span> | 1.22.0 |
  | t_systems_mms.icinga_director | <span style="text-decoration-line: line-through">1.33.1</span> | 2.0.1 |

### Modules Added

  | Collection | Module |
  | --- | --- |
  | amazon.aws | aws_region_info |
  | amazon.aws | ec2_import_image |
  | amazon.aws | ec2_import_image_info |
  | amazon.aws | iam_access_key |
  | amazon.aws | iam_access_key_info |
  | amazon.aws | iam_group |
  | amazon.aws | iam_managed_policy |
  | amazon.aws | iam_mfa_device_info |
  | amazon.aws | iam_password_policy |
  | amazon.aws | iam_role |
  | amazon.aws | iam_role_info |
  | amazon.aws | rds_global_cluster_info |
  | amazon.aws | s3_bucket_info |
  | amazon.aws | sts_assume_role |
  | ansible.netcommon | cli_backup |
  | cisco.aci | aci_bgp_best_path_policy |
  | cisco.aci | aci_bgp_timers_policy |
  | cisco.aci | aci_fabric_interface_policy_group |
  | cisco.aci | aci_fabric_node_control |
  | cisco.aci | aci_fabric_pod_selector |
  | cisco.aci | aci_fabric_wide_settings |
  | cisco.aci | aci_interface_policy_leaf_fc_policy_group |
  | cisco.aci | aci_interface_policy_spine_policy_group |
  | cisco.aci | aci_l3out_bgp_protocol_profile |
  | cisco.aci | aci_match_as_path_regex_term |
  | cisco.aci | aci_match_community_factor |
  | cisco.aci | aci_match_community_regex_term |
  | cisco.aci | aci_match_community_term |
  | cisco.aci | aci_match_route_destination |
  | cisco.aci | aci_match_rule |
  | cisco.aci | aci_route_control_context |
  | cisco.aci | aci_route_control_profile |
  | cisco.aci | aci_system_banner |
  | cisco.aci | aci_system_endpoint_controls |
  | cisco.aci | aci_system_global_aes_passphrase_encryption |
  | cisco.dnac | network_settings_intent |
  | cisco.intersight | intersight_bios_policy |
  | cisco.iosxr | iosxr_bgp_templates |
  | cisco.nxos | nxos_bgp_templates |
  | cisco.nxos | nxos_fc_interfaces |
  | community.general | facter_facts |
  | community.grafana | grafana_organization_user |
  | community.vmware | vmware_host_acceptance_info |
  | containers.podman | podman_container_exec |
  | containers.podman | podman_runlabel |
  | dellemc.openmanage | idrac_network_attributes |
  | dellemc.openmanage | ome_alert_policies |
  | dellemc.openmanage | ome_alert_policies_actions_info |
  | dellemc.openmanage | ome_alert_policies_category_info |
  | dellemc.openmanage | ome_alert_policies_info |
  | dellemc.openmanage | ome_alert_policies_message_id_info |
  | dellemc.openmanage | redfish_firmware_rollback |
  | fortinet.fortimanager | fmgr_casb_profile |
  | fortinet.fortimanager | fmgr_casb_profile_saasapplication |
  | fortinet.fortimanager | fmgr_casb_profile_saasapplication_accessrule |
  | fortinet.fortimanager | fmgr_casb_profile_saasapplication_customcontrol |
  | fortinet.fortimanager | fmgr_casb_profile_saasapplication_customcontrol_option |
  | fortinet.fortimanager | fmgr_casb_saasapplication |
  | fortinet.fortimanager | fmgr_casb_useractivity |
  | fortinet.fortimanager | fmgr_casb_useractivity_controloptions |
  | fortinet.fortimanager | fmgr_casb_useractivity_controloptions_operations |
  | fortinet.fortimanager | fmgr_casb_useractivity_match |
  | fortinet.fortimanager | fmgr_casb_useractivity_match_rules |
  | fortinet.fortimanager | fmgr_dvmdb_upgrade |
  | fortinet.fortimanager | fmgr_firewall_accessproxy6_apigateway6_quic |
  | fortinet.fortimanager | fmgr_firewall_accessproxy6_apigateway_quic |
  | fortinet.fortimanager | fmgr_firewall_accessproxy_apigateway6_quic |
  | fortinet.fortimanager | fmgr_firewall_accessproxy_apigateway_quic |
  | fortinet.fortimanager | fmgr_firewall_casbprofile |
  | fortinet.fortimanager | fmgr_firewall_casbprofile_saasapplication |
  | fortinet.fortimanager | fmgr_firewall_casbprofile_saasapplication_accessrule |
  | fortinet.fortimanager | fmgr_firewall_casbprofile_saasapplication_customcontrol |
  | fortinet.fortimanager | fmgr_firewall_casbprofile_saasapplication_customcontrol_option |
  | fortinet.fortimanager | fmgr_firewall_vendormac |
  | fortinet.fortimanager | fmgr_firewall_vip_quic |
  | fortinet.fortimanager | fmgr_pm_config_meta_reference |
  | fortinet.fortimanager | fmgr_securityconsole_install_objects_v2 |
  | fortinet.fortimanager | fmgr_switchcontroller_managedswitch_routeoffloadrouter |
  | fortinet.fortimanager | fmgr_switchcontroller_ptp_profile |
  | fortinet.fortimanager | fmgr_system_csf |
  | fortinet.fortimanager | fmgr_system_csf_fabricconnector |
  | fortinet.fortimanager | fmgr_system_csf_trustedlist |
  | fortinet.fortimanager | fmgr_system_sdnproxy |
  | fortinet.fortimanager | fmgr_virtualpatch_profile |
  | fortinet.fortimanager | fmgr_virtualpatch_profile_exemption |
  | fortinet.fortios | fortios_casb_profile |
  | fortinet.fortios | fortios_casb_saas_application |
  | fortinet.fortios | fortios_casb_user_activity |
  | fortinet.fortios | fortios_switch_controller_ptp_interface_policy |
  | fortinet.fortios | fortios_switch_controller_ptp_profile |
  | fortinet.fortios | fortios_system_speed_test_setting |
  | fortinet.fortios | fortios_virtual_patch_profile |
  | fortinet.fortios | fortios_web_proxy_fast_fallback |
  | inspur.ispim | hba_info |
  | inspur.ispim | update_psu |
  | netapp.ontap | na_ontap_ems_config |
  | netbox.netbox | netbox_config_template |
  | purestorage.flasharray | purefa_file |

### Modules Removed

  | Collection | Module |
  | --- | --- |
  | cisco.ios | ios_logging |
  | cisco.iosxr | iosxr_bgp |
  | cisco.nxos | nxos_bgp |
  | cisco.nxos | nxos_bgp_af |
  | cisco.nxos | nxos_bgp_neighbor |
  | cisco.nxos | nxos_bgp_neighbor_af |
  | community.aws | aws_region_info |
  | community.aws | iam_access_key |
  | community.aws | iam_access_key_info |
  | community.aws | iam_group |
  | community.aws | iam_managed_policy |
  | community.aws | iam_mfa_device_info |
  | community.aws | iam_password_policy |
  | community.aws | iam_role |
  | community.aws | iam_role_info |
  | community.aws | s3_bucket_info |
  | community.aws | sts_assume_role |
  | community.sap | hana_query |
  | community.sap | sap_company |
  | community.sap | sap_snote |
  | community.sap | sap_system_facts |
  | community.sap | sap_task_list_execute |
  | community.sap | sap_user |
  | community.sap | sapcar_extract |
  | dellemc.openmanage | dellemc_get_firmware_inventory |
  | dellemc.openmanage | dellemc_get_system_inventory |
  | hetzner.hcloud | hcloud_datacenter_facts |
  | hetzner.hcloud | hcloud_floating_ip_facts |
  | hetzner.hcloud | hcloud_image_facts |
  | hetzner.hcloud | hcloud_location_facts |
  | hetzner.hcloud | hcloud_server_facts |
  | hetzner.hcloud | hcloud_server_type_facts |
  | hetzner.hcloud | hcloud_ssh_key_facts |
  | hetzner.hcloud | hcloud_volume_facts |
  | ibm.spectrum_virtualize | ibm_svc_vdisk |

### Collections


??? seealso coll-plugin-details "amazon.aws (7.0.0)"

    #### amazon.aws details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 1 |
    | inventory | 2 |
    | lookup | 5 |
    | modules | 110 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | botocore | Updated | <span style="text-decoration-line: line-through">>=1.25.0</span> | >=1.29.0 |
    | boto3 | Updated | <span style="text-decoration-line: line-through">>=1.22.0</span> | >=1.26.0 |
    | | | |

??? seealso coll-plugin-details "ansible.netcommon (5.3.0)"

    #### ansible.netcommon details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 11 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 15 |
    | filter | 9 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.posix (1.5.4)"

    #### ansible.posix details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 8 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.utils (2.11.0)"

    #### ansible.utils details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 4 |
    | modules | 4 |
    | filter | 31 |
    | test | 25 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.windows (2.1.0)"

    #### ansible.windows details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "arista.eos (6.2.1)"

    #### arista.eos details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 41 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 34 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "awx.awx (23.3.1)"

    #### awx.awx details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 3 |
    | modules | 43 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "azure.azcollection (1.19.0)"

    #### azure.azcollection details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 1 |
    | modules | 283 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "check_point.mgmt (5.1.1)"

    #### check_point.mgmt details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 5 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 259 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "chocolatey.chocolatey (1.5.1)"

    #### chocolatey.chocolatey details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.aci (2.8.0)"

    #### cisco.aci details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 193 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.asa (4.0.3)"

    #### cisco.asa details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.dnac (6.7.6)"

    #### cisco.dnac details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 382 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 388 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.intersight (2.0.3)"

    #### cisco.intersight details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 10 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ios (5.2.0)"

    #### cisco.ios details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 38 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 36 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | paramiko | Updated | <span style="text-decoration-line: line-through">==2.8.1</span> |  |
    | ansible-pylibssh | Removed | <span style="text-decoration-line: line-through"></span> | |
    | | | |

??? seealso coll-plugin-details "cisco.iosxr (6.1.0)"

    #### cisco.iosxr details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 33 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 32 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ise (2.5.16)"

    #### cisco.ise details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 383 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 383 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.meraki (2.16.14)"

    #### cisco.meraki details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 428 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 471 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.mso (2.5.0)"

    #### cisco.mso details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 68 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.nxos (5.2.1)"

    #### cisco.nxos details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 101 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 85 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ucs (1.10.0)"

    #### cisco.ucs details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 29 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cloud.common (2.1.4)"

    #### cloud.common details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cloudscale_ch.cloud (2.3.1)"

    #### cloudscale_ch.cloud details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.aws (7.0.0)"

    #### community.aws details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 159 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | botocore | Updated | <span style="text-decoration-line: line-through">>=1.25.0</span> | >=1.29.0 |
    | boto3 | Updated | <span style="text-decoration-line: line-through">>=1.22.0</span> | >=1.26.0 |
    | | | |

??? seealso coll-plugin-details "community.azure (2.0.0)"

    #### community.azure details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.ciscosmb (1.0.7)"

    #### community.ciscosmb details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.crypto (2.16.0)"

    #### community.crypto details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 32 |
    | filter | 7 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.digitalocean (1.24.0)"

    #### community.digitalocean details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 55 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.dns (2.6.3)"

    #### community.dns details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 2 |
    | lookup | 2 |
    | modules | 16 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.docker (3.4.11)"

    #### community.docker details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 3 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.general (8.0.2)"

    #### community.general details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 25 |
    | inventory | 13 |
    | lookup | 32 |
    | modules | 594 |
    | filter | 14 |
    | test | 1 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.grafana (1.6.1)"

    #### community.grafana details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.hashi_vault (6.0.0)"

    #### community.hashi_vault details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 9 |
    | modules | 10 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.hrobot (1.8.2)"

    #### community.hrobot details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 12 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.libvirt (1.3.0)"

    #### community.libvirt details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.mongodb (1.6.3)"

    #### community.mongodb details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 17 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.mysql (3.8.0)"

    #### community.mysql details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.network (5.0.2)"

    #### community.network details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 13 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 315 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | ansible-pylibssh | Added | |  |
    | | | |

??? seealso coll-plugin-details "community.okd (2.3.0)"

    #### community.okd details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.postgresql (3.2.0)"

    #### community.postgresql details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 23 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.proxysql (1.5.1)"

    #### community.proxysql details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.rabbitmq (1.2.3)"

    #### community.rabbitmq details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.routeros (2.10.0)"

    #### community.routeros details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sap (2.0.0)"

    #### community.sap details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sap_libs (1.4.1)"

    #### community.sap_libs details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sops (1.6.7)"

    #### community.sops details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 2 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.vmware (4.0.0)"

    #### community.vmware details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 2 |
    | lookup | 0 |
    | modules | 172 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.windows (2.0.0)"

    #### community.windows details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 85 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.zabbix (2.1.0)"

    #### community.zabbix details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "containers.podman (1.11.0)"

    #### containers.podman details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 25 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cyberark.conjur (1.2.2)"

    #### cyberark.conjur details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cyberark.pas (1.0.23)"

    #### cyberark.pas details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.enterprise_sonic (2.2.0)"

    #### dellemc.enterprise_sonic details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 41 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.openmanage (8.4.0)"

    #### dellemc.openmanage details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 90 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.powerflex (2.0.1)"

    #### dellemc.powerflex details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 12 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.unity (1.7.1)"

    #### dellemc.unity details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 18 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "f5networks.f5_modules (1.27.0)"

    #### f5networks.f5_modules details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 3 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 2 |
    | modules | 179 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "fortinet.fortimanager (2.3.0)"

    #### fortinet.fortimanager details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 1166 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "fortinet.fortios (2.3.4)"

    #### fortinet.fortios details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 666 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "frr.frr (2.0.2)"

    #### frr.frr details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "gluster.gluster (1.0.2)"

    #### gluster.gluster details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "google.cloud (1.2.0)"

    #### google.cloud details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 170 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "grafana.grafana (2.2.3)"

    #### grafana.grafana details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "hetzner.hcloud (2.3.0)"

    #### hetzner.hcloud details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 31 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | ansible-core | Added | | >=2.13 |
    | netaddr | Added | |  |
    | cryptography | Added | |  |
    | python-dateutil | Added | |  |
    | requests | Added | |  |
    | pylint | Added | |  |
    | antsibull-docs | Added | | >=2.5.0|<2.6 |
    | | | |

??? seealso coll-plugin-details "hpe.nimble (1.1.4)"

    #### hpe.nimble details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 22 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ibm.qradar (2.1.0)"

    #### ibm.qradar details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 16 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ibm.spectrum_virtualize (2.0.0)"

    #### ibm.spectrum_virtualize details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 43 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ibm.storage_virtualize (2.1.0)"

    #### ibm.storage_virtualize details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 46 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "infinidat.infinibox (1.3.12)"

    #### infinidat.infinibox details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "infoblox.nios_modules (1.5.0)"

    #### infoblox.nios_modules details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 3 |
    | modules | 21 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "inspur.ispim (2.1.0)"

    #### inspur.ispim details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 128 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "inspur.sm (2.3.0)"

    #### inspur.sm details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 137 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "junipernetworks.junos (5.3.0)"

    #### junipernetworks.junos details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "kubernetes.core (2.4.0)"

    #### kubernetes.core details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 16 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 2 |
    | modules | 19 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "lowlydba.sqlserver (2.2.2)"

    #### lowlydba.sqlserver details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "microsoft.ad (1.3.0)"

    #### microsoft.ad details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.aws (21.7.1)"

    #### netapp.aws details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.azure (21.10.1)"

    #### netapp.azure details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.cloudmanager (21.22.1)"

    #### netapp.cloudmanager details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.elementsw (21.7.0)"

    #### netapp.elementsw details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 24 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.ontap (22.8.2)"

    #### netapp.ontap details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 150 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.storagegrid (21.11.1)"

    #### netapp.storagegrid details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 19 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.um_info (21.8.1)"

    #### netapp.um_info details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 10 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp_eseries.santricity (1.4.0)"

    #### netapp_eseries.santricity details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 5 |
    | modules | 55 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netbox.netbox (3.15.0)"

    #### netbox.netbox details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 1 |
    | modules | 77 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.cloudstack (2.3.0)"

    #### ngine_io.cloudstack details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 53 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.exoscale (1.1.0)"

    #### ngine_io.exoscale details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "openstack.cloud (2.1.0)"

    #### openstack.cloud details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 87 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "openvswitch.openvswitch (2.1.1)"

    #### openvswitch.openvswitch details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ovirt.ovirt (3.2.0)"

    #### ovirt.ovirt details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 58 |
    | filter | 4 |
    | test | 1 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.flasharray (1.22.0)"

    #### purestorage.flasharray details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 59 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.flashblade (1.14.0)"

    #### purestorage.flashblade details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 47 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.fusion (1.6.0)"

    #### purestorage.fusion details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 19 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "sensu.sensu_go (1.14.0)"

    #### sensu.sensu_go details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 51 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "splunk.es (2.1.0)"

    #### splunk.es details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "t_systems_mms.icinga_director (2.0.1)"

    #### t_systems_mms.icinga_director details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "telekom_mms.icinga_director (1.34.1)"

    #### telekom_mms.icinga_director details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "theforeman.foreman (3.14.0)"

    #### theforeman.foreman details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 81 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vmware.vmware_rest (2.3.1)"

    #### vmware.vmware_rest details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 8 |
    | modules | 132 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vultr.cloud (1.10.0)"

    #### vultr.cloud details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vyos.vyos (4.1.0)"

    #### vyos.vyos details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 36 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 29 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "wti.remote (1.0.5)"

    #### wti.remote details

    _All changes for ansible-9.0.1 compared to previous version inspected, ansible-8.5.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 32 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |
## ansible-8.5.0

!!! seealso "FYI"
    All changes compared to previous version inspected, _ansible-8.3.0_

### Version Changes

  | Collection | Old Version | New Version |
  | --- | :---: | :---: |
  | amazon.aws | <span style="text-decoration-line: line-through">6.3.0</span> | 6.5.0 |
  | ansible.netcommon | <span style="text-decoration-line: line-through">5.1.2</span> | 5.2.0 |
  | ansible.utils | <span style="text-decoration-line: line-through">2.10.3</span> | 2.11.0 |
  | arista.eos | <span style="text-decoration-line: line-through">6.0.1</span> | 6.1.2 |
  | awx.awx | <span style="text-decoration-line: line-through">22.6.0</span> | 22.7.0 |
  | azure.azcollection | <span style="text-decoration-line: line-through">1.16.0</span> | 1.18.1 |
  | cisco.asa | <span style="text-decoration-line: line-through">4.0.1</span> | 4.0.2 |
  | cisco.dnac | <span style="text-decoration-line: line-through">6.7.3</span> | 6.7.5 |
  | cisco.ise | <span style="text-decoration-line: line-through">2.5.14</span> | 2.5.16 |
  | cisco.meraki | <span style="text-decoration-line: line-through">2.15.3</span> | 2.16.5 |
  | community.aws | <span style="text-decoration-line: line-through">6.2.0</span> | 6.3.0 |
  | community.crypto | <span style="text-decoration-line: line-through">2.15.0</span> | 2.15.1 |
  | community.dns | <span style="text-decoration-line: line-through">2.6.0</span> | 2.6.2 |
  | community.docker | <span style="text-decoration-line: line-through">3.4.8</span> | 3.4.9 |
  | community.general | <span style="text-decoration-line: line-through">7.3.0</span> | 7.5.0 |
  | community.libvirt | <span style="text-decoration-line: line-through">1.2.0</span> | 1.3.0 |
  | community.mongodb | <span style="text-decoration-line: line-through">1.6.1</span> | 1.6.3 |
  | community.routeros | <span style="text-decoration-line: line-through">2.9.0</span> | 2.10.0 |
  | community.sops | <span style="text-decoration-line: line-through">1.6.4</span> | 1.6.6 |
  | community.vmware | <span style="text-decoration-line: line-through">3.9.0</span> | 3.10.0 |
  | containers.podman | <span style="text-decoration-line: line-through">1.10.2</span> | 1.10.3 |
  | cyberark.conjur | <span style="text-decoration-line: line-through">1.2.0</span> | 1.2.2 |
  | cyberark.pas | <span style="text-decoration-line: line-through">1.0.19</span> | 1.0.23 |
  | dellemc.powerflex | <span style="text-decoration-line: line-through">1.7.0</span> | 1.9.0 |
  | f5networks.f5_modules | <span style="text-decoration-line: line-through">1.25.1</span> | 1.26.0 |
  | fortinet.fortios | <span style="text-decoration-line: line-through">2.3.1</span> | 2.3.2 |
  | grafana.grafana | <span style="text-decoration-line: line-through">2.1.5</span> | 2.2.3 |
  | junipernetworks.junos | <span style="text-decoration-line: line-through">5.2.0</span> | 5.3.0 |
  | lowlydba.sqlserver | <span style="text-decoration-line: line-through">2.1.0</span> | 2.2.1 |
  | netbox.netbox | <span style="text-decoration-line: line-through">3.13.0</span> | 3.14.0 |
  | ngine_io.exoscale | <span style="text-decoration-line: line-through">1.0.0</span> | 1.1.0 |
  | ovirt.ovirt | <span style="text-decoration-line: line-through">3.1.2</span> | 3.2.0 |
  | purestorage.flasharray | <span style="text-decoration-line: line-through">1.20.0</span> | 1.21.0 |
  | purestorage.flashblade | <span style="text-decoration-line: line-through">1.12.1</span> | 1.14.0 |
  | theforeman.foreman | <span style="text-decoration-line: line-through">3.12.0</span> | 3.14.0 |
  | vultr.cloud | <span style="text-decoration-line: line-through">1.8.0</span> | 1.10.0 |

### Modules Added

  | Collection | Module |
  | --- | --- |
  | amazon.aws | ec2_key_info |
  | azure.azcollection | azure_rm_batchaccount_info |
  | cisco.meraki | administered_identities_me_info |
  | cisco.meraki | devices |
  | cisco.meraki | devices_appliance_performance_info |
  | cisco.meraki | devices_appliance_uplinks_settings |
  | cisco.meraki | devices_appliance_uplinks_settings_info |
  | cisco.meraki | devices_appliance_vmx_authentication_token |
  | cisco.meraki | devices_blink_leds |
  | cisco.meraki | devices_camera_analytics_live_info |
  | cisco.meraki | devices_camera_custom_analytics |
  | cisco.meraki | devices_camera_custom_analytics_info |
  | cisco.meraki | devices_camera_generate_snapshot |
  | cisco.meraki | devices_camera_quality_and_retention |
  | cisco.meraki | devices_camera_quality_and_retention_info |
  | cisco.meraki | devices_camera_sense |
  | cisco.meraki | devices_camera_sense_info |
  | cisco.meraki | devices_camera_video_link_info |
  | cisco.meraki | devices_camera_video_settings |
  | cisco.meraki | devices_camera_video_settings_info |
  | cisco.meraki | devices_camera_wireless_profiles |
  | cisco.meraki | devices_camera_wireless_profiles_info |
  | cisco.meraki | devices_cellular_gateway_lan |
  | cisco.meraki | devices_cellular_gateway_lan_info |
  | cisco.meraki | devices_cellular_gateway_port_forwarding_rules |
  | cisco.meraki | devices_cellular_gateway_port_forwarding_rules_info |
  | cisco.meraki | devices_cellular_sims |
  | cisco.meraki | devices_cellular_sims_info |
  | cisco.meraki | devices_info |
  | cisco.meraki | devices_live_tools_ping |
  | cisco.meraki | devices_live_tools_ping_device |
  | cisco.meraki | devices_live_tools_ping_device_info |
  | cisco.meraki | devices_live_tools_ping_info |
  | cisco.meraki | devices_lldp_cdp_info |
  | cisco.meraki | devices_management_interface |
  | cisco.meraki | devices_management_interface_info |
  | cisco.meraki | devices_sensor_relationships |
  | cisco.meraki | devices_sensor_relationships_info |
  | cisco.meraki | devices_switch_ports |
  | cisco.meraki | devices_switch_ports_cycle |
  | cisco.meraki | devices_switch_ports_info |
  | cisco.meraki | devices_switch_ports_statuses_info |
  | cisco.meraki | devices_switch_routing_interfaces |
  | cisco.meraki | devices_switch_routing_interfaces_dhcp |
  | cisco.meraki | devices_switch_routing_interfaces_dhcp_info |
  | cisco.meraki | devices_switch_routing_interfaces_info |
  | cisco.meraki | devices_switch_routing_static_routes |
  | cisco.meraki | devices_switch_routing_static_routes_info |
  | cisco.meraki | devices_switch_warm_spare |
  | cisco.meraki | devices_switch_warm_spare_info |
  | cisco.meraki | devices_wireless_bluetooth_settings |
  | cisco.meraki | devices_wireless_bluetooth_settings_info |
  | cisco.meraki | devices_wireless_connection_stats_info |
  | cisco.meraki | devices_wireless_latency_stats_info |
  | cisco.meraki | devices_wireless_radio_settings |
  | cisco.meraki | devices_wireless_radio_settings_info |
  | cisco.meraki | devices_wireless_status_info |
  | cisco.meraki | networks |
  | cisco.meraki | networks_alerts_history_info |
  | cisco.meraki | networks_alerts_settings |
  | cisco.meraki | networks_alerts_settings_info |
  | cisco.meraki | networks_appliance_connectivity_monitoring_destinations |
  | cisco.meraki | networks_appliance_connectivity_monitoring_destinations_info |
  | cisco.meraki | networks_appliance_content_filtering |
  | cisco.meraki | networks_appliance_content_filtering_categories_info |
  | cisco.meraki | networks_appliance_content_filtering_info |
  | cisco.meraki | networks_appliance_firewall_cellular_firewall_rules |
  | cisco.meraki | networks_appliance_firewall_cellular_firewall_rules_info |
  | cisco.meraki | networks_appliance_firewall_firewalled_services |
  | cisco.meraki | networks_appliance_firewall_firewalled_services_info |
  | cisco.meraki | networks_appliance_firewall_inbound_firewall_rules |
  | cisco.meraki | networks_appliance_firewall_inbound_firewall_rules_info |
  | cisco.meraki | networks_appliance_firewall_l3_firewall_rules |
  | cisco.meraki | networks_appliance_firewall_l3_firewall_rules_info |
  | cisco.meraki | networks_appliance_firewall_l7_firewall_rules |
  | cisco.meraki | networks_appliance_firewall_l7_firewall_rules_application_categories_info |
  | cisco.meraki | networks_appliance_firewall_l7_firewall_rules_info |
  | cisco.meraki | networks_appliance_firewall_one_to_many_nat_rules |
  | cisco.meraki | networks_appliance_firewall_one_to_many_nat_rules_info |
  | cisco.meraki | networks_appliance_firewall_one_to_one_nat_rules |
  | cisco.meraki | networks_appliance_firewall_one_to_one_nat_rules_info |
  | cisco.meraki | networks_appliance_firewall_port_forwarding_rules |
  | cisco.meraki | networks_appliance_firewall_port_forwarding_rules_info |
  | cisco.meraki | networks_appliance_firewall_settings |
  | cisco.meraki | networks_appliance_firewall_settings_info |
  | cisco.meraki | networks_appliance_ports |
  | cisco.meraki | networks_appliance_ports_info |
  | cisco.meraki | networks_appliance_prefixes_delegated_statics |
  | cisco.meraki | networks_appliance_prefixes_delegated_statics_info |
  | cisco.meraki | networks_appliance_security_intrusion |
  | cisco.meraki | networks_appliance_security_intrusion_info |
  | cisco.meraki | networks_appliance_security_malware |
  | cisco.meraki | networks_appliance_security_malware_info |
  | cisco.meraki | networks_appliance_settings |
  | cisco.meraki | networks_appliance_settings_info |
  | cisco.meraki | networks_appliance_single_lan |
  | cisco.meraki | networks_appliance_single_lan_info |
  | cisco.meraki | networks_appliance_ssids |
  | cisco.meraki | networks_appliance_ssids_info |
  | cisco.meraki | networks_appliance_static_routes |
  | cisco.meraki | networks_appliance_static_routes_info |
  | cisco.meraki | networks_appliance_traffic_shaping |
  | cisco.meraki | networks_appliance_traffic_shaping_custom_performance_classes |
  | cisco.meraki | networks_appliance_traffic_shaping_info |
  | cisco.meraki | networks_appliance_traffic_shaping_rules |
  | cisco.meraki | networks_appliance_traffic_shaping_rules_info |
  | cisco.meraki | networks_appliance_traffic_shaping_uplink_bandwidth |
  | cisco.meraki | networks_appliance_traffic_shaping_uplink_bandwidth_info |
  | cisco.meraki | networks_appliance_traffic_shaping_uplink_selection |
  | cisco.meraki | networks_appliance_traffic_shaping_uplink_selection_info |
  | cisco.meraki | networks_appliance_vlans |
  | cisco.meraki | networks_appliance_vlans_info |
  | cisco.meraki | networks_appliance_vlans_settings |
  | cisco.meraki | networks_appliance_vlans_settings_info |
  | cisco.meraki | networks_appliance_vpn_bgp |
  | cisco.meraki | networks_appliance_vpn_bgp_info |
  | cisco.meraki | networks_appliance_vpn_site_to_site_vpn |
  | cisco.meraki | networks_appliance_vpn_site_to_site_vpn_info |
  | cisco.meraki | networks_appliance_warm_spare |
  | cisco.meraki | networks_appliance_warm_spare_info |
  | cisco.meraki | networks_appliance_warm_spare_swap |
  | cisco.meraki | networks_bind |
  | cisco.meraki | networks_bluetooth_clients_info |
  | cisco.meraki | networks_camera_quality_retention_profiles |
  | cisco.meraki | networks_camera_quality_retention_profiles_info |
  | cisco.meraki | networks_camera_wireless_profiles |
  | cisco.meraki | networks_camera_wireless_profiles_info |
  | cisco.meraki | networks_cellular_gateway_connectivity_monitoring_destinations |
  | cisco.meraki | networks_cellular_gateway_connectivity_monitoring_destinations_info |
  | cisco.meraki | networks_cellular_gateway_dhcp |
  | cisco.meraki | networks_cellular_gateway_dhcp_info |
  | cisco.meraki | networks_cellular_gateway_subnet_pool |
  | cisco.meraki | networks_cellular_gateway_subnet_pool_info |
  | cisco.meraki | networks_cellular_gateway_uplink |
  | cisco.meraki | networks_cellular_gateway_uplink_info |
  | cisco.meraki | networks_clients_info |
  | cisco.meraki | networks_clients_overview_info |
  | cisco.meraki | networks_clients_policy |
  | cisco.meraki | networks_clients_policy_info |
  | cisco.meraki | networks_clients_provision |
  | cisco.meraki | networks_clients_splash_authorization_status |
  | cisco.meraki | networks_clients_splash_authorization_status_info |
  | cisco.meraki | networks_devices_claim |
  | cisco.meraki | networks_devices_claim_vmx |
  | cisco.meraki | networks_devices_remove |
  | cisco.meraki | networks_events_event_types_info |
  | cisco.meraki | networks_events_info |
  | cisco.meraki | networks_firmware_upgrades |
  | cisco.meraki | networks_firmware_upgrades_info |
  | cisco.meraki | networks_firmware_upgrades_rollbacks |
  | cisco.meraki | networks_firmware_upgrades_staged_events |
  | cisco.meraki | networks_firmware_upgrades_staged_events_defer |
  | cisco.meraki | networks_firmware_upgrades_staged_events_info |
  | cisco.meraki | networks_firmware_upgrades_staged_events_rollbacks |
  | cisco.meraki | networks_firmware_upgrades_staged_groups |
  | cisco.meraki | networks_firmware_upgrades_staged_groups_info |
  | cisco.meraki | networks_firmware_upgrades_staged_stages |
  | cisco.meraki | networks_firmware_upgrades_staged_stages_info |
  | cisco.meraki | networks_floor_plans |
  | cisco.meraki | networks_floor_plans_info |
  | cisco.meraki | networks_group_policies |
  | cisco.meraki | networks_group_policies_info |
  | cisco.meraki | networks_health_alerts_info |
  | cisco.meraki | networks_info |
  | cisco.meraki | networks_insight_applications_health_by_time_info |
  | cisco.meraki | networks_meraki_auth_users |
  | cisco.meraki | networks_meraki_auth_users_info |
  | cisco.meraki | networks_mqtt_brokers |
  | cisco.meraki | networks_netflow |
  | cisco.meraki | networks_netflow_info |
  | cisco.meraki | networks_pii_pii_keys_info |
  | cisco.meraki | networks_pii_requests_delete |
  | cisco.meraki | networks_pii_requests_info |
  | cisco.meraki | networks_pii_sm_devices_for_key_info |
  | cisco.meraki | networks_pii_sm_owners_for_key_info |
  | cisco.meraki | networks_policies_by_client_info |
  | cisco.meraki | networks_sensor_alerts_current_overview_by_metric_info |
  | cisco.meraki | networks_sensor_alerts_overview_by_metric_info |
  | cisco.meraki | networks_sensor_alerts_profiles |
  | cisco.meraki | networks_sensor_alerts_profiles_info |
  | cisco.meraki | networks_sensor_mqtt_brokers |
  | cisco.meraki | networks_sensor_mqtt_brokers_info |
  | cisco.meraki | networks_sensor_relationships_info |
  | cisco.meraki | networks_settings |
  | cisco.meraki | networks_settings_info |
  | cisco.meraki | networks_sm_bypass_activation_lock_attempts |
  | cisco.meraki | networks_sm_bypass_activation_lock_attempts_info |
  | cisco.meraki | networks_sm_devices_cellular_usage_history_info |
  | cisco.meraki | networks_sm_devices_certs_info |
  | cisco.meraki | networks_sm_devices_checkin |
  | cisco.meraki | networks_sm_devices_connectivity_info |
  | cisco.meraki | networks_sm_devices_desktop_logs_info |
  | cisco.meraki | networks_sm_devices_device_command_logs_info |
  | cisco.meraki | networks_sm_devices_device_profiles_info |
  | cisco.meraki | networks_sm_devices_fields |
  | cisco.meraki | networks_sm_devices_info |
  | cisco.meraki | networks_sm_devices_lock |
  | cisco.meraki | networks_sm_devices_modify_tags |
  | cisco.meraki | networks_sm_devices_move |
  | cisco.meraki | networks_sm_devices_network_adapters_info |
  | cisco.meraki | networks_sm_devices_performance_history_info |
  | cisco.meraki | networks_sm_devices_refresh_details |
  | cisco.meraki | networks_sm_devices_security_centers_info |
  | cisco.meraki | networks_sm_devices_unenroll |
  | cisco.meraki | networks_sm_devices_wipe |
  | cisco.meraki | networks_sm_devices_wlan_lists_info |
  | cisco.meraki | networks_sm_profiles_info |
  | cisco.meraki | networks_sm_target_groups |
  | cisco.meraki | networks_sm_target_groups_info |
  | cisco.meraki | networks_sm_trusted_access_configs_info |
  | cisco.meraki | networks_sm_user_access_devices_delete |
  | cisco.meraki | networks_sm_user_access_devices_info |
  | cisco.meraki | networks_sm_users_device_profiles_info |
  | cisco.meraki | networks_sm_users_info |
  | cisco.meraki | networks_sm_users_softwares_info |
  | cisco.meraki | networks_snmp |
  | cisco.meraki | networks_snmp_info |
  | cisco.meraki | networks_split |
  | cisco.meraki | networks_switch_access_control_lists |
  | cisco.meraki | networks_switch_access_control_lists_info |
  | cisco.meraki | networks_switch_access_policies |
  | cisco.meraki | networks_switch_access_policies_info |
  | cisco.meraki | networks_switch_alternate_management_interface |
  | cisco.meraki | networks_switch_alternate_management_interface_info |
  | cisco.meraki | networks_switch_dhcp_server_policy |
  | cisco.meraki | networks_switch_dhcp_server_policy_arp_inspection_trusted_servers |
  | cisco.meraki | networks_switch_dhcp_server_policy_arp_inspection_trusted_servers_info |
  | cisco.meraki | networks_switch_dhcp_server_policy_arp_inspection_warnings_by_device_info |
  | cisco.meraki | networks_switch_dhcp_server_policy_info |
  | cisco.meraki | networks_switch_dhcp_v4_servers_seen_info |
  | cisco.meraki | networks_switch_dscp_to_cos_mappings |
  | cisco.meraki | networks_switch_dscp_to_cos_mappings_info |
  | cisco.meraki | networks_switch_link_aggregations |
  | cisco.meraki | networks_switch_link_aggregations_info |
  | cisco.meraki | networks_switch_mtu |
  | cisco.meraki | networks_switch_mtu_info |
  | cisco.meraki | networks_switch_port_schedules |
  | cisco.meraki | networks_switch_port_schedules_info |
  | cisco.meraki | networks_switch_qos_rules_order |
  | cisco.meraki | networks_switch_qos_rules_order_info |
  | cisco.meraki | networks_switch_routing_multicast |
  | cisco.meraki | networks_switch_routing_multicast_info |
  | cisco.meraki | networks_switch_routing_multicast_rendezvous_points |
  | cisco.meraki | networks_switch_routing_multicast_rendezvous_points_info |
  | cisco.meraki | networks_switch_routing_ospf |
  | cisco.meraki | networks_switch_routing_ospf_info |
  | cisco.meraki | networks_switch_settings |
  | cisco.meraki | networks_switch_settings_info |
  | cisco.meraki | networks_switch_stacks |
  | cisco.meraki | networks_switch_stacks_add |
  | cisco.meraki | networks_switch_stacks_info |
  | cisco.meraki | networks_switch_stacks_remove |
  | cisco.meraki | networks_switch_stacks_routing_interfaces |
  | cisco.meraki | networks_switch_stacks_routing_interfaces_dhcp |
  | cisco.meraki | networks_switch_stacks_routing_interfaces_dhcp_info |
  | cisco.meraki | networks_switch_stacks_routing_interfaces_info |
  | cisco.meraki | networks_switch_stacks_routing_static_routes |
  | cisco.meraki | networks_switch_stacks_routing_static_routes_info |
  | cisco.meraki | networks_switch_storm_control |
  | cisco.meraki | networks_switch_storm_control_info |
  | cisco.meraki | networks_switch_stp |
  | cisco.meraki | networks_switch_stp_info |
  | cisco.meraki | networks_syslog_servers |
  | cisco.meraki | networks_syslog_servers_info |
  | cisco.meraki | networks_topology_link_layer_info |
  | cisco.meraki | networks_traffic_analysis |
  | cisco.meraki | networks_traffic_analysis_info |
  | cisco.meraki | networks_traffic_shaping_application_categories_info |
  | cisco.meraki | networks_traffic_shaping_dscp_tagging_options_info |
  | cisco.meraki | networks_unbind |
  | cisco.meraki | networks_webhooks_http_servers |
  | cisco.meraki | networks_webhooks_http_servers_info |
  | cisco.meraki | networks_webhooks_payload_templates |
  | cisco.meraki | networks_webhooks_payload_templates_info |
  | cisco.meraki | networks_webhooks_webhook_tests_info |
  | cisco.meraki | networks_wireless_alternate_management_interface |
  | cisco.meraki | networks_wireless_alternate_management_interface_info |
  | cisco.meraki | networks_wireless_billing |
  | cisco.meraki | networks_wireless_billing_info |
  | cisco.meraki | networks_wireless_bluetooth_settings |
  | cisco.meraki | networks_wireless_bluetooth_settings_info |
  | cisco.meraki | networks_wireless_channel_utilization_history_info |
  | cisco.meraki | networks_wireless_client_count_history_info |
  | cisco.meraki | networks_wireless_clients_connection_stats_info |
  | cisco.meraki | networks_wireless_clients_latency_stats_info |
  | cisco.meraki | networks_wireless_connection_stats_info |
  | cisco.meraki | networks_wireless_data_rate_history_info |
  | cisco.meraki | networks_wireless_devices_connection_stats_info |
  | cisco.meraki | networks_wireless_failed_connections_info |
  | cisco.meraki | networks_wireless_latency_history_info |
  | cisco.meraki | networks_wireless_latency_stats_info |
  | cisco.meraki | networks_wireless_mesh_statuses_info |
  | cisco.meraki | networks_wireless_rf_profiles |
  | cisco.meraki | networks_wireless_rf_profiles_info |
  | cisco.meraki | networks_wireless_settings |
  | cisco.meraki | networks_wireless_settings_info |
  | cisco.meraki | networks_wireless_signal_quality_history_info |
  | cisco.meraki | networks_wireless_ssids |
  | cisco.meraki | networks_wireless_ssids_bonjour_forwarding |
  | cisco.meraki | networks_wireless_ssids_bonjour_forwarding_info |
  | cisco.meraki | networks_wireless_ssids_device_type_group_policies |
  | cisco.meraki | networks_wireless_ssids_device_type_group_policies_info |
  | cisco.meraki | networks_wireless_ssids_eap_override |
  | cisco.meraki | networks_wireless_ssids_eap_override_info |
  | cisco.meraki | networks_wireless_ssids_firewall_l3_firewall_rules |
  | cisco.meraki | networks_wireless_ssids_firewall_l3_firewall_rules_info |
  | cisco.meraki | networks_wireless_ssids_firewall_l7_firewall_rules |
  | cisco.meraki | networks_wireless_ssids_firewall_l7_firewall_rules_info |
  | cisco.meraki | networks_wireless_ssids_hotspot20 |
  | cisco.meraki | networks_wireless_ssids_hotspot20_info |
  | cisco.meraki | networks_wireless_ssids_identity_psks |
  | cisco.meraki | networks_wireless_ssids_identity_psks_info |
  | cisco.meraki | networks_wireless_ssids_info |
  | cisco.meraki | networks_wireless_ssids_schedules |
  | cisco.meraki | networks_wireless_ssids_schedules_info |
  | cisco.meraki | networks_wireless_ssids_splash_settings |
  | cisco.meraki | networks_wireless_ssids_splash_settings_info |
  | cisco.meraki | networks_wireless_ssids_traffic_shaping_rules |
  | cisco.meraki | networks_wireless_ssids_traffic_shaping_rules_info |
  | cisco.meraki | networks_wireless_ssids_vpn |
  | cisco.meraki | networks_wireless_ssids_vpn_info |
  | cisco.meraki | networks_wireless_usage_history_info |
  | cisco.meraki | organizations |
  | cisco.meraki | organizations_action_batches |
  | cisco.meraki | organizations_action_batches_info |
  | cisco.meraki | organizations_adaptive_policy_acls |
  | cisco.meraki | organizations_adaptive_policy_acls_info |
  | cisco.meraki | organizations_adaptive_policy_groups |
  | cisco.meraki | organizations_adaptive_policy_groups_info |
  | cisco.meraki | organizations_adaptive_policy_overview_info |
  | cisco.meraki | organizations_adaptive_policy_policies |
  | cisco.meraki | organizations_adaptive_policy_policies_info |
  | cisco.meraki | organizations_adaptive_policy_settings |
  | cisco.meraki | organizations_adaptive_policy_settings_info |
  | cisco.meraki | organizations_admins |
  | cisco.meraki | organizations_admins_info |
  | cisco.meraki | organizations_alerts_profiles |
  | cisco.meraki | organizations_api_requests_info |
  | cisco.meraki | organizations_api_requests_overview_info |
  | cisco.meraki | organizations_api_requests_overview_response_codes_by_interval_info |
  | cisco.meraki | organizations_appliance_security_intrusion |
  | cisco.meraki | organizations_appliance_security_intrusion_info |
  | cisco.meraki | organizations_appliance_vpn_third_party_vpnpeers |
  | cisco.meraki | organizations_appliance_vpn_third_party_vpnpeers_info |
  | cisco.meraki | organizations_appliance_vpn_vpn_firewall_rules |
  | cisco.meraki | organizations_appliance_vpn_vpn_firewall_rules_info |
  | cisco.meraki | organizations_branding_policies |
  | cisco.meraki | organizations_branding_policies_info |
  | cisco.meraki | organizations_branding_policies_priorities |
  | cisco.meraki | organizations_branding_policies_priorities_info |
  | cisco.meraki | organizations_camera_custom_analytics_artifacts |
  | cisco.meraki | organizations_camera_custom_analytics_artifacts_info |
  | cisco.meraki | organizations_cellular_gateway_uplink_statuses_info |
  | cisco.meraki | organizations_claim |
  | cisco.meraki | organizations_clients_bandwidth_usage_history_info |
  | cisco.meraki | organizations_clients_overview_info |
  | cisco.meraki | organizations_clients_search_info |
  | cisco.meraki | organizations_clone |
  | cisco.meraki | organizations_config_templates |
  | cisco.meraki | organizations_config_templates_info |
  | cisco.meraki | organizations_config_templates_switch_profiles_info |
  | cisco.meraki | organizations_config_templates_switch_profiles_ports |
  | cisco.meraki | organizations_config_templates_switch_profiles_ports_info |
  | cisco.meraki | organizations_devices_availabilities_info |
  | cisco.meraki | organizations_devices_info |
  | cisco.meraki | organizations_devices_power_modules_statuses_by_device_info |
  | cisco.meraki | organizations_devices_provisioning_statuses_info |
  | cisco.meraki | organizations_devices_statuses_info |
  | cisco.meraki | organizations_devices_statuses_overview_info |
  | cisco.meraki | organizations_devices_uplinks_addresses_by_device_info |
  | cisco.meraki | organizations_devices_uplinks_loss_and_latency_info |
  | cisco.meraki | organizations_early_access_features_info |
  | cisco.meraki | organizations_early_access_features_opt_ins |
  | cisco.meraki | organizations_early_access_features_opt_ins_info |
  | cisco.meraki | organizations_firmware_upgrades_by_device_info |
  | cisco.meraki | organizations_firmware_upgrades_info |
  | cisco.meraki | organizations_info |
  | cisco.meraki | organizations_insight_applications_info |
  | cisco.meraki | organizations_insight_monitored_media_servers |
  | cisco.meraki | organizations_insight_monitored_media_servers_info |
  | cisco.meraki | organizations_inventory_claim |
  | cisco.meraki | organizations_inventory_devices_info |
  | cisco.meraki | organizations_inventory_onboarding_cloud_monitoring_export_events |
  | cisco.meraki | organizations_inventory_onboarding_cloud_monitoring_imports |
  | cisco.meraki | organizations_inventory_onboarding_cloud_monitoring_imports_info |
  | cisco.meraki | organizations_inventory_onboarding_cloud_monitoring_networks_info |
  | cisco.meraki | organizations_inventory_onboarding_cloud_monitoring_prepare |
  | cisco.meraki | organizations_inventory_release |
  | cisco.meraki | organizations_licenses |
  | cisco.meraki | organizations_licenses_assign_seats |
  | cisco.meraki | organizations_licenses_info |
  | cisco.meraki | organizations_licenses_move |
  | cisco.meraki | organizations_licenses_move_seats |
  | cisco.meraki | organizations_licenses_overview_info |
  | cisco.meraki | organizations_licenses_renew_seats |
  | cisco.meraki | organizations_licensing_coterm_licenses_info |
  | cisco.meraki | organizations_licensing_coterm_licenses_move |
  | cisco.meraki | organizations_login_security |
  | cisco.meraki | organizations_login_security_info |
  | cisco.meraki | organizations_networks_combine |
  | cisco.meraki | organizations_openapi_spec_info |
  | cisco.meraki | organizations_policy_objects |
  | cisco.meraki | organizations_policy_objects_groups |
  | cisco.meraki | organizations_policy_objects_groups_info |
  | cisco.meraki | organizations_policy_objects_info |
  | cisco.meraki | organizations_saml |
  | cisco.meraki | organizations_saml_idps |
  | cisco.meraki | organizations_saml_idps_info |
  | cisco.meraki | organizations_saml_info |
  | cisco.meraki | organizations_saml_roles |
  | cisco.meraki | organizations_saml_roles_info |
  | cisco.meraki | organizations_sensor_readings_history_info |
  | cisco.meraki | organizations_sensor_readings_latest_info |
  | cisco.meraki | organizations_sm_apns_cert_info |
  | cisco.meraki | organizations_sm_vpp_accounts_info |
  | cisco.meraki | organizations_snmp |
  | cisco.meraki | organizations_snmp_info |
  | cisco.meraki | organizations_summary_top_appliances_by_utilization_info |
  | cisco.meraki | organizations_summary_top_clients_by_usage_info |
  | cisco.meraki | organizations_summary_top_clients_manufacturers_by_usage_info |
  | cisco.meraki | organizations_summary_top_devices_by_usage_info |
  | cisco.meraki | organizations_summary_top_devices_models_by_usage_info |
  | cisco.meraki | organizations_summary_top_ssids_by_usage_info |
  | cisco.meraki | organizations_summary_top_switches_by_energy_usage_info |
  | cisco.meraki | organizations_switch_devices_clone |
  | cisco.meraki | organizations_switch_ports_by_switch_info |
  | cisco.meraki | organizations_uplinks_statuses_info |
  | cisco.meraki | organizations_users |
  | cisco.meraki | organizations_webhooks_logs_info |
  | cisco.meraki | organizations_wireless_devices_ethernet_statuses_info |
  | community.aws | route53_wait |
  | community.general | consul_role |
  | community.general | gio_mime |
  | community.general | jenkins_build_info |
  | community.general | keycloak_authz_custom_policy |
  | community.general | keycloak_realm_key |
  | community.general | pnpm |
  | community.general | simpleinit_msb |
  | community.vmware | vcenter_root_password_expiration |
  | community.vmware | vmware_host_graphics |
  | ngine_io.exoscale | instance_rdns_record |
  | theforeman.foreman | smart_class_parameter_override_value |
  | theforeman.foreman | wait_for_task |
  | vultr.cloud | bare_metal |
  | vultr.cloud | vpc2 |
  | vultr.cloud | vpc2_info |

### Modules Removed

  | Collection | Module |
  | --- | --- |
  | community.mongodb | mongodb_monitoring |

### Collections


??? seealso coll-plugin-details "amazon.aws (6.5.0)"

    #### amazon.aws details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 1 |
    | inventory | 2 |
    | lookup | 5 |
    | modules | 96 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.netcommon (5.2.0)"

    #### ansible.netcommon details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 10 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 9 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.posix (1.5.4)"

    #### ansible.posix details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 8 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.utils (2.11.0)"

    #### ansible.utils details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 4 |
    | modules | 4 |
    | filter | 31 |
    | test | 25 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.windows (1.14.0)"

    #### ansible.windows details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "arista.eos (6.1.2)"

    #### arista.eos details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 41 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 34 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "awx.awx (22.7.0)"

    #### awx.awx details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 3 |
    | modules | 43 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "azure.azcollection (1.18.1)"

    #### azure.azcollection details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 1 |
    | modules | 283 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | azure-mgmt-batch | Updated | <span style="text-decoration-line: line-through">==5.0.1</span> | ==16.2.0 |
    | azure-keyvault | Updated | <span style="text-decoration-line: line-through">==1.1.0</span> | ==4.2.0 |
    | msal | Added | | ==1.23.0 |
    | azure-core | Added | | ==1.28.0 |
    | azure-iot-hub | Added | | ==2.6.1 |
    | | | |

??? seealso coll-plugin-details "check_point.mgmt (5.1.1)"

    #### check_point.mgmt details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 5 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 259 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "chocolatey.chocolatey (1.5.1)"

    #### chocolatey.chocolatey details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.aci (2.7.0)"

    #### cisco.aci details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 173 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.asa (4.0.2)"

    #### cisco.asa details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.dnac (6.7.5)"

    #### cisco.dnac details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 382 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 387 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.intersight (1.0.27)"

    #### cisco.intersight details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ios (4.6.1)"

    #### cisco.ios details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 38 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 37 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.iosxr (5.0.3)"

    #### cisco.iosxr details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 33 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 32 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ise (2.5.16)"

    #### cisco.ise details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 383 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 383 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.meraki (2.16.5)"

    #### cisco.meraki details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 428 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 471 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | meraki | Added | | >=1.33.0 |
    | | | |

??? seealso coll-plugin-details "cisco.mso (2.5.0)"

    #### cisco.mso details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 68 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.nso (1.0.3)"

    #### cisco.nso details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.nxos (4.4.0)"

    #### cisco.nxos details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 101 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 87 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ucs (1.10.0)"

    #### cisco.ucs details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 29 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cloud.common (2.1.4)"

    #### cloud.common details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cloudscale_ch.cloud (2.3.1)"

    #### cloudscale_ch.cloud details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.aws (6.3.0)"

    #### community.aws details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 170 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.azure (2.0.0)"

    #### community.azure details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.ciscosmb (1.0.6)"

    #### community.ciscosmb details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.crypto (2.15.1)"

    #### community.crypto details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 32 |
    | filter | 7 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.digitalocean (1.24.0)"

    #### community.digitalocean details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 55 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.dns (2.6.2)"

    #### community.dns details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 2 |
    | lookup | 2 |
    | modules | 16 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.docker (3.4.9)"

    #### community.docker details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 3 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.fortios (1.0.0)"

    #### community.fortios details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.general (7.5.0)"

    #### community.general details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 25 |
    | inventory | 13 |
    | lookup | 32 |
    | modules | 593 |
    | filter | 14 |
    | test | 1 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.google (1.0.0)"

    #### community.google details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.grafana (1.5.4)"

    #### community.grafana details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.hashi_vault (5.0.0)"

    #### community.hashi_vault details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 9 |
    | modules | 10 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.hrobot (1.8.1)"

    #### community.hrobot details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 12 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.libvirt (1.3.0)"

    #### community.libvirt details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.mongodb (1.6.3)"

    #### community.mongodb details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 17 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.mysql (3.7.2)"

    #### community.mysql details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.network (5.0.0)"

    #### community.network details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 13 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 315 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.okd (2.3.0)"

    #### community.okd details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.postgresql (2.4.3)"

    #### community.postgresql details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 23 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.proxysql (1.5.1)"

    #### community.proxysql details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.rabbitmq (1.2.3)"

    #### community.rabbitmq details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.routeros (2.10.0)"

    #### community.routeros details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sap (1.0.0)"

    #### community.sap details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sap_libs (1.4.1)"

    #### community.sap_libs details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.skydive (1.0.0)"

    #### community.skydive details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sops (1.6.6)"

    #### community.sops details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 2 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.vmware (3.10.0)"

    #### community.vmware details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 2 |
    | lookup | 0 |
    | modules | 171 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.windows (1.13.0)"

    #### community.windows details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 85 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.zabbix (2.1.0)"

    #### community.zabbix details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "containers.podman (1.10.3)"

    #### containers.podman details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 23 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cyberark.conjur (1.2.2)"

    #### cyberark.conjur details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cyberark.pas (1.0.23)"

    #### cyberark.pas details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.enterprise_sonic (2.2.0)"

    #### dellemc.enterprise_sonic details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 41 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.openmanage (7.6.1)"

    #### dellemc.openmanage details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 85 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.powerflex (1.9.0)"

    #### dellemc.powerflex details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 12 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | python-dateutil | Updated | <span style="text-decoration-line: line-through">>=2.8.0</span> | >=2.8.2 |
    | requests | Removed | <span style="text-decoration-line: line-through">>=2.23.0</span> | |
    | setuptools | Removed | <span style="text-decoration-line: line-through"></span> | |
    | | | |

??? seealso coll-plugin-details "dellemc.unity (1.7.1)"

    #### dellemc.unity details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 18 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "f5networks.f5_modules (1.26.0)"

    #### f5networks.f5_modules details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 3 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 2 |
    | modules | 179 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "fortinet.fortimanager (2.2.1)"

    #### fortinet.fortimanager details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 1133 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "fortinet.fortios (2.3.2)"

    #### fortinet.fortios details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 658 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "frr.frr (2.0.2)"

    #### frr.frr details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "gluster.gluster (1.0.2)"

    #### gluster.gluster details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "google.cloud (1.2.0)"

    #### google.cloud details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 170 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "grafana.grafana (2.2.3)"

    #### grafana.grafana details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "hetzner.hcloud (1.16.0)"

    #### hetzner.hcloud details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 39 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "hpe.nimble (1.1.4)"

    #### hpe.nimble details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 22 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ibm.qradar (2.1.0)"

    #### ibm.qradar details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 16 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ibm.spectrum_virtualize (1.12.0)"

    #### ibm.spectrum_virtualize details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 44 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "infinidat.infinibox (1.3.12)"

    #### infinidat.infinibox details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "infoblox.nios_modules (1.5.0)"

    #### infoblox.nios_modules details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 3 |
    | modules | 21 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "inspur.ispim (1.3.0)"

    #### inspur.ispim details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 126 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "inspur.sm (2.3.0)"

    #### inspur.sm details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 137 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "junipernetworks.junos (5.3.0)"

    #### junipernetworks.junos details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "kubernetes.core (2.4.0)"

    #### kubernetes.core details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 16 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 2 |
    | modules | 19 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "lowlydba.sqlserver (2.2.1)"

    #### lowlydba.sqlserver details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "microsoft.ad (1.3.0)"

    #### microsoft.ad details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.aws (21.7.0)"

    #### netapp.aws details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.azure (21.10.0)"

    #### netapp.azure details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.cloudmanager (21.22.0)"

    #### netapp.cloudmanager details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.elementsw (21.7.0)"

    #### netapp.elementsw details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 24 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.ontap (22.7.0)"

    #### netapp.ontap details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 149 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.storagegrid (21.11.1)"

    #### netapp.storagegrid details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 19 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.um_info (21.8.0)"

    #### netapp.um_info details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 10 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp_eseries.santricity (1.4.0)"

    #### netapp_eseries.santricity details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 5 |
    | modules | 55 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netbox.netbox (3.14.0)"

    #### netbox.netbox details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 1 |
    | modules | 76 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.cloudstack (2.3.0)"

    #### ngine_io.cloudstack details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 53 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.exoscale (1.1.0)"

    #### ngine_io.exoscale details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.vultr (1.1.3)"

    #### ngine_io.vultr details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 24 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "openstack.cloud (2.1.0)"

    #### openstack.cloud details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 87 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "openvswitch.openvswitch (2.1.1)"

    #### openvswitch.openvswitch details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ovirt.ovirt (3.2.0)"

    #### ovirt.ovirt details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 58 |
    | filter | 4 |
    | test | 1 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.flasharray (1.21.0)"

    #### purestorage.flasharray details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 58 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.flashblade (1.14.0)"

    #### purestorage.flashblade details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 47 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.fusion (1.6.0)"

    #### purestorage.fusion details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 19 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "sensu.sensu_go (1.14.0)"

    #### sensu.sensu_go details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 51 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "splunk.es (2.1.0)"

    #### splunk.es details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "t_systems_mms.icinga_director (1.33.1)"

    #### t_systems_mms.icinga_director details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "telekom_mms.icinga_director (1.34.1)"

    #### telekom_mms.icinga_director details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "theforeman.foreman (3.14.0)"

    #### theforeman.foreman details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 81 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vmware.vmware_rest (2.3.1)"

    #### vmware.vmware_rest details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 8 |
    | modules | 132 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vultr.cloud (1.10.0)"

    #### vultr.cloud details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vyos.vyos (4.1.0)"

    #### vyos.vyos details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 36 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 29 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "wti.remote (1.0.5)"

    #### wti.remote details

    _All changes for ansible-8.5.0 compared to previous version inspected, ansible-8.3.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 32 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |
## ansible-8.3.0

!!! seealso "FYI"
    All changes compared to previous version inspected, _ansible-8.0.0_

### Version Changes

  | Collection | Old Version | New Version |
  | --- | :---: | :---: |
  | amazon.aws | <span style="text-decoration-line: line-through">6.0.1</span> | 6.3.0 |
  | ansible.netcommon | <span style="text-decoration-line: line-through">5.1.1</span> | 5.1.2 |
  | awx.awx | <span style="text-decoration-line: line-through">22.3.0</span> | 22.6.0 |
  | azure.azcollection | <span style="text-decoration-line: line-through">1.15.0</span> | 1.16.0 |
  | chocolatey.chocolatey | <span style="text-decoration-line: line-through">1.4.0</span> | 1.5.1 |
  | cisco.aci | <span style="text-decoration-line: line-through">2.6.0</span> | 2.7.0 |
  | cisco.asa | <span style="text-decoration-line: line-through">4.0.0</span> | 4.0.1 |
  | cisco.dnac | <span style="text-decoration-line: line-through">6.7.2</span> | 6.7.3 |
  | cisco.ios | <span style="text-decoration-line: line-through">4.5.0</span> | 4.6.1 |
  | cisco.ise | <span style="text-decoration-line: line-through">2.5.12</span> | 2.5.14 |
  | cisco.meraki | <span style="text-decoration-line: line-through">2.15.1</span> | 2.15.3 |
  | cisco.mso | <span style="text-decoration-line: line-through">2.4.0</span> | 2.5.0 |
  | cisco.ucs | <span style="text-decoration-line: line-through">1.8.0</span> | 1.10.0 |
  | cloud.common | <span style="text-decoration-line: line-through">2.1.3</span> | 2.1.4 |
  | cloudscale_ch.cloud | <span style="text-decoration-line: line-through">2.2.4</span> | 2.3.1 |
  | community.aws | <span style="text-decoration-line: line-through">6.0.0</span> | 6.2.0 |
  | community.crypto | <span style="text-decoration-line: line-through">2.13.1</span> | 2.15.0 |
  | community.digitalocean | <span style="text-decoration-line: line-through">1.23.0</span> | 1.24.0 |
  | community.dns | <span style="text-decoration-line: line-through">2.5.4</span> | 2.6.0 |
  | community.docker | <span style="text-decoration-line: line-through">3.4.6</span> | 3.4.8 |
  | community.general | <span style="text-decoration-line: line-through">7.0.1</span> | 7.3.0 |
  | community.hrobot | <span style="text-decoration-line: line-through">1.8.0</span> | 1.8.1 |
  | community.mongodb | <span style="text-decoration-line: line-through">1.5.2</span> | 1.6.1 |
  | community.postgresql | <span style="text-decoration-line: line-through">2.4.1</span> | 2.4.3 |
  | community.routeros | <span style="text-decoration-line: line-through">2.8.0</span> | 2.9.0 |
  | community.sops | <span style="text-decoration-line: line-through">1.6.1</span> | 1.6.4 |
  | community.vmware | <span style="text-decoration-line: line-through">3.6.0</span> | 3.9.0 |
  | community.zabbix | <span style="text-decoration-line: line-through">2.0.1</span> | 2.1.0 |
  | containers.podman | <span style="text-decoration-line: line-through">1.10.1</span> | 1.10.2 |
  | dellemc.enterprise_sonic | <span style="text-decoration-line: line-through">2.0.0</span> | 2.2.0 |
  | dellemc.openmanage | <span style="text-decoration-line: line-through">7.6.0</span> | 7.6.1 |
  | dellemc.powerflex | <span style="text-decoration-line: line-through">1.6.0</span> | 1.7.0 |
  | dellemc.unity | <span style="text-decoration-line: line-through">1.6.0</span> | 1.7.1 |
  | f5networks.f5_modules | <span style="text-decoration-line: line-through">1.24.0</span> | 1.25.1 |
  | fortinet.fortimanager | <span style="text-decoration-line: line-through">2.1.7</span> | 2.2.1 |
  | fortinet.fortios | <span style="text-decoration-line: line-through">2.3.0</span> | 2.3.1 |
  | google.cloud | <span style="text-decoration-line: line-through">1.1.3</span> | 1.2.0 |
  | grafana.grafana | <span style="text-decoration-line: line-through">2.0.0</span> | 2.1.5 |
  | hetzner.hcloud | <span style="text-decoration-line: line-through">1.11.0</span> | 1.16.0 |
  | junipernetworks.junos | <span style="text-decoration-line: line-through">5.1.0</span> | 5.2.0 |
  | lowlydba.sqlserver | <span style="text-decoration-line: line-through">2.0.0</span> | 2.1.0 |
  | microsoft.ad | <span style="text-decoration-line: line-through">1.1.0</span> | 1.3.0 |
  | netapp.ontap | <span style="text-decoration-line: line-through">22.6.0</span> | 22.7.0 |
  | purestorage.flasharray | <span style="text-decoration-line: line-through">1.19.1</span> | 1.20.0 |
  | purestorage.flashblade | <span style="text-decoration-line: line-through">1.11.0</span> | 1.12.1 |
  | purestorage.fusion | <span style="text-decoration-line: line-through">1.4.2</span> | 1.6.0 |
  | sensu.sensu_go | <span style="text-decoration-line: line-through">1.13.2</span> | 1.14.0 |
  | t_systems_mms.icinga_director | <span style="text-decoration-line: line-through">1.33.0</span> | 1.33.1 |
  | theforeman.foreman | <span style="text-decoration-line: line-through">3.10.0</span> | 3.12.0 |
  | wti.remote | <span style="text-decoration-line: line-through">1.0.4</span> | 1.0.5 |

### Modules Added

  | Collection | Module |
  | --- | --- |
  | amazon.aws | iam_instance_profile |
  | amazon.aws | iam_instance_profile_info |
  | azure.azcollection | azure_rm_vmssnetworkinterface_info |
  | cisco.aci | aci_access_span_src_group |
  | cisco.aci | aci_access_span_src_group_src |
  | cisco.aci | aci_access_span_src_group_src_path |
  | cisco.aci | aci_epg_subnet |
  | cisco.aci | aci_fabric_span_dst_group |
  | cisco.aci | aci_fabric_span_src_group |
  | cisco.aci | aci_fabric_span_src_group_src |
  | cisco.aci | aci_fabric_span_src_group_src_node |
  | cisco.aci | aci_fabric_span_src_group_src_path |
  | cisco.aci | aci_file_remote_path |
  | cisco.aci | aci_vrf_leak_internal_subnet |
  | cisco.ios | ios_service |
  | cisco.mso | mso_schema_site_anp_epg_useg_attribute |
  | cisco.mso | mso_schema_template_anp_epg_useg_attribute |
  | cloudscale_ch.cloud | load_balancer |
  | cloudscale_ch.cloud | load_balancer_health_monitor |
  | cloudscale_ch.cloud | load_balancer_listener |
  | cloudscale_ch.cloud | load_balancer_pool |
  | cloudscale_ch.cloud | load_balancer_pool_member |
  | community.aws | api_gateway_info |
  | community.dns | nameserver_info |
  | community.dns | nameserver_record_info |
  | community.general | consul_policy |
  | community.general | gitlab_instance_variable |
  | community.general | gitlab_merge_request |
  | community.general | keycloak_authentication_required_actions |
  | community.general | keycloak_authz_permission |
  | community.general | keycloak_authz_permission_info |
  | community.general | keycloak_user |
  | community.general | lvg_rename |
  | community.general | proxmox_pool |
  | community.general | proxmox_pool_member |
  | community.general | proxmox_vm_info |
  | community.vmware | vmware_cluster_drs_recommendations |
  | community.vmware | vmware_vasa |
  | community.vmware | vmware_vasa_info |
  | community.vmware | vmware_vsan_release_catalog |
  | community.zabbix | zabbix_regexp |
  | community.zabbix | zabbix_settings |
  | community.zabbix | zabbix_token |
  | containers.podman | podman_prune |
  | dellemc.enterprise_sonic | sonic_acl_interfaces |
  | dellemc.enterprise_sonic | sonic_bfd |
  | dellemc.enterprise_sonic | sonic_copp |
  | dellemc.enterprise_sonic | sonic_dhcp_relay |
  | dellemc.enterprise_sonic | sonic_ip_neighbor |
  | dellemc.enterprise_sonic | sonic_l2_acls |
  | dellemc.enterprise_sonic | sonic_l3_acls |
  | dellemc.enterprise_sonic | sonic_lldp_global |
  | dellemc.enterprise_sonic | sonic_logging |
  | dellemc.enterprise_sonic | sonic_mac |
  | dellemc.enterprise_sonic | sonic_port_group |
  | dellemc.enterprise_sonic | sonic_route_maps |
  | dellemc.enterprise_sonic | sonic_vlan_mapping |
  | dellemc.powerflex | snapshot_policy |
  | dellemc.unity | replication_session |
  | f5networks.f5_modules | bigip_provision_async |
  | fortinet.fortimanager | fmgr_application_casi_profile |
  | fortinet.fortimanager | fmgr_application_casi_profile_entries |
  | fortinet.fortimanager | fmgr_application_internetservice |
  | fortinet.fortimanager | fmgr_application_internetservice_entry |
  | fortinet.fortimanager | fmgr_application_internetservicecustom |
  | fortinet.fortimanager | fmgr_application_internetservicecustom_disableentry |
  | fortinet.fortimanager | fmgr_application_internetservicecustom_disableentry_iprange |
  | fortinet.fortimanager | fmgr_application_internetservicecustom_entry |
  | fortinet.fortimanager | fmgr_application_internetservicecustom_entry_portrange |
  | fortinet.fortimanager | fmgr_cloud_orchestaws |
  | fortinet.fortimanager | fmgr_cloud_orchestawsconnector |
  | fortinet.fortimanager | fmgr_cloud_orchestawstemplate_autoscaleexistingvpc |
  | fortinet.fortimanager | fmgr_cloud_orchestawstemplate_autoscalenewvpc |
  | fortinet.fortimanager | fmgr_cloud_orchestawstemplate_autoscaletgwnewvpc |
  | fortinet.fortimanager | fmgr_cloud_orchestration |
  | fortinet.fortimanager | fmgr_devprof_log_syslogd_filter_excludelist |
  | fortinet.fortimanager | fmgr_devprof_log_syslogd_filter_excludelist_fields |
  | fortinet.fortimanager | fmgr_devprof_log_syslogd_filter_freestyle |
  | fortinet.fortimanager | fmgr_devprof_log_syslogd_setting_customfieldname |
  | fortinet.fortimanager | fmgr_dnsfilter_profile_urlfilter |
  | fortinet.fortimanager | fmgr_dnsfilter_urlfilter |
  | fortinet.fortimanager | fmgr_dnsfilter_urlfilter_entries |
  | fortinet.fortimanager | fmgr_emailfilter_profile_yahoomail |
  | fortinet.fortimanager | fmgr_extensioncontroller_dataplan |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_cellular |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_cellular_controllerreport |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_cellular_modem1 |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_cellular_modem1_autoswitch |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_cellular_modem2 |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_cellular_modem2_autoswitch |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_cellular_smsnotification |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_cellular_smsnotification_alert |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_cellular_smsnotification_receiver |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_lanextension |
  | fortinet.fortimanager | fmgr_extensioncontroller_extenderprofile_lanextension_backhaul |
  | fortinet.fortimanager | fmgr_firewall_accessproxy6 |
  | fortinet.fortimanager | fmgr_firewall_accessproxy6_apigateway |
  | fortinet.fortimanager | fmgr_firewall_accessproxy6_apigateway6 |
  | fortinet.fortimanager | fmgr_firewall_accessproxy6_apigateway6_realservers |
  | fortinet.fortimanager | fmgr_firewall_accessproxy6_apigateway6_sslciphersuites |
  | fortinet.fortimanager | fmgr_firewall_accessproxy6_apigateway_realservers |
  | fortinet.fortimanager | fmgr_firewall_accessproxy6_apigateway_sslciphersuites |
  | fortinet.fortimanager | fmgr_firewall_address6_profilelist |
  | fortinet.fortimanager | fmgr_firewall_address_profilelist |
  | fortinet.fortimanager | fmgr_firewall_explicitproxyaddress |
  | fortinet.fortimanager | fmgr_firewall_explicitproxyaddress_headergroup |
  | fortinet.fortimanager | fmgr_firewall_explicitproxyaddrgrp |
  | fortinet.fortimanager | fmgr_firewall_gtp_messagefilter |
  | fortinet.fortimanager | fmgr_firewall_ippoolgrp |
  | fortinet.fortimanager | fmgr_firewall_networkservicedynamic |
  | fortinet.fortimanager | fmgr_fmg_fabric_authorization_template |
  | fortinet.fortimanager | fmgr_fmg_fabric_authorization_template_platforms |
  | fortinet.fortimanager | fmgr_fmupdate_fwmsetting_upgradetimeout |
  | fortinet.fortimanager | fmgr_fsp_vlan_dynamicmapping_interface_vrrp |
  | fortinet.fortimanager | fmgr_fsp_vlan_dynamicmapping_interface_vrrp_proxyarp |
  | fortinet.fortimanager | fmgr_fsp_vlan_interface_vrrp_proxyarp |
  | fortinet.fortimanager | fmgr_ips_baseline_sensor |
  | fortinet.fortimanager | fmgr_ips_baseline_sensor_entries |
  | fortinet.fortimanager | fmgr_ips_baseline_sensor_entries_exemptip |
  | fortinet.fortimanager | fmgr_ips_baseline_sensor_filter |
  | fortinet.fortimanager | fmgr_ips_baseline_sensor_override |
  | fortinet.fortimanager | fmgr_ips_baseline_sensor_override_exemptip |
  | fortinet.fortimanager | fmgr_log_npuserver |
  | fortinet.fortimanager | fmgr_log_npuserver_servergroup |
  | fortinet.fortimanager | fmgr_log_npuserver_serverinfo |
  | fortinet.fortimanager | fmgr_pkg_firewall_explicitproxypolicy |
  | fortinet.fortimanager | fmgr_pkg_firewall_explicitproxypolicy_identitybasedpolicy |
  | fortinet.fortimanager | fmgr_pkg_firewall_explicitproxypolicy_sectionvalue |
  | fortinet.fortimanager | fmgr_pkg_firewall_hyperscalepolicy |
  | fortinet.fortimanager | fmgr_pkg_firewall_hyperscalepolicy46 |
  | fortinet.fortimanager | fmgr_pkg_firewall_hyperscalepolicy6 |
  | fortinet.fortimanager | fmgr_pkg_firewall_hyperscalepolicy64 |
  | fortinet.fortimanager | fmgr_pkg_user_nacpolicy |
  | fortinet.fortimanager | fmgr_pm_config_pblock_firewall_consolidated_policy |
  | fortinet.fortimanager | fmgr_pm_config_pblock_firewall_consolidated_policy_sectionvalue |
  | fortinet.fortimanager | fmgr_pm_config_pblock_firewall_policy6 |
  | fortinet.fortimanager | fmgr_pm_config_pblock_firewall_policy6_sectionvalue |
  | fortinet.fortimanager | fmgr_pm_devprof_scopemember |
  | fortinet.fortimanager | fmgr_pm_pkg_scopemember |
  | fortinet.fortimanager | fmgr_pm_wanprof_scopemember |
  | fortinet.fortimanager | fmgr_securityconsole_template_cli_preview |
  | fortinet.fortimanager | fmgr_switchcontroller_acl_group |
  | fortinet.fortimanager | fmgr_switchcontroller_acl_ingress |
  | fortinet.fortimanager | fmgr_switchcontroller_acl_ingress_action |
  | fortinet.fortimanager | fmgr_switchcontroller_acl_ingress_classifier |
  | fortinet.fortimanager | fmgr_switchcontroller_dynamicportpolicy |
  | fortinet.fortimanager | fmgr_switchcontroller_dynamicportpolicy_policy |
  | fortinet.fortimanager | fmgr_switchcontroller_fortilinksettings |
  | fortinet.fortimanager | fmgr_switchcontroller_fortilinksettings_nacports |
  | fortinet.fortimanager | fmgr_switchcontroller_macpolicy |
  | fortinet.fortimanager | fmgr_switchcontroller_managedswitch_dhcpsnoopingstaticclient |
  | fortinet.fortimanager | fmgr_switchcontroller_managedswitch_ports_dhcpsnoopoption82override |
  | fortinet.fortimanager | fmgr_switchcontroller_managedswitch_staticmac |
  | fortinet.fortimanager | fmgr_switchcontroller_managedswitch_stpinstance |
  | fortinet.fortimanager | fmgr_switchcontroller_switchinterfacetag |
  | fortinet.fortimanager | fmgr_switchcontroller_trafficpolicy |
  | fortinet.fortimanager | fmgr_switchcontroller_vlanpolicy |
  | fortinet.fortimanager | fmgr_sys_cloud_orchest |
  | fortinet.fortimanager | fmgr_system_npu_backgroundssescan |
  | fortinet.fortimanager | fmgr_system_npu_dosoptions |
  | fortinet.fortimanager | fmgr_system_npu_dswdtsprofile |
  | fortinet.fortimanager | fmgr_system_npu_dswqueuedtsprofile |
  | fortinet.fortimanager | fmgr_system_npu_hpe |
  | fortinet.fortimanager | fmgr_system_npu_ipreassembly |
  | fortinet.fortimanager | fmgr_system_npu_npqueues |
  | fortinet.fortimanager | fmgr_system_npu_npqueues_ethernettype |
  | fortinet.fortimanager | fmgr_system_npu_npqueues_ipprotocol |
  | fortinet.fortimanager | fmgr_system_npu_npqueues_ipservice |
  | fortinet.fortimanager | fmgr_system_npu_npqueues_profile |
  | fortinet.fortimanager | fmgr_system_npu_npqueues_scheduler |
  | fortinet.fortimanager | fmgr_system_npu_portpathoption |
  | fortinet.fortimanager | fmgr_system_npu_ssehascan |
  | fortinet.fortimanager | fmgr_system_npu_swtrhash |
  | fortinet.fortimanager | fmgr_system_npu_tcptimeoutprofile |
  | fortinet.fortimanager | fmgr_system_npu_udptimeoutprofile |
  | fortinet.fortimanager | fmgr_system_objecttag |
  | fortinet.fortimanager | fmgr_system_sdnconnector_compartmentlist |
  | fortinet.fortimanager | fmgr_system_sdnconnector_ociregionlist |
  | fortinet.fortimanager | fmgr_system_socfabric_trustedlist |
  | fortinet.fortimanager | fmgr_um_image_upgrade |
  | fortinet.fortimanager | fmgr_um_image_upgrade_ext |
  | fortinet.fortimanager | fmgr_user_certificate |
  | fortinet.fortimanager | fmgr_user_deviceaccesslist |
  | fortinet.fortimanager | fmgr_user_deviceaccesslist_devicelist |
  | fortinet.fortimanager | fmgr_user_flexvm |
  | fortinet.fortimanager | fmgr_user_json |
  | fortinet.fortimanager | fmgr_user_saml_dynamicmapping |
  | fortinet.fortimanager | fmgr_vpnsslweb_portal_landingpage |
  | fortinet.fortimanager | fmgr_vpnsslweb_portal_landingpage_formdata |
  | fortinet.fortimanager | fmgr_vpnsslweb_virtualdesktopapplist |
  | fortinet.fortimanager | fmgr_vpnsslweb_virtualdesktopapplist_apps |
  | fortinet.fortimanager | fmgr_wireless_accesscontrollist |
  | fortinet.fortimanager | fmgr_wireless_accesscontrollist_layer3ipv4rules |
  | fortinet.fortimanager | fmgr_wireless_accesscontrollist_layer3ipv6rules |
  | fortinet.fortimanager | fmgr_wireless_address |
  | fortinet.fortimanager | fmgr_wireless_addrgrp |
  | fortinet.fortimanager | fmgr_wireless_ssidpolicy |
  | fortinet.fortimanager | fmgr_wireless_syslogprofile |
  | fortinet.fortios | fortios_antivirus_exempt_list |
  | fortinet.fortios | fortios_endpoint_control_fctems_override |
  | fortinet.fortios | fortios_router_extcommunity_list |
  | fortinet.fortios | fortios_switch_controller_acl_group |
  | fortinet.fortios | fortios_switch_controller_acl_ingress |
  | fortinet.fortios | fortios_system_device_upgrade |
  | fortinet.fortios | fortios_system_evpn |
  | fortinet.fortios | fortios_system_fabric_vpn |
  | fortinet.fortios | fortios_system_pcp_server |
  | fortinet.fortios | fortios_system_sdn_proxy |
  | fortinet.fortios | fortios_system_sso_fortigate_cloud_admin |
  | fortinet.fortios | fortios_vpn_kmip_server |
  | hetzner.hcloud | hcloud_iso_info |
  | hetzner.hcloud | hcloud_primary_ip_info |
  | netapp.ontap | na_ontap_active_directory_domain_controllers |
  | purestorage.flasharray | purefa_logging |
  | sensu.sensu_go | pipeline |
  | sensu.sensu_go | pipeline_info |
  | t_systems_mms.icinga_director | icinga_deploy |
  | t_systems_mms.icinga_director | icinga_deploy_info |

### Modules Removed

  | Collection | Module |
  | --- | --- |

### Collections


??? seealso coll-plugin-details "amazon.aws (6.3.0)"

    #### amazon.aws details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 1 |
    | inventory | 2 |
    | lookup | 5 |
    | modules | 95 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.netcommon (5.1.2)"

    #### ansible.netcommon details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 10 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.posix (1.5.4)"

    #### ansible.posix details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 8 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.utils (2.10.3)"

    #### ansible.utils details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 4 |
    | modules | 4 |
    | filter | 29 |
    | test | 25 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.windows (1.14.0)"

    #### ansible.windows details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "arista.eos (6.0.1)"

    #### arista.eos details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 41 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 34 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "awx.awx (22.6.0)"

    #### awx.awx details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 3 |
    | modules | 43 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "azure.azcollection (1.16.0)"

    #### azure.azcollection details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 1 |
    | modules | 282 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | azure-containerregistry | Updated | <span style="text-decoration-line: line-through">==1.0.0</span> | ==1.1.0 |
    | azure-mgmt-marketplaceordering | Updated | <span style="text-decoration-line: line-through">==0.1.0</span> | ==1.1.0 |
    | azure-mgmt-managementgroups | Updated | <span style="text-decoration-line: line-through">==0.2.0</span> | ==1.0.0 |
    | azure-mgmt-devtestlabs | Updated | <span style="text-decoration-line: line-through">==3.0.0</span> | ==9.0.0 |
    | | | |

??? seealso coll-plugin-details "check_point.mgmt (5.1.1)"

    #### check_point.mgmt details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 5 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 259 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "chocolatey.chocolatey (1.5.1)"

    #### chocolatey.chocolatey details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.aci (2.7.0)"

    #### cisco.aci details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 173 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.asa (4.0.1)"

    #### cisco.asa details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.dnac (6.7.3)"

    #### cisco.dnac details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 382 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 387 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.intersight (1.0.27)"

    #### cisco.intersight details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ios (4.6.1)"

    #### cisco.ios details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 38 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 37 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.iosxr (5.0.3)"

    #### cisco.iosxr details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 33 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 32 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ise (2.5.14)"

    #### cisco.ise details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 383 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 383 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | ciscoisesdk | Updated | <span style="text-decoration-line: line-through">>=2.0.8</span> | >=2.0.10 |
    | | | |

??? seealso coll-plugin-details "cisco.meraki (2.15.3)"

    #### cisco.meraki details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 43 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.mso (2.5.0)"

    #### cisco.mso details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 68 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.nso (1.0.3)"

    #### cisco.nso details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.nxos (4.4.0)"

    #### cisco.nxos details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 101 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 87 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ucs (1.10.0)"

    #### cisco.ucs details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 29 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cloud.common (2.1.4)"

    #### cloud.common details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cloudscale_ch.cloud (2.3.1)"

    #### cloudscale_ch.cloud details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.aws (6.2.0)"

    #### community.aws details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 169 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.azure (2.0.0)"

    #### community.azure details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.ciscosmb (1.0.6)"

    #### community.ciscosmb details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | paramiko | Added | |  |
    | ansible-pylibssh | Added | |  |
    | galaxy_importer | Added | |  |
    | antsibull_changelog | Removed | <span style="text-decoration-line: line-through"></span> | |
    | galaxy-importer | Removed | <span style="text-decoration-line: line-through"></span> | |
    | | | |

??? seealso coll-plugin-details "community.crypto (2.15.0)"

    #### community.crypto details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 32 |
    | filter | 7 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.digitalocean (1.24.0)"

    #### community.digitalocean details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 55 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.dns (2.6.0)"

    #### community.dns details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 2 |
    | lookup | 2 |
    | modules | 16 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.docker (3.4.8)"

    #### community.docker details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 3 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.fortios (1.0.0)"

    #### community.fortios details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.general (7.3.0)"

    #### community.general details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 25 |
    | inventory | 13 |
    | lookup | 32 |
    | modules | 586 |
    | filter | 14 |
    | test | 1 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.google (1.0.0)"

    #### community.google details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.grafana (1.5.4)"

    #### community.grafana details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.hashi_vault (5.0.0)"

    #### community.hashi_vault details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 9 |
    | modules | 10 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.hrobot (1.8.1)"

    #### community.hrobot details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 12 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.libvirt (1.2.0)"

    #### community.libvirt details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.mongodb (1.6.1)"

    #### community.mongodb details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 18 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.mysql (3.7.2)"

    #### community.mysql details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.network (5.0.0)"

    #### community.network details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 13 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 315 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.okd (2.3.0)"

    #### community.okd details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.postgresql (2.4.3)"

    #### community.postgresql details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 23 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.proxysql (1.5.1)"

    #### community.proxysql details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.rabbitmq (1.2.3)"

    #### community.rabbitmq details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.routeros (2.9.0)"

    #### community.routeros details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sap (1.0.0)"

    #### community.sap details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sap_libs (1.4.1)"

    #### community.sap_libs details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.skydive (1.0.0)"

    #### community.skydive details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sops (1.6.4)"

    #### community.sops details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 2 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.vmware (3.9.0)"

    #### community.vmware details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 2 |
    | lookup | 0 |
    | modules | 169 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.windows (1.13.0)"

    #### community.windows details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 85 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.zabbix (2.1.0)"

    #### community.zabbix details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "containers.podman (1.10.2)"

    #### containers.podman details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 23 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cyberark.conjur (1.2.0)"

    #### cyberark.conjur details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cyberark.pas (1.0.19)"

    #### cyberark.pas details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.enterprise_sonic (2.2.0)"

    #### dellemc.enterprise_sonic details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 41 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.openmanage (7.6.1)"

    #### dellemc.openmanage details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 85 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | jmespath | Added | |  |
    | | | |

??? seealso coll-plugin-details "dellemc.powerflex (1.7.0)"

    #### dellemc.powerflex details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 12 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.unity (1.7.1)"

    #### dellemc.unity details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 18 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | urllib3 | Updated | <span style="text-decoration-line: line-through"></span> | >=1.26.7 |
    | setuptools | Removed | <span style="text-decoration-line: line-through"></span> | |
    | | | |

??? seealso coll-plugin-details "f5networks.f5_modules (1.25.1)"

    #### f5networks.f5_modules details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 3 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 2 |
    | modules | 179 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "fortinet.fortimanager (2.2.1)"

    #### fortinet.fortimanager details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 1133 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "fortinet.fortios (2.3.1)"

    #### fortinet.fortios details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 658 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "frr.frr (2.0.2)"

    #### frr.frr details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "gluster.gluster (1.0.2)"

    #### gluster.gluster details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "google.cloud (1.2.0)"

    #### google.cloud details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 170 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "grafana.grafana (2.1.5)"

    #### grafana.grafana details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "hetzner.hcloud (1.16.0)"

    #### hetzner.hcloud details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 39 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "hpe.nimble (1.1.4)"

    #### hpe.nimble details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 22 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ibm.qradar (2.1.0)"

    #### ibm.qradar details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 16 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ibm.spectrum_virtualize (1.12.0)"

    #### ibm.spectrum_virtualize details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 44 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "infinidat.infinibox (1.3.12)"

    #### infinidat.infinibox details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "infoblox.nios_modules (1.5.0)"

    #### infoblox.nios_modules details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 3 |
    | modules | 21 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "inspur.ispim (1.3.0)"

    #### inspur.ispim details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 126 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "inspur.sm (2.3.0)"

    #### inspur.sm details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 137 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "junipernetworks.junos (5.2.0)"

    #### junipernetworks.junos details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "kubernetes.core (2.4.0)"

    #### kubernetes.core details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 16 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 2 |
    | modules | 19 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "lowlydba.sqlserver (2.1.0)"

    #### lowlydba.sqlserver details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "microsoft.ad (1.3.0)"

    #### microsoft.ad details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | dpapi-ng | Added | |  |
    | | | |

??? seealso coll-plugin-details "netapp.aws (21.7.0)"

    #### netapp.aws details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.azure (21.10.0)"

    #### netapp.azure details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.cloudmanager (21.22.0)"

    #### netapp.cloudmanager details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.elementsw (21.7.0)"

    #### netapp.elementsw details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 24 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.ontap (22.7.0)"

    #### netapp.ontap details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 149 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.storagegrid (21.11.1)"

    #### netapp.storagegrid details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 19 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.um_info (21.8.0)"

    #### netapp.um_info details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 10 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp_eseries.santricity (1.4.0)"

    #### netapp_eseries.santricity details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 5 |
    | modules | 55 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netbox.netbox (3.13.0)"

    #### netbox.netbox details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 1 |
    | modules | 76 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.cloudstack (2.3.0)"

    #### ngine_io.cloudstack details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 53 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.exoscale (1.0.0)"

    #### ngine_io.exoscale details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.vultr (1.1.3)"

    #### ngine_io.vultr details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 24 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "openstack.cloud (2.1.0)"

    #### openstack.cloud details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 87 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "openvswitch.openvswitch (2.1.1)"

    #### openvswitch.openvswitch details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ovirt.ovirt (3.1.2)"

    #### ovirt.ovirt details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 58 |
    | filter | 4 |
    | test | 1 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.flasharray (1.20.0)"

    #### purestorage.flasharray details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 58 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.flashblade (1.12.1)"

    #### purestorage.flashblade details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 47 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.fusion (1.6.0)"

    #### purestorage.fusion details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 19 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "sensu.sensu_go (1.14.0)"

    #### sensu.sensu_go details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 51 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "splunk.es (2.1.0)"

    #### splunk.es details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "t_systems_mms.icinga_director (1.33.1)"

    #### t_systems_mms.icinga_director details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "telekom_mms.icinga_director (1.34.1)"

    #### telekom_mms.icinga_director details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "theforeman.foreman (3.12.0)"

    #### theforeman.foreman details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 79 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vmware.vmware_rest (2.3.1)"

    #### vmware.vmware_rest details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 8 |
    | modules | 132 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vultr.cloud (1.8.0)"

    #### vultr.cloud details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 27 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vyos.vyos (4.1.0)"

    #### vyos.vyos details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 36 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 29 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "wti.remote (1.0.5)"

    #### wti.remote details

    _All changes for ansible-8.3.0 compared to previous version inspected, ansible-8.0.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 32 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |
## ansible-8.0.0

!!! seealso "FYI"
    All changes compared to previous version inspected, _ansible-7.6.0_

### Version Changes

  | Collection | Old Version | New Version |
  | --- | :---: | :---: |
  | amazon.aws | <span style="text-decoration-line: line-through">5.5.0</span> | 6.0.1 |
  | ansible.netcommon | <span style="text-decoration-line: line-through">4.1.0</span> | 5.1.1 |
  | awx.awx | <span style="text-decoration-line: line-through">21.14.0</span> | 22.3.0 |
  | check_point.mgmt | <span style="text-decoration-line: line-through">4.0.0</span> | 5.1.1 |
  | cisco.iosxr | <span style="text-decoration-line: line-through">4.1.0</span> | 5.0.3 |
  | cisco.nxos | <span style="text-decoration-line: line-through">4.3.0</span> | 4.4.0 |
  | community.aws | <span style="text-decoration-line: line-through">5.5.0</span> | 6.0.0 |
  | community.ciscosmb | <span style="text-decoration-line: line-through">1.0.5</span> | 1.0.6 |
  | community.general | <span style="text-decoration-line: line-through">6.6.1</span> | 7.0.1 |
  | community.hashi_vault | <span style="text-decoration-line: line-through">4.2.1</span> | 5.0.0 |
  | community.mysql | <span style="text-decoration-line: line-through">3.7.1</span> | 3.7.2 |
  | community.zabbix | <span style="text-decoration-line: line-through">1.9.3</span> | 2.0.1 |
  | dellemc.enterprise_sonic | <span style="text-decoration-line: line-through">2.1.0</span> | 2.0.0 |
  | dellemc.openmanage | <span style="text-decoration-line: line-through">6.3.0</span> | 7.6.0 |
  | fortinet.fortios | <span style="text-decoration-line: line-through">2.2.3</span> | 2.3.0 |
  | grafana.grafana | <span style="text-decoration-line: line-through">1.1.1</span> | 2.0.0 |
  | hetzner.hcloud | <span style="text-decoration-line: line-through">1.12.0</span> | 1.11.0 |
  | junipernetworks.junos | <span style="text-decoration-line: line-through">4.1.0</span> | 5.1.0 |
  | lowlydba.sqlserver | <span style="text-decoration-line: line-through">1.3.1</span> | 2.0.0 |
  | openstack.cloud | <span style="text-decoration-line: line-through">1.10.0</span> | 2.1.0 |
  | ovirt.ovirt | <span style="text-decoration-line: line-through">2.4.1</span> | 3.1.2 |
  | vyos.vyos | <span style="text-decoration-line: line-through">4.0.2</span> | 4.1.0 |

### Modules Added

  | Collection | Module |
  | --- | --- |
  | amazon.aws | backup_plan |
  | amazon.aws | backup_plan_info |
  | amazon.aws | backup_restore_job_info |
  | amazon.aws | backup_selection |
  | amazon.aws | backup_selection_info |
  | amazon.aws | backup_tag |
  | amazon.aws | backup_tag_info |
  | amazon.aws | backup_vault |
  | amazon.aws | backup_vault_info |
  | check_point.mgmt | cp_mgmt_abort_get_interfaces |
  | check_point.mgmt | cp_mgmt_access_layers |
  | check_point.mgmt | cp_mgmt_access_point_name |
  | check_point.mgmt | cp_mgmt_access_point_name_facts |
  | check_point.mgmt | cp_mgmt_add_repository_package |
  | check_point.mgmt | cp_mgmt_add_updatable_object |
  | check_point.mgmt | cp_mgmt_checkpoint_host |
  | check_point.mgmt | cp_mgmt_checkpoint_host_facts |
  | check_point.mgmt | cp_mgmt_delete_repository_package |
  | check_point.mgmt | cp_mgmt_delete_updatable_object |
  | check_point.mgmt | cp_mgmt_dynamic_global_network_object |
  | check_point.mgmt | cp_mgmt_dynamic_global_network_object_facts |
  | check_point.mgmt | cp_mgmt_export_management |
  | check_point.mgmt | cp_mgmt_export_smart_task |
  | check_point.mgmt | cp_mgmt_get_attachment |
  | check_point.mgmt | cp_mgmt_get_interfaces |
  | check_point.mgmt | cp_mgmt_gsn_handover_group |
  | check_point.mgmt | cp_mgmt_gsn_handover_group_facts |
  | check_point.mgmt | cp_mgmt_ha_full_sync |
  | check_point.mgmt | cp_mgmt_hosts |
  | check_point.mgmt | cp_mgmt_https_layer |
  | check_point.mgmt | cp_mgmt_https_layer_facts |
  | check_point.mgmt | cp_mgmt_import_management |
  | check_point.mgmt | cp_mgmt_import_smart_task |
  | check_point.mgmt | cp_mgmt_ips_protection_extended_attribute_facts |
  | check_point.mgmt | cp_mgmt_lock_object |
  | check_point.mgmt | cp_mgmt_lsv_profile |
  | check_point.mgmt | cp_mgmt_lsv_profile_facts |
  | check_point.mgmt | cp_mgmt_nat_rule |
  | check_point.mgmt | cp_mgmt_radius_group |
  | check_point.mgmt | cp_mgmt_radius_group_facts |
  | check_point.mgmt | cp_mgmt_radius_server |
  | check_point.mgmt | cp_mgmt_radius_server_facts |
  | check_point.mgmt | cp_mgmt_repository_package_facts |
  | check_point.mgmt | cp_mgmt_service_citrix_tcp |
  | check_point.mgmt | cp_mgmt_service_citrix_tcp_facts |
  | check_point.mgmt | cp_mgmt_service_compound_tcp |
  | check_point.mgmt | cp_mgmt_service_compound_tcp_facts |
  | check_point.mgmt | cp_mgmt_set_api_settings |
  | check_point.mgmt | cp_mgmt_set_cloud_services |
  | check_point.mgmt | cp_mgmt_set_global_domain |
  | check_point.mgmt | cp_mgmt_set_ha_state |
  | check_point.mgmt | cp_mgmt_set_ips_update_schedule |
  | check_point.mgmt | cp_mgmt_set_login_message |
  | check_point.mgmt | cp_mgmt_set_policy_settings |
  | check_point.mgmt | cp_mgmt_set_vpn_community_remote_access |
  | check_point.mgmt | cp_mgmt_show_api_settings |
  | check_point.mgmt | cp_mgmt_show_api_versions |
  | check_point.mgmt | cp_mgmt_show_azure_ad_content |
  | check_point.mgmt | cp_mgmt_show_changes |
  | check_point.mgmt | cp_mgmt_show_commands |
  | check_point.mgmt | cp_mgmt_show_gateways_and_servers |
  | check_point.mgmt | cp_mgmt_show_global_domain |
  | check_point.mgmt | cp_mgmt_show_ha_state |
  | check_point.mgmt | cp_mgmt_show_ips_status |
  | check_point.mgmt | cp_mgmt_show_ips_update_schedule |
  | check_point.mgmt | cp_mgmt_show_layer_structure |
  | check_point.mgmt | cp_mgmt_show_login_message |
  | check_point.mgmt | cp_mgmt_show_place_holder |
  | check_point.mgmt | cp_mgmt_show_policy_settings |
  | check_point.mgmt | cp_mgmt_show_software_packages_per_targets |
  | check_point.mgmt | cp_mgmt_show_unused_objects |
  | check_point.mgmt | cp_mgmt_show_updatable_objects_repository_content |
  | check_point.mgmt | cp_mgmt_show_validations |
  | check_point.mgmt | cp_mgmt_smart_task |
  | check_point.mgmt | cp_mgmt_smart_task_facts |
  | check_point.mgmt | cp_mgmt_smart_task_trigger_facts |
  | check_point.mgmt | cp_mgmt_tacacs_group |
  | check_point.mgmt | cp_mgmt_tacacs_group_facts |
  | check_point.mgmt | cp_mgmt_tacacs_server |
  | check_point.mgmt | cp_mgmt_tacacs_server_facts |
  | check_point.mgmt | cp_mgmt_task_facts |
  | check_point.mgmt | cp_mgmt_threat_layers |
  | check_point.mgmt | cp_mgmt_threat_rules |
  | check_point.mgmt | cp_mgmt_time_group |
  | check_point.mgmt | cp_mgmt_time_group_facts |
  | check_point.mgmt | cp_mgmt_unlock_administrator |
  | check_point.mgmt | cp_mgmt_unlock_object |
  | check_point.mgmt | cp_mgmt_updatable_object_facts |
  | check_point.mgmt | cp_mgmt_update_updatable_objects_repository_content |
  | check_point.mgmt | cp_mgmt_user_group |
  | check_point.mgmt | cp_mgmt_user_group_facts |
  | check_point.mgmt | cp_mgmt_vpn_community_remote_access_facts |
  | check_point.mgmt | cp_mgmt_vsx_run_operation |
  | check_point.mgmt | cp_mgmt_where_used |
  | community.aws | ec2_carrier_gateway |
  | community.aws | ec2_carrier_gateway_info |
  | community.aws | lightsail_snapshot |
  | community.aws | mq_broker |
  | community.aws | mq_broker_config |
  | community.aws | mq_broker_info |
  | community.aws | mq_user |
  | community.aws | mq_user_info |
  | community.aws | ssm_inventory_info |
  | community.general | ipbase_info |
  | dellemc.openmanage | idrac_user_info |
  | dellemc.openmanage | ome_profile_info |
  | dellemc.openmanage | ome_smart_fabric_info |
  | dellemc.openmanage | ome_smart_fabric_uplink_info |
  | dellemc.openmanage | ome_template_network_vlan_info |
  | openstack.cloud | baremetal_deploy_template |
  | openstack.cloud | catalog_service_info |
  | openstack.cloud | compute_flavor_access |
  | openstack.cloud | resource |
  | openstack.cloud | resources |
  | openstack.cloud | volume_type_access |

### Modules Removed

  | Collection | Module |
  | --- | --- |
  | community.general | hana_query |
  | community.general | sap_task_list_execute |
  | community.general | sapcar_extract |
  | community.zabbix | zabbix_group_facts |
  | community.zabbix | zabbix_host_facts |
  | community.zabbix | zabbix_screen |
  | openstack.cloud | container |
  | openstack.cloud | os_auth |
  | openstack.cloud | os_client_config |
  | openstack.cloud | os_coe_cluster |
  | openstack.cloud | os_coe_cluster_template |
  | openstack.cloud | os_flavor_info |
  | openstack.cloud | os_floating_ip |
  | openstack.cloud | os_group |
  | openstack.cloud | os_group_info |
  | openstack.cloud | os_image |
  | openstack.cloud | os_image_info |
  | openstack.cloud | os_ironic |
  | openstack.cloud | os_ironic_inspect |
  | openstack.cloud | os_ironic_node |
  | openstack.cloud | os_keypair |
  | openstack.cloud | os_keystone_domain |
  | openstack.cloud | os_keystone_domain_info |
  | openstack.cloud | os_keystone_endpoint |
  | openstack.cloud | os_keystone_federation_protocol |
  | openstack.cloud | os_keystone_federation_protocol_info |
  | openstack.cloud | os_keystone_identity_provider |
  | openstack.cloud | os_keystone_identity_provider_info |
  | openstack.cloud | os_keystone_mapping |
  | openstack.cloud | os_keystone_mapping_info |
  | openstack.cloud | os_keystone_role |
  | openstack.cloud | os_keystone_service |
  | openstack.cloud | os_listener |
  | openstack.cloud | os_loadbalancer |
  | openstack.cloud | os_member |
  | openstack.cloud | os_network |
  | openstack.cloud | os_networks_info |
  | openstack.cloud | os_nova_flavor |
  | openstack.cloud | os_nova_host_aggregate |
  | openstack.cloud | os_object |
  | openstack.cloud | os_pool |
  | openstack.cloud | os_port |
  | openstack.cloud | os_port_info |
  | openstack.cloud | os_project |
  | openstack.cloud | os_project_access |
  | openstack.cloud | os_project_info |
  | openstack.cloud | os_quota |
  | openstack.cloud | os_recordset |
  | openstack.cloud | os_router |
  | openstack.cloud | os_routers_info |
  | openstack.cloud | os_security_group |
  | openstack.cloud | os_security_group_rule |
  | openstack.cloud | os_server |
  | openstack.cloud | os_server_action |
  | openstack.cloud | os_server_group |
  | openstack.cloud | os_server_info |
  | openstack.cloud | os_server_metadata |
  | openstack.cloud | os_server_volume |
  | openstack.cloud | os_stack |
  | openstack.cloud | os_subnet |
  | openstack.cloud | os_subnets_info |
  | openstack.cloud | os_user |
  | openstack.cloud | os_user_group |
  | openstack.cloud | os_user_info |
  | openstack.cloud | os_user_role |
  | openstack.cloud | os_volume |
  | openstack.cloud | os_volume_snapshot |
  | openstack.cloud | os_zone |
  | openstack.cloud | project_access |
  | purestorage.flasharray | purefa_logging |
  | t_systems_mms.icinga_director | icinga_deploy |
  | t_systems_mms.icinga_director | icinga_deploy_info |

### Collections


??? seealso coll-plugin-details "amazon.aws (6.0.1)"

    #### amazon.aws details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 1 |
    | inventory | 2 |
    | lookup | 5 |
    | modules | 93 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | botocore | Updated | <span style="text-decoration-line: line-through">>=1.21.0</span> | >=1.25.0 |
    | boto3 | Updated | <span style="text-decoration-line: line-through">>=1.18.0</span> | >=1.22.0 |
    | | | |

??? seealso coll-plugin-details "ansible.netcommon (5.1.1)"

    #### ansible.netcommon details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 10 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.posix (1.5.4)"

    #### ansible.posix details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 8 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.utils (2.10.3)"

    #### ansible.utils details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 4 |
    | modules | 4 |
    | filter | 29 |
    | test | 25 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ansible.windows (1.14.0)"

    #### ansible.windows details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "arista.eos (6.0.1)"

    #### arista.eos details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 41 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 34 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "awx.awx (22.3.0)"

    #### awx.awx details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 3 |
    | modules | 43 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "azure.azcollection (1.15.0)"

    #### azure.azcollection details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 1 |
    | modules | 281 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "check_point.mgmt (5.1.1)"

    #### check_point.mgmt details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 5 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 259 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "chocolatey.chocolatey (1.4.0)"

    #### chocolatey.chocolatey details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.aci (2.6.0)"

    #### cisco.aci details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 162 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.asa (4.0.0)"

    #### cisco.asa details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.dnac (6.7.2)"

    #### cisco.dnac details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 382 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 387 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.intersight (1.0.27)"

    #### cisco.intersight details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ios (4.5.0)"

    #### cisco.ios details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 37 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 36 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.iosxr (5.0.3)"

    #### cisco.iosxr details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 33 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 32 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ise (2.5.12)"

    #### cisco.ise details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 383 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 383 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.meraki (2.15.1)"

    #### cisco.meraki details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 43 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.mso (2.4.0)"

    #### cisco.mso details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 66 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.nso (1.0.3)"

    #### cisco.nso details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.nxos (4.4.0)"

    #### cisco.nxos details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 101 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 87 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cisco.ucs (1.8.0)"

    #### cisco.ucs details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 29 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cloud.common (2.1.3)"

    #### cloud.common details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cloudscale_ch.cloud (2.2.4)"

    #### cloudscale_ch.cloud details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.aws (6.0.0)"

    #### community.aws details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 168 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | botocore | Updated | <span style="text-decoration-line: line-through">>=1.21.0</span> | >=1.25.0 |
    | boto3 | Updated | <span style="text-decoration-line: line-through">>=1.18.0</span> | >=1.22.0 |
    | | | |

??? seealso coll-plugin-details "community.azure (2.0.0)"

    #### community.azure details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.ciscosmb (1.0.6)"

    #### community.ciscosmb details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.crypto (2.13.1)"

    #### community.crypto details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 32 |
    | filter | 6 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.digitalocean (1.23.0)"

    #### community.digitalocean details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 55 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.dns (2.5.4)"

    #### community.dns details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 2 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.docker (3.4.6)"

    #### community.docker details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 3 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.fortios (1.0.0)"

    #### community.fortios details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.general (7.0.1)"

    #### community.general details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 25 |
    | inventory | 13 |
    | lookup | 31 |
    | modules | 575 |
    | filter | 14 |
    | test | 1 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.google (1.0.0)"

    #### community.google details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.grafana (1.5.4)"

    #### community.grafana details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.hashi_vault (5.0.0)"

    #### community.hashi_vault details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 9 |
    | modules | 10 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.hrobot (1.8.0)"

    #### community.hrobot details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 12 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.libvirt (1.2.0)"

    #### community.libvirt details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.mongodb (1.5.2)"

    #### community.mongodb details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 18 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.mysql (3.7.2)"

    #### community.mysql details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.network (5.0.0)"

    #### community.network details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 13 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 315 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.okd (2.3.0)"

    #### community.okd details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.postgresql (2.4.1)"

    #### community.postgresql details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 23 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.proxysql (1.5.1)"

    #### community.proxysql details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.rabbitmq (1.2.3)"

    #### community.rabbitmq details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.routeros (2.8.0)"

    #### community.routeros details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sap (1.0.0)"

    #### community.sap details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sap_libs (1.4.1)"

    #### community.sap_libs details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.skydive (1.0.0)"

    #### community.skydive details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.sops (1.6.1)"

    #### community.sops details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 2 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.vmware (3.6.0)"

    #### community.vmware details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 2 |
    | lookup | 0 |
    | modules | 165 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.windows (1.13.0)"

    #### community.windows details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 85 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "community.zabbix (2.0.1)"

    #### community.zabbix details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 27 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "containers.podman (1.10.1)"

    #### containers.podman details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 22 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cyberark.conjur (1.2.0)"

    #### cyberark.conjur details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "cyberark.pas (1.0.19)"

    #### cyberark.pas details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.enterprise_sonic (2.0.0)"

    #### dellemc.enterprise_sonic details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.openmanage (7.6.0)"

    #### dellemc.openmanage details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 85 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.powerflex (1.6.0)"

    #### dellemc.powerflex details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "dellemc.unity (1.6.0)"

    #### dellemc.unity details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 17 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "f5networks.f5_modules (1.24.0)"

    #### f5networks.f5_modules details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 3 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 2 |
    | modules | 178 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "fortinet.fortimanager (2.1.7)"

    #### fortinet.fortimanager details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 994 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "fortinet.fortios (2.3.0)"

    #### fortinet.fortios details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 646 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "frr.frr (2.0.2)"

    #### frr.frr details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "gluster.gluster (1.0.2)"

    #### gluster.gluster details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "google.cloud (1.1.3)"

    #### google.cloud details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 170 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "grafana.grafana (2.0.0)"

    #### grafana.grafana details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | yamllint | Added | | ==1.29.0 |
    | ansible-lint | Added | | >=6.13.1|<7.0.0 |
    | pylint | Added | | >=2.16.2|<3.0.0 |
    | | | |

??? seealso coll-plugin-details "hetzner.hcloud (1.11.0)"

    #### hetzner.hcloud details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 37 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "hpe.nimble (1.1.4)"

    #### hpe.nimble details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 22 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ibm.qradar (2.1.0)"

    #### ibm.qradar details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 16 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ibm.spectrum_virtualize (1.12.0)"

    #### ibm.spectrum_virtualize details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 44 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "infinidat.infinibox (1.3.12)"

    #### infinidat.infinibox details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "infoblox.nios_modules (1.5.0)"

    #### infoblox.nios_modules details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 3 |
    | modules | 21 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "inspur.ispim (1.3.0)"

    #### inspur.ispim details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 126 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "inspur.sm (2.3.0)"

    #### inspur.sm details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 137 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "junipernetworks.junos (5.1.0)"

    #### junipernetworks.junos details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "kubernetes.core (2.4.0)"

    #### kubernetes.core details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 16 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 2 |
    | modules | 19 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "lowlydba.sqlserver (2.0.0)"

    #### lowlydba.sqlserver details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "microsoft.ad (1.1.0)"

    #### microsoft.ad details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.aws (21.7.0)"

    #### netapp.aws details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.azure (21.10.0)"

    #### netapp.azure details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.cloudmanager (21.22.0)"

    #### netapp.cloudmanager details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.elementsw (21.7.0)"

    #### netapp.elementsw details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 24 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.ontap (22.6.0)"

    #### netapp.ontap details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 148 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.storagegrid (21.11.1)"

    #### netapp.storagegrid details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 19 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp.um_info (21.8.0)"

    #### netapp.um_info details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 10 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netapp_eseries.santricity (1.4.0)"

    #### netapp_eseries.santricity details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 5 |
    | modules | 55 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "netbox.netbox (3.13.0)"

    #### netbox.netbox details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 1 |
    | modules | 76 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.cloudstack (2.3.0)"

    #### ngine_io.cloudstack details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 53 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.exoscale (1.0.0)"

    #### ngine_io.exoscale details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ngine_io.vultr (1.1.3)"

    #### ngine_io.vultr details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 24 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "openstack.cloud (2.1.0)"

    #### openstack.cloud details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 87 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | openstacksdk | Updated | <span style="text-decoration-line: line-through"><0.99.0|>=0.36</span> | >=1.0.0 |
    | | | |

??? seealso coll-plugin-details "openvswitch.openvswitch (2.1.1)"

    #### openvswitch.openvswitch details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "ovirt.ovirt (3.1.2)"

    #### ovirt.ovirt details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 58 |
    | filter | 4 |
    | test | 1 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.flasharray (1.19.1)"

    #### purestorage.flasharray details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 57 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.flashblade (1.11.0)"

    #### purestorage.flashblade details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 47 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "purestorage.fusion (1.4.2)"

    #### purestorage.fusion details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 19 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "sensu.sensu_go (1.13.2)"

    #### sensu.sensu_go details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 49 |
    | filter | 2 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "splunk.es (2.1.0)"

    #### splunk.es details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "t_systems_mms.icinga_director (1.33.0)"

    #### t_systems_mms.icinga_director details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 38 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "theforeman.foreman (3.10.0)"

    #### theforeman.foreman details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 79 |
    | filter | 1 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vmware.vmware_rest (2.3.1)"

    #### vmware.vmware_rest details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 8 |
    | modules | 132 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vultr.cloud (1.8.0)"

    #### vultr.cloud details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 27 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "vyos.vyos (4.1.0)"

    #### vyos.vyos details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 36 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 29 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |

??? seealso coll-plugin-details "wti.remote (1.0.4)"

    #### wti.remote details

    _All changes for ansible-8.0.0 compared to previous version inspected, ansible-7.6.0_<br>
    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 32 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |

    **requirements changed**

    | Name | Change | Old Spec | New Spec |
    | --- | :---: | :---: | :---: |
    | | | |
## ansible-7.6.0


### Collections


??? seealso coll-plugin-details "amazon.aws (5.5.0)"

    #### amazon.aws details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 1 |
    | inventory | 2 |
    | lookup | 4 |
    | modules | 84 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "ansible.netcommon (4.1.0)"

    #### ansible.netcommon details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 10 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "ansible.posix (1.5.4)"

    #### ansible.posix details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 8 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "ansible.utils (2.10.3)"

    #### ansible.utils details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 4 |
    | modules | 4 |
    | filter | 29 |
    | test | 25 |



??? seealso coll-plugin-details "ansible.windows (1.14.0)"

    #### ansible.windows details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "arista.eos (6.0.1)"

    #### arista.eos details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 41 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 34 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "awx.awx (21.14.0)"

    #### awx.awx details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 3 |
    | modules | 43 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "azure.azcollection (1.15.0)"

    #### azure.azcollection details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 1 |
    | modules | 281 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "check_point.mgmt (4.0.0)"

    #### check_point.mgmt details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 174 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "chocolatey.chocolatey (1.4.0)"

    #### chocolatey.chocolatey details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.aci (2.6.0)"

    #### cisco.aci details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 162 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.asa (4.0.0)"

    #### cisco.asa details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.dnac (6.7.2)"

    #### cisco.dnac details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 382 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 387 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.intersight (1.0.27)"

    #### cisco.intersight details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.ios (4.5.0)"

    #### cisco.ios details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 37 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 36 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.iosxr (4.1.0)"

    #### cisco.iosxr details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 33 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 32 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.ise (2.5.12)"

    #### cisco.ise details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 383 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 383 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.meraki (2.15.1)"

    #### cisco.meraki details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 43 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.mso (2.4.0)"

    #### cisco.mso details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 66 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.nso (1.0.3)"

    #### cisco.nso details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 5 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.nxos (4.3.0)"

    #### cisco.nxos details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 101 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 87 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cisco.ucs (1.8.0)"

    #### cisco.ucs details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 29 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cloud.common (2.1.3)"

    #### cloud.common details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cloudscale_ch.cloud (2.2.4)"

    #### cloudscale_ch.cloud details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.aws (5.5.0)"

    #### community.aws details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 159 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.azure (2.0.0)"

    #### community.azure details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.ciscosmb (1.0.5)"

    #### community.ciscosmb details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.crypto (2.13.1)"

    #### community.crypto details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 32 |
    | filter | 6 |
    | test | 0 |



??? seealso coll-plugin-details "community.digitalocean (1.23.0)"

    #### community.digitalocean details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 55 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.dns (2.5.4)"

    #### community.dns details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 2 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "community.docker (3.4.6)"

    #### community.docker details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 3 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.fortios (1.0.0)"

    #### community.fortios details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.general (6.6.1)"

    #### community.general details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 25 |
    | inventory | 13 |
    | lookup | 31 |
    | modules | 577 |
    | filter | 14 |
    | test | 1 |



??? seealso coll-plugin-details "community.google (1.0.0)"

    #### community.google details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.grafana (1.5.4)"

    #### community.grafana details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.hashi_vault (4.2.1)"

    #### community.hashi_vault details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 9 |
    | modules | 10 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "community.hrobot (1.8.0)"

    #### community.hrobot details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 12 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.libvirt (1.2.0)"

    #### community.libvirt details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.mongodb (1.5.2)"

    #### community.mongodb details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 18 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.mysql (3.7.1)"

    #### community.mysql details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.network (5.0.0)"

    #### community.network details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 13 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 315 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.okd (2.3.0)"

    #### community.okd details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.postgresql (2.4.1)"

    #### community.postgresql details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 23 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.proxysql (1.5.1)"

    #### community.proxysql details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.rabbitmq (1.2.3)"

    #### community.rabbitmq details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.routeros (2.8.0)"

    #### community.routeros details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "community.sap (1.0.0)"

    #### community.sap details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 7 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.sap_libs (1.4.1)"

    #### community.sap_libs details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.skydive (1.0.0)"

    #### community.skydive details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.sops (1.6.1)"

    #### community.sops details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 2 |
    | filter | 2 |
    | test | 0 |



??? seealso coll-plugin-details "community.vmware (3.6.0)"

    #### community.vmware details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 2 |
    | lookup | 0 |
    | modules | 165 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.windows (1.13.0)"

    #### community.windows details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 85 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "community.zabbix (1.9.3)"

    #### community.zabbix details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "containers.podman (1.10.1)"

    #### containers.podman details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 22 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cyberark.conjur (1.2.0)"

    #### cyberark.conjur details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 1 |
    | modules | 0 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "cyberark.pas (1.0.19)"

    #### cyberark.pas details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "dellemc.enterprise_sonic (2.1.0)"

    #### dellemc.enterprise_sonic details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 28 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "dellemc.openmanage (6.3.0)"

    #### dellemc.openmanage details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 80 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "dellemc.os10 (1.1.1)"

    #### dellemc.os10 details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 9 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "dellemc.os6 (1.0.7)"

    #### dellemc.os6 details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "dellemc.os9 (1.0.4)"

    #### dellemc.os9 details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 3 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "dellemc.powerflex (1.6.0)"

    #### dellemc.powerflex details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "dellemc.unity (1.6.0)"

    #### dellemc.unity details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 17 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "f5networks.f5_modules (1.24.0)"

    #### f5networks.f5_modules details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 3 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 2 |
    | modules | 178 |
    | filter | 2 |
    | test | 0 |



??? seealso coll-plugin-details "fortinet.fortimanager (2.1.7)"

    #### fortinet.fortimanager details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 994 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "fortinet.fortios (2.2.3)"

    #### fortinet.fortios details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 646 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "frr.frr (2.0.2)"

    #### frr.frr details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "gluster.gluster (1.0.2)"

    #### gluster.gluster details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "google.cloud (1.1.3)"

    #### google.cloud details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 170 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "grafana.grafana (1.1.1)"

    #### grafana.grafana details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 8 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "hetzner.hcloud (1.12.0)"

    #### hetzner.hcloud details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 37 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "hpe.nimble (1.1.4)"

    #### hpe.nimble details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 22 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "ibm.qradar (2.1.0)"

    #### ibm.qradar details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 2 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 16 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "ibm.spectrum_virtualize (1.12.0)"

    #### ibm.spectrum_virtualize details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 44 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "infinidat.infinibox (1.3.12)"

    #### infinidat.infinibox details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "infoblox.nios_modules (1.5.0)"

    #### infoblox.nios_modules details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 3 |
    | modules | 21 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "inspur.ispim (1.3.0)"

    #### inspur.ispim details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 126 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "inspur.sm (2.3.0)"

    #### inspur.sm details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 137 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "junipernetworks.junos (4.1.0)"

    #### junipernetworks.junos details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "kubernetes.core (2.4.0)"

    #### kubernetes.core details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 16 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 2 |
    | modules | 19 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "lowlydba.sqlserver (1.3.1)"

    #### lowlydba.sqlserver details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "mellanox.onyx (1.0.0)"

    #### mellanox.onyx details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 37 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "microsoft.ad (1.1.0)"

    #### microsoft.ad details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 11 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "netapp.aws (21.7.0)"

    #### netapp.aws details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "netapp.azure (21.10.0)"

    #### netapp.azure details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "netapp.cloudmanager (21.22.0)"

    #### netapp.cloudmanager details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 13 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "netapp.elementsw (21.7.0)"

    #### netapp.elementsw details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 24 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "netapp.ontap (22.6.0)"

    #### netapp.ontap details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 148 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "netapp.storagegrid (21.11.1)"

    #### netapp.storagegrid details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 19 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "netapp.um_info (21.8.0)"

    #### netapp.um_info details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 10 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "netapp_eseries.santricity (1.4.0)"

    #### netapp_eseries.santricity details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 5 |
    | modules | 55 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "netbox.netbox (3.13.0)"

    #### netbox.netbox details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 1 |
    | modules | 76 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "ngine_io.cloudstack (2.3.0)"

    #### ngine_io.cloudstack details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 53 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "ngine_io.exoscale (1.0.0)"

    #### ngine_io.exoscale details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 2 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "ngine_io.vultr (1.1.3)"

    #### ngine_io.vultr details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 24 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "openstack.cloud (1.10.0)"

    #### openstack.cloud details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 144 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "openvswitch.openvswitch (2.1.1)"

    #### openvswitch.openvswitch details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 4 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "ovirt.ovirt (2.4.1)"

    #### ovirt.ovirt details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 58 |
    | filter | 4 |
    | test | 1 |



??? seealso coll-plugin-details "purestorage.flasharray (1.19.1)"

    #### purestorage.flasharray details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 58 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "purestorage.flashblade (1.11.0)"

    #### purestorage.flashblade details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 47 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "purestorage.fusion (1.4.2)"

    #### purestorage.fusion details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 19 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "sensu.sensu_go (1.13.2)"

    #### sensu.sensu_go details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 1 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 49 |
    | filter | 2 |
    | test | 0 |



??? seealso coll-plugin-details "splunk.es (2.1.0)"

    #### splunk.es details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 4 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 14 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "t_systems_mms.icinga_director (1.33.0)"

    #### t_systems_mms.icinga_director details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 40 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "theforeman.foreman (3.10.0)"

    #### theforeman.foreman details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 1 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 79 |
    | filter | 1 |
    | test | 0 |



??? seealso coll-plugin-details "vmware.vmware_rest (2.3.1)"

    #### vmware.vmware_rest details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 8 |
    | modules | 132 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "vultr.cloud (1.8.0)"

    #### vultr.cloud details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 1 |
    | lookup | 0 |
    | modules | 27 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "vyos.vyos (4.0.2)"

    #### vyos.vyos details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 36 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 0 |
    | modules | 29 |
    | filter | 0 |
    | test | 0 |



??? seealso coll-plugin-details "wti.remote (1.0.4)"

    #### wti.remote details

    
    **plugins**

    | Type | Count |
    | --- | :---: |
    | action | 0 |
    | callback | 0 |
    | inventory | 0 |
    | lookup | 32 |
    | modules | 30 |
    | filter | 0 |
    | test | 0 |


