export const MY_CONTRACT_ADDRESS = "0x3b9784fBfF2bc38Be2F7c34CC7a3E810b2264123";
export const abi = [
{
	"deploy": {
		"VM:-": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"main:1": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"ropsten:3": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"rinkeby:4": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"kovan:42": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"goerli:5": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"Custom": {
			"linkReferences": {},
			"autoDeployLib": true
		}
	},
	"data": {
		"bytecode": {
			"functionDebugData": {
				"@_13": {
					"entryPoint": null,
					"id": 13,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"abi_decode_tuple_t_string_memory_ptr_fromMemory": {
					"entryPoint": 88,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"array_dataslot_string_storage": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"clean_up_bytearray_end_slots_string_storage": {
					"entryPoint": 347,
					"id": null,
					"parameterSlots": 3,
					"returnSlots": 0
				},
				"copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage": {
					"entryPoint": 426,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"extract_byte_array_length": {
					"entryPoint": 289,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"extract_used_part_and_set_length_of_short_byte_array": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"panic_error_0x41": {
					"entryPoint": 66,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				}
			},
			"generatedSources": [
				{
					"ast": {
						"nodeType": "YulBlock",
						"src": "0:3779:1",
						"statements": [
							{
								"nodeType": "YulBlock",
								"src": "6:3:1",
								"statements": []
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "46:95:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "63:1:1",
														"type": "",
														"value": "0"
													},
													{
														"arguments": [
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "70:3:1",
																"type": "",
																"value": "224"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "75:10:1",
																"type": "",
																"value": "0x4e487b71"
															}
														],
														"functionName": {
															"name": "shl",
															"nodeType": "YulIdentifier",
															"src": "66:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "66:20:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "56:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "56:31:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "56:31:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "103:1:1",
														"type": "",
														"value": "4"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "106:4:1",
														"type": "",
														"value": "0x41"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "96:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "96:15:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "96:15:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "127:1:1",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "130:4:1",
														"type": "",
														"value": "0x24"
													}
												],
												"functionName": {
													"name": "revert",
													"nodeType": "YulIdentifier",
													"src": "120:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "120:15:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "120:15:1"
										}
									]
								},
								"name": "panic_error_0x41",
								"nodeType": "YulFunctionDefinition",
								"src": "14:127:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "237:951:1",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "247:12:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "257:2:1",
												"type": "",
												"value": "32"
											},
											"variables": [
												{
													"name": "_1",
													"nodeType": "YulTypedName",
													"src": "251:2:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "304:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "313:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "316:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "306:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "306:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "306:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nodeType": "YulIdentifier",
																"src": "279:7:1"
															},
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "288:9:1"
															}
														],
														"functionName": {
															"name": "sub",
															"nodeType": "YulIdentifier",
															"src": "275:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "275:23:1"
													},
													{
														"name": "_1",
														"nodeType": "YulIdentifier",
														"src": "300:2:1"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "271:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "271:32:1"
											},
											"nodeType": "YulIf",
											"src": "268:52:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "329:30:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "349:9:1"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "343:5:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "343:16:1"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "333:6:1",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "368:28:1",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "386:2:1",
																"type": "",
																"value": "64"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "390:1:1",
																"type": "",
																"value": "1"
															}
														],
														"functionName": {
															"name": "shl",
															"nodeType": "YulIdentifier",
															"src": "382:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "382:10:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "394:1:1",
														"type": "",
														"value": "1"
													}
												],
												"functionName": {
													"name": "sub",
													"nodeType": "YulIdentifier",
													"src": "378:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "378:18:1"
											},
											"variables": [
												{
													"name": "_2",
													"nodeType": "YulTypedName",
													"src": "372:2:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "423:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "432:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "435:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "425:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "425:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "425:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "411:6:1"
													},
													{
														"name": "_2",
														"nodeType": "YulIdentifier",
														"src": "419:2:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "408:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "408:14:1"
											},
											"nodeType": "YulIf",
											"src": "405:34:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "448:32:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "462:9:1"
													},
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "473:6:1"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "458:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "458:22:1"
											},
											"variables": [
												{
													"name": "_3",
													"nodeType": "YulTypedName",
													"src": "452:2:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "528:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "537:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "540:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "530:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "530:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "530:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "_3",
																		"nodeType": "YulIdentifier",
																		"src": "507:2:1"
																	},
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "511:4:1",
																		"type": "",
																		"value": "0x1f"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nodeType": "YulIdentifier",
																	"src": "503:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "503:13:1"
															},
															{
																"name": "dataEnd",
																"nodeType": "YulIdentifier",
																"src": "518:7:1"
															}
														],
														"functionName": {
															"name": "slt",
															"nodeType": "YulIdentifier",
															"src": "499:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "499:27:1"
													}
												],
												"functionName": {
													"name": "iszero",
													"nodeType": "YulIdentifier",
													"src": "492:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "492:35:1"
											},
											"nodeType": "YulIf",
											"src": "489:55:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "553:19:1",
											"value": {
												"arguments": [
													{
														"name": "_3",
														"nodeType": "YulIdentifier",
														"src": "569:2:1"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "563:5:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "563:9:1"
											},
											"variables": [
												{
													"name": "_4",
													"nodeType": "YulTypedName",
													"src": "557:2:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "595:22:1",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x41",
																"nodeType": "YulIdentifier",
																"src": "597:16:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "597:18:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "597:18:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "_4",
														"nodeType": "YulIdentifier",
														"src": "587:2:1"
													},
													{
														"name": "_2",
														"nodeType": "YulIdentifier",
														"src": "591:2:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "584:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "584:10:1"
											},
											"nodeType": "YulIf",
											"src": "581:36:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "626:17:1",
											"value": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "640:2:1",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "not",
													"nodeType": "YulIdentifier",
													"src": "636:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "636:7:1"
											},
											"variables": [
												{
													"name": "_5",
													"nodeType": "YulTypedName",
													"src": "630:2:1",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "652:23:1",
											"value": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "672:2:1",
														"type": "",
														"value": "64"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "666:5:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "666:9:1"
											},
											"variables": [
												{
													"name": "memPtr",
													"nodeType": "YulTypedName",
													"src": "656:6:1",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "684:71:1",
											"value": {
												"arguments": [
													{
														"name": "memPtr",
														"nodeType": "YulIdentifier",
														"src": "706:6:1"
													},
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"arguments": [
																			{
																				"arguments": [
																					{
																						"name": "_4",
																						"nodeType": "YulIdentifier",
																						"src": "730:2:1"
																					},
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "734:4:1",
																						"type": "",
																						"value": "0x1f"
																					}
																				],
																				"functionName": {
																					"name": "add",
																					"nodeType": "YulIdentifier",
																					"src": "726:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "726:13:1"
																			},
																			{
																				"name": "_5",
																				"nodeType": "YulIdentifier",
																				"src": "741:2:1"
																			}
																		],
																		"functionName": {
																			"name": "and",
																			"nodeType": "YulIdentifier",
																			"src": "722:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "722:22:1"
																	},
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "746:2:1",
																		"type": "",
																		"value": "63"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nodeType": "YulIdentifier",
																	"src": "718:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "718:31:1"
															},
															{
																"name": "_5",
																"nodeType": "YulIdentifier",
																"src": "751:2:1"
															}
														],
														"functionName": {
															"name": "and",
															"nodeType": "YulIdentifier",
															"src": "714:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "714:40:1"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "702:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "702:53:1"
											},
											"variables": [
												{
													"name": "newFreePtr",
													"nodeType": "YulTypedName",
													"src": "688:10:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "814:22:1",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x41",
																"nodeType": "YulIdentifier",
																"src": "816:16:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "816:18:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "816:18:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "newFreePtr",
																"nodeType": "YulIdentifier",
																"src": "773:10:1"
															},
															{
																"name": "_2",
																"nodeType": "YulIdentifier",
																"src": "785:2:1"
															}
														],
														"functionName": {
															"name": "gt",
															"nodeType": "YulIdentifier",
															"src": "770:2:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "770:18:1"
													},
													{
														"arguments": [
															{
																"name": "newFreePtr",
																"nodeType": "YulIdentifier",
																"src": "793:10:1"
															},
															{
																"name": "memPtr",
																"nodeType": "YulIdentifier",
																"src": "805:6:1"
															}
														],
														"functionName": {
															"name": "lt",
															"nodeType": "YulIdentifier",
															"src": "790:2:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "790:22:1"
													}
												],
												"functionName": {
													"name": "or",
													"nodeType": "YulIdentifier",
													"src": "767:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "767:46:1"
											},
											"nodeType": "YulIf",
											"src": "764:72:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "852:2:1",
														"type": "",
														"value": "64"
													},
													{
														"name": "newFreePtr",
														"nodeType": "YulIdentifier",
														"src": "856:10:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "845:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "845:22:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "845:22:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "memPtr",
														"nodeType": "YulIdentifier",
														"src": "883:6:1"
													},
													{
														"name": "_4",
														"nodeType": "YulIdentifier",
														"src": "891:2:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "876:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "876:18:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "876:18:1"
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "940:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "949:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "952:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "942:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "942:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "942:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "_3",
																		"nodeType": "YulIdentifier",
																		"src": "917:2:1"
																	},
																	{
																		"name": "_4",
																		"nodeType": "YulIdentifier",
																		"src": "921:2:1"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nodeType": "YulIdentifier",
																	"src": "913:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "913:11:1"
															},
															{
																"name": "_1",
																"nodeType": "YulIdentifier",
																"src": "926:2:1"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "909:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "909:20:1"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "931:7:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "906:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "906:33:1"
											},
											"nodeType": "YulIf",
											"src": "903:53:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "965:10:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "974:1:1",
												"type": "",
												"value": "0"
											},
											"variables": [
												{
													"name": "i",
													"nodeType": "YulTypedName",
													"src": "969:1:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1030:83:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"arguments": [
																		{
																			"arguments": [
																				{
																					"name": "memPtr",
																					"nodeType": "YulIdentifier",
																					"src": "1059:6:1"
																				},
																				{
																					"name": "i",
																					"nodeType": "YulIdentifier",
																					"src": "1067:1:1"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "1055:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "1055:14:1"
																		},
																		{
																			"name": "_1",
																			"nodeType": "YulIdentifier",
																			"src": "1071:2:1"
																		}
																	],
																	"functionName": {
																		"name": "add",
																		"nodeType": "YulIdentifier",
																		"src": "1051:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "1051:23:1"
																},
																{
																	"arguments": [
																		{
																			"arguments": [
																				{
																					"arguments": [
																						{
																							"name": "_3",
																							"nodeType": "YulIdentifier",
																							"src": "1090:2:1"
																						},
																						{
																							"name": "i",
																							"nodeType": "YulIdentifier",
																							"src": "1094:1:1"
																						}
																					],
																					"functionName": {
																						"name": "add",
																						"nodeType": "YulIdentifier",
																						"src": "1086:3:1"
																					},
																					"nodeType": "YulFunctionCall",
																					"src": "1086:10:1"
																				},
																				{
																					"name": "_1",
																					"nodeType": "YulIdentifier",
																					"src": "1098:2:1"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "1082:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "1082:19:1"
																		}
																	],
																	"functionName": {
																		"name": "mload",
																		"nodeType": "YulIdentifier",
																		"src": "1076:5:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "1076:26:1"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "1044:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1044:59:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1044:59:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "i",
														"nodeType": "YulIdentifier",
														"src": "995:1:1"
													},
													{
														"name": "_4",
														"nodeType": "YulIdentifier",
														"src": "998:2:1"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "992:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "992:9:1"
											},
											"nodeType": "YulForLoop",
											"post": {
												"nodeType": "YulBlock",
												"src": "1002:19:1",
												"statements": [
													{
														"nodeType": "YulAssignment",
														"src": "1004:15:1",
														"value": {
															"arguments": [
																{
																	"name": "i",
																	"nodeType": "YulIdentifier",
																	"src": "1013:1:1"
																},
																{
																	"name": "_1",
																	"nodeType": "YulIdentifier",
																	"src": "1016:2:1"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "1009:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1009:10:1"
														},
														"variableNames": [
															{
																"name": "i",
																"nodeType": "YulIdentifier",
																"src": "1004:1:1"
															}
														]
													}
												]
											},
											"pre": {
												"nodeType": "YulBlock",
												"src": "988:3:1",
												"statements": []
											},
											"src": "984:129:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "memPtr",
																		"nodeType": "YulIdentifier",
																		"src": "1137:6:1"
																	},
																	{
																		"name": "_4",
																		"nodeType": "YulIdentifier",
																		"src": "1145:2:1"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nodeType": "YulIdentifier",
																	"src": "1133:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1133:15:1"
															},
															{
																"name": "_1",
																"nodeType": "YulIdentifier",
																"src": "1150:2:1"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "1129:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1129:24:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1155:1:1",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "1122:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1122:35:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "1122:35:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "1166:16:1",
											"value": {
												"name": "memPtr",
												"nodeType": "YulIdentifier",
												"src": "1176:6:1"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "1166:6:1"
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_string_memory_ptr_fromMemory",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "203:9:1",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nodeType": "YulTypedName",
										"src": "214:7:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "226:6:1",
										"type": ""
									}
								],
								"src": "146:1042:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1248:325:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "1258:22:1",
											"value": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1272:1:1",
														"type": "",
														"value": "1"
													},
													{
														"name": "data",
														"nodeType": "YulIdentifier",
														"src": "1275:4:1"
													}
												],
												"functionName": {
													"name": "shr",
													"nodeType": "YulIdentifier",
													"src": "1268:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1268:12:1"
											},
											"variableNames": [
												{
													"name": "length",
													"nodeType": "YulIdentifier",
													"src": "1258:6:1"
												}
											]
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "1289:38:1",
											"value": {
												"arguments": [
													{
														"name": "data",
														"nodeType": "YulIdentifier",
														"src": "1319:4:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1325:1:1",
														"type": "",
														"value": "1"
													}
												],
												"functionName": {
													"name": "and",
													"nodeType": "YulIdentifier",
													"src": "1315:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1315:12:1"
											},
											"variables": [
												{
													"name": "outOfPlaceEncoding",
													"nodeType": "YulTypedName",
													"src": "1293:18:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1366:31:1",
												"statements": [
													{
														"nodeType": "YulAssignment",
														"src": "1368:27:1",
														"value": {
															"arguments": [
																{
																	"name": "length",
																	"nodeType": "YulIdentifier",
																	"src": "1382:6:1"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1390:4:1",
																	"type": "",
																	"value": "0x7f"
																}
															],
															"functionName": {
																"name": "and",
																"nodeType": "YulIdentifier",
																"src": "1378:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1378:17:1"
														},
														"variableNames": [
															{
																"name": "length",
																"nodeType": "YulIdentifier",
																"src": "1368:6:1"
															}
														]
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "outOfPlaceEncoding",
														"nodeType": "YulIdentifier",
														"src": "1346:18:1"
													}
												],
												"functionName": {
													"name": "iszero",
													"nodeType": "YulIdentifier",
													"src": "1339:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1339:26:1"
											},
											"nodeType": "YulIf",
											"src": "1336:61:1"
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1456:111:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1477:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"arguments": [
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "1484:3:1",
																			"type": "",
																			"value": "224"
																		},
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "1489:10:1",
																			"type": "",
																			"value": "0x4e487b71"
																		}
																	],
																	"functionName": {
																		"name": "shl",
																		"nodeType": "YulIdentifier",
																		"src": "1480:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "1480:20:1"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "1470:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1470:31:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1470:31:1"
													},
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1521:1:1",
																	"type": "",
																	"value": "4"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1524:4:1",
																	"type": "",
																	"value": "0x22"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "1514:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1514:15:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1514:15:1"
													},
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1549:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1552:4:1",
																	"type": "",
																	"value": "0x24"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "1542:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1542:15:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1542:15:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "outOfPlaceEncoding",
														"nodeType": "YulIdentifier",
														"src": "1412:18:1"
													},
													{
														"arguments": [
															{
																"name": "length",
																"nodeType": "YulIdentifier",
																"src": "1435:6:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "1443:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "lt",
															"nodeType": "YulIdentifier",
															"src": "1432:2:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1432:14:1"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "1409:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1409:38:1"
											},
											"nodeType": "YulIf",
											"src": "1406:161:1"
										}
									]
								},
								"name": "extract_byte_array_length",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "data",
										"nodeType": "YulTypedName",
										"src": "1228:4:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "length",
										"nodeType": "YulTypedName",
										"src": "1237:6:1",
										"type": ""
									}
								],
								"src": "1193:380:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1634:65:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1651:1:1",
														"type": "",
														"value": "0"
													},
													{
														"name": "ptr",
														"nodeType": "YulIdentifier",
														"src": "1654:3:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "1644:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1644:14:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "1644:14:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "1667:26:1",
											"value": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1685:1:1",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1688:4:1",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "keccak256",
													"nodeType": "YulIdentifier",
													"src": "1675:9:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1675:18:1"
											},
											"variableNames": [
												{
													"name": "data",
													"nodeType": "YulIdentifier",
													"src": "1667:4:1"
												}
											]
										}
									]
								},
								"name": "array_dataslot_string_storage",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "ptr",
										"nodeType": "YulTypedName",
										"src": "1617:3:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "data",
										"nodeType": "YulTypedName",
										"src": "1625:4:1",
										"type": ""
									}
								],
								"src": "1578:121:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1785:464:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1818:425:1",
												"statements": [
													{
														"nodeType": "YulVariableDeclaration",
														"src": "1832:11:1",
														"value": {
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1842:1:1",
															"type": "",
															"value": "0"
														},
														"variables": [
															{
																"name": "_1",
																"nodeType": "YulTypedName",
																"src": "1836:2:1",
																"type": ""
															}
														]
													},
													{
														"expression": {
															"arguments": [
																{
																	"name": "_1",
																	"nodeType": "YulIdentifier",
																	"src": "1863:2:1"
																},
																{
																	"name": "array",
																	"nodeType": "YulIdentifier",
																	"src": "1867:5:1"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "1856:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1856:17:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1856:17:1"
													},
													{
														"nodeType": "YulVariableDeclaration",
														"src": "1886:31:1",
														"value": {
															"arguments": [
																{
																	"name": "_1",
																	"nodeType": "YulIdentifier",
																	"src": "1908:2:1"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1912:4:1",
																	"type": "",
																	"value": "0x20"
																}
															],
															"functionName": {
																"name": "keccak256",
																"nodeType": "YulIdentifier",
																"src": "1898:9:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1898:19:1"
														},
														"variables": [
															{
																"name": "data",
																"nodeType": "YulTypedName",
																"src": "1890:4:1",
																"type": ""
															}
														]
													},
													{
														"nodeType": "YulVariableDeclaration",
														"src": "1930:57:1",
														"value": {
															"arguments": [
																{
																	"name": "data",
																	"nodeType": "YulIdentifier",
																	"src": "1953:4:1"
																},
																{
																	"arguments": [
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "1963:1:1",
																			"type": "",
																			"value": "5"
																		},
																		{
																			"arguments": [
																				{
																					"name": "startIndex",
																					"nodeType": "YulIdentifier",
																					"src": "1970:10:1"
																				},
																				{
																					"kind": "number",
																					"nodeType": "YulLiteral",
																					"src": "1982:2:1",
																					"type": "",
																					"value": "31"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "1966:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "1966:19:1"
																		}
																	],
																	"functionName": {
																		"name": "shr",
																		"nodeType": "YulIdentifier",
																		"src": "1959:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "1959:27:1"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "1949:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1949:38:1"
														},
														"variables": [
															{
																"name": "deleteStart",
																"nodeType": "YulTypedName",
																"src": "1934:11:1",
																"type": ""
															}
														]
													},
													{
														"body": {
															"nodeType": "YulBlock",
															"src": "2024:23:1",
															"statements": [
																{
																	"nodeType": "YulAssignment",
																	"src": "2026:19:1",
																	"value": {
																		"name": "data",
																		"nodeType": "YulIdentifier",
																		"src": "2041:4:1"
																	},
																	"variableNames": [
																		{
																			"name": "deleteStart",
																			"nodeType": "YulIdentifier",
																			"src": "2026:11:1"
																		}
																	]
																}
															]
														},
														"condition": {
															"arguments": [
																{
																	"name": "startIndex",
																	"nodeType": "YulIdentifier",
																	"src": "2006:10:1"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "2018:4:1",
																	"type": "",
																	"value": "0x20"
																}
															],
															"functionName": {
																"name": "lt",
																"nodeType": "YulIdentifier",
																"src": "2003:2:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2003:20:1"
														},
														"nodeType": "YulIf",
														"src": "2000:47:1"
													},
													{
														"nodeType": "YulVariableDeclaration",
														"src": "2060:41:1",
														"value": {
															"arguments": [
																{
																	"name": "data",
																	"nodeType": "YulIdentifier",
																	"src": "2074:4:1"
																},
																{
																	"arguments": [
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "2084:1:1",
																			"type": "",
																			"value": "5"
																		},
																		{
																			"arguments": [
																				{
																					"name": "len",
																					"nodeType": "YulIdentifier",
																					"src": "2091:3:1"
																				},
																				{
																					"kind": "number",
																					"nodeType": "YulLiteral",
																					"src": "2096:2:1",
																					"type": "",
																					"value": "31"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "2087:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "2087:12:1"
																		}
																	],
																	"functionName": {
																		"name": "shr",
																		"nodeType": "YulIdentifier",
																		"src": "2080:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2080:20:1"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "2070:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2070:31:1"
														},
														"variables": [
															{
																"name": "_2",
																"nodeType": "YulTypedName",
																"src": "2064:2:1",
																"type": ""
															}
														]
													},
													{
														"nodeType": "YulVariableDeclaration",
														"src": "2114:24:1",
														"value": {
															"name": "deleteStart",
															"nodeType": "YulIdentifier",
															"src": "2127:11:1"
														},
														"variables": [
															{
																"name": "start",
																"nodeType": "YulTypedName",
																"src": "2118:5:1",
																"type": ""
															}
														]
													},
													{
														"body": {
															"nodeType": "YulBlock",
															"src": "2212:21:1",
															"statements": [
																{
																	"expression": {
																		"arguments": [
																			{
																				"name": "start",
																				"nodeType": "YulIdentifier",
																				"src": "2221:5:1"
																			},
																			{
																				"name": "_1",
																				"nodeType": "YulIdentifier",
																				"src": "2228:2:1"
																			}
																		],
																		"functionName": {
																			"name": "sstore",
																			"nodeType": "YulIdentifier",
																			"src": "2214:6:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "2214:17:1"
																	},
																	"nodeType": "YulExpressionStatement",
																	"src": "2214:17:1"
																}
															]
														},
														"condition": {
															"arguments": [
																{
																	"name": "start",
																	"nodeType": "YulIdentifier",
																	"src": "2162:5:1"
																},
																{
																	"name": "_2",
																	"nodeType": "YulIdentifier",
																	"src": "2169:2:1"
																}
															],
															"functionName": {
																"name": "lt",
																"nodeType": "YulIdentifier",
																"src": "2159:2:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2159:13:1"
														},
														"nodeType": "YulForLoop",
														"post": {
															"nodeType": "YulBlock",
															"src": "2173:26:1",
															"statements": [
																{
																	"nodeType": "YulAssignment",
																	"src": "2175:22:1",
																	"value": {
																		"arguments": [
																			{
																				"name": "start",
																				"nodeType": "YulIdentifier",
																				"src": "2188:5:1"
																			},
																			{
																				"kind": "number",
																				"nodeType": "YulLiteral",
																				"src": "2195:1:1",
																				"type": "",
																				"value": "1"
																			}
																		],
																		"functionName": {
																			"name": "add",
																			"nodeType": "YulIdentifier",
																			"src": "2184:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "2184:13:1"
																	},
																	"variableNames": [
																		{
																			"name": "start",
																			"nodeType": "YulIdentifier",
																			"src": "2175:5:1"
																		}
																	]
																}
															]
														},
														"pre": {
															"nodeType": "YulBlock",
															"src": "2155:3:1",
															"statements": []
														},
														"src": "2151:82:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "len",
														"nodeType": "YulIdentifier",
														"src": "1801:3:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1806:2:1",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "1798:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1798:11:1"
											},
											"nodeType": "YulIf",
											"src": "1795:448:1"
										}
									]
								},
								"name": "clean_up_bytearray_end_slots_string_storage",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "array",
										"nodeType": "YulTypedName",
										"src": "1757:5:1",
										"type": ""
									},
									{
										"name": "len",
										"nodeType": "YulTypedName",
										"src": "1764:3:1",
										"type": ""
									},
									{
										"name": "startIndex",
										"nodeType": "YulTypedName",
										"src": "1769:10:1",
										"type": ""
									}
								],
								"src": "1704:545:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "2339:81:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "2349:65:1",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "data",
																"nodeType": "YulIdentifier",
																"src": "2364:4:1"
															},
															{
																"arguments": [
																	{
																		"arguments": [
																			{
																				"arguments": [
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "2382:1:1",
																						"type": "",
																						"value": "3"
																					},
																					{
																						"name": "len",
																						"nodeType": "YulIdentifier",
																						"src": "2385:3:1"
																					}
																				],
																				"functionName": {
																					"name": "shl",
																					"nodeType": "YulIdentifier",
																					"src": "2378:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "2378:11:1"
																			},
																			{
																				"arguments": [
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "2395:1:1",
																						"type": "",
																						"value": "0"
																					}
																				],
																				"functionName": {
																					"name": "not",
																					"nodeType": "YulIdentifier",
																					"src": "2391:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "2391:6:1"
																			}
																		],
																		"functionName": {
																			"name": "shr",
																			"nodeType": "YulIdentifier",
																			"src": "2374:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "2374:24:1"
																	}
																],
																"functionName": {
																	"name": "not",
																	"nodeType": "YulIdentifier",
																	"src": "2370:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "2370:29:1"
															}
														],
														"functionName": {
															"name": "and",
															"nodeType": "YulIdentifier",
															"src": "2360:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2360:40:1"
													},
													{
														"arguments": [
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "2406:1:1",
																"type": "",
																"value": "1"
															},
															{
																"name": "len",
																"nodeType": "YulIdentifier",
																"src": "2409:3:1"
															}
														],
														"functionName": {
															"name": "shl",
															"nodeType": "YulIdentifier",
															"src": "2402:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2402:11:1"
													}
												],
												"functionName": {
													"name": "or",
													"nodeType": "YulIdentifier",
													"src": "2357:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2357:57:1"
											},
											"variableNames": [
												{
													"name": "used",
													"nodeType": "YulIdentifier",
													"src": "2349:4:1"
												}
											]
										}
									]
								},
								"name": "extract_used_part_and_set_length_of_short_byte_array",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "data",
										"nodeType": "YulTypedName",
										"src": "2316:4:1",
										"type": ""
									},
									{
										"name": "len",
										"nodeType": "YulTypedName",
										"src": "2322:3:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "used",
										"nodeType": "YulTypedName",
										"src": "2330:4:1",
										"type": ""
									}
								],
								"src": "2254:166:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "2521:1256:1",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "2531:24:1",
											"value": {
												"arguments": [
													{
														"name": "src",
														"nodeType": "YulIdentifier",
														"src": "2551:3:1"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "2545:5:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2545:10:1"
											},
											"variables": [
												{
													"name": "newLen",
													"nodeType": "YulTypedName",
													"src": "2535:6:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "2598:22:1",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x41",
																"nodeType": "YulIdentifier",
																"src": "2600:16:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2600:18:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "2600:18:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "newLen",
														"nodeType": "YulIdentifier",
														"src": "2570:6:1"
													},
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "2586:2:1",
																		"type": "",
																		"value": "64"
																	},
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "2590:1:1",
																		"type": "",
																		"value": "1"
																	}
																],
																"functionName": {
																	"name": "shl",
																	"nodeType": "YulIdentifier",
																	"src": "2582:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "2582:10:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "2594:1:1",
																"type": "",
																"value": "1"
															}
														],
														"functionName": {
															"name": "sub",
															"nodeType": "YulIdentifier",
															"src": "2578:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2578:18:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "2567:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2567:30:1"
											},
											"nodeType": "YulIf",
											"src": "2564:56:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "slot",
														"nodeType": "YulIdentifier",
														"src": "2673:4:1"
													},
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "slot",
																		"nodeType": "YulIdentifier",
																		"src": "2711:4:1"
																	}
																],
																"functionName": {
																	"name": "sload",
																	"nodeType": "YulIdentifier",
																	"src": "2705:5:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "2705:11:1"
															}
														],
														"functionName": {
															"name": "extract_byte_array_length",
															"nodeType": "YulIdentifier",
															"src": "2679:25:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2679:38:1"
													},
													{
														"name": "newLen",
														"nodeType": "YulIdentifier",
														"src": "2719:6:1"
													}
												],
												"functionName": {
													"name": "clean_up_bytearray_end_slots_string_storage",
													"nodeType": "YulIdentifier",
													"src": "2629:43:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2629:97:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "2629:97:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "2735:18:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2752:1:1",
												"type": "",
												"value": "0"
											},
											"variables": [
												{
													"name": "srcOffset",
													"nodeType": "YulTypedName",
													"src": "2739:9:1",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "2762:23:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2781:4:1",
												"type": "",
												"value": "0x20"
											},
											"variables": [
												{
													"name": "srcOffset_1",
													"nodeType": "YulTypedName",
													"src": "2766:11:1",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "2794:24:1",
											"value": {
												"name": "srcOffset_1",
												"nodeType": "YulIdentifier",
												"src": "2807:11:1"
											},
											"variableNames": [
												{
													"name": "srcOffset",
													"nodeType": "YulIdentifier",
													"src": "2794:9:1"
												}
											]
										},
										{
											"cases": [
												{
													"body": {
														"nodeType": "YulBlock",
														"src": "2864:656:1",
														"statements": [
															{
																"nodeType": "YulVariableDeclaration",
																"src": "2878:35:1",
																"value": {
																	"arguments": [
																		{
																			"name": "newLen",
																			"nodeType": "YulIdentifier",
																			"src": "2897:6:1"
																		},
																		{
																			"arguments": [
																				{
																					"kind": "number",
																					"nodeType": "YulLiteral",
																					"src": "2909:2:1",
																					"type": "",
																					"value": "31"
																				}
																			],
																			"functionName": {
																				"name": "not",
																				"nodeType": "YulIdentifier",
																				"src": "2905:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "2905:7:1"
																		}
																	],
																	"functionName": {
																		"name": "and",
																		"nodeType": "YulIdentifier",
																		"src": "2893:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2893:20:1"
																},
																"variables": [
																	{
																		"name": "loopEnd",
																		"nodeType": "YulTypedName",
																		"src": "2882:7:1",
																		"type": ""
																	}
																]
															},
															{
																"nodeType": "YulVariableDeclaration",
																"src": "2926:49:1",
																"value": {
																	"arguments": [
																		{
																			"name": "slot",
																			"nodeType": "YulIdentifier",
																			"src": "2970:4:1"
																		}
																	],
																	"functionName": {
																		"name": "array_dataslot_string_storage",
																		"nodeType": "YulIdentifier",
																		"src": "2940:29:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2940:35:1"
																},
																"variables": [
																	{
																		"name": "dstPtr",
																		"nodeType": "YulTypedName",
																		"src": "2930:6:1",
																		"type": ""
																	}
																]
															},
															{
																"nodeType": "YulVariableDeclaration",
																"src": "2988:10:1",
																"value": {
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "2997:1:1",
																	"type": "",
																	"value": "0"
																},
																"variables": [
																	{
																		"name": "i",
																		"nodeType": "YulTypedName",
																		"src": "2992:1:1",
																		"type": ""
																	}
																]
															},
															{
																"body": {
																	"nodeType": "YulBlock",
																	"src": "3075:172:1",
																	"statements": [
																		{
																			"expression": {
																				"arguments": [
																					{
																						"name": "dstPtr",
																						"nodeType": "YulIdentifier",
																						"src": "3100:6:1"
																					},
																					{
																						"arguments": [
																							{
																								"arguments": [
																									{
																										"name": "src",
																										"nodeType": "YulIdentifier",
																										"src": "3118:3:1"
																									},
																									{
																										"name": "srcOffset",
																										"nodeType": "YulIdentifier",
																										"src": "3123:9:1"
																									}
																								],
																								"functionName": {
																									"name": "add",
																									"nodeType": "YulIdentifier",
																									"src": "3114:3:1"
																								},
																								"nodeType": "YulFunctionCall",
																								"src": "3114:19:1"
																							}
																						],
																						"functionName": {
																							"name": "mload",
																							"nodeType": "YulIdentifier",
																							"src": "3108:5:1"
																						},
																						"nodeType": "YulFunctionCall",
																						"src": "3108:26:1"
																					}
																				],
																				"functionName": {
																					"name": "sstore",
																					"nodeType": "YulIdentifier",
																					"src": "3093:6:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3093:42:1"
																			},
																			"nodeType": "YulExpressionStatement",
																			"src": "3093:42:1"
																		},
																		{
																			"nodeType": "YulAssignment",
																			"src": "3152:24:1",
																			"value": {
																				"arguments": [
																					{
																						"name": "dstPtr",
																						"nodeType": "YulIdentifier",
																						"src": "3166:6:1"
																					},
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "3174:1:1",
																						"type": "",
																						"value": "1"
																					}
																				],
																				"functionName": {
																					"name": "add",
																					"nodeType": "YulIdentifier",
																					"src": "3162:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3162:14:1"
																			},
																			"variableNames": [
																				{
																					"name": "dstPtr",
																					"nodeType": "YulIdentifier",
																					"src": "3152:6:1"
																				}
																			]
																		},
																		{
																			"nodeType": "YulAssignment",
																			"src": "3193:40:1",
																			"value": {
																				"arguments": [
																					{
																						"name": "srcOffset",
																						"nodeType": "YulIdentifier",
																						"src": "3210:9:1"
																					},
																					{
																						"name": "srcOffset_1",
																						"nodeType": "YulIdentifier",
																						"src": "3221:11:1"
																					}
																				],
																				"functionName": {
																					"name": "add",
																					"nodeType": "YulIdentifier",
																					"src": "3206:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3206:27:1"
																			},
																			"variableNames": [
																				{
																					"name": "srcOffset",
																					"nodeType": "YulIdentifier",
																					"src": "3193:9:1"
																				}
																			]
																		}
																	]
																},
																"condition": {
																	"arguments": [
																		{
																			"name": "i",
																			"nodeType": "YulIdentifier",
																			"src": "3022:1:1"
																		},
																		{
																			"name": "loopEnd",
																			"nodeType": "YulIdentifier",
																			"src": "3025:7:1"
																		}
																	],
																	"functionName": {
																		"name": "lt",
																		"nodeType": "YulIdentifier",
																		"src": "3019:2:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "3019:14:1"
																},
																"nodeType": "YulForLoop",
																"post": {
																	"nodeType": "YulBlock",
																	"src": "3034:28:1",
																	"statements": [
																		{
																			"nodeType": "YulAssignment",
																			"src": "3036:24:1",
																			"value": {
																				"arguments": [
																					{
																						"name": "i",
																						"nodeType": "YulIdentifier",
																						"src": "3045:1:1"
																					},
																					{
																						"name": "srcOffset_1",
																						"nodeType": "YulIdentifier",
																						"src": "3048:11:1"
																					}
																				],
																				"functionName": {
																					"name": "add",
																					"nodeType": "YulIdentifier",
																					"src": "3041:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3041:19:1"
																			},
																			"variableNames": [
																				{
																					"name": "i",
																					"nodeType": "YulIdentifier",
																					"src": "3036:1:1"
																				}
																			]
																		}
																	]
																},
																"pre": {
																	"nodeType": "YulBlock",
																	"src": "3015:3:1",
																	"statements": []
																},
																"src": "3011:236:1"
															},
															{
																"body": {
																	"nodeType": "YulBlock",
																	"src": "3295:166:1",
																	"statements": [
																		{
																			"nodeType": "YulVariableDeclaration",
																			"src": "3313:43:1",
																			"value": {
																				"arguments": [
																					{
																						"arguments": [
																							{
																								"name": "src",
																								"nodeType": "YulIdentifier",
																								"src": "3340:3:1"
																							},
																							{
																								"name": "srcOffset",
																								"nodeType": "YulIdentifier",
																								"src": "3345:9:1"
																							}
																						],
																						"functionName": {
																							"name": "add",
																							"nodeType": "YulIdentifier",
																							"src": "3336:3:1"
																						},
																						"nodeType": "YulFunctionCall",
																						"src": "3336:19:1"
																					}
																				],
																				"functionName": {
																					"name": "mload",
																					"nodeType": "YulIdentifier",
																					"src": "3330:5:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3330:26:1"
																			},
																			"variables": [
																				{
																					"name": "lastValue",
																					"nodeType": "YulTypedName",
																					"src": "3317:9:1",
																					"type": ""
																				}
																			]
																		},
																		{
																			"expression": {
																				"arguments": [
																					{
																						"name": "dstPtr",
																						"nodeType": "YulIdentifier",
																						"src": "3380:6:1"
																					},
																					{
																						"arguments": [
																							{
																								"name": "lastValue",
																								"nodeType": "YulIdentifier",
																								"src": "3392:9:1"
																							},
																							{
																								"arguments": [
																									{
																										"arguments": [
																											{
																												"arguments": [
																													{
																														"arguments": [
																															{
																																"kind": "number",
																																"nodeType": "YulLiteral",
																																"src": "3419:1:1",
																																"type": "",
																																"value": "3"
																															},
																															{
																																"name": "newLen",
																																"nodeType": "YulIdentifier",
																																"src": "3422:6:1"
																															}
																														],
																														"functionName": {
																															"name": "shl",
																															"nodeType": "YulIdentifier",
																															"src": "3415:3:1"
																														},
																														"nodeType": "YulFunctionCall",
																														"src": "3415:14:1"
																													},
																													{
																														"kind": "number",
																														"nodeType": "YulLiteral",
																														"src": "3431:3:1",
																														"type": "",
																														"value": "248"
																													}
																												],
																												"functionName": {
																													"name": "and",
																													"nodeType": "YulIdentifier",
																													"src": "3411:3:1"
																												},
																												"nodeType": "YulFunctionCall",
																												"src": "3411:24:1"
																											},
																											{
																												"arguments": [
																													{
																														"kind": "number",
																														"nodeType": "YulLiteral",
																														"src": "3441:1:1",
																														"type": "",
																														"value": "0"
																													}
																												],
																												"functionName": {
																													"name": "not",
																													"nodeType": "YulIdentifier",
																													"src": "3437:3:1"
																												},
																												"nodeType": "YulFunctionCall",
																												"src": "3437:6:1"
																											}
																										],
																										"functionName": {
																											"name": "shr",
																											"nodeType": "YulIdentifier",
																											"src": "3407:3:1"
																										},
																										"nodeType": "YulFunctionCall",
																										"src": "3407:37:1"
																									}
																								],
																								"functionName": {
																									"name": "not",
																									"nodeType": "YulIdentifier",
																									"src": "3403:3:1"
																								},
																								"nodeType": "YulFunctionCall",
																								"src": "3403:42:1"
																							}
																						],
																						"functionName": {
																							"name": "and",
																							"nodeType": "YulIdentifier",
																							"src": "3388:3:1"
																						},
																						"nodeType": "YulFunctionCall",
																						"src": "3388:58:1"
																					}
																				],
																				"functionName": {
																					"name": "sstore",
																					"nodeType": "YulIdentifier",
																					"src": "3373:6:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3373:74:1"
																			},
																			"nodeType": "YulExpressionStatement",
																			"src": "3373:74:1"
																		}
																	]
																},
																"condition": {
																	"arguments": [
																		{
																			"name": "loopEnd",
																			"nodeType": "YulIdentifier",
																			"src": "3266:7:1"
																		},
																		{
																			"name": "newLen",
																			"nodeType": "YulIdentifier",
																			"src": "3275:6:1"
																		}
																	],
																	"functionName": {
																		"name": "lt",
																		"nodeType": "YulIdentifier",
																		"src": "3263:2:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "3263:19:1"
																},
																"nodeType": "YulIf",
																"src": "3260:201:1"
															},
															{
																"expression": {
																	"arguments": [
																		{
																			"name": "slot",
																			"nodeType": "YulIdentifier",
																			"src": "3481:4:1"
																		},
																		{
																			"arguments": [
																				{
																					"arguments": [
																						{
																							"kind": "number",
																							"nodeType": "YulLiteral",
																							"src": "3495:1:1",
																							"type": "",
																							"value": "1"
																						},
																						{
																							"name": "newLen",
																							"nodeType": "YulIdentifier",
																							"src": "3498:6:1"
																						}
																					],
																					"functionName": {
																						"name": "shl",
																						"nodeType": "YulIdentifier",
																						"src": "3491:3:1"
																					},
																					"nodeType": "YulFunctionCall",
																					"src": "3491:14:1"
																				},
																				{
																					"kind": "number",
																					"nodeType": "YulLiteral",
																					"src": "3507:1:1",
																					"type": "",
																					"value": "1"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "3487:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "3487:22:1"
																		}
																	],
																	"functionName": {
																		"name": "sstore",
																		"nodeType": "YulIdentifier",
																		"src": "3474:6:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "3474:36:1"
																},
																"nodeType": "YulExpressionStatement",
																"src": "3474:36:1"
															}
														]
													},
													"nodeType": "YulCase",
													"src": "2857:663:1",
													"value": {
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2862:1:1",
														"type": "",
														"value": "1"
													}
												},
												{
													"body": {
														"nodeType": "YulBlock",
														"src": "3537:234:1",
														"statements": [
															{
																"nodeType": "YulVariableDeclaration",
																"src": "3551:14:1",
																"value": {
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "3564:1:1",
																	"type": "",
																	"value": "0"
																},
																"variables": [
																	{
																		"name": "value",
																		"nodeType": "YulTypedName",
																		"src": "3555:5:1",
																		"type": ""
																	}
																]
															},
															{
																"body": {
																	"nodeType": "YulBlock",
																	"src": "3600:67:1",
																	"statements": [
																		{
																			"nodeType": "YulAssignment",
																			"src": "3618:35:1",
																			"value": {
																				"arguments": [
																					{
																						"arguments": [
																							{
																								"name": "src",
																								"nodeType": "YulIdentifier",
																								"src": "3637:3:1"
																							},
																							{
																								"name": "srcOffset",
																								"nodeType": "YulIdentifier",
																								"src": "3642:9:1"
																							}
																						],
																						"functionName": {
																							"name": "add",
																							"nodeType": "YulIdentifier",
																							"src": "3633:3:1"
																						},
																						"nodeType": "YulFunctionCall",
																						"src": "3633:19:1"
																					}
																				],
																				"functionName": {
																					"name": "mload",
																					"nodeType": "YulIdentifier",
																					"src": "3627:5:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3627:26:1"
																			},
																			"variableNames": [
																				{
																					"name": "value",
																					"nodeType": "YulIdentifier",
																					"src": "3618:5:1"
																				}
																			]
																		}
																	]
																},
																"condition": {
																	"name": "newLen",
																	"nodeType": "YulIdentifier",
																	"src": "3581:6:1"
																},
																"nodeType": "YulIf",
																"src": "3578:89:1"
															},
															{
																"expression": {
																	"arguments": [
																		{
																			"name": "slot",
																			"nodeType": "YulIdentifier",
																			"src": "3687:4:1"
																		},
																		{
																			"arguments": [
																				{
																					"name": "value",
																					"nodeType": "YulIdentifier",
																					"src": "3746:5:1"
																				},
																				{
																					"name": "newLen",
																					"nodeType": "YulIdentifier",
																					"src": "3753:6:1"
																				}
																			],
																			"functionName": {
																				"name": "extract_used_part_and_set_length_of_short_byte_array",
																				"nodeType": "YulIdentifier",
																				"src": "3693:52:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "3693:67:1"
																		}
																	],
																	"functionName": {
																		"name": "sstore",
																		"nodeType": "YulIdentifier",
																		"src": "3680:6:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "3680:81:1"
																},
																"nodeType": "YulExpressionStatement",
																"src": "3680:81:1"
															}
														]
													},
													"nodeType": "YulCase",
													"src": "3529:242:1",
													"value": "default"
												}
											],
											"expression": {
												"arguments": [
													{
														"name": "newLen",
														"nodeType": "YulIdentifier",
														"src": "2837:6:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2845:2:1",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "2834:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2834:14:1"
											},
											"nodeType": "YulSwitch",
											"src": "2827:944:1"
										}
									]
								},
								"name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "slot",
										"nodeType": "YulTypedName",
										"src": "2506:4:1",
										"type": ""
									},
									{
										"name": "src",
										"nodeType": "YulTypedName",
										"src": "2512:3:1",
										"type": ""
									}
								],
								"src": "2425:1352:1"
							}
						]
					},
					"contents": "{\n    { }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_tuple_t_string_memory_ptr_fromMemory(headStart, dataEnd) -> value0\n    {\n        let _1 := 32\n        if slt(sub(dataEnd, headStart), _1) { revert(0, 0) }\n        let offset := mload(headStart)\n        let _2 := sub(shl(64, 1), 1)\n        if gt(offset, _2) { revert(0, 0) }\n        let _3 := add(headStart, offset)\n        if iszero(slt(add(_3, 0x1f), dataEnd)) { revert(0, 0) }\n        let _4 := mload(_3)\n        if gt(_4, _2) { panic_error_0x41() }\n        let _5 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_4, 0x1f), _5), 63), _5))\n        if or(gt(newFreePtr, _2), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _4)\n        if gt(add(add(_3, _4), _1), dataEnd) { revert(0, 0) }\n        let i := 0\n        for { } lt(i, _4) { i := add(i, _1) }\n        {\n            mstore(add(add(memPtr, i), _1), mload(add(add(_3, i), _1)))\n        }\n        mstore(add(add(memPtr, _4), _1), 0)\n        value0 := memPtr\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        let srcOffset_1 := 0x20\n        srcOffset := srcOffset_1\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, srcOffset_1) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, srcOffset_1)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n}",
					"id": 1,
					"language": "Yul",
					"name": "#utility.yul"
				}
			],
			"linkReferences": {},
			"object": "608060405234801561001057600080fd5b506040516105df3803806105df83398101604081905261002f91610058565b600061003b82826101aa565b5050610269565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561006b57600080fd5b82516001600160401b038082111561008257600080fd5b818501915085601f83011261009657600080fd5b8151818111156100a8576100a8610042565b604051601f8201601f19908116603f011681019083821181831017156100d0576100d0610042565b8160405282815288868487010111156100e857600080fd5b600093505b8284101561010a57848401860151818501870152928501926100ed565b600086848301015280965050505050505092915050565b600181811c9082168061013557607f821691505b60208210810361015557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156101a557600081815260208120601f850160051c810160208610156101825750805b601f850160051c820191505b818110156101a15782815560010161018e565b5050505b505050565b81516001600160401b038111156101c3576101c3610042565b6101d7816101d18454610121565b8461015b565b602080601f83116001811461020c57600084156101f45750858301515b600019600386901b1c1916600185901b1785556101a1565b600085815260208120601f198616915b8281101561023b5788860151825594840194600190910190840161021c565b50858210156102595787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610367806102786000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063adc3034b1461003b578063ef738a5614610050575b600080fd5b61004e610049366004610112565b61006e565b005b610058610080565b6040516100659190610184565b60405180910390f35b600061007b828483610270565b505050565b60606000805461008f906101e8565b80601f01602080910402602001604051908101604052809291908181526020018280546100bb906101e8565b80156101085780601f106100dd57610100808354040283529160200191610108565b820191906000526020600020905b8154815290600101906020018083116100eb57829003601f168201915b5050505050905090565b6000806020838503121561012557600080fd5b823567ffffffffffffffff8082111561013d57600080fd5b818501915085601f83011261015157600080fd5b81358181111561016057600080fd5b86602082850101111561017257600080fd5b60209290920196919550909350505050565b600060208083528351808285015260005b818110156101b157858101830151858201604001528201610195565b506000604082860101526040601f19601f8301168501019250505092915050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806101fc57607f821691505b60208210810361021c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561007b57600081815260208120601f850160051c810160208610156102495750805b601f850160051c820191505b8181101561026857828155600101610255565b505050505050565b67ffffffffffffffff831115610288576102886101d2565b61029c8361029683546101e8565b83610222565b6000601f8411600181146102d057600085156102b85750838201355b600019600387901b1c1916600186901b17835561032a565b600083815260209020601f19861690835b8281101561030157868501358255602094850194600190920191016102e1565b508682101561031e5760001960f88860031b161c19848701351681555b505060018560011b0183555b505050505056fea264697066735822122099781b91dc3e1fa697bedd1c770e4acd63d3758d4d8dc8a384a26e93a61ee76b64736f6c63430008120033",
			"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x5DF CODESIZE SUB DUP1 PUSH2 0x5DF DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH2 0x2F SWAP2 PUSH2 0x58 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3B DUP3 DUP3 PUSH2 0x1AA JUMP JUMPDEST POP POP PUSH2 0x269 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP1 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x6B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP1 DUP3 GT ISZERO PUSH2 0x82 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 DUP6 ADD SWAP2 POP DUP6 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x96 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP2 DUP2 GT ISZERO PUSH2 0xA8 JUMPI PUSH2 0xA8 PUSH2 0x42 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD SWAP1 DUP4 DUP3 GT DUP2 DUP4 LT OR ISZERO PUSH2 0xD0 JUMPI PUSH2 0xD0 PUSH2 0x42 JUMP JUMPDEST DUP2 PUSH1 0x40 MSTORE DUP3 DUP2 MSTORE DUP9 DUP7 DUP5 DUP8 ADD ADD GT ISZERO PUSH2 0xE8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 SWAP4 POP JUMPDEST DUP3 DUP5 LT ISZERO PUSH2 0x10A JUMPI DUP5 DUP5 ADD DUP7 ADD MLOAD DUP2 DUP6 ADD DUP8 ADD MSTORE SWAP3 DUP6 ADD SWAP3 PUSH2 0xED JUMP JUMPDEST PUSH1 0x0 DUP7 DUP5 DUP4 ADD ADD MSTORE DUP1 SWAP7 POP POP POP POP POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SHR SWAP1 DUP3 AND DUP1 PUSH2 0x135 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH2 0x155 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1F DUP3 GT ISZERO PUSH2 0x1A5 JUMPI PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x20 DUP2 KECCAK256 PUSH1 0x1F DUP6 ADD PUSH1 0x5 SHR DUP2 ADD PUSH1 0x20 DUP7 LT ISZERO PUSH2 0x182 JUMPI POP DUP1 JUMPDEST PUSH1 0x1F DUP6 ADD PUSH1 0x5 SHR DUP3 ADD SWAP2 POP JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x1A1 JUMPI DUP3 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x18E JUMP JUMPDEST POP POP POP JUMPDEST POP POP POP JUMP JUMPDEST DUP2 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT ISZERO PUSH2 0x1C3 JUMPI PUSH2 0x1C3 PUSH2 0x42 JUMP JUMPDEST PUSH2 0x1D7 DUP2 PUSH2 0x1D1 DUP5 SLOAD PUSH2 0x121 JUMP JUMPDEST DUP5 PUSH2 0x15B JUMP JUMPDEST PUSH1 0x20 DUP1 PUSH1 0x1F DUP4 GT PUSH1 0x1 DUP2 EQ PUSH2 0x20C JUMPI PUSH1 0x0 DUP5 ISZERO PUSH2 0x1F4 JUMPI POP DUP6 DUP4 ADD MLOAD JUMPDEST PUSH1 0x0 NOT PUSH1 0x3 DUP7 SWAP1 SHL SHR NOT AND PUSH1 0x1 DUP6 SWAP1 SHL OR DUP6 SSTORE PUSH2 0x1A1 JUMP JUMPDEST PUSH1 0x0 DUP6 DUP2 MSTORE PUSH1 0x20 DUP2 KECCAK256 PUSH1 0x1F NOT DUP7 AND SWAP2 JUMPDEST DUP3 DUP2 LT ISZERO PUSH2 0x23B JUMPI DUP9 DUP7 ADD MLOAD DUP3 SSTORE SWAP5 DUP5 ADD SWAP5 PUSH1 0x1 SWAP1 SWAP2 ADD SWAP1 DUP5 ADD PUSH2 0x21C JUMP JUMPDEST POP DUP6 DUP3 LT ISZERO PUSH2 0x259 JUMPI DUP8 DUP6 ADD MLOAD PUSH1 0x0 NOT PUSH1 0x3 DUP9 SWAP1 SHL PUSH1 0xF8 AND SHR NOT AND DUP2 SSTORE JUMPDEST POP POP POP POP POP PUSH1 0x1 SWAP1 DUP2 SHL ADD SWAP1 SSTORE POP JUMP JUMPDEST PUSH2 0x367 DUP1 PUSH2 0x278 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xADC3034B EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xEF738A56 EQ PUSH2 0x50 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x4E PUSH2 0x49 CALLDATASIZE PUSH1 0x4 PUSH2 0x112 JUMP JUMPDEST PUSH2 0x6E JUMP JUMPDEST STOP JUMPDEST PUSH2 0x58 PUSH2 0x80 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x65 SWAP2 SWAP1 PUSH2 0x184 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 PUSH2 0x7B DUP3 DUP5 DUP4 PUSH2 0x270 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP1 SLOAD PUSH2 0x8F SWAP1 PUSH2 0x1E8 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0xBB SWAP1 PUSH2 0x1E8 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x108 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xDD JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x108 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xEB JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x20 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x125 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x13D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 DUP6 ADD SWAP2 POP DUP6 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x151 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x160 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP7 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x172 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x20 SWAP3 SWAP1 SWAP3 ADD SWAP7 SWAP2 SWAP6 POP SWAP1 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP1 DUP4 MSTORE DUP4 MLOAD DUP1 DUP3 DUP6 ADD MSTORE PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x1B1 JUMPI DUP6 DUP2 ADD DUP4 ADD MLOAD DUP6 DUP3 ADD PUSH1 0x40 ADD MSTORE DUP3 ADD PUSH2 0x195 JUMP JUMPDEST POP PUSH1 0x0 PUSH1 0x40 DUP3 DUP7 ADD ADD MSTORE PUSH1 0x40 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND DUP6 ADD ADD SWAP3 POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x1 DUP2 DUP2 SHR SWAP1 DUP3 AND DUP1 PUSH2 0x1FC JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH2 0x21C JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1F DUP3 GT ISZERO PUSH2 0x7B JUMPI PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x20 DUP2 KECCAK256 PUSH1 0x1F DUP6 ADD PUSH1 0x5 SHR DUP2 ADD PUSH1 0x20 DUP7 LT ISZERO PUSH2 0x249 JUMPI POP DUP1 JUMPDEST PUSH1 0x1F DUP6 ADD PUSH1 0x5 SHR DUP3 ADD SWAP2 POP JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x268 JUMPI DUP3 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x255 JUMP JUMPDEST POP POP POP POP POP POP JUMP JUMPDEST PUSH8 0xFFFFFFFFFFFFFFFF DUP4 GT ISZERO PUSH2 0x288 JUMPI PUSH2 0x288 PUSH2 0x1D2 JUMP JUMPDEST PUSH2 0x29C DUP4 PUSH2 0x296 DUP4 SLOAD PUSH2 0x1E8 JUMP JUMPDEST DUP4 PUSH2 0x222 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F DUP5 GT PUSH1 0x1 DUP2 EQ PUSH2 0x2D0 JUMPI PUSH1 0x0 DUP6 ISZERO PUSH2 0x2B8 JUMPI POP DUP4 DUP3 ADD CALLDATALOAD JUMPDEST PUSH1 0x0 NOT PUSH1 0x3 DUP8 SWAP1 SHL SHR NOT AND PUSH1 0x1 DUP7 SWAP1 SHL OR DUP4 SSTORE PUSH2 0x32A JUMP JUMPDEST PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 SWAP1 KECCAK256 PUSH1 0x1F NOT DUP7 AND SWAP1 DUP4 JUMPDEST DUP3 DUP2 LT ISZERO PUSH2 0x301 JUMPI DUP7 DUP6 ADD CALLDATALOAD DUP3 SSTORE PUSH1 0x20 SWAP5 DUP6 ADD SWAP5 PUSH1 0x1 SWAP1 SWAP3 ADD SWAP2 ADD PUSH2 0x2E1 JUMP JUMPDEST POP DUP7 DUP3 LT ISZERO PUSH2 0x31E JUMPI PUSH1 0x0 NOT PUSH1 0xF8 DUP9 PUSH1 0x3 SHL AND SHR NOT DUP5 DUP8 ADD CALLDATALOAD AND DUP2 SSTORE JUMPDEST POP POP PUSH1 0x1 DUP6 PUSH1 0x1 SHL ADD DUP4 SSTORE JUMPDEST POP POP POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SWAP10 PUSH25 0x1B91DC3E1FA697BEDD1C770E4ACD63D3758D4D8DC8A384A26E SWAP4 0xA6 0x1E 0xE7 PUSH12 0x64736F6C6343000812003300 ",
			"sourceMap": "58:1054:0:-:0;;;243:174;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;376:16;:34;395:15;376:16;:34;:::i;:::-;;243:174;58:1054;;14:127:1;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:1042;226:6;257:2;300;288:9;279:7;275:23;271:32;268:52;;;316:1;313;306:12;268:52;343:16;;-1:-1:-1;;;;;408:14:1;;;405:34;;;435:1;432;425:12;405:34;473:6;462:9;458:22;448:32;;518:7;511:4;507:2;503:13;499:27;489:55;;540:1;537;530:12;489:55;569:2;563:9;591:2;587;584:10;581:36;;;597:18;;:::i;:::-;672:2;666:9;640:2;726:13;;-1:-1:-1;;722:22:1;;;746:2;718:31;714:40;702:53;;;770:18;;;790:22;;;767:46;764:72;;;816:18;;:::i;:::-;856:10;852:2;845:22;891:2;883:6;876:18;931:7;926:2;921;917;913:11;909:20;906:33;903:53;;;952:1;949;942:12;903:53;974:1;965:10;;984:129;998:2;995:1;992:9;984:129;;;1086:10;;;1082:19;;1076:26;1055:14;;;1051:23;;1044:59;1009:10;;;;984:129;;;1155:1;1150:2;1145;1137:6;1133:15;1129:24;1122:35;1176:6;1166:16;;;;;;;;146:1042;;;;:::o;1193:380::-;1272:1;1268:12;;;;1315;;;1336:61;;1390:4;1382:6;1378:17;1368:27;;1336:61;1443:2;1435:6;1432:14;1412:18;1409:38;1406:161;;1489:10;1484:3;1480:20;1477:1;1470:31;1524:4;1521:1;1514:15;1552:4;1549:1;1542:15;1406:161;;1193:380;;;:::o;1704:545::-;1806:2;1801:3;1798:11;1795:448;;;1842:1;1867:5;1863:2;1856:17;1912:4;1908:2;1898:19;1982:2;1970:10;1966:19;1963:1;1959:27;1953:4;1949:38;2018:4;2006:10;2003:20;2000:47;;;-1:-1:-1;2041:4:1;2000:47;2096:2;2091:3;2087:12;2084:1;2080:20;2074:4;2070:31;2060:41;;2151:82;2169:2;2162:5;2159:13;2151:82;;;2214:17;;;2195:1;2184:13;2151:82;;;2155:3;;;1795:448;1704:545;;;:::o;2425:1352::-;2545:10;;-1:-1:-1;;;;;2567:30:1;;2564:56;;;2600:18;;:::i;:::-;2629:97;2719:6;2679:38;2711:4;2705:11;2679:38;:::i;:::-;2673:4;2629:97;:::i;:::-;2781:4;;2845:2;2834:14;;2862:1;2857:663;;;;3564:1;3581:6;3578:89;;;-1:-1:-1;3633:19:1;;;3627:26;3578:89;-1:-1:-1;;2382:1:1;2378:11;;;2374:24;2370:29;2360:40;2406:1;2402:11;;;2357:57;3680:81;;2827:944;;2857:663;1651:1;1644:14;;;1688:4;1675:18;;-1:-1:-1;;2893:20:1;;;3011:236;3025:7;3022:1;3019:14;3011:236;;;3114:19;;;3108:26;3093:42;;3206:27;;;;3174:1;3162:14;;;;3041:19;;3011:236;;;3015:3;3275:6;3266:7;3263:19;3260:201;;;3336:19;;;3330:26;-1:-1:-1;;3419:1:1;3415:14;;;3431:3;3411:24;3407:37;3403:42;3388:58;3373:74;;3260:201;-1:-1:-1;;;;;3507:1:1;3491:14;;;3487:22;3474:36;;-1:-1:-1;2425:1352:1:o;:::-;58:1054:0;;;;;;"
		},
		"deployedBytecode": {
			"functionDebugData": {
				"@getSentence_21": {
					"entryPoint": 128,
					"id": 21,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@setSentence_31": {
					"entryPoint": 110,
					"id": 31,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"abi_decode_tuple_t_string_calldata_ptr": {
					"entryPoint": 274,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 2
				},
				"abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": 388,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"array_dataslot_string_storage": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"clean_up_bytearray_end_slots_string_storage": {
					"entryPoint": 546,
					"id": null,
					"parameterSlots": 3,
					"returnSlots": 0
				},
				"copy_byte_array_to_storage_from_t_string_calldata_ptr_to_t_string_storage": {
					"entryPoint": 624,
					"id": null,
					"parameterSlots": 3,
					"returnSlots": 0
				},
				"extract_byte_array_length": {
					"entryPoint": 488,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"extract_used_part_and_set_length_of_short_byte_array": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"panic_error_0x41": {
					"entryPoint": 466,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				}
			},
			"generatedSources": [
				{
					"ast": {
						"nodeType": "YulBlock",
						"src": "0:3736:1",
						"statements": [
							{
								"nodeType": "YulBlock",
								"src": "6:3:1",
								"statements": []
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "104:502:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "150:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "159:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "162:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "152:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "152:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "152:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nodeType": "YulIdentifier",
																"src": "125:7:1"
															},
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "134:9:1"
															}
														],
														"functionName": {
															"name": "sub",
															"nodeType": "YulIdentifier",
															"src": "121:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "121:23:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "146:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "117:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "117:32:1"
											},
											"nodeType": "YulIf",
											"src": "114:52:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "175:37:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "202:9:1"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nodeType": "YulIdentifier",
													"src": "189:12:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "189:23:1"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "179:6:1",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "221:28:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "231:18:1",
												"type": "",
												"value": "0xffffffffffffffff"
											},
											"variables": [
												{
													"name": "_1",
													"nodeType": "YulTypedName",
													"src": "225:2:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "276:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "285:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "288:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "278:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "278:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "278:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "264:6:1"
													},
													{
														"name": "_1",
														"nodeType": "YulIdentifier",
														"src": "272:2:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "261:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "261:14:1"
											},
											"nodeType": "YulIf",
											"src": "258:34:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "301:32:1",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "315:9:1"
													},
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "326:6:1"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "311:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "311:22:1"
											},
											"variables": [
												{
													"name": "_2",
													"nodeType": "YulTypedName",
													"src": "305:2:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "381:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "390:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "393:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "383:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "383:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "383:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "_2",
																		"nodeType": "YulIdentifier",
																		"src": "360:2:1"
																	},
																	{
																		"kind": "number",
																		"nodeType": "YulLiteral",
																		"src": "364:4:1",
																		"type": "",
																		"value": "0x1f"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nodeType": "YulIdentifier",
																	"src": "356:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "356:13:1"
															},
															{
																"name": "dataEnd",
																"nodeType": "YulIdentifier",
																"src": "371:7:1"
															}
														],
														"functionName": {
															"name": "slt",
															"nodeType": "YulIdentifier",
															"src": "352:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "352:27:1"
													}
												],
												"functionName": {
													"name": "iszero",
													"nodeType": "YulIdentifier",
													"src": "345:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "345:35:1"
											},
											"nodeType": "YulIf",
											"src": "342:55:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "406:30:1",
											"value": {
												"arguments": [
													{
														"name": "_2",
														"nodeType": "YulIdentifier",
														"src": "433:2:1"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nodeType": "YulIdentifier",
													"src": "420:12:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "420:16:1"
											},
											"variables": [
												{
													"name": "length",
													"nodeType": "YulTypedName",
													"src": "410:6:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "463:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "472:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "475:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "465:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "465:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "465:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "451:6:1"
													},
													{
														"name": "_1",
														"nodeType": "YulIdentifier",
														"src": "459:2:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "448:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "448:14:1"
											},
											"nodeType": "YulIf",
											"src": "445:34:1"
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "529:16:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "538:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "541:1:1",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "531:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "531:12:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "531:12:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "_2",
																		"nodeType": "YulIdentifier",
																		"src": "502:2:1"
																	},
																	{
																		"name": "length",
																		"nodeType": "YulIdentifier",
																		"src": "506:6:1"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nodeType": "YulIdentifier",
																	"src": "498:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "498:15:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "515:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "494:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "494:24:1"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "520:7:1"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "491:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "491:37:1"
											},
											"nodeType": "YulIf",
											"src": "488:57:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "554:21:1",
											"value": {
												"arguments": [
													{
														"name": "_2",
														"nodeType": "YulIdentifier",
														"src": "568:2:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "572:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "564:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "564:11:1"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "554:6:1"
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "584:16:1",
											"value": {
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "594:6:1"
											},
											"variableNames": [
												{
													"name": "value1",
													"nodeType": "YulIdentifier",
													"src": "584:6:1"
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_string_calldata_ptr",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "62:9:1",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nodeType": "YulTypedName",
										"src": "73:7:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "85:6:1",
										"type": ""
									},
									{
										"name": "value1",
										"nodeType": "YulTypedName",
										"src": "93:6:1",
										"type": ""
									}
								],
								"src": "14:592:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "732:427:1",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "742:12:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "752:2:1",
												"type": "",
												"value": "32"
											},
											"variables": [
												{
													"name": "_1",
													"nodeType": "YulTypedName",
													"src": "746:2:1",
													"type": ""
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "770:9:1"
													},
													{
														"name": "_1",
														"nodeType": "YulIdentifier",
														"src": "781:2:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "763:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "763:21:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "763:21:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "793:27:1",
											"value": {
												"arguments": [
													{
														"name": "value0",
														"nodeType": "YulIdentifier",
														"src": "813:6:1"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "807:5:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "807:13:1"
											},
											"variables": [
												{
													"name": "length",
													"nodeType": "YulTypedName",
													"src": "797:6:1",
													"type": ""
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "840:9:1"
															},
															{
																"name": "_1",
																"nodeType": "YulIdentifier",
																"src": "851:2:1"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "836:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "836:18:1"
													},
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "856:6:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "829:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "829:34:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "829:34:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "872:10:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "881:1:1",
												"type": "",
												"value": "0"
											},
											"variables": [
												{
													"name": "i",
													"nodeType": "YulTypedName",
													"src": "876:1:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "941:90:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"arguments": [
																		{
																			"arguments": [
																				{
																					"name": "headStart",
																					"nodeType": "YulIdentifier",
																					"src": "970:9:1"
																				},
																				{
																					"name": "i",
																					"nodeType": "YulIdentifier",
																					"src": "981:1:1"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "966:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "966:17:1"
																		},
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "985:2:1",
																			"type": "",
																			"value": "64"
																		}
																	],
																	"functionName": {
																		"name": "add",
																		"nodeType": "YulIdentifier",
																		"src": "962:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "962:26:1"
																},
																{
																	"arguments": [
																		{
																			"arguments": [
																				{
																					"arguments": [
																						{
																							"name": "value0",
																							"nodeType": "YulIdentifier",
																							"src": "1004:6:1"
																						},
																						{
																							"name": "i",
																							"nodeType": "YulIdentifier",
																							"src": "1012:1:1"
																						}
																					],
																					"functionName": {
																						"name": "add",
																						"nodeType": "YulIdentifier",
																						"src": "1000:3:1"
																					},
																					"nodeType": "YulFunctionCall",
																					"src": "1000:14:1"
																				},
																				{
																					"name": "_1",
																					"nodeType": "YulIdentifier",
																					"src": "1016:2:1"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "996:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "996:23:1"
																		}
																	],
																	"functionName": {
																		"name": "mload",
																		"nodeType": "YulIdentifier",
																		"src": "990:5:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "990:30:1"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "955:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "955:66:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "955:66:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "i",
														"nodeType": "YulIdentifier",
														"src": "902:1:1"
													},
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "905:6:1"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "899:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "899:13:1"
											},
											"nodeType": "YulForLoop",
											"post": {
												"nodeType": "YulBlock",
												"src": "913:19:1",
												"statements": [
													{
														"nodeType": "YulAssignment",
														"src": "915:15:1",
														"value": {
															"arguments": [
																{
																	"name": "i",
																	"nodeType": "YulIdentifier",
																	"src": "924:1:1"
																},
																{
																	"name": "_1",
																	"nodeType": "YulIdentifier",
																	"src": "927:2:1"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "920:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "920:10:1"
														},
														"variableNames": [
															{
																"name": "i",
																"nodeType": "YulIdentifier",
																"src": "915:1:1"
															}
														]
													}
												]
											},
											"pre": {
												"nodeType": "YulBlock",
												"src": "895:3:1",
												"statements": []
											},
											"src": "891:140:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nodeType": "YulIdentifier",
																		"src": "1055:9:1"
																	},
																	{
																		"name": "length",
																		"nodeType": "YulIdentifier",
																		"src": "1066:6:1"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nodeType": "YulIdentifier",
																	"src": "1051:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1051:22:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "1075:2:1",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "1047:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1047:31:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1080:1:1",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "1040:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1040:42:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "1040:42:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "1091:62:1",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "1107:9:1"
															},
															{
																"arguments": [
																	{
																		"arguments": [
																			{
																				"name": "length",
																				"nodeType": "YulIdentifier",
																				"src": "1126:6:1"
																			},
																			{
																				"kind": "number",
																				"nodeType": "YulLiteral",
																				"src": "1134:2:1",
																				"type": "",
																				"value": "31"
																			}
																		],
																		"functionName": {
																			"name": "add",
																			"nodeType": "YulIdentifier",
																			"src": "1122:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "1122:15:1"
																	},
																	{
																		"arguments": [
																			{
																				"kind": "number",
																				"nodeType": "YulLiteral",
																				"src": "1143:2:1",
																				"type": "",
																				"value": "31"
																			}
																		],
																		"functionName": {
																			"name": "not",
																			"nodeType": "YulIdentifier",
																			"src": "1139:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "1139:7:1"
																	}
																],
																"functionName": {
																	"name": "and",
																	"nodeType": "YulIdentifier",
																	"src": "1118:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "1118:29:1"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "1103:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1103:45:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1150:2:1",
														"type": "",
														"value": "64"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "1099:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1099:54:1"
											},
											"variableNames": [
												{
													"name": "tail",
													"nodeType": "YulIdentifier",
													"src": "1091:4:1"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nodeType": "YulTypedName",
										"src": "701:9:1",
										"type": ""
									},
									{
										"name": "value0",
										"nodeType": "YulTypedName",
										"src": "712:6:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nodeType": "YulTypedName",
										"src": "723:4:1",
										"type": ""
									}
								],
								"src": "611:548:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1196:95:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1213:1:1",
														"type": "",
														"value": "0"
													},
													{
														"arguments": [
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "1220:3:1",
																"type": "",
																"value": "224"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "1225:10:1",
																"type": "",
																"value": "0x4e487b71"
															}
														],
														"functionName": {
															"name": "shl",
															"nodeType": "YulIdentifier",
															"src": "1216:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1216:20:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "1206:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1206:31:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "1206:31:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1253:1:1",
														"type": "",
														"value": "4"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1256:4:1",
														"type": "",
														"value": "0x41"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "1246:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1246:15:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "1246:15:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1277:1:1",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1280:4:1",
														"type": "",
														"value": "0x24"
													}
												],
												"functionName": {
													"name": "revert",
													"nodeType": "YulIdentifier",
													"src": "1270:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1270:15:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "1270:15:1"
										}
									]
								},
								"name": "panic_error_0x41",
								"nodeType": "YulFunctionDefinition",
								"src": "1164:127:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1351:325:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "1361:22:1",
											"value": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1375:1:1",
														"type": "",
														"value": "1"
													},
													{
														"name": "data",
														"nodeType": "YulIdentifier",
														"src": "1378:4:1"
													}
												],
												"functionName": {
													"name": "shr",
													"nodeType": "YulIdentifier",
													"src": "1371:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1371:12:1"
											},
											"variableNames": [
												{
													"name": "length",
													"nodeType": "YulIdentifier",
													"src": "1361:6:1"
												}
											]
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "1392:38:1",
											"value": {
												"arguments": [
													{
														"name": "data",
														"nodeType": "YulIdentifier",
														"src": "1422:4:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1428:1:1",
														"type": "",
														"value": "1"
													}
												],
												"functionName": {
													"name": "and",
													"nodeType": "YulIdentifier",
													"src": "1418:3:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1418:12:1"
											},
											"variables": [
												{
													"name": "outOfPlaceEncoding",
													"nodeType": "YulTypedName",
													"src": "1396:18:1",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1469:31:1",
												"statements": [
													{
														"nodeType": "YulAssignment",
														"src": "1471:27:1",
														"value": {
															"arguments": [
																{
																	"name": "length",
																	"nodeType": "YulIdentifier",
																	"src": "1485:6:1"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1493:4:1",
																	"type": "",
																	"value": "0x7f"
																}
															],
															"functionName": {
																"name": "and",
																"nodeType": "YulIdentifier",
																"src": "1481:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1481:17:1"
														},
														"variableNames": [
															{
																"name": "length",
																"nodeType": "YulIdentifier",
																"src": "1471:6:1"
															}
														]
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "outOfPlaceEncoding",
														"nodeType": "YulIdentifier",
														"src": "1449:18:1"
													}
												],
												"functionName": {
													"name": "iszero",
													"nodeType": "YulIdentifier",
													"src": "1442:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1442:26:1"
											},
											"nodeType": "YulIf",
											"src": "1439:61:1"
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1559:111:1",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1580:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"arguments": [
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "1587:3:1",
																			"type": "",
																			"value": "224"
																		},
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "1592:10:1",
																			"type": "",
																			"value": "0x4e487b71"
																		}
																	],
																	"functionName": {
																		"name": "shl",
																		"nodeType": "YulIdentifier",
																		"src": "1583:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "1583:20:1"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "1573:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1573:31:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1573:31:1"
													},
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1624:1:1",
																	"type": "",
																	"value": "4"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1627:4:1",
																	"type": "",
																	"value": "0x22"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "1617:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1617:15:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1617:15:1"
													},
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1652:1:1",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "1655:4:1",
																	"type": "",
																	"value": "0x24"
																}
															],
															"functionName": {
																"name": "revert",
																"nodeType": "YulIdentifier",
																"src": "1645:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1645:15:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1645:15:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "outOfPlaceEncoding",
														"nodeType": "YulIdentifier",
														"src": "1515:18:1"
													},
													{
														"arguments": [
															{
																"name": "length",
																"nodeType": "YulIdentifier",
																"src": "1538:6:1"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "1546:2:1",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "lt",
															"nodeType": "YulIdentifier",
															"src": "1535:2:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "1535:14:1"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "1512:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1512:38:1"
											},
											"nodeType": "YulIf",
											"src": "1509:161:1"
										}
									]
								},
								"name": "extract_byte_array_length",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "data",
										"nodeType": "YulTypedName",
										"src": "1331:4:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "length",
										"nodeType": "YulTypedName",
										"src": "1340:6:1",
										"type": ""
									}
								],
								"src": "1296:380:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1737:65:1",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1754:1:1",
														"type": "",
														"value": "0"
													},
													{
														"name": "ptr",
														"nodeType": "YulIdentifier",
														"src": "1757:3:1"
													}
												],
												"functionName": {
													"name": "mstore",
													"nodeType": "YulIdentifier",
													"src": "1747:6:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1747:14:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "1747:14:1"
										},
										{
											"nodeType": "YulAssignment",
											"src": "1770:26:1",
											"value": {
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1788:1:1",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1791:4:1",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "keccak256",
													"nodeType": "YulIdentifier",
													"src": "1778:9:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1778:18:1"
											},
											"variableNames": [
												{
													"name": "data",
													"nodeType": "YulIdentifier",
													"src": "1770:4:1"
												}
											]
										}
									]
								},
								"name": "array_dataslot_string_storage",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "ptr",
										"nodeType": "YulTypedName",
										"src": "1720:3:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "data",
										"nodeType": "YulTypedName",
										"src": "1728:4:1",
										"type": ""
									}
								],
								"src": "1681:121:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "1888:464:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "1921:425:1",
												"statements": [
													{
														"nodeType": "YulVariableDeclaration",
														"src": "1935:11:1",
														"value": {
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1945:1:1",
															"type": "",
															"value": "0"
														},
														"variables": [
															{
																"name": "_1",
																"nodeType": "YulTypedName",
																"src": "1939:2:1",
																"type": ""
															}
														]
													},
													{
														"expression": {
															"arguments": [
																{
																	"name": "_1",
																	"nodeType": "YulIdentifier",
																	"src": "1966:2:1"
																},
																{
																	"name": "array",
																	"nodeType": "YulIdentifier",
																	"src": "1970:5:1"
																}
															],
															"functionName": {
																"name": "mstore",
																"nodeType": "YulIdentifier",
																"src": "1959:6:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "1959:17:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "1959:17:1"
													},
													{
														"nodeType": "YulVariableDeclaration",
														"src": "1989:31:1",
														"value": {
															"arguments": [
																{
																	"name": "_1",
																	"nodeType": "YulIdentifier",
																	"src": "2011:2:1"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "2015:4:1",
																	"type": "",
																	"value": "0x20"
																}
															],
															"functionName": {
																"name": "keccak256",
																"nodeType": "YulIdentifier",
																"src": "2001:9:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2001:19:1"
														},
														"variables": [
															{
																"name": "data",
																"nodeType": "YulTypedName",
																"src": "1993:4:1",
																"type": ""
															}
														]
													},
													{
														"nodeType": "YulVariableDeclaration",
														"src": "2033:57:1",
														"value": {
															"arguments": [
																{
																	"name": "data",
																	"nodeType": "YulIdentifier",
																	"src": "2056:4:1"
																},
																{
																	"arguments": [
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "2066:1:1",
																			"type": "",
																			"value": "5"
																		},
																		{
																			"arguments": [
																				{
																					"name": "startIndex",
																					"nodeType": "YulIdentifier",
																					"src": "2073:10:1"
																				},
																				{
																					"kind": "number",
																					"nodeType": "YulLiteral",
																					"src": "2085:2:1",
																					"type": "",
																					"value": "31"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "2069:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "2069:19:1"
																		}
																	],
																	"functionName": {
																		"name": "shr",
																		"nodeType": "YulIdentifier",
																		"src": "2062:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2062:27:1"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "2052:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2052:38:1"
														},
														"variables": [
															{
																"name": "deleteStart",
																"nodeType": "YulTypedName",
																"src": "2037:11:1",
																"type": ""
															}
														]
													},
													{
														"body": {
															"nodeType": "YulBlock",
															"src": "2127:23:1",
															"statements": [
																{
																	"nodeType": "YulAssignment",
																	"src": "2129:19:1",
																	"value": {
																		"name": "data",
																		"nodeType": "YulIdentifier",
																		"src": "2144:4:1"
																	},
																	"variableNames": [
																		{
																			"name": "deleteStart",
																			"nodeType": "YulIdentifier",
																			"src": "2129:11:1"
																		}
																	]
																}
															]
														},
														"condition": {
															"arguments": [
																{
																	"name": "startIndex",
																	"nodeType": "YulIdentifier",
																	"src": "2109:10:1"
																},
																{
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "2121:4:1",
																	"type": "",
																	"value": "0x20"
																}
															],
															"functionName": {
																"name": "lt",
																"nodeType": "YulIdentifier",
																"src": "2106:2:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2106:20:1"
														},
														"nodeType": "YulIf",
														"src": "2103:47:1"
													},
													{
														"nodeType": "YulVariableDeclaration",
														"src": "2163:41:1",
														"value": {
															"arguments": [
																{
																	"name": "data",
																	"nodeType": "YulIdentifier",
																	"src": "2177:4:1"
																},
																{
																	"arguments": [
																		{
																			"kind": "number",
																			"nodeType": "YulLiteral",
																			"src": "2187:1:1",
																			"type": "",
																			"value": "5"
																		},
																		{
																			"arguments": [
																				{
																					"name": "len",
																					"nodeType": "YulIdentifier",
																					"src": "2194:3:1"
																				},
																				{
																					"kind": "number",
																					"nodeType": "YulLiteral",
																					"src": "2199:2:1",
																					"type": "",
																					"value": "31"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "2190:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "2190:12:1"
																		}
																	],
																	"functionName": {
																		"name": "shr",
																		"nodeType": "YulIdentifier",
																		"src": "2183:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2183:20:1"
																}
															],
															"functionName": {
																"name": "add",
																"nodeType": "YulIdentifier",
																"src": "2173:3:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2173:31:1"
														},
														"variables": [
															{
																"name": "_2",
																"nodeType": "YulTypedName",
																"src": "2167:2:1",
																"type": ""
															}
														]
													},
													{
														"nodeType": "YulVariableDeclaration",
														"src": "2217:24:1",
														"value": {
															"name": "deleteStart",
															"nodeType": "YulIdentifier",
															"src": "2230:11:1"
														},
														"variables": [
															{
																"name": "start",
																"nodeType": "YulTypedName",
																"src": "2221:5:1",
																"type": ""
															}
														]
													},
													{
														"body": {
															"nodeType": "YulBlock",
															"src": "2315:21:1",
															"statements": [
																{
																	"expression": {
																		"arguments": [
																			{
																				"name": "start",
																				"nodeType": "YulIdentifier",
																				"src": "2324:5:1"
																			},
																			{
																				"name": "_1",
																				"nodeType": "YulIdentifier",
																				"src": "2331:2:1"
																			}
																		],
																		"functionName": {
																			"name": "sstore",
																			"nodeType": "YulIdentifier",
																			"src": "2317:6:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "2317:17:1"
																	},
																	"nodeType": "YulExpressionStatement",
																	"src": "2317:17:1"
																}
															]
														},
														"condition": {
															"arguments": [
																{
																	"name": "start",
																	"nodeType": "YulIdentifier",
																	"src": "2265:5:1"
																},
																{
																	"name": "_2",
																	"nodeType": "YulIdentifier",
																	"src": "2272:2:1"
																}
															],
															"functionName": {
																"name": "lt",
																"nodeType": "YulIdentifier",
																"src": "2262:2:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2262:13:1"
														},
														"nodeType": "YulForLoop",
														"post": {
															"nodeType": "YulBlock",
															"src": "2276:26:1",
															"statements": [
																{
																	"nodeType": "YulAssignment",
																	"src": "2278:22:1",
																	"value": {
																		"arguments": [
																			{
																				"name": "start",
																				"nodeType": "YulIdentifier",
																				"src": "2291:5:1"
																			},
																			{
																				"kind": "number",
																				"nodeType": "YulLiteral",
																				"src": "2298:1:1",
																				"type": "",
																				"value": "1"
																			}
																		],
																		"functionName": {
																			"name": "add",
																			"nodeType": "YulIdentifier",
																			"src": "2287:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "2287:13:1"
																	},
																	"variableNames": [
																		{
																			"name": "start",
																			"nodeType": "YulIdentifier",
																			"src": "2278:5:1"
																		}
																	]
																}
															]
														},
														"pre": {
															"nodeType": "YulBlock",
															"src": "2258:3:1",
															"statements": []
														},
														"src": "2254:82:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "len",
														"nodeType": "YulIdentifier",
														"src": "1904:3:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "1909:2:1",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "1901:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "1901:11:1"
											},
											"nodeType": "YulIf",
											"src": "1898:448:1"
										}
									]
								},
								"name": "clean_up_bytearray_end_slots_string_storage",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "array",
										"nodeType": "YulTypedName",
										"src": "1860:5:1",
										"type": ""
									},
									{
										"name": "len",
										"nodeType": "YulTypedName",
										"src": "1867:3:1",
										"type": ""
									},
									{
										"name": "startIndex",
										"nodeType": "YulTypedName",
										"src": "1872:10:1",
										"type": ""
									}
								],
								"src": "1807:545:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "2442:81:1",
									"statements": [
										{
											"nodeType": "YulAssignment",
											"src": "2452:65:1",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "data",
																"nodeType": "YulIdentifier",
																"src": "2467:4:1"
															},
															{
																"arguments": [
																	{
																		"arguments": [
																			{
																				"arguments": [
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "2485:1:1",
																						"type": "",
																						"value": "3"
																					},
																					{
																						"name": "len",
																						"nodeType": "YulIdentifier",
																						"src": "2488:3:1"
																					}
																				],
																				"functionName": {
																					"name": "shl",
																					"nodeType": "YulIdentifier",
																					"src": "2481:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "2481:11:1"
																			},
																			{
																				"arguments": [
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "2498:1:1",
																						"type": "",
																						"value": "0"
																					}
																				],
																				"functionName": {
																					"name": "not",
																					"nodeType": "YulIdentifier",
																					"src": "2494:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "2494:6:1"
																			}
																		],
																		"functionName": {
																			"name": "shr",
																			"nodeType": "YulIdentifier",
																			"src": "2477:3:1"
																		},
																		"nodeType": "YulFunctionCall",
																		"src": "2477:24:1"
																	}
																],
																"functionName": {
																	"name": "not",
																	"nodeType": "YulIdentifier",
																	"src": "2473:3:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "2473:29:1"
															}
														],
														"functionName": {
															"name": "and",
															"nodeType": "YulIdentifier",
															"src": "2463:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2463:40:1"
													},
													{
														"arguments": [
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "2509:1:1",
																"type": "",
																"value": "1"
															},
															{
																"name": "len",
																"nodeType": "YulIdentifier",
																"src": "2512:3:1"
															}
														],
														"functionName": {
															"name": "shl",
															"nodeType": "YulIdentifier",
															"src": "2505:3:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2505:11:1"
													}
												],
												"functionName": {
													"name": "or",
													"nodeType": "YulIdentifier",
													"src": "2460:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2460:57:1"
											},
											"variableNames": [
												{
													"name": "used",
													"nodeType": "YulIdentifier",
													"src": "2452:4:1"
												}
											]
										}
									]
								},
								"name": "extract_used_part_and_set_length_of_short_byte_array",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "data",
										"nodeType": "YulTypedName",
										"src": "2419:4:1",
										"type": ""
									},
									{
										"name": "len",
										"nodeType": "YulTypedName",
										"src": "2425:3:1",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "used",
										"nodeType": "YulTypedName",
										"src": "2433:4:1",
										"type": ""
									}
								],
								"src": "2357:166:1"
							},
							{
								"body": {
									"nodeType": "YulBlock",
									"src": "2631:1103:1",
									"statements": [
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "2672:22:1",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x41",
																"nodeType": "YulIdentifier",
																"src": "2674:16:1"
															},
															"nodeType": "YulFunctionCall",
															"src": "2674:18:1"
														},
														"nodeType": "YulExpressionStatement",
														"src": "2674:18:1"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "len",
														"nodeType": "YulIdentifier",
														"src": "2647:3:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2652:18:1",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "2644:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2644:27:1"
											},
											"nodeType": "YulIf",
											"src": "2641:53:1"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "slot",
														"nodeType": "YulIdentifier",
														"src": "2747:4:1"
													},
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "slot",
																		"nodeType": "YulIdentifier",
																		"src": "2785:4:1"
																	}
																],
																"functionName": {
																	"name": "sload",
																	"nodeType": "YulIdentifier",
																	"src": "2779:5:1"
																},
																"nodeType": "YulFunctionCall",
																"src": "2779:11:1"
															}
														],
														"functionName": {
															"name": "extract_byte_array_length",
															"nodeType": "YulIdentifier",
															"src": "2753:25:1"
														},
														"nodeType": "YulFunctionCall",
														"src": "2753:38:1"
													},
													{
														"name": "len",
														"nodeType": "YulIdentifier",
														"src": "2793:3:1"
													}
												],
												"functionName": {
													"name": "clean_up_bytearray_end_slots_string_storage",
													"nodeType": "YulIdentifier",
													"src": "2703:43:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2703:94:1"
											},
											"nodeType": "YulExpressionStatement",
											"src": "2703:94:1"
										},
										{
											"nodeType": "YulVariableDeclaration",
											"src": "2806:18:1",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2823:1:1",
												"type": "",
												"value": "0"
											},
											"variables": [
												{
													"name": "srcOffset",
													"nodeType": "YulTypedName",
													"src": "2810:9:1",
													"type": ""
												}
											]
										},
										{
											"cases": [
												{
													"body": {
														"nodeType": "YulBlock",
														"src": "2867:609:1",
														"statements": [
															{
																"nodeType": "YulVariableDeclaration",
																"src": "2881:32:1",
																"value": {
																	"arguments": [
																		{
																			"name": "len",
																			"nodeType": "YulIdentifier",
																			"src": "2900:3:1"
																		},
																		{
																			"arguments": [
																				{
																					"kind": "number",
																					"nodeType": "YulLiteral",
																					"src": "2909:2:1",
																					"type": "",
																					"value": "31"
																				}
																			],
																			"functionName": {
																				"name": "not",
																				"nodeType": "YulIdentifier",
																				"src": "2905:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "2905:7:1"
																		}
																	],
																	"functionName": {
																		"name": "and",
																		"nodeType": "YulIdentifier",
																		"src": "2896:3:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2896:17:1"
																},
																"variables": [
																	{
																		"name": "loopEnd",
																		"nodeType": "YulTypedName",
																		"src": "2885:7:1",
																		"type": ""
																	}
																]
															},
															{
																"nodeType": "YulVariableDeclaration",
																"src": "2926:49:1",
																"value": {
																	"arguments": [
																		{
																			"name": "slot",
																			"nodeType": "YulIdentifier",
																			"src": "2970:4:1"
																		}
																	],
																	"functionName": {
																		"name": "array_dataslot_string_storage",
																		"nodeType": "YulIdentifier",
																		"src": "2940:29:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "2940:35:1"
																},
																"variables": [
																	{
																		"name": "dstPtr",
																		"nodeType": "YulTypedName",
																		"src": "2930:6:1",
																		"type": ""
																	}
																]
															},
															{
																"nodeType": "YulVariableDeclaration",
																"src": "2988:18:1",
																"value": {
																	"name": "srcOffset",
																	"nodeType": "YulIdentifier",
																	"src": "2997:9:1"
																},
																"variables": [
																	{
																		"name": "i",
																		"nodeType": "YulTypedName",
																		"src": "2992:1:1",
																		"type": ""
																	}
																]
															},
															{
																"body": {
																	"nodeType": "YulBlock",
																	"src": "3076:172:1",
																	"statements": [
																		{
																			"expression": {
																				"arguments": [
																					{
																						"name": "dstPtr",
																						"nodeType": "YulIdentifier",
																						"src": "3101:6:1"
																					},
																					{
																						"arguments": [
																							{
																								"arguments": [
																									{
																										"name": "src",
																										"nodeType": "YulIdentifier",
																										"src": "3126:3:1"
																									},
																									{
																										"name": "srcOffset",
																										"nodeType": "YulIdentifier",
																										"src": "3131:9:1"
																									}
																								],
																								"functionName": {
																									"name": "add",
																									"nodeType": "YulIdentifier",
																									"src": "3122:3:1"
																								},
																								"nodeType": "YulFunctionCall",
																								"src": "3122:19:1"
																							}
																						],
																						"functionName": {
																							"name": "calldataload",
																							"nodeType": "YulIdentifier",
																							"src": "3109:12:1"
																						},
																						"nodeType": "YulFunctionCall",
																						"src": "3109:33:1"
																					}
																				],
																				"functionName": {
																					"name": "sstore",
																					"nodeType": "YulIdentifier",
																					"src": "3094:6:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3094:49:1"
																			},
																			"nodeType": "YulExpressionStatement",
																			"src": "3094:49:1"
																		},
																		{
																			"nodeType": "YulAssignment",
																			"src": "3160:24:1",
																			"value": {
																				"arguments": [
																					{
																						"name": "dstPtr",
																						"nodeType": "YulIdentifier",
																						"src": "3174:6:1"
																					},
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "3182:1:1",
																						"type": "",
																						"value": "1"
																					}
																				],
																				"functionName": {
																					"name": "add",
																					"nodeType": "YulIdentifier",
																					"src": "3170:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3170:14:1"
																			},
																			"variableNames": [
																				{
																					"name": "dstPtr",
																					"nodeType": "YulIdentifier",
																					"src": "3160:6:1"
																				}
																			]
																		},
																		{
																			"nodeType": "YulAssignment",
																			"src": "3201:33:1",
																			"value": {
																				"arguments": [
																					{
																						"name": "srcOffset",
																						"nodeType": "YulIdentifier",
																						"src": "3218:9:1"
																					},
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "3229:4:1",
																						"type": "",
																						"value": "0x20"
																					}
																				],
																				"functionName": {
																					"name": "add",
																					"nodeType": "YulIdentifier",
																					"src": "3214:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3214:20:1"
																			},
																			"variableNames": [
																				{
																					"name": "srcOffset",
																					"nodeType": "YulIdentifier",
																					"src": "3201:9:1"
																				}
																			]
																		}
																	]
																},
																"condition": {
																	"arguments": [
																		{
																			"name": "i",
																			"nodeType": "YulIdentifier",
																			"src": "3030:1:1"
																		},
																		{
																			"name": "loopEnd",
																			"nodeType": "YulIdentifier",
																			"src": "3033:7:1"
																		}
																	],
																	"functionName": {
																		"name": "lt",
																		"nodeType": "YulIdentifier",
																		"src": "3027:2:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "3027:14:1"
																},
																"nodeType": "YulForLoop",
																"post": {
																	"nodeType": "YulBlock",
																	"src": "3042:21:1",
																	"statements": [
																		{
																			"nodeType": "YulAssignment",
																			"src": "3044:17:1",
																			"value": {
																				"arguments": [
																					{
																						"name": "i",
																						"nodeType": "YulIdentifier",
																						"src": "3053:1:1"
																					},
																					{
																						"kind": "number",
																						"nodeType": "YulLiteral",
																						"src": "3056:4:1",
																						"type": "",
																						"value": "0x20"
																					}
																				],
																				"functionName": {
																					"name": "add",
																					"nodeType": "YulIdentifier",
																					"src": "3049:3:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3049:12:1"
																			},
																			"variableNames": [
																				{
																					"name": "i",
																					"nodeType": "YulIdentifier",
																					"src": "3044:1:1"
																				}
																			]
																		}
																	]
																},
																"pre": {
																	"nodeType": "YulBlock",
																	"src": "3023:3:1",
																	"statements": []
																},
																"src": "3019:229:1"
															},
															{
																"body": {
																	"nodeType": "YulBlock",
																	"src": "3293:127:1",
																	"statements": [
																		{
																			"expression": {
																				"arguments": [
																					{
																						"name": "dstPtr",
																						"nodeType": "YulIdentifier",
																						"src": "3318:6:1"
																					},
																					{
																						"arguments": [
																							{
																								"arguments": [
																									{
																										"arguments": [
																											{
																												"name": "src",
																												"nodeType": "YulIdentifier",
																												"src": "3347:3:1"
																											},
																											{
																												"name": "srcOffset",
																												"nodeType": "YulIdentifier",
																												"src": "3352:9:1"
																											}
																										],
																										"functionName": {
																											"name": "add",
																											"nodeType": "YulIdentifier",
																											"src": "3343:3:1"
																										},
																										"nodeType": "YulFunctionCall",
																										"src": "3343:19:1"
																									}
																								],
																								"functionName": {
																									"name": "calldataload",
																									"nodeType": "YulIdentifier",
																									"src": "3330:12:1"
																								},
																								"nodeType": "YulFunctionCall",
																								"src": "3330:33:1"
																							},
																							{
																								"arguments": [
																									{
																										"arguments": [
																											{
																												"arguments": [
																													{
																														"arguments": [
																															{
																																"kind": "number",
																																"nodeType": "YulLiteral",
																																"src": "3381:1:1",
																																"type": "",
																																"value": "3"
																															},
																															{
																																"name": "len",
																																"nodeType": "YulIdentifier",
																																"src": "3384:3:1"
																															}
																														],
																														"functionName": {
																															"name": "shl",
																															"nodeType": "YulIdentifier",
																															"src": "3377:3:1"
																														},
																														"nodeType": "YulFunctionCall",
																														"src": "3377:11:1"
																													},
																													{
																														"kind": "number",
																														"nodeType": "YulLiteral",
																														"src": "3390:3:1",
																														"type": "",
																														"value": "248"
																													}
																												],
																												"functionName": {
																													"name": "and",
																													"nodeType": "YulIdentifier",
																													"src": "3373:3:1"
																												},
																												"nodeType": "YulFunctionCall",
																												"src": "3373:21:1"
																											},
																											{
																												"arguments": [
																													{
																														"kind": "number",
																														"nodeType": "YulLiteral",
																														"src": "3400:1:1",
																														"type": "",
																														"value": "0"
																													}
																												],
																												"functionName": {
																													"name": "not",
																													"nodeType": "YulIdentifier",
																													"src": "3396:3:1"
																												},
																												"nodeType": "YulFunctionCall",
																												"src": "3396:6:1"
																											}
																										],
																										"functionName": {
																											"name": "shr",
																											"nodeType": "YulIdentifier",
																											"src": "3369:3:1"
																										},
																										"nodeType": "YulFunctionCall",
																										"src": "3369:34:1"
																									}
																								],
																								"functionName": {
																									"name": "not",
																									"nodeType": "YulIdentifier",
																									"src": "3365:3:1"
																								},
																								"nodeType": "YulFunctionCall",
																								"src": "3365:39:1"
																							}
																						],
																						"functionName": {
																							"name": "and",
																							"nodeType": "YulIdentifier",
																							"src": "3326:3:1"
																						},
																						"nodeType": "YulFunctionCall",
																						"src": "3326:79:1"
																					}
																				],
																				"functionName": {
																					"name": "sstore",
																					"nodeType": "YulIdentifier",
																					"src": "3311:6:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3311:95:1"
																			},
																			"nodeType": "YulExpressionStatement",
																			"src": "3311:95:1"
																		}
																	]
																},
																"condition": {
																	"arguments": [
																		{
																			"name": "loopEnd",
																			"nodeType": "YulIdentifier",
																			"src": "3267:7:1"
																		},
																		{
																			"name": "len",
																			"nodeType": "YulIdentifier",
																			"src": "3276:3:1"
																		}
																	],
																	"functionName": {
																		"name": "lt",
																		"nodeType": "YulIdentifier",
																		"src": "3264:2:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "3264:16:1"
																},
																"nodeType": "YulIf",
																"src": "3261:159:1"
															},
															{
																"expression": {
																	"arguments": [
																		{
																			"name": "slot",
																			"nodeType": "YulIdentifier",
																			"src": "3440:4:1"
																		},
																		{
																			"arguments": [
																				{
																					"arguments": [
																						{
																							"kind": "number",
																							"nodeType": "YulLiteral",
																							"src": "3454:1:1",
																							"type": "",
																							"value": "1"
																						},
																						{
																							"name": "len",
																							"nodeType": "YulIdentifier",
																							"src": "3457:3:1"
																						}
																					],
																					"functionName": {
																						"name": "shl",
																						"nodeType": "YulIdentifier",
																						"src": "3450:3:1"
																					},
																					"nodeType": "YulFunctionCall",
																					"src": "3450:11:1"
																				},
																				{
																					"kind": "number",
																					"nodeType": "YulLiteral",
																					"src": "3463:1:1",
																					"type": "",
																					"value": "1"
																				}
																			],
																			"functionName": {
																				"name": "add",
																				"nodeType": "YulIdentifier",
																				"src": "3446:3:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "3446:19:1"
																		}
																	],
																	"functionName": {
																		"name": "sstore",
																		"nodeType": "YulIdentifier",
																		"src": "3433:6:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "3433:33:1"
																},
																"nodeType": "YulExpressionStatement",
																"src": "3433:33:1"
															}
														]
													},
													"nodeType": "YulCase",
													"src": "2860:616:1",
													"value": {
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2865:1:1",
														"type": "",
														"value": "1"
													}
												},
												{
													"body": {
														"nodeType": "YulBlock",
														"src": "3493:235:1",
														"statements": [
															{
																"nodeType": "YulVariableDeclaration",
																"src": "3507:14:1",
																"value": {
																	"kind": "number",
																	"nodeType": "YulLiteral",
																	"src": "3520:1:1",
																	"type": "",
																	"value": "0"
																},
																"variables": [
																	{
																		"name": "value",
																		"nodeType": "YulTypedName",
																		"src": "3511:5:1",
																		"type": ""
																	}
																]
															},
															{
																"body": {
																	"nodeType": "YulBlock",
																	"src": "3553:74:1",
																	"statements": [
																		{
																			"nodeType": "YulAssignment",
																			"src": "3571:42:1",
																			"value": {
																				"arguments": [
																					{
																						"arguments": [
																							{
																								"name": "src",
																								"nodeType": "YulIdentifier",
																								"src": "3597:3:1"
																							},
																							{
																								"name": "srcOffset",
																								"nodeType": "YulIdentifier",
																								"src": "3602:9:1"
																							}
																						],
																						"functionName": {
																							"name": "add",
																							"nodeType": "YulIdentifier",
																							"src": "3593:3:1"
																						},
																						"nodeType": "YulFunctionCall",
																						"src": "3593:19:1"
																					}
																				],
																				"functionName": {
																					"name": "calldataload",
																					"nodeType": "YulIdentifier",
																					"src": "3580:12:1"
																				},
																				"nodeType": "YulFunctionCall",
																				"src": "3580:33:1"
																			},
																			"variableNames": [
																				{
																					"name": "value",
																					"nodeType": "YulIdentifier",
																					"src": "3571:5:1"
																				}
																			]
																		}
																	]
																},
																"condition": {
																	"name": "len",
																	"nodeType": "YulIdentifier",
																	"src": "3537:3:1"
																},
																"nodeType": "YulIf",
																"src": "3534:93:1"
															},
															{
																"expression": {
																	"arguments": [
																		{
																			"name": "slot",
																			"nodeType": "YulIdentifier",
																			"src": "3647:4:1"
																		},
																		{
																			"arguments": [
																				{
																					"name": "value",
																					"nodeType": "YulIdentifier",
																					"src": "3706:5:1"
																				},
																				{
																					"name": "len",
																					"nodeType": "YulIdentifier",
																					"src": "3713:3:1"
																				}
																			],
																			"functionName": {
																				"name": "extract_used_part_and_set_length_of_short_byte_array",
																				"nodeType": "YulIdentifier",
																				"src": "3653:52:1"
																			},
																			"nodeType": "YulFunctionCall",
																			"src": "3653:64:1"
																		}
																	],
																	"functionName": {
																		"name": "sstore",
																		"nodeType": "YulIdentifier",
																		"src": "3640:6:1"
																	},
																	"nodeType": "YulFunctionCall",
																	"src": "3640:78:1"
																},
																"nodeType": "YulExpressionStatement",
																"src": "3640:78:1"
															}
														]
													},
													"nodeType": "YulCase",
													"src": "3485:243:1",
													"value": "default"
												}
											],
											"expression": {
												"arguments": [
													{
														"name": "len",
														"nodeType": "YulIdentifier",
														"src": "2843:3:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2848:2:1",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "2840:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "2840:11:1"
											},
											"nodeType": "YulSwitch",
											"src": "2833:895:1"
										}
									]
								},
								"name": "copy_byte_array_to_storage_from_t_string_calldata_ptr_to_t_string_storage",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "slot",
										"nodeType": "YulTypedName",
										"src": "2611:4:1",
										"type": ""
									},
									{
										"name": "src",
										"nodeType": "YulTypedName",
										"src": "2617:3:1",
										"type": ""
									},
									{
										"name": "len",
										"nodeType": "YulTypedName",
										"src": "2622:3:1",
										"type": ""
									}
								],
								"src": "2528:1206:1"
							}
						]
					},
					"contents": "{\n    { }\n    function abi_decode_tuple_t_string_calldata_ptr(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let offset := calldataload(headStart)\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := calldataload(_2)\n        if gt(length, _1) { revert(0, 0) }\n        if gt(add(add(_2, length), 32), dataEnd) { revert(0, 0) }\n        value0 := add(_2, 32)\n        value1 := length\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        mstore(add(add(headStart, length), 64), 0)\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_calldata_ptr_to_t_string_storage(slot, src, len)\n    {\n        if gt(len, 0xffffffffffffffff) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), len)\n        let srcOffset := 0\n        switch gt(len, 31)\n        case 1 {\n            let loopEnd := and(len, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := srcOffset\n            for { } lt(i, loopEnd) { i := add(i, 0x20) }\n            {\n                sstore(dstPtr, calldataload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 0x20)\n            }\n            if lt(loopEnd, len)\n            {\n                sstore(dstPtr, and(calldataload(add(src, srcOffset)), not(shr(and(shl(3, len), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, len), 1))\n        }\n        default {\n            let value := 0\n            if len\n            {\n                value := calldataload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, len))\n        }\n    }\n}",
					"id": 1,
					"language": "Yul",
					"name": "#utility.yul"
				}
			],
			"immutableReferences": {},
			"linkReferences": {},
			"object": "608060405234801561001057600080fd5b50600436106100365760003560e01c8063adc3034b1461003b578063ef738a5614610050575b600080fd5b61004e610049366004610112565b61006e565b005b610058610080565b6040516100659190610184565b60405180910390f35b600061007b828483610270565b505050565b60606000805461008f906101e8565b80601f01602080910402602001604051908101604052809291908181526020018280546100bb906101e8565b80156101085780601f106100dd57610100808354040283529160200191610108565b820191906000526020600020905b8154815290600101906020018083116100eb57829003601f168201915b5050505050905090565b6000806020838503121561012557600080fd5b823567ffffffffffffffff8082111561013d57600080fd5b818501915085601f83011261015157600080fd5b81358181111561016057600080fd5b86602082850101111561017257600080fd5b60209290920196919550909350505050565b600060208083528351808285015260005b818110156101b157858101830151858201604001528201610195565b506000604082860101526040601f19601f8301168501019250505092915050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806101fc57607f821691505b60208210810361021c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561007b57600081815260208120601f850160051c810160208610156102495750805b601f850160051c820191505b8181101561026857828155600101610255565b505050505050565b67ffffffffffffffff831115610288576102886101d2565b61029c8361029683546101e8565b83610222565b6000601f8411600181146102d057600085156102b85750838201355b600019600387901b1c1916600186901b17835561032a565b600083815260209020601f19861690835b8281101561030157868501358255602094850194600190920191016102e1565b508682101561031e5760001960f88860031b161c19848701351681555b505060018560011b0183555b505050505056fea264697066735822122099781b91dc3e1fa697bedd1c770e4acd63d3758d4d8dc8a384a26e93a61ee76b64736f6c63430008120033",
			"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xADC3034B EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xEF738A56 EQ PUSH2 0x50 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x4E PUSH2 0x49 CALLDATASIZE PUSH1 0x4 PUSH2 0x112 JUMP JUMPDEST PUSH2 0x6E JUMP JUMPDEST STOP JUMPDEST PUSH2 0x58 PUSH2 0x80 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x65 SWAP2 SWAP1 PUSH2 0x184 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 PUSH2 0x7B DUP3 DUP5 DUP4 PUSH2 0x270 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP1 SLOAD PUSH2 0x8F SWAP1 PUSH2 0x1E8 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0xBB SWAP1 PUSH2 0x1E8 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x108 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xDD JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x108 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xEB JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x20 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x125 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x13D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 DUP6 ADD SWAP2 POP DUP6 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x151 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x160 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP7 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x172 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x20 SWAP3 SWAP1 SWAP3 ADD SWAP7 SWAP2 SWAP6 POP SWAP1 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP1 DUP4 MSTORE DUP4 MLOAD DUP1 DUP3 DUP6 ADD MSTORE PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x1B1 JUMPI DUP6 DUP2 ADD DUP4 ADD MLOAD DUP6 DUP3 ADD PUSH1 0x40 ADD MSTORE DUP3 ADD PUSH2 0x195 JUMP JUMPDEST POP PUSH1 0x0 PUSH1 0x40 DUP3 DUP7 ADD ADD MSTORE PUSH1 0x40 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND DUP6 ADD ADD SWAP3 POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x1 DUP2 DUP2 SHR SWAP1 DUP3 AND DUP1 PUSH2 0x1FC JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH2 0x21C JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1F DUP3 GT ISZERO PUSH2 0x7B JUMPI PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x20 DUP2 KECCAK256 PUSH1 0x1F DUP6 ADD PUSH1 0x5 SHR DUP2 ADD PUSH1 0x20 DUP7 LT ISZERO PUSH2 0x249 JUMPI POP DUP1 JUMPDEST PUSH1 0x1F DUP6 ADD PUSH1 0x5 SHR DUP3 ADD SWAP2 POP JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x268 JUMPI DUP3 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x255 JUMP JUMPDEST POP POP POP POP POP POP JUMP JUMPDEST PUSH8 0xFFFFFFFFFFFFFFFF DUP4 GT ISZERO PUSH2 0x288 JUMPI PUSH2 0x288 PUSH2 0x1D2 JUMP JUMPDEST PUSH2 0x29C DUP4 PUSH2 0x296 DUP4 SLOAD PUSH2 0x1E8 JUMP JUMPDEST DUP4 PUSH2 0x222 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F DUP5 GT PUSH1 0x1 DUP2 EQ PUSH2 0x2D0 JUMPI PUSH1 0x0 DUP6 ISZERO PUSH2 0x2B8 JUMPI POP DUP4 DUP3 ADD CALLDATALOAD JUMPDEST PUSH1 0x0 NOT PUSH1 0x3 DUP8 SWAP1 SHL SHR NOT AND PUSH1 0x1 DUP7 SWAP1 SHL OR DUP4 SSTORE PUSH2 0x32A JUMP JUMPDEST PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 SWAP1 KECCAK256 PUSH1 0x1F NOT DUP7 AND SWAP1 DUP4 JUMPDEST DUP3 DUP2 LT ISZERO PUSH2 0x301 JUMPI DUP7 DUP6 ADD CALLDATALOAD DUP3 SSTORE PUSH1 0x20 SWAP5 DUP6 ADD SWAP5 PUSH1 0x1 SWAP1 SWAP3 ADD SWAP2 ADD PUSH2 0x2E1 JUMP JUMPDEST POP DUP7 DUP3 LT ISZERO PUSH2 0x31E JUMPI PUSH1 0x0 NOT PUSH1 0xF8 DUP9 PUSH1 0x3 SHL AND SHR NOT DUP5 DUP8 ADD CALLDATALOAD AND DUP2 SSTORE JUMPDEST POP POP PUSH1 0x1 DUP6 PUSH1 0x1 SHL ADD DUP4 SSTORE JUMPDEST POP POP POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SWAP10 PUSH25 0x1B91DC3E1FA697BEDD1C770E4ACD63D3758D4D8DC8A384A26E SWAP4 0xA6 0x1E 0xE7 PUSH12 0x64736F6C6343000812003300 ",
			"sourceMap": "58:1054:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;928:182;;;;;;:::i;:::-;;:::i;:::-;;641:99;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;928:182;1073:16;:30;1092:11;;1073:16;:30;:::i;:::-;;928:182;;:::o;641:99::-;685:13;717:16;710:23;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;641:99;:::o;14:592:1:-;85:6;93;146:2;134:9;125:7;121:23;117:32;114:52;;;162:1;159;152:12;114:52;202:9;189:23;231:18;272:2;264:6;261:14;258:34;;;288:1;285;278:12;258:34;326:6;315:9;311:22;301:32;;371:7;364:4;360:2;356:13;352:27;342:55;;393:1;390;383:12;342:55;433:2;420:16;459:2;451:6;448:14;445:34;;;475:1;472;465:12;445:34;520:7;515:2;506:6;502:2;498:15;494:24;491:37;488:57;;;541:1;538;531:12;488:57;572:2;564:11;;;;;594:6;;-1:-1:-1;14:592:1;;-1:-1:-1;;;;14:592:1:o;611:548::-;723:4;752:2;781;770:9;763:21;813:6;807:13;856:6;851:2;840:9;836:18;829:34;881:1;891:140;905:6;902:1;899:13;891:140;;;1000:14;;;996:23;;990:30;966:17;;;985:2;962:26;955:66;920:10;;891:140;;;895:3;1080:1;1075:2;1066:6;1055:9;1051:22;1047:31;1040:42;1150:2;1143;1139:7;1134:2;1126:6;1122:15;1118:29;1107:9;1103:45;1099:54;1091:62;;;;611:548;;;;:::o;1164:127::-;1225:10;1220:3;1216:20;1213:1;1206:31;1256:4;1253:1;1246:15;1280:4;1277:1;1270:15;1296:380;1375:1;1371:12;;;;1418;;;1439:61;;1493:4;1485:6;1481:17;1471:27;;1439:61;1546:2;1538:6;1535:14;1515:18;1512:38;1509:161;;1592:10;1587:3;1583:20;1580:1;1573:31;1627:4;1624:1;1617:15;1655:4;1652:1;1645:15;1509:161;;1296:380;;;:::o;1807:545::-;1909:2;1904:3;1901:11;1898:448;;;1945:1;1970:5;1966:2;1959:17;2015:4;2011:2;2001:19;2085:2;2073:10;2069:19;2066:1;2062:27;2056:4;2052:38;2121:4;2109:10;2106:20;2103:47;;;-1:-1:-1;2144:4:1;2103:47;2199:2;2194:3;2190:12;2187:1;2183:20;2177:4;2173:31;2163:41;;2254:82;2272:2;2265:5;2262:13;2254:82;;;2317:17;;;2298:1;2287:13;2254:82;;;2258:3;;;1807:545;;;:::o;2528:1206::-;2652:18;2647:3;2644:27;2641:53;;;2674:18;;:::i;:::-;2703:94;2793:3;2753:38;2785:4;2779:11;2753:38;:::i;:::-;2747:4;2703:94;:::i;:::-;2823:1;2848:2;2843:3;2840:11;2865:1;2860:616;;;;3520:1;3537:3;3534:93;;;-1:-1:-1;3593:19:1;;;3580:33;3534:93;-1:-1:-1;;2485:1:1;2481:11;;;2477:24;2473:29;2463:40;2509:1;2505:11;;;2460:57;3640:78;;2833:895;;2860:616;1754:1;1747:14;;;1791:4;1778:18;;-1:-1:-1;;2896:17:1;;;2997:9;3019:229;3033:7;3030:1;3027:14;3019:229;;;3122:19;;;3109:33;3094:49;;3229:4;3214:20;;;;3182:1;3170:14;;;;3049:12;3019:229;;;3023:3;3276;3267:7;3264:16;3261:159;;;3400:1;3396:6;3390:3;3384;3381:1;3377:11;3373:21;3369:34;3365:39;3352:9;3347:3;3343:19;3330:33;3326:79;3318:6;3311:95;3261:159;;;3463:1;3457:3;3454:1;3450:11;3446:19;3440:4;3433:33;2833:895;;;2528:1206;;;:::o"
		},
		"gasEstimates": {
			"creation": {
				"codeDepositCost": "174200",
				"executionCost": "infinite",
				"totalCost": "infinite"
			},
			"external": {
				"getSentence()": "infinite",
				"setSentence(string)": "infinite"
			}
		},
		"methodIdentifiers": {
			"getSentence()": "ef738a56",
			"setSentence(string)": "adc3034b"
		}
	},
	"abi": [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "initialSentence",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [],
			"name": "getSentence",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "newSentence",
					"type": "string"
				}
			],
			"name": "setSentence",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}
  ];
