import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users_profile: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          role: 'admin' | 'devops' | 'user';
          organization_id: string | null;
          two_factor_enabled: boolean;
          created_at: string;
          updated_at: string;
        };
      };
      organizations: {
        Row: {
          id: string;
          name: string;
          owner_id: string | null;
          plan: 'free' | 'pro' | 'enterprise';
          created_at: string;
        };
      };
      cloud_resources: {
        Row: {
          id: string;
          user_id: string;
          organization_id: string;
          provider_id: string | null;
          resource_type: 'vm' | 'storage' | 'database' | 'kubernetes' | 'serverless' | 'network' | 'loadbalancer';
          resource_name: string;
          resource_id: string;
          region: string | null;
          status: 'running' | 'stopped' | 'terminated' | 'pending' | 'error';
          configuration: Json;
          tags: Json;
          created_at: string;
          updated_at: string;
        };
      };
    };
  };
}