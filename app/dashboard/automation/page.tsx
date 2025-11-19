"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Settings, Zap, Clock, Database, Server, Power, DollarSign, Bell, Plus, MoveVertical as MoreVertical, Play, Pause } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const automationRules = [
  {
    id: '1',
    name: 'Auto-scale Production API',
    type: 'auto_scaling',
    enabled: true,
    trigger: 'CPU > 75% for 5 minutes',
    action: 'Add 2 instances',
    lastRun: '2 hours ago',
    executions: 12,
  },
  {
    id: '2',
    name: 'Daily Database Backup',
    type: 'backup',
    enabled: true,
    trigger: 'Every day at 2:00 AM',
    action: 'Backup all databases to S3',
    lastRun: '6 hours ago',
    executions: 45,
  },
  {
    id: '3',
    name: 'Dev Environment Shutdown',
    type: 'shutdown',
    enabled: true,
    trigger: 'Weekdays at 7:00 PM',
    action: 'Stop dev VMs',
    lastRun: '3 hours ago',
    executions: 28,
  },
  {
    id: '4',
    name: 'Cost Alert',
    type: 'alert',
    enabled: true,
    trigger: 'Monthly cost > $5000',
    action: 'Send email to admins',
    lastRun: '1 day ago',
    executions: 3,
  },
  {
    id: '5',
    name: 'Unused Resource Cleanup',
    type: 'cost_optimization',
    enabled: false,
    trigger: 'Resources idle > 7 days',
    action: 'Delete and notify',
    lastRun: 'Never',
    executions: 0,
  },
];

const ruleTypeIcons = {
  auto_scaling: Zap,
  backup: Database,
  shutdown: Power,
  alert: Bell,
  cost_optimization: DollarSign,
};

const ruleTypeColors = {
  auto_scaling: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
  backup: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  shutdown: 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400',
  alert: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
  cost_optimization: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-400',
};

export default function AutomationPage() {
  const [rules, setRules] = useState(automationRules);

  const toggleRule = (id: string) => {
    setRules(rules.map(rule =>
      rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
    ));
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Automation & Infrastructure
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Automate cloud operations and resource management
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                <Plus className="h-4 w-4 mr-2" />
                Create Rule
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Create Automation Rule</DialogTitle>
                <DialogDescription>
                  Set up automated actions for your infrastructure
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="rule-name">Rule Name</Label>
                  <Input id="rule-name" placeholder="My automation rule" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="rule-type">Rule Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto_scaling">Auto Scaling</SelectItem>
                      <SelectItem value="backup">Backup</SelectItem>
                      <SelectItem value="shutdown">Scheduled Shutdown</SelectItem>
                      <SelectItem value="alert">Alert</SelectItem>
                      <SelectItem value="cost_optimization">Cost Optimization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="trigger">Trigger Condition</Label>
                  <Input id="trigger" placeholder="e.g., CPU > 80%" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="action">Action</Label>
                  <Input id="action" placeholder="e.g., Add 2 instances" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-gradient-to-r from-blue-600 to-cyan-600">
                  Create Rule
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Rules</CardTitle>
              <Settings className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-slate-500 mt-1">1 disabled</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Executions Today</CardTitle>
              <Zap className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-slate-500 mt-1">All successful</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost Saved</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$842</div>
              <p className="text-xs text-slate-500 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4 text-cyan-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2s</div>
              <p className="text-xs text-slate-500 mt-1">Last 7 days</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Automation Rules</h2>
          {rules.map((rule) => {
            const Icon = ruleTypeIcons[rule.type as keyof typeof ruleTypeIcons];
            return (
              <Card key={rule.id} className="border-slate-200 dark:border-slate-800">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 flex items-center justify-center flex-shrink-0 border border-blue-200 dark:border-blue-900/30">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                            {rule.name}
                          </h3>
                          <Badge className={ruleTypeColors[rule.type as keyof typeof ruleTypeColors]}>
                            {rule.type.replace('_', ' ')}
                          </Badge>
                          {rule.enabled ? (
                            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                              <Play className="h-3 w-3 mr-1" />
                              Active
                            </Badge>
                          ) : (
                            <Badge className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400">
                              <Pause className="h-3 w-3 mr-1" />
                              Disabled
                            </Badge>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-slate-500 dark:text-slate-400">Trigger:</p>
                            <p className="font-medium text-slate-900 dark:text-slate-100 mt-1">
                              {rule.trigger}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-500 dark:text-slate-400">Action:</p>
                            <p className="font-medium text-slate-900 dark:text-slate-100 mt-1">
                              {rule.action}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 mt-3 text-xs text-slate-500">
                          <span>Last run: {rule.lastRun}</span>
                          <span>Executions: {rule.executions}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={rule.enabled}
                        onCheckedChange={() => toggleRule(rule.id)}
                      />
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Edit Rule
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Play className="mr-2 h-4 w-4" />
                            Run Now
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Clock className="mr-2 h-4 w-4" />
                            View History
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            Delete Rule
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle>Infrastructure as Code Templates</CardTitle>
            <CardDescription>
              Pre-built templates for common infrastructure patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                <Server className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-semibold mb-1">Web Application Stack</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Load balancer, auto-scaling group, and RDS database
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Deploy Template
                </Button>
              </div>

              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                <Database className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-semibold mb-1">Kubernetes Cluster</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  EKS/GKE cluster with monitoring and logging
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Deploy Template
                </Button>
              </div>

              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                <Zap className="h-8 w-8 text-yellow-600 mb-3" />
                <h4 className="font-semibold mb-1">Serverless API</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Lambda functions, API Gateway, and DynamoDB
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Deploy Template
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}