'use client'

import Sidebar from "@/modules/Layout/Sidebar";
import TabContent from "@/modules/Layout/TabContent";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function HomePage() {
    const [activeTab, setActiveTab] = useState("home");
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Sync from URL (?tab=...) -> state
    useEffect(() => {
        const tabFromUrl = searchParams.get('tab');
        if (tabFromUrl && tabFromUrl !== activeTab) {
            setActiveTab(tabFromUrl);
        }
    }, [searchParams]);

    // Handler: state -> URL
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        const params = new URLSearchParams(searchParams.toString());
        params.set('tab', tab);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex h-screen">
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
        <main className="flex-1 lg:ml-80 h-full overflow-hidden">
          <TabContent activeTab={activeTab} onTabChange={handleTabChange} />
        </main>
      </div>
    )
}