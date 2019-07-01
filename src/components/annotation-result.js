import React, {Fragment} from "react";
import logo from "../assets/mozi_globe.png";
import {Button, Row, Col, Spin, Input} from "antd";
import {Visualizer} from "./visualizer";
import {parse, distanceInWordsToNow} from "date-fns";
import {TabbedTables} from "./tabbed-tables";
import "antd/dist/antd.css";

// export const SERVER_ADDRESS = process.env.SERVICE_ADDR
//   ? `http://${process.env.SERVICE_ADDR}:3002`
//   : "http://localhost:3002";
export const annts = ["gene-go-annotation","gene-pathway-annotation", "biogrid-interaction-annotation"];
export const sample_graph = {
        "nodes": [
            {
                "data": {
                    "id": "SPAG9",
                    "name": "C-Jun-amino-terminal kinase-interacting protein 4",
                    "definition": "https://www.ncbi.nlm.nih.gov/gene/9043",
                    "location": "cytoplasm,perinuclear region of cytoplasm,acrosomal vesicle,cytosol,extracellular exosome",
                    "subgroup": "SPAG9",
                    "group": "main"
                },
                "position": {
                    "x": 951.3076549058273,
                    "y": 400.90003494718735
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0005078",
                    "name": "MAP-kinase scaffold activity",
                    "definition": "The binding activity of a molecule that functions as a physical support for the assembly of a multiprotein mitogen-activated protein kinase [MAPK] complex. Binds multiple kinases of the MAPKKK cascade, and also upstream signaling proteins, permitting those molecules to function in a coordinated way. Bringing together multiple enzymes and their substrates enables the signal to be transduced quickly and efficiently.",
                    "location": "",
                    "subgroup": "molecular_function",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 1422.3951921914495,
                    "y": 240.00688906554538
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0005515",
                    "name": "protein binding",
                    "definition": "Interacting selectively and non-covalently with any protein or protein complex [a complex of two or more proteins that may include other nonprotein molecules].",
                    "location": "",
                    "subgroup": "molecular_function",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 863.05655264287,
                    "y": 818.4000399471875
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0019894",
                    "name": "kinesin binding",
                    "definition": "Interacting selectively and non-covalently and stoichiometrically with kinesin, a member of a superfamily of microtubule-based motor proteins that perform force-generating tasks such as organelle transport and chromosome segregation.",
                    "location": "",
                    "subgroup": "molecular_function",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 306.3076519058274,
                    "y": 418.40003494718735
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0030159",
                    "name": "receptor signaling complex scaffold activity",
                    "definition": "Functions to provide a physical support for the assembly of a multiprotein receptor signaling complex.",
                    "location": "",
                    "subgroup": "molecular_function",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 1381.3076569058273,
                    "y": 480.00689206554534
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0008432",
                    "name": "JUN kinase binding",
                    "definition": "Interacting selectively and non-covalently with JUN kinase, an enzyme that catalyzes the phosphorylation and activation of members of the JUN family.",
                    "location": "",
                    "subgroup": "molecular_function",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 421.3076529058274,
                    "y": 498.4000359471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0001669",
                    "name": "(",
                    "definition": "A structure in the head of a spermatozoon that contains acid hydrolases, and is concerned with the breakdown of the outer membrane of the ovum during fertilization. It lies just beneath the plasma membrane and is derived from the lysosome.",
                    "location": "",
                    "subgroup": "cellular_component",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 1207.3951911914494,
                    "y": 240.00688906554538
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0005829",
                    "name": "cytosol",
                    "definition": "The part of the cytoplasm that does not contain organelles but which does contain other particulate matter, such as protein complexes.",
                    "location": "",
                    "subgroup": "cellular_component",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 992.3951901914496,
                    "y": 258.40003294718736
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0005815",
                    "name": "(",
                    "definition": "An intracellular structure that can catalyze gamma-tubulin-dependent microtubule nucleation and that can anchor microtubules by interacting with their minus ends, plus ends or sides.",
                    "location": "",
                    "subgroup": "cellular_component",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 521.3076529058275,
                    "y": 418.40003494718735
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0048471",
                    "name": "perinuclear region of cytoplasm",
                    "definition": "Cytoplasm situated near, or occurring around, the nucleus.",
                    "location": "",
                    "subgroup": "cellular_component",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 421.3076529058274,
                    "y": 578.4000369471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0070062",
                    "name": "extracellular exosome",
                    "definition": "A vesicle that is released into the extracellular region by fusion of the limiting endosomal membrane of a multivesicular body with the plasma membrane. Extracellular exosomes, also simply called exosomes, have a diameter of about 40-100 nm.",
                    "location": "",
                    "subgroup": "cellular_component",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 863.05655264287,
                    "y": 738.4000389471875
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0005737",
                    "name": "cytoplasm",
                    "definition": "All of the contents of a cell excluding the plasma membrane and nucleus, but including other subcellular structures.",
                    "location": "",
                    "subgroup": "cellular_component",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 1154.8075153528946,
                    "y": 613.4000369471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0045666",
                    "name": "positive regulation of neuron differentiation",
                    "definition": "Any process that activates or increases the frequency, rate or extent of neuron differentiation.",
                    "location": "",
                    "subgroup": "biological_process",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 778.0214629413443,
                    "y": 1138.4000439471872
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0051149",
                    "name": "positive regulation of muscle cell differentiation",
                    "definition": "Any process that activates or increases the frequency, rate or extent of muscle cell differentiation.",
                    "location": "",
                    "subgroup": "biological_process",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 1608.8076579058272,
                    "y": 320.00689006554535
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0051146",
                    "name": "striated muscle cell differentiation",
                    "definition": "The process in which a relatively unspecialized cell acquires specialized features of a striated muscle cell; striated muscle fibers are divided by transverse bands into striations, and cardiac and voluntary muscle are types of striated muscle.",
                    "location": "",
                    "subgroup": "biological_process",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 1045.4838277852812,
                    "y": 98.4000309471874
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0051260",
                    "name": "protein homooligomerization",
                    "definition": "The process of creating protein oligomers, compounds composed of a small number, usually between three and ten, of identical component monomers. Oligomers may be formed by the polymerization of a number of monomers or the depolymerization of a large protein polymer.",
                    "location": "",
                    "subgroup": "biological_process",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 1107.1976726955622,
                    "y": 1058.4000429471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0042147",
                    "name": "retrograde transport, endosome to Golgi",
                    "definition": "The directed movement of membrane-bounded vesicles from endosomes back to the trans-Golgi network where they are recycled for further rounds of transport.",
                    "location": "",
                    "subgroup": "biological_process",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 1154.8075153528946,
                    "y": 693.4000379471872
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0016192",
                    "name": "vesicle-mediated transport",
                    "definition": "A cellular transport process in which transported substances are moved in membrane-bounded vesicles; transported substances are enclosed in the vesicle lumen or located in the vesicle membrane. The process begins with a step that directs a substance to the forming vesicle, and includes vesicle budding and coating. Vesicles are then targeted to, and fuse with, an acceptor membrane.",
                    "location": "",
                    "subgroup": "biological_process",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 901.3076549058273,
                    "y": 498.4000359471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0030335",
                    "name": "positive regulation of cell migration",
                    "definition": "Any process that activates or increases the frequency, rate or extent of cell migration.",
                    "location": "",
                    "subgroup": "biological_process",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 901.3076549058273,
                    "y": 578.4000369471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "GO:0007257",
                    "name": "activation of JUN kinase activity",
                    "definition": "The initiation of the activity of the inactive enzyme JUN kinase [JNK].",
                    "location": "",
                    "subgroup": "biological_process",
                    "group": "gene-go-annotation"
                },
                "position": {
                    "x": 1113.2565571105933,
                    "y": -61.59997105281252
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "ChEBI:15996",
                    "name": "({[({[(2R,3S,4R,5R)-5-(2-amino-6-oxo-6,9-dihydro-1H-purin-9-yl)-3,4-dihydroxyoxolan-2-yl]methoxy}(hydroxy)phosphoryl)oxy](hydroxy)phosphoryl}oxy)phosphonic acid",
                    "definition": "https://www.ebi.ac.uk/chebi/searchId.do?chebiId=15996",
                    "location": "endocytic vesicle lumen,mitochondrial matrix,cytosol,extracellular region,Golgi lumen,ER to Golgi transport vesicle membrane,cilium,Golgi membrane,early endosome membrane,nucleoplasm,cytoplasmic vesicle membrane,platelet dense granule lumen,lysosomal membrane",
                    "subgroup": "ChEBI",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 824.2338267852812,
                    "y": 80.9000309471874
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "ChEBI:15422",
                    "name": "({[({[(2R,3S,4R,5R)-5-(6-amino-9H-purin-9-yl)-3,4-dihydroxyoxolan-2-yl]methoxy}(hydroxy)phosphoryl)oxy](hydroxy)phosphoryl}oxy)phosphonic acid",
                    "definition": "https://www.ebi.ac.uk/chebi/searchId.do?chebiId=15422",
                    "location": "endoplasmic reticulum membrane,endoplasmic reticulum lumen,extracellular region,platelet dense granule lumen,peroxisomal matrix,mitochondrial matrix,nucleoplasm,plasma membrane,mitochondrial intermembrane space,cytosol,cilium",
                    "subgroup": "ChEBI",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1376.057516352895,
                    "y": 737.5068950655453
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "ChEBI:16761",
                    "name": "[({[(2R,3S,4R,5R)-5-(6-amino-9H-purin-9-yl)-3,4-dihydroxyoxolan-2-yl]methoxy}(hydroxy)phosphoryl)oxy]phosphonic acid",
                    "definition": "https://www.ebi.ac.uk/chebi/searchId.do?chebiId=16761",
                    "location": "extracellular region,endoplasmic reticulum lumen,mitochondrial matrix,plasma membrane,endoplasmic reticulum membrane,cytosol,cilium,mitochondrial intermembrane space,nucleoplasm,platelet dense granule lumen",
                    "subgroup": "ChEBI",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1122.5576559058275,
                    "y": 355.9000339471874
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P55291",
                    "name": "CDH15",
                    "definition": "https://www.uniprot.org/uniprot/P55291",
                    "location": "plasma membrane",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 661.3076539058275,
                    "y": 578.4000369471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q06413",
                    "name": "p-S396-MEF2C",
                    "definition": "https://www.uniprot.org/uniprot/Q06413",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1070.4838277852812,
                    "y": 18.400029947187438
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P19022",
                    "name": "CDH2",
                    "definition": "https://www.uniprot.org/uniprot/P19022",
                    "location": "endoplasmic reticulum lumen,plasma membrane",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 674.807513352895,
                    "y": 658.4000379471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q02078",
                    "name": "p-S408-MEF2A",
                    "definition": "https://www.uniprot.org/uniprot/Q02078",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1394.807516352895,
                    "y": 640.0068940655455
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q02080",
                    "name": "MEF2B",
                    "definition": "https://www.uniprot.org/uniprot/Q02080",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 967.3951901914496,
                    "y": 178.40003194718736
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P15172",
                    "name": "MYOD1",
                    "definition": "https://www.uniprot.org/uniprot/P15172",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1406.3076569058273,
                    "y": 400.0068910655454
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P35221",
                    "name": "CTNNA1",
                    "definition": "https://www.uniprot.org/uniprot/P35221",
                    "location": "cytosol,plasma membrane",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1141.3076559058275,
                    "y": 453.40003494718735
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P53778",
                    "name": "MAPK12",
                    "definition": "https://www.uniprot.org/uniprot/P53778",
                    "location": "cytosol,nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1018.0214639413443,
                    "y": 1138.4000439471872
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q99081",
                    "name": "TCF12",
                    "definition": "https://www.uniprot.org/uniprot/Q99081",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1406.3076569058273,
                    "y": 560.0068930655453
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q14814",
                    "name": "MEF2D",
                    "definition": "https://www.uniprot.org/uniprot/Q14814",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1141.3076559058275,
                    "y": 533.4000359471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q16539",
                    "name": "Mitogen-activated protein kinase 14",
                    "definition": "https://www.uniprot.org/uniprot/Q16539",
                    "location": "ficolin-1-rich granule lumen,extracellular region,secretory granule lumen,nucleoplasm,cytosol",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 761.3076539058275,
                    "y": 338.40003394718735
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P00519",
                    "name": "ABL1",
                    "definition": "https://www.uniprot.org/uniprot/P00519",
                    "location": "nucleoplasm,cytosol",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1368.8076569058273,
                    "y": 320.00689006554535
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:O00634",
                    "name": "NTN3",
                    "definition": "https://www.uniprot.org/uniprot/O00634",
                    "location": "extracellular region",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 838.05655264287,
                    "y": 898.4000409471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P15923",
                    "name": "p-S139-TCF3",
                    "definition": "https://www.uniprot.org/uniprot/P15923",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 752.3951891914497,
                    "y": 258.40003294718736
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P35222",
                    "name": "p-S552-CTNNB1",
                    "definition": "https://www.uniprot.org/uniprot/P35222",
                    "location": "plasma membrane,cytosol,nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 761.3076539058275,
                    "y": 418.40003494718735
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q92859",
                    "name": "NEO1",
                    "definition": "https://www.uniprot.org/uniprot/Q92859",
                    "location": "plasma membrane",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 947.9772880612489,
                    "y": -176.5999720528125
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q4KMG0",
                    "name": "CDON",
                    "definition": "https://www.uniprot.org/uniprot/Q4KMG0",
                    "location": "plasma membrane",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1103.0565536428699,
                    "y": 853.4000399471875
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P15884",
                    "name": "TCF4",
                    "definition": "https://www.uniprot.org/uniprot/P15884",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 873.2565561105935,
                    "y": -96.59997105281252
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P60953",
                    "name": "Cell division control protein 42 homolog",
                    "definition": "https://www.uniprot.org/uniprot/P60953",
                    "location": "endoplasmic reticulum membrane,plasma membrane,cytosol",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 702.3951891914497,
                    "y": 178.40003194718736
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P26232",
                    "name": "CTNNA2",
                    "definition": "https://www.uniprot.org/uniprot/P26232",
                    "location": "cytosol",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 661.3076539058275,
                    "y": 498.4000359471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q9BWV1-1",
                    "name": "BOC-1",
                    "definition": "https://www.uniprot.org/uniprot/Q9BWV1-1",
                    "location": "plasma membrane",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1380.55655464287,
                    "y": 835.0068960655453
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P23409",
                    "name": "MYF6",
                    "definition": "https://www.uniprot.org/uniprot/P23409",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 623.05655164287,
                    "y": 738.4000389471875
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P15173",
                    "name": "MYOG",
                    "definition": "https://www.uniprot.org/uniprot/P15173",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 623.05655164287,
                    "y": 818.4000399471875
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q12982",
                    "name": "BNIP2",
                    "definition": "https://www.uniprot.org/uniprot/Q12982",
                    "location": "cytosol",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 496.3076529058274,
                    "y": 338.40003394718735
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P13349",
                    "name": "MYF5",
                    "definition": "https://www.uniprot.org/uniprot/P13349",
                    "location": "nucleoplasm",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 867.1976716955622,
                    "y": 1058.4000429471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:Q15759",
                    "name": "Mitogen-activated protein kinase 11",
                    "definition": "https://www.uniprot.org/uniprot/Q15759",
                    "location": "nucleoplasm,cytosol",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 953.5885014752048,
                    "y": 978.4000419471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:P55283",
                    "name": "CDH4",
                    "definition": "https://www.uniprot.org/uniprot/P55283",
                    "location": "plasma membrane",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 1103.0565536428699,
                    "y": 773.4000389471875
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "Uniprot:O60271",
                    "name": "SPAG9",
                    "definition": "https://www.uniprot.org/uniprot/O60271",
                    "location": "cytosol",
                    "subgroup": "Uniprot",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 805.4838267852812,
                    "y": -16.599970052812562
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "R-HSA-375170",
                    "name": "N/A",
                    "definition": "http://www.reactome.org/content/detail/R-HSA-375170",
                    "location": "",
                    "subgroup": "R-HSA-375170",
                    "group": "gene-pathway-annotation"
                },
                "position": {
                    "x": 927.3075143528949,
                    "y": 658.4000379471873
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            }
        ],
        "edges": [
            {
                "data": {
                    "source": "GO:0005078",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "7bf419c8-2bed-4568-ae47-5db0d8ce4466"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0005515",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "a6c597a6-00eb-487b-b65c-7d534d8b07e6"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0019894",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "78830b4c-044e-483c-8536-1a150ef23d71"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0030159",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "700b3614-2e80-43de-9783-80e05842e0e1"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0008432",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "5d913bce-be1e-4140-8e03-4a3b67c1ce18"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0001669",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "6cc8aef5-1fad-4abe-be17-9c3209799614"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0005829",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "06426edf-8b2c-4ae0-88aa-f8bce95652af"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0005815",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "cbbe4b35-4b67-4e0d-b40e-457594f27a5f"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0048471",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "c470ec9d-b148-472a-bd9c-4ce0c0f8d039"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0070062",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "4cb789f5-fb72-44c2-9ab3-9c9b2600affd"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0005737",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "a8a45966-d93f-42dd-bf99-5e23ec6c92da"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0045666",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "fd61a1f6-f007-4d68-81b3-942bbe5f5f9a"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0051149",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "17668c2c-1538-4a43-881f-0f81f526ea4c"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0051146",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "671425ad-eff2-403e-aa8b-5471903a0c26"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0051260",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "e9a1e05c-2e09-4f30-8e35-b20eca49a7f9"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0042147",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "f69d3920-15da-4475-a166-c6174b1ad7f5"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0016192",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "25ae60e8-b986-41ab-950d-9eacaf6d4793"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0030335",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "b2ff5cb8-0440-45ac-a7fb-156affd890cd"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "GO:0007257",
                    "target": "SPAG9",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-go-annotation",
                    "id": "d57b8169-3915-4224-99a4-99b9e1cc7930"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "ChEBI:15996",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "4d261a80-efd7-425f-9971-549834174ba9"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "ChEBI:15422",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "fc1d77ca-33c1-4ec9-8914-ebe6450ba2b2"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "ChEBI:16761",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "902fce0c-135d-4cb2-9480-c9871c663467"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P55291",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "a1fa6eda-d11c-45b5-9320-c6655f57f45b"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q06413",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "fbcdac7c-54eb-4c26-af5b-fd41d58af8e2"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P19022",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "01f54d1b-e3cb-4af4-9fa1-7591ee66fbdc"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q02078",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "36f6a0d6-4f6c-400f-972f-ec59006afaae"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q02080",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "ea3c47c1-2d8e-450e-bffc-97394281bdd2"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P15172",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "3e09bcef-5955-41df-81a3-78dbb148a11c"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P35221",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "469d87fd-98fa-48fb-96ca-faa7f560f1cc"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P53778",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "ed275711-9838-4633-8543-56429355232c"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q99081",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "c0b9b632-20d6-4463-9a0a-41e0d9c8486e"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q14814",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "a317b9bd-9fd8-43d2-94a6-ce1697f686c3"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q16539",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "85ef1732-a85e-48e7-8a61-af5a64851a05"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P00519",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "ede20e55-580f-49ec-b439-3408b401eea4"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:O00634",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "13964053-b3c8-4880-8ac9-574d8f50cca9"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P15923",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "a3ac2656-ff34-4e45-a50f-109f7f427bea"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P35222",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "32e4ac31-4f24-452d-ba6f-c69e9d37a96f"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q92859",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "3a27c409-171f-4c4e-bd6e-897d3ee641a6"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q4KMG0",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "6ea373a7-c098-40ee-8bd7-c52d7d941894"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P15884",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "d7949fa0-dfbb-4a6e-8174-b6fb870b62f9"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P60953",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "3a0202c0-b40d-47c0-abd1-3b8f77717765"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P26232",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "2f93e930-12c8-4167-9dea-d25851162688"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q9BWV1-1",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "a84c6ef0-bcb2-4acc-9c21-2512fa7cf9c0"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P23409",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "c66d1259-a92e-4306-a7ca-3a23d485bf0c"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P15173",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "fbd4c7a5-b3d6-4516-a351-e452a78675b2"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q12982",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "09635b4a-22c3-464e-a882-5c66972a9b4a"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P13349",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "9176c93c-31e8-430c-9cb8-1272aacc4d13"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:Q15759",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "6311d6e6-bfda-4462-ac90-9bbefcf8e2d0"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:P55283",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "478e3c91-f756-47f5-bcac-097af641767b"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "R-HSA-375170",
                    "target": "Uniprot:O60271",
                    "name": "annotates",
                    "pubmedId": "",
                    "subgroup": "annotates",
                    "group": "gene-pathway-annotation",
                    "id": "db8dfd38-6fdc-4202-b8bc-4d357040dd1c"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P26232",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "69790818-0f1c-47f2-adc8-370c1207fcca"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q92859",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "2c0b4546-9b8c-470f-95e9-81fa7c088270"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P55283",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "1f8d82a9-0e20-468e-8fd6-acfd9cec1c82"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P35222",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "b8044f3d-2f01-4457-8844-1318bc66195b"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q06413",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "21694d39-b763-4e49-9c83-aa01a5d7a2ad"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P55291",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "0020f522-b02b-45ac-92cb-1fb065738f3c"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P60953",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "4ad15697-cfc3-4599-b744-f533fd6f3cf8"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P53778",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "86c739b8-425f-4b28-a555-7f123c552901"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P15172",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "5f3ad8ee-2355-44a0-9014-c73e64965279"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q99081",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "f92a7fba-d5df-45ca-b2b9-fbd46726e9e1"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q02080",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "f47416b6-35f1-440a-88ee-7417d95155e3"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P00519",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "476a5ba8-737b-4b0e-b5fa-81d57ca9a064"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q4KMG0",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "364e28b3-4294-4328-b3f5-cf6bbe109c85"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q02078",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "11e9dfa8-9de2-465a-b737-6e3f2ad559a1"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P13349",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "73ed61f5-5115-4c93-a65c-5d06f52b4925"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:O60271",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "1321554f-956b-425c-821c-d35c090ff759"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q14814",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "3048331f-48c6-4c28-a844-0d050528ec8d"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P35221",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "5d2accc4-4af6-4be3-95f2-49ef15db5e2d"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:O00634",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "14ca3883-cba9-4a4f-a2ae-f9c17ec72372"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q9BWV1-1",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "c08854af-d905-4ffe-9b3e-9f26148b6afe"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P15923",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "c998acd3-51c4-42c9-aad6-5e3f401dda43"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q16539",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "a1e47bc7-40a5-4995-8270-86568fd4c8ae"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q12982",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "276f27db-d704-4e33-9377-9308e2ac6c1c"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P19022",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "dc0745df-ab4a-42cf-b90a-8259dfa7a155"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:Q15759",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "0f149077-1132-4fb6-aed1-bcddef98e5fd"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P15173",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "fc4cca3d-c345-480f-ac1d-ec79fcab18ac"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P23409",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "c48a4e49-6f82-4796-bd78-afdc6935ead0"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            },
            {
                "data": {
                    "source": "SPAG9",
                    "target": "Uniprot:P15884",
                    "name": "expresses",
                    "pubmedId": "",
                    "subgroup": "expresses",
                    "group": "gene-pathway-annotation",
                    "id": "15b0dc32-b236-428d-8057-a73d297f78dd"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "classes": ""
            }
        ]

};

export const SERVER_ADDRESS = "http://mozi.ai:3002";

const Search = Input.Search;
export const AnnotationStatus = {
    ACTIVE: 1,
    COMPLETED: 2,
    ERROR: -1
};

export const getQueryValue = variable => {
    const vars = window.location.search.substring(1).split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return null;
};

const fetchAnnotationStatus = id => {
    return fetch(`${SERVER_ADDRESS}/result/${id}`).then(response =>
        response.json()
    );
};

export class AnnotationResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchingResult: false,
            response: undefined,
            showVisualization: true,
            showResultTable: false
        };
        this.downloadSchemeFile = this.downloadSchemeFile.bind(this);
        this.fetchTableData = this.fetchTableData.bind(this);
        this.getSession = this.getSession.bind(this);
    }

    componentDidMount() {
       /* const id = getQueryValue("id");
        if (id) {
            this.setState({fetchingResult: true});
            fetchAnnotationStatus(id).then(response => {
                response.result = JSON.parse(response.result);
                this.setState({
                    fetchingResult: false,
                    response: response
                });
            });
        }*/
    }

    getSession(id) {
        window.location.href = `${window.location}?id=${id}`;
    }

    downloadSchemeFile() {
        window.open(`${SERVER_ADDRESS}/result_file/${getQueryValue("id")}`);
    }

    downloadCSVFile(fileName) {
        window.open(`${SERVER_ADDRESS}/csv_file/${fileName}`);
    }

    fetchTableData(fileName) {
        fetch(`${SERVER_ADDRESS}/csv_file/${fileName}`).then(data => {
            const response = Object.assign({}, this.state.response);
            data
                .clone()
                .text()
                .then(text => {
                    response.csv_files.find(f => f.fileName === fileName).data = text;
                    this.setState({response: response});
                });
        });
    }

    renderHeader() {
        return (
            <div style={{marginTop: "20vh", marginBottom: 30}}>
                <img src={logo} style={{width: "100px", marginBottom: 0}}/>
                <h1 style={{marginTop: 0}}>Gene annotation result</h1>
            </div>
        );
    }

    renderComplete(response) {
        const graph = response.result;
        return (
            <React.Fragment>
                <p>
                    The result contains {graph.nodes.length} entities and{" "}
                    {graph.edges.length} connections between them.
                    <br/>
                    This page will expire in{" "}
                    {distanceInWordsToNow(parse(response.expire_time * 1000))}.
                </p>
                <Button onClick={e => this.setState({showResultTable: true})}>
                    View results table
                </Button>
                <Button style={{margin: 10}} onClick={e => this.downloadSchemeFile()}>
                    Download Scheme File
                </Button>

                <Button
                    type="primary"
                    onClick={e => this.setState({showVisualization: true})}
                >
                    Visualize the result
                </Button>
            </React.Fragment>
        );
    }

    renderActive() {
        return (
            <p>The annotation task is still processing, please comeback later.</p>
        );
    }

    renderError() {
        const id = getQueryValue("id");
        return (
            <div style={{color: "maroon"}}>
                {id ? (
                    this.state.response &&
                    this.state.response.status === AnnotationStatus.ERROR ? (
                        <p>
                            An error occured while annotating the genes. You might have
                            entered invalid gene names.
                        </p>
                    ) : this.state.fetchingResult ? null : (
                        <p>
                            There is no annotation session with the id <b>{id}</b>
                        </p>
                    )
                ) : (
                    <Search
                        placeholder="Input Session Id"
                        enterButton="Go"
                        size="large"
                        onSearch={value => this.getSession(value)}
                        style={{width: "300px", textAlign: "center"}}
                    />
                )}
            </div>
        );
    }

    render() {
        const response = this.state.response || {};
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{height: "100vh"}}>
                        <Fragment>
                            {this.state.showVisualization && (
                                <Visualizer
                                    graph={sample_graph}
                                    annotations={annts}
                                    back={() => this.setState({showVisualization: false})}
                                    downloadSchemeFile={this.downloadSchemeFile}
                                />
                            )}
                            {this.state.showVisualization || (
                                <div style={{width: "100%", textAlign: "center"}}>
                                    {this.renderHeader()}
                                    {response.status === AnnotationStatus.COMPLETED
                                        ? this.renderComplete(response)
                                        : response.status === AnnotationStatus.ACTIVE
                                            ? this.renderActive()
                                            : this.renderError()}
                                </div>
                            )}
                            {/* Show loader if there is a request being processed */}
                            {this.state.fetchingResult && (
                                <div
                                    style={{
                                        width: "100vw",
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Spin style={{marginTop: 5}}/>
                                    Fetching results ...
                                </div>
                            )}
                            {this.state.showResultTable && (
                                <TabbedTables
                                    open={this.state.showResultTable}
                                    handleClose={() => this.setState({showResultTable: false})}
                                    tables={this.state.response.csv_files}
                                    fetchTableData={this.fetchTableData}
                                    downloadCSVFile={this.downloadCSVFile}
                                />
                            )}
                        </Fragment>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
