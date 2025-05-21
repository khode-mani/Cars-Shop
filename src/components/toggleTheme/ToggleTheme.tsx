"use client"
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import './ThemeToggle.scss'
import { toggleThemeReduce } from '@/store/themeSlice';

export default function ThemeToggle() {


    const dispatch = useAppDispatch()
    const darkMode = useAppSelector(state=> state.theme.darkMode)

  return (

<label className="switch no-cursor">
    <input type="checkbox"
      checked={darkMode}
      onChange={()=>{dispatch(toggleThemeReduce());
      }}
    />
    <span className="slider no-cursor"></span>
</label>

  );
}


