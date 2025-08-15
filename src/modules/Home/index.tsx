'use client'

import Sidebar from "@/modules/Layout/Sidebar";
import TabContent from "@/modules/Layout/TabContent";
import { useState } from "react";

export default function HomePage() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div className="flex h-screen">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 lg:ml-80 h-full overflow-hidden">
          <TabContent activeTab={activeTab} onTabChange={setActiveTab} />
        </main>
      </div>
    )
}