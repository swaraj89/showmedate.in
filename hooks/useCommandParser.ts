import { NumberOfUnit, PREPOSITIONS, SOURCE, SOURCE_UNIT } from "@/schema.config"
import { Command } from "@/schema.types"

const useCommandParser = (query: Array<string>): Command | Error => {
    try{
        query.forEach((part, index) => {
            if(index === 0) NumberOfUnit.parse(part)
            if(index === 1) SOURCE_UNIT.parse(part)
            if(index === 2) PREPOSITIONS.parse(part)
            if(index === 3) SOURCE.parse(part)
        })
    }catch(error){
        // throw new Error(error.message)
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