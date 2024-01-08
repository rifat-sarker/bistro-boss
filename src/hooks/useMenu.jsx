import { useEffect, useState } from "react";


const useMenu = () => {
    const [recommend ,setRecommend] = useState([])
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch("http://localhost:5000/menu")
        .then((res) => res.json())
        .then((data) => {
            setMenu(data)
            setRecommend(data)
            setLoading(false)
        })
    }, []);
    return [recommend,menu,loading]
};

export default useMenu;