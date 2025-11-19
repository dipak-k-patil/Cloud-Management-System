"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Server, Database, HardDrive, Network, Cloud, Package, Play, Square, Trash2, Settings, Plus, Search, Filter, MoveVertical as MoreVertical } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockResources = [
  {
    id: '1',
    name: 'prod-web-server-01',
    type: 'vm',
    provider: 'aws',
    region: 'us-east-1',
    status: 'running',
    cpu: 45,
    memory: 62,
    cost: 125.50,
  },
  {
    id: '2',
    name: 'postgres-prod',
    type: 'database',
    provider: 'gcp',
    region: 'europe-west1',
    status: 'running',
    cpu: 32,
    memory: 78,
    cost: 280.00,
  },
  {
    id: '3',
    name: 'k8s-cluster-prod',
    type: 'kubernetes',
    provider: 'azure',
    region: 'eastus',
    status: 'running',
    cpu: 68,
    memory: 85,
    cost: 450.00,
  },
  {
    id: '4',
    name: 'backup-storage',
    type: 'storage',
    provider: 'aws',
    region: 'us-west-2',
    status: 'running',
    cpu: 0,
    memory: 0,
    cost: 75.20,
  },
  {
    id: '5',
    name: 'api-lambda',
    type: 'serverless',
    provider: 'aws',
    region: 'us-east-1',
    status: 'running',
    cpu: 12,
    memory: 25,
    cost: 28.50,
  },
];

const resourceTypeIcons = {
  vm: Server,
  database: Database,
  storage: HardDrive,
  kubernetes: Cloud,
  serverless: Package,
  network: Network,
};

const providerColors = {
  aws: 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400',
  azure: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
  gcp: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  digitalocean: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-400',
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('all');

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProvider = selectedProvider === 'all' || resource.provider === selectedProvider;
    return matchesSearch && matchesProvider;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      running: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
      stopped: 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400',
      error: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
    };
    return variants[status as keyof typeof variants] || variants.running;
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Cloud Resources
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Manage your multi-cloud infrastructure
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                <Plus className="h-4 w-4 mr-2" />
                Create Resource
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Create New Resource</DialogTitle>
                <DialogDescription>
                  Deploy a new cloud resource across your providers
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Resource Name</Label>
                  <Input id="name" placeholder="my-server-01" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Resource Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vm">Virtual Machine</SelectItem>
                      <SelectItem value="database">Database</SelectItem>
                      <SelectItem value="storage">Storage</SelectItem>
                      <SelectItem value="kubernetes">Kubernetes Cluster</SelectItem>
                      <SelectItem value="serverless">Serverless Function</SelectItem>
                      <SelectItem value="network">Network</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="provider">Cloud Provider</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aws">AWS</SelectItem>
                      <SelectItem value="azure">Azure</SelectItem>
                      <SelectItem value="gcp">Google Cloud</SelectItem>
                      <SelectItem value="digitalocean">DigitalOcean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="region">Region</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                      <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
                      <SelectItem value="eu-west-1">EU West (Ireland)</SelectItem>
                      <SelectItem value="ap-southeast-1">Asia Pacific (Singapore)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-gradient-to-r from-blue-600 to-cyan-600">
                  Create Resource
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search resources..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedProvider} onValueChange={setSelectedProvider}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Providers</SelectItem>
              <SelectItem value="aws">AWS</SelectItem>
              <SelectItem value="azure">Azure</SelectItem>
              <SelectItem value="gcp">Google Cloud</SelectItem>
              <SelectItem value="digitalocean">DigitalOcean</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="vm">Virtual Machines</TabsTrigger>
            <TabsTrigger value="database">Databases</TabsTrigger>
            <TabsTrigger value="kubernetes">Kubernetes</TabsTrigger>
            <TabsTrigger value="serverless">Serverless</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>CPU</TableHead>
                      <TableHead>Memory</TableHead>
                      <TableHead>Cost/mo</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredResources.map((resource) => {
                      const Icon = resourceTypeIcons[resource.type as keyof typeof resourceTypeIcons];
                      return (
                        <TableRow key={resource.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center space-x-2">
                              <div className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <Icon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                              </div>
                              <span>{resource.name}</span>
                            </div>
                          </TableCell>
                          <TableCell className="capitalize">{resource.type}</TableCell>
                          <TableCell>
                            <Badge className={providerColors[resource.provider as keyof typeof providerColors]}>
                              {resource.provider.toUpperCase()}
                            </Badge>
                          </TableCell>
                          <TableCell>{resource.region}</TableCell>
                          <TableCell>
                            <Badge className={getStatusBadge(resource.status)}>
                              {resource.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {resource.cpu > 0 ? `${resource.cpu}%` : '-'}
                          </TableCell>
                          <TableCell>
                            {resource.memory > 0 ? `${resource.memory}%` : '-'}
                          </TableCell>
                          <TableCell className="font-medium">
                            ${resource.cost.toFixed(2)}
                          </TableCell>
                          <TableCell className="text-right">
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
                                  Configure
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Play className="mr-2 h-4 w-4" />
                                  Start
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Square className="mr-2 h-4 w-4" />
                                  Stop
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}