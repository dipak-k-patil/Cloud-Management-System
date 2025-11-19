"use client";

import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Shield, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Circle as XCircle, Clock, Eye, Lock, User, Globe, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const securityAlerts = [
  {
    id: '1',
    type: 'anomaly',
    severity: 'high',
    title: 'Unusual CPU spike detected',
    resource: 'prod-api-server-01',
    timestamp: '2 minutes ago',
    status: 'active',
  },
  {
    id: '2',
    type: 'suspicious_activity',
    severity: 'high',
    title: 'Multiple failed login attempts',
    resource: 'Database prod-postgres',
    timestamp: '15 minutes ago',
    status: 'active',
  },
  {
    id: '3',
    type: 'compliance',
    severity: 'medium',
    title: 'Encryption not enabled',
    resource: 'storage-backup-01',
    timestamp: '1 hour ago',
    status: 'active',
  },
  {
    id: '4',
    type: 'anomaly',
    severity: 'low',
    title: 'Unusual network traffic pattern',
    resource: 'k8s-cluster-prod',
    timestamp: '3 hours ago',
    status: 'resolved',
  },
];

const auditLogs = [
  {
    id: '1',
    user: 'john.doe@company.com',
    action: 'Created VM',
    resource: 'prod-web-server-01',
    ip: '192.168.1.100',
    timestamp: '2024-01-15 14:32:18',
    status: 'success',
  },
  {
    id: '2',
    user: 'jane.smith@company.com',
    action: 'Deleted Database',
    resource: 'test-db-02',
    ip: '192.168.1.105',
    timestamp: '2024-01-15 14:28:45',
    status: 'success',
  },
  {
    id: '3',
    user: 'bob.wilson@company.com',
    action: 'Modified Security Group',
    resource: 'sg-production',
    ip: '192.168.1.112',
    timestamp: '2024-01-15 14:15:22',
    status: 'success',
  },
  {
    id: '4',
    user: 'alice.johnson@company.com',
    action: 'Failed Login',
    resource: 'Dashboard',
    ip: '203.45.67.89',
    timestamp: '2024-01-15 14:10:15',
    status: 'failed',
  },
  {
    id: '5',
    user: 'charlie.brown@company.com',
    action: 'Started VM',
    resource: 'staging-server-03',
    ip: '192.168.1.120',
    timestamp: '2024-01-15 13:55:30',
    status: 'success',
  },
];

export default function SecurityPage() {
  const getSeverityBadge = (severity: string) => {
    const variants = {
      critical: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
      high: 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400',
      medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
      low: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
    };
    return variants[severity as keyof typeof variants];
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Security & Compliance
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Monitor threats, audit logs, and security posture
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="flex items-center text-xs text-orange-600 mt-1">
                <span>2 high, 1 medium</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Score</CardTitle>
              <Shield className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87/100</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <CheckCircle className="h-3 w-3 mr-1" />
                <span>Good</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Failed Logins</CardTitle>
              <Lock className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <div className="flex items-center text-xs text-slate-500 mt-1">
                <span>Last 24 hours</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Audit Events</CardTitle>
              <Activity className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <div className="flex items-center text-xs text-slate-500 mt-1">
                <span>Last 7 days</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="alerts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="alerts">Security Alerts</TabsTrigger>
            <TabsTrigger value="audit">Audit Logs</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-4">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Active Security Alerts</CardTitle>
                <CardDescription>
                  Real-time security threats and anomalies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {securityAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-start justify-between p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        alert.severity === 'high' || alert.severity === 'critical'
                          ? 'bg-red-100 dark:bg-red-900/20'
                          : alert.severity === 'medium'
                          ? 'bg-yellow-100 dark:bg-yellow-900/20'
                          : 'bg-blue-100 dark:bg-blue-900/20'
                      }`}>
                        {alert.status === 'active' ? (
                          <AlertTriangle className={`h-5 w-5 ${
                            alert.severity === 'high' || alert.severity === 'critical'
                              ? 'text-red-600'
                              : alert.severity === 'medium'
                              ? 'text-yellow-600'
                              : 'text-blue-600'
                          }`} />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                            {alert.title}
                          </h4>
                          <Badge className={getSeverityBadge(alert.severity)}>
                            {alert.severity}
                          </Badge>
                          {alert.status === 'resolved' && (
                            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                              Resolved
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Resource: {alert.resource}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          {alert.timestamp}
                        </p>
                      </div>
                    </div>
                    {alert.status === 'active' && (
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Investigate
                        </Button>
                        <Button size="sm">
                          Resolve
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="text-base">Threat Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">High</span>
                      <span className="font-semibold text-red-600">2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Medium</span>
                      <span className="font-semibold text-yellow-600">1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Low</span>
                      <span className="font-semibold text-blue-600">0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="text-base">Top Threat Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Anomalies</span>
                      <span className="font-semibold">2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Failed Auth</span>
                      <span className="font-semibold">1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Compliance</span>
                      <span className="font-semibold">1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="text-base">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Avg. Response</span>
                      <span className="font-semibold">8 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Fastest</span>
                      <span className="font-semibold">2 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Slowest</span>
                      <span className="font-semibold">15 min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audit" className="space-y-4">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle>Audit Log Trail</CardTitle>
                <CardDescription>
                  Complete history of user actions and system events
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Resource</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {auditLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                              <User className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                            </div>
                            <span className="text-sm">{log.user}</span>
                          </div>
                        </TableCell>
                        <TableCell>{log.action}</TableCell>
                        <TableCell className="font-mono text-xs">{log.resource}</TableCell>
                        <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                        <TableCell className="text-xs">{log.timestamp}</TableCell>
                        <TableCell>
                          {log.status === 'success' ? (
                            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Success
                            </Badge>
                          ) : (
                            <Badge className="bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                              <XCircle className="h-3 w-3 mr-1" />
                              Failed
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle>Compliance Status</CardTitle>
                  <CardDescription>Security standards adherence</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">SOC 2 Type II</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Compliant</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">ISO 27001</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Compliant</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <span className="font-medium">GDPR</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700">1 Issue</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">HIPAA</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Compliant</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle>Security Recommendations</CardTitle>
                  <CardDescription>Improve your security posture</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Enable MFA for all users</p>
                      <p className="text-xs text-slate-500 mt-1">8 users without MFA</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <Lock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Rotate access keys</p>
                      <p className="text-xs text-slate-500 mt-1">3 keys older than 90 days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Enable encryption at rest</p>
                      <p className="text-xs text-slate-500 mt-1">2 storage buckets unencrypted</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}