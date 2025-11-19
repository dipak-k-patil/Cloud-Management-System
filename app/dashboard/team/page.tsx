"use client";

import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Users, UserPlus, Mail, Shield, MoveVertical as MoreVertical, CreditCard as Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const teamMembers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'admin',
    status: 'active',
    lastActive: '2 minutes ago',
    avatar: '/api/placeholder/32/32',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    role: 'devops',
    status: 'active',
    lastActive: '1 hour ago',
    avatar: '/api/placeholder/32/32',
  },
  {
    id: '3',
    name: 'Bob Wilson',
    email: 'bob.wilson@company.com',
    role: 'devops',
    status: 'active',
    lastActive: '3 hours ago',
    avatar: '/api/placeholder/32/32',
  },
  {
    id: '4',
    name: 'Alice Johnson',
    email: 'alice.johnson@company.com',
    role: 'user',
    status: 'active',
    lastActive: '1 day ago',
    avatar: '/api/placeholder/32/32',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie.brown@company.com',
    role: 'user',
    status: 'invited',
    lastActive: 'Never',
    avatar: '/api/placeholder/32/32',
  },
];

const roleColors = {
  admin: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  devops: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
  user: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
};

export default function TeamPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Team Management
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Manage team members and their access levels
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                <UserPlus className="h-4 w-4 mr-2" />
                Invite Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription>
                  Send an invitation to join your organization
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="colleague@company.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="role">Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin - Full access</SelectItem>
                      <SelectItem value="devops">DevOps - Manage resources</SelectItem>
                      <SelectItem value="user">User - View only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-gradient-to-r from-blue-600 to-cyan-600">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Invitation
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Members</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-slate-500 mt-1">1 pending invitation</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Admins</CardTitle>
              <Shield className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-slate-500 mt-1">Full access</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">DevOps</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-slate-500 mt-1">Resource management</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Users</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-slate-500 mt-1">View only</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Manage access and permissions for your team
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{member.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-600 dark:text-slate-400">
                      {member.email}
                    </TableCell>
                    <TableCell>
                      <Badge className={roleColors[member.role as keyof typeof roleColors]}>
                        {member.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {member.status === 'active' ? (
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                          Active
                        </Badge>
                      ) : (
                        <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">
                          Invited
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-slate-600 dark:text-slate-400">
                      {member.lastActive}
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
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Role
                          </DropdownMenuItem>
                          {member.status === 'invited' && (
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Resend Invitation
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove Member
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
            <CardDescription>
              Overview of access levels for each role
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={roleColors.admin}>Admin</Badge>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Full Access</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Create, modify, and delete all resources
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Manage team members and permissions
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Access billing and cost management
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Configure security and compliance settings
                  </li>
                </ul>
              </div>

              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={roleColors.devops}>DevOps</Badge>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Resource Management</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Create, modify, and delete resources
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Configure automation rules
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    View monitoring and logs
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-slate-400" />
                    Cannot manage billing or team members
                  </li>
                </ul>
              </div>

              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={roleColors.user}>User</Badge>
                  <span className="text-sm text-slate-600 dark:text-slate-400">View Only</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    View resources and metrics
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    Access monitoring dashboards
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-slate-400" />
                    Cannot create or modify resources
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-slate-400" />
                    Cannot access billing information
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}