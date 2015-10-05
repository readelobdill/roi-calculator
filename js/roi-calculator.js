(function(){
var stateData = {
    "Alabama": { "totalPublicFleet":36668.00000000000000000, "bridges":15715.00000000000000000, "deficientBridges":2588.00000000000000000, "deficientStucture":0.16468342348075100, "bidgesPerLaneLength":13.54190264078910000, "laneLength":212811.00000000000000000, "roadLength":101811.00000000000000000, "laneMilesConversionRatio":2.09025547337714000, "vehicleMilesTraveled":64959.00000000000000000, "registeredAutos":2042489.00000000000000000, "registeredBuses":5699.00000000000000000, "registeredTrucks":2663979.00000000000000000, "totalRegisteredVehicles":4712167.00000000000000000, "commercialSemiTrucks":188486.68000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":215416579.40785700000000000, "highwayCorrosionCosts":98515229.00243010000000000},
    "Alaska": { "totalPublicFleet":11170.00000000000000000, "bridges":1174.00000000000000000, "deficientBridges":144.00000000000000000, "deficientStucture":0.12265758091993200, "bidgesPerLaneLength":27.98977853492330000, "laneLength":32860.00000000000000000, "roadLength":16301.00000000000000000, "laneMilesConversionRatio":2.01582724986197000, "vehicleMilesTraveled":4792.00000000000000000, "registeredAutos":193151.00000000000000000, "registeredBuses":3487.00000000000000000, "registeredTrucks":546667.00000000000000000, "totalRegisteredVehicles":743305.00000000000000000, "commercialSemiTrucks":29732.20000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":16092845.32133780000000000, "highwayCorrosionCosts":15211668.68733220000000000},
    "Arizona": { "totalPublicFleet":48477.00000000000000000, "bridges":6955.00000000000000000, "deficientBridges":170.00000000000000000, "deficientStucture":0.02444284687275340, "bidgesPerLaneLength":20.39985621854780000, "laneLength":141881.00000000000000000, "roadLength":65262.00000000000000000, "laneMilesConversionRatio":2.17402163586773000, "vehicleMilesTraveled":60129.00000000000000000, "registeredAutos":2124041.00000000000000000, "registeredBuses":20850.00000000000000000, "registeredTrucks":2869368.00000000000000000, "totalRegisteredVehicles":5014259.00000000000000000, "commercialSemiTrucks":200570.36000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":95337086.20945890000000000, "highwayCorrosionCosts":65680059.79998110000000000},
    "Arkansas": { "totalPublicFleet":57795.00000000000000000, "bridges":12451.00000000000000000, "deficientBridges":1363.00000000000000000, "deficientStucture":0.10946911894626900, "bidgesPerLaneLength":16.47056461328410000, "laneLength":205075.00000000000000000, "roadLength":100123.00000000000000000, "laneMilesConversionRatio":2.04823067626819000, "vehicleMilesTraveled":33522.00000000000000000, "registeredAutos":881272.00000000000000000, "registeredBuses":10535.00000000000000000, "registeredTrucks":1512023.00000000000000000, "totalRegisteredVehicles":2403830.00000000000000000, "commercialSemiTrucks":96153.20000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":170674631.25722100000000000, "highwayCorrosionCosts":94934052.22320910000000000},
    "California": { "totalPublicFleet":512645.00000000000000000, "bridges":23764.00000000000000000, "deficientBridges":2907.00000000000000000, "deficientStucture":0.12232789092745300, "bidgesPerLaneLength":16.59825786904560000, "laneLength":394441.00000000000000000, "roadLength":175499.00000000000000000, "laneMilesConversionRatio":2.24753987202206000, "vehicleMilesTraveled":326272.00000000000000000, "registeredAutos":13223822.00000000000000000, "registeredBuses":93305.00000000000000000, "registeredTrucks":13597502.00000000000000000, "totalRegisteredVehicles":26914629.00000000000000000, "commercialSemiTrucks":1076585.16000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":325749894.56241300000000000, "highwayCorrosionCosts":182596038.00060900000000000},
    "Colorado": { "totalPublicFleet":37928.00000000000000000, "bridges":8097.00000000000000000, "deficientBridges":399.00000000000000000, "deficientStucture":0.04927751018895890, "bidgesPerLaneLength":22.74286772878840000, "laneLength":184149.00000000000000000, "roadLength":88524.00000000000000000, "laneMilesConversionRatio":2.08021553477023000, "vehicleMilesTraveled":46769.00000000000000000, "registeredAutos":1746188.00000000000000000, "registeredBuses":11759.00000000000000000, "registeredTrucks":2620068.00000000000000000, "totalRegisteredVehicles":4378015.00000000000000000, "commercialSemiTrucks":175120.60000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":110991284.98030000000000000, "highwayCorrosionCosts":85246913.48458730000000000},
    "Connecticut": { "totalPublicFleet":36219.00000000000000000, "bridges":4172.00000000000000000, "deficientBridges":339.00000000000000000, "deficientStucture":0.08125599232981780, "bidgesPerLaneLength":10.94415148609780000, "laneLength":45659.00000000000000000, "roadLength":21431.00000000000000000, "laneMilesConversionRatio":2.13051187532080000, "vehicleMilesTraveled":31269.00000000000000000, "registeredAutos":1387079.00000000000000000, "registeredBuses":12085.00000000000000000, "registeredTrucks":1223963.00000000000000000, "totalRegisteredVehicles":2623127.00000000000000000, "commercialSemiTrucks":104925.08000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":57188544.02097230000000000, "highwayCorrosionCosts":21136627.52875540000000000},
    "Delaware": { "totalPublicFleet":9076.00000000000000000, "bridges":841.00000000000000000, "deficientBridges":42.00000000000000000, "deficientStucture":0.04994054696789540, "bidgesPerLaneLength":16.41973840665870000, "laneLength":13809.00000000000000000, "roadLength":6377.00000000000000000, "laneMilesConversionRatio":2.16543829386859000, "vehicleMilesTraveled":9186.00000000000000000, "registeredAutos":442113.00000000000000000, "registeredBuses":4465.00000000000000000, "registeredTrucks":466334.00000000000000000, "totalRegisteredVehicles":912912.00000000000000000, "commercialSemiTrucks":36516.48000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":11528179.65523440000000000, "highwayCorrosionCosts":6392511.65256757000000000},
    "District of Columbia": { "totalPublicFleet":7620.00000000000000000, "bridges":247.00000000000000000, "deficientBridges":19.00000000000000000, "deficientStucture":0.07692307692307690, "bidgesPerLaneLength":13.82591093117410000, "laneLength":3415.00000000000000000, "roadLength":1502.00000000000000000, "laneMilesConversionRatio":2.27363515312916000, "vehicleMilesTraveled":3572.00000000000000000, "registeredAutos":207048.00000000000000000, "registeredBuses":4302.00000000000000000, "registeredTrucks":106856.00000000000000000, "totalRegisteredVehicles":318206.00000000000000000, "commercialSemiTrucks":12728.24000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":3385803.06164433000000000, "highwayCorrosionCosts":1580884.00995860000000000},
    "Florida": { "totalPublicFleet":118412.00000000000000000, "bridges":11451.00000000000000000, "deficientBridges":316.00000000000000000, "deficientStucture":0.02759584315780280, "bidgesPerLaneLength":23.60213081826910000, "laneLength":270268.00000000000000000, "roadLength":121829.00000000000000000, "laneMilesConversionRatio":2.21842090142741000, "vehicleMilesTraveled":191374.00000000000000000, "registeredAutos":7535856.00000000000000000, "registeredBuses":31234.00000000000000000, "registeredTrucks":7479744.00000000000000000, "totalRegisteredVehicles":15046834.00000000000000000, "commercialSemiTrucks":601873.36000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":156966926.55420800000000000, "highwayCorrosionCosts":125113428.87364300000000000},
    "Georgia": { "totalPublicFleet":82771.00000000000000000, "bridges":14456.00000000000000000, "deficientBridges":1299.00000000000000000, "deficientStucture":0.08985888212506920, "bidgesPerLaneLength":18.37278638627560000, "laneLength":265597.00000000000000000, "roadLength":125523.00000000000000000, "laneMilesConversionRatio":2.11592297825896000, "vehicleMilesTraveled":107488.00000000000000000, "registeredAutos":3321507.00000000000000000, "registeredBuses":41790.00000000000000000, "registeredTrucks":4082491.00000000000000000, "totalRegisteredVehicles":7445788.00000000000000000, "commercialSemiTrucks":297831.52000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":198158579.18676300000000000, "highwayCorrosionCosts":122951112.85299400000000000},
    "Hawaii": { "totalPublicFleet":16543.00000000000000000, "bridges":1097.00000000000000000, "deficientBridges":155.00000000000000000, "deficientStucture":0.14129443938012800, "bidgesPerLaneLength":8.78304466727439000, "laneLength":9635.00000000000000000, "roadLength":4416.00000000000000000, "laneMilesConversionRatio":2.18183876811594000, "vehicleMilesTraveled":10050.00000000000000000, "registeredAutos":521804.00000000000000000, "registeredBuses":2566.00000000000000000, "registeredTrucks":671845.00000000000000000, "totalRegisteredVehicles":1196215.00000000000000000, "commercialSemiTrucks":47848.60000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":15037352.05920580000000000, "highwayCorrosionCosts":4460268.64888758000000000},
    "Idaho": { "totalPublicFleet":13593.00000000000000000, "bridges":4053.00000000000000000, "deficientBridges":307.00000000000000000, "deficientStucture":0.07574636072045400, "bidgesPerLaneLength":24.53861337281030000, "laneLength":99455.00000000000000000, "roadLength":48492.00000000000000000, "laneMilesConversionRatio":2.05095685886332000, "vehicleMilesTraveled":16315.00000000000000000, "registeredAutos":577382.00000000000000000, "registeredBuses":2480.00000000000000000, "registeredTrucks":1000402.00000000000000000, "totalRegisteredVehicles":1580264.00000000000000000, "commercialSemiTrucks":63210.56000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":55557327.16131370000000000, "highwayCorrosionCosts":46040064.19046330000000000},
    "Illinois": { "totalPublicFleet":108266.00000000000000000, "bridges":25661.00000000000000000, "deficientBridges":2442.00000000000000000, "deficientStucture":0.09516386734733640, "bidgesPerLaneLength":11.80772378317290000, "laneLength":302998.00000000000000000, "roadLength":144337.00000000000000000, "laneMilesConversionRatio":2.09923997311847000, "vehicleMilesTraveled":104578.00000000000000000, "registeredAutos":4717657.00000000000000000, "registeredBuses":30344.00000000000000000, "registeredTrucks":5019227.00000000000000000, "totalRegisteredVehicles":9767228.00000000000000000, "commercialSemiTrucks":390689.12000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":351753410.38402900000000000, "highwayCorrosionCosts":140264917.49617400000000000},
    "Indiana": { "totalPublicFleet":46568.00000000000000000, "bridges":18138.00000000000000000, "deficientBridges":2111.00000000000000000, "deficientStucture":0.11638548902855900, "bidgesPerLaneLength":11.19638328371380000, "laneLength":203080.00000000000000000, "roadLength":97289.00000000000000000, "laneMilesConversionRatio":2.08738911901654000, "vehicleMilesTraveled":78923.00000000000000000, "registeredAutos":2439141.00000000000000000, "registeredBuses":8754.00000000000000000, "registeredTrucks":3333368.00000000000000000, "totalRegisteredVehicles":5781263.00000000000000000, "commercialSemiTrucks":231250.52000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":248630347.90325900000000000, "highwayCorrosionCosts":94010519.69030510000000000},
    "Iowa": { "totalPublicFleet":36000.00000000000000000, "bridges":24992.00000000000000000, "deficientBridges":5329.00000000000000000, "deficientStucture":0.21322823303457100, "bidgesPerLaneLength":9.39512644046095000, "laneLength":234803.00000000000000000, "roadLength":114438.00000000000000000, "laneMilesConversionRatio":2.05179223684440000, "vehicleMilesTraveled":31596.00000000000000000, "registeredAutos":1343336.00000000000000000, "registeredBuses":9255.00000000000000000, "registeredTrucks":1978396.00000000000000000, "totalRegisteredVehicles":3330987.00000000000000000, "commercialSemiTrucks":133239.48000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":342582955.93771300000000000, "highwayCorrosionCosts":108695844.27241800000000000},
    "Kansas": { "totalPublicFleet":31262.00000000000000000, "bridges":25620.00000000000000000, "deficientBridges":3304.00000000000000000, "deficientStucture":0.12896174863388000, "bidgesPerLaneLength":11.19882903981260000, "laneLength":286914.00000000000000000, "roadLength":140614.00000000000000000, "laneMilesConversionRatio":2.04043694084515000, "vehicleMilesTraveled":30572.00000000000000000, "registeredAutos":959718.00000000000000000, "registeredBuses":4720.00000000000000000, "registeredTrucks":1403214.00000000000000000, "totalRegisteredVehicles":2367652.00000000000000000, "commercialSemiTrucks":94706.08000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":351191394.49120600000000000, "highwayCorrosionCosts":132819254.70959300000000000},
    "Kentucky": { "totalPublicFleet":36779.00000000000000000, "bridges":13523.00000000000000000, "deficientBridges":1175.00000000000000000, "deficientStucture":0.08688900391924870, "bidgesPerLaneLength":12.23123567255790000, "laneLength":165403.00000000000000000, "roadLength":79321.00000000000000000, "laneMilesConversionRatio":2.08523594004110000, "vehicleMilesTraveled":47344.00000000000000000, "registeredAutos":1533919.00000000000000000, "registeredBuses":9699.00000000000000000, "registeredTrucks":2026442.00000000000000000, "totalRegisteredVehicles":3570060.00000000000000000, "commercialSemiTrucks":142802.40000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":185369290.69885200000000000, "highwayCorrosionCosts":76568948.14031680000000000},
    "Louisiana": { "totalPublicFleet":41492.00000000000000000, "bridges":13394.00000000000000000, "deficientBridges":2220.00000000000000000, "deficientStucture":0.16574585635359100, "bidgesPerLaneLength":9.68784530386740000, "laneLength":129759.00000000000000000, "roadLength":61326.00000000000000000, "laneMilesConversionRatio":2.11588885627629000, "vehicleMilesTraveled":46889.00000000000000000, "registeredAutos":1499813.00000000000000000, "registeredBuses":12517.00000000000000000, "registeredTrucks":2308789.00000000000000000, "totalRegisteredVehicles":3821119.00000000000000000, "commercialSemiTrucks":152844.76000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":183600996.79216300000000000, "highwayCorrosionCosts":60068500.21909740000000000},
    "Maine": { "totalPublicFleet":11107.00000000000000000, "bridges":2364.00000000000000000, "deficientBridges":365.00000000000000000, "deficientStucture":0.15439932318104900, "bidgesPerLaneLength":19.87394247038920000, "laneLength":46982.00000000000000000, "roadLength":22871.00000000000000000, "laneMilesConversionRatio":2.05421713086441000, "vehicleMilesTraveled":14199.00000000000000000, "registeredAutos":474622.00000000000000000, "registeredBuses":1433.00000000000000000, "registeredTrucks":650769.00000000000000000, "totalRegisteredVehicles":1126824.00000000000000000, "commercialSemiTrucks":45072.96000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":32405013.91792390000000000, "highwayCorrosionCosts":21749075.41899700000000000},
    "Maryland": { "totalPublicFleet":46434.00000000000000000, "bridges":4994.00000000000000000, "deficientBridges":417.00000000000000000, "deficientStucture":0.08350020024028830, "bidgesPerLaneLength":14.21966359631560000, "laneLength":71013.00000000000000000, "roadLength":32372.00000000000000000, "laneMilesConversionRatio":2.19365501050290000, "vehicleMilesTraveled":56475.00000000000000000, "registeredAutos":1968035.00000000000000000, "registeredBuses":15687.00000000000000000, "registeredTrucks":1877706.00000000000000000, "totalRegisteredVehicles":3861428.00000000000000000, "commercialSemiTrucks":154457.12000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":68456277.28684940000000000, "highwayCorrosionCosts":32873591.85920640000000000},
    "Massachusetts": { "totalPublicFleet":48037.00000000000000000, "bridges":4999.00000000000000000, "deficientBridges":624.00000000000000000, "deficientStucture":0.12482496499299900, "bidgesPerLaneLength":15.35147029405880000, "laneLength":76742.00000000000000000, "roadLength":36330.00000000000000000, "laneMilesConversionRatio":2.11235893201211000, "vehicleMilesTraveled":55940.00000000000000000, "registeredAutos":2481482.00000000000000000, "registeredBuses":11240.00000000000000000, "registeredTrucks":2333016.00000000000000000, "totalRegisteredVehicles":4825738.00000000000000000, "commercialSemiTrucks":193029.52000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":68524815.81036450000000000, "highwayCorrosionCosts":35525681.02261860000000000},
    "Michigan": { "totalPublicFleet":64113.00000000000000000, "bridges":10654.00000000000000000, "deficientBridges":1811.00000000000000000, "deficientStucture":0.16998310493711300, "bidgesPerLaneLength":24.09029472498590000, "laneLength":256658.00000000000000000, "roadLength":122051.00000000000000000, "laneMilesConversionRatio":2.10287502765237000, "vehicleMilesTraveled":94548.00000000000000000, "registeredAutos":3408669.00000000000000000, "registeredBuses":8711.00000000000000000, "registeredTrucks":4114563.00000000000000000, "totalRegisteredVehicles":7531943.00000000000000000, "commercialSemiTrucks":301277.72000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":146041885.90590600000000000, "highwayCorrosionCosts":118813039.01257800000000000},
    "Minnesota": { "totalPublicFleet":46227.00000000000000000, "bridges":12975.00000000000000000, "deficientBridges":1172.00000000000000000, "deficientStucture":0.09032755298651250, "bidgesPerLaneLength":21.97919075144510000, "laneLength":285180.00000000000000000, "roadLength":138833.00000000000000000, "laneMilesConversionRatio":2.05412257892576000, "vehicleMilesTraveled":56988.00000000000000000, "registeredAutos":2148272.00000000000000000, "registeredBuses":12657.00000000000000000, "registeredTrucks":2696310.00000000000000000, "totalRegisteredVehicles":4857239.00000000000000000, "commercialSemiTrucks":194289.56000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":177857468.52160000000000000, "highwayCorrosionCosts":132016545.22986600000000000},
    "Mississippi": { "totalPublicFleet":28294.00000000000000000, "bridges":16830.00000000000000000, "deficientBridges":3701.00000000000000000, "deficientStucture":0.21990493166963800, "bidgesPerLaneLength":9.32602495543672000, "laneLength":156957.00000000000000000, "roadLength":75181.00000000000000000, "laneMilesConversionRatio":2.08772163179527000, "vehicleMilesTraveled":38667.00000000000000000, "registeredAutos":847669.00000000000000000, "registeredBuses":7887.00000000000000000, "registeredTrucks":1168320.00000000000000000, "totalRegisteredVehicles":2023876.00000000000000000, "commercialSemiTrucks":80955.04000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":230700670.15171700000000000, "highwayCorrosionCosts":72659095.62256850000000000},
    "Missouri": { "totalPublicFleet":43989.00000000000000000, "bridges":23787.00000000000000000, "deficientBridges":5275.00000000000000000, "deficientStucture":0.22175978475638000, "bidgesPerLaneLength":11.50191280951780000, "laneLength":273596.00000000000000000, "roadLength":131978.00000000000000000, "laneMilesConversionRatio":2.07304247677643000, "vehicleMilesTraveled":68504.00000000000000000, "registeredAutos":2398353.00000000000000000, "registeredBuses":6276.00000000000000000, "registeredTrucks":3104166.00000000000000000, "totalRegisteredVehicles":5508795.00000000000000000, "commercialSemiTrucks":220351.80000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":326065171.77058200000000000, "highwayCorrosionCosts":126654038.53254200000000000},
    "Montana": { "totalPublicFleet":9141.00000000000000000, "bridges":5098.00000000000000000, "deficientBridges":583.00000000000000000, "deficientStucture":0.11435857198901500, "bidgesPerLaneLength":29.98509219301690000, "laneLength":152864.00000000000000000, "roadLength":74905.00000000000000000, "laneMilesConversionRatio":2.04077164408250000, "vehicleMilesTraveled":11885.00000000000000000, "registeredAutos":433264.00000000000000000, "registeredBuses":3725.00000000000000000, "registeredTrucks":892746.00000000000000000, "totalRegisteredVehicles":1329735.00000000000000000, "commercialSemiTrucks":53189.40000000000000000, "commercialVehicleCorrosionSavings":1808196.09809178000000000, "vehicleCorrosionSavings":957786.76712953700000000, "bridgeCorrosionCosts":69881878.57596280000000000, "highwayCorrosionCosts":70764349.42849510000000000},
    "Nebraska": { "totalPublicFleet":41332.00000000000000000, "bridges":15455.00000000000000000, "deficientBridges":2608.00000000000000000, "deficientStucture":0.16874797800064700, "bidgesPerLaneLength":12.34299579424130000, "laneLength":190761.00000000000000000, "roadLength":93797.00000000000000000, "laneMilesConversionRatio":2.03376440611107000, "vehicleMilesTraveled":19277.00000000000000000, "registeredAutos":732238.00000000000000000, "registeredBuses":3872.00000000000000000, "registeredTrucks":1099515.00000000000000000, "totalRegisteredVehicles":1835625.00000000000000000, "commercialSemiTrucks":73425.00000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":211852576.18507400000000000, "highwayCorrosionCosts":88307764.16506930000000000},
    "Nevada": { "totalPublicFleet":18776.00000000000000000, "bridges":1612.00000000000000000, "deficientBridges":62.00000000000000000, "deficientStucture":0.03846153846153850, "bidgesPerLaneLength":50.99937965260550000, "laneLength":82211.00000000000000000, "roadLength":38567.00000000000000000, "laneMilesConversionRatio":2.13164104026759000, "vehicleMilesTraveled":24148.00000000000000000, "registeredAutos":932805.00000000000000000, "registeredBuses":3863.00000000000000000, "registeredTrucks":1124022.00000000000000000, "totalRegisteredVehicles":2060690.00000000000000000, "commercialSemiTrucks":82427.60000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":22096819.98125780000000000, "highwayCorrosionCosts":38057410.05642930000000000},
    "New Hampshire": { "totalPublicFleet":12084.00000000000000000, "bridges":2352.00000000000000000, "deficientBridges":367.00000000000000000, "deficientStucture":0.15603741496598600, "bidgesPerLaneLength":14.10161564625850000, "laneLength":33167.00000000000000000, "roadLength":16105.00000000000000000, "laneMilesConversionRatio":2.05942253958398000, "vehicleMilesTraveled":12894.00000000000000000, "registeredAutos":560416.00000000000000000, "registeredBuses":3356.00000000000000000, "registeredTrucks":658792.00000000000000000, "totalRegisteredVehicles":1222564.00000000000000000, "commercialSemiTrucks":48902.56000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":32240521.46148780000000000, "highwayCorrosionCosts":15353786.22497710000000000},
    "New Jersey": { "totalPublicFleet":71295.00000000000000000, "bridges":6377.00000000000000000, "deficientBridges":854.00000000000000000, "deficientStucture":0.13391877058177800, "bidgesPerLaneLength":13.39093617688570000, "laneLength":85394.00000000000000000, "roadLength":39272.00000000000000000, "laneMilesConversionRatio":2.17442452638012000, "vehicleMilesTraveled":74225.00000000000000000, "registeredAutos":3971265.00000000000000000, "registeredBuses":19606.00000000000000000, "registeredTrucks":3588133.00000000000000000, "totalRegisteredVehicles":7579004.00000000000000000, "commercialSemiTrucks":303160.16000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":87414032.89111710000000000, "highwayCorrosionCosts":39530895.79689730000000000},
    "New Mexico": { "totalPublicFleet":21753.00000000000000000, "bridges":3835.00000000000000000, "deficientBridges":388.00000000000000000, "deficientStucture":0.10117340286831800, "bidgesPerLaneLength":37.25241199478490000, "laneLength":142863.00000000000000000, "roadLength":68384.00000000000000000, "laneMilesConversionRatio":2.08912903603182000, "vehicleMilesTraveled":25562.00000000000000000, "registeredAutos":675737.00000000000000000, "registeredBuses":5411.00000000000000000, "registeredTrucks":1057976.00000000000000000, "totalRegisteredVehicles":1739124.00000000000000000, "commercialSemiTrucks":69564.96000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":52569047.53605680000000000, "highwayCorrosionCosts":66134650.75101460000000000},
    "New York": { "totalPublicFleet":150372.00000000000000000, "bridges":17382.00000000000000000, "deficientBridges":2234.00000000000000000, "deficientStucture":0.12852376021171300, "bidgesPerLaneLength":13.95834771602810000, "laneLength":242624.00000000000000000, "roadLength":114709.00000000000000000, "laneMilesConversionRatio":2.11512610170083000, "vehicleMilesTraveled":128221.00000000000000000, "registeredAutos":5076204.00000000000000000, "registeredBuses":25684.00000000000000000, "registeredTrucks":5001443.00000000000000000, "totalRegisteredVehicles":10103331.00000000000000000, "commercialSemiTrucks":404133.24000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":238267323.14778100000000000, "highwayCorrosionCosts":112316369.55554700000000000},
    "North Carolina": { "totalPublicFleet":86932.00000000000000000, "bridges":17193.00000000000000000, "deficientBridges":2365.00000000000000000, "deficientStucture":0.13755598208573300, "bidgesPerLaneLength":13.07479788285930000, "laneLength":224795.00000000000000000, "roadLength":106063.00000000000000000, "laneMilesConversionRatio":2.11944787531939000, "vehicleMilesTraveled":104950.00000000000000000, "registeredAutos":3445365.00000000000000000, "registeredBuses":38164.00000000000000000, "registeredTrucks":4109822.00000000000000000, "totalRegisteredVehicles":7593351.00000000000000000, "commercialSemiTrucks":303734.04000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":235676566.95891100000000000, "highwayCorrosionCosts":104062905.12991000000000000},
    "North Dakota": { "totalPublicFleet":8290.00000000000000000, "bridges":4518.00000000000000000, "deficientBridges":829.00000000000000000, "deficientStucture":0.18348826914564000, "bidgesPerLaneLength":38.95462594068170000, "laneLength":175997.00000000000000000, "roadLength":86851.00000000000000000, "laneMilesConversionRatio":2.02642456621110000, "vehicleMilesTraveled":10081.00000000000000000, "registeredAutos":249181.00000000000000000, "registeredBuses":2535.00000000000000000, "registeredTrucks":524628.00000000000000000, "totalRegisteredVehicles":776344.00000000000000000, "commercialSemiTrucks":31053.76000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":61931409.84821500000000000, "highwayCorrosionCosts":81473160.49800380000000000},
    "Ohio": { "totalPublicFleet":74420.00000000000000000, "bridges":27901.00000000000000000, "deficientBridges":3109.00000000000000000, "deficientStucture":0.11142969786029200, "bidgesPerLaneLength":9.41833626034909000, "laneLength":262781.00000000000000000, "roadLength":123281.00000000000000000, "laneMilesConversionRatio":2.13156123003545000, "vehicleMilesTraveled":112715.00000000000000000, "registeredAutos":4738058.00000000000000000, "registeredBuses":18185.00000000000000000, "registeredTrucks":5020317.00000000000000000, "totalRegisteredVehicles":9776560.00000000000000000, "commercialSemiTrucks":391062.40000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":382458668.91878000000000000, "highwayCorrosionCosts":121647520.06469400000000000},
    "Oklahoma": { "totalPublicFleet":28271.00000000000000000, "bridges":23249.00000000000000000, "deficientBridges":7568.00000000000000000, "deficientStucture":0.32551937717751300, "bidgesPerLaneLength":10.07888511333820000, "laneLength":234324.00000000000000000, "roadLength":112821.00000000000000000, "laneMilesConversionRatio":2.07695375860877000, "vehicleMilesTraveled":47872.00000000000000000, "registeredAutos":1361339.00000000000000000, "registeredBuses":1946.00000000000000000, "registeredTrucks":1948971.00000000000000000, "totalRegisteredVehicles":3312256.00000000000000000, "commercialSemiTrucks":132490.24000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":318690426.64036100000000000, "highwayCorrosionCosts":108474103.87980600000000000},
    "Oregon": { "totalPublicFleet":31674.00000000000000000, "bridges":7202.00000000000000000, "deficientBridges":561.00000000000000000, "deficientStucture":0.07789502915856710, "bidgesPerLaneLength":17.01194112746460000, "laneLength":122520.00000000000000000, "roadLength":59262.00000000000000000, "laneMilesConversionRatio":2.06742938139111000, "vehicleMilesTraveled":33173.00000000000000000, "registeredAutos":1455989.00000000000000000, "registeredBuses":3178.00000000000000000, "registeredTrucks":1981947.00000000000000000, "totalRegisteredVehicles":3441114.00000000000000000, "commercialSemiTrucks":137644.56000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":98722889.27110320000000000, "highwayCorrosionCosts":56717396.45684550000000000},
    "Pennsylvania": { "totalPublicFleet":118344.00000000000000000, "bridges":22176.00000000000000000, "deficientBridges":5474.00000000000000000, "deficientStucture":0.24684343434343400, "bidgesPerLaneLength":11.27619949494950000, "laneLength":250061.00000000000000000, "roadLength":119846.00000000000000000, "laneMilesConversionRatio":2.08651936652037000, "vehicleMilesTraveled":98884.00000000000000000, "registeredAutos":4774517.00000000000000000, "registeredBuses":36979.00000000000000000, "registeredTrucks":5240635.00000000000000000, "totalRegisteredVehicles":10052131.00000000000000000, "commercialSemiTrucks":402085.24000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":303982059.49402700000000000, "highwayCorrosionCosts":115759132.18572700000000000},
    "Rhode Island": { "totalPublicFleet":13885.00000000000000000, "bridges":748.00000000000000000, "deficientBridges":191.00000000000000000, "deficientStucture":0.25534759358288800, "bidgesPerLaneLength":18.25935828877010000, "laneLength":13658.00000000000000000, "roadLength":6480.00000000000000000, "laneMilesConversionRatio":2.10771604938272000, "vehicleMilesTraveled":7807.00000000000000000, "registeredAutos":456426.00000000000000000, "registeredBuses":2182.00000000000000000, "registeredTrucks":362673.00000000000000000, "totalRegisteredVehicles":821281.00000000000000000, "commercialSemiTrucks":32851.24000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":10253363.11785410000000000, "highwayCorrosionCosts":6322610.19268360000000000},
    "South Carolina": { "totalPublicFleet":41933.00000000000000000, "bridges":9149.00000000000000000, "deficientBridges":1240.00000000000000000, "deficientStucture":0.13553393813531500, "bidgesPerLaneLength":15.30396764673730000, "laneLength":140016.00000000000000000, "roadLength":66244.00000000000000000, "laneMilesConversionRatio":2.11364048064730000, "vehicleMilesTraveled":49036.00000000000000000, "registeredAutos":1712854.00000000000000000, "registeredBuses":17084.00000000000000000, "registeredTrucks":2054655.00000000000000000, "totalRegisteredVehicles":3784593.00000000000000000, "commercialSemiTrucks":151383.72000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":125411790.32787100000000000, "highwayCorrosionCosts":64816707.33187780000000000},
    "South Dakota": { "totalPublicFleet":14776.00000000000000000, "bridges":5966.00000000000000000, "deficientBridges":1047.00000000000000000, "deficientStucture":0.17549446865571600, "bidgesPerLaneLength":28.11146496815290000, "laneLength":167713.00000000000000000, "roadLength":82536.00000000000000000, "laneMilesConversionRatio":2.03199815837937000, "vehicleMilesTraveled":9113.00000000000000000, "registeredAutos":331662.00000000000000000, "registeredBuses":2280.00000000000000000, "registeredTrucks":596277.00000000000000000, "totalRegisteredVehicles":930219.00000000000000000, "commercialSemiTrucks":37208.76000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":81780166.25817850000000000, "highwayCorrosionCosts":77638301.59946880000000000},
    "Tennessee": { "totalPublicFleet":47048.00000000000000000, "bridges":19490.00000000000000000, "deficientBridges":1653.00000000000000000, "deficientStucture":0.08481272447408930, "bidgesPerLaneLength":10.36700872242180000, "laneLength":202053.00000000000000000, "roadLength":95523.00000000000000000, "laneMilesConversionRatio":2.11522879306554000, "vehicleMilesTraveled":71167.00000000000000000, "registeredAutos":2232584.00000000000000000, "registeredBuses":12028.00000000000000000, "registeredTrucks":2980483.00000000000000000, "totalRegisteredVehicles":5225095.00000000000000000, "commercialSemiTrucks":209003.80000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":267163164.66173300000000000, "highwayCorrosionCosts":93535097.17837900000000000},
    "Texas": { "totalPublicFleet":464300.00000000000000000, "bridges":48492.00000000000000000, "deficientBridges":2777.00000000000000000, "deficientStucture":0.05726717809123150, "bidgesPerLaneLength":13.92592592592590000, "laneLength":675296.00000000000000000, "roadLength":313210.00000000000000000, "laneMilesConversionRatio":2.15604865745027000, "vehicleMilesTraveled":237836.00000000000000000, "registeredAutos":7821859.00000000000000000, "registeredBuses":97685.00000000000000000, "registeredTrucks":11870179.00000000000000000, "totalRegisteredVehicles":19789723.00000000000000000, "commercialSemiTrucks":791588.92000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":664714016.45853100000000000, "highwayCorrosionCosts":312610438.76691100000000000},
    "Utah": { "totalPublicFleet":20247.00000000000000000, "bridges":2793.00000000000000000, "deficientBridges":270.00000000000000000, "deficientStucture":0.09667024704618690, "bidgesPerLaneLength":34.57286072323670000, "laneLength":96562.00000000000000000, "roadLength":45890.00000000000000000, "laneMilesConversionRatio":2.10420570930486000, "vehicleMilesTraveled":26528.00000000000000000, "registeredAutos":832197.00000000000000000, "registeredBuses":6653.00000000000000000, "registeredTrucks":1079672.00000000000000000, "totalRegisteredVehicles":1918522.00000000000000000, "commercialSemiTrucks":76740.88000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":38285619.23551670000000000, "highwayCorrosionCosts":44700826.28685860000000000},
    "Vermont": { "totalPublicFleet":6665.00000000000000000, "bridges":2686.00000000000000000, "deficientBridges":491.00000000000000000, "deficientStucture":0.18279970215934500, "bidgesPerLaneLength":10.92740134028290000, "laneLength":29351.00000000000000000, "roadLength":14291.00000000000000000, "laneMilesConversionRatio":2.05381009026660000, "vehicleMilesTraveled":7216.00000000000000000, "registeredAutos":251437.00000000000000000, "registeredBuses":2088.00000000000000000, "registeredTrucks":322725.00000000000000000, "totalRegisteredVehicles":576250.00000000000000000, "commercialSemiTrucks":23050.00000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":36818894.83229430000000000, "highwayCorrosionCosts":13587269.86128690000000000},
    "Virginia": { "totalPublicFleet":94214.00000000000000000, "bridges":13055.00000000000000000, "deficientBridges":1161.00000000000000000, "deficientStucture":0.08893144389122940, "bidgesPerLaneLength":12.38575258521640000, "laneLength":161696.00000000000000000, "roadLength":74592.00000000000000000, "laneMilesConversionRatio":2.16773916773917000, "vehicleMilesTraveled":80959.00000000000000000, "registeredAutos":3305911.00000000000000000, "registeredBuses":31217.00000000000000000, "registeredTrucks":3580174.00000000000000000, "totalRegisteredVehicles":6917302.00000000000000000, "commercialSemiTrucks":276692.08000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":178954084.89784100000000000, "highwayCorrosionCosts":74852890.44634410000000000},
    "Washington": { "totalPublicFleet":54965.00000000000000000, "bridges":7427.00000000000000000, "deficientBridges":436.00000000000000000, "deficientStucture":0.05870472599973070, "bidgesPerLaneLength":23.40837484852560000, "laneLength":173854.00000000000000000, "roadLength":83878.00000000000000000, "laneMilesConversionRatio":2.07270082739216000, "vehicleMilesTraveled":56762.00000000000000000, "registeredAutos":2542747.00000000000000000, "registeredBuses":20308.00000000000000000, "registeredTrucks":3069589.00000000000000000, "totalRegisteredVehicles":5632644.00000000000000000, "commercialSemiTrucks":225305.76000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":101807122.82928100000000000, "highwayCorrosionCosts":80481115.27594200000000000},
    "West Virginia": { "totalPublicFleet":36633.00000000000000000, "bridges":6862.00000000000000000, "deficientBridges":1081.00000000000000000, "deficientStucture":0.15753424657534200, "bidgesPerLaneLength":11.61877003788980000, "laneLength":79728.00000000000000000, "roadLength":38684.00000000000000000, "laneMilesConversionRatio":2.06100713473271000, "vehicleMilesTraveled":19226.00000000000000000, "registeredAutos":537131.00000000000000000, "registeredBuses":4472.00000000000000000, "registeredTrucks":859278.00000000000000000, "totalRegisteredVehicles":1400881.00000000000000000, "commercialSemiTrucks":56035.24000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":94062269.67207860000000000, "highwayCorrosionCosts":36907970.81873470000000000},
    "Wisconsin": { "totalPublicFleet":82754.00000000000000000, "bridges":13651.00000000000000000, "deficientBridges":1762.00000000000000000, "deficientStucture":0.12907479305545400, "bidgesPerLaneLength":17.42524357189950000, "laneLength":237872.00000000000000000, "roadLength":115094.00000000000000000, "laneMilesConversionRatio":2.06676281995586000, "vehicleMilesTraveled":59087.00000000000000000, "registeredAutos":2221497.00000000000000000, "registeredBuses":15311.00000000000000000, "registeredTrucks":2697512.00000000000000000, "totalRegisteredVehicles":4934320.00000000000000000, "commercialSemiTrucks":197372.80000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":187123876.90083700000000000, "highwayCorrosionCosts":110116556.72529200000000000},
    "Wyoming": { "totalPublicFleet":9091.00000000000000000, "bridges":3038.00000000000000000, "deficientBridges":421.00000000000000000, "deficientStucture":0.13857801184990100, "bidgesPerLaneLength":19.49736668861090000, "laneLength":59233.00000000000000000, "roadLength":28416.00000000000000000, "laneMilesConversionRatio":2.08449465090090000, "vehicleMilesTraveled":9271.00000000000000000, "registeredAutos":212789.00000000000000000, "registeredBuses":2960.00000000000000000, "registeredTrucks":552337.00000000000000000, "totalRegisteredVehicles":768086.00000000000000000, "commercialSemiTrucks":30723.44000000000000000, "commercialVehicleCorrosionSavings":0, "vehicleCorrosionSavings":0, "bridgeCorrosionCosts":41644006.88775500000000000, "highwayCorrosionCosts":27420352.14110620000000000}
};

var headwatersImg = "data:image/png;base64,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";
var rivertopImg = "data:image/png;base64,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";

(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/r0s6gjlm';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()

$(function(){
    var inflationRate    = 0.0322,
        numYears = 5,
        totalDirectSavings,
        directSavingsTotalsArray,
        annualDirectSavings,
        directSavings = {},
        totalIndirectSavings,
        indirectSavingsTotalsArray,
        annualIndirectSavings,
        indirectSavings = {},
        graphData = {},
        doc;

    var $selectBox = $('#stateSelector');
    _.forEach(Object.keys(stateData), function(value) {
            $('<option></option>', {
                value: value,
                text: value
            }).appendTo($selectBox);    
    });

    $('#stateSelector option[value="Montana"]').attr("selected",true);

    $('#roi-calculator').submit(function(event){
            event.preventDefault();

            calculateDirectSavings(this);
            calculateIndirectSavings(this);

            $('#roi-results-table .direct-savings-value').text('$ ' + annualDirectSavings.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $('#roi-results-table .indirect-savings-value').text('$ ' + annualIndirectSavings.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $('#roi-results-table .combined-savings-value').text('$ ' + (annualDirectSavings + annualIndirectSavings).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

            var annualBrineGallons = $(this).find('input[name="annualBrineGallons"]').val();
            var brineMakingFacilities = $(this).find('input[name="brineMakingFacilities"]').val();
            var costsValue = (annualBrineGallons * 0.045 * 5.33) + (brineMakingFacilities * 10000);
            var roiValue = (annualDirectSavings + annualIndirectSavings - costsValue) / costsValue;
            $('#roi-results-table .roi-savings-value').text((roiValue * 100).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " %");


            $('.roi-full-report').show();
    });

    $('#roi-show-download-modal').on('click', function(){
        $('#roi-download-modal-backdrop').show();
    });

    $('#roi-download-modal').on('click', function(event){
        event.stopPropagation();
    });

    $('#roi-download-form').submit(function(){
        return false;
    });

    $('#roi-pdf-download').on('click', function(){
        window.Intercom('boot', {
          app_id: "r0s6gjlm",
          name:  $(this).find('input[name="firstName"]').val() + " " +  $(this).find('input[name="lastName"]').val(),
          email: $(this).find('input[name="email"]').val(),
          phone: $(this).find('input[name="phone"]').val(),
          created_at: Date.now()
        });
        doc = new jsPDF('l');
        calculateGraphData($('#roi-calculator'));
        $('#roi-download-modal-backdrop').hide();
    });

    $('#roi-download-modal-backdrop').on('click', function(){
        $(this).hide();
    });

    var calculateGraphData = function(form){
        graphData = {
            costs: [],
            breakEven: []
        }

        var annualBrineGallons = $(form).find('input[name="annualBrineGallons"]').val();
        var brineMakingFacilities = $(form).find('input[name="brineMakingFacilities"]').val();

        _.times(5, function(index){
            var costsValue;
            if(index === 0){
                costsValue = (annualBrineGallons * 0.045 * 5.33) + (brineMakingFacilities * 10000);
            } else {
                costsValue = (annualBrineGallons * 0.045 * 5.33);
            }
            graphData.costs.push(costsValue);

            var breakEvenValue = getCumulativeSavingsSum(index) - _.sum(graphData.costs);
            graphData.breakEven.push([index + 1, breakEvenValue]);
        });

        var totalCosts = _.reduce(graphData.costs, function(sum, n){ return sum + n});
        buildInstructions();
        doc.addPage();
        buildCostsPage(form, totalCosts);
        doc.addPage();
        buildSavingsPage();
        doc.addPage();
        buildSummaryPage(totalCosts);
        doc.addPage();
        buildReferences();

        // doc.output("dataurlnewwindow");
        doc.save("ROI_Report");
    };

    function buildInstructions(){
        doc.addImage(headwatersImg, 'PNG', 10, 5, 60, 20);
        doc.addImage(rivertopImg, 'PNG', 210, 5, 70, 20);

        doc.setTextColor(250,106,10);
        doc.setFontSize(16)
        doc.text("Corrosion Reduction Calculator Instructions", 15, 33);

        doc.setTextColor(88,88,88);
        doc.setFontSize(12)
        doc.text("This calculator is designed to project the costs and savings of adding                        Corrosion Inhibitor to salt brine for state ", 25, 40);
        doc.setFontStyle("italic");
        doc.text("Headwaters®", 155, 40);
        doc.setFontStyle("normal");
        doc.text("winter road maintenence. This calculator was developed by Rivertop Renewables using the latest research, case studies and ", 25, 45);
        doc.text("government agency data.", 25, 50);

        doc.text("The tool compares the cost of purchasing and handling the inhibitor to the savings of avoiding corrosion-induced repair and ", 25, 60);
        doc.text("replacement of vehicles, snowfighting equipment and highway infrastructure.", 25, 65);
        
        doc.text("This tool was developed for states to get an initial estimate and is not intended for detailed analysis. For additional detailed ", 25, 75);
        doc.text("analysis please contact Rivertop Renewables at headwaters@rivertop.com.", 25, 80);


        var instructionsArray = [["Enter", "Cost Data"], ["Review", "Savings"], ["Review", "Summary", "Analysis"], ["References"]];
        _.times(4, function(index){
            doc.setFillColor(211,211,211);
            doc.ellipse(60, 100 + index * 30, 12.5, 12.5, 'F');

            doc.setTextColor(255, 255, 255);
            doc.setFontStyle("bold");
            doc.setFontSize(55);
            doc.text((index + 1).toString(), 54.5, 107 + index * 30);
        });

        doc.setFontStyle("bold");
        doc.setTextColor(2,38,84);
        doc.setFontSize(12)
        doc.text('Enter', 55, 100);
        doc.text('Cost Data', 50, 105);

        doc.text('Review', 52.5, 130);
        doc.text('Savings', 52.5, 135);

        doc.text('Review', 52.5, 157);
        doc.text('Summary', 50, 162);
        doc.text('Analysis', 51.5, 167);

        doc.text('References', 49, 192);

        doc.setTextColor(88,88,88);
        doc.setFontSize(11)
        doc.setFontStyle("normal");
        doc.text("In this section select your state and enter the pertinent information of ", 80, 100);
        doc.text("your winter road maintanence program.", 80, 105);

        doc.text("Projects both direct and indirect savings over a five year period.", 80, 132.5);

        doc.text("Provides financial analysis including ROI calculations, Annualized ", 80, 160);
        doc.text("Costs/Benefit and Payback Analysis.", 80, 165);

        doc.text("Contains a detailed list of data sources used in the calculations and", 80, 190);
        doc.text("assumptions of this ROI tool.", 80, 195);
    };

    function buildReferences(){
        // doc.addImage(headwatersImg, 'PNG', 10, 10, 60, 20);
        // doc.addImage(rivertopImg, 'PNG', 210, 10, 70, 20);

        doc.setFontStyle("bold");
        doc.setTextColor(2,38,84);
        doc.setFontSize(14)
        doc.text("I.   Vehicle Registrations", 15, 15);

        doc.setFontStyle("normal");
        doc.setTextColor(88,88,88);
        doc.setFontSize(11)
        doc.text('Office Of Highway Policy Information. "Highway Statistics 2013." Federal Highway Administration. U.S. Department of Transportation, 20 Oct.', 25, 25);
        doc.text("2013. <http://www.fhwa.dot.gov/policyinformation/statistics.cfm>.", 25, 30);

        doc.setFontStyle("bold");
        doc.setTextColor(2,38,84);
        doc.setFontSize(14)
        doc.text("II.   Corrosion Costs", 15, 40);

        doc.setFontStyle("normal");
        doc.setTextColor(88,88,88);
        doc.setFontSize(11)
        doc.text('"Use of Chloride-based Ice Control Products for Sustainable Winter Maintenance: A Balanced Perspective." Cold Regions Science and', 25, 50);
        doc.text('Technology 86 (2013): 104-12. Print.<http://www.sciencedirect.com/science/article/pii/S0165232X12002200>.', 25, 55);

        doc.text('Xianming Shi, Yongxin Li, Scott Jungwirth, Yida Fang, Nicholas Seeley, Emily Jackson. "Identification and Laboratory Assessment of', 25, 65);
        doc.text('Best Practices to Protect DOT Equipment from the Corrosive Effect of Chemical Deicers." Washington State Department of Transportation,', 25, 70);
        doc.text("Mar. 2013. < http://www.wsdot.wa.gov/Research/Reports/700/796.1.htm>.", 25, 75);

        doc.setFontStyle("bold");
        doc.setTextColor(2,38,84);
        doc.setFontSize(14)
        doc.text("III.   State Roads and Bridges", 15, 85);

        doc.setFontStyle("normal");
        doc.setTextColor(88,88,88);
        doc.setFontSize(11)
        doc.text('Office Of Highway Policy Information. "State Statistical Abstrracts 2012." Federal Highway Administration. U.S. Department of Transportation,', 25, 95);
        doc.text('20 Oct. 2012. <http://www.fhwa.dot.gov/policyinformation/statistics/abstracts/2012/>.', 25, 100);

        doc.setFontStyle("bold");
        doc.setTextColor(2,38,84);
        doc.setFontSize(14)
        doc.text("IV.   Winter Road Maintenance Expenses", 15, 110);

        doc.setFontStyle("normal");
        doc.setTextColor(88,88,88);
        doc.setFontSize(11)
        doc.text('Slone,Sean. "High Costs of Winter Road Maintenance, 2013-14." The council of State Governments, Jun. 2014. <http://www.csg.org>.', 25, 120);

        doc.text('Brinckerhoff, Parsons. "Understanding the True Cost of Snow and Ice Control." Clear Roads, Jan. 2014.', 25, 130);
        doc.text('<http://clearroads.org/project/understanding-the-true-costs-of-snow-and-ice-control/>.', 25, 135);

        doc.text('Xianming Shi, Yongxin Li, Scott Jungwirth, Yida Fang, Nicholas Seeley, Emily Jackson. "Identification and Laboratory Assessment of', 25, 145);
        doc.text('Best Practices to Protect DOT Equipment from the Corrosive Effect of Chemical Deicers." Washington State Department of Transportation,', 25, 150);
        doc.text("Mar. 2013. < http://www.wsdot.wa.gov/Research/Reports/700/796.1.htm>.", 25, 155);

        doc.text('Jaime Rall, Alice Wheet, Nicholas J. Farber, James B. Reed. "Transportation Governance and Finance a 50-State Review of State Legislatures', 25, 165);
        doc.text('and Departments of Transportation." National Conference of State Legislatures, May. 2011. ', 25, 170);
        doc.text('<http://www.transportation-finance.org/pdf/50_State_Review_State_Legislatures_Departments_Transportation.pdf>.', 25, 175);

        doc.text('Transportation Finance & Policy Commission. "State Highway Maintenance Policy Issue Paper." Wisconsin Department of Transportation, U.S.', 25, 185);
        doc.text('a Department of Transportation, Mar. 2013. <http://www.dot.wisconsin.gov/about/tfp/docs/state-highway-maint.pdf>.', 25, 190);


        doc.setFontStyle("bold");
        doc.setTextColor(1);
        doc.setFontSize(11)
        doc.text('A.', 20, 52.5);
        doc.text('B.', 20, 70);
        doc.text('A.', 20, 120);
        doc.text('B.', 20, 132.5);
        doc.text('C.', 20, 150);
        doc.text('D.', 20, 170);
        doc.text('E.', 20, 187.5);
    };

    var buildSavingsPage = function(){
        doc.addImage(headwatersImg, 'PNG', 10, 10, 60, 20);
        doc.addImage(rivertopImg, 'PNG', 210, 10, 70, 20);

        doc.setTextColor(250,106,10);
        doc.setFontSize(16)
        doc.text("Savings Calculations", 15, 40);

        doc.setTextColor(88,88,88);
        doc.setFontSize(12)
        doc.text("Savings fall into two primary categories: direct savings that have a measurable impact on budgets or costs,", 25, 50);
        doc.text("and indirect savings with impacts outside of winter maintenance budgets. The data used to estimate indirect ", 25, 55);
        doc.text("savings in this tool include:", 25, 60);

        doc.text("– Scientific research", 25, 70);
        doc.text("– Case study", 25, 75);
        doc.text("– Industry benchmarks", 25, 80);
        doc.text("– Customer Interviews", 25, 85);

        doc.text('Please see the "References" worksheet or select the button above to review specific sources. ', 25, 95);

        doc.setFontStyle("bold");
        doc.setTextColor(2,38,84);
        doc.setFontSize(11)
        doc.text("Direct Savings of Using                          Corrosion Inhibitor", 25, 105);
        doc.setFontStyle("bolditalic");
        doc.text('Headwaters®', 70, 105)

        var directSavingsTitles = ['Materials', 'Labor (Equipment Maintenance)', 'Repairs (Parts Maintenance)', 'Replacement (Vehicles & Equipment)', 'Infrastructure Corrosion Costs'];

        doc.setFontStyle("normal");
        doc.setTextColor(1);
        _.each(directSavingsTitles, function(title, index){
            doc.text(title, 25, 117 + index * 5);
        })

        var yearHeaderArray = ['Year', '1', '2', '3', '4', '5', '5 Year Total'];
        doc.setFontStyle("italic");
        doc.setTextColor(250,106,10);
        doc.setFontSize(10)
        _.each(yearHeaderArray, function(val, i){
            doc.text(val, 70 + i * 25, 110);
        });
        doc.setDrawColor(1);
        doc.setLineWidth(0.25);
        doc.lines([[220, 0]], 25, 112);

        var i = -1;
        var directSavingsMatrix = [[], [], [], [], []];
        _.each(directSavings, function(array){
            i++;
            doc.setTextColor(1);
            _.each(array, function(val, j){
                directSavingsMatrix[j][i] = val;
                doc.text('$'+val.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 93 + j * 25, 117 + i * 5);
            });
        });

        _.each(directSavingsTotalsArray, function(val, index){
            doc.text('$'+val.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 220, 117 + index * 5);
        });

        doc.setLineWidth(0.75);
        doc.lines([[220, 0]], 25, 140);


        doc.setTextColor(250,106,10);
        _.each(directSavingsMatrix, function(array, index){
            var total = _.reduce(array, function(sum, n){ return sum + n});
            doc.text('$'+total.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 93 + index * 25, 145);
        });

        var total = _.reduce(directSavingsTotalsArray, function(sum, n){ return sum + n});
        doc.text('$'+total.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 220, 145);


        doc.setTextColor(250,106,10);
        doc.setFontSize(12)
        doc.text("Total Direct Savings", 25, 145);

        doc.setFontStyle("bold");
        doc.setTextColor(2,38,84);
        doc.setFontSize(11)
        doc.text("Indirect Savings of Using                          Corrosion Inhibitor", 25, 155);
        doc.setFontStyle("bolditalic");
        doc.text('Headwaters®', 73, 155)

        var indirectSavingsTitles = ['Commercial Vehicles(Trucks & Trailers)', 'Private Vehicles', 'Public Fleets*'];

        doc.setFontStyle("normal");
        doc.setTextColor(1);
        _.each(indirectSavingsTitles, function(title, index){
            doc.text(title, 25, 167 + index * 5);
        })

        var yearHeaderArray = ['Year', '1', '2', '3', '4', '5', '5 Year Total'];
        doc.setFontStyle("italic");
        doc.setTextColor(250,106,10);
        doc.setFontSize(10)
        _.each(yearHeaderArray, function(val, i){
            doc.text(val, 70 + i * 25, 160);
        });
        doc.setDrawColor(1);
        doc.setLineWidth(0.25);
        doc.lines([[220, 0]], 25, 162);

        var i = -1;
        var indirectSavingsMatrix = [[], [], [], [], []];
        _.each(indirectSavings, function(array){
            i++;
            doc.setTextColor(1);
            _.each(array, function(val, j){
                indirectSavingsMatrix[j][i] = val;
                doc.text('$'+val.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 93 + j * 25, 167 + i * 5);
            });
        });

        _.each(indirectSavingsTotalsArray, function(val, index){
            doc.text('$'+val.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 220, 167 + index * 5);
        });

        doc.setLineWidth(0.75);
        doc.lines([[220, 0]], 25, 180);


        doc.setTextColor(250,106,10);
        _.each(indirectSavingsMatrix, function(array, index){
            var total = _.reduce(array, function(sum, n){ return sum + n});
            doc.text('$'+total.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 93 + index * 25, 185);
        });

        var total = _.reduce(indirectSavingsTotalsArray, function(sum, n){ return sum + n});
        doc.text('$'+total.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 220, 185);


        doc.setTextColor(250,106,10);
        doc.setFontSize(12)
        doc.text("Total Indirect Savings", 25, 185);

        doc.setTextColor(88,88,88);
        doc.setFontSize(10)
        doc.text("* Public fleets refers to all public agency (state, municipal, federal) vehicles including police, school, fire, maintenance etc. minus ", 35, 197);
        doc.text("winter maintenance fleet entered on the cost page.", 35, 202);
    };

    var buildCostsPage = function(form, totalCosts){
        doc.addImage(headwatersImg, 'PNG', 10, 10, 60, 20);
        doc.addImage(rivertopImg, 'PNG', 210, 10, 70, 20);

        doc.setTextColor(250,106,10);
        doc.setFontSize(16)
        doc.text("Basic Cost Information", 15, 40);

        doc.setTextColor(88,88,88);
        doc.setFontSize(11)
        doc.text("In this section enter the departments current yearly material, equipment and labor usage in deicing/antiicing activities.", 25, 50);

        doc.text("State evaluating cost benefit:", 25, 60);
        doc.text("Number of snowplows in fleet:", 25, 70);
        doc.setFontStyle("italic");
        doc.setFontSize(9);
        doc.text(" exposed to salt brine (23% NaCl)", 77, 70);
        doc.setFontStyle("normal");
        doc.setFontSize(11)
        doc.text("Additional maintenance vehicles exposed to brine:", 25, 80);
        doc.text("Number of brine making facilities:", 25, 90);
        doc.text("Average annual useage of brine (gallons):", 25, 100);
        doc.text("Brine application rate (gallons per lane mile):", 25, 110);
        doc.text("Cost per Gallon of brine:", 25, 120);

        doc.setDrawColor(250,106,10);
        _.times(7, function(i){
            doc.rect(130, 57 + i * 10, 25, 5, 'S');
        });

        var boxValues = [
            $selectBox.val(),
            $(form).find('input[name="numberSnowplows"]').val(),
            $(form).find('input[name="additionalVehicles"]').val(),
            $(form).find('input[name="brineMakingFacilities"]').val(),
            $(form).find('input[name="annualBrineGallons"]').val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            $(form).find('input[name="brineApplicationRate"]').val(),
            "$" + $(form).find('input[name="brineGallonCost"]').val(),
        ]

        _.each(boxValues, function(value, i){
            doc.text(value, 131, 61 + i * 10)
        });

        var paybackPlot = $.plot($("<div style='width:600px;height:300px'></div>"), [graphData.breakEven],  {
            series: {
                bars: {
                    show: true,
                    lineWidth: 0,
                    fillColor: 'rgb(2,38,84)'
                }
            },
            grid: {
                borderWidth: 0
            },
            xaxis: {
                show: false,
            },
            yaxis: {
              tickFormatter: function formatter(val) {
                  return (val >= 0 ? '$' : '-$') + Math.abs(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              }  
            },
            canvas: true
        });

        var ctx = paybackPlot.getCanvas().getContext("2d");
        var data = paybackPlot.getData()[0].data;
        var xaxis = paybackPlot.getXAxes()[0];
        var yaxis = paybackPlot.getYAxes()[0];
        var offset = paybackPlot.getPlotOffset();
        ctx.font = "16px 'Segoe UI'";
        ctx.fillStyle = "black";
        _.times(data.length, function(i){
            var text = (data[i][1] >= 0 ? '$' : '-$') + Math.abs(data[i][1]).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            var metrics = ctx.measureText(text);
            var xPos = (xaxis.p2c(data[i][0])+offset.left) - metrics.width/2;
            var yPos = yaxis.p2c(data[i][1]) + (data[i][1] > 0 ? offset.top - 10 : offset.bottom + 20);
            ctx.fillText(text, xPos, yPos);
        });
        imgData = paybackPlot.getCanvas().toDataURL('png/jpeg');
        doc.addImage(imgData, 'PNG', 160, 70, 120, 60);

        doc.setTextColor(250,106,10);
        doc.setFontSize(15)
        doc.text("Direct Payback Analysis*", 200, 65);

        doc.setTextColor(88,88,88);
        doc.setFontSize(12);
        _.times(5, function(i){
            doc.text((i + 1).toString(), 180 + i * 23, 136);
        });

        doc.setFontStyle("italic");
        doc.text("Years", 221, 145);

        doc.setTextColor(250,106,10);
        doc.setFontSize(10)
        doc.text("*Payback analysis includes only direct savings", 190, 152);

        doc.setFontStyle("bold");
        doc.setTextColor(2,38,84);
        doc.setFontSize(11)
        doc.text("Annualized Savings", 25, 165);
        doc.text("Annualized Costs", 160, 165);

        doc.setFontStyle("italic");
        doc.setTextColor(250,106,10);
        doc.setFontSize(10)
        doc.text("Yearly Average", 95, 168);
        doc.text("Yearly Average", 250, 168);

        doc.setDrawColor(1);
        doc.setLineWidth(0.25);
        doc.lines([[100, 0]], 25, 170);
        doc.lines([[120, 0]], 160, 170);

        doc.setTextColor(88,88,88);
        doc.setFontStyle("normal");
        doc.setFontSize(11)
        doc.text("Direct Savings", 30, 175);
        doc.text("Indirect Savings", 30, 180);
        doc.text("Materials &", 165, 175);
        doc.text("Equipment", 165, 180);

        doc.text("$" + (totalDirectSavings/numYears).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 97, 175);
        doc.text("$" + (totalIndirectSavings/numYears).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 97, 180);
        doc.text("$" + (totalCosts/numYears).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 252, 177);

        doc.setLineWidth(0.75);
        doc.lines([[100, 0]], 25, 182);
        doc.lines([[120, 0]], 160, 182);

        doc.setTextColor(250,106,10);
        doc.text("Combined Savings", 25, 187);
        doc.text("Combined Costs", 160, 187);

        doc.text("$" + ((totalIndirectSavings + totalDirectSavings)/numYears).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 97, 187);
        doc.text("$" + (totalCosts/numYears).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 253, 187);
    };

    var buildSummaryPage = function(totalCosts){
        doc.addImage(headwatersImg, 'PNG', 10, 10, 60, 20);
        doc.addImage(rivertopImg, 'PNG', 210, 10, 70, 20);

        doc.setTextColor(250,106,10);
        doc.setFontSize(16)
        doc.text("Financial Summary Analysis", 15, 40);

        doc.setTextColor(88,88,88);
        doc.setFontSize(14)
        doc.text("The financial analysis below represents a five year return on investment (ROI) evaluation.", 25, 53);

        doc.setTextColor(2,38,84);
        doc.setFontSize(15)
        doc.text("ROI ANALYSIS", 25, 65);

        doc.setTextColor(250,106,10);
        doc.setFontStyle("italic");
        doc.setFontSize(12)
        doc.text("5 Year Total", 100, 67);
        doc.setFontStyle("normal");

        doc.lines([[100, 0]], 25, 68.5);

        doc.setTextColor(88,88,88);
        doc.setFontSize(14)
        doc.text("Direct", 35, 74);
        var percentage = ((totalDirectSavings-totalCosts)/totalCosts * 100).toFixed(0);
        doc.text(percentage + '%', 105, 74);

        doc.text("Indirect", 35, 80);
        percentage = ((totalIndirectSavings-totalCosts)/totalCosts * 100).toFixed(0);
        doc.text(percentage + '%', 105, 80);

        doc.setLineWidth(0.75);
        doc.lines([[100, 0]], 25, 82.5);

        doc.setTextColor(250,106,10);
        doc.text("Total ROI", 30, 88);
        percentage = ((totalDirectSavings+totalIndirectSavings-totalCosts)/totalCosts * 100).toFixed(0);
        doc.text(percentage + '%', 105, 88);

        doc.setTextColor(2,38,84);
        doc.setFontSize(16)
        doc.text("Direct Savings", 63, 105);
        doc.text("Indirect Savings", 173, 105);

        doc.setTextColor(88,88,88);
        doc.setFontSize(10);

        doc.setFillColor(88,88,88);
        doc.rect(16, 183, 2, 2, 'F');
        doc.text("Materials",           19, 185);

        doc.setFillColor(2,38,84);
        doc.rect(39, 183, 2, 2, 'F');
        doc.text("Labor",               42, 185);

        doc.setFillColor(7,76,161);
        doc.rect(58, 183, 2, 2, 'F');
        doc.text("Repairs",             61, 185);

        doc.setFillColor(250,106,10);
        doc.rect(78, 183, 2, 2, 'F');
        doc.text("Replacement",         81, 185);

        doc.setFillColor(26, 150, 200);
        doc.rect(107, 183, 2, 2, 'F');
        doc.text("Infrastructure",      110, 185);

        doc.setFillColor(2,38,84);
        doc.rect(152, 183, 2, 2, 'F');
        doc.text("Private Vehicles", 155, 185);
        doc.setFillColor(88,88,88);
        doc.rect(184, 183, 2, 2, 'F');
        doc.text("Commercial Vehicles", 187, 185);
        doc.setFillColor(7,76,161);
        doc.rect(225, 183, 2, 2, 'F');
        doc.text("Public Fleets",       228, 185);


        var canvas = $("<canvas width='400' height='400'></canvas>").get(0);
        var context = canvas.getContext("2d");
        // turn into degrees for graphs
        var arrayInDegrees = [];
        _.forEach(directSavingsTotalsArray, function(val, index){
            arrayInDegrees.push(directSavingsTotalsArray[index]/totalDirectSavings*360);
        });
        _.each(arrayInDegrees, function(array, index){
            drawPieChartSegment(canvas, context, index, arrayInDegrees);
        });

        var imgData = canvas.toDataURL('png/jpeg');
        doc.addImage(imgData, 'PNG', 50, 110, 60, 60);

        canvas = $("<canvas width='400' height='400'></canvas>").get(0);
        context = canvas.getContext("2d");
        // turn into degrees for graphs
        arrayInDegrees = [];
        _.forEach(indirectSavingsTotalsArray, function(val, index){
            arrayInDegrees.push(indirectSavingsTotalsArray[index]/totalIndirectSavings*360);
        });
        _.each(arrayInDegrees, function(array, index){
            drawPieChartSegment(canvas, context, index, arrayInDegrees);
        });
        imgData = canvas.toDataURL('png/jpeg');
        doc.addImage(imgData, 'PNG', 165, 110, 60, 60);
    };

    var getCumulativeSavingsSum = function(index){
        var sum = 0;
        _.times(index + 1, function(i){
            _.each(directSavings, function(array){
                sum += array[i];
            });
        });

        return sum;
    };

    var calculateIndirectSavings = function(form){
        indirectSavings = {
            commerciaVehicles: [],
            privateVehicles: [],
            publicFleets: []
        };
        indirectSavingsTotalsArray = [];

        var state = $selectBox.val();
        state = stateData[state];      
        var annualBrineGallons = $(form).find('input[name="annualBrineGallons"]').val();
        var publicFleetCorrosionSavings = (annualBrineGallons * 2.3 / 2000) * (82.77215322 + 124.07301246) * (state.totalPublicFleet/(state.totalRegisteredVehicles + state.totalPublicFleet)) * 0.7;
        var vehicleCorrosionSavings = (annualBrineGallons * 2.3 / 2000) * (82.77215322 + 124.07301246) * (state.totalRegisteredVehicles/(state.totalPublicFleet + state.registeredAutos + state.registeredBuses + state.registeredTrucks)) * 0.7;
        var commercialVehicleCorrosionSavings = (annualBrineGallons * 2.3 / 2000) * 387.83483432 * 0.7;

        _.times(numYears, function(index){
            var commerciaVehicleValue = getCommercialVehicleValue(index, commercialVehicleCorrosionSavings);
            indirectSavings.commerciaVehicles.push(commerciaVehicleValue);

            var privateVehicleValue = getPrivateVehicleValue(index, vehicleCorrosionSavings);
            indirectSavings.privateVehicles.push(privateVehicleValue);

            var publicFleetValue = getPublicFleetValue(index, publicFleetCorrosionSavings);
            indirectSavings.publicFleets.push(publicFleetValue);
        });

        totalIndirectSavings = 0;
        _.forEach(indirectSavings, function(array){
            var total = _.reduce(array, function(sum, n){ return sum + n});
            indirectSavingsTotalsArray.push(total);
            totalIndirectSavings += total;
        });

        annualIndirectSavings = totalIndirectSavings/numYears;
    };

    var getCommercialVehicleValue = function(index, commercialVehicleCorrosionSavings){
            if(index===0){
                return commercialVehicleCorrosionSavings;
            } else {
                return (indirectSavings.commerciaVehicles[index - 1] * inflationRate) + indirectSavings.commerciaVehicles[index - 1];
            }
    };

    var getPrivateVehicleValue = function(index, vehicleCorrosionSavings){
        if(index === 0){
            return vehicleCorrosionSavings;
        } else {
            return (indirectSavings.privateVehicles[index - 1] * inflationRate) + indirectSavings.privateVehicles[index - 1];
        }
    };

    var getPublicFleetValue = function(index, publicFleetCorrosionSavings){
        if(index === 0){
            return publicFleetCorrosionSavings;
        } else {
            return (indirectSavings.publicFleets[index - 1] * inflationRate) + indirectSavings.publicFleets[index - 1];
        }
    };

    var calculateDirectSavings = function(form){
        directSavings = {
            materials: [],
            labor: [],
            repairs: [],
            replacement: [],
            infrastructureCorrosionCosts: []
        };
        directSavingsTotalsArray = [];

        var state = $selectBox.val();
        state = stateData[state];
        var roads = 462.923575390511;
        var bridges = 13707.7047030135;
        var annualBrineGallons = $(form).find('input[name="annualBrineGallons"]').val();
        var brineGallonCost = $(form).find('input[name="brineGallonCost"]').val();
        var numberSnowplows = $(form).find('input[name="numberSnowplows"]').val();

        _.times(numYears, function(index){
            var materialValue = getMaterialsValue(index, annualBrineGallons, brineGallonCost);
            directSavings.materials.push(materialValue);

            var laborValue = getLaborValue(index, annualBrineGallons);
            directSavings.labor.push(laborValue);

            var repairsValue = getRepairsValue(index, annualBrineGallons);
            directSavings.repairs.push(repairsValue);

            var replacementValue = getReplacementValue(index, annualBrineGallons);
            directSavings.replacement.push(replacementValue);

            var infrastructureCorrosionCostValue = getinfrastructureCorrosionCostValue(index, annualBrineGallons);
            directSavings.infrastructureCorrosionCosts.push(infrastructureCorrosionCostValue);
        });

        totalDirectSavings = 0;
        _.forEach(directSavings, function(array){
            var total = _.reduce(array, function(sum, n){ return sum + n});
            directSavingsTotalsArray.push(total);
            totalDirectSavings += total;
        });

        annualDirectSavings = totalDirectSavings/numYears;
    };

    var getMaterialsValue = function(index, annualBrineGallons, brineGallonCost){
        if(index === 0){
            return (annualBrineGallons * 0.045) * brineGallonCost;
        } else {
            return (directSavings.materials[index - 1] * inflationRate) + directSavings.materials[index - 1];
        }
    };

    var getLaborValue = function(index, annualBrineGallons){
        if(index === 0){
            return annualBrineGallons * 2.3/ 2000 * 3.65;
        } else {
            return (directSavings.labor[index - 1] * inflationRate) + directSavings.labor[index - 1];
        }
    };

    var getRepairsValue = function(index, annualBrineGallons){
        if(index === 0){
            return annualBrineGallons * 2.3/ 2000 * 6.3;
        } else {
            return (directSavings.repairs[index - 1] * inflationRate) + directSavings.repairs[index - 1];
        }
    };

    var getReplacementValue = function(index, annualBrineGallons){
        if(index === 0){
            return annualBrineGallons * 2.3/ 2000 * 19.98;
        } else {
            return (directSavings.replacement[index - 1] * inflationRate) + directSavings.replacement[index - 1];
        }
    };

    var getinfrastructureCorrosionCostValue = function(index, annualBrineGallons){
        if(index === 0){
            return annualBrineGallons * 2.3/ 2000 * 406.35;
        } else {
            return (directSavings.infrastructureCorrosionCosts[index - 1] * inflationRate) + directSavings.infrastructureCorrosionCosts[index - 1];
        }
    };

    var drawPieChartSegment = function(canvas, context, i, data){
                        // grey             dark blue        blue         orange
            var colors = ["rgb(88,88,88)", "rgb(2,38,84)", "rgb(7,76,161)", "rgb(250,106,10)", "rgb(26,150,200)"];

            context.save();
            var centerX = Math.floor(canvas.width / 2);
            var centerY = Math.floor(canvas.height / 2);
            radius = Math.floor(canvas.width / 2);

            var startingAngle = degreesToRadians(sumTo(data, i));
            var arcSize = degreesToRadians(data[i]);
            var endingAngle = startingAngle + arcSize;

            context.beginPath();
            context.moveTo(centerX, centerY);
            context.arc(centerX, centerY, radius, 
                                    startingAngle, endingAngle, false);
            context.closePath();

            context.fillStyle = colors[i];
            context.fill();

            context.restore();
    };

    function degreesToRadians(degrees) {
            return (degrees * Math.PI)/180;
    }
    function sumTo(a, i) {
            var sum = 0;
            for (var j = 0; j < i; j++) {
                sum += a[j];
            }
            return sum;
    }
});
})();