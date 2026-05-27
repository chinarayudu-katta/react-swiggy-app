import { useEffect, useState } from 'react'
import mockMenu from './mockData.json'

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)
  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = () => {
    setResInfo(mockMenu)
    console.log("Mock menu: ", mockMenu)
  };

  return resInfo;
}

export default useRestaurantMenu