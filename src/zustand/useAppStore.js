import {create} from 'zustand';


const useAppStore = create((set) => ({
	selectedOption: JSON.parse(localStorage.getItem("currentOption")) || "Me" ,
	setSelectedOption: (selectedOption) => set({ selectedOption }),
})
)

export default useAppStore;