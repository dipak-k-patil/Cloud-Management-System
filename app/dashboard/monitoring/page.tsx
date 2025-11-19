"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Activity, Cpu, HardDrive, Network, TrendingUp, CircleAlert as AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Badge } from '@/components/ui/badge';

const cpuMetrics = Array.from({ length: 48 }, (_, i) => ({
  time: `${Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`,
  server1: Math.floor(Math.random() * 40) + 30,
  server2: Math.floor(Math.random() * 30) + 40,
  server3: Math.floor(Math.random() * 20) + 50,
}));

const memoryMetrics = Array.from({ length: 48 }, (_, i) => ({
  time: `${Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`,
  server1: Math.floor(Math.random() * 30) + 50,
  server2: Math.floor(Math.random() * 25) + 55,
  server3: Math.floor(Math.random() * 20) + 60,
}));

const networkMetrics = Array.from({ length: 48 }, (_, i) => ({
  time: `${Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`,
  incoming: Math.floor(Math.random() * 300) + 100,
  outgoing: Math.floor(Math.random() * 200) + 80,
}));

export default function MonitoringPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Real-Time Monitoring
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Track performance metrics across all resources
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg CPU Usage</CardTitle>
              <Cpu className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">58%</div>
              <div className="flex items-center text-xs text-slate-500 mt-1">
                <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                <span>Normal range</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Memory</CardTitle>
              <HardDrive className="h-4 w-4 text-cyan-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72%</div>
              <div className="flex items-center text-xs text-slate-500 mt-1">
                <AlertCircle className="h-3 w-3 mr-1 text-orange-600" />
                <span>Elevated</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Network In</CardTitle>
              <Network className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245 MB/s</div>
              <div className="flex items-center text-xs text-slate-500 mt-1">
                <Activity className="h-3 w-3 mr-1" />
                <span>Peak: 310 MB/s</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Network Out</CardTitle>
              <Network className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">182 MB/s</div>
              <div className="flex items-center text-xs text-slate-500 mt-1">
                <Activity className="h-3 w-3 mr-1" />
                <span>Peak: 225 MB/s</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="cpu" className="space-y-4">
          <TabsList>
            <TabsTrigger value="cpu">CPU Metrics</TabsTrigger>
            <TabsTrigger value="memory">Memory Metrics</TabsTrigger>
            <TabsTrigger value="network">Network Metrics</TabsTrigger>
            <TabsTrigger value="disk">Disk I/O</TabsTrigger>
          </TabsList>

          <TabsContent value="cpu" className="space-y-4">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>CPU Usage by Server (Last 24 Hours)</CardTitle>
                <CardDescription>
                  Real-time CPU utilization across production servers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={cpuMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="time"
                      stroke="#64748b"
                      tick={{ fontSize: 12 }}
                      interval={11}
                    />
                    <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="server1"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                      name="prod-web-server-01"
                    />
                    <Line
                      type="monotone"
                      dataKey="server2"
                      stroke="#06b6d4"
                      strokeWidth={2}
                      dot={false}
                      name="prod-api-server-01"
                    />
                    <Line
                      type="monotone"
                      dataKey="server3"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                      name="prod-worker-01"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="text-base">prod-web-server-01</CardTitle>
                  <CardDescription>AWS us-east-1</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Current</span>
                      <span className="text-lg font-semibold">42%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Average</span>
                      <span className="text-sm">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Peak</span>
                      <span className="text-sm">78%</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 w-full justify-center">
                      Normal
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="text-base">prod-api-server-01</CardTitle>
                  <CardDescription>Azure eastus</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Current</span>
                      <span className="text-lg font-semibold">58%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Average</span>
                      <span className="text-sm">54%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Peak</span>
                      <span className="text-sm">82%</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 w-full justify-center">
                      Normal
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="text-base">prod-worker-01</CardTitle>
                  <CardDescription>GCP europe-west1</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Current</span>
                      <span className="text-lg font-semibold">68%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Average</span>
                      <span className="text-sm">62%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Peak</span>
                      <span className="text-sm">89%</span>
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400 w-full justify-center">
                      Elevated
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="memory" className="space-y-4">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Memory Usage by Server (Last 24 Hours)</CardTitle>
                <CardDescription>
                  Real-time memory utilization across production servers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={memoryMetrics}>
                    <defs>
                      <linearGradient id="colorServer1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorServer2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorServer3" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="time"
                      stroke="#64748b"
                      tick={{ fontSize: 12 }}
                      interval={11}
                    />
                    <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="server1"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorServer1)"
                      name="prod-web-server-01"
                    />
                    <Area
                      type="monotone"
                      dataKey="server2"
                      stroke="#06b6d4"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorServer2)"
                      name="prod-api-server-01"
                    />
                    <Area
                      type="monotone"
                      dataKey="server3"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorServer3)"
                      name="prod-worker-01"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="network" className="space-y-4">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Network Traffic (Last 24 Hours)</CardTitle>
                <CardDescription>
                  Incoming and outgoing network bandwidth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={networkMetrics}>
                    <defs>
                      <linearGradient id="colorIncoming" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorOutgoing" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="time"
                      stroke="#64748b"
                      tick={{ fontSize: 12 }}
                      interval={11}
                    />
                    <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="incoming"
                      stroke="#10b981"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorIncoming)"
                      name="Incoming (MB/s)"
                    />
                    <Area
                      type="monotone"
                      dataKey="outgoing"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorOutgoing)"
                      name="Outgoing (MB/s)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}