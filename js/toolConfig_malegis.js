	// Set tools status and settings according to this pattern.  
	
	// It is recommended not to modify this file, but to create alternate 
	// toolConfigs and use those, so that toolConfig files may be shared across
	// different sites.

	// tools - measureTool, identify, bingAddressSearch, exportData
	// 		status - hide, show

	
	var toolSettings = {};
	
        toolSettings.externalWMS = {};
        toolSettings.externalWMS.status = 'hide';

	toolSettings.measureTool = {};
	toolSettings.measureTool.status = 'hide';
	toolSettings.measureTool.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "a"
	};	

        toolSettings.clearMeasure = {};
        toolSettings.clearMeasure.keyMap = {   // not required
                "ctrl":true,                    // not required if false
                "alt": true,                    // not required if false
                "key": "h"
        };

	toolSettings.permalink = {};
	toolSettings.permalink.status = 'show';
	toolSettings.permalink.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "k"
	};	
	
	toolSettings.scaleSettings = {};
	toolSettings.scaleSettings.status = 'hide';
	toolSettings.scaleSettings.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "g"
	};	


	toolSettings.mapUnits = {};
	toolSettings.mapUnits.status = 'show';
	toolSettings.mapUnits.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "u"
	};	


	toolSettings.basemaps = {};
	toolSettings.basemaps.status = 'show';
	toolSettings.basemaps.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "b"
	};	
	

        toolSettings.identify = {};
        toolSettings.identifyPoly = {};
        toolSettings.identify.status = 'show';
        toolSettings.identifyPoly.status = 'hide';

        toolSettings.identify.identify_keymap = {
                "ctrl":true,                    // not required if false
                "alt": true,                    // not required if false
                "key": "f"
        };

        toolSettings.identifyPoly.identifyPoly_keymap = {
                "ctrl":true,                    // not required if false
                "alt": true,                    // not required if false
                "key": "v"
        };
	
	toolSettings.bingAddressSearch = {};
	toolSettings.bingAddressSearch.status = 'hide';
	toolSettings.bingAddressSearch.keyMap = {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "l"
	};	

        toolSettings.bingSearchClear = {};
        toolSettings.bingSearchClear.keyMap = {   // not required
                "ctrl":true,                    // not required if false
                "alt": true,                    // not required if false
                "key": "j"
        };

        toolSettings.massgisAddressSearch = {};
        toolSettings.massgisAddressSearch.status = 'hide';
        toolSettings.massgisAddressSearch.keyMap = {                                       // not required
                "ctrl":true,                    // not required if false
                "alt": true,                    // not required if false
                "key": "M"
        };
        toolSettings.massgisAddressSearch.url = 'http://gisprpxy.itd.state.ma.us/MassGISGeocodeServiceApplication/MassGISCustomGeocodeService.asmx';
	
	toolSettings.exportData = {};
	toolSettings.exportData.status = 'hide';	
	toolSettings.exportData.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "x"
	};	

        toolSettings.printSave = {};
        toolSettings.printSave.status = 'show';
        toolSettings.printSave.keyMap =  {                                     // not required
                "ctrl":true,                    // not required if false
                "alt": true,                    // not required if false
                "key": "w"
        };

	
        toolSettings.quickZoomTools = {};
        toolSettings.quickZoomTools.status = 'show';
        toolSettings.quickZoomTools.tools = [
                {id: 1,                                                 // ids must be unique
                 label: 'Pick a MA Represenatitive',
                 layer: 'massgis:GISDATA.HOUSE2012_POLY',
                 valueField: 'REP',
                 width : 165,
                 sortBy : 'REP', // optional, fieldname
                 sortOrder : 'A' // optional, acceptable values = A, D
                },
                {id: 3,                                                 // ids must be unique
                 label: 'Pick a Rep. District',
                 layer: 'massgis:GISDATA.HOUSE2012_POLY',
                 valueField: 'REP_DIST',
                 width : 185,
                 sortBy : 'REP_DIST', // optional, fieldname
                 sortOrder : 'A' // optional, acceptable values = A, D
                },
                {id: 2,                                                 // ids must be unique
                 label: 'Pick a MA Senator',
                 layer: 'massgis:GISDATA.SENATE2012_POLY',
                 valueField: 'SENATOR',
                 width : 173,
                 sortBy : 'SENATOR',
                 sortOrder : 'A',
                },
                {id: 4,                                                 // ids must be unique
                 label: 'Pick a Senate District',
                 layer: 'massgis:GISDATA.SENATE2012_POLY',
                 valueField: 'SEN_DIST',
                 width : 255,
                 sortBy : 'SEN_DIST', // optional, fieldname
                 sortOrder : 'A' // optional, acceptable values = A, D
                },
                {id: 5,                                                 // ids must be unique
                 label: 'Pick a Municipality',
                 layer: 'massgis:GISDATA.TOWNSSURVEY_POLYM',
                 valueField: 'TOWN',
                 width : 140,
                 sortBy : 'TOWN', // optional, fieldname
                 sortOrder : 'A' // optional, acceptable values = A, D
                }
        ];
	
	toolSettings.commentTool = {};
	toolSettings.commentTool.status = 'hide';
	toolSettings.commentTool.layer = {
		//commentLabel: "Add comment",
		commentDesc: "Leave a comment about an error in the data",
		layerName: 'AFREEMAN.GEOSERVER_TEST_PT_COMMENT',
		srs : 'EPSG:26986',
		geometryName : "SHAPE"
		};

	toolSettings.commentTool.keyMap = {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "c"
	};
	
	toolSettings.commentTool.fields = [
		{
			name : "U_NAME",
			optionalField: true,
			optionalText : "This field is optional and is collected only to contact you for more information about your comment",
			fieldLabel : "Name",
			maxLength  : 100 // optional
		
		},
		{
			name : "U_ADDR",
			fieldLabel : "Address",
			optionalField: true,
			optionalText : "This field is optional and is collected only to contact you for more information about your comment",
			maxLength  : 100 // optional
		
		},
		{
			name : "U_PHONE",
			fieldLabel : "Phone #",
			optionalField: true,
			optionalText : "This field is optional and is collected only to contact you for more information about your comment",
			maxLength  : 100 // optional
		
		},
		{
			name : "U_EMAIL",
			fieldLabel : "Email",
			optionalField: true,
			optionalText : "This field is optional and is collected only to contact you for more information about your comment",
			maxLength  : 100 // optional
		
		},			
		{
			name : "ISSUE",
			fieldLabel : "Issue",
			maxLength : 100, // optional
			store: ["Road name incorrect","Missing openspace"],
			allowBlank: false,
			xtype: 'combo',
			required:true // adds red asterisk
		
		},
		{
			name : "OBJECTID",
			fieldLabel : "OBJECTID",
			hideLabel: true,
			plugins: [] , // necessary to override to avoid labelling this field
			maxLength : 100, // optional
			allowBlank: false,
			xtype: 'hidden'	,	
			value : -1
		
		},		
		{
			xtype: 'textarea',
			name : "COMMENTS",
			hideLabel: true,
			allowBlank: false,
			required:true, // adds red asterisk
			plugins: [] , // necessary to override to avoid labelling this field
			fieldLabel : "Comments",
			maxLength : 500,
			hideLabel: true,
			flex: 1  // Take up all *remaining* vertical space		
		}		
	];
	
	toolSettings.editTool = {};
	toolSettings.editTool.status = 'hide';

	toolSettings.editTool.keyMap_draw = {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "d"
	};

	toolSettings.editTool.keyMap_edit = {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "e"
	};
	
	toolSettings.editTool.layers = [
		{
			featureType: "AFREEMAN.GEOSERVER_TEST_LINE",
			layerTitle : "Geoserver Editable Line", // must match whatever is found in folderset for this layer.
			split: true,
			snapTo: ["AFREEMAN.GEOSERVER_TEST_LINE","AFREEMAN.GEOSERVER_TEST_PT_COMMENT"]
		}
/*,
		{
			featureType: "AFREEMAN.GEOSERVER_TEST_POLY",
			layerTitle : "Geoserver Editable Polygon" // must match whatever is found in folderset for this layer.
		},
		{
			featureType: "AFREEMAN.GEOSERVER_TEST_PT",
			layerTitle : "Geoserver Editable Point - HTTPS" // must match whatever is found in folderset for this layer.
		}
		*/
		,{
			featureType: "AFREEMAN.GEOSERVER_TEST_PT_COMMENT",
			layerTitle : "Geoserver Editable Comments" // must match whatever is found in folderset for this layer.
		}
	/*
		,{
			featureType: "test_geoserver_line",
			layerTitle : "MapsOnline Geoserver Line", // must match whatever is found in folderset for this layer.
			split: true
		}
*/
	];
	
	toolSettings.navigationTools = {};
	toolSettings.navigationTools.zoomIn = {};
        toolSettings.navigationTools.zoomIn.status = 'show';
	toolSettings.navigationTools.zoomIn.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "z"
	};
	
	toolSettings.navigationTools.zoomOut = {};
        toolSettings.navigationTools.zoomOut.status = 'show';
	toolSettings.navigationTools.zoomOut.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "o"
	};	
	
	
	toolSettings.navigationTools.pan = {};
        toolSettings.navigationTools.pan.status = 'show';
	toolSettings.navigationTools.pan.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "p"
	};		
	
	toolSettings.navigationTools.nextExtent = {};
        toolSettings.navigationTools.nextExtent.status = 'hide';
	toolSettings.navigationTools.nextExtent.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "n"
	};	

	toolSettings.navigationTools.maxExtent = {};
        toolSettings.navigationTools.maxExtent.status = 'hide';
	toolSettings.navigationTools.maxExtent.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "m"
	};		
	
	toolSettings.navigationTools.initExtent = {};
        toolSettings.navigationTools.initExtent.status = 'hide';
	toolSettings.navigationTools.initExtent.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "i"
	};	
	
	toolSettings.navigationTools.prevExtent = {};
        toolSettings.navigationTools.prevExtent.status = 'hide';
	toolSettings.navigationTools.prevExtent.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "r"
	};	
		
	toolSettings.navigationTools.zoomScale = {};
        toolSettings.navigationTools.zoomScale.status = 'hide';
	toolSettings.navigationTools.zoomScale.keyMap =  {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "s"
	};		
	
	toolSettings.help = {};
	toolSettings.help.keyMap ={					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "q" // because ctrl-alt-h was a conflict
	};		
	
	var additionalSettings = {};
	additionalSettings.layerList = {};
	additionalSettings.layerList.searchBox = {};
	additionalSettings.layerList.searchBox.keyMap = {					// not required
		"ctrl":true,			// not required if false
		"alt": true,			// not required if false
		"key": "y"
	};
