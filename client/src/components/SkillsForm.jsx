import React, {useState} from 'react'

const SkillsForm = ({data, onChange}) => {

    const [newSkill, setNewSkill] = useState("");

    const addSkill = () => {
        if(newSkill.trim() && !data.includes(newSkill.trim())) {
            onChange([...data, newSkill.trim()])
            setNewSkill("");
        }
    }

    const removeSkill = (indexToRemove)=> {
        onChange(data.filter((_, index)=> index !== indexToRemove))
    }

  return (
    <div>
      
    </div>
  )
}

export default SkillsForm
