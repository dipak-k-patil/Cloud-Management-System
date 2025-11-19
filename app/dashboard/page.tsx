"use client";

import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Server, Database, HardDrive, TrendingUp, TrendingDown, Activity, DollarSign, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Cloud } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const cpuData = [
  { time: '00:00', value: 45 },
  { time: '04:00', value: 52 },
  { time: '08:00', value: 78 },
  { time: '12:00', value: 65 },
  { time: '16:00', value: 82 },
  { time: '20:00', value: 58 },
  { time: '24:00', value: 48 },
];

const costData = [
  { month: 'Jan', aws: 1200, azure: 800, gcp: 600 },
  { month: 'Feb', aws: 1400, azure: 900, gcp: 700 },
  { month: 'Mar', aws: 1300, azure: 950, gcp: 750 },
  { month: 'Apr', aws: 1600, azure: 1000, gcp: 800 },
  { month: 'May', aws: 1800, azure: 1100, gcp: 850 },
  { month: 'Jun', aws: 2000, azure: 1200, gcp: 900 },
];

const resourceDistribution = [
  { name: 'VMs', value: 45, color: '#3b82f6' },
  { name: 'Storage', value: 25, color: '#06b6d4' },
  { name: 'Databases', value: 15, color: '#8b5cf6' },
  { name: 'Kubernetes', value: 10, color: '#10b981' },
  { name: 'Serverless', value: 5, color: '#f59e0b' },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Dashboard Overview
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Monitor your multi-cloud infrastructure at a glance
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="px-3 py-1">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              All Systems Operational
            </Badge>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
              <Server className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+12% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,325</div>
              <div className="flex items-center text-xs text-red-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+8% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="flex items-center text-xs text-orange-600 mt-1">
                <Activity className="h-3 w-3 mr-1" />
                <span>2 high, 1 medium</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg CPU Usage</CardTitle>
              <Activity className="h-4 w-4 text-cyan-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">64%</div>
              <div className="mt-2 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '64%' }}></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Multi-Cloud Cost Trend</CardTitle>
              <CardDescription>
                Monthly spending across AWS, Azure, and GCP
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={costData}>
                  <defs>
                    <linearGradient id="colorAws" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorAzure" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorGcp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Area type="monotone" dataKey="aws" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorAws)" />
                  <Area type="monotone" dataKey="azure" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorAzure)" />
                  <Area type="monotone" dataKey="gcp" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorGcp)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Resource Distribution</CardTitle>
              <CardDescription>
                By resource type
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={resourceDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {resourceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {resourceDistribution.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div
                        className="h-3 w-3 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-slate-600 dark:text-slate-400">{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>CPU Usage (24h)</CardTitle>
              <CardDescription>Average across all resources</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={cpuData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest resource changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      VM instance created
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      prod-web-server-01 in AWS us-east-1
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                    <Database className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Database backup completed
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      postgres-prod in GCP europe-west1
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">15 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      High CPU usage detected
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      api-server-03 in Azure eastus
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">32 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center flex-shrink-0">
                    <Cloud className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Kubernetes cluster scaled
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      k8s-prod from 3 to 5 nodes in AWS
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">1 hour ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}