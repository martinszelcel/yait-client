import React from "react";
import PanelGrid from "../components/PanelGrid";
import Panel from "../components/common/Panel";
import Icon from "@mdi/react";
import { mdiPlus, mdiEye } from "@mdi/js";
import SquareButton from "../components/SquareButton";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="flex flex-wrap gap-3 justify-between">
      <Link to="a">
        <Panel title="YAIT Project" className="w-64 h-64 flex flex-col gap-2">
          <div className="w-full bg-white dark:bg-gray-400 rounded-full h-4 flex relative">
              <div className="w-full h-4 relative">
                  <div className="bg-blue-300 dark:bg-blue-600 w-full rounded-l-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-4 bg-blue-300 dark:bg-blue-600 h-4 rounded-l-full text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-yellow-300 dark:bg-yellow-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-yellow-300 dark:bg-yellow-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-green-300 dark:bg-green-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-6 bg-green-300 dark:bg-green-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-purple-300 dark:bg-purple-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-8 bg-purple-300 dark:bg-purple-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-pink-300 dark:bg-pink-600 rounded-r-full w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-pink-300 dark:bg-pink-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
          </div>
          <div className="text-center text-xs">
            23%
          </div>
          <div>
            28 open tasks
          </div>
          <div>
            103 closed tasks
          </div>
          <div className="absolute top-3 right-3">
            <Icon path={mdiEye} size={0.8}/>
          </div>
        </Panel>
      </Link>
      <Link to="a">
        <Panel title="YAIT Project" className="w-64 h-64 flex flex-col gap-2">
          <div className="w-full bg-white dark:bg-gray-400 rounded-full h-4 flex relative">
              <div className="w-full h-4 relative">
                  <div className="bg-blue-300 dark:bg-blue-600 w-full rounded-l-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-4 bg-blue-300 dark:bg-blue-600 h-4 rounded-l-full text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-yellow-300 dark:bg-yellow-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-yellow-300 dark:bg-yellow-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-green-300 dark:bg-green-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-6 bg-green-300 dark:bg-green-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-purple-300 dark:bg-purple-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-8 bg-purple-300 dark:bg-purple-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-pink-300 dark:bg-pink-600 rounded-r-full w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-pink-300 dark:bg-pink-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
          </div>
          <div className="text-center text-xs">
            23%
          </div>
          <div>
            28 open tasks
          </div>
          <div>
            103 closed tasks
          </div>
          <div className="absolute top-3 right-3">
            <Icon path={mdiEye} size={0.8}/>
          </div>
        </Panel>
      </Link>
      <Link to="a">
        <Panel title="YAIT Project" className="w-64 h-64 flex flex-col gap-2">
          <div className="w-full bg-white dark:bg-gray-400 rounded-full h-4 flex relative">
              <div className="w-full h-4 relative">
                  <div className="bg-blue-300 dark:bg-blue-600 w-full rounded-l-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-4 bg-blue-300 dark:bg-blue-600 h-4 rounded-l-full text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-yellow-300 dark:bg-yellow-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-yellow-300 dark:bg-yellow-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-green-300 dark:bg-green-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-6 bg-green-300 dark:bg-green-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-purple-300 dark:bg-purple-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-8 bg-purple-300 dark:bg-purple-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-pink-300 dark:bg-pink-600 rounded-r-full w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-pink-300 dark:bg-pink-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
          </div>
          <div className="text-center text-xs">
            23%
          </div>
          <div>
            28 open tasks
          </div>
          <div>
            103 closed tasks
          </div>
          <div className="absolute top-3 right-3">
            <Icon path={mdiEye} size={0.8}/>
          </div>
        </Panel>
      </Link>
      <Link to="a">
        <Panel title="YAIT Project" className="w-64 h-64 flex flex-col gap-2">
          <div className="w-full bg-white dark:bg-gray-400 rounded-full h-4 flex relative">
              <div className="w-full h-4 relative">
                  <div className="bg-blue-300 dark:bg-blue-600 w-full rounded-l-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-4 bg-blue-300 dark:bg-blue-600 h-4 rounded-l-full text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-yellow-300 dark:bg-yellow-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-yellow-300 dark:bg-yellow-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-green-300 dark:bg-green-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-6 bg-green-300 dark:bg-green-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-purple-300 dark:bg-purple-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-8 bg-purple-300 dark:bg-purple-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-pink-300 dark:bg-pink-600 rounded-r-full w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-pink-300 dark:bg-pink-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
          </div>
          <div className="text-center text-xs">
            23%
          </div>
          <div>
            28 open tasks
          </div>
          <div>
            103 closed tasks
          </div>
          <div className="absolute top-3 right-3">
            <Icon path={mdiEye} size={0.8}/>
          </div>
        </Panel>
      </Link>
      <Link to="a">
        <Panel title="YAIT Project" className="w-64 h-64 flex flex-col gap-2">
          <div className="w-full bg-white dark:bg-gray-400 rounded-full h-4 flex relative">
              <div className="w-full h-4 relative">
                  <div className="bg-blue-300 dark:bg-blue-600 w-full rounded-l-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-4 bg-blue-300 dark:bg-blue-600 h-4 rounded-l-full text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-yellow-300 dark:bg-yellow-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-yellow-300 dark:bg-yellow-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-green-300 dark:bg-green-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-6 bg-green-300 dark:bg-green-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-purple-300 dark:bg-purple-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-8 bg-purple-300 dark:bg-purple-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-pink-300 dark:bg-pink-600 rounded-r-full w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-pink-300 dark:bg-pink-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
          </div>
          <div className="text-center text-xs">
            23%
          </div>
          <div>
            28 open tasks
          </div>
          <div>
            103 closed tasks
          </div>
          <div className="absolute top-3 right-3">
            <Icon path={mdiEye} size={0.8}/>
          </div>
        </Panel>
      </Link>
      <Link to="a">
        <Panel title="YAIT Project" className="w-64 h-64 flex flex-col gap-2">
          <div className="w-full bg-white dark:bg-gray-400 rounded-full h-4 flex relative">
              <div className="w-full h-4 relative">
                  <div className="bg-blue-300 dark:bg-blue-600 w-full rounded-l-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-4 bg-blue-300 dark:bg-blue-600 h-4 rounded-l-full text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-yellow-300 dark:bg-yellow-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-yellow-300 dark:bg-yellow-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-green-300 dark:bg-green-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-6 bg-green-300 dark:bg-green-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-purple-300 dark:bg-purple-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-8 bg-purple-300 dark:bg-purple-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
              <div className="w-full h-4 relative">
                  <div className="bg-pink-300 dark:bg-pink-600 rounded-r-full w-full h-full opacity-50 absolute top-0 left-0"></div>
                  <div className="w-2 bg-pink-300 dark:bg-pink-600 h-4 text-xs text-center font-bold absolute top-0 left-0"></div>
              </div>
          </div>
          <div className="text-center text-xs">
            23%
          </div>
          <div>
            Current stage: MVP
          </div>
          <div>
            28 open tasks
          </div>
          <div>
            103 closed tasks
          </div>
          <div className="absolute top-3 right-3">
            <Icon path={mdiEye} size={0.8}/>
          </div>
        </Panel>
      </Link>
      <Link to="#">
        <SquareButton
            text="Add new project"
            size="64"
            circleSize="32"
            icon={<Icon path={mdiPlus} size={3} />}
        />
      </Link>
    </div>
  )
}