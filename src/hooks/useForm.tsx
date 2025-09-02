import { ChangeEvent, useState } from "react";

export const useForm = <T extends object>(initState: T) => {
    const [ formulario, setFormulario ] = useState(initState)

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;
  if (type === "file" && "files" in e.target) {
    const files = (e.target as HTMLInputElement).files;
    setFormulario((prev) => ({
      ...prev,
      [name]: files?.[0] ?? "",
    }));
  } else {
    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};
        return{
            handleChange,
            ...formulario,
            setFormulario
        }
}
