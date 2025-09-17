import { useState } from "react";

export const useForm = <T extends object>(initState: T) => {
  const [formulario, setFormulario] = useState(initState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value, checked, files } = e.target as HTMLInputElement;

    if (type === "file" && files) {
      const fileArray = Array.from(files);

      // Convertimos cada archivo a base64
      const readers = fileArray.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file); // convierte en base64
        });
      });

      Promise.all(readers).then((base64Images) => {
        setFormulario((prev) => ({
          ...prev,
          [name]: base64Images, // guardamos como string[]
        }));
      });
    } else if (type === "checkbox") {
      setFormulario((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormulario((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return {
    handleChange,
    ...formulario,
    setFormulario,
  };
};
