import { type SchemaTypeDefinition } from 'sanity'
import journalPost from './journalPost'

export const schemaTypes = [journalPost]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
} 