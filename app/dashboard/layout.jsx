"use client";

import "@/styles/globals.css";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/components/Sidebar";
import { useState } from "react";
import {
  IconHome,
  IconPackage,
  IconArrowLeft,
  IconChartBar,
} from "@tabler/icons-react";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { label: "Inicio", path: "/dashboard", icon: <IconHome /> },
    { label: "Estadísticas", path: "/dashboard/statitics", icon: <IconChartBar /> },
    { label: "Productos", path: "/dashboard/products", icon: <IconPackage /> },
    { 
      label: "Cerrar sesión",
      icon: <IconArrowLeft />,
      className: "text-red-500 hover:text-red-700"
    }
  ];

  return (
    <div className="flex md:min-h-screen flex-wrap md:flex-nowrap">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
        <SidebarBody className="justify-between gap-10 min-h-screen">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {sidebarOpen ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {menuItems.map((item) => (
                <SidebarLink
                  key={item.label}
                  link={item}
                  onClick={item.onClick}
                  className={item.className || ""}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-grow p-4 mb-10 md:mb-0">
        {children}
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 text-center">
        <p>PS</p>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white whitespace-pre"
      >
        LaPanaSystem
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 text-center">
        <p>PS</p>
      </div>
    </Link>
  );
};