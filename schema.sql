-- Phase 1: Supabase Database Schema

-- Table: magazine_content
CREATE TABLE magazine_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id VARCHAR(255) NOT NULL,
  payload JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: template_mappings
CREATE TABLE template_mappings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id VARCHAR(255) UNIQUE NOT NULL,
  layout_archetype VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Initial Seed Data for dynamic routing
INSERT INTO template_mappings (category_id, layout_archetype) VALUES
('primary5', 'RosterGrid'),
('speeches', 'FlowingArticle'),
('interviews', 'DialogueBlock'),
('gallery', 'VisualCollage');
