// Format: 
// title: str
// body: str
// icon: Icon component
import HelpIcon from '@material-ui/icons/Help';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const content = [
    {
        title: 'Glucose breaks down',
        body: 'During glycolysis, glucose is broken down into pyruvate, and 2 ATP molecules are formed.',
        icon: Filter1Icon,
        caption: 'Step 1: Glycolysis'
    },
    {
        title: 'An anerobic process',
        body: 'Glycolysis is anaerobic, which means it doesn\'t require or use any oxygen.',
        icon: HelpIcon
    },
    {
        title: 'Releasing stored energy',
        body: 'The pyruvate produced from glycolysis feeds the Krebs cycle, which also produces 2 molecules of ATP.',
        icon: Filter2Icon,
        caption: 'Step 2: The Krebs Cycle'
    },
    {
        title: 'An aerobic process',
        body: 'The Krebs cycle is an aerobic process, the opposite of anaerobic. It means that oxygen is required for the process.',
        icon: HelpIcon
    },
    {
        title: 'Did you know?',
        body: 'The Krebs cycle is named after a German chemist Hans Krebs, who contributed greatly to modern understanding of metabolism.',
        icon: PriorityHighIcon
    },
    {
        title: 'Producing more ATP',
        body: 'The electron transport uses the 4 previous ATP molecules created from glycolysis and the Krebs cycle to generate vastly more ATP molecules, up to 34.',
        icon: Filter3Icon,
        caption: 'Step 3: Electron Transport'
    },
    {
        title: 'Forming water',
        body: 'The electron transport is considered an aerobic process, like the Krebs cycle. The electron transport bonds the oxygen with hydrogen to create water, or H2O.',
        icon: HelpIcon
    },
    {
        title: 'Waste products',
        body: 'Cellular respiration produces carbon dioxide, or CO2, as a waste product.',
        icon: HelpIcon
    },
    {
        title: 'Did you know?',
        body: 'Not all cells use cellular respiration. Some cells use a combination of glycolysis and fermentation instead.',
        icon: PriorityHighIcon
    },
]

export default content;