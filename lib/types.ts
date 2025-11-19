export type UserRole = 'admin' | 'devops' | 'user';

export type CloudProvider = 'aws' | 'azure' | 'gcp' | 'digitalocean';

export type ResourceType = 'vm' | 'storage' | 'database' | 'kubernetes' | 'serverless' | 'network' | 'loadbalancer';

export type ResourceStatus = 'running' | 'stopped' | 'terminated' | 'pending' | 'error';

export type MetricType = 'cpu' | 'memory' | 'network_in' | 'network_out' | 'disk_read' | 'disk_write' | 'requests';

export type AlertSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: UserRole;
  organization_id?: string;
  two_factor_enabled: boolean;
}

export interface Organization {
  id: string;
  name: string;
  owner_id: string;
  plan: 'free' | 'pro' | 'enterprise';
  created_at: string;
}

export interface CloudResource {
  id: string;
  user_id: string;
  organization_id: string;
  provider_id?: string;
  provider_name: CloudProvider;
  resource_type: ResourceType;
  resource_name: string;
  resource_id: string;
  region?: string;
  status: ResourceStatus;
  configuration: Record<string, any>;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface ResourceMetric {
  id: string;
  resource_id: string;
  metric_type: MetricType;
  value: number;
  unit: string;
  timestamp: string;
}

export interface BillingRecord {
  id: string;
  organization_id: string;
  resource_id?: string;
  amount: number;
  currency: string;
  billing_period_start: string;
  billing_period_end: string;
  status: 'pending' | 'paid' | 'overdue';
  created_at: string;
}

export interface SecurityAlert {
  id: string;
  organization_id: string;
  alert_type: 'anomaly' | 'breach' | 'suspicious_activity' | 'compliance';
  severity: AlertSeverity;
  description: string;
  resource_id?: string;
  is_resolved: boolean;
  created_at: string;
  resolved_at?: string;
}

export interface AutomationRule {
  id: string;
  organization_id: string;
  rule_name: string;
  rule_type: 'auto_scaling' | 'backup' | 'shutdown' | 'alert' | 'cost_optimization';
  conditions: Record<string, any>;
  actions: Record<string, any>;
  is_enabled: boolean;
  created_at: string;
}