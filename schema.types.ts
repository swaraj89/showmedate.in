import {z} from 'zod'
import { PREPOSITIONS, SOURCE, SOURCE_UNIT } from './schema.config'

export type Prepositions = z.infer<typeof PREPOSITIONS>

export type SourceUnit = z.infer<typeof SOURCE_UNIT>

export type Source = z.infer<typeof SOURCE>

export interface Command {
    count?: number,
    sourceUnit: SourceUnit,
    preposition: Prepositions,
    source: Source
}

