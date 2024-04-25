"use client"

import { Tab, TabList, TabPanel as ReactTabPanel, Tabs } from 'react-tabs';
import Panel1 from './Panel-1';
import Panel2 from './Panel-2';

const TabPanel: React.FC = () => {
  return (
    <>
        <div className="max-w-6xl mx-auto max-[800px]:mx-4 flex-initial items-center py-4">
            <Tabs>
                <TabList className="flex justify-center gap-4">
                    <Tab className="px-4 py-2 max-[800px]:text-sm font-semibold bg-gray-800 text-white hover:bg-gray-600 cursor-pointer rounded-lg">Generate Kata</Tab>
                    <Tab className="px-4 py-2 max-[800px]:text-sm font-semibold bg-gray-800 text-white hover:bg-gray-600 cursor-pointer rounded-lg">Generate Kotak</Tab>
                </TabList>

                <ReactTabPanel>
                    <Panel1 />
                </ReactTabPanel>

                <ReactTabPanel>
                    <Panel2 />
                </ReactTabPanel>
            </Tabs>
        </div>
    </>
  );
};

export default TabPanel;