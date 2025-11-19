"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Cloud,
  LayoutDashboard,
  Server,
  Database,
  Network,
  DollarSign,
  Shield,
  Settings,
  Bot,
  Users,
  Activity,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Resources', href: '/dashboard/resources', icon: Server },
  { name: 'Monitoring', href: '/dashboard/monitoring', icon: Activity },
  { name: 'Billing', href: '/dashboard/billing', icon: DollarSign },
  { name: 'Security', href: '/dashboard/security', icon: Shield, badge: 3 },
  { name: 'Automation', href: '/dashboard/automation', icon: Settings },
  { name: 'Team', href: '/dashboard/team', icon: Users },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                CloudOps
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center">
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </div>
                  {item.badge && (
                    <Badge variant="destructive" className="h-5 px-1.5 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-slate-200 dark:border-slate-800 p-4">
            <Button
              onClick={() => setAiChatOpen(!aiChatOpen)}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <Bot className="h-4 w-4 mr-2" />
              AI Assistant
            </Button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80 px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center space-x-4 ml-auto">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/api/placeholder/32/32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:flex flex-col items-start">
                    <span className="text-sm font-medium">John Doe</span>
                    <span className="text-xs text-slate-500">Admin</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {aiChatOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-96 h-[500px] bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">AI Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setAiChatOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Ask me anything about your cloud resources, costs, or best practices...
            </div>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <input
              type="text"
              placeholder="Type your question..."
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}