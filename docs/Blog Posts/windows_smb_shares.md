# Get Windows SMB Shares

## Complete Powershell Module

```
$spec = @{
    options = @{
        name = @{ type = 'str'; required = $false; default = '*' }
    }
    supports_check_mode = $false
}

$module = [Ansible.Basic.AnsibleModule]::Create($args, $spec)

$name = $module.Params.name

$module.Result.info = @{}
$module.Result.changed = $false

$info = @{}
$shares = Get-SmbShare -Name $name

$shares | ForEach-Object {
  $info.add($_.Name, @{})
  $info[$_.Name].add("metadata", $_)

  $access = Get-SmbShareAccess -Name $_.Name
  $info[$_.Name].add("access", $access)
}

$module.Result.info = $info
$module.ExitJson()
```

## Full Response Object Example

```json
{
    "IPC$": {
      "metadata": {
        "CimClass": {
          "CimSuperClassName": null,
          "CimSuperClass": null,
          "CimClassProperties": [
            {
              "Name": "AvailabilityType",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "26",
                    "27",
                    "28",
                    "10",
                    "29"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CachingMode",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "15"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CATimeout",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CompressData",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ConcurrentUserLimit",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ContinuouslyAvailable",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CurrentUsers",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Description",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "EncryptData",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "FolderEnumerationMode",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "16",
                    "17"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "IdentityRemoting",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Infrastructure",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "LeasingMode",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "3",
                    "58",
                    "18"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Name",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, Key, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "key",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                },
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Path",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Scoped",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ScopeName",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, Key, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "key",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                },
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "SecurityDescriptor",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ShadowCopy",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ShareState",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "23",
                    "24",
                    "25"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ShareType",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "SmbInstance",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "9",
                    "10",
                    "56",
                    "57"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Special",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Temporary",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Volume",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            }
          ],
          "CimClassQualifiers": [
            {
              "Name": "ClassVersion",
              "Value": "30",
              "CimType": 14,
              "Flags": "EnableOverride, ToSubclass"
            },
            {
              "Name": "Description",
              "Value": "31",
              "CimType": 14,
              "Flags": "EnableOverride, ToSubclass"
            },
            {
              "Name": "dynamic",
              "Value": true,
              "CimType": 1,
              "Flags": "EnableOverride, ToSubclass"
            },
            {
              "Name": "provider",
              "Value": "smbwmiv2",
              "CimType": 14,
              "Flags": "EnableOverride, ToSubclass"
            }
          ],
          "CimClassMethods": [
            {
              "Name": "CreateShare",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "CachingMode",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 6,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "CATimeout",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 9,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ChangeAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 13,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "CompressData",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 11,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ConcurrentUserLimit",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 4,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ContinuouslyAvailable",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 8,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Description",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 3,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "EncryptData",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 10,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "FolderEnumerationMode",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 5,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "FullAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 12,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "LeasingMode",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 18,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Name",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "NoAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 15,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Path",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ReadAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 14,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "SecurityDescriptor",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 16,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Temporary",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 7,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "CreatedShare",
                  "CimType": 16,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShare",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 17,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            },
            {
              "Name": "GrantAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccessRight",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "RevokeAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "BlockAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "UnblockAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "GetAccessControlEntries",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "EnumerateShares",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "PopulateVolumeProperty",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShare",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Stream",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "EnableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            },
            {
              "Name": "GetShare",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "GetAclNonAdmin",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ShareName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 16,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShare",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 3,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            },
            {
              "Name": "FireShareChangeEvent",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "CATimeout",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 7,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ConcurrentUserLimit",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 10,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "EventType",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Flags",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 8,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Path",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 3,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Remark",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 4,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "SecurityDescriptor",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 5,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ShareName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ShareState",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 6,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Type",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 9,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShare",
            "Path": null
          }
        },
        "CimInstanceProperties": [
          {
            "Name": "AvailabilityType",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CachingMode",
            "Value": 1,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CATimeout",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CompressData",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ConcurrentUserLimit",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ContinuouslyAvailable",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CurrentUsers",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Description",
            "Value": "Remote IPC",
            "CimType": 14,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "EncryptData",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "FolderEnumerationMode",
            "Value": 1,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "IdentityRemoting",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Infrastructure",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "LeasingMode",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Name",
            "Value": "IPC$",
            "CimType": 14,
            "Flags": "Property, Key, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Path",
            "Value": "",
            "CimType": 14,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Scoped",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ScopeName",
            "Value": "*",
            "CimType": 14,
            "Flags": "Property, Key, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "SecurityDescriptor",
            "Value": "O:SYG:SYD:(A;;GA;;;BA)(A;;GA;;;BO)(A;;GA;;;IU)",
            "CimType": 14,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ShadowCopy",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ShareState",
            "Value": 1,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ShareType",
            "Value": 3,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "SmbInstance",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Special",
            "Value": true,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Temporary",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Volume",
            "Value": null,
            "CimType": 14,
            "Flags": "Property, ReadOnly, NotModified, NullValue",
            "IsValueModified": false
          }
        ],
        "CimSystemProperties": {
          "Namespace": "ROOT/Microsoft/Windows/SMB",
          "ServerName": "WIN11-GUEST-2",
          "ClassName": "MSFT_SmbShare",
          "Path": null
        }
      },
      "access": [
        {
          "CimClass": {
            "CimSuperClassName": null,
            "CimSuperClass": null,
            "CimClassProperties": [
              {
                "Name": "AccessControlType",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "1",
                      "2"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccessRight",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1",
                      "2",
                      "3"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccountName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "Name",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "ScopeName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              }
            ],
            "CimClassQualifiers": [
              {
                "Name": "ClassVersion",
                "Value": "7",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              },
              {
                "Name": "Description",
                "Value": "8",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              }
            ],
            "CimClassMethods": [],
            "CimSystemProperties": {
              "Namespace": "ROOT/Microsoft/Windows/SMB",
              "ServerName": "WIN11-GUEST-2",
              "ClassName": "MSFT_SmbShareAccessControlEntry",
              "Path": null
            }
          },
          "CimInstanceProperties": [
            {
              "Name": "AccessControlType",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccessRight",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccountName",
              "Value": "BUILTIN\\Administrators",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "Name",
              "Value": "IPC$",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "ScopeName",
              "Value": "*",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShareAccessControlEntry",
            "Path": null
          },
          "AccessControlType": 0,
          "AccessRight": 0,
          "AccountName": "BUILTIN\\Administrators",
          "Name": "IPC$",
          "ScopeName": "*",
          "PSComputerName": null
        },
        {
          "CimClass": {
            "CimSuperClassName": null,
            "CimSuperClass": null,
            "CimClassProperties": [
              {
                "Name": "AccessControlType",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "1",
                      "2"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccessRight",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1",
                      "2",
                      "3"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccountName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "Name",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "ScopeName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              }
            ],
            "CimClassQualifiers": [
              {
                "Name": "ClassVersion",
                "Value": "7",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              },
              {
                "Name": "Description",
                "Value": "8",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              }
            ],
            "CimClassMethods": [],
            "CimSystemProperties": {
              "Namespace": "ROOT/Microsoft/Windows/SMB",
              "ServerName": "WIN11-GUEST-2",
              "ClassName": "MSFT_SmbShareAccessControlEntry",
              "Path": null
            }
          },
          "CimInstanceProperties": [
            {
              "Name": "AccessControlType",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccessRight",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccountName",
              "Value": "BUILTIN\\Backup Operators",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "Name",
              "Value": "IPC$",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "ScopeName",
              "Value": "*",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShareAccessControlEntry",
            "Path": null
          },
          "AccessControlType": 0,
          "AccessRight": 0,
          "AccountName": "BUILTIN\\Backup Operators",
          "Name": "IPC$",
          "ScopeName": "*",
          "PSComputerName": null
        },
        {
          "CimClass": {
            "CimSuperClassName": null,
            "CimSuperClass": null,
            "CimClassProperties": [
              {
                "Name": "AccessControlType",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "1",
                      "2"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccessRight",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1",
                      "2",
                      "3"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccountName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "Name",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "ScopeName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              }
            ],
            "CimClassQualifiers": [
              {
                "Name": "ClassVersion",
                "Value": "7",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              },
              {
                "Name": "Description",
                "Value": "8",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              }
            ],
            "CimClassMethods": [],
            "CimSystemProperties": {
              "Namespace": "ROOT/Microsoft/Windows/SMB",
              "ServerName": "WIN11-GUEST-2",
              "ClassName": "MSFT_SmbShareAccessControlEntry",
              "Path": null
            }
          },
          "CimInstanceProperties": [
            {
              "Name": "AccessControlType",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccessRight",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccountName",
              "Value": "NT AUTHORITY\\INTERACTIVE",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "Name",
              "Value": "IPC$",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "ScopeName",
              "Value": "*",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShareAccessControlEntry",
            "Path": null
          },
          "AccessControlType": 0,
          "AccessRight": 0,
          "AccountName": "NT AUTHORITY\\INTERACTIVE",
          "Name": "IPC$",
          "ScopeName": "*",
          "PSComputerName": null
        }
      ]
    },
    "C$": {
      "metadata": {
        "CimClass": {
          "CimSuperClassName": null,
          "CimSuperClass": null,
          "CimClassProperties": [
            {
              "Name": "AvailabilityType",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "26",
                    "27",
                    "28",
                    "10",
                    "29"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CachingMode",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "15"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CATimeout",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CompressData",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ConcurrentUserLimit",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ContinuouslyAvailable",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CurrentUsers",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Description",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "EncryptData",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "FolderEnumerationMode",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "16",
                    "17"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "IdentityRemoting",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Infrastructure",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "LeasingMode",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "3",
                    "58",
                    "18"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Name",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, Key, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "key",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                },
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Path",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Scoped",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ScopeName",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, Key, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "key",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                },
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "SecurityDescriptor",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ShadowCopy",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ShareState",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "23",
                    "24",
                    "25"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ShareType",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "SmbInstance",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "9",
                    "10",
                    "56",
                    "57"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Special",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Temporary",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Volume",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            }
          ],
          "CimClassQualifiers": [
            {
              "Name": "ClassVersion",
              "Value": "30",
              "CimType": 14,
              "Flags": "EnableOverride, ToSubclass"
            },
            {
              "Name": "Description",
              "Value": "31",
              "CimType": 14,
              "Flags": "EnableOverride, ToSubclass"
            },
            {
              "Name": "dynamic",
              "Value": true,
              "CimType": 1,
              "Flags": "EnableOverride, ToSubclass"
            },
            {
              "Name": "provider",
              "Value": "smbwmiv2",
              "CimType": 14,
              "Flags": "EnableOverride, ToSubclass"
            }
          ],
          "CimClassMethods": [
            {
              "Name": "CreateShare",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "CachingMode",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 6,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "CATimeout",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 9,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ChangeAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 13,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "CompressData",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 11,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ConcurrentUserLimit",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 4,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ContinuouslyAvailable",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 8,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Description",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 3,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "EncryptData",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 10,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "FolderEnumerationMode",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 5,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "FullAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 12,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "LeasingMode",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 18,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Name",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "NoAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 15,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Path",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ReadAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 14,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "SecurityDescriptor",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 16,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Temporary",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 7,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "CreatedShare",
                  "CimType": 16,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShare",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 17,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            },
            {
              "Name": "GrantAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccessRight",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "RevokeAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "BlockAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "UnblockAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "GetAccessControlEntries",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "EnumerateShares",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "PopulateVolumeProperty",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShare",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Stream",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "EnableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            },
            {
              "Name": "GetShare",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "GetAclNonAdmin",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ShareName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 16,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShare",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 3,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            },
            {
              "Name": "FireShareChangeEvent",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "CATimeout",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 7,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ConcurrentUserLimit",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 10,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "EventType",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Flags",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 8,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Path",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 3,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Remark",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 4,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "SecurityDescriptor",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 5,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ShareName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ShareState",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 6,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Type",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 9,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShare",
            "Path": null
          }
        },
        "CimInstanceProperties": [
          {
            "Name": "AvailabilityType",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CachingMode",
            "Value": 1,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CATimeout",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CompressData",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ConcurrentUserLimit",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ContinuouslyAvailable",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CurrentUsers",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Description",
            "Value": "Default share",
            "CimType": 14,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "EncryptData",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "FolderEnumerationMode",
            "Value": 1,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "IdentityRemoting",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Infrastructure",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "LeasingMode",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Name",
            "Value": "C$",
            "CimType": 14,
            "Flags": "Property, Key, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Path",
            "Value": "C:\\",
            "CimType": 14,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Scoped",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ScopeName",
            "Value": "*",
            "CimType": 14,
            "Flags": "Property, Key, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "SecurityDescriptor",
            "Value": "O:SYG:SYD:(A;;GA;;;BA)(A;;GA;;;BO)(A;;GA;;;IU)",
            "CimType": 14,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ShadowCopy",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ShareState",
            "Value": 1,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ShareType",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "SmbInstance",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Special",
            "Value": true,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Temporary",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Volume",
            "Value": "\\\\?\\Volume{6ae97b2b-5db5-463c-8d09-e2c5c82ca271}\\",
            "CimType": 14,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          }
        ],
        "CimSystemProperties": {
          "Namespace": "ROOT/Microsoft/Windows/SMB",
          "ServerName": "WIN11-GUEST-2",
          "ClassName": "MSFT_SmbShare",
          "Path": null
        }
      },
      "access": [
        {
          "CimClass": {
            "CimSuperClassName": null,
            "CimSuperClass": null,
            "CimClassProperties": [
              {
                "Name": "AccessControlType",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "1",
                      "2"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccessRight",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1",
                      "2",
                      "3"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccountName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "Name",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "ScopeName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              }
            ],
            "CimClassQualifiers": [
              {
                "Name": "ClassVersion",
                "Value": "7",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              },
              {
                "Name": "Description",
                "Value": "8",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              }
            ],
            "CimClassMethods": [],
            "CimSystemProperties": {
              "Namespace": "ROOT/Microsoft/Windows/SMB",
              "ServerName": "WIN11-GUEST-2",
              "ClassName": "MSFT_SmbShareAccessControlEntry",
              "Path": null
            }
          },
          "CimInstanceProperties": [
            {
              "Name": "AccessControlType",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccessRight",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccountName",
              "Value": "BUILTIN\\Administrators",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "Name",
              "Value": "C$",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "ScopeName",
              "Value": "*",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShareAccessControlEntry",
            "Path": null
          },
          "AccessControlType": 0,
          "AccessRight": 0,
          "AccountName": "BUILTIN\\Administrators",
          "Name": "C$",
          "ScopeName": "*",
          "PSComputerName": null
        },
        {
          "CimClass": {
            "CimSuperClassName": null,
            "CimSuperClass": null,
            "CimClassProperties": [
              {
                "Name": "AccessControlType",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "1",
                      "2"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccessRight",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1",
                      "2",
                      "3"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccountName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "Name",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "ScopeName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              }
            ],
            "CimClassQualifiers": [
              {
                "Name": "ClassVersion",
                "Value": "7",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              },
              {
                "Name": "Description",
                "Value": "8",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              }
            ],
            "CimClassMethods": [],
            "CimSystemProperties": {
              "Namespace": "ROOT/Microsoft/Windows/SMB",
              "ServerName": "WIN11-GUEST-2",
              "ClassName": "MSFT_SmbShareAccessControlEntry",
              "Path": null
            }
          },
          "CimInstanceProperties": [
            {
              "Name": "AccessControlType",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccessRight",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccountName",
              "Value": "BUILTIN\\Backup Operators",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "Name",
              "Value": "C$",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "ScopeName",
              "Value": "*",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShareAccessControlEntry",
            "Path": null
          },
          "AccessControlType": 0,
          "AccessRight": 0,
          "AccountName": "BUILTIN\\Backup Operators",
          "Name": "C$",
          "ScopeName": "*",
          "PSComputerName": null
        },
        {
          "CimClass": {
            "CimSuperClassName": null,
            "CimSuperClass": null,
            "CimClassProperties": [
              {
                "Name": "AccessControlType",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "1",
                      "2"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccessRight",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1",
                      "2",
                      "3"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccountName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "Name",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "ScopeName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              }
            ],
            "CimClassQualifiers": [
              {
                "Name": "ClassVersion",
                "Value": "7",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              },
              {
                "Name": "Description",
                "Value": "8",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              }
            ],
            "CimClassMethods": [],
            "CimSystemProperties": {
              "Namespace": "ROOT/Microsoft/Windows/SMB",
              "ServerName": "WIN11-GUEST-2",
              "ClassName": "MSFT_SmbShareAccessControlEntry",
              "Path": null
            }
          },
          "CimInstanceProperties": [
            {
              "Name": "AccessControlType",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccessRight",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccountName",
              "Value": "NT AUTHORITY\\INTERACTIVE",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "Name",
              "Value": "C$",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "ScopeName",
              "Value": "*",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShareAccessControlEntry",
            "Path": null
          },
          "AccessControlType": 0,
          "AccessRight": 0,
          "AccountName": "NT AUTHORITY\\INTERACTIVE",
          "Name": "C$",
          "ScopeName": "*",
          "PSComputerName": null
        }
      ]
    },
    "ADMIN$": {
      "metadata": {
        "CimClass": {
          "CimSuperClassName": null,
          "CimSuperClass": null,
          "CimClassProperties": [
            {
              "Name": "AvailabilityType",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "26",
                    "27",
                    "28",
                    "10",
                    "29"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CachingMode",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "15"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CATimeout",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CompressData",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ConcurrentUserLimit",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ContinuouslyAvailable",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "CurrentUsers",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Description",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "EncryptData",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "FolderEnumerationMode",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "16",
                    "17"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "IdentityRemoting",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Infrastructure",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "LeasingMode",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "3",
                    "58",
                    "18"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Name",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, Key, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "key",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                },
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Path",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Scoped",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ScopeName",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, Key, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "key",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                },
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "SecurityDescriptor",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "write",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ShadowCopy",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ShareState",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "23",
                    "24",
                    "25"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "ShareType",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "SmbInstance",
              "Value": null,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "ValueMap",
                  "Value": [
                    "0",
                    "1",
                    "2",
                    "3"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                },
                {
                  "Name": "Values",
                  "Value": [
                    "9",
                    "10",
                    "56",
                    "57"
                  ],
                  "CimType": 30,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Special",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Temporary",
              "Value": null,
              "CimType": 1,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            },
            {
              "Name": "Volume",
              "Value": null,
              "CimType": 14,
              "Flags": "Property, ReadOnly, NullValue",
              "Qualifiers": [
                {
                  "Name": "read",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, ToSubclass"
                }
              ],
              "ReferenceClassName": null
            }
          ],
          "CimClassQualifiers": [
            {
              "Name": "ClassVersion",
              "Value": "30",
              "CimType": 14,
              "Flags": "EnableOverride, ToSubclass"
            },
            {
              "Name": "Description",
              "Value": "31",
              "CimType": 14,
              "Flags": "EnableOverride, ToSubclass"
            },
            {
              "Name": "dynamic",
              "Value": true,
              "CimType": 1,
              "Flags": "EnableOverride, ToSubclass"
            },
            {
              "Name": "provider",
              "Value": "smbwmiv2",
              "CimType": 14,
              "Flags": "EnableOverride, ToSubclass"
            }
          ],
          "CimClassMethods": [
            {
              "Name": "CreateShare",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "CachingMode",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 6,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "CATimeout",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 9,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ChangeAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 13,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "CompressData",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 11,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ConcurrentUserLimit",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 4,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ContinuouslyAvailable",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 8,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Description",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 3,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "EncryptData",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 10,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "FolderEnumerationMode",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 5,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "FullAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 12,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "LeasingMode",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 18,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Name",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "NoAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 15,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Path",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ReadAccess",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 14,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "SecurityDescriptor",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 16,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Temporary",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 7,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "CreatedShare",
                  "CimType": 16,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShare",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 17,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            },
            {
              "Name": "GrantAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccessRight",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "RevokeAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "BlockAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "UnblockAccess",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "AccountName",
                  "CimType": 30,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "GetAccessControlEntries",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShareAccessControlEntry",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                }
              ]
            },
            {
              "Name": "EnumerateShares",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "PopulateVolumeProperty",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 32,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShare",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Stream",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "EnableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            },
            {
              "Name": "GetShare",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "GetAclNonAdmin",
                  "CimType": 1,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ShareName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Output",
                  "CimType": 16,
                  "Qualifiers": [
                    {
                      "Name": "EmbeddedInstance",
                      "Value": "MSFT_SmbShare",
                      "CimType": 14,
                      "Flags": "EnableOverride, ToSubclass"
                    },
                    {
                      "Name": "ID",
                      "Value": 3,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "Out",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            },
            {
              "Name": "FireShareChangeEvent",
              "ReturnType": 6,
              "Parameters": [
                {
                  "Name": "CATimeout",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 7,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ConcurrentUserLimit",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 10,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "EventType",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 0,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Flags",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 8,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Path",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 3,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Remark",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 4,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ScopeName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 1,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "SecurityDescriptor",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 5,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ShareName",
                  "CimType": 14,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 2,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "ShareState",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 6,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                },
                {
                  "Name": "Type",
                  "CimType": 6,
                  "Qualifiers": [
                    {
                      "Name": "ID",
                      "Value": 9,
                      "CimType": 7,
                      "Flags": "DisableOverride, ToSubclass"
                    },
                    {
                      "Name": "In",
                      "Value": true,
                      "CimType": 1,
                      "Flags": "DisableOverride, ToSubclass"
                    }
                  ],
                  "ReferenceClassName": null
                }
              ],
              "Qualifiers": [
                {
                  "Name": "implemented",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "EnableOverride, Restricted"
                },
                {
                  "Name": "static",
                  "Value": true,
                  "CimType": 1,
                  "Flags": "DisableOverride, ToSubclass"
                }
              ]
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShare",
            "Path": null
          }
        },
        "CimInstanceProperties": [
          {
            "Name": "AvailabilityType",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CachingMode",
            "Value": 1,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CATimeout",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CompressData",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ConcurrentUserLimit",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ContinuouslyAvailable",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "CurrentUsers",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Description",
            "Value": "Remote Admin",
            "CimType": 14,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "EncryptData",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "FolderEnumerationMode",
            "Value": 1,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "IdentityRemoting",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Infrastructure",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "LeasingMode",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Name",
            "Value": "ADMIN$",
            "CimType": 14,
            "Flags": "Property, Key, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Path",
            "Value": "C:\\Windows",
            "CimType": 14,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Scoped",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ScopeName",
            "Value": "*",
            "CimType": 14,
            "Flags": "Property, Key, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "SecurityDescriptor",
            "Value": "O:SYG:SYD:(A;;GA;;;BA)(A;;GA;;;BO)(A;;GA;;;IU)",
            "CimType": 14,
            "Flags": "Property, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ShadowCopy",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ShareState",
            "Value": 1,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "ShareType",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "SmbInstance",
            "Value": 0,
            "CimType": 6,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Special",
            "Value": true,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Temporary",
            "Value": false,
            "CimType": 1,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          },
          {
            "Name": "Volume",
            "Value": "\\\\?\\Volume{6ae97b2b-5db5-463c-8d09-e2c5c82ca271}\\",
            "CimType": 14,
            "Flags": "Property, ReadOnly, NotModified",
            "IsValueModified": false
          }
        ],
        "CimSystemProperties": {
          "Namespace": "ROOT/Microsoft/Windows/SMB",
          "ServerName": "WIN11-GUEST-2",
          "ClassName": "MSFT_SmbShare",
          "Path": null
        }
      },
      "access": [
        {
          "CimClass": {
            "CimSuperClassName": null,
            "CimSuperClass": null,
            "CimClassProperties": [
              {
                "Name": "AccessControlType",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "1",
                      "2"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccessRight",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1",
                      "2",
                      "3"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccountName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "Name",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "ScopeName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              }
            ],
            "CimClassQualifiers": [
              {
                "Name": "ClassVersion",
                "Value": "7",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              },
              {
                "Name": "Description",
                "Value": "8",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              }
            ],
            "CimClassMethods": [],
            "CimSystemProperties": {
              "Namespace": "ROOT/Microsoft/Windows/SMB",
              "ServerName": "WIN11-GUEST-2",
              "ClassName": "MSFT_SmbShareAccessControlEntry",
              "Path": null
            }
          },
          "CimInstanceProperties": [
            {
              "Name": "AccessControlType",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccessRight",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccountName",
              "Value": "BUILTIN\\Administrators",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "Name",
              "Value": "ADMIN$",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "ScopeName",
              "Value": "*",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShareAccessControlEntry",
            "Path": null
          },
          "AccessControlType": 0,
          "AccessRight": 0,
          "AccountName": "BUILTIN\\Administrators",
          "Name": "ADMIN$",
          "ScopeName": "*",
          "PSComputerName": null
        },
        {
          "CimClass": {
            "CimSuperClassName": null,
            "CimSuperClass": null,
            "CimClassProperties": [
              {
                "Name": "AccessControlType",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "1",
                      "2"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccessRight",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1",
                      "2",
                      "3"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccountName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "Name",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "ScopeName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              }
            ],
            "CimClassQualifiers": [
              {
                "Name": "ClassVersion",
                "Value": "7",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              },
              {
                "Name": "Description",
                "Value": "8",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              }
            ],
            "CimClassMethods": [],
            "CimSystemProperties": {
              "Namespace": "ROOT/Microsoft/Windows/SMB",
              "ServerName": "WIN11-GUEST-2",
              "ClassName": "MSFT_SmbShareAccessControlEntry",
              "Path": null
            }
          },
          "CimInstanceProperties": [
            {
              "Name": "AccessControlType",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccessRight",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccountName",
              "Value": "BUILTIN\\Backup Operators",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "Name",
              "Value": "ADMIN$",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "ScopeName",
              "Value": "*",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShareAccessControlEntry",
            "Path": null
          },
          "AccessControlType": 0,
          "AccessRight": 0,
          "AccountName": "BUILTIN\\Backup Operators",
          "Name": "ADMIN$",
          "ScopeName": "*",
          "PSComputerName": null
        },
        {
          "CimClass": {
            "CimSuperClassName": null,
            "CimSuperClass": null,
            "CimClassProperties": [
              {
                "Name": "AccessControlType",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "1",
                      "2"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccessRight",
                "Value": null,
                "CimType": 6,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "ValueMap",
                    "Value": [
                      "0",
                      "1",
                      "2",
                      "3"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  },
                  {
                    "Name": "Values",
                    "Value": [
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "CimType": 30,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "AccountName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "Name",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              },
              {
                "Name": "ScopeName",
                "Value": null,
                "CimType": 14,
                "Flags": "Property, ReadOnly, NullValue",
                "Qualifiers": [
                  {
                    "Name": "read",
                    "Value": true,
                    "CimType": 1,
                    "Flags": "EnableOverride, ToSubclass"
                  }
                ],
                "ReferenceClassName": null
              }
            ],
            "CimClassQualifiers": [
              {
                "Name": "ClassVersion",
                "Value": "7",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              },
              {
                "Name": "Description",
                "Value": "8",
                "CimType": 14,
                "Flags": "EnableOverride, ToSubclass"
              }
            ],
            "CimClassMethods": [],
            "CimSystemProperties": {
              "Namespace": "ROOT/Microsoft/Windows/SMB",
              "ServerName": "WIN11-GUEST-2",
              "ClassName": "MSFT_SmbShareAccessControlEntry",
              "Path": null
            }
          },
          "CimInstanceProperties": [
            {
              "Name": "AccessControlType",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccessRight",
              "Value": 0,
              "CimType": 6,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "AccountName",
              "Value": "NT AUTHORITY\\INTERACTIVE",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "Name",
              "Value": "ADMIN$",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            },
            {
              "Name": "ScopeName",
              "Value": "*",
              "CimType": 14,
              "Flags": "Property, ReadOnly, NotModified",
              "IsValueModified": false
            }
          ],
          "CimSystemProperties": {
            "Namespace": "ROOT/Microsoft/Windows/SMB",
            "ServerName": "WIN11-GUEST-2",
            "ClassName": "MSFT_SmbShareAccessControlEntry",
            "Path": null
          },
          "AccessControlType": 0,
          "AccessRight": 0,
          "AccountName": "NT AUTHORITY\\INTERACTIVE",
          "Name": "ADMIN$",
          "ScopeName": "*",
          "PSComputerName": null
        }
      ]
    }
  }
```