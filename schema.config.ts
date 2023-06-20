import {z} from 'zod'

export const PREPOSITIONS = z.enum(['from', 'since'])

export const SOURCE_UNIT = z.enum(['days' , 'weeks' , 'months'])

export const SOURCE = z.enum(['yesterday' , 'today'  , 'tomorrow'])

export const NumberOfUnit = z.coerce.number().positive()

export const CommandSchema = {
    count: z.number().positive({
        message: "Not a valid number"
    }).optional(),
}