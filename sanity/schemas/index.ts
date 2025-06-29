import { type SchemaTypeDefinition } from 'sanity'
import journalPost from './journalPost'
import workProject from './workProject'

export const schemaTypes = [journalPost, workProject]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
} 