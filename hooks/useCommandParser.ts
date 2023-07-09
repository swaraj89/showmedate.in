import { NumberOfUnit, PREPOSITIONS, SOURCE, SOURCE_UNIT } from "@/schema.config"
import { Command } from "@/schema.types"
import { ZodError, unknown } from "zod"

const useCommandParser = (query: Array<string>): Command | ZodError => {
    try{
        query.forEach((part, index) => {
            if(index === 0) {
                const result = NumberOfUnit.safeParse(part)
                if(!result.success) throw new Error(result.error.issues[0].message)
            }

            // if(index === 1) SOURCE_UNIT.parse(part)
            // if(index === 2) PREPOSITIONS.parse(part)
            // if(index === 3) SOURCE.parse(part)
        })
    }catch(error) {
        // console.log(error.message)
        // throw new Error(error.message as string)
    }
    
    // Expect a return in this format
    return {
        count: 90,
        sourceUnit: 'days',
        preposition: 'since',
        source: 'today',
    }
}

export default useCommandParser