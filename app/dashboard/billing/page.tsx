"use client";

import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DollarSign, TrendingUp, TrendingDown, CircleAlert as AlertCircle, Download, CreditCard, Calendar, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const monthlyData = [
  { month: 'Jul', actual: 3200, predicted: 3100 },
  { month: 'Aug', actual: 3600, predicted: 3500 },
  { month: 'Sep', actual: 3400, predicted: 3450 },
  { month: 'Oct', actual: 3900, predicted: 3800 },
  { month: 'Nov', actual: 4100, predicted: 4000 },
  { month: 'Dec', actual: 4325, predicted: 4200 },
  { month: 'Jan', actual: null, predicted: 4600 },
  { month: 'Feb', actual: null, predicted: 4850 },
  { month: 'Mar', actual: null, predicted: 5100 },
];

const providerCosts = [
  { name: 'AWS', value: 2000, color: '#FF9900' },
  { name: 'Azure', value: 1200, color: '#0078D4' },
  { name: 'GCP', value: 900, color: '#4285F4' },
  { name: 'DigitalOcean', value: 225, color: '#0080FF' },
];

const serviceBreakdown = [
  { service: 'Compute (VMs)', cost: 1800, percentage: 42 },
  { service: 'Storage', cost: 650, percentage: 15 },
  { service: 'Databases', cost: 950, percentage: 22 },
  { service: 'Kubernetes', cost: 600, percentage: 14 },
  { service: 'Networking', cost: 325, percentage: 7 },
];

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Billing & Cost Management
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Track spending and AI-powered cost predictions
            </p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Month</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,325</div>
              <div className="flex items-center text-xs text-red-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+5.5% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Predicted Next Month</CardTitle>
              <Brain className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,600</div>
              <div className="flex items-center text-xs text-slate-500 mt-1">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                <span>92% confidence</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Budget Usage</CardTitle>
              <CreditCard className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86%</div>
              <div className="mt-2 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '86%' }}></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">$700 remaining of $5,000</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost Optimization</CardTitle>
              <AlertCircle className="h-4 w-4 text-cyan-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$842</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingDown className="h-3 w-3 mr-1" />
                <span>Potential savings</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>AI Cost Prediction</CardTitle>
                <CardDescription>
                  Machine learning-powered forecast based on usage patterns
                </CardDescription>
              </div>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                <Brain className="h-3 w-3 mr-1" />
                AI Powered
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
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
                  formatter={(value: number) => [`$${value}`, '']}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="actual"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorActual)"
                  name="Actual Cost"
                  connectNulls
                />
                <Area
                  type="monotone"
                  dataKey="predicted"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  fillOpacity={1}
                  fill="url(#colorPredicted)"
                  name="AI Prediction"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-900/20">
              <div className="flex items-start space-x-3">
                <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-300">AI Insights</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-400 mt-1">
                    Based on your usage patterns, costs are expected to increase by 6.4% next month.
                    Consider scaling down 3 underutilized VMs to save approximately $280/month.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Cost by Provider</CardTitle>
              <CardDescription>Current month breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={providerCosts}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {providerCosts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `$${value}`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {providerCosts.map((provider) => (
                  <div key={provider.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div
                        className="h-3 w-3 rounded-full mr-2"
                        style={{ backgroundColor: provider.color }}
                      />
                      <span className="text-slate-600 dark:text-slate-400">{provider.name}</span>
                    </div>
                    <span className="font-semibold">${provider.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>Cost by Service</CardTitle>
              <CardDescription>Service-level breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {serviceBreakdown.map((item) => (
                  <div key={item.service} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-900 dark:text-slate-100">
                        {item.service}
                      </span>
                      <span className="font-semibold">${item.cost}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                      <span className="text-xs text-slate-500 w-12 text-right">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span>$4,325</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle>Cost Optimization Recommendations</CardTitle>
            <CardDescription>AI-generated suggestions to reduce spending</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-900/20">
                <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-green-900 dark:text-green-300">
                    Resize Underutilized VMs
                  </h4>
                  <p className="text-sm text-green-800 dark:text-green-400 mt-1">
                    3 VMs are running at less than 20% CPU utilization. Downsizing could save $280/month.
                  </p>
                  <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                    Apply Suggestion
                  </Button>
                </div>
                <Badge className="bg-green-100 text-green-700">Save $280</Badge>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-900/20">
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-300">
                    Schedule Dev Environment Shutdown
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-400 mt-1">
                    Development servers run 24/7. Schedule automatic shutdown during off-hours to save $320/month.
                  </p>
                  <Button size="sm" variant="outline" className="mt-2">
                    Configure Schedule
                  </Button>
                </div>
                <Badge className="bg-blue-100 text-blue-700">Save $320</Badge>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-200 dark:border-orange-900/20">
                <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-orange-900 dark:text-orange-300">
                    Use Reserved Instances
                  </h4>
                  <p className="text-sm text-orange-800 dark:text-orange-400 mt-1">
                    5 long-running VMs are on-demand. Switching to reserved instances could save $242/month.
                  </p>
                  <Button size="sm" variant="outline" className="mt-2">
                    View Options
                  </Button>
                </div>
                <Badge className="bg-orange-100 text-orange-700">Save $242</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}